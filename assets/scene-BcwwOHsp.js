(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="170",kc=0,Ha=1,Hc=2,Qo=1,tc=2,mn=3,Nn=0,Pe=1,en=2,Ln=0,Mi=1,Ga=2,Va=3,Wa=4,Gc=5,qn=100,Vc=101,Wc=102,Xc=103,qc=104,Yc=200,Kc=201,Jc=202,Zc=203,Rr=204,Cr=205,$c=206,jc=207,Qc=208,tl=209,el=210,nl=211,il=212,sl=213,rl=214,Pr=0,Dr=1,Ir=2,wi=3,Lr=4,Ur=5,Nr=6,Fr=7,ec=0,al=1,ol=2,Un=0,cl=1,ll=2,dl=3,nc=4,hl=5,ul=6,fl=7,ic=300,Ei=301,bi=302,Or=303,zr=304,Vs=306,Br=1e3,Kn=1001,kr=1002,Be=1003,pl=1004,as=1005,nn=1006,Ys=1007,Jn=1008,vn=1009,sc=1010,rc=1011,$i=1012,_a=1013,$n=1014,sn=1015,Qi=1016,xa=1017,va=1018,Ti=1020,ac=35902,oc=1021,cc=1022,$e=1023,lc=1024,dc=1025,Si=1026,Ai=1027,Ma=1028,Sa=1029,hc=1030,ya=1031,wa=1033,Ls=33776,Us=33777,Ns=33778,Fs=33779,Hr=35840,Gr=35841,Vr=35842,Wr=35843,Xr=36196,qr=37492,Yr=37496,Kr=37808,Jr=37809,Zr=37810,$r=37811,jr=37812,Qr=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,Os=36492,ca=36494,la=36495,uc=36283,da=36284,ha=36285,ua=36286,ml=3200,gl=3201,fc=0,_l=1,In="",Ne="srgb",Ci="srgb-linear",Ws="linear",se="srgb",ni=7680,Xa=519,xl=512,vl=513,Ml=514,pc=515,Sl=516,yl=517,wl=518,El=519,qa=35044,Ya="300 es",_n=2e3,Bs=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,fa=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function bl(n,t){return(n%t+t)%t}function Js(n,t,e){return(1-e)*n+e*t}function zi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,s,r,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],p=i[5],x=i[8],v=s[0],_=s[3],m=s[6],A=s[1],T=s[4],S=s[7],O=s[2],P=s[5],D=s[8];return r[0]=a*v+o*A+l*O,r[3]=a*_+o*T+l*P,r[6]=a*m+o*S+l*D,r[1]=c*v+d*A+u*O,r[4]=c*_+d*T+u*P,r[7]=c*m+d*S+u*D,r[2]=h*v+p*A+x*O,r[5]=h*_+p*T+x*P,r[8]=h*m+p*S+x*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,h=o*l-d*r,p=c*r-a*l,x=e*u+i*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=u*v,t[1]=(s*c-d*i)*v,t[2]=(o*i-s*a)*v,t[3]=h*v,t[4]=(d*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zs.makeScale(t,e)),this}rotate(t){return this.premultiply(Zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Bt;function mc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tl(){const n=ks("canvas");return n.style.display="block",n}const Ka={};function Yi(n){n in Ka||(Ka[n]=!0,console.warn(n))}function Al(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Rl(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cl(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=xn(n.r),n.g=xn(n.g),n.b=xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===In?Ws:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ja=[.64,.33,.3,.6,.15,.06],Za=[.2126,.7152,.0722],$a=[.3127,.329],ja=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Ci]:{primaries:Ja,whitePoint:$a,transfer:Ws,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:Za,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Ja,whitePoint:$a,transfer:se,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:Za,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let ii;class Pl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=ks("canvas")),ii.width=t.width,ii.height=t.height;const i=ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ks("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xn(e[i]/255)*255):e[i]=xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dl=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($s(s[a].image)):r.push($s(s[a]))}else r=$s(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function $s(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Il=0;class Ae extends Pi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,i=Kn,s=Kn,r=nn,a=Jn,o=$e,l=vn,c=Ae.DEFAULT_ANISOTROPY,d=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=ts(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=ic;Ae.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],x=l[9],v=l[2],_=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(x-_)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(x+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(p+1)/2,O=(m+1)/2,P=(d+h)/4,D=(u+v)/4,L=(x+_)/4;return T>S&&T>O?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=P/i,r=D/i):S>O?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=L/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=D/r,s=L/r),this.set(i,s,r,e),this}let A=Math.sqrt((_-x)*(_-x)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(A)<.001&&(A=1),this.x=(_-x)/A,this.y=(u-v)/A,this.z=(h-d)/A,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ll extends Pi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ae(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Ll{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class _c extends Ae{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ul extends Ae{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3];const h=r[a+0],p=r[a+1],x=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=x,t[e+3]=v;return}if(u!==v||l!==h||c!==p||d!==x){let _=1-o;const m=l*h+c*p+d*x+u*v,A=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const O=Math.sqrt(T),P=Math.atan2(O,m*A);_=Math.sin(_*P)/O,o=Math.sin(o*P)/O}const S=o*A;if(l=l*_+h*S,c=c*_+p*S,d=d*_+x*S,u=u*_+v*S,_===1-o){const O=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=O,c*=O,d*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+d*u+l*p-c*h,t[e+1]=l*x+d*h+c*u-o*p,t[e+2]=c*x+d*p+o*h-l*u,t[e+3]=d*x-o*u-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),h=l(i/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*p*x,this._y=c*p*u-h*d*x,this._z=c*d*x+h*p*u,this._w=c*d*u-h*p*x;break;case"YXZ":this._x=h*d*u+c*p*x,this._y=c*p*u-h*d*x,this._z=c*d*x-h*p*u,this._w=c*d*u+h*p*x;break;case"ZXY":this._x=h*d*u-c*p*x,this._y=c*p*u+h*d*x,this._z=c*d*x+h*p*u,this._w=c*d*u-h*p*x;break;case"ZYX":this._x=h*d*u-c*p*x,this._y=c*p*u+h*d*x,this._z=c*d*x-h*p*u,this._w=c*d*u+h*p*x;break;case"YZX":this._x=h*d*u+c*p*x,this._y=c*p*u+h*d*x,this._z=c*d*x-h*p*u,this._w=c*d*u-h*p*x;break;case"XZY":this._x=h*d*u-c*p*x,this._y=c*p*u-h*d*x,this._z=c*d*x+h*p*u,this._w=c*d*u+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=i+o+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(to.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(to.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),d=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return js.copy(this).projectOnVector(t),this.sub(js)}reflect(t){return this.sub(js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new R,to=new es;class Qn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),os.copy(i.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),cs.subVectors(this.max,Bi),si.subVectors(t.a,Bi),ri.subVectors(t.b,Bi),ai.subVectors(t.c,Bi),En.subVectors(ri,si),bn.subVectors(ai,ri),On.subVectors(si,ai);let e=[0,-En.z,En.y,0,-bn.z,bn.y,0,-On.z,On.y,En.z,0,-En.x,bn.z,0,-bn.x,On.z,0,-On.x,-En.y,En.x,0,-bn.y,bn.x,0,-On.y,On.x,0];return!Qs(e,si,ri,ai,cs)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,si,ri,ai,cs))?!1:(ls.crossVectors(En,bn),e=[ls.x,ls.y,ls.z],Qs(e,si,ri,ai,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new R,new R,new R,new R,new R,new R,new R,new R],Xe=new R,os=new Qn,si=new R,ri=new R,ai=new R,En=new R,bn=new R,On=new R,Bi=new R,cs=new R,ls=new R,zn=new R;function Qs(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zn.fromArray(n,r);const o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),d=i.dot(zn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Nl=new Qn,ki=new R,tr=new R;class Di{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nl.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ki,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(tr)),this.expandByPoint(ki.copy(t.center).sub(tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new R,er=new R,ds=new R,Tn=new R,nr=new R,hs=new R,ir=new R;class xc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){er.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(er);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ds),o=Tn.dot(this.direction),l=-Tn.dot(ds),c=Tn.lengthSq(),d=Math.abs(1-a*a);let u,h,p,x;if(d>0)if(u=a*l-o,h=a*o-l,x=r*d,u>=0)if(h>=-x)if(h<=x){const v=1/d;u*=v,h*=v,p=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h<=-x?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c):h<=x?(u=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(er).addScaledVector(ds,h),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const i=hn.dot(this.direction),s=hn.dot(hn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,i,s,r){nr.subVectors(e,t),hs.subVectors(i,t),ir.crossVectors(nr,hs);let a=this.direction.dot(ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const l=o*this.direction.dot(hs.crossVectors(Tn,hs));if(l<0)return null;const c=o*this.direction.dot(nr.cross(Tn));if(c<0||l+c>a)return null;const d=-o*Tn.dot(ir);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,s,r,a,o,l,c,d,u,h,p,x,v,_){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,d,u,h,p,x,v,_)}set(t,e,i,s,r,a,o,l,c,d,u,h,p,x,v,_){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=p,m[7]=x,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),a=1/oi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const h=a*d,p=a*u,x=o*d,v=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,p=l*u,x=c*d,v=c*u;e[0]=h+v*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=p*o-x,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,p=l*u,x=c*d,v=c*u;e[0]=h-v*o,e[4]=-a*u,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*d,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,p=a*u,x=o*d,v=o*u;e[0]=l*d,e[4]=x*c-p,e[8]=h*c+v,e[1]=l*u,e[5]=v*c+h,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,x=o*l,v=o*c;e[0]=l*d,e[4]=v-h*u,e[8]=x*u+p,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=p*u+x,e[10]=h-v*u}else if(t.order==="XZY"){const h=a*l,p=a*c,x=o*l,v=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+v,e[5]=a*d,e[9]=p*u-x,e[2]=x*u-p,e[6]=o*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fl,t,Ol)}lookAt(t,e,i){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),An.crossVectors(i,Oe),An.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),An.crossVectors(i,Oe)),An.normalize(),us.crossVectors(Oe,An),s[0]=An.x,s[4]=us.x,s[8]=Oe.x,s[1]=An.y,s[5]=us.y,s[9]=Oe.y,s[2]=An.z,s[6]=us.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],p=i[13],x=i[2],v=i[6],_=i[10],m=i[14],A=i[3],T=i[7],S=i[11],O=i[15],P=s[0],D=s[4],L=s[8],b=s[12],y=s[1],I=s[5],W=s[9],H=s[13],Y=s[2],et=s[6],J=s[10],rt=s[14],X=s[3],lt=s[7],gt=s[11],Tt=s[15];return r[0]=a*P+o*y+l*Y+c*X,r[4]=a*D+o*I+l*et+c*lt,r[8]=a*L+o*W+l*J+c*gt,r[12]=a*b+o*H+l*rt+c*Tt,r[1]=d*P+u*y+h*Y+p*X,r[5]=d*D+u*I+h*et+p*lt,r[9]=d*L+u*W+h*J+p*gt,r[13]=d*b+u*H+h*rt+p*Tt,r[2]=x*P+v*y+_*Y+m*X,r[6]=x*D+v*I+_*et+m*lt,r[10]=x*L+v*W+_*J+m*gt,r[14]=x*b+v*H+_*rt+m*Tt,r[3]=A*P+T*y+S*Y+O*X,r[7]=A*D+T*I+S*et+O*lt,r[11]=A*L+T*W+S*J+O*gt,r[15]=A*b+T*H+S*rt+O*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],p=t[14],x=t[3],v=t[7],_=t[11],m=t[15];return x*(+r*l*u-s*c*u-r*o*h+i*c*h+s*o*p-i*l*p)+v*(+e*l*p-e*c*h+r*a*h-s*a*p+s*c*d-r*l*d)+_*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*d-i*c*d)+m*(-s*o*d-e*l*u+e*o*h+s*a*u-i*a*h+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],p=t[11],x=t[12],v=t[13],_=t[14],m=t[15],A=u*_*c-v*h*c+v*l*p-o*_*p-u*l*m+o*h*m,T=x*h*c-d*_*c-x*l*p+a*_*p+d*l*m-a*h*m,S=d*v*c-x*u*c+x*o*p-a*v*p-d*o*m+a*u*m,O=x*u*l-d*v*l-x*o*h+a*v*h+d*o*_-a*u*_,P=e*A+i*T+s*S+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=A*D,t[1]=(v*h*r-u*_*r-v*s*p+i*_*p+u*s*m-i*h*m)*D,t[2]=(o*_*r-v*l*r+v*s*c-i*_*c-o*s*m+i*l*m)*D,t[3]=(u*l*r-o*h*r-u*s*c+i*h*c+o*s*p-i*l*p)*D,t[4]=T*D,t[5]=(d*_*r-x*h*r+x*s*p-e*_*p-d*s*m+e*h*m)*D,t[6]=(x*l*r-a*_*r-x*s*c+e*_*c+a*s*m-e*l*m)*D,t[7]=(a*h*r-d*l*r+d*s*c-e*h*c-a*s*p+e*l*p)*D,t[8]=S*D,t[9]=(x*u*r-d*v*r-x*i*p+e*v*p+d*i*m-e*u*m)*D,t[10]=(a*v*r-x*o*r+x*i*c-e*v*c-a*i*m+e*o*m)*D,t[11]=(d*o*r-a*u*r-d*i*c+e*u*c+a*i*p-e*o*p)*D,t[12]=O*D,t[13]=(d*v*s-x*u*s+x*i*h-e*v*h-d*i*_+e*u*_)*D,t[14]=(x*o*s-a*v*s-x*i*l+e*v*l+a*i*_-e*o*_)*D,t[15]=(a*u*s-d*o*s+d*i*l-e*u*l-a*i*h+e*o*h)*D,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,u=o+o,h=r*c,p=r*d,x=r*u,v=a*d,_=a*u,m=o*u,A=l*c,T=l*d,S=l*u,O=i.x,P=i.y,D=i.z;return s[0]=(1-(v+m))*O,s[1]=(p+S)*O,s[2]=(x-T)*O,s[3]=0,s[4]=(p-S)*P,s[5]=(1-(h+m))*P,s[6]=(_+A)*P,s[7]=0,s[8]=(x+T)*D,s[9]=(_-A)*D,s[10]=(1-(h+v))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const a=oi.set(s[4],s[5],s[6]).length(),o=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const c=1/r,d=1/a,u=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=d,qe.elements[5]*=d,qe.elements[6]*=d,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=_n){const l=this.elements,c=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),h=(i+s)/(i-s);let p,x;if(o===_n)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Bs)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=_n){const l=this.elements,c=1/(e-t),d=1/(i-s),u=1/(a-r),h=(e+t)*c,p=(i+s)*d;let x,v;if(o===_n)x=(a+r)*u,v=-2*u;else if(o===Bs)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const oi=new R,qe=new ae,Fl=new R(0,0,0),Ol=new R(1,1,1),An=new R,us=new R,Oe=new R,eo=new ae,no=new es;class an{constructor(t=0,e=0,i=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return eo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return no.setFromEuler(this),this.setFromQuaternion(no,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zl=0;const io=new R,ci=new es,un=new ae,fs=new R,Hi=new R,Bl=new R,kl=new es,so=new R(1,0,0),ro=new R(0,1,0),ao=new R(0,0,1),oo={type:"added"},Hl={type:"removed"},li={type:"childadded",child:null},sr={type:"childremoved",child:null};class ve extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new R,e=new an,i=new es,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Bt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(so,t)}rotateY(t){return this.rotateOnAxis(ro,t)}rotateZ(t){return this.rotateOnAxis(ao,t)}translateOnAxis(t,e){return io.copy(t).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(so,t)}translateY(t){return this.translateOnAxis(ro,t)}translateZ(t){return this.translateOnAxis(ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fs.copy(t):fs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Hi,fs,this.up):un.lookAt(fs,Hi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(un),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oo),li.child=t,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hl),sr.child=t,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oo),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,Bl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,kl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ve.DEFAULT_UP=new R(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new R,fn=new R,rr=new R,pn=new R,di=new R,hi=new R,co=new R,ar=new R,or=new R,cr=new R,lr=new ge,dr=new ge,hr=new ge;class Ze{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ye.subVectors(t,e),s.cross(Ye);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ye.subVectors(s,e),fn.subVectors(i,e),rr.subVectors(t,e);const a=Ye.dot(Ye),o=Ye.dot(fn),l=Ye.dot(rr),c=fn.dot(fn),d=fn.dot(rr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,p=(c*l-o*d)*h,x=(a*d-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return lr.setScalar(0),dr.setScalar(0),hr.setScalar(0),lr.fromBufferAttribute(t,e),dr.fromBufferAttribute(t,i),hr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(lr,r.x),a.addScaledVector(dr,r.y),a.addScaledVector(hr,r.z),a}static isFrontFacing(t,e,i,s){return Ye.subVectors(i,e),fn.subVectors(t,e),Ye.cross(fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ye.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,i),hi.subVectors(r,i),ar.subVectors(t,i);const l=di.dot(ar),c=hi.dot(ar);if(l<=0&&c<=0)return e.copy(i);or.subVectors(t,s);const d=di.dot(or),u=hi.dot(or);if(d>=0&&u<=d)return e.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(di,a);cr.subVectors(t,r);const p=di.dot(cr),x=hi.dot(cr);if(x>=0&&p<=x)return e.copy(r);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(hi,o);const _=d*x-p*u;if(_<=0&&u-d>=0&&p-x>=0)return co.subVectors(r,s),o=(u-d)/(u-d+(p-x)),e.copy(s).addScaledVector(co,o);const m=1/(_+v+h);return a=v*m,o=h*m,e.copy(i).addScaledVector(di,a).addScaledVector(hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function ur(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=bl(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ur(a,r,t+1/3),this.g=ur(a,r,t),this.b=ur(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const i=Mc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Zt.fromWorkingColorSpace(be.copy(this),t),Math.round(Te(be.r*255,0,255))*65536+Math.round(Te(be.g*255,0,255))*256+Math.round(Te(be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(be.copy(this),e);const i=be.r,s=be.g,r=be.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ne){Zt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,i=be.g,s=be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(ps);const i=Js(Rn.h,ps.h,e),s=Js(Rn.s,ps.s,e),r=Js(Rn.l,ps.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Gt;Gt.NAMES=Mc;let Gl=0;class Ii extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=ts(),this.name="",this.blending=Mi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Cr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rr&&(i.blendSrc=this.blendSrc),this.blendDst!==Cr&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ea extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new R,ms=new At;class ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qa,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class Sc extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yc extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Vl=0;const Ge=new ae,fr=new ve,ui=new R,ze=new Qn,Gi=new Qn,ye=new R;class De extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?yc:Sc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,i){return Ge.makeTranslation(t,e,i),this.applyMatrix4(Ge),this}scale(t,e,i){return Ge.makeScale(t,e,i),this.applyMatrix4(Ge),this}lookAt(t){return fr.lookAt(t),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ze.min,Gi.min),ze.expandByPoint(ye),ye.addVectors(ze.max,Gi.max),ze.expandByPoint(ye)):(ze.expandByPoint(Gi.min),ze.expandByPoint(Gi.max))}ze.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ye.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(t,c),ye.add(ui)),s=Math.max(s,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new R,l[L]=new R;const c=new R,d=new R,u=new R,h=new At,p=new At,x=new At,v=new R,_=new R;function m(L,b,y){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,b),u.fromBufferAttribute(i,y),h.fromBufferAttribute(r,L),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,y),d.sub(c),u.sub(c),p.sub(h),x.sub(h);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(v.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(I),_.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(I),o[L].add(v),o[b].add(v),o[y].add(v),l[L].add(_),l[b].add(_),l[y].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let L=0,b=A.length;L<b;++L){const y=A[L],I=y.start,W=y.count;for(let H=I,Y=I+W;H<Y;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const T=new R,S=new R,O=new R,P=new R;function D(L){O.fromBufferAttribute(s,L),P.copy(O);const b=o[L];T.copy(b),T.sub(O.multiplyScalar(O.dot(b))).normalize(),S.crossVectors(P,b);const I=S.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,I)}for(let L=0,b=A.length;L<b;++L){const y=A[L],I=y.start,W=y.count;for(let H=I,Y=I+W;H<Y;H+=3)D(t.getX(H+0)),D(t.getX(H+1)),D(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,d=new R,u=new R;if(t)for(let h=0,p=t.count;h<p;h+=3){const x=t.getX(h+0),v=t.getX(h+1),_=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,_),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let p=0,x=0;for(let v=0,_=l.length;v<_;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let m=0;m<d;m++)h[x++]=c[p++]}return new ke(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new ae,Bn=new xc,gs=new Di,ho=new R,_s=new R,xs=new R,vs=new R,pr=new R,Ms=new R,uo=new R,Ss=new R;class le extends ve{constructor(t=new De,e=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(pr.fromBufferAttribute(u,t),a?Ms.addScaledVector(pr,d):Ms.addScaledVector(pr.sub(e),d))}e.add(Ms)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(gs.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(gs,ho)===null||Bn.origin.distanceToSquared(ho)>(t.far-t.near)**2))&&(lo.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(lo),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){const _=h[x],m=a[_.materialIndex],A=Math.max(_.start,p.start),T=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let S=A,O=T;S<O;S+=3){const P=o.getX(S),D=o.getX(S+1),L=o.getX(S+2);s=ys(this,m,t,i,c,d,u,P,D,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let _=x,m=v;_<m;_+=3){const A=o.getX(_),T=o.getX(_+1),S=o.getX(_+2);s=ys(this,a,t,i,c,d,u,A,T,S),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){const _=h[x],m=a[_.materialIndex],A=Math.max(_.start,p.start),T=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=A,O=T;S<O;S+=3){const P=S,D=S+1,L=S+2;s=ys(this,m,t,i,c,d,u,P,D,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=x,m=v;_<m;_+=3){const A=_,T=_+1,S=_+2;s=ys(this,a,t,i,c,d,u,A,T,S),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function Wl(n,t,e,i,s,r,a,o){let l;if(t.side===Pe?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Nn,o),l===null)return null;Ss.copy(o),Ss.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ss);return c<e.near||c>e.far?null:{distance:c,point:Ss.clone(),object:n}}function ys(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,_s),n.getVertexPosition(l,xs),n.getVertexPosition(c,vs);const d=Wl(n,t,e,i,_s,xs,vs,uo);if(d){const u=new R;Ze.getBarycoord(uo,_s,xs,vs,u),s&&(d.uv=Ze.getInterpolatedAttribute(s,o,l,c,u,new At)),r&&(d.uv1=Ze.getInterpolatedAttribute(r,o,l,c,u,new At)),a&&(d.normal=Ze.getInterpolatedAttribute(a,o,l,c,u,new R),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};Ze.getNormal(_s,xs,vs,h.normal),d.face=h,d.barycoord=u}return d}class E extends De{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,p=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(u,2));function x(v,_,m,A,T,S,O,P,D,L,b){const y=S/D,I=O/L,W=S/2,H=O/2,Y=P/2,et=D+1,J=L+1;let rt=0,X=0;const lt=new R;for(let gt=0;gt<J;gt++){const Tt=gt*I-H;for(let Vt=0;Vt<et;Vt++){const ne=Vt*y-W;lt[v]=ne*A,lt[_]=Tt*T,lt[m]=Y,c.push(lt.x,lt.y,lt.z),lt[v]=0,lt[_]=0,lt[m]=P>0?1:-1,d.push(lt.x,lt.y,lt.z),u.push(Vt/D),u.push(1-gt/L),rt+=1}}for(let gt=0;gt<L;gt++)for(let Tt=0;Tt<D;Tt++){const Vt=h+Tt+et*gt,ne=h+Tt+et*(gt+1),j=h+(Tt+1)+et*(gt+1),at=h+(Tt+1)+et*gt;l.push(Vt,ne,at),l.push(ne,j,at),X+=6}o.addGroup(p,X,b),p+=X,h+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new E(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ce(n){const t={};for(let e=0;e<n.length;e++){const i=Ri(n[e]);for(const s in i)t[s]=i[s]}return t}function Xl(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const ql={clone:Ri,merge:Ce};var Yl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yl,this.fragmentShader=Kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=Xl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ec extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new R,fo=new At,po=new At;class Je extends Ec{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,fo,po),e.subVectors(po,fo)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,pi=1;class Jl extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(fi,pi,t,e);s.layers=this.layers,this.add(s);const r=new Je(fi,pi,t,e);r.layers=this.layers,this.add(r);const a=new Je(fi,pi,t,e);a.layers=this.layers,this.add(a);const o=new Je(fi,pi,t,e);o.layers=this.layers,this.add(o);const l=new Je(fi,pi,t,e);l.layers=this.layers,this.add(l);const c=new Je(fi,pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(u,h,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class bc extends Ae{constructor(t,e,i,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zl extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new E(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:Ln});r.uniforms.tEquirect.value=e;const a=new le(s,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=nn),new Jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const mr=new R,$l=new R,jl=new Bt;class Vn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=mr.subVectors(i,e).cross($l.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(mr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jl.getNormalMatrix(t),s=this.coplanarPoint(mr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Di,ws=new R;class ba{constructor(t=new Vn,e=new Vn,i=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_n){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],p=s[8],x=s[9],v=s[10],_=s[11],m=s[12],A=s[13],T=s[14],S=s[15];if(i[0].setComponents(l-r,h-c,_-p,S-m).normalize(),i[1].setComponents(l+r,h+c,_+p,S+m).normalize(),i[2].setComponents(l+a,h+d,_+x,S+A).normalize(),i[3].setComponents(l-a,h-d,_-x,S-A).normalize(),i[4].setComponents(l-o,h-u,_-v,S-T).normalize(),e===_n)i[5].setComponents(l+o,h+u,_+v,S+T).normalize();else if(e===Bs)i[5].setComponents(o,u,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ws.x=s.normal.x>0?t.max.x:t.min.x,ws.y=s.normal.y>0?t.max.y:t.min.y,ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ql(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<u.length;p++){const x=u[h],v=u[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++h,u[h]=v)}u.length=h+1;for(let p=0,x=u.length;p<x;p++){const v=u[p];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Li extends De{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=t/o,h=e/l,p=[],x=[],v=[],_=[];for(let m=0;m<d;m++){const A=m*h-a;for(let T=0;T<c;T++){const S=T*u-r;x.push(S,-A,0),v.push(0,0,1),_.push(T/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<o;A++){const T=A+c*m,S=A+c*(m+1),O=A+1+c*(m+1),P=A+1+c*m;p.push(T,S,P),p.push(S,O,P)}this.setIndex(p),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
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
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
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
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fd=`#ifdef USE_IRIDESCENCE
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
#endif`,pd=`#ifdef USE_BUMPMAP
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wd=`#define PI 3.141592653589793
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
#endif`,bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
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
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
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
#endif`,jd=`struct PhysicalMaterial {
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
}`,Qd=`
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
#endif`,th=`#if defined( RE_IndirectDiffuse )
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
#endif`,eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ih=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ah=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lh=`#if defined( USE_POINTS_UV )
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
#endif`,dh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mh=`#ifdef USE_MORPHTARGETS
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
#endif`,gh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
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
#endif`,yh=`#ifdef USE_NORMALMAP
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
#endif`,wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Th=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ah=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ph=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ih=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zh=`float getShadowMask() {
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
}`,Bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kh=`#ifdef USE_SKINNING
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
#endif`,Hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gh=`#ifdef USE_SKINNING
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
#endif`,Vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yh=`#ifdef USE_TRANSMISSION
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
#endif`,Kh=`#ifdef USE_TRANSMISSION
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
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tu=`uniform sampler2D t2D;
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
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iu=`varying vec3 vWorldDirection;
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
}`,au=`#if DEPTH_PACKING == 3200
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
}`,ou=`#define DISTANCE
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
}`,cu=`#define DISTANCE
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
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,du=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`uniform float scale;
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
}`,uu=`uniform vec3 diffuse;
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
}`,fu=`#include <common>
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
}`,pu=`uniform vec3 diffuse;
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
}`,mu=`#define LAMBERT
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
}`,gu=`#define LAMBERT
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
}`,_u=`#define MATCAP
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
}`,xu=`#define MATCAP
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
}`,vu=`#define NORMAL
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
}`,Mu=`#define NORMAL
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
}`,yu=`#define PHONG
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
}`,wu=`#define STANDARD
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
}`,bu=`#define TOON
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
}`,Tu=`#define TOON
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
}`,Au=`uniform float size;
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Cu=`#include <common>
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
}`,Pu=`uniform vec3 color;
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
}`,Du=`uniform float rotation;
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
}`,Iu=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:td,alphahash_pars_fragment:ed,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:sd,alphatest_pars_fragment:rd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:cd,batching_vertex:ld,begin_vertex:dd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:xd,color_fragment:vd,color_pars_fragment:Md,color_pars_vertex:Sd,color_vertex:yd,common:wd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:bd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ad,emissivemap_fragment:Rd,emissivemap_pars_fragment:Cd,colorspace_fragment:Pd,colorspace_pars_fragment:Dd,envmap_fragment:Id,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Ud,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:qd,envmap_vertex:Fd,fog_vertex:Od,fog_pars_vertex:zd,fog_fragment:Bd,fog_pars_fragment:kd,gradientmap_pars_fragment:Hd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:Kd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Zd,lights_physical_fragment:$d,lights_physical_pars_fragment:jd,lights_fragment_begin:Qd,lights_fragment_maps:th,lights_fragment_end:eh,logdepthbuf_fragment:nh,logdepthbuf_pars_fragment:ih,logdepthbuf_pars_vertex:sh,logdepthbuf_vertex:rh,map_fragment:ah,map_pars_fragment:oh,map_particle_fragment:ch,map_particle_pars_fragment:lh,metalnessmap_fragment:dh,metalnessmap_pars_fragment:hh,morphinstance_vertex:uh,morphcolor_vertex:fh,morphnormal_vertex:ph,morphtarget_pars_vertex:mh,morphtarget_vertex:gh,normal_fragment_begin:_h,normal_fragment_maps:xh,normal_pars_fragment:vh,normal_pars_vertex:Mh,normal_vertex:Sh,normalmap_pars_fragment:yh,clearcoat_normal_fragment_begin:wh,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:bh,iridescence_pars_fragment:Th,opaque_fragment:Ah,packing:Rh,premultiplied_alpha_fragment:Ch,project_vertex:Ph,dithering_fragment:Dh,dithering_pars_fragment:Ih,roughnessmap_fragment:Lh,roughnessmap_pars_fragment:Uh,shadowmap_pars_fragment:Nh,shadowmap_pars_vertex:Fh,shadowmap_vertex:Oh,shadowmask_pars_fragment:zh,skinbase_vertex:Bh,skinning_pars_vertex:kh,skinning_vertex:Hh,skinnormal_vertex:Gh,specularmap_fragment:Vh,specularmap_pars_fragment:Wh,tonemapping_fragment:Xh,tonemapping_pars_fragment:qh,transmission_fragment:Yh,transmission_pars_fragment:Kh,uv_pars_fragment:Jh,uv_pars_vertex:Zh,uv_vertex:$h,worldpos_vertex:jh,background_vert:Qh,background_frag:tu,backgroundCube_vert:eu,backgroundCube_frag:nu,cube_vert:iu,cube_frag:su,depth_vert:ru,depth_frag:au,distanceRGBA_vert:ou,distanceRGBA_frag:cu,equirect_vert:lu,equirect_frag:du,linedashed_vert:hu,linedashed_frag:uu,meshbasic_vert:fu,meshbasic_frag:pu,meshlambert_vert:mu,meshlambert_frag:gu,meshmatcap_vert:_u,meshmatcap_frag:xu,meshnormal_vert:vu,meshnormal_frag:Mu,meshphong_vert:Su,meshphong_frag:yu,meshphysical_vert:wu,meshphysical_frag:Eu,meshtoon_vert:bu,meshtoon_frag:Tu,points_vert:Au,points_frag:Ru,shadow_vert:Cu,shadow_frag:Pu,sprite_vert:Du,sprite_frag:Iu},ct={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},tn={basic:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ce([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ce([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ce([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ce([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ce([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ce([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ce([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ce([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ce([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ce([ct.lights,ct.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};tn.physical={uniforms:Ce([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Es={r:0,b:0,g:0},Hn=new an,Lu=new ae;function Uu(n,t,e,i,s,r,a){const o=new Gt(0);let l=r===!0?0:1,c,d,u=null,h=0,p=null;function x(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function v(A){let T=!1;const S=x(A);S===null?m(o,l):S&&S.isColor&&(m(S,1),T=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(A,T){const S=x(T);S&&(S.isCubeTexture||S.mapping===Vs)?(d===void 0&&(d=new le(new E(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ri(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Hn.copy(T.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Lu.makeRotationFromEuler(Hn)),d.material.toneMapped=Zt.getTransfer(S.colorSpace)!==se,(u!==S||h!==S.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=S,h=S.version,p=n.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new le(new Li(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ri(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(S.colorSpace)!==se,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,T){A.getRGB(Es,wc(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(o,l)},render:v,addToRenderList:_}}function Nu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(y,I,W,H,Y){let et=!1;const J=u(H,W,I);r!==J&&(r=J,c(r.object)),et=p(y,H,W,Y),et&&x(y,H,W,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,S(y,I,W,H),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function u(y,I,W){const H=W.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let et=Y[I.id];et===void 0&&(et={},Y[I.id]=et);let J=et[H];return J===void 0&&(J=h(l()),et[H]=J),J}function h(y){const I=[],W=[],H=[];for(let Y=0;Y<e;Y++)I[Y]=0,W[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,I,W,H){const Y=r.attributes,et=I.attributes;let J=0;const rt=W.getAttributes();for(const X in rt)if(rt[X].location>=0){const gt=Y[X];let Tt=et[X];if(Tt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),gt===void 0||gt.attribute!==Tt||Tt&&gt.data!==Tt.data)return!0;J++}return r.attributesNum!==J||r.index!==H}function x(y,I,W,H){const Y={},et=I.attributes;let J=0;const rt=W.getAttributes();for(const X in rt)if(rt[X].location>=0){let gt=et[X];gt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor));const Tt={};Tt.attribute=gt,gt&&gt.data&&(Tt.data=gt.data),Y[X]=Tt,J++}r.attributes=Y,r.attributesNum=J,r.index=H}function v(){const y=r.newAttributes;for(let I=0,W=y.length;I<W;I++)y[I]=0}function _(y){m(y,0)}function m(y,I){const W=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;W[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),Y[y]!==I&&(n.vertexAttribDivisor(y,I),Y[y]=I)}function A(){const y=r.newAttributes,I=r.enabledAttributes;for(let W=0,H=I.length;W<H;W++)I[W]!==y[W]&&(n.disableVertexAttribArray(W),I[W]=0)}function T(y,I,W,H,Y,et,J){J===!0?n.vertexAttribIPointer(y,I,W,Y,et):n.vertexAttribPointer(y,I,W,H,Y,et)}function S(y,I,W,H){v();const Y=H.attributes,et=W.getAttributes(),J=I.defaultAttributeValues;for(const rt in et){const X=et[rt];if(X.location>=0){let lt=Y[rt];if(lt===void 0&&(rt==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),rt==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor)),lt!==void 0){const gt=lt.normalized,Tt=lt.itemSize,Vt=t.get(lt);if(Vt===void 0)continue;const ne=Vt.buffer,j=Vt.type,at=Vt.bytesPerElement,Mt=j===n.INT||j===n.UNSIGNED_INT||lt.gpuType===_a;if(lt.isInterleavedBufferAttribute){const dt=lt.data,Pt=dt.stride,Ut=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<X.locationSize;Wt++)m(X.location+Wt,dt.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Wt=0;Wt<X.locationSize;Wt++)_(X.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Wt=0;Wt<X.locationSize;Wt++)T(X.location+Wt,Tt/X.locationSize,j,gt,Pt*at,(Ut+Tt/X.locationSize*Wt)*at,Mt)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<X.locationSize;dt++)m(X.location+dt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<X.locationSize;dt++)_(X.location+dt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let dt=0;dt<X.locationSize;dt++)T(X.location+dt,Tt/X.locationSize,j,gt,Tt*at,Tt/X.locationSize*dt*at,Mt)}}else if(J!==void 0){const gt=J[rt];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(X.location,gt);break;case 3:n.vertexAttrib3fv(X.location,gt);break;case 4:n.vertexAttrib4fv(X.location,gt);break;default:n.vertexAttrib1fv(X.location,gt)}}}}A()}function O(){L();for(const y in i){const I=i[y];for(const W in I){const H=I[W];for(const Y in H)d(H[Y].object),delete H[Y];delete I[W]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const W in I){const H=I[W];for(const Y in H)d(H[Y].object),delete H[Y];delete I[W]}delete i[y.id]}function D(y){for(const I in i){const W=i[I];if(W[y.id]===void 0)continue;const H=W[y.id];for(const Y in H)d(H[Y].object),delete H[Y];delete W[y.id]}}function L(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:_,disableUnusedAttributes:A}}function Fu(n,t,e){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function a(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),e.update(d,i,u))}function o(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=d[x];e.update(p,i,1)}function l(c,d,u,h){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],d[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let x=0;for(let v=0;v<u;v++)x+=d[v]*h[v];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ou(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==$e&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const L=D===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==vn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==sn&&!L)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=x>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:O,maxSamples:P}}function zu(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Vn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||s;return s=h,i=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,p){const x=u.clippingPlanes,v=u.clipIntersection,_=u.clipShadows,m=n.get(u);if(!s||x===null||x.length===0||r&&!_)r?d(null):c();else{const A=r?0:i,T=A*4;let S=m.clippingState||null;l.value=S,S=d(x,h,T,p);for(let O=0;O!==T;++O)S[O]=e[O];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,h,p,x){const v=u!==null?u.length:0;let _=null;if(v!==0){if(_=l.value,x!==!0||_===null){const m=p+v*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(_===null||_.length<m)&&(_=new Float32Array(m));for(let T=0,S=p;T!==v;++T,S+=4)a.copy(u[T]).applyMatrix4(A,o),a.normal.toArray(_,S),_[S+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,_}}function Bu(n){let t=new WeakMap;function e(a,o){return o===Or?a.mapping=Ei:o===zr&&(a.mapping=bi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Or||o===zr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zl(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ac extends Ec{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,mo=[.125,.215,.35,.446,.526,.582],Yn=20,gr=new Ac,go=new Gt;let _r=null,xr=0,vr=0,Mr=!1;const Wn=(1+Math.sqrt(5))/2,mi=1/Wn,_o=[new R(-Wn,mi,0),new R(Wn,mi,0),new R(-mi,0,Wn),new R(mi,0,Wn),new R(0,Wn,-mi),new R(0,Wn,mi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){_r=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_r,xr,vr),this._renderer.xr.enabled=Mr,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_r=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Qi,format:$e,colorSpace:Ci,depthBuffer:!1},s=vo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(r)),this._blurMaterial=Hu(r,t,e)}return s}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,i,s){const o=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(go),d.toneMapping=Un,d.autoClear=!1;const p=new Ea({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),x=new le(new E,p);let v=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,v=!0):(p.color.copy(go),v=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):A===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const T=this._cubeSize;bs(s,A*T,m>2?T:0,T,T),d.setRenderTarget(s),v&&d.render(x,o),d.render(t,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=u,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ei||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,gr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_o[(s-r-1)%_o.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new le(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),v=r/x,_=isFinite(r)?1+Math.floor(d*v):Yn;_>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Yn}`);const m=[];let A=0;for(let D=0;D<Yn;++D){const L=D/v,b=Math.exp(-L*L/2);m.push(b),D===0?A+=b:D<_&&(A+=2*b)}for(let D=0;D<m.length;D++)m[D]=m[D]/A;h.envMap.value=t.texture,h.samples.value=_,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=x,h.mipInt.value=T-i;const S=this._sizeLods[s],O=3*S*(s>T-vi?s-T+vi:0),P=4*(this._cubeSize-S);bs(e,O,P,3*S,2*S),l.setRenderTarget(e),l.render(u,gr)}}function ku(n){const t=[],e=[],i=[];let s=n;const r=n-vi+1+mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-vi?l=mo[a-n+vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,x=6,v=3,_=2,m=1,A=new Float32Array(v*x*p),T=new Float32Array(_*x*p),S=new Float32Array(m*x*p);for(let P=0;P<p;P++){const D=P%3*2/3-1,L=P>2?0:-1,b=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];A.set(b,v*x*P),T.set(h,_*x*P);const y=[P,P,P,P,P,P];S.set(y,m*x*P)}const O=new De;O.setAttribute("position",new ke(A,v)),O.setAttribute("uv",new ke(T,_)),O.setAttribute("faceIndex",new ke(S,m)),t.push(O),s>vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vo(n,t,e){const i=new jn(n,t,e);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Hu(n,t,e){const i=new Float32Array(Yn),s=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Mo(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function So(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function Gu(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Or||l===zr,d=l===Ei||l===bi;if(c||d){let u=t.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new xo(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new xo(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Vu(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Yi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Wu(n,t,e,i){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let _=0,m=v.length;_<m;_++)t.remove(v[_])}h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(u){const h=u.attributes;for(const x in h)t.update(h[x],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const x in p){const v=p[x];for(let _=0,m=v.length;_<m;_++)t.update(v[_],n.ARRAY_BUFFER)}}function c(u){const h=[],p=u.index,x=u.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let T=0,S=A.length;T<S;T+=3){const O=A[T+0],P=A[T+1],D=A[T+2];h.push(O,P,P,D,D,O)}}else if(x!==void 0){const A=x.array;v=x.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const O=T+0,P=T+1,D=T+2;h.push(O,P,P,D,D,O)}}else return;const _=new(mc(h)?yc:Sc)(h,1);_.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,_)}function d(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Xu(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*a),e.update(p,i,1)}function c(h,p,x){x!==0&&(n.drawElementsInstanced(i,p,r,h*a,x),e.update(p,i,x))}function d(h,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,x);let _=0;for(let m=0;m<x;m++)_+=p[m];e.update(_,i,1)}function u(h,p,x,v){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<h.length;m++)c(h[m]/a,p[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,v,0,x);let m=0;for(let A=0;A<x;A++)m+=p[A]*v[A];e.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function qu(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Yu(n,t,e){const i=new WeakMap,s=new ge;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),x===!0&&(T=2),v===!0&&(T=3);let S=o.attributes.position.count*T,O=1;S>t.maxTextureSize&&(O=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const P=new Float32Array(S*O*4*u),D=new _c(P,S,O,u);D.type=sn,D.needsUpdate=!0;const L=T*4;for(let y=0;y<u;y++){const I=_[y],W=m[y],H=A[y],Y=S*O*4*y;for(let et=0;et<I.count;et++){const J=et*L;p===!0&&(s.fromBufferAttribute(I,et),P[Y+J+0]=s.x,P[Y+J+1]=s.y,P[Y+J+2]=s.z,P[Y+J+3]=0),x===!0&&(s.fromBufferAttribute(W,et),P[Y+J+4]=s.x,P[Y+J+5]=s.y,P[Y+J+6]=s.z,P[Y+J+7]=0),v===!0&&(s.fromBufferAttribute(H,et),P[Y+J+8]=s.x,P[Y+J+9]=s.y,P[Y+J+10]=s.z,P[Y+J+11]=H.itemSize===4?s.w:1)}}h={count:u,texture:D,size:new At(S,O)},i.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Ku(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Rc extends Ae{constructor(t,e,i,s,r,a,o,l,c,d=Si){if(d!==Si&&d!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Si&&(i=$n),i===void 0&&d===Ai&&(i=Ti),super(null,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cc=new Ae,yo=new Rc(1,1),Pc=new _c,Dc=new Ul,Ic=new bc,wo=[],Eo=[],bo=new Float32Array(16),To=new Float32Array(9),Ao=new Float32Array(4);function Ui(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=wo[s];if(r===void 0&&(r=new Float32Array(s),wo[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xs(n,t){let e=Eo[t];e===void 0&&(e=new Int32Array(t),Eo[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ju(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Zu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function $u(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function ju(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function Qu(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Ao.set(i),n.uniformMatrix2fv(this.addr,!1,Ao),Se(e,i)}}function tf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;To.set(i),n.uniformMatrix3fv(this.addr,!1,To),Se(e,i)}}function ef(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;bo.set(i),n.uniformMatrix4fv(this.addr,!1,bo),Se(e,i)}}function nf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function rf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function af(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function of(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function lf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function df(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function hf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yo.compareFunction=pc,r=yo):r=Cc,e.setTexture2D(t||r,s)}function uf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Dc,s)}function ff(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ic,s)}function pf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pc,s)}function mf(n){switch(n){case 5126:return Ju;case 35664:return Zu;case 35665:return $u;case 35666:return ju;case 35674:return Qu;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return af;case 5125:return of;case 36294:return cf;case 36295:return lf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}function gf(n,t){n.uniform1fv(this.addr,t)}function _f(n,t){const e=Ui(t,this.size,2);n.uniform2fv(this.addr,e)}function xf(n,t){const e=Ui(t,this.size,3);n.uniform3fv(this.addr,e)}function vf(n,t){const e=Ui(t,this.size,4);n.uniform4fv(this.addr,e)}function Mf(n,t){const e=Ui(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Sf(n,t){const e=Ui(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yf(n,t){const e=Ui(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function wf(n,t){n.uniform1iv(this.addr,t)}function Ef(n,t){n.uniform2iv(this.addr,t)}function bf(n,t){n.uniform3iv(this.addr,t)}function Tf(n,t){n.uniform4iv(this.addr,t)}function Af(n,t){n.uniform1uiv(this.addr,t)}function Rf(n,t){n.uniform2uiv(this.addr,t)}function Cf(n,t){n.uniform3uiv(this.addr,t)}function Pf(n,t){n.uniform4uiv(this.addr,t)}function Df(n,t,e){const i=this.cache,s=t.length,r=Xs(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Cc,r[a])}function If(n,t,e){const i=this.cache,s=t.length,r=Xs(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Dc,r[a])}function Lf(n,t,e){const i=this.cache,s=t.length,r=Xs(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ic,r[a])}function Uf(n,t,e){const i=this.cache,s=t.length,r=Xs(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Pc,r[a])}function Nf(n){switch(n){case 5126:return gf;case 35664:return _f;case 35665:return xf;case 35666:return vf;case 35674:return Mf;case 35675:return Sf;case 35676:return yf;case 5124:case 35670:return wf;case 35667:case 35671:return Ef;case 35668:case 35672:return bf;case 35669:case 35673:return Tf;case 5125:return Af;case 36294:return Rf;case 36295:return Cf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Uf}}class Ff{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mf(e.type)}}class Of{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nf(e.type)}}class zf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Ro(n,t){n.seq.push(t),n.map[t.id]=t}function Bf(n,t,e){const i=n.name,s=i.length;for(Sr.lastIndex=0;;){const r=Sr.exec(i),a=Sr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ro(e,c===void 0?new Ff(o,n,t):new Of(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new zf(o),Ro(e,u)),e=u}}}class zs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Bf(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Co(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const kf=37297;let Hf=0;function Gf(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Po=new Bt;function Vf(n){Zt._getMatrix(Po,Zt.workingColorSpace,n);const t=`mat3( ${Po.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case Ws:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Do(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gf(n.getShaderSource(t),a)}else return s}function Wf(n,t){const e=Vf(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xf(n,t){let e;switch(t){case cl:e="Linear";break;case ll:e="Reinhard";break;case dl:e="Cineon";break;case nc:e="ACESFilmic";break;case ul:e="AgX";break;case fl:e="Neutral";break;case hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new R;function qf(){Zt.getLuminanceCoefficients(Ts);const n=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Kf(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jf(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ki(n){return n!==""}function Io(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zf=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(n){return n.replace(Zf,jf)}const $f=new Map;function jf(n,t){let e=Ht[t];if(e===void 0){const i=$f.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pa(e)}const Qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(n){return n.replace(Qf,tp)}function tp(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function No(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ep(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qo?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function np(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case bi:t="ENVMAP_TYPE_CUBE";break;case Vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ip(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function sp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ec:t="ENVMAP_BLENDING_MULTIPLY";break;case al:t="ENVMAP_BLENDING_MIX";break;case ol:t="ENVMAP_BLENDING_ADD";break}return t}function rp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ap(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ep(e),c=np(e),d=ip(e),u=sp(e),h=rp(e),p=Yf(e),x=Kf(r),v=s.createProgram();let _,m,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ki).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ki).join(`
`),m.length>0&&(m+=`
`)):(_=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),m=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Un?Xf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Wf("linearToOutputTexel",e.outputColorSpace),qf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),a=pa(a),a=Io(a,e),a=Lo(a,e),o=pa(o),o=Io(o,e),o=Lo(o,e),a=Uo(a),o=Uo(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=A+_+a,S=A+m+o,O=Co(s,s.VERTEX_SHADER,T),P=Co(s,s.FRAGMENT_SHADER,S);s.attachShader(v,O),s.attachShader(v,P),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(I){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(O).trim(),Y=s.getShaderInfoLog(P).trim();let et=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,O,P);else{const rt=Do(s,O,"vertex"),X=Do(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+rt+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||Y==="")&&(J=!1);J&&(I.diagnostics={runnable:et,programLog:W,vertexShader:{log:H,prefix:_},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(O),s.deleteShader(P),L=new zs(s,v),b=Jf(s,v)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,kf)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=P,this}let op=0;class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new lp(t),e.set(t,i)),i}}class lp{constructor(t){this.id=op++,this.code=t,this.usedTimes=0}}function dp(n,t,e,i,s,r,a){const o=new vc,l=new cp,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,y,I,W,H){const Y=W.fog,et=H.geometry,J=b.isMeshStandardMaterial?W.environment:null,rt=(b.isMeshStandardMaterial?e:t).get(b.envMap||J),X=rt&&rt.mapping===Vs?rt.image.height:null,lt=x[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const gt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Tt=gt!==void 0?gt.length:0;let Vt=0;et.morphAttributes.position!==void 0&&(Vt=1),et.morphAttributes.normal!==void 0&&(Vt=2),et.morphAttributes.color!==void 0&&(Vt=3);let ne,j,at,Mt;if(lt){const ie=tn[lt];ne=ie.vertexShader,j=ie.fragmentShader}else ne=b.vertexShader,j=b.fragmentShader,l.update(b),at=l.getVertexShaderID(b),Mt=l.getFragmentShaderID(b);const dt=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Ut=H.isInstancedMesh===!0,Wt=H.isBatchedMesh===!0,de=!!b.map,Yt=!!b.matcap,pe=!!rt,z=!!b.aoMap,Ie=!!b.lightMap,Xt=!!b.bumpMap,qt=!!b.normalMap,Ct=!!b.displacementMap,re=!!b.emissiveMap,Rt=!!b.metalnessMap,C=!!b.roughnessMap,M=b.anisotropy>0,k=b.clearcoat>0,Q=b.dispersion>0,nt=b.iridescence>0,$=b.sheen>0,St=b.transmission>0,ht=M&&!!b.anisotropyMap,_t=k&&!!b.clearcoatMap,Kt=k&&!!b.clearcoatNormalMap,st=k&&!!b.clearcoatRoughnessMap,xt=nt&&!!b.iridescenceMap,It=nt&&!!b.iridescenceThicknessMap,Lt=$&&!!b.sheenColorMap,vt=$&&!!b.sheenRoughnessMap,Jt=!!b.specularMap,kt=!!b.specularColorMap,oe=!!b.specularIntensityMap,U=St&&!!b.transmissionMap,ut=St&&!!b.thicknessMap,q=!!b.gradientMap,tt=!!b.alphaMap,mt=b.alphaTest>0,ft=!!b.alphaHash,Ot=!!b.extensions;let me=Un;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(me=n.toneMapping);const we={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:j,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&H._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&H.instanceColor!==null,instancingMorph:Ut&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ci,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:Yt,envMap:pe,envMapMode:pe&&rt.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:Ie,bumpMap:Xt,normalMap:qt,displacementMap:h&&Ct,emissiveMap:re,normalMapObjectSpace:qt&&b.normalMapType===_l,normalMapTangentSpace:qt&&b.normalMapType===fc,metalnessMap:Rt,roughnessMap:C,anisotropy:M,anisotropyMap:ht,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:Kt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:nt,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:$,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Jt,specularColorMap:kt,specularIntensityMap:oe,transmission:St,transmissionMap:U,thicknessMap:ut,gradientMap:q,opaque:b.transparent===!1&&b.blending===Mi&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:ft,combine:b.combine,mapUv:de&&v(b.map.channel),aoMapUv:z&&v(b.aoMap.channel),lightMapUv:Ie&&v(b.lightMap.channel),bumpMapUv:Xt&&v(b.bumpMap.channel),normalMapUv:qt&&v(b.normalMap.channel),displacementMapUv:Ct&&v(b.displacementMap.channel),emissiveMapUv:re&&v(b.emissiveMap.channel),metalnessMapUv:Rt&&v(b.metalnessMap.channel),roughnessMapUv:C&&v(b.roughnessMap.channel),anisotropyMapUv:ht&&v(b.anisotropyMap.channel),clearcoatMapUv:_t&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:It&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(b.sheenRoughnessMap.channel),specularMapUv:Jt&&v(b.specularMap.channel),specularColorMapUv:kt&&v(b.specularColorMap.channel),specularIntensityMapUv:oe&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:ut&&v(b.thicknessMap.channel),alphaMapUv:tt&&v(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(qt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!et.attributes.uv&&(de||tt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:H.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===se,decodeVideoTextureEmissive:re&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===en,flipSided:b.side===Pe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function m(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)y.push(I),y.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(A(y,b),T(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function A(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function T(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){const y=x[b.type];let I;if(y){const W=tn[y];I=ql.clone(W.uniforms)}else I=b.uniforms;return I}function O(b,y){let I;for(let W=0,H=d.length;W<H;W++){const Y=d[W];if(Y.cacheKey===y){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new ap(n,y,b,r),d.push(I)),I}function P(b){if(--b.usedTimes===0){const y=d.indexOf(b);d[y]=d[d.length-1],d.pop(),b.destroy()}}function D(b){l.remove(b)}function L(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:O,releaseProgram:P,releaseShaderCache:D,programs:d,dispose:L}}function hp(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function up(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Fo(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Oo(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,h,p,x,v,_){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:h,material:p,groupOrder:x,renderOrder:u.renderOrder,z:v,group:_},n[t]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=p,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=v,m.group=_),t++,m}function o(u,h,p,x,v,_){const m=a(u,h,p,x,v,_);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(u,h,p,x,v,_){const m=a(u,h,p,x,v,_);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,h){e.length>1&&e.sort(u||up),i.length>1&&i.sort(h||Fo),s.length>1&&s.sort(h||Fo)}function d(){for(let u=t,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function fp(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Oo,n.set(i,[a])):s>=r.length?(a=new Oo,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function pp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Gt};break;case"SpotLight":e={position:new R,direction:new R,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function mp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let gp=0;function _p(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xp(n){const t=new pp,e=mp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const s=new R,r=new ae,a=new ae;function o(c){let d=0,u=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,x=0,v=0,_=0,m=0,A=0,T=0,S=0,O=0,P=0,D=0;c.sort(_p);for(let b=0,y=c.length;b<y;b++){const I=c[b],W=I.color,H=I.intensity,Y=I.distance,et=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=W.r*H,u+=W.g*H,h+=W.b*H;else if(I.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(I.sh.coefficients[J],H);D++}else if(I.isDirectionalLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const rt=I.shadow,X=e.get(I);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=et,i.directionalShadowMatrix[p]=I.shadow.matrix,A++}i.directional[p]=J,p++}else if(I.isSpotLight){const J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(W).multiplyScalar(H),J.distance=Y,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,i.spot[v]=J;const rt=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,rt.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[v]=rt.matrix,I.castShadow){const X=e.get(I);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=et,S++}v++}else if(I.isRectAreaLight){const J=t.get(I);J.color.copy(W).multiplyScalar(H),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),i.rectArea[_]=J,_++}else if(I.isPointLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){const rt=I.shadow,X=e.get(I);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,X.shadowCameraNear=rt.camera.near,X.shadowCameraFar=rt.camera.far,i.pointShadow[x]=X,i.pointShadowMap[x]=et,i.pointShadowMatrix[x]=I.shadow.matrix,T++}i.point[x]=J,x++}else if(I.isHemisphereLight){const J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(H),J.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[m]=J,m++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==x||L.spotLength!==v||L.rectAreaLength!==_||L.hemiLength!==m||L.numDirectionalShadows!==A||L.numPointShadows!==T||L.numSpotShadows!==S||L.numSpotMaps!==O||L.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=x,i.hemi.length=m,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,L.directionalLength=p,L.pointLength=x,L.spotLength=v,L.rectAreaLength=_,L.hemiLength=m,L.numDirectionalShadows=A,L.numPointShadows=T,L.numSpotShadows=S,L.numSpotMaps=O,L.numLightProbes=D,i.version=gp++)}function l(c,d){let u=0,h=0,p=0,x=0,v=0;const _=d.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){const T=c[m];if(T.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),u++}else if(T.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),p++}else if(T.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),a.identity(),r.copy(T.matrixWorld),r.premultiply(_),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),h++}else if(T.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:o,setupView:l,state:i}}function zo(n){const t=new xp(n),e=[],i=[];function s(d){c.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vp(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new zo(n),t.set(s,[o])):r>=a.length?(o=new zo(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Mp extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sp extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
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
}`;function Ep(n,t,e){let i=new ba;const s=new At,r=new At,a=new ge,o=new Mp({depthPacking:gl}),l=new Sp,c={},d=e.maxTextureSize,u={[Nn]:Pe,[Pe]:Nn,[en]:en},h=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:yp,fragmentShader:wp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new De;x.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new le(x,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let m=this.type;this.render=function(P,D,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Ln),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=m!==mn&&this.type===mn,Y=m===mn&&this.type!==mn;for(let et=0,J=P.length;et<J;et++){const rt=P[et],X=rt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const lt=X.getFrameExtents();if(s.multiply(lt),r.copy(X.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/lt.x),s.x=r.x*lt.x,X.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/lt.y),s.y=r.y*lt.y,X.mapSize.y=r.y)),X.map===null||H===!0||Y===!0){const Tt=this.type!==mn?{minFilter:Be,magFilter:Be}:{};X.map!==null&&X.map.dispose(),X.map=new jn(s.x,s.y,Tt),X.map.texture.name=rt.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const gt=X.getViewportCount();for(let Tt=0;Tt<gt;Tt++){const Vt=X.getViewport(Tt);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),W.viewport(a),X.updateMatrices(rt,Tt),i=X.getFrustum(),S(D,L,X.camera,rt,this.type)}X.isPointLightShadow!==!0&&this.type===mn&&A(X,L),X.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(b,y,I)};function A(P,D){const L=t.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new jn(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,L,h,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,L,p,v,null)}function T(P,D,L,b){let y=null;const I=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const W=y.uuid,H=D.uuid;let Y=c[W];Y===void 0&&(Y={},c[W]=Y);let et=Y[H];et===void 0&&(et=y.clone(),Y[H]=et,D.addEventListener("dispose",O)),y=et}if(y.visible=D.visible,y.wireframe=D.wireframe,b===mn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:u[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=n.properties.get(y);W.light=L}return y}function S(P,D,L,b,y){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===mn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const H=t.update(P),Y=P.material;if(Array.isArray(Y)){const et=H.groups;for(let J=0,rt=et.length;J<rt;J++){const X=et[J],lt=Y[X.materialIndex];if(lt&&lt.visible){const gt=T(P,lt,b,y);P.onBeforeShadow(n,P,D,L,H,gt,X),n.renderBufferDirect(L,null,H,gt,P,X),P.onAfterShadow(n,P,D,L,H,gt,X)}}}else if(Y.visible){const et=T(P,Y,b,y);P.onBeforeShadow(n,P,D,L,H,et,null),n.renderBufferDirect(L,null,H,et,P,null),P.onAfterShadow(n,P,D,L,H,et,null)}}const W=P.children;for(let H=0,Y=W.length;H<Y;H++)S(W[H],D,L,b,y)}function O(P){P.target.removeEventListener("dispose",O);for(const L in c){const b=c[L],y=P.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const bp={[Pr]:Dr,[Ir]:Nr,[Lr]:Fr,[wi]:Ur,[Dr]:Pr,[Nr]:Ir,[Fr]:Lr,[Ur]:wi};function Tp(n,t){function e(){let U=!1;const ut=new ge;let q=null;const tt=new ge(0,0,0,0);return{setMask:function(mt){q!==mt&&!U&&(n.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){U=mt},setClear:function(mt,ft,Ot,me,we){we===!0&&(mt*=me,ft*=me,Ot*=me),ut.set(mt,ft,Ot,me),tt.equals(ut)===!1&&(n.clearColor(mt,ft,Ot,me),tt.copy(ut))},reset:function(){U=!1,q=null,tt.set(-1,0,0,0)}}}function i(){let U=!1,ut=!1,q=null,tt=null,mt=null;return{setReversed:function(ft){if(ut!==ft){const Ot=t.get("EXT_clip_control");ut?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const me=mt;mt=null,this.setClear(me)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?dt(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(ft){q!==ft&&!U&&(n.depthMask(ft),q=ft)},setFunc:function(ft){if(ut&&(ft=bp[ft]),tt!==ft){switch(ft){case Pr:n.depthFunc(n.NEVER);break;case Dr:n.depthFunc(n.ALWAYS);break;case Ir:n.depthFunc(n.LESS);break;case wi:n.depthFunc(n.LEQUAL);break;case Lr:n.depthFunc(n.EQUAL);break;case Ur:n.depthFunc(n.GEQUAL);break;case Nr:n.depthFunc(n.GREATER);break;case Fr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=ft}},setLocked:function(ft){U=ft},setClear:function(ft){mt!==ft&&(ut&&(ft=1-ft),n.clearDepth(ft),mt=ft)},reset:function(){U=!1,q=null,tt=null,mt=null,ut=!1}}}function s(){let U=!1,ut=null,q=null,tt=null,mt=null,ft=null,Ot=null,me=null,we=null;return{setTest:function(ie){U||(ie?dt(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!U&&(n.stencilMask(ie),ut=ie)},setFunc:function(ie,Ve,cn){(q!==ie||tt!==Ve||mt!==cn)&&(n.stencilFunc(ie,Ve,cn),q=ie,tt=Ve,mt=cn)},setOp:function(ie,Ve,cn){(ft!==ie||Ot!==Ve||me!==cn)&&(n.stencilOp(ie,Ve,cn),ft=ie,Ot=Ve,me=cn)},setLocked:function(ie){U=ie},setClear:function(ie){we!==ie&&(n.clearStencil(ie),we=ie)},reset:function(){U=!1,ut=null,q=null,tt=null,mt=null,ft=null,Ot=null,me=null,we=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,p=[],x=null,v=!1,_=null,m=null,A=null,T=null,S=null,O=null,P=null,D=new Gt(0,0,0),L=0,b=!1,y=null,I=null,W=null,H=null,Y=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,rt=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=rt>=2);let lt=null,gt={};const Tt=n.getParameter(n.SCISSOR_BOX),Vt=n.getParameter(n.VIEWPORT),ne=new ge().fromArray(Tt),j=new ge().fromArray(Vt);function at(U,ut,q,tt){const mt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(U,ft),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<q;Ot++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(ut+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return ft}const Mt={};Mt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(n.DEPTH_TEST),a.setFunc(wi),Xt(!1),qt(Ha),dt(n.CULL_FACE),z(Ln);function dt(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Pt(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Ut(U,ut){return u[U]!==ut?(n.bindFramebuffer(U,ut),u[U]=ut,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Wt(U,ut){let q=p,tt=!1;if(U){q=h.get(ut),q===void 0&&(q=[],h.set(ut,q));const mt=U.textures;if(q.length!==mt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Ot=mt.length;ft<Ot;ft++)q[ft]=n.COLOR_ATTACHMENT0+ft;q.length=mt.length,tt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,tt=!0);tt&&n.drawBuffers(q)}function de(U){return x!==U?(n.useProgram(U),x=U,!0):!1}const Yt={[qn]:n.FUNC_ADD,[Vc]:n.FUNC_SUBTRACT,[Wc]:n.FUNC_REVERSE_SUBTRACT};Yt[Xc]=n.MIN,Yt[qc]=n.MAX;const pe={[Yc]:n.ZERO,[Kc]:n.ONE,[Jc]:n.SRC_COLOR,[Rr]:n.SRC_ALPHA,[el]:n.SRC_ALPHA_SATURATE,[Qc]:n.DST_COLOR,[$c]:n.DST_ALPHA,[Zc]:n.ONE_MINUS_SRC_COLOR,[Cr]:n.ONE_MINUS_SRC_ALPHA,[tl]:n.ONE_MINUS_DST_COLOR,[jc]:n.ONE_MINUS_DST_ALPHA,[nl]:n.CONSTANT_COLOR,[il]:n.ONE_MINUS_CONSTANT_COLOR,[sl]:n.CONSTANT_ALPHA,[rl]:n.ONE_MINUS_CONSTANT_ALPHA};function z(U,ut,q,tt,mt,ft,Ot,me,we,ie){if(U===Ln){v===!0&&(Pt(n.BLEND),v=!1);return}if(v===!1&&(dt(n.BLEND),v=!0),U!==Gc){if(U!==_||ie!==b){if((m!==qn||S!==qn)&&(n.blendEquation(n.FUNC_ADD),m=qn,S=qn),ie)switch(U){case Mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.ONE,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,T=null,O=null,P=null,D.set(0,0,0),L=0,_=U,b=ie}return}mt=mt||ut,ft=ft||q,Ot=Ot||tt,(ut!==m||mt!==S)&&(n.blendEquationSeparate(Yt[ut],Yt[mt]),m=ut,S=mt),(q!==A||tt!==T||ft!==O||Ot!==P)&&(n.blendFuncSeparate(pe[q],pe[tt],pe[ft],pe[Ot]),A=q,T=tt,O=ft,P=Ot),(me.equals(D)===!1||we!==L)&&(n.blendColor(me.r,me.g,me.b,we),D.copy(me),L=we),_=U,b=!1}function Ie(U,ut){U.side===en?Pt(n.CULL_FACE):dt(n.CULL_FACE);let q=U.side===Pe;ut&&(q=!q),Xt(q),U.blending===Mi&&U.transparent===!1?z(Ln):z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const tt=U.stencilWrite;o.setTest(tt),tt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function qt(U){U!==kc?(dt(n.CULL_FACE),U!==I&&(U===Ha?n.cullFace(n.BACK):U===Hc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),I=U}function Ct(U){U!==W&&(J&&n.lineWidth(U),W=U)}function re(U,ut,q){U?(dt(n.POLYGON_OFFSET_FILL),(H!==ut||Y!==q)&&(n.polygonOffset(ut,q),H=ut,Y=q)):Pt(n.POLYGON_OFFSET_FILL)}function Rt(U){U?dt(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+et-1),lt!==U&&(n.activeTexture(U),lt=U)}function M(U,ut,q){q===void 0&&(lt===null?q=n.TEXTURE0+et-1:q=lt);let tt=gt[q];tt===void 0&&(tt={type:void 0,texture:void 0},gt[q]=tt),(tt.type!==U||tt.texture!==ut)&&(lt!==q&&(n.activeTexture(q),lt=q),n.bindTexture(U,ut||Mt[U]),tt.type=U,tt.texture=ut)}function k(){const U=gt[lt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){ne.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function vt(U){j.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function Jt(U,ut){let q=c.get(ut);q===void 0&&(q=new WeakMap,c.set(ut,q));let tt=q.get(U);tt===void 0&&(tt=n.getUniformBlockIndex(ut,U.name),q.set(U,tt))}function kt(U,ut){const tt=c.get(ut).get(U);l.get(ut)!==tt&&(n.uniformBlockBinding(ut,tt,U.__bindingPointIndex),l.set(ut,tt))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},lt=null,gt={},u={},h=new WeakMap,p=[],x=null,v=!1,_=null,m=null,A=null,T=null,S=null,O=null,P=null,D=new Gt(0,0,0),L=0,b=!1,y=null,I=null,W=null,H=null,Y=null,ne.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Pt,bindFramebuffer:Ut,drawBuffers:Wt,useProgram:de,setBlending:z,setMaterial:Ie,setFlipSided:Xt,setCullFace:qt,setLineWidth:Ct,setPolygonOffset:re,setScissorTest:Rt,activeTexture:C,bindTexture:M,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:xt,texImage3D:It,updateUBOMapping:Jt,uniformBlockBinding:kt,texStorage2D:Kt,texStorage3D:st,texSubImage2D:$,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:Lt,viewport:vt,reset:oe}}function Bo(n,t,e,i){const s=Ap(i);switch(e){case oc:return n*t;case lc:return n*t;case dc:return n*t*2;case Ma:return n*t/s.components*s.byteLength;case Sa:return n*t/s.components*s.byteLength;case hc:return n*t*2/s.components*s.byteLength;case ya:return n*t*2/s.components*s.byteLength;case cc:return n*t*3/s.components*s.byteLength;case $e:return n*t*4/s.components*s.byteLength;case wa:return n*t*4/s.components*s.byteLength;case Ls:case Us:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Fs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gr:case Wr:return Math.max(n,16)*Math.max(t,8)/4;case Hr:case Vr:return Math.max(n,8)*Math.max(t,8)/2;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case jr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Os:case ca:case la:return Math.ceil(n/4)*Math.ceil(t/4)*16;case uc:case da:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ha:case ua:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ap(n){switch(n){case vn:case sc:return{byteLength:1,components:1};case $i:case rc:case Qi:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case $n:case _a:case sn:return{byteLength:4,components:1};case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Rp(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,d=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return p?new OffscreenCanvas(C,M):ks("canvas")}function v(C,M,k){let Q=1;const nt=Rt(C);if((nt.width>k||nt.height>k)&&(Q=k/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Q*nt.width),St=Math.floor(Q*nt.height);u===void 0&&(u=x($,St));const ht=M?x($,St):u;return ht.width=$,ht.height=St,ht.getContext("2d").drawImage(C,0,0,$,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+St+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function _(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(C,M,k,Q,nt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=M;if(M===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),M===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),M===n.RGBA){const St=nt?Ws:Zt.getTransfer(Q);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=St===se?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(C,M){let k;return C?M===null||M===$n||M===Ti?k=n.DEPTH24_STENCIL8:M===sn?k=n.DEPTH32F_STENCIL8:M===$i&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$n||M===Ti?k=n.DEPTH_COMPONENT24:M===sn?k=n.DEPTH_COMPONENT32F:M===$i&&(k=n.DEPTH_COMPONENT16),k}function O(C,M){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){const M=C.target;M.removeEventListener("dispose",P),L(M),M.isVideoTexture&&d.delete(M)}function D(C){const M=C.target;M.removeEventListener("dispose",D),y(M)}function L(C){const M=i.get(C);if(M.__webglInit===void 0)return;const k=C.source,Q=h.get(k);if(Q){const nt=Q[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(C),Object.keys(Q).length===0&&h.delete(k)}i.remove(C)}function b(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const k=C.source,Q=h.get(k);delete Q[M.__cacheKey],a.memory.textures--}function y(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let nt=0;nt<M.__webglFramebuffer[Q].length;nt++)n.deleteFramebuffer(M.__webglFramebuffer[Q][nt]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=C.textures;for(let Q=0,nt=k.length;Q<nt;Q++){const $=i.get(k[Q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(k[Q])}i.remove(C)}let I=0;function W(){I=0}function H(){const C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function Y(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function et(C,M){const k=i.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,C,M);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function J(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function rt(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function X(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){at(k,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const lt={[Br]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[kr]:n.MIRRORED_REPEAT},gt={[Be]:n.NEAREST,[pl]:n.NEAREST_MIPMAP_NEAREST,[as]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Ys]:n.LINEAR_MIPMAP_NEAREST,[Jn]:n.LINEAR_MIPMAP_LINEAR},Tt={[xl]:n.NEVER,[El]:n.ALWAYS,[vl]:n.LESS,[pc]:n.LEQUAL,[Ml]:n.EQUAL,[wl]:n.GEQUAL,[Sl]:n.GREATER,[yl]:n.NOTEQUAL};function Vt(C,M){if(M.type===sn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===nn||M.magFilter===Ys||M.magFilter===as||M.magFilter===Jn||M.minFilter===nn||M.minFilter===Ys||M.minFilter===as||M.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,lt[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,lt[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,lt[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,gt[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Be||M.minFilter!==as&&M.minFilter!==Jn||M.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ne(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",P));const Q=M.source;let nt=h.get(Q);nt===void 0&&(nt={},h.set(Q,nt));const $=Y(M);if($!==C.__cacheKey){nt[$]===void 0&&(nt[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),nt[$].usedTimes++;const St=nt[C.__cacheKey];St!==void 0&&(nt[C.__cacheKey].usedTimes--,St.usedTimes===0&&b(M)),C.__cacheKey=$,C.__webglTexture=nt[$].texture}return k}function j(C,M,k){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const nt=ne(C,M),$=M.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+k);const St=i.get($);if($.version!==St.__version||nt===!0){e.activeTexture(n.TEXTURE0+k);const ht=Zt.getPrimaries(Zt.workingColorSpace),_t=M.colorSpace===In?null:Zt.getPrimaries(M.colorSpace),Kt=M.colorSpace===In||ht===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let st=v(M.image,!1,s.maxTextureSize);st=re(M,st);const xt=r.convert(M.format,M.colorSpace),It=r.convert(M.type);let Lt=T(M.internalFormat,xt,It,M.colorSpace,M.isVideoTexture);Vt(Q,M);let vt;const Jt=M.mipmaps,kt=M.isVideoTexture!==!0,oe=St.__version===void 0||nt===!0,U=$.dataReady,ut=O(M,st);if(M.isDepthTexture)Lt=S(M.format===Ai,M.type),oe&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Lt,st.width,st.height,0,xt,It,null));else if(M.isDataTexture)if(Jt.length>0){kt&&oe&&e.texStorage2D(n.TEXTURE_2D,ut,Lt,Jt[0].width,Jt[0].height);for(let q=0,tt=Jt.length;q<tt;q++)vt=Jt[q],kt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,It,vt.data):e.texImage2D(n.TEXTURE_2D,q,Lt,vt.width,vt.height,0,xt,It,vt.data);M.generateMipmaps=!1}else kt?(oe&&e.texStorage2D(n.TEXTURE_2D,ut,Lt,st.width,st.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,xt,It,st.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,st.width,st.height,0,xt,It,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Lt,Jt[0].width,Jt[0].height,st.depth);for(let q=0,tt=Jt.length;q<tt;q++)if(vt=Jt[q],M.format!==$e)if(xt!==null)if(kt){if(U)if(M.layerUpdates.size>0){const mt=Bo(vt.width,vt.height,M.format,M.type);for(const ft of M.layerUpdates){const Ot=vt.data.subarray(ft*mt/vt.data.BYTES_PER_ELEMENT,(ft+1)*mt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ft,vt.width,vt.height,1,xt,Ot)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,st.depth,xt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,st.depth,xt,It,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,st.depth,0,xt,It,vt.data)}else{kt&&oe&&e.texStorage2D(n.TEXTURE_2D,ut,Lt,Jt[0].width,Jt[0].height);for(let q=0,tt=Jt.length;q<tt;q++)vt=Jt[q],M.format!==$e?xt!==null?kt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,xt,It,vt.data):e.texImage2D(n.TEXTURE_2D,q,Lt,vt.width,vt.height,0,xt,It,vt.data)}else if(M.isDataArrayTexture)if(kt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Lt,st.width,st.height,st.depth),U)if(M.layerUpdates.size>0){const q=Bo(st.width,st.height,M.format,M.type);for(const tt of M.layerUpdates){const mt=st.data.subarray(tt*q/st.data.BYTES_PER_ELEMENT,(tt+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,xt,It,mt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,It,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,xt,It,st.data);else if(M.isData3DTexture)kt?(oe&&e.texStorage3D(n.TEXTURE_3D,ut,Lt,st.width,st.height,st.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,It,st.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,xt,It,st.data);else if(M.isFramebufferTexture){if(oe)if(kt)e.texStorage2D(n.TEXTURE_2D,ut,Lt,st.width,st.height);else{let q=st.width,tt=st.height;for(let mt=0;mt<ut;mt++)e.texImage2D(n.TEXTURE_2D,mt,Lt,q,tt,0,xt,It,null),q>>=1,tt>>=1}}else if(Jt.length>0){if(kt&&oe){const q=Rt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,ut,Lt,q.width,q.height)}for(let q=0,tt=Jt.length;q<tt;q++)vt=Jt[q],kt?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,xt,It,vt):e.texImage2D(n.TEXTURE_2D,q,Lt,xt,It,vt);M.generateMipmaps=!1}else if(kt){if(oe){const q=Rt(st);e.texStorage2D(n.TEXTURE_2D,ut,Lt,q.width,q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,It,st)}else e.texImage2D(n.TEXTURE_2D,0,Lt,xt,It,st);_(M)&&m(Q),St.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function at(C,M,k){if(M.image.length!==6)return;const Q=ne(C,M),nt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const $=i.get(nt);if(nt.version!==$.__version||Q===!0){e.activeTexture(n.TEXTURE0+k);const St=Zt.getPrimaries(Zt.workingColorSpace),ht=M.colorSpace===In?null:Zt.getPrimaries(M.colorSpace),_t=M.colorSpace===In||St===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Kt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Kt&&!st?xt[tt]=v(M.image[tt],!0,s.maxCubemapSize):xt[tt]=st?M.image[tt].image:M.image[tt],xt[tt]=re(M,xt[tt]);const It=xt[0],Lt=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),Jt=T(M.internalFormat,Lt,vt,M.colorSpace),kt=M.isVideoTexture!==!0,oe=$.__version===void 0||Q===!0,U=nt.dataReady;let ut=O(M,It);Vt(n.TEXTURE_CUBE_MAP,M);let q;if(Kt){kt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Jt,It.width,It.height);for(let tt=0;tt<6;tt++){q=xt[tt].mipmaps;for(let mt=0;mt<q.length;mt++){const ft=q[mt];M.format!==$e?Lt!==null?kt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,ft.width,ft.height,Lt,vt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Jt,ft.width,ft.height,0,Lt,vt,ft.data)}}}else{if(q=M.mipmaps,kt&&oe){q.length>0&&ut++;const tt=Rt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,Lt,vt,xt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Jt,xt[tt].width,xt[tt].height,0,Lt,vt,xt[tt].data);for(let mt=0;mt<q.length;mt++){const Ot=q[mt].image[tt].image;kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Ot.width,Ot.height,Lt,vt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Jt,Ot.width,Ot.height,0,Lt,vt,Ot.data)}}else{kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,vt,xt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Jt,Lt,vt,xt[tt]);for(let mt=0;mt<q.length;mt++){const ft=q[mt];kt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Lt,vt,ft.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Jt,Lt,vt,ft.image[tt])}}}_(M)&&m(n.TEXTURE_CUBE_MAP),$.__version=nt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Mt(C,M,k,Q,nt,$){const St=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),_t=T(k.internalFormat,St,ht,k.colorSpace),Kt=i.get(M),st=i.get(k);if(st.__renderTarget=M,!Kt.__hasExternalTextures){const xt=Math.max(1,M.width>>$),It=Math.max(1,M.height>>$);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,_t,xt,It,M.depth,0,St,ht,null):e.texImage2D(nt,$,_t,xt,It,0,St,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),qt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,nt,st.__webglTexture,0,Xt(M)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,nt,st.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(C,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const Q=M.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,$=S(M.stencilBuffer,nt),St=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Xt(M);qt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,$,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,C)}else{const Q=M.textures;for(let nt=0;nt<Q.length;nt++){const $=Q[nt],St=r.convert($.format,$.colorSpace),ht=r.convert($.type),_t=T($.internalFormat,St,ht,$.colorSpace),Kt=Xt(M);k&&qt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,_t,M.width,M.height):qt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt,_t,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,_t,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),et(M.depthTexture,0);const nt=Q.__webglTexture,$=Xt(M);if(M.depthTexture.format===Si)qt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(M.depthTexture.format===Ai)qt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ut(C){const M=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=Q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),dt(M.__webglDepthbuffer[Q],C,!1);else{const nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),dt(M.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(C,M,k){const Q=i.get(C);M!==void 0&&Mt(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ut(C)}function de(C){const M=C.texture,k=i.get(C),Q=i.get(M);C.addEventListener("dispose",D);const nt=C.textures,$=C.isWebGLCubeRenderTarget===!0,St=nt.length>1;if(St||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let _t=0;_t<M.mipmaps.length;_t++)k.__webglFramebuffer[ht][_t]=n.createFramebuffer()}else k.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)k.__webglFramebuffer[ht]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(St)for(let ht=0,_t=nt.length;ht<_t;ht++){const Kt=i.get(nt[ht]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&qt(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){const _t=nt[ht];k.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);const Kt=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),xt=T(_t.internalFormat,Kt,st,_t.colorSpace,C.isXRRenderTarget===!0),It=Xt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,xt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Mt(k.__webglFramebuffer[ht][_t],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else Mt(k.__webglFramebuffer[ht],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);_(M)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,_t=nt.length;ht<_t;ht++){const Kt=nt[ht],st=i.get(Kt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Vt(n.TEXTURE_2D,Kt),Mt(k.__webglFramebuffer,C,Kt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),_(Kt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,Q.__webglTexture),Vt(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Mt(k.__webglFramebuffer[_t],C,M,n.COLOR_ATTACHMENT0,ht,_t);else Mt(k.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,ht,0);_(M)&&m(ht),e.unbindTexture()}C.depthBuffer&&Ut(C)}function Yt(C){const M=C.textures;for(let k=0,Q=M.length;k<Q;k++){const nt=M[k];if(_(nt)){const $=A(C),St=i.get(nt).__webglTexture;e.bindTexture($,St),m($),e.unbindTexture()}}}const pe=[],z=[];function Ie(C){if(C.samples>0){if(qt(C)===!1){const M=C.textures,k=C.width,Q=C.height;let nt=n.COLOR_BUFFER_BIT;const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(C),ht=M.length>1;if(ht)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[_t]);const Kt=i.get(M[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,nt,n.NEAREST),l===!0&&(pe.length=0,z.length=0,pe.push(n.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push($),z.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,St.__webglColorRenderbuffer[_t]);const Kt=i.get(M[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Xt(C){return Math.min(s.maxSamples,C.samples)}function qt(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(C){const M=a.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function re(C,M){const k=C.colorSpace,Q=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ci&&k!==In&&(Zt.getTransfer(k)===se?(Q!==$e||nt!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=et,this.setTexture2DArray=J,this.setTexture3D=rt,this.setTextureCube=X,this.rebindTextures=Wt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=qt}function Cp(n,t){function e(i,s=In){let r;const a=Zt.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===va)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ac)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sc)return n.BYTE;if(i===rc)return n.SHORT;if(i===$i)return n.UNSIGNED_SHORT;if(i===_a)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===sn)return n.FLOAT;if(i===Qi)return n.HALF_FLOAT;if(i===oc)return n.ALPHA;if(i===cc)return n.RGB;if(i===$e)return n.RGBA;if(i===lc)return n.LUMINANCE;if(i===dc)return n.LUMINANCE_ALPHA;if(i===Si)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===Ma)return n.RED;if(i===Sa)return n.RED_INTEGER;if(i===hc)return n.RG;if(i===ya)return n.RG_INTEGER;if(i===wa)return n.RGBA_INTEGER;if(i===Ls||i===Us||i===Ns||i===Fs)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hr||i===Gr||i===Vr||i===Wr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xr||i===qr||i===Yr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xr||i===qr)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kr||i===Jr||i===Zr||i===$r||i===jr||i===Qr||i===ta||i===ea||i===na||i===ia||i===sa||i===ra||i===aa||i===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$r)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qr)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ta)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ea)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===na)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ia)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ra)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===aa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Os||i===ca||i===la)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Os)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===da||i===ha||i===ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Os)return r.COMPRESSED_RED_RGTC1_EXT;if(i===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ti?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Pp extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class it extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const _=e.getJointPose(v,i),m=this._getHandJoint(c,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new it;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ip=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lp=`
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

}`;class Up{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mn({vertexShader:Ip,fragmentShader:Lp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Np extends Pi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,x=null;const v=new Up,_=e.getContextAttributes();let m=null,A=null;const T=[],S=[],O=new At;let P=null;const D=new Je;D.viewport=new ge;const L=new Je;L.viewport=new ge;const b=[D,L],y=new Pp;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=T[j];return at===void 0&&(at=new yr,T[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=T[j];return at===void 0&&(at=new yr,T[j]=at),at.getGripSpace()},this.getHand=function(j){let at=T[j];return at===void 0&&(at=new yr,T[j]=at),at.getHandSpace()};function H(j){const at=S.indexOf(j.inputSource);if(at===-1)return;const Mt=T[at];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,c||a),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",et);for(let j=0;j<T.length;j++){const at=S[j];at!==null&&(S[j]=null,T[j].disconnect(at))}I=null,W=null,v.reset(),t.setRenderTarget(m),p=null,h=null,u=null,s=null,A=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",et),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new jn(p.framebufferWidth,p.framebufferHeight,{format:$e,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let at=null,Mt=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?Ai:Si,Mt=_.stencil?Ti:$n);const Pt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),h=u.createProjectionLayer(Pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),A=new jn(h.textureWidth,h.textureHeight,{format:$e,type:vn,depthTexture:new Rc(h.textureWidth,h.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function et(j){for(let at=0;at<j.removed.length;at++){const Mt=j.removed[at],dt=S.indexOf(Mt);dt>=0&&(S[dt]=null,T[dt].disconnect(Mt))}for(let at=0;at<j.added.length;at++){const Mt=j.added[at];let dt=S.indexOf(Mt);if(dt===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=S.length){S.push(Mt),dt=Ut;break}else if(S[Ut]===null){S[Ut]=Mt,dt=Ut;break}if(dt===-1)break}const Pt=T[dt];Pt&&Pt.connect(Mt)}}const J=new R,rt=new R;function X(j,at,Mt){J.setFromMatrixPosition(at.matrixWorld),rt.setFromMatrixPosition(Mt.matrixWorld);const dt=J.distanceTo(rt),Pt=at.projectionMatrix.elements,Ut=Mt.projectionMatrix.elements,Wt=Pt[14]/(Pt[10]-1),de=Pt[14]/(Pt[10]+1),Yt=(Pt[9]+1)/Pt[5],pe=(Pt[9]-1)/Pt[5],z=(Pt[8]-1)/Pt[0],Ie=(Ut[8]+1)/Ut[0],Xt=Wt*z,qt=Wt*Ie,Ct=dt/(-z+Ie),re=Ct*-z;if(at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(re),j.translateZ(Ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pt[10]===-1)j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Rt=Wt+Ct,C=de+Ct,M=Xt-re,k=qt+(dt-re),Q=Yt*de/C*Rt,nt=pe*de/C*Rt;j.projectionMatrix.makePerspective(M,k,Q,nt,Rt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function lt(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let at=j.near,Mt=j.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),y.near=L.near=D.near=at,y.far=L.far=D.far=Mt,(I!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,W=y.far),D.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,y.layers.mask=D.layers.mask|L.layers.mask;const dt=j.parent,Pt=y.cameras;lt(y,dt);for(let Ut=0;Ut<Pt.length;Ut++)lt(Pt[Ut],dt);Pt.length===2?X(y,D,L):y.projectionMatrix.copy(D.projectionMatrix),gt(j,y,dt)};function gt(j,at,Mt){Mt===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Tt=null;function Vt(j,at){if(d=at.getViewerPose(c||a),x=at,d!==null){const Mt=d.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let dt=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,dt=!0);for(let Ut=0;Ut<Mt.length;Ut++){const Wt=Mt[Ut];let de=null;if(p!==null)de=p.getViewport(Wt);else{const pe=u.getViewSubImage(h,Wt);de=pe.viewport,Ut===0&&(t.setRenderTargetTextures(A,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(A))}let Yt=b[Ut];Yt===void 0&&(Yt=new Je,Yt.layers.enable(Ut),Yt.viewport=new ge,b[Ut]=Yt),Yt.matrix.fromArray(Wt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Wt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(de.x,de.y,de.width,de.height),Ut===0&&(y.matrix.copy(Yt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),dt===!0&&y.cameras.push(Yt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Ut=u.getDepthInformation(Mt[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,s.renderState)}}for(let Mt=0;Mt<T.length;Mt++){const dt=S[Mt],Pt=T[Mt];dt!==null&&Pt!==void 0&&Pt.update(dt,at,c||a)}Tt&&Tt(j,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),x=null}const ne=new Tc;ne.setAnimationLoop(Vt),this.setAnimationLoop=function(j){Tt=j},this.dispose=function(){}}}const Gn=new an,Fp=new ae;function Op(n,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,wc(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,A,T,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),u(_,m)):m.isMeshPhongMaterial?(r(_,m),d(_,m)):m.isMeshStandardMaterial?(r(_,m),h(_,m),m.isMeshPhysicalMaterial&&p(_,m,S)):m.isMeshMatcapMaterial?(r(_,m),x(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),v(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?l(_,m,A,T):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Pe&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Pe&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const A=t.get(m),T=A.envMap,S=A.envMapRotation;T&&(_.envMap.value=T,Gn.copy(S),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),_.envMapRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(Gn)),_.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,A,T){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*A,_.scale.value=T*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function d(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function h(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,A){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pe&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){const A=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zp(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=s[A.id];S===void 0&&(x(A),S=d(A),s[A.id]=S,A.addEventListener("dispose",_));const O=T.program;i.updateUBOMapping(A,O);const P=t.render.frame;r[A.id]!==P&&(h(A),r[A.id]=P)}function d(A){const T=u();A.__bindingPointIndex=T;const S=n.createBuffer(),O=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const T=s[A.id],S=A.uniforms,O=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,D=S.length;P<D;P++){const L=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,y=L.length;b<y;b++){const I=L[b];if(p(I,P,b,O)===!0){const W=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let et=0;et<H.length;et++){const J=H[et],rt=v(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,W+Y,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,Y),Y+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,S,O){const P=A.value,D=T+"_"+S;if(O[D]===void 0)return typeof P=="number"||typeof P=="boolean"?O[D]=P:O[D]=P.clone(),!0;{const L=O[D];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return O[D]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function x(A){const T=A.uniforms;let S=0;const O=16;for(let D=0,L=T.length;D<L;D++){const b=Array.isArray(T[D])?T[D]:[T[D]];for(let y=0,I=b.length;y<I;y++){const W=b[y],H=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,et=H.length;Y<et;Y++){const J=H[Y],rt=v(J),X=S%O,lt=X%rt.boundary,gt=X+lt;S+=lt,gt!==0&&O-gt<rt.storage&&(S+=O-gt),W.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=rt.storage}}}const P=S%O;return P>0&&(S+=O-P),A.__size=S,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function _(A){const T=A.target;T.removeEventListener("dispose",_);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Bp{constructor(t={}){const{canvas:e=Tl(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Un,this.toneMappingExposure=1;const S=this;let O=!1,P=0,D=0,L=null,b=-1,y=null;const I=new ge,W=new ge;let H=null;const Y=new Gt(0);let et=0,J=e.width,rt=e.height,X=1,lt=null,gt=null;const Tt=new ge(0,0,J,rt),Vt=new ge(0,0,J,rt);let ne=!1;const j=new ba;let at=!1,Mt=!1;const dt=new ae,Pt=new ae,Ut=new R,Wt=new ge,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function pe(){return L===null?X:1}let z=i;function Ie(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),z===null){const N="webgl2";if(z=Ie(N,w),z===null)throw Ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Xt,qt,Ct,re,Rt,C,M,k,Q,nt,$,St,ht,_t,Kt,st,xt,It,Lt,vt,Jt,kt,oe,U;function ut(){Xt=new Vu(z),Xt.init(),kt=new Cp(z,Xt),qt=new Ou(z,Xt,t,kt),Ct=new Tp(z,Xt),qt.reverseDepthBuffer&&h&&Ct.buffers.depth.setReversed(!0),re=new qu(z),Rt=new hp,C=new Rp(z,Xt,Ct,Rt,qt,kt,re),M=new Bu(S),k=new Gu(S),Q=new Ql(z),oe=new Nu(z,Q),nt=new Wu(z,Q,re,oe),$=new Ku(z,nt,Q,re),Lt=new Yu(z,qt,C),st=new zu(Rt),St=new dp(S,M,k,Xt,qt,oe,st),ht=new Op(S,Rt),_t=new fp,Kt=new vp(Xt),It=new Uu(S,M,k,Ct,$,p,l),xt=new Ep(S,$,qt),U=new zp(z,re,qt,Ct),vt=new Fu(z,Xt,re),Jt=new Xu(z,Xt,re),re.programs=St.programs,S.capabilities=qt,S.extensions=Xt,S.properties=Rt,S.renderLists=_t,S.shadowMap=xt,S.state=Ct,S.info=re}ut();const q=new Np(S,z);this.xr=q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(J,rt,!1))},this.getSize=function(w){return w.set(J,rt)},this.setSize=function(w,N,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,rt=N,e.width=Math.floor(w*X),e.height=Math.floor(N*X),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(J*X,rt*X).floor()},this.setDrawingBufferSize=function(w,N,G){J=w,rt=N,X=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Tt)},this.setViewport=function(w,N,G,V){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,N,G,V),Ct.viewport(I.copy(Tt).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,N,G,V){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,N,G,V),Ct.scissor(W.copy(Vt).multiplyScalar(X).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){Ct.setScissorTest(ne=w)},this.setOpaqueSort=function(w){lt=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,N=!0,G=!0){let V=0;if(w){let F=!1;if(L!==null){const ot=L.texture.format;F=ot===wa||ot===ya||ot===Sa}if(F){const ot=L.texture.type,pt=ot===vn||ot===$n||ot===$i||ot===Ti||ot===xa||ot===va,yt=It.getClearColor(),wt=It.getClearAlpha(),Nt=yt.r,zt=yt.g,Et=yt.b;pt?(x[0]=Nt,x[1]=zt,x[2]=Et,x[3]=wt,z.clearBufferuiv(z.COLOR,0,x)):(v[0]=Nt,v[1]=zt,v[2]=Et,v[3]=wt,z.clearBufferiv(z.COLOR,0,v))}else V|=z.COLOR_BUFFER_BIT}N&&(V|=z.DEPTH_BUFFER_BIT),G&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Kt.dispose(),Rt.dispose(),M.dispose(),k.dispose(),$.dispose(),oe.dispose(),U.dispose(),St.dispose(),q.dispose(),q.removeEventListener("sessionstart",La),q.removeEventListener("sessionend",Ua),Fn.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=re.autoReset,N=xt.enabled,G=xt.autoUpdate,V=xt.needsUpdate,F=xt.type;ut(),re.autoReset=w,xt.enabled=N,xt.autoUpdate=G,xt.needsUpdate=V,xt.type=F}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ot(w){const N=w.target;N.removeEventListener("dispose",Ot),me(N)}function me(w){we(w),Rt.remove(w)}function we(w){const N=Rt.get(w).programs;N!==void 0&&(N.forEach(function(G){St.releaseProgram(G)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,V,F,ot){N===null&&(N=de);const pt=F.isMesh&&F.matrixWorld.determinant()<0,yt=Oc(w,N,G,V,F);Ct.setMaterial(V,pt);let wt=G.index,Nt=1;if(V.wireframe===!0){if(wt=nt.getWireframeAttribute(G),wt===void 0)return;Nt=2}const zt=G.drawRange,Et=G.attributes.position;let $t=zt.start*Nt,ce=(zt.start+zt.count)*Nt;ot!==null&&($t=Math.max($t,ot.start*Nt),ce=Math.min(ce,(ot.start+ot.count)*Nt)),wt!==null?($t=Math.max($t,0),ce=Math.min(ce,wt.count)):Et!=null&&($t=Math.max($t,0),ce=Math.min(ce,Et.count));const he=ce-$t;if(he<0||he===1/0)return;oe.setup(F,V,yt,G,wt);let Le,Qt=vt;if(wt!==null&&(Le=Q.get(wt),Qt=Jt,Qt.setIndex(Le)),F.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*pe()),Qt.setMode(z.LINES)):Qt.setMode(z.TRIANGLES);else if(F.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Ct.setLineWidth(bt*pe()),F.isLineSegments?Qt.setMode(z.LINES):F.isLineLoop?Qt.setMode(z.LINE_LOOP):Qt.setMode(z.LINE_STRIP)}else F.isPoints?Qt.setMode(z.POINTS):F.isSprite&&Qt.setMode(z.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,ln=F._multiDrawCounts,te=F._multiDrawCount,We=wt?Q.get(wt).bytesPerElement:1,ei=Rt.get(V).currentProgram.getUniforms();for(let Fe=0;Fe<te;Fe++)ei.setValue(z,"_gl_DrawID",Fe),Qt.render(bt[Fe]/We,ln[Fe])}else if(F.isInstancedMesh)Qt.renderInstances($t,he,F.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ln=Math.min(G.instanceCount,bt);Qt.renderInstances($t,he,ln)}else Qt.render($t,he)};function ie(w,N,G){w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=Pe,w.needsUpdate=!0,rs(w,N,G),w.side=Nn,w.needsUpdate=!0,rs(w,N,G),w.side=en):rs(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),m=Kt.get(G),m.init(N),T.push(m),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){const yt=ot[pt];ie(yt,G,F),V.add(yt)}else ie(ot,G,F),V.add(ot)}),T.pop(),m=null,V},this.compileAsync=function(w,N,G=null){const V=this.compile(w,N,G);return new Promise(F=>{function ot(){if(V.forEach(function(pt){Rt.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){F(w);return}setTimeout(ot,10)}Xt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ve=null;function cn(w){Ve&&Ve(w)}function La(){Fn.stop()}function Ua(){Fn.start()}const Fn=new Tc;Fn.setAnimationLoop(cn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(w){Ve=w,q.setAnimationLoop(w),w===null?Fn.stop():Fn.start()},q.addEventListener("sessionstart",La),q.addEventListener("sessionend",Ua),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,N,L),m=Kt.get(w,T.length),m.init(N),T.push(m),Pt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,at=st.init(this.clippingPlanes,Mt),_=_t.get(w,A.length),_.init(),A.push(_),q.enabled===!0&&q.isPresenting===!0){const ot=S.xr.getDepthSensingMesh();ot!==null&&qs(ot,N,-1/0,S.sortObjects)}qs(w,N,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(lt,gt),Yt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Yt&&It.addToRenderList(_,w),this.info.render.frame++,at===!0&&st.beginShadows();const G=m.state.shadowsArray;xt.render(G,w,N),at===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,F=_.transmissive;if(m.setupLights(),N.isArrayCamera){const ot=N.cameras;if(F.length>0)for(let pt=0,yt=ot.length;pt<yt;pt++){const wt=ot[pt];Fa(V,F,w,wt)}Yt&&It.render(w);for(let pt=0,yt=ot.length;pt<yt;pt++){const wt=ot[pt];Na(_,w,wt,wt.viewport)}}else F.length>0&&Fa(V,F,w,N),Yt&&It.render(w),Na(_,w,N);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(S,w,N),oe.resetDefaultState(),b=-1,y=null,T.pop(),T.length>0?(m=T[T.length-1],at===!0&&st.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,A.pop(),A.length>0?_=A[A.length-1]:_=null};function qs(w,N,G,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){V&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);const pt=$.update(w),yt=w.material;yt.visible&&_.push(w,pt,yt,G,Wt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const pt=$.update(w),yt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Wt.copy(pt.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(yt)){const wt=pt.groups;for(let Nt=0,zt=wt.length;Nt<zt;Nt++){const Et=wt[Nt],$t=yt[Et.materialIndex];$t&&$t.visible&&_.push(w,pt,$t,G,Wt.z,Et)}}else yt.visible&&_.push(w,pt,yt,G,Wt.z,null)}}const ot=w.children;for(let pt=0,yt=ot.length;pt<yt;pt++)qs(ot[pt],N,G,V)}function Na(w,N,G,V){const F=w.opaque,ot=w.transmissive,pt=w.transparent;m.setupLightsView(G),at===!0&&st.setGlobalState(S.clippingPlanes,G),V&&Ct.viewport(I.copy(V)),F.length>0&&ss(F,N,G),ot.length>0&&ss(ot,N,G),pt.length>0&&ss(pt,N,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Fa(w,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new jn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Qi:vn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ot=m.state.transmissionRenderTarget[V.id],pt=V.viewport||I;ot.setSize(pt.z,pt.w);const yt=S.getRenderTarget();S.setRenderTarget(ot),S.getClearColor(Y),et=S.getClearAlpha(),et<1&&S.setClearColor(16777215,.5),S.clear(),Yt&&It.render(G);const wt=S.toneMapping;S.toneMapping=Un;const Nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),at===!0&&st.setGlobalState(S.clippingPlanes,V),ss(w,G,V),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Et=0,$t=N.length;Et<$t;Et++){const ce=N[Et],he=ce.object,Le=ce.geometry,Qt=ce.material,bt=ce.group;if(Qt.side===en&&he.layers.test(V.layers)){const ln=Qt.side;Qt.side=Pe,Qt.needsUpdate=!0,Oa(he,G,V,Le,Qt,bt),Qt.side=ln,Qt.needsUpdate=!0,zt=!0}}zt===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}S.setRenderTarget(yt),S.setClearColor(Y,et),Nt!==void 0&&(V.viewport=Nt),S.toneMapping=wt}function ss(w,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ot=w.length;F<ot;F++){const pt=w[F],yt=pt.object,wt=pt.geometry,Nt=V===null?pt.material:V,zt=pt.group;yt.layers.test(G.layers)&&Oa(yt,N,G,wt,Nt,zt)}}function Oa(w,N,G,V,F,ot){w.onBeforeRender(S,N,G,V,F,ot),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(S,N,G,V,w,ot),F.transparent===!0&&F.side===en&&F.forceSinglePass===!1?(F.side=Pe,F.needsUpdate=!0,S.renderBufferDirect(G,N,V,F,w,ot),F.side=Nn,F.needsUpdate=!0,S.renderBufferDirect(G,N,V,F,w,ot),F.side=en):S.renderBufferDirect(G,N,V,F,w,ot),w.onAfterRender(S,N,G,V,F,ot)}function rs(w,N,G){N.isScene!==!0&&(N=de);const V=Rt.get(w),F=m.state.lights,ot=m.state.shadowsArray,pt=F.state.version,yt=St.getParameters(w,F.state,ot,N,G),wt=St.getProgramCacheKey(yt);let Nt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?k:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",Ot),Nt=new Map,V.programs=Nt);let zt=Nt.get(wt);if(zt!==void 0){if(V.currentProgram===zt&&V.lightsStateVersion===pt)return Ba(w,yt),zt}else yt.uniforms=St.getUniforms(w),w.onBeforeCompile(yt,S),zt=St.acquireProgram(yt,wt),Nt.set(wt,zt),V.uniforms=yt.uniforms;const Et=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Et.clippingPlanes=st.uniform),Ba(w,yt),V.needsLights=Bc(w),V.lightsStateVersion=pt,V.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=zt,V.uniformsList=null,zt}function za(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=zs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Ba(w,N){const G=Rt.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Oc(w,N,G,V,F){N.isScene!==!0&&(N=de),C.resetTextureUnits();const ot=N.fog,pt=V.isMeshStandardMaterial?N.environment:null,yt=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ci,wt=(V.isMeshStandardMaterial?k:M).get(V.envMap||pt),Nt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,zt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let he=Un;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(he=S.toneMapping);const Le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=Le!==void 0?Le.length:0,bt=Rt.get(V),ln=m.state.lights;if(at===!0&&(Mt===!0||w!==y)){const He=w===y&&V.id===b;st.setState(V,w,He)}let te=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ln.state.version||bt.outputColorSpace!==yt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==wt||V.fog===!0&&bt.fog!==ot||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==st.numPlanes||bt.numIntersection!==st.numIntersection)||bt.vertexAlphas!==Nt||bt.vertexTangents!==zt||bt.morphTargets!==Et||bt.morphNormals!==$t||bt.morphColors!==ce||bt.toneMapping!==he||bt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,bt.__version=V.version);let We=bt.currentProgram;te===!0&&(We=rs(V,N,F));let ei=!1,Fe=!1,Fi=!1;const ue=We.getUniforms(),je=bt.uniforms;if(Ct.useProgram(We.program)&&(ei=!0,Fe=!0,Fi=!0),V.id!==b&&(b=V.id,Fe=!0),ei||y!==w){Ct.buffers.depth.getReversed()?(dt.copy(w.projectionMatrix),Rl(dt),Cl(dt),ue.setValue(z,"projectionMatrix",dt)):ue.setValue(z,"projectionMatrix",w.projectionMatrix),ue.setValue(z,"viewMatrix",w.matrixWorldInverse);const yn=ue.map.cameraPosition;yn!==void 0&&yn.setValue(z,Ut.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&ue.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ue.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Fe=!0,Fi=!0)}if(F.isSkinnedMesh){ue.setOptional(z,F,"bindMatrix"),ue.setOptional(z,F,"bindMatrixInverse");const He=F.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ue.setValue(z,"boneTexture",He.boneTexture,C))}F.isBatchedMesh&&(ue.setOptional(z,F,"batchingTexture"),ue.setValue(z,"batchingTexture",F._matricesTexture,C),ue.setOptional(z,F,"batchingIdTexture"),ue.setValue(z,"batchingIdTexture",F._indirectTexture,C),ue.setOptional(z,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(z,"batchingColorTexture",F._colorsTexture,C));const Oi=G.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Lt.update(F,G,We),(Fe||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,ue.setValue(z,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(je.envMap.value=wt,je.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(je.envMapIntensity.value=N.environmentIntensity),Fe&&(ue.setValue(z,"toneMappingExposure",S.toneMappingExposure),bt.needsLights&&zc(je,Fi),ot&&V.fog===!0&&ht.refreshFogUniforms(je,ot),ht.refreshMaterialUniforms(je,V,X,rt,m.state.transmissionRenderTarget[w.id]),zs.upload(z,za(bt),je,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zs.upload(z,za(bt),je,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ue.setValue(z,"center",F.center),ue.setValue(z,"modelViewMatrix",F.modelViewMatrix),ue.setValue(z,"normalMatrix",F.normalMatrix),ue.setValue(z,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const He=V.uniformsGroups;for(let yn=0,wn=He.length;yn<wn;yn++){const ka=He[yn];U.update(ka,We),U.bind(ka,We)}}return We}function zc(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Bc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,G){Rt.get(w.texture).__webglTexture=N,Rt.get(w.depthTexture).__webglTexture=G;const V=Rt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const G=Rt.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,G=0){L=w,P=N,D=G;let V=!0,F=null,ot=!1,pt=!1;if(w){const wt=Rt.get(w);if(wt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(z.FRAMEBUFFER,null),V=!1;else if(wt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(wt.__hasExternalTextures)C.rebindTextures(w,Rt.get(w.texture).__webglTexture,Rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Et=w.depthTexture;if(wt.__boundDepthTexture!==Et){if(Et!==null&&Rt.has(Et)&&(w.width!==Et.image.width||w.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);const zt=Rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?F=zt[N][G]:F=zt[N],ot=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=Rt.get(w).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[G]:F=zt,I.copy(w.viewport),W.copy(w.scissor),H=w.scissorTest}else I.copy(Tt).multiplyScalar(X).floor(),W.copy(Vt).multiplyScalar(X).floor(),H=ne;if(Ct.bindFramebuffer(z.FRAMEBUFFER,F)&&V&&Ct.drawBuffers(w,F),Ct.viewport(I),Ct.scissor(W),Ct.setScissorTest(H),ot){const wt=Rt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,G)}else if(pt){const wt=Rt.get(w.texture),Nt=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.__webglTexture,G||0,Nt)}b=-1},this.readRenderTargetPixels=function(w,N,G,V,F,ot,pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Ct.bindFramebuffer(z.FRAMEBUFFER,yt);try{const wt=w.texture,Nt=wt.format,zt=wt.type;if(!qt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&G>=0&&G<=w.height-F&&z.readPixels(N,G,V,F,kt.convert(Nt),kt.convert(zt),ot)}finally{const wt=L!==null?Rt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(z.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,V,F,ot,pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){const wt=w.texture,Nt=wt.format,zt=wt.type;if(!qt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&G>=0&&G<=w.height-F){Ct.bindFramebuffer(z.FRAMEBUFFER,yt);const Et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.bufferData(z.PIXEL_PACK_BUFFER,ot.byteLength,z.STREAM_READ),z.readPixels(N,G,V,F,kt.convert(Nt),kt.convert(zt),0);const $t=L!==null?Rt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(z.FRAMEBUFFER,$t);const ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Al(z,ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ot),z.deleteBuffer(Et),z.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,G=0){w.isTexture!==!0&&(Yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),F=Math.floor(w.image.width*V),ot=Math.floor(w.image.height*V),pt=N!==null?N.x:0,yt=N!==null?N.y:0;C.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,pt,yt,F,ot),Ct.unbindTexture()},this.copyTextureToTexture=function(w,N,G=null,V=null,F=0){w.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,G=null);let ot,pt,yt,wt,Nt,zt,Et,$t,ce;const he=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(ot=G.max.x-G.min.x,pt=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,Nt=G.min.y,zt=G.isBox3?G.min.z:0):(ot=he.width,pt=he.height,yt=he.depth||1,wt=0,Nt=0,zt=0),V!==null?(Et=V.x,$t=V.y,ce=V.z):(Et=0,$t=0,ce=0);const Le=kt.convert(N.format),Qt=kt.convert(N.type);let bt;N.isData3DTexture?(C.setTexture3D(N,0),bt=z.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),bt=z.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),bt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);const ln=z.getParameter(z.UNPACK_ROW_LENGTH),te=z.getParameter(z.UNPACK_IMAGE_HEIGHT),We=z.getParameter(z.UNPACK_SKIP_PIXELS),ei=z.getParameter(z.UNPACK_SKIP_ROWS),Fe=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,he.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,zt);const Fi=w.isDataArrayTexture||w.isData3DTexture,ue=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const je=Rt.get(w),Oi=Rt.get(N),He=Rt.get(je.__renderTarget),yn=Rt.get(Oi.__renderTarget);Ct.bindFramebuffer(z.READ_FRAMEBUFFER,He.__webglFramebuffer),Ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let wn=0;wn<yt;wn++)Fi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.get(w).__webglTexture,F,zt+wn),w.isDepthTexture?(ue&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.get(N).__webglTexture,F,ce+wn),z.blitFramebuffer(wt,Nt,ot,pt,Et,$t,ot,pt,z.DEPTH_BUFFER_BIT,z.NEAREST)):ue?z.copyTexSubImage3D(bt,F,Et,$t,ce+wn,wt,Nt,ot,pt):z.copyTexSubImage2D(bt,F,Et,$t,ce+wn,wt,Nt,ot,pt);Ct.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ue?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(bt,F,Et,$t,ce,ot,pt,yt,Le,Qt,he.data):N.isCompressedArrayTexture?z.compressedTexSubImage3D(bt,F,Et,$t,ce,ot,pt,yt,Le,he.data):z.texSubImage3D(bt,F,Et,$t,ce,ot,pt,yt,Le,Qt,he):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,F,Et,$t,ot,pt,Le,Qt,he.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,F,Et,$t,he.width,he.height,Le,he.data):z.texSubImage2D(z.TEXTURE_2D,F,Et,$t,ot,pt,Le,Qt,he);z.pixelStorei(z.UNPACK_ROW_LENGTH,ln),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,te),z.pixelStorei(z.UNPACK_SKIP_PIXELS,We),z.pixelStorei(z.UNPACK_SKIP_ROWS,ei),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Fe),F===0&&N.generateMipmaps&&z.generateMipmap(bt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(w,N,G=null,V=null,F=0){return w.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,G,V,F)},this.initRenderTarget=function(w){Rt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ct.unbindTexture()},this.resetState=function(){P=0,D=0,L=null,Ct.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class Aa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Aa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kp extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hp extends Ae{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Be,d=Be,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko extends ke{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gi=new ae,Ho=new ae,As=[],Go=new Qn,Gp=new ae,Vi=new le,Wi=new Di;class Vp extends le{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gi),Go.copy(t.boundingBox).applyMatrix4(gi),this.boundingBox.union(Go)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gi),Wi.copy(t.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Wi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(i),t.ray.intersectsSphere(Wi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gi),Ho.multiplyMatrices(i,gi),Vi.matrixWorld=Ho,Vi.raycast(t,As);for(let a=0,o=As.length;a<o;a++){const l=As[a];l.instanceId=r,l.object=this,e.push(l)}As.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hp(new Float32Array(s*this.count),s,this.count,Ma,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Lc extends Ii{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vo=new ae,ma=new xc,Rs=new Di,Cs=new R;class Wp extends ve{constructor(t=new De,e=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),Rs.radius+=r,t.ray.intersectsSphere(Rs)===!1)return;Vo.copy(s).invert(),ma.copy(t.ray).applyMatrix4(Vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=h,v=p;x<v;x++){const _=c.getX(x);Cs.fromBufferAttribute(u,_),Wo(Cs,_,l,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=h,v=p;x<v;x++)Cs.fromBufferAttribute(u,x),Wo(Cs,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wo(n,t,e,i,s,r,a){const o=ma.distanceSqToPoint(n);if(o<e){const l=new R;ma.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xp extends Ae{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const d=i[s],h=i[s+1]-d,p=(a-d)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new At:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new R,s=[],r=[],a=[],o=new R,l=new ae;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,x))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uc extends Sn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new At){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*u+this.aX,c=h*u+p*d+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qp extends Uc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ra(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let h=(a-r)/c-(o-r)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+u)+(l-o)/u;h*=d,p*=d,s(a,o,h,p)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Ps=new R,wr=new Ra,Er=new Ra,br=new Ra;class Ni extends Sn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(Ps.subVectors(s[0],s[1]).add(s[0]),c=Ps);const u=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Ps.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p);v<1e-4&&(v=1),x<1e-4&&(x=v),_<1e-4&&(_=v),wr.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,x,v,_),Er.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,x,v,_),br.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,x,v,_)}else this.curveType==="catmullrom"&&(wr.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Er.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),br.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return i.set(wr.calc(l),Er.calc(l),br.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xo(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Yp(n,t){const e=1-n;return e*e*t}function Kp(n,t){return 2*(1-n)*n*t}function Jp(n,t){return n*n*t}function Ji(n,t,e,i){return Yp(n,t)+Kp(n,e)+Jp(n,i)}function Zp(n,t){const e=1-n;return e*e*e*t}function $p(n,t){const e=1-n;return 3*e*e*n*t}function jp(n,t){return 3*(1-n)*n*n*t}function Qp(n,t){return n*n*n*t}function Zi(n,t,e,i,s){return Zp(n,t)+$p(n,e)+jp(n,i)+Qp(n,s)}class t0 extends Sn{constructor(t=new At,e=new At,i=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new At){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Zi(t,s.x,r.x,a.x,o.x),Zi(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e0 extends Sn{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Zi(t,s.x,r.x,a.x,o.x),Zi(t,s.y,r.y,a.y,o.y),Zi(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class n0 extends Sn{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class i0 extends Sn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s0 extends Sn{constructor(t=new At,e=new At,i=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new At){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ji(t,s.x,r.x,a.x),Ji(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nc extends Sn{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ji(t,s.x,r.x,a.x),Ji(t,s.y,r.y,a.y),Ji(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r0 extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Xo(o,l.x,c.x,d.x,u.x),Xo(o,l.y,c.y,d.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var a0=Object.freeze({__proto__:null,ArcCurve:qp,CatmullRomCurve3:Ni,CubicBezierCurve:t0,CubicBezierCurve3:e0,EllipseCurve:Uc,LineCurve:n0,LineCurve3:i0,QuadraticBezierCurve:s0,QuadraticBezierCurve3:Nc,SplineCurve:r0});class Z extends De{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],p=[];let x=0;const v=[],_=i/2;let m=0;A(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(p,2));function A(){const S=new R,O=new R;let P=0;const D=(e-t)/i;for(let L=0;L<=r;L++){const b=[],y=L/r,I=y*(e-t)+t;for(let W=0;W<=s;W++){const H=W/s,Y=H*l+o,et=Math.sin(Y),J=Math.cos(Y);O.x=I*et,O.y=-y*i+_,O.z=I*J,u.push(O.x,O.y,O.z),S.set(et,D,J).normalize(),h.push(S.x,S.y,S.z),p.push(H,1-y),b.push(x++)}v.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const y=v[b][L],I=v[b+1][L],W=v[b+1][L+1],H=v[b][L+1];(t>0||b!==0)&&(d.push(y,I,H),P+=3),(e>0||b!==r-1)&&(d.push(I,W,H),P+=3)}c.addGroup(m,P,0),m+=P}function T(S){const O=x,P=new At,D=new R;let L=0;const b=S===!0?t:e,y=S===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,_*y,0),h.push(0,y,0),p.push(.5,.5),x++;const I=x;for(let W=0;W<=s;W++){const Y=W/s*l+o,et=Math.cos(Y),J=Math.sin(Y);D.x=b*J,D.y=_*y,D.z=b*et,u.push(D.x,D.y,D.z),h.push(0,y,0),P.x=et*.5+.5,P.y=J*.5*y+.5,p.push(P.x,P.y),x++}for(let W=0;W<s;W++){const H=O+W,Y=I+W;S===!0?d.push(Y,Y+1,H):d.push(Y+1,Y,H),L+=3}c.addGroup(m,L,S===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Z(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ns extends Z{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ns(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class is extends De{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const T=new R,S=new R,O=new R;for(let P=0;P<e.length;P+=3)p(e[P+0],T),p(e[P+1],S),p(e[P+2],O),l(T,S,O,A)}function l(A,T,S,O){const P=O+1,D=[];for(let L=0;L<=P;L++){D[L]=[];const b=A.clone().lerp(S,L/P),y=T.clone().lerp(S,L/P),I=P-L;for(let W=0;W<=I;W++)W===0&&L===P?D[L][W]=b:D[L][W]=b.clone().lerp(y,W/I)}for(let L=0;L<P;L++)for(let b=0;b<2*(P-L)-1;b++){const y=Math.floor(b/2);b%2===0?(h(D[L][y+1]),h(D[L+1][y]),h(D[L][y])):(h(D[L][y+1]),h(D[L+1][y+1]),h(D[L+1][y]))}}function c(A){const T=new R;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(A),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function d(){const A=new R;for(let T=0;T<r.length;T+=3){A.x=r[T+0],A.y=r[T+1],A.z=r[T+2];const S=_(A)/2/Math.PI+.5,O=m(A)/Math.PI+.5;a.push(S,1-O)}x(),u()}function u(){for(let A=0;A<a.length;A+=6){const T=a[A+0],S=a[A+2],O=a[A+4],P=Math.max(T,S,O),D=Math.min(T,S,O);P>.9&&D<.1&&(T<.2&&(a[A+0]+=1),S<.2&&(a[A+2]+=1),O<.2&&(a[A+4]+=1))}}function h(A){r.push(A.x,A.y,A.z)}function p(A,T){const S=A*3;T.x=t[S+0],T.y=t[S+1],T.z=t[S+2]}function x(){const A=new R,T=new R,S=new R,O=new R,P=new At,D=new At,L=new At;for(let b=0,y=0;b<r.length;b+=9,y+=6){A.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),P.set(a[y+0],a[y+1]),D.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),O.copy(A).add(T).add(S).divideScalar(3);const I=_(O);v(P,y+0,A,I),v(D,y+2,T,I),v(L,y+4,S,I)}}function v(A,T,S,O){O<0&&A.x===1&&(a[T]=A.x-1),S.x===0&&S.z===0&&(a[T]=O/2/Math.PI+.5)}function _(A){return Math.atan2(A.z,-A.x)}function m(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.vertices,t.indices,t.radius,t.details)}}class Re extends is{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Re(t.radius,t.detail)}}class Ca extends is{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ca(t.radius,t.detail)}}class Pa extends is{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pa(t.radius,t.detail)}}class ji extends De{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let u=t;const h=(e-t)/s,p=new R,x=new At;for(let v=0;v<=s;v++){for(let _=0;_<=i;_++){const m=r+_/i*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,d.push(x.x,x.y)}u+=h}for(let v=0;v<s;v++){const _=v*(i+1);for(let m=0;m<i;m++){const A=m+_,T=A,S=A+i+1,O=A+i+2,P=A+1;o.push(T,S,P),o.push(S,O,P)}}this.setIndex(o),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xe extends De{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new R,h=new R,p=[],x=[],v=[],_=[];for(let m=0;m<=i;m++){const A=[],T=m/i;let S=0;m===0&&a===0?S=.5/e:m===i&&l===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const P=O/e;u.x=-t*Math.cos(s+P*r)*Math.sin(a+T*o),u.y=t*Math.cos(a+T*o),u.z=t*Math.sin(s+P*r)*Math.sin(a+T*o),x.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),_.push(P+S,1-T),A.push(c++)}d.push(A)}for(let m=0;m<i;m++)for(let A=0;A<e;A++){const T=d[m][A+1],S=d[m][A],O=d[m+1][A],P=d[m+1][A+1];(m!==0||a>0)&&p.push(T,S,P),(m!==i-1||l<Math.PI)&&p.push(S,O,P)}this.setIndex(p),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ee extends De{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],d=new R,u=new R,h=new R;for(let p=0;p<=i;p++)for(let x=0;x<=s;x++){const v=x/s*r,_=p/i*Math.PI*2;u.x=(t+e*Math.cos(_))*Math.cos(v),u.y=(t+e*Math.cos(_))*Math.sin(v),u.z=e*Math.sin(_),o.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(x/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=s;x++){const v=(s+1)*p+x-1,_=(s+1)*(p-1)+x-1,m=(s+1)*(p-1)+x,A=(s+1)*p+x;a.push(v,_,A),a.push(_,m,A)}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ti extends De{constructor(t=new Nc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new At;let d=new R;const u=[],h=[],p=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(p,2));function v(){for(let T=0;T<e;T++)_(T);_(r===!1?e:0),A(),m()}function _(T){d=t.getPointAt(T/e,d);const S=a.normals[T],O=a.binormals[T];for(let P=0;P<=s;P++){const D=P/s*Math.PI*2,L=Math.sin(D),b=-Math.cos(D);l.x=b*S.x+L*O.x,l.y=b*S.y+L*O.y,l.z=b*S.z+L*O.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=d.x+i*l.x,o.y=d.y+i*l.y,o.z=d.z+i*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=e;T++)for(let S=1;S<=s;S++){const O=(s+1)*(T-1)+(S-1),P=(s+1)*T+(S-1),D=(s+1)*T+S,L=(s+1)*(T-1)+S;x.push(O,P,L),x.push(P,D,L)}}function A(){for(let T=0;T<=e;T++)for(let S=0;S<=s;S++)c.x=T/e,c.y=S/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ti(new a0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ft extends Ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Da extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class o0 extends Da{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Tr=new ae,qo=new R,Yo=new R;class c0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;qo.setFromMatrixPosition(t.matrixWorld),e.position.copy(qo),Yo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yo),e.updateMatrixWorld(),Tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class l0 extends c0{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d0 extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new l0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class h0 extends Da{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ko(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ko();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ko(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);function Ds(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Ia(n,t){const e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Ds(e,i),c=Ds(e+1,i),d=Ds(e,i+1),u=Ds(e+1,i+1);return l+(c-l)*a+(d-l)*o+(l-c-d+u)*a*o}function Jo(n,t,e=4){let i=0,s=.5,r=1;for(let a=0;a<e;a++)i+=Ia(n*r,t*r)*s,r*=2,s*=.5;return i}function Hs(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}function u0(n,t,e){return n+(t-n)*e}const Gs=640,Zo=180,f0=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function p0(n,t,e,i,s,r){const a=n-e,o=t-i,l=Math.sqrt(a*a+o*o);if(l>s)return 0;const c=l/s,d=-r*(1-c*c),u=r*.28*Math.exp(-((c-.86)*(c-.86))/.018);return d+u}const m0=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18],[-20,-100,10,16],[-8,-162,10,16],[8,-98,10,16],[48,-70,10,16],[-68,12,12,18],[22,-80,10,16],[52,-112,12,18],[-90,-158,10,16],[8,-78,10,16],[-8,-88,10,16],[-96,4,10,16],[142,-62,8,14],[28,-140,10,16],[-90,-148,8,14],[12,18,8,12],[36,8,10,16],[36,-6,10,16],[-50,4,10,16],[-58,-142,10,16],[-32,-22,10,16],[66,-90,10,16],[22,-98,10,16],[172,-48,10,16],[38,-104,10,16],[24,-128,8,14],[-80,20,10,16]];function K(n,t){let e=0;e+=(Jo(n*.0038,t*.0038,5)-.45)*16,e+=(Jo(n*.018,t*.018,3)-.5)*2.8,e+=(Ia(n*.07,t*.07)-.5)*.45;for(const[i,s,r,a]of f0)e+=p0(n,t,i,s,r,a);for(const[i,s,r,a]of m0){const o=Hs(a,r,Math.hypot(n-i,t-s));e=u0(e,.35+e*.12,o)}return e}function g0(n,t,e,i){const s=new Gt(9059108),r=new Gt(12085818),a=new Gt(12880469),o=new Gt(4858904),l=Hs(-4,8,e),c=s.clone().lerp(r,l).lerp(a,Hs(6,14,e)*.35);i>.45&&c.lerp(o,Math.min(.55,(i-.45)*1.4));const d=Ia(n*.11,t*.11);c.offsetHSL(0,(d-.5)*.08,(d-.5)*.06);const u=_0(n,t);return u>0&&c.lerp(new Gt(5911332),u*.85),c}function _0(n,t){const e=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152},{ax:-32,az:-148,bx:-8,bz:-162},{ax:-6,az:-108,bx:8,bz:-98},{ax:22,az:-112,bx:8,bz:-98},{ax:48,az:-86,bx:48,bz:-70},{ax:-68,az:-16,bx:-68,bz:12},{ax:-36,az:-74,bx:22,bz:-80},{ax:48,az:-86,bx:22,bz:-80},{ax:22,az:-112,bx:52,bz:-112},{ax:38,az:-126,bx:52,bz:-112},{ax:-78,az:-172,bx:-90,bz:-158},{ax:8,az:-98,bx:8,bz:-78},{ax:22,az:-80,bx:8,bz:-78},{ax:8,az:-98,bx:-8,bz:-88},{ax:-22,az:-88,bx:-8,bz:-88},{ax:-96,az:-16,bx:-96,bz:4},{ax:158,az:-62,bx:142,bz:-62},{ax:8,az:-142,bx:28,bz:-140},{ax:18,az:-152,bx:28,bz:-140},{ax:-90,az:-158,bx:-90,bz:-148},{ax:5,az:16,bx:12,bz:18},{ax:20,az:8,bx:36,bz:8},{ax:36,az:8,bx:36,bz:-6},{ax:-68,az:4,bx:-50,bz:4},{ax:-58,az:-158,bx:-58,bz:-142},{ax:-15,az:-8,bx:-32,bz:-22},{ax:66,az:-74,bx:66,bz:-90},{ax:8,az:-98,bx:22,bz:-98},{ax:158,az:-62,bx:172,bz:-48},{ax:22,az:-112,bx:38,bz:-104},{ax:10,az:-124,bx:24,bz:-128},{ax:-68,az:12,bx:-80,bz:20}];let i=0;for(const s of e){const r=s.bx-s.ax,a=s.bz-s.az,o=r*r+a*a;let l=((n-s.ax)*r+(t-s.az)*a)/o;l=Math.min(1,Math.max(0,l));const c=s.ax+r*l,d=s.az+a*l,u=Math.hypot(n-c,t-d);i=Math.max(i,Hs(5.4,1.6,u))}return i}function x0(){const n=new Li(Gs,Gs,Zo,Zo);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){const o=t.getX(a),l=t.getZ(a),c=K(o,l);t.setY(a,c)}n.computeVertexNormals();const i=n.attributes.normal;for(let a=0;a<t.count;a++){const o=1-Math.abs(i.getY(a)),l=g0(t.getX(a),t.getZ(a),t.getY(a),o);e[a*3]=l.r,e[a*3+1]=l.g,e[a*3+2]=l.b}n.setAttribute("color",new ke(e,3));const s=new Ft({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),r=new le(n,s);return r.receiveShadow=!0,r.name="terrain",r}function v0(){const n=new it;n.name="rocks";const t=[new Re(1,0),new Ca(1,0),new Pa(1,0)],e=[new Ft({color:8011048,roughness:.95,flatShading:!0}),new Ft({color:6040604,roughness:.92,flatShading:!0}),new Ft({color:9260592,roughness:.9,flatShading:!0})],i=new ve,s=[220,160,90];for(let r=0;r<3;r++){const a=new Vp(t[r],e[r],s[r]);a.castShadow=!0,a.receiveShadow=!0;let o=0,l=0;for(;o<s[r]&&l<s[r]*8;){l++;const c=(Pn(o,r,1)-.5)*Gs*.92,d=(Pn(o,r,2)-.5)*Gs*.92;if(Math.hypot(c,d)<42||Math.hypot(c-52,d-24)<22||Math.hypot(c-22,d-82)<18||Math.hypot(c-80,d+44)<44||Math.hypot(c-112,d+83)<22||Math.hypot(c+32,d+98)<20||Math.hypot(c+88,d+188)<30||Math.hypot(c-22,d+112)<16||Math.hypot(c+68,d+16)<22||Math.hypot(c-36,d-72)<20||Math.hypot(c+24,d-44)<20||Math.hypot(c+32,d+148)<16||Math.hypot(c+64,d+90)<14||Math.hypot(c+50,d+100)<22||Math.hypot(c-38,d+126)<16||Math.hypot(c+18,d+88)<14||Math.hypot(c-68,d+10)<16||Math.hypot(c+60,d+148)<12||Math.hypot(c+64,d+118)<12||Math.hypot(c+48,d-68)<20||Math.hypot(c-78,d-56)<20||Math.hypot(c+13,d+134)<20||Math.hypot(c-8,d+142)<16||Math.hypot(c-135,d+40)<24||Math.hypot(c-68,d-6)<16||Math.hypot(c+28,d+138)<12||Math.hypot(c+36,d+74)<18||Math.hypot(c-2,d+22)<12||Math.hypot(c+50,d+72)<14||Math.hypot(c-10,d+124)<16||Math.hypot(c-20,d-8)<16||Math.hypot(c+16,d-136)<32||Math.hypot(c-158,d+62)<24||Math.hypot(c+96,d+16)<20||Math.hypot(c+78,d+172)<16||Math.hypot(c-66,d+74)<16||Math.hypot(c-18,d+152)<14||Math.hypot(c+20,d+100)<14||Math.hypot(c+8,d+162)<14||Math.hypot(c-8,d+98)<14||Math.hypot(c-48,d+70)<14||Math.hypot(c+68,d-12)<16||Math.hypot(c-22,d+80)<14||Math.hypot(c-52,d+112)<16||Math.hypot(c+90,d+158)<14||Math.hypot(c-8,d+78)<14||Math.hypot(c+8,d+88)<14||Math.hypot(c+96,d-4)<14||Math.hypot(c-142,d+62)<14||Math.hypot(c-28,d+140)<14||Math.hypot(c+90,d+148)<12||Math.hypot(c-12,d-18)<12||Math.hypot(c-36,d-8)<14||Math.hypot(c-36,d+6)<14||Math.hypot(c+50,d-4)<14||Math.hypot(c+58,d+142)<14||Math.hypot(c+32,d+22)<14||Math.hypot(c-66,d+90)<14||Math.hypot(c-22,d+98)<14||Math.hypot(c-172,d+48)<14||Math.hypot(c-38,d+104)<14||Math.hypot(c-24,d+128)<12||Math.hypot(c+80,d-20)<14)continue;const u=K(c,d),h=.35+Pn(o,r,3)*(r===2?2.8:1.4);i.position.set(c,u+h*.25,d),i.rotation.set(Pn(o,r,4)*6,Pn(o,r,5)*6,Pn(o,r,6)*6),i.scale.set(h,h*(.6+Pn(o,r,7)*.7),h*(.7+Pn(o,r,8)*.5)),i.updateMatrix(),a.setMatrixAt(o,i.matrix),o++}a.count=o,n.add(a)}return n}function Pn(n,t,e){const i=Math.sin(n*12.9898+t*78.233+e*45.164)*43758.5453;return i-Math.floor(i)}const M0=`
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
`;function y0(n){const t=new xe(900,32,20),e=new Mn({vertexShader:M0,fragmentShader:S0,uniforms:{uSunDir:{value:n.clone().normalize()}},side:Pe,depthWrite:!1}),i=new le(t,e);return i.name="sky",i}function w0(n){const t=new it,e=n.clone().normalize(),i=new d0(16769456,2.15);i.position.copy(e.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,t.add(i);const s=new o0(14727304,6959128,.55);t.add(s);const r=new h0(12611648,.16);t.add(r);const a=new le(new xe(7,16,16),new Ea({color:16773572}));return a.position.copy(e.clone().multiplyScalar(420)),t.add(a),t.name="sun",t}function E0(){const n=new it;n.name="mountains";const t=new Ft({color:7024156,roughness:1,flatShading:!0}),e=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,s,r,a]of e){const o=new ns(r,a,6),l=new le(o,t),c=K(i,s)+a*.35;l.position.set(i,c,s),l.rotation.y=(i+s)*.01,n.add(l)}return n}function b0(){const t=new Float32Array(2100);for(let r=0;r<700;r++)t[r*3]=(Math.random()-.5)*220,t[r*3+1]=1+Math.random()*18,t[r*3+2]=(Math.random()-.5)*220;const e=new De;e.setAttribute("position",new ke(t,3));const i=new Lc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),s=new Wp(e,i);return s.name="dust",s}function T0(n){n.fog=new Aa(12880472,.00155),n.background=new Gt(12880472)}const f={steel:new Ft({color:13225425,metalness:.88,roughness:.28}),steelDark:new Ft({color:9146518,metalness:.82,roughness:.38}),tiles:new Ft({color:1710620,metalness:.15,roughness:.72}),soot:new Ft({color:2763308,metalness:.4,roughness:.55}),pad:new Ft({color:7168600,metalness:.08,roughness:.88}),padRing:new Ft({color:4866876,metalness:.1,roughness:.8}),solar:new Ft({color:727603,metalness:.55,roughness:.22}),solarFrame:new Ft({color:10133670,metalness:.7,roughness:.35}),tankCh4:new Ft({color:12868132,metalness:.35,roughness:.45}),tankO2:new Ft({color:14212579,metalness:.4,roughness:.4}),hab:new Ft({color:13616824,metalness:.15,roughness:.62}),habDark:new Ft({color:6972508,metalness:.2,roughness:.55}),glass:new Ft({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new Ft({color:4160056,roughness:.85}),rover:new Ft({color:12106944,metalness:.55,roughness:.4}),roverDark:new Ft({color:3356218,metalness:.4,roughness:.5}),crate:new Ft({color:9080724,metalness:.45,roughness:.5}),ice:new Ft({color:14083823,metalness:.05,roughness:.35}),rust:new Ft({color:8011560,roughness:.9}),glowWarm:new Ft({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new Ft({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new Ft({color:9076852,roughness:.92}),lattice:new Ft({color:10133668,metalness:.7,roughness:.4}),graded:new Ft({color:6968134,roughness:.94,metalness:.04}),pipe:new Ft({color:8030868,metalness:.55,roughness:.4}),cable:new Ft({color:2762274,metalness:.35,roughness:.55}),robot:new Ft({color:13159632,metalness:.62,roughness:.38}),flagIce:new Ft({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new Ft({color:12081704,roughness:.8,metalness:.06}),track:new Ft({color:4006936,roughness:.97}),roadBed:new Ft({color:6044202,roughness:.97,metalness:.02}),soil:new Ft({color:4861468,roughness:.96}),plantLeaf:new Ft({color:3107378,roughness:.88}),dish:new Ft({color:14210252,metalness:.38,roughness:.42}),suit:new Ft({color:15131352,metalness:.18,roughness:.55}),suitDark:new Ft({color:6052438,metalness:.35,roughness:.5}),visor:new Ft({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new Ft({color:3817026,metalness:.48,roughness:.48})};function A0(n,t="#1c120c",e="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,512,128),s.strokeStyle=e,s.lineWidth=6,s.strokeRect(10,10,492,108),s.fillStyle=e;const r=n.length>12?36:n.length>8?44:n.length>5?54:64;s.font=`bold ${r}px sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,68);const a=new Xp(i);return a.colorSpace=Ne,a}function g(n,t,e,i,s,r=0,a=0,o=0){const l=new le(n,t);return l.position.set(e,i,s),l.rotation.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function on(n,t,e=0){return[n,K(n,t)+e,t]}function B(n,t,e,i,s,r,a,o,l=0){const c=new Ft({map:A0(n,t,e),side:en,roughness:.55,metalness:.08}),d=new le(new Li(i,s),c);return d.position.set(r,a,o),d.rotation.y=l,d.castShadow=!1,d}function Dt(n,t,e,i=0,s=1){const r=K(t,e)+.85*s;n.add(g(new E(1.7*s,1.5*s,1.7*s),f.crate,t,r,e,0,i,0)),n.add(g(new E(1.78*s,.08,1.78*s),f.steelDark,t,r+.78*s,e,0,i,0))}function R0(){const n=new it;n.name="settlement";const t=[],e=[];n.add(Xn(0,0,{finished:!0}));const i=_i(0,0,{name:"starship",crewHab:!0});n.add(i),um(t),e.push({id:"starship",name:"Crew hab Starship",position:new R(0,18,0)}),e.push({id:"eva",name:"EVA / airlock",position:new R(2,3,12)});const s=Hm();n.add(s),t.push({type:"box",x:12,z:18,w:6,d:3}),e.push({id:"evarack",name:"EVA suit rack",position:new R(12,3,18)}),n.add(Xn(52,24,{finished:!1}));const r=_i(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(r),t.push({type:"cyl",x:52,z:24,r:7.4}),e.push({id:"cargo",name:"Cargo Starship",position:new R(52,18,24)}),n.add(Xn(36,72,{finished:!1}));const a=_i(36,72,{name:"cargo-3",cargoOpen:!0});n.add(a),t.push({type:"cyl",x:36,z:72,r:7.4}),e.push({id:"cargo3",name:"Cargo Starship 3",position:new R(36,18,72)}),n.add($o(24,70)),n.add(Xn(-24,44,{finished:!1}));const o=_i(-24,44,{name:"cargo-4"});n.add(o),t.push({type:"cyl",x:-24,z:44,r:7.4}),e.push({id:"cargo4",name:"Cargo Starship 4",position:new R(-24,18,44)}),n.add(Xn(-48,68,{finished:!1}));const l=_i(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(l),t.push({type:"cyl",x:-48,z:68,r:7.4}),e.push({id:"cargo5",name:"Window-2 cargo Starship",position:new R(-48,18,68)}),n.add($o(-60,66)),n.add(Xn(78,56,{finished:!1}));const c=_i(78,56,{name:"cargo-6"});n.add(c),t.push({type:"cyl",x:78,z:56,r:7.4}),e.push({id:"cargo6",name:"Window-2 cargo Starship",position:new R(78,18,56)}),n.add(C0()),n.add(P0()),n.add(D0()),n.add(I0()),e.push({id:"prep",name:"Landing prep",position:new R(22,4,82)}),n.add(Sm()),t.push({type:"box",x:-38,z:148,w:10,d:8}),e.push({id:"pad2",name:"Next-window pad",position:new R(-16,6,136)}),e.push({id:"sinter",name:"Pad sinter rig",position:new R(-38,4,148)});const d=L0();n.add(d),e.push({id:"solar",name:"Solar farm",position:new R(82,6,-44)});const u=V0();n.add(u),e.push({id:"solar2",name:"Solar field 2",position:new R(112,5,-83)});const h=pm();n.add(h),e.push({id:"solar3",name:"Solar field 3",position:new R(135,5,-40)});const p=wm();n.add(p),t.push({type:"box",x:158,z:-28,w:12,d:8}),e.push({id:"solar4",name:"Solar field 4",position:new R(158,5,-62)});const x=Bm();n.add(x),t.push({type:"box",x:142,z:-62,w:1.2,d:22}),e.push({id:"dustfence",name:"Solar dust fence",position:new R(142,4,-62)});const v=Jm();n.add(v),t.push({type:"box",x:172,z:-48,w:10,d:8}),e.push({id:"combiner",name:"Field 4 combiner",position:new R(172,4,-48)}),n.add(U0()),n.add(W0());const _=F0();n.add(_),t.push({type:"box",x:-68,z:-16,w:30,d:22}),e.push({id:"isru",name:"Sabatier ISRU",position:new R(-68,8,-16)});const m=Im();n.add(m),t.push({type:"box",x:-68,z:12,w:16,d:6}),e.push({id:"radiators",name:"ISRU radiators",position:new R(-68,5,12)});const A=Em();n.add(A),t.push({type:"box",x:-96,z:-16,w:18,d:18}),e.push({id:"isru2",name:"Sabatier train 2",position:new R(-96,8,-16)});const T=zm();n.add(T),t.push({type:"box",x:-96,z:4,w:12,d:8}),e.push({id:"co2cap",name:"CO2 intake 2",position:new R(-96,5,4)});const S=Wm();n.add(S),t.push({type:"box",x:-50,z:4,w:12,d:8}),e.push({id:"electro",name:"ISRU electrolysis",position:new R(-50,5,4)});const O=jm();n.add(O),t.push({type:"box",x:-80,z:20,w:10,d:8}),e.push({id:"chiller",name:"CH4 liquefaction",position:new R(-80,5,20)}),n.add(N0());const P=O0();n.add(P),t.push({type:"box",x:-14,z:-104,w:14,d:8}),t.push({type:"box",x:2,z:-104,w:14,d:8}),t.push({type:"box",x:-6,z:-116,w:8,d:14}),e.push({id:"habs",name:"Hab cluster",position:new R(-6,5,-108)});const D=X0();n.add(D),t.push({type:"box",x:-32,z:-98,w:16,d:12}),e.push({id:"hab-kit",name:"Hab from cargo",position:new R(-32,5,-98)});const L=q0();n.add(L),t.push({type:"box",x:-46,z:-108,w:14,d:8}),t.push({type:"box",x:-46,z:-94,w:14,d:8}),t.push({type:"box",x:-58,z:-102,w:8,d:14}),e.push({id:"pressure",name:"Pressure habs",position:new R(-50,5,-100)});const b=hm();n.add(b),t.push({type:"box",x:-20,z:-132,w:14,d:8}),t.push({type:"box",x:-6,z:-132,w:14,d:8}),t.push({type:"box",x:-13,z:-142,w:8,d:14}),e.push({id:"hab3",name:"Hab street",position:new R(-13,5,-134)});const y=gm();n.add(y),xi(t,-33,-120,"x",28),xi(t,-6,-120,"z",24),xi(t,-4,-58,"z",70),t.push({type:"cyl",x:2,z:-22,r:1.6}),e.push({id:"corridors",name:"Pressurized neighborhood",position:new R(-20,4,-120)});const I=_m();n.add(I),t.push({type:"box",x:-30,z:-69,w:9,d:9}),t.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),xi(t,-36,-87,"z",24),xi(t,-45,-74,"x",12),e.push({id:"yard",name:"Construction yard",position:new R(-36,5,-74)}),e.push({id:"hab6",name:"Hab 6",position:new R(-40,5,-76)});const W=xm();n.add(W),t.push({type:"box",x:-53,z:-72,w:6,d:7}),e.push({id:"med",name:"Crew ops / medical",position:new R(-50,5,-72)});const H=vm();n.add(H),t.push({type:"box",x:10,z:-124,w:14,d:10}),xi(t,2,-128,"x",10),e.push({id:"commons",name:"Crew commons / mess",position:new R(10,5,-124)});const Y=z0();n.add(Y),t.push({type:"box",x:22,z:-112,w:16,d:10}),t.push({type:"box",x:32,z:-112,w:8,d:6}),e.push({id:"greenhouse",name:"CO2 life support",position:new R(22,4,-112)});const et=Um();n.add(et),t.push({type:"box",x:52,z:-112,w:14,d:9}),e.push({id:"greenhouse2",name:"Greenhouse 2",position:new R(52,4,-112)});const J=Zm();n.add(J),t.push({type:"box",x:38,z:-104,w:10,d:6}),e.push({id:"ghfilter",name:"Grow dust filter",position:new R(38,4,-104)});const rt=Pm();n.add(rt),t.push({type:"box",x:8,z:-98,w:12,d:8}),e.push({id:"eclss",name:"Hab ECLSS / CO2 scrub",position:new R(8,4,-98)});const X=Km();n.add(X),t.push({type:"box",x:22,z:-98,w:10,d:8}),e.push({id:"waste",name:"Waste / water recovery",position:new R(22,4,-98)});const lt=Om();n.add(lt),t.push({type:"box",x:-8,z:-88,w:10,d:8}),e.push({id:"o2buf",name:"Crew O2 buffer",position:new R(-8,4,-88)});const gt=om();n.add(gt),t.push({type:"box",x:38,z:-126,w:14,d:9}),e.push({id:"food",name:"Food / grow vault",position:new R(38,4,-126)});const Tt=fm();n.add(Tt),t.push({type:"box",x:8,z:-142,w:14,d:9}),e.push({id:"food2",name:"Hab-street grow vault",position:new R(8,4,-142)});const Vt=km();n.add(Vt),t.push({type:"box",x:28,z:-140,w:10,d:8}),e.push({id:"condensate",name:"Condensate return",position:new R(28,4,-140)});const ne=cm();n.add(ne),t.push({type:"box",x:-60,z:-148,w:8,d:6}),t.push({type:"box",x:-64,z:-118,w:8,d:6}),t.push({type:"box",x:-18,z:-88,w:10,d:8}),e.push({id:"water",name:"Water loop",position:new R(-18,4,-88)});const j=Am();n.add(j),t.push({type:"box",x:18,z:-152,w:14,d:10}),e.push({id:"potable",name:"Potable water store",position:new R(18,4,-152)});const at=Rm();n.add(at),t.push({type:"box",x:-58,z:-108,w:10,d:3}),t.push({type:"box",x:-20,z:-100,w:18,d:3}),t.push({type:"box",x:22,z:-128,w:3,d:12}),e.push({id:"berms",name:"Hab dust berms",position:new R(-20,4,-100)});const Mt=lm();n.add(Mt),t.push({type:"box",x:68,z:-10,w:16,d:8}),t.push({type:"box",x:-22,z:-88,w:8,d:6}),e.push({id:"battery",name:"Night power store",position:new R(68,4,-10)});const dt=mm();n.add(dt),t.push({type:"box",x:68,z:6,w:16,d:8}),t.push({type:"box",x:-28,z:-138,w:8,d:6}),e.push({id:"battery2",name:"Crew night store",position:new R(68,4,6)});const Pt=Fm();n.add(Pt),t.push({type:"box",x:8,z:-78,w:12,d:7}),e.push({id:"battery3",name:"Hab night store 3",position:new R(8,4,-78)});const Ut=j0();n.add(Ut),t.push({type:"box",x:-15,z:-8,w:10,d:7}),e.push({id:"spaceport",name:"Methalox spaceport",position:new R(-15,4,-8)});const Wt=Mm();n.add(Wt),t.push({type:"box",x:20,z:8,w:16,d:12}),e.push({id:"stock",name:"Methalox stockpile",position:new R(20,4,8)});const de=Gm();n.add(de),t.push({type:"box",x:36,z:8,w:10,d:8}),e.push({id:"ch4buf",name:"CH4 return buffer",position:new R(36,4,8)});const Yt=Vm();n.add(Yt),t.push({type:"box",x:36,z:-6,w:10,d:8}),e.push({id:"o2ret",name:"O2 return buffer",position:new R(36,4,-6)});const pe=qm();n.add(pe),t.push({type:"box",x:-32,z:-22,w:10,d:8}),e.push({id:"pump",name:"Methalox pump house",position:new R(-32,4,-22)}),n.add($0()),n.add(Q0()),n.add(Xi(16,14,-.4)),n.add(Xi(8,-62,1.2)),n.add(Xi(30,74,-.2)),n.add(Xi(-94,-182,.7)),n.add(gn(-90,-148,.4,{kind:"ice",loaded:!0})),e.push({id:"rover",name:"Haul rover",position:new R(8,2,-62)}),e.push({id:"haul2",name:"Ice haul at crush",position:new R(-90,3,-148)});const z=am();n.add(z),t.push({type:"box",x:-64,z:-90,w:10,d:8}),e.push({id:"haul",name:"Ice haul",position:new R(-64,3,-90)});const Ie=B0();n.add(Ie),t.push({type:"box",x:48,z:-86,w:16,d:12}),e.push({id:"workshop",name:"Workshop",position:new R(48,5,-86)});const Xt=Lm();n.add(Xt),t.push({type:"box",x:22,z:-80,w:12,d:8}),e.push({id:"depot",name:"Spare-parts depot",position:new R(22,4,-80)});const qt=Tm();n.add(qt),t.push({type:"box",x:66,z:-74,w:16,d:12}),e.push({id:"workshop2",name:"Workshop bay 2",position:new R(66,5,-74)});const Ct=Ym();n.add(Ct),t.push({type:"box",x:66,z:-90,w:10,d:8}),e.push({id:"press",name:"Sinter press",position:new R(66,4,-90)});const re=Dm();n.add(re),n.add(Xi(48,-70,.2)),e.push({id:"shelter",name:"Rover dust shelter",position:new R(48,4,-70)});for(const[_t,Kt]of[[42.8,-73.4],[53.2,-73.4],[42.8,-66.6],[53.2,-66.6]])t.push({type:"cyl",x:_t,z:Kt,r:.45});const Rt=k0();n.add(Rt),t.push({type:"cyl",x:-18,z:-138,r:3}),e.push({id:"comms",name:"Comms tower",position:new R(-18,16,-138)});const C=$m();n.add(C),t.push({type:"cyl",x:24,z:-128,r:2.2}),e.push({id:"weather",name:"Weather / dust mast",position:new R(24,12,-128)});const M=rm();n.add(M),t.push({type:"cyl",x:-32,z:-148,r:8.4}),t.push({type:"box",x:-40,z:-154,w:6,d:5}),e.push({id:"earth",name:"Earth dish · 12 min delay",position:new R(-32,12,-148)});const k=Cm();n.add(k),t.push({type:"cyl",x:-8,z:-162,r:6.2}),e.push({id:"earth2",name:"Backup Earth dish",position:new R(-8,10,-162)});const Q=H0();n.add(Q),t.push({type:"cyl",x:-58,z:-158,r:6}),e.push({id:"ice",name:"Ice mining rig",position:new R(-58,8,-158)});const nt=bm();n.add(nt),t.push({type:"cyl",x:-78,z:-172,r:6}),e.push({id:"ice2",name:"Ice mine 2",position:new R(-78,8,-172)});const $=Nm();n.add($),t.push({type:"box",x:-90,z:-158,w:12,d:10}),e.push({id:"ice-depot",name:"Ice crush depot",position:new R(-90,4,-158)});const St=Xm();n.add(St),t.push({type:"box",x:-58,z:-142,w:10,d:8}),e.push({id:"melt",name:"Ice melt still",position:new R(-58,5,-142)});const ht=Z0();return n.add(ht),t.push({type:"cyl",x:-82,z:-176,r:2.4}),e.push({id:"survey",name:"Resource survey",position:new R(-88,5,-188)}),n.add(Ke(42,22,.6)),n.add(Ke(39,26,-.4)),n.add(Ke(26,78,2.2)),n.add(Ke(26,68,.5)),n.add(Ke(22,72,-.8)),n.add(Ke(-80,-174,.8)),n.add(Ke(-34,-92,-1.2)),n.add(Ke(-28,-104,.3)),n.add(Ke(16,-120,.6)),n.add(Ke(70,-70,.4)),n.add(Ke(-28,128,1.1)),n.add(J0()),dm(t),n.add(nm()),n.add(im()),n.add(sm()),{group:n,colliders:t,landmarks:e}}function Xn(n,t,e={}){const i=new it;i.name=e.finished?"pad":"cargo-pad";const s=K(n,t),r=e.finished?20:16,a=e.finished?f.pad:f.graded;if(i.add(g(new Z(r,r,.45,48),a,n,s+.15,t)),e.finished){i.add(g(new ee(r+.4,.55,8,48),f.padRing,n,s+.4,t,Math.PI/2,0,0)),i.add(g(new ji(7.5,8.1,40),f.padRing,n,s+.4,t,-Math.PI/2,0,0)),i.add(g(new ji(13,13.5,40),f.padRing,n,s+.4,t,-Math.PI/2,0,0));for(let c=0;c<12;c++){const d=c/12*Math.PI*2;i.add(g(new E(.35,.55,.35),f.glowPad,n+Math.cos(d)*19.2,s+.55,t+Math.sin(d)*19.2))}}else{i.add(g(new ee(r+.3,.4,8,36),f.padRing,n,s+.32,t,Math.PI/2,0,0));for(let c=0;c<8;c++){const d=c/8*Math.PI*2;i.add(g(new E(.28,.4,.28),f.glowPad,n+Math.cos(d)*(r-.6),s+.45,t+Math.sin(d)*(r-.6)))}}const o=e.finished?26:21,l=g(new ee(o,e.finished?2.2:1.8,8,40),f.rust,n,s-.4,t,Math.PI/2,0,0);return l.scale.set(1,.45,1),i.add(l),i}function _i(n=0,t=0,e={}){const i=new it;i.name=e.name||"starship",i.position.set(n,0,t);const s=K(n,t)-3.1,r=36,a=4.4;i.add(g(new Z(a,a,r,28),f.steel,0,s+8+r/2,0));const o=g(new xe(a,24,16,0,Math.PI*2,0,Math.PI/2),f.steel,0,s+8+r,0);o.scale.set(1,1.55,1),i.add(o);const l=g(new Z(a+.04,a+.04,r*.72,20,1,!0,Math.PI*.55,Math.PI*.9),f.tiles,0,s+8+r*.38,0);i.add(l);const c=g(new Z(a+.15,a+.55,3.2,24),f.soot,0,s+6.4,0);i.add(c);for(let h=0;h<3;h++){const p=h/3*Math.PI*2;i.add(g(new Z(.55,1.15,2.2,12),f.soot,Math.cos(p)*1.5,s+4.6,Math.sin(p)*1.5))}const d=new E(1.1,7.2,3.6);i.add(g(d,f.steelDark,-a-.2,s+14,0,0,0,.18)),i.add(g(d,f.steelDark,a+.2,s+14,0,0,0,-.18));const u=new E(.45,4.2,2.4);i.add(g(u,f.steelDark,-a+.2,s+40,1.2,.15,0,.4)),i.add(g(u,f.steelDark,a-.2,s+40,1.2,.15,0,-.4));for(let h=0;h<6;h++){const p=h/6*Math.PI*2+.2,x=new it,v=g(new E(.22,8.2,.22),f.steelDark,0,0,0,0,0,.72),_=g(new E(1.3,.18,.9),f.steel,3.4,-3.7,0);x.add(v,_),x.position.set(Math.cos(p)*3.2,s+7.6,Math.sin(p)*3.2),x.rotation.y=-p,i.add(x)}for(let h=0;h<5;h++)i.add(g(new E(.7,.35,.08),f.tiles,0,s+28+h*2.1,a+.05));if(i.add(g(new E(1.6,.12,.12),f.glowWarm,0,s+44.5,0)),e.cargoOpen){i.add(g(new E(2.4,6.2,3.4),f.soot,-a+.4,s+16.4,0)),i.add(g(new E(.12,6.4,3.6),f.steel,-a-2.1,s+16.6,2,0,1.15,0));const h=s+13.2,p=K(n,t)+.22,x=-a-.3,v=-a-12.4,_=Math.hypot(x-v,h-p),m=Math.atan2(h-p,x-v);i.add(g(new E(_,.16,3.1),f.steelDark,(x+v)/2,(h+p)/2,0,0,0,m)),i.add(g(new E(10.5,.18,.18),f.lattice,-7.2,s+22.5,0,0,0,.55)),i.add(g(new Z(.05,.05,7.2,6),f.cable,-12.2,s+16.2,0)),i.add(g(new E(1.5,1.3,1.5),f.crate,-12.2,s+12.4,0)),i.add(B("CARGO","#1a100c","#f0c089",3.4,.9,-a-.1,s+24,0,-Math.PI/2))}if(e.crewHab){const h=s+13;i.add(g(new Z(1.2,1.2,2.7,14),f.habDark,0,h,a+1.35,Math.PI/2,0,0)),i.add(g(new ee(1.22,.09,6,16),f.steel,0,h,a+.28)),i.add(g(new ee(1.22,.09,6,16),f.steel,0,h,a+2.55)),i.add(g(new E(1.05,1.75,.1),f.steelDark,0,h,a+2.72)),i.add(g(new E(3.4,.14,2.6),f.steelDark,0,h-1.28,a+2.9)),i.add(g(new E(.1,1.15,2.5),f.steel,-1.6,h-.65,a+2.9)),i.add(g(new E(.1,1.15,2.5),f.steel,1.6,h-.65,a+2.9));const p=h-1.28,x=K(n,t)+.28,v=a+3.6,_=a+13.2,m=11;for(let P=0;P<m;P++){const D=P/(m-1);i.add(g(new E(2.15,.12,.95),f.steelDark,0,p+(x-p)*D,v+(_-v)*D))}const A=Math.hypot(v-_,p-x),T=Math.atan2(p-x,_-v);i.add(g(new E(2.25,.08,A),f.steel,0,(p+x)/2-.12,(v+_)/2,T,0,0)),i.add(g(new E(.08,.85,A),f.steel,-1.12,(p+x)/2+.35,(v+_)/2,T,0,0)),i.add(g(new E(.08,.85,A),f.steel,1.12,(p+x)/2+.35,(v+_)/2,T,0,0));const S=_+1.55,O=K(n,t)+1.35;i.add(g(new Z(1.35,1.35,2.5,12),f.habDark,0,O,S)),i.add(g(new E(1.05,1.7,.1),f.steelDark,0,O+.05,S+1.4)),i.add(g(new ee(1.38,.07,6,14),f.steel,0,O+1.28,S,Math.PI/2,0,0)),i.add(g(new E(2.2,.12,2.2),f.steelDark,0,K(n,t)+.12,S));for(let P=0;P<5;P++)i.add(g(new E(.85,.48,.08),f.glowWarm,1.55,s+16.5+P*3.4,a+.06)),i.add(g(new E(.08,.48,.85),f.glowWarm,a+.06,s+16.5+P*3.4,-1.35));i.add(g(new Z(.55,.55,.2,12),f.steel,2.55,s+14.2,a+.04,Math.PI/2,0,0)),i.add(g(new ee(.52,.06,6,12),f.steelDark,2.55,s+14.2,a+.14)),i.add(B("CREW HAB","#1a100c","#f0c089",3.4,.85,0,h+2.55,a+2.35)),i.add(B("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,h+.15,a+2.05,Math.PI/2))}return i}function C0(){const n=new it;n.name="crates";const t=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[e,i,s]of t)Dt(n,e,i,s);return n}function P0(){const n=new it;n.name="cargo-offload";const t=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[r,a,o]of t)Dt(n,r,a,o);Dt(n,38.6,22.8,.1,1.15),Dt(n,33.2,20.4,.25,1.2),Dt(n,31.4,22.1,-.2,1.05);const[e,i,s]=on(36,23.5,.08);return n.add(g(new E(8.5,.12,4.2),f.steelDark,e,i,s,0,.15,0)),n.add(B("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,K(33.2,20.4)+2.5,20.4,.35)),n}function D0(){const n=new it;n.name="approach";const t=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const e of t){const i=Math.atan2(e.tx-e.fx,e.tz-e.fz);for(let s=0;s<e.n;s++){const r=s/(e.n-1),a=e.fx+(e.tx-e.fx)*r,o=e.fz+(e.tz-e.fz)*r,l=K(a,o),c=new it;c.add(g(new E(2.5,.16,.34),f.glowPad,-.75,0,0,0,.5,0)),c.add(g(new E(2.5,.16,.34),f.glowPad,.75,0,0,0,-.5,0)),c.position.set(a,l+.14,o),c.rotation.y=i,n.add(c)}}return n}function I0(){const n=new it;n.name="prep-pad";const t=22,e=82,i=K(t,e);n.add(g(new Z(14,14,.28,36),f.graded,t,i+.08,e));const s=g(new ee(16.2,1.7,8,28,Math.PI*1.35),f.rust,t,i-.15,e,Math.PI/2,.5,0);s.scale.set(1,.42,1),n.add(s);for(let a=0;a<8;a++){const o=a/8*Math.PI*2+.2,l=t+Math.cos(o)*15.2,c=e+Math.sin(o)*15.2,d=K(l,c);n.add(g(new E(.08,1.7,.08),f.steel,l,d+.85,c)),n.add(g(new E(.28,.16,.06),f.glowPad,l,d+1.62,c,0,o,0))}const r=[[12,74],[30,88],[14,90]];for(const[a,o]of r){const l=g(new Re(2.2,0),f.rust,a,K(a,o)+.9,o);l.scale.set(1.2,.65,1.05),n.add(l)}return n.add(B("LANDING PREP","#1a100c","#f0c089",4.4,1,t+10.5,i+2.4,e+2,-.6)),n.add(g(new E(.12,2.4,.12),f.steelDark,t+10.5,i+1.2,e+2)),n}function L0(){const n=new it;n.name="solar";const t=10,e=8;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=58+a*5.4,c=-22-o*6.2,d=K(l,c),u=g(new E(.18,1.6,.18),f.solarFrame,l,d+.8,c),h=g(new E(4.6,.08,2.3),f.solar,l,d+1.55,c,-.55,.15,0),p=g(new E(4.75,.05,2.42),f.solarFrame,l,d+1.5,c,-.55,.15,0);n.add(u,h,p)}for(let a=0;a<5;a++){const o=58+a*5.4,l=-22-8*6.2,c=K(o,l);n.add(g(new E(.18,1.6,.18),f.solarFrame,o,c+.8,l)),a<2&&n.add(g(new E(4.6,.08,2.3),f.solar,o+1.1,c+.22,l+1.5,1.2,.25,0))}const[i,s,r]=on(54,-18,.7);return n.add(g(new E(2.2,1.4,1.4),f.habDark,i,s,r)),n.add(B("POWER","#111111","#f4e6c8",2,.55,i,s+.2,r+.75)),n}function U0(){const n=new it;n.name="power-run";const t=54,e=-18,i=-54,s=-16,r=[],a=10;for(let o=0;o<=a;o++){const l=o/a,c=t+(i-t)*l,d=e+(s-e)*l,u=K(c,d);n.add(g(new Z(.09,.11,4.4,6),f.steelDark,c,u+2.2,d)),n.add(g(new E(1.15,.08,.08),f.steel,c,u+4.35,d)),r.push({x:c,y:u+4.32,z:d})}for(let o=0;o<r.length-1;o++){const l=r[o],c=r[o+1];for(const d of[-.38,.38]){const u=new Ni([new R(l.x,l.y,l.z+d),new R((l.x+c.x)/2,(l.y+c.y)/2-.75,(l.z+c.z)/2+d),new R(c.x,c.y,c.z+d)]),h=new le(new ti(u,6,.035,4,!1),f.cable);h.castShadow=!1,n.add(h)}}return n}function N0(){const n=new it;n.name="water-feed";const t=-58,e=-150,i=-68,s=-26,r=12,a=[];for(let c=0;c<=r;c++){const d=c/r,u=t+(i-t)*d,h=e+(s-e)*d,p=K(u,h)+1.15;a.push(new R(u,p,h)),c%2===0&&n.add(g(new E(.16,1.1,.16),f.steelDark,u,K(u,h)+.55,h))}const o=new Ni(a),l=new le(new ti(o,24,.16,6,!1),f.pipe);return l.castShadow=!1,n.add(l),n}function F0(){const n=new it;n.name="isru";const t=-68,e=-16,i=K(t,e);n.add(g(new E(30,.4,22),f.concrete,t,i+.15,e));const s=g(new Z(1.8,2,13,12),f.steelDark,t+4,i+6.8,e);n.add(s),n.add(g(new ee(2.5,.18,6,16),f.steel,t+4,i+10.2,e,Math.PI/2,0,0)),n.add(g(new ee(2.5,.18,6,16),f.steel,t+4,i+7.4,e,Math.PI/2,0,0)),n.add(B("SABATIER","#1a100c","#f0c089",5.2,1.15,t+6.1,i+8.2,e,Math.PI/2));const r=g(new Z(3,3,13,20),f.tankCh4,t-8,i+7.1,e+5.4,0,0,Math.PI/2),a=g(new Z(3,3,13,20),f.tankO2,t-8,i+7.1,e-5.2,0,0,Math.PI/2);n.add(r,a),n.add(B("CH4","#6a2208","#f4e6c8",3.6,1,t-1.2,i+7.1,e+5.4)),n.add(B("O2","#2a3340","#e8eef4",3.6,1,t-1.2,i+7.1,e-5.2)),n.add(g(new Z(2.2,2.2,7.2,16),f.pipe,t-4,i+4,e-10.4)),n.add(B("H2O","#1a2830","#d6e6ef",2.6,.75,t-4,i+5.6,e-8.1));const o=g(new Re(2.1,0),f.ice,t+1.5,i+1.1,e-10.2);return o.scale.set(1.15,.6,1),n.add(o),n.add(g(new Z(.55,.55,7.5,10),f.steel,t+10.5,i+4.1,e-5.4)),n.add(g(new Z(2.3,.7,2.6,14),f.steelDark,t+10.5,i+8.8,e-5.4)),n.add(g(new ee(2.05,.1,6,16),f.steel,t+10.5,i+10.15,e-5.4,Math.PI/2,0,0)),n.add(B("CO2","#1a100c","#f0c089",2.4,.7,t+10.5,i+5.8,e-3.2)),n.add(g(new E(4.2,3,3.2),f.habDark,t+10,i+1.8,e+4.2)),n.add(B("POWER","#111111","#f4e6c8",2.2,.55,t+10,i+2.6,e+5.9)),n.add(g(new Z(.16,.16,10,8),f.pipe,t+7.2,i+3.4,e-2.6,0,0,Math.PI/2)),n.add(g(new Z(.16,.16,9,8),f.pipe,t-1.5,i+3.6,e+2.4,0,0,Math.PI/2)),n.add(g(new Z(.16,.16,8.5,8),f.steel,t-1.5,i+3.6,e-2.2,0,0,Math.PI/2)),n.add(g(new Z(.14,.14,6.4,8),f.cable,t+12.2,i+3.8,e+1.2,0,0,Math.PI/2)),n}function O0(){const n=new it;n.name="habs";const t=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[l,c,d]of t){const u=K(l,c),h=g(new Z(3.1,3.1,12,18),f.hab,l,u+3.2,c,0,0,Math.PI/2);h.rotation.y=d,n.add(h),n.add(g(new xe(3.1,14,10),f.hab,l+Math.cos(d)*6,u+3.2,c+Math.sin(d)*6)),n.add(g(new xe(3.1,14,10),f.hab,l-Math.cos(d)*6,u+3.2,c-Math.sin(d)*6));for(let p=-2;p<=2;p++){const x=l+Math.cos(d)*p*2,v=c+Math.sin(d)*p*2;n.add(g(new E(.9,.7,.08),f.glowWarm,x,u+3.3,v+(d===0?3.15:0)))}}const[e,i,s]=on(-6,-96,1.4);n.add(g(new Z(1.5,1.5,2.6,12),f.habDark,e,i,s)),n.add(g(new E(1.1,1.8,.12),f.steelDark,e,i+.1,s+1.5));const[r,a,o]=on(-6,-108,6.8);return n.add(g(new xe(4.4,18,12,0,Math.PI*2,0,Math.PI/2),f.hab,r,a,o)),n.add(B("HAB 1","#1a100c","#f0c089",2.6,.7,-6,K(-6,-96)+3.6,-94.4)),n}function z0(){const n=new it;n.name="greenhouse";const t=22,e=-112,i=K(t,e);n.add(g(new E(15.2,.25,8.6),f.concrete,t,i+.1,e));const s=new le(new Z(4.15,4.15,14.2,18,1,!1,0,Math.PI),f.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+4.1,e),s.castShadow=!1,n.add(s),n.add(g(new E(14.2,.1,8.4),f.solarFrame,t,i+4.15,e));for(let l=-2;l<=2;l++)n.add(g(new ee(4.12,.055,6,16,Math.PI),f.solarFrame,t+l*2.7,i+4.1,e,0,Math.PI/2,0));for(let l=-2;l<=2;l++){n.add(g(new E(2.05,.26,6.6),f.soil,t+l*2.35,i+.36,e));for(let c=-2;c<=2;c++){const d=c%2===0?f.plant:f.plantLeaf;n.add(g(new E(1.45,.52,.82),d,t+l*2.35,i+.72,e+c*1.12)),n.add(g(new E(.55,.42,.4),f.plantLeaf,t+l*2.35+.2,i+1.05,e+c*1.12))}n.add(g(new E(1.7,.05,6.1),f.glowWarm,t+l*2.35,i+3.55,e))}n.add(g(new E(1.2,2,.15),f.habDark,t-7.1,i+1.2,e));const r=t+10.4,a=e,o=K(r,a);return n.add(g(new E(5.4,.2,4.6),f.concrete,r,o+.08,a)),n.add(g(new Z(.52,.52,5.4,10),f.steel,r+1.15,o+2.9,a-1.05)),n.add(g(new Z(1.75,.55,1.7,14),f.steelDark,r+1.15,o+6.2,a-1.05)),n.add(g(new ee(1.5,.08,6,14),f.steel,r+1.15,o+7.1,a-1.05,Math.PI/2,0,0)),n.add(B("CO2","#1a100c","#f0c089",1.9,.5,r+1.15,o+3.7,a+.35)),n.add(g(new E(2.5,1.85,1.9),f.habDark,r-.7,o+1.08,a+.95)),n.add(B("COMPRESS","#1a100c","#f0c089",2.35,.55,r-.7,o+1.55,a+1.95)),n.add(g(new Z(.14,.14,6.4,8),f.pipe,t+6.6,i+1.55,e,0,0,Math.PI/2)),n.add(g(new Z(.68,.68,2.35,12),f.tankO2,t-5.5,i+1.45,e+5.15)),n.add(B("O2","#2a3340","#e8eef4",1.35,.42,t-5.5,i+1.65,e+5.95)),n.add(B("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,t,i+5.55,e+.15)),n.add(B("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,t,i+4.75,e+.15)),n}function Xi(n,t,e){const i=new it;i.name="rover";const s=K(n,t);i.position.set(n,s,t),i.rotation.y=e,i.add(g(new E(3.4,1.1,2.1),f.rover,0,1.35,0)),i.add(g(new E(1.4,.7,1.5),f.roverDark,1.2,2.1,0)),i.add(g(new E(2.2,.08,1.6),f.solar,0,2,0)),i.add(g(new Z(.07,.07,2.1,6),f.steel,-.4,2.9,0)),i.add(g(new E(.25,.2,.25),f.roverDark,-.4,4,0));const r=new Z(.55,.55,.35,12),a=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[o,l,c]of a)i.add(g(r,f.roverDark,o,l,c,Math.PI/2,0,0));return i}function Ke(n,t,e){const i=new it;i.name="optimus";const s=K(n,t);return i.position.set(n,s,t),i.rotation.y=e,i.add(g(new E(.42,.62,.24),f.robot,0,1.28,0)),i.add(g(new Z(.14,.15,.22,10),f.robot,0,1.72,0)),i.add(g(new E(.16,.08,.04),f.steelDark,0,1.74,.14)),i.add(g(new E(.12,.48,.12),f.robot,-.28,1.22,0)),i.add(g(new E(.12,.48,.12),f.robot,.28,1.22,0)),i.add(g(new E(.14,.62,.14),f.steelDark,-.1,.62,0)),i.add(g(new E(.14,.62,.14),f.steelDark,.1,.62,0)),i}function B0(){const n=new it;n.name="workshop";const t=48,e=-86,i=K(t,e),s=g(new Z(6.2,6.2,16,16,1,!1,0,Math.PI),f.habDark,t,i+3.4,e);return s.rotation.z=Math.PI/2,n.add(s),n.add(g(new E(16,.3,10),f.concrete,t,i+.1,e)),n.add(g(new E(.2,4.2,6.5),f.steelDark,t-7.8,i+2.2,e)),n.add(g(new E(2.4,1.1,1.4),f.crate,t+2,i+.8,e+1.5)),n.add(g(new E(4.6,.16,.16),f.steel,t+1.2,i+.35,e-2.8)),n.add(g(new E(4.6,.16,.16),f.steel,t+1.2,i+.55,e-3.05)),n.add(B("WORKSHOP","#1a100c","#f0c089",3.6,.85,t,i+5.6,e+.2)),n}function k0(){const n=new it;n.name="comms";const t=-18,e=-138,i=K(t,e);for(let r=0;r<8;r++)n.add(g(new E(.18,3.2,.18),f.lattice,t-.7,i+1.6+r*3,e-.7)),n.add(g(new E(.18,3.2,.18),f.lattice,t+.7,i+1.6+r*3,e-.7)),n.add(g(new E(.18,3.2,.18),f.lattice,t-.7,i+1.6+r*3,e+.7)),n.add(g(new E(.18,3.2,.18),f.lattice,t+.7,i+1.6+r*3,e+.7)),n.add(g(new E(1.6,.1,.1),f.lattice,t,i+3+r*3,e-.7)),n.add(g(new E(1.6,.1,.1),f.lattice,t,i+3+r*3,e+.7));const s=g(new xe(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),f.steel,t,i+26.5,e,-.7,.4,0);return n.add(s),n.add(g(new Z(.08,.08,2.2,6),f.steelDark,t+.4,i+27.4,e+1.1,.6,0,0)),n}function H0(){const n=new it;n.name="ice-mine";const t=-58,e=-158,i=K(t,e);n.add(g(new E(8,.3,8),f.concrete,t,i+.1,e)),n.add(g(new E(.28,14,.28),f.lattice,t-2.2,i+7,e-2.2)),n.add(g(new E(.28,14,.28),f.lattice,t+2.2,i+7,e-2.2)),n.add(g(new E(.28,14,.28),f.lattice,t-2.2,i+7,e+2.2)),n.add(g(new E(.28,14,.28),f.lattice,t+2.2,i+7,e+2.2)),n.add(g(new E(5.2,.25,5.2),f.steelDark,t,i+14.2,e)),n.add(g(new Z(.35,.55,9,10),f.steel,t,i+5,e)),n.add(g(new ns(.7,1.6,8),f.soot,t,i+.9,e));const s=g(new Re(3.4,0),f.ice,t+7.5,i+1.6,e+1.2);return s.scale.set(1.3,.7,1.1),n.add(s),n.add(g(new E(6,.35,1.1),f.steelDark,t+3.4,i+1.4,e,0,0,-.18)),n.add(B("ICE","#1a2830","#d6e6ef",2.2,.65,t,i+8.4,e+2.6)),n}function Ar(n,t,e,i,s){const r=K(t,e);n.add(g(new Z(.05,.07,3.2,6),f.steelDark,t,r+1.6,e)),n.add(g(new E(1.15,.7,.04),s,t+.58,r+2.75,e)),n.add(B(i,"#1a100c","#f0c089",1.45,.4,t+.58,r+2.75,e+.05))}function Fc(n,t,e,i){const s=K(t,e);n.add(g(new E(.07,1.55,.07),f.steelDark,t,s+.78,e)),n.add(g(new E(.38,.22,.03),i,t+.2,s+1.42,e))}function G0(n,t,e,i=0){const s=K(t,e);n.add(g(new E(.85,.55,.65),f.crate,t,s+.32,e,0,i,0)),n.add(g(new E(.88,.06,.68),f.steelDark,t,s+.62,e,0,i,0))}function V0(){const n=new it;n.name="solar-2";const t=6,e=4;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=98+a*5.4,c=-74-o*6.2,d=K(l,c),u=g(new E(.18,1.6,.18),f.solarFrame,l,d+.8,c),h=g(new E(4.6,.08,2.3),f.solar,l,d+1.55,c,-.55,.15,0),p=g(new E(4.75,.05,2.42),f.solarFrame,l,d+1.5,c,-.55,.15,0);n.add(u,h,p)}const[i,s,r]=on(96,-72,.7);return n.add(g(new E(2.2,1.4,1.4),f.habDark,i,s,r)),n.add(B("POWER","#111111","#f4e6c8",2,.55,i,s+.2,r+.75)),n}function W0(){const n=new it;n.name="solar-tie";const t=90,e=-48,i=112,s=-83,r=[],a=5;for(let o=0;o<=a;o++){const l=o/a,c=t+(i-t)*l,d=e+(s-e)*l,u=K(c,d);n.add(g(new Z(.09,.11,4.4,6),f.steelDark,c,u+2.2,d)),n.add(g(new E(1.15,.08,.08),f.steel,c,u+4.35,d)),r.push({x:c,y:u+4.32,z:d})}for(let o=0;o<r.length-1;o++){const l=r[o],c=r[o+1];for(const d of[-.38,.38]){const u=new Ni([new R(l.x,l.y,l.z+d),new R((l.x+c.x)/2,(l.y+c.y)/2-.65,(l.z+c.z)/2+d),new R(c.x,c.y,c.z+d)]),h=new le(new ti(u,6,.035,4,!1),f.cable);h.castShadow=!1,n.add(h)}}return n}function X0(){const n=new it;n.name="hab-assembly";const t=-32,e=-98,i=K(t,e);n.add(g(new E(18,.22,14),f.concrete,t,i+.08,e));const s=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[a,o]of s)n.add(g(new Z(.18,.28,1.85,8),f.steelDark,t+a,i+1.02,e+o)),n.add(g(new E(.72,.12,.72),f.steel,t+a,i+.14,e+o)),n.add(g(new E(.55,.1,.55),f.steel,t+a,i+1.96,e+o));const r=i+3.55;n.add(g(new Z(3,3,11,16),f.hab,t,r,e,0,0,Math.PI/2)),n.add(g(new xe(3,14,10),f.hab,t-5.5,r,e)),n.add(g(new xe(3,14,10,0,Math.PI*2,0,Math.PI/2),f.hab,t+8.4,i+1.55,e+.45,.22,.35,.12)),n.add(g(new Z(1.35,1.35,2.4,12),f.habDark,t,r,e+4.15,Math.PI/2,0,0)),n.add(g(new E(1,1.65,.1),f.steelDark,t,r,e+5.45)),n.add(g(new ee(1.38,.08,6,14),f.steel,t,r,e+3.05,0,0,0));for(const[a,o]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(g(new E(.12,3.6,.12),f.lattice,t+a,i+1.9,e+o)),n.add(g(new E(.12,3.6,.12),f.lattice,t+a+1.4,i+1.9,e+o)),n.add(g(new E(1.6,.08,.08),f.lattice,t+a+.7,i+3.7,e+o));return Dt(n,t-8.2,e+6.2,.2),Dt(n,t-6.3,e+7.4,-.35),Dt(n,t+7.1,e-5.6,.5,1.1),Dt(n,t+5.4,e-6.4,.15),n.add(B("HAB KIT","#1a100c","#f0c089",3,.75,t,i+6.4,e+3.2)),n.add(B("AIRLOCK","#1a100c","#f0c089",2.2,.55,t+2.4,r+.2,e+4.2,Math.PI/2)),n}function rn(n,t,e,i,s={}){const r=K(t,e),a=s.r||2.85,o=s.len||10.4,l=s.onStands?r+3.4:r+3.05,c=Math.cos(i),d=Math.sin(i);if(s.onStands)for(const[h,p]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const x=t+c*h-d*p,v=e+d*h+c*p;n.add(g(new Z(.16,.26,1.75,8),f.steelDark,x,r+.98,v)),n.add(g(new E(.7,.12,.7),f.steel,x,r+.14,v)),n.add(g(new E(.52,.1,.52),f.steel,x,r+1.9,v))}else for(const[h,p]of[[-3.6,0],[3.6,0]]){const x=t+c*h-d*p,v=e+d*h+c*p;n.add(g(new E(1.6,.55,1.15),f.steelDark,x,r+.38,v,0,i,0))}const u=g(new Z(a,a,o,16),f.hab,t,l,e,0,0,Math.PI/2);if(u.rotation.y=i,n.add(u),!s.partial)n.add(g(new xe(a,14,10),f.hab,t+c*(o/2),l,e+d*(o/2))),n.add(g(new xe(a,14,10),f.hab,t-c*(o/2),l,e-d*(o/2)));else{n.add(g(new xe(a,14,10),f.hab,t-c*(o/2),l,e-d*(o/2)));const h=t+c*(o/2+2.3),p=e+d*(o/2+2.3);n.add(g(new xe(a,14,10,0,Math.PI*2,0,Math.PI/2),f.hab,h,r+1.45,p,.22,.3,.1))}for(let h=-2;h<=2;h++){const p=t+c*h*1.75,x=e+d*h*1.75;n.add(g(new E(.8,.55,.08),f.glowWarm,p-d*a,l+.08,x+c*a))}if(s.airlock){const h=t-d*(a+1.15),p=e+c*(a+1.15);n.add(g(new Z(1.15,1.15,2.2,12),f.habDark,h,l,p,Math.PI/2,i,0)),n.add(g(new E(1,1.6,.1),f.steelDark,h-d*1.15,l,p+c*1.15,0,i,0)),n.add(g(new ee(1.18,.07,6,14),f.steel,h+d*.2,l,p-c*.2,0,i,0)),n.add(B("AIRLOCK","#1a100c","#f0c089",2.15,.5,h-d*.2,l+1.45,p+c*.2,i))}s.label&&n.add(B(s.label,"#1a100c","#f0c089",2.7,.65,t,l+a+.55,e+.15,i))}function q0(){const n=new it;n.name="pressure-habs";const t=K(-46,-101);n.add(g(new E(28,.2,22),f.concrete,-50,t+.06,-101)),rn(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),rn(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const e=K(-46,-101)+3.15;return n.add(g(new Z(1.15,1.15,8.2,12),f.habDark,-46,e,-101,Math.PI/2,0,0)),n.add(g(new ee(1.2,.08,6,14),f.steel,-46,e,-105.1,Math.PI/2,0,0)),n.add(g(new ee(1.2,.08,6,14),f.steel,-46,e,-96.9,Math.PI/2,0,0)),n.add(B("CONNECT","#1a100c","#f0c089",2.4,.5,-46,e+1.55,-101)),rn(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),Dt(n,-54.5,-110.2,.25),Dt(n,-52.8,-111.4,-.3,1.08),Dt(n,-61.2,-96.4,.4),Dt(n,-40.6,-90.8,.15,1.05),n}function Zn(n,t,e){const i=new it;i.name="eva";const s=K(n,t);return i.position.set(n,s,t),i.rotation.y=e,i.add(g(new E(.56,.8,.4),f.suit,0,1.46,0)),i.add(g(new E(.44,.5,.24),f.suitDark,0,1.52,-.3)),i.add(g(new xe(.21,12,10),f.suit,0,2.04,.02)),i.add(g(new xe(.165,10,8,0,Math.PI*2,0,Math.PI*.58),f.visor,0,2.04,.1)),i.add(g(new E(.17,.6,.17),f.suit,-.4,1.36,.04)),i.add(g(new E(.17,.6,.17),f.suit,.4,1.36,.04)),i.add(g(new E(.2,.76,.2),f.suitDark,-.15,.7,0)),i.add(g(new E(.2,.76,.2),f.suitDark,.15,.7,0)),i}function Y0(n,t,e,i){const s=K(t,e),r=new it;r.position.set(t,s,e),r.rotation.y=i,r.add(g(new E(1.2,.18,.72),f.steelDark,0,.62,0)),r.add(g(new E(1.15,.28,.68),f.crate,0,.86,0)),r.add(g(new E(.08,.55,.08),f.steel,-.48,.32,.26)),r.add(g(new E(.08,.55,.08),f.steel,.48,.32,.26)),r.add(g(new E(.08,.55,.08),f.steel,-.48,.32,-.26)),r.add(g(new E(.08,.55,.08),f.steel,.48,.32,-.26));const a=new Z(.12,.12,.1,10);r.add(g(a,f.roverDark,-.48,.12,.3,Math.PI/2,0,0)),r.add(g(a,f.roverDark,.48,.12,.3,Math.PI/2,0,0)),r.add(g(a,f.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),r.add(g(a,f.roverDark,.48,.12,-.3,Math.PI/2,0,0)),r.add(g(new E(.06,.7,.06),f.steel,-.22,1.3,.08)),r.add(g(new E(.06,.55,.06),f.steel,.18,1.22,-.06)),r.add(g(new E(.22,.12,.12),f.steelDark,-.22,1.68,.08)),n.add(r)}function K0(n,t,e,i){const s=K(t,e),r=new it;r.position.set(t,s,e),r.rotation.y=i,r.add(g(new E(.85,2.45,.32),f.steelDark,0,1.32,0)),r.add(g(new ee(.42,.07,8,14),f.steel,0,1.58,.22)),r.add(g(new Z(.38,.38,.1,12),f.habDark,0,1.58,.18,Math.PI/2,0,0)),r.add(g(new E(.7,.16,.55),f.steel,0,.12,.05)),n.add(r)}function J0(){const n=new it;n.name="eva-presence",n.add(Zn(2.4,12.2,Qe(2.4,12.2,0,7))),n.add(Zn(-2.2,11.5,Qe(-2.2,11.5,0,7))),n.add(Zn(3.8,15.6,.35)),n.add(Zn(.6,18.2,Math.PI)),Y0(n,4.3,14.8,.4),K0(n,-3.9,9.1,.2),Dt(n,5.4,13.2,.2,.85);const t=K(5.1,16.4);return n.add(g(new E(.1,2.2,.1),f.steelDark,5.1,t+1.1,16.4)),n.add(B("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,t+2.45,16.4,-.35)),n}function Z0(){const n=new it;n.name="survey";const t=-82,e=-176,i=K(t,e);for(let c=0;c<3;c++){const d=c/3*Math.PI*2+.4,u=Math.cos(d)*.62,h=Math.sin(d)*.62;n.add(g(new E(.08,2.5,.08),f.steelDark,t+u,i+1.15,e+h,.32*Math.cos(d),0,.32*Math.sin(d)))}n.add(g(new E(.58,.32,.48),f.roverDark,t,i+2.28,e)),n.add(g(new Z(.04,.04,1.35,6),f.steel,t,i+3.08,e)),n.add(g(new E(.22,.12,.22),f.steelDark,t,i+3.78,e)),n.add(g(new E(.12,2.2,.12),f.steelDark,t+1.15,i+1.1,e+.2)),n.add(B("SURVEY","#1a100c","#f0c089",2.6,.7,t+.2,i+3.55,e+1.15));const s=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let c=0;c<s.length;c++){const[d,u]=s[c];Fc(n,d,u,c%3===0?f.flagIce:f.flagDeposit)}Ar(n,-96,-198,"ICE",f.flagIce),Ar(n,-72,-204,"H2O",f.flagIce),Ar(n,-104,-176,"DEPOSIT",f.flagDeposit);const r=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[c,d,u]of r)G0(n,c,d,u);Dt(n,-84.5,-180.4,.15,.85),n.add(B("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,K(-90,-184)+1.55,-184));const a={x:-60,z:-162},o={x:-100,z:-200},l=14;for(let c=0;c<l;c++){const d=c/(l-1),u=a.x+(o.x-a.x)*d,h=a.z+(o.z-a.z)*d,p=K(u,h),x=Math.atan2(o.x-a.x,o.z-a.z);for(const v of[-.55,.55]){const _=Math.cos(x)*v,m=-Math.sin(x)*v,A=g(new E(.42,.05,.85),f.track,u+_,p+.04,h+m,0,x,0);A.castShadow=!1,n.add(A)}}return n}function jt(n,t,e,i=.14){const s=[];for(let o=0;o<t.length;o++){const[l,c]=t[o],d=K(l,c)+1.05;s.push(new R(l,d,c)),o%2===0&&n.add(g(new E(.18,1.05,.18),f.steelDark,l,K(l,c)+.5,c))}const r=new Ni(s),a=new le(new ti(r,28,i,6,!1),e);a.castShadow=!1,n.add(a)}function $0(){const n=new it;return n.name="methalox-lines",jt(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],f.tankCh4,.13),jt(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],f.steel,.13),n.add(B("TO PAD","#1a100c","#f0c089",2.2,.5,-50,K(-50,-18)+2.15,-16.4)),n}function j0(){const n=new it;n.name="methalox-stand";const t=-15,e=-8,i=K(t,e);n.add(g(new E(8.6,.16,5.4),f.steelDark,t,i+.42,e)),n.add(g(new Z(.88,.88,3.5,14),f.tankCh4,t-2.25,i+2.2,e+.55)),n.add(g(new Z(.88,.88,3.5,14),f.tankO2,t-2.25,i+2.2,e-1.25)),n.add(B("CH4","#6a2208","#f4e6c8",1.45,.42,t-1.3,i+2.25,e+.55,Math.PI/2)),n.add(B("O2","#2a3340","#e8eef4",1.45,.42,t-1.3,i+2.25,e-1.25,Math.PI/2));const s=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[r,a]of s)n.add(g(new E(.16,3.15,.16),f.steelDark,t+r,i+1.88,e+a));return n.add(g(new E(2.25,.12,3.5),f.steel,t+2.5,i+3.5,e)),n.add(g(new ee(.42,.11,8,14),f.tankCh4,t+.15,i+1.45,e+.55,Math.PI/2,0,0)),n.add(g(new ee(.42,.11,8,14),f.steel,t+.15,i+1.45,e-1.2,Math.PI/2,0,0)),n.add(g(new Z(.09,.09,6.4,8),f.tankCh4,t+4.55,i+1.18,e+.55,0,0,Math.PI/2)),n.add(g(new Z(.09,.09,6.4,8),f.steel,t+4.55,i+.98,e-1.2,0,0,Math.PI/2)),n.add(g(new E(1.55,1.05,1.15),f.habDark,t+.55,i+.98,e+1.85)),n.add(g(new Z(.55,.55,2.8,12),f.tankCh4,t-.4,i+1.15,e+2.55,0,0,Math.PI/2)),n.add(g(new E(1.6,.35,.85),f.steelDark,t-.4,i+.55,e+2.55)),n.add(B("METHALOX","#1a100c","#f0c089",3.15,.68,t+2.5,i+4.12,e)),n.add(B("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,t+2.5,i+3.42,e+.02)),n.add(g(new Z(.22,.28,3.2,10),f.steelDark,t+5.4,i+2,e+.2)),n.add(g(new E(7.6,.22,.22),f.steel,t+8.8,i+3.55,e+1.4,0,-.45,.18)),n.add(g(new E(6.2,.18,.18),f.tankCh4,t+11.6,i+4.4,e+2.6,0,-.45,.12)),n.add(g(new E(6.2,.18,.18),f.steel,t+11.6,i+4.05,e+2.85,0,-.45,.12)),n.add(g(new Z(.28,.22,1.1,10),f.steelDark,t+14.2,i+4.7,e+3.6)),n.add(B("LOAD ARM","#1a100c","#f0c089",2.8,.45,t+8.2,i+4.85,e+1.1,-.45)),n}function Q0(){const n=new it;n.name="spaceport-sign";const t=17,e=-17,i=K(t,e);return n.add(g(new E(.12,3.5,.12),f.steelDark,t,i+1.75,e)),n.add(B("SPACEPORT","#1a100c","#f0c089",3.5,.85,t,i+3.45,e,.55)),n.add(B("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,t,i+2.55,e,.55)),n}function tm(n,t,e,i,s,r){const a=i-t,o=s-e,l=Math.hypot(a,o),c=Math.ceil(l/6),d=Math.atan2(a,o);for(let u=0;u<c;u++){const h=(u+.5)/c,p=t+a*h,x=e+o*h,v=K(p,x),_=l/c+.35,m=g(new E(r+1.7,.055,_+.25),f.roadBed,p,v+.03,x,0,d,0);m.castShadow=!1,n.add(m);const A=g(new E(r,.08,_+.15),f.padRing,p,v+.07,x,0,d,0);A.castShadow=!1,n.add(A)}}function em(n,t,e,i=4.2){const s=K(t,e),r=g(new Z(i+.8,i+.8,.06,20),f.roadBed,t,s+.03,e);r.castShadow=!1,n.add(r);const a=g(new Z(i,i,.08,20),f.graded,t,s+.07,e);a.castShadow=!1,n.add(a)}function nm(){const n=new it;n.name="roads";const t=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2],[-32,-148,-8,-162,3.2],[-6,-108,8,-98,3.2],[22,-112,8,-98,3.2],[48,-86,48,-70,3.2],[-68,-16,-68,12,3.2],[-36,-74,22,-80,3.2],[48,-86,22,-80,3.2],[22,-112,52,-112,3.2],[38,-126,52,-112,3.2],[-78,-172,-90,-158,3.2],[8,-98,8,-78,3.2],[22,-80,8,-78,3.2],[8,-98,-8,-88,3.2],[-22,-88,-8,-88,3.2],[-96,-16,-96,4,3.2],[158,-62,142,-62,3.2],[8,-142,28,-140,3.2],[18,-152,28,-140,3.2],[-90,-158,-90,-148,3.2],[5,16,12,18,3],[20,8,36,8,3.2],[36,8,36,-6,3.2],[-68,4,-50,4,3.2],[-58,-158,-58,-142,3.2],[-15,-8,-32,-22,3.2],[66,-74,66,-90,3.2],[8,-98,22,-98,3.2],[158,-62,172,-48,3.2],[22,-112,38,-104,3.2],[10,-124,24,-128,3],[-68,12,-80,20,3.2]];for(const[i,s,r,a,o]of t)tm(n,i,s,r,a,o);for(const[i,s,r]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4],[-8,-162,3.4],[8,-98,3.4],[48,-70,3.4],[-68,12,3.4],[22,-80,3.4],[52,-112,3.6],[-90,-158,3.4],[8,-78,3.4],[-8,-88,3.4],[-96,4,3.4],[142,-62,3.4],[28,-140,3.4],[-90,-148,3.4],[12,18,3.2],[36,8,3.4],[36,-6,3.4],[-50,4,3.4],[-58,-142,3.4],[-32,-22,3.4],[66,-90,3.4],[22,-98,3.4],[172,-48,3.4],[38,-104,3.4],[24,-128,3.2],[-80,20,3.4]])em(n,i,s,r);const e=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,s]of e)Fc(n,i,s,f.flagDeposit);return n}function im(){const n=new it,t=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[e,i]of t){const s=K(e,i);n.add(g(new Z(.1,.12,5.2,6),f.steelDark,e,s+2.6,i)),n.add(g(new E(.7,.15,.35),f.glowWarm,e,s+5.3,i))}return n}function sm(){const n=new it,t=14,e=22,i=K(t,e);n.add(g(new E(.12,3.6,.12),f.steelDark,t,i+1.8,e));const s=B("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,t,i+3.55,e,.4);n.add(s);const r=B("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,t,i+2.55,e,.4);n.add(r);const a=B("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,K(18,26)+2.15,26,.15);n.add(g(new E(.1,2.2,.1),f.steelDark,18,K(18,26)+1.1,26)),n.add(a);const o=20,l=36,c=K(o,l);return n.add(g(new E(.1,2.6,.1),f.steelDark,o,c+1.3,l)),n.add(B("6 SHIPS","#1a100c","#f0c089",2.6,.65,o,c+3.15,l,.25)),n.add(B("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,o,c+2.45,l,.25)),n}function Qe(n,t,e,i){return Math.atan2(-(i-t),e-n)}function $o(n,t){const e=new it;e.name="window-offload";const i=[[n,t,.2],[n-1.8,t+2.1,-.3],[n+1.6,t+2.4,.7],[n-2.4,t-1.2,.15],[n+.8,t-2.2,1.1],[n-3.2,t+.6,-.4]];for(const[o,l,c]of i)Dt(e,o,l,c);Dt(e,n-4.2,t+1.4,.2,1.12),Dt(e,n-5.4,t-.6,-.15,1.05);const[s,r,a]=on(n-1.2,t,.08);return e.add(g(new E(7.2,.12,3.8),f.steelDark,s,r,a,0,.12,0)),e.add(B("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,K(n-4.2,t+1.4)+2.4,t+1.4,.4)),e}function rm(){const n=new it;n.name="earth-dish";const t=-32,e=-148,i=K(t,e);n.add(g(new Z(8.6,8.6,.28,32),f.concrete,t,i+.1,e)),n.add(g(new Z(1.45,1.85,5.4,14),f.steelDark,t,i+2.8,e)),n.add(g(new Z(2.05,2.05,.42,18),f.steel,t,i+5.55,e)),n.add(g(new ee(2.15,.12,8,20),f.lattice,t,i+5.8,e,Math.PI/2,0,0)),n.add(g(new E(.32,4.4,.32),f.lattice,t-2.55,i+7.6,e)),n.add(g(new E(.32,4.4,.32),f.lattice,t+2.55,i+7.6,e)),n.add(g(new E(5.6,.32,.32),f.lattice,t,i+9.75,e));const s=new it;s.position.set(t,i+9.5,e),s.rotation.set(-.92,.68,0);const r=g(new xe(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),f.dish,0,0,0);s.add(r);const a=g(new xe(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),f.steelDark,0,-.12,0);s.add(a);for(let d=0;d<8;d++){const u=d/8*Math.PI*2;s.add(g(new E(.07,.07,7.4),f.steelDark,0,.18,0,.12,u,0))}s.add(g(new Z(.07,.07,5.4,6),f.steelDark,0,2.7,0)),s.add(g(new Z(.38,.2,.75,10),f.steel,0,5.35,0)),n.add(s);const o=t-8.2,l=e-5.6,c=K(o,l);return n.add(g(new E(4.6,2.5,3.4),f.habDark,o,c+1.35,l)),n.add(g(new E(2.2,.85,1.4),f.steelDark,o+2.8,c+.55,l+.4)),n.add(B("EARTH LINK","#1a100c","#f0c089",3.6,.75,t,i+4.2,e+6.4)),n.add(B("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,t,i+3.4,e+6.4)),n.add(B("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,o,c+2.85,l+1.85)),n.add(g(new E(.1,2.8,.1),f.steelDark,t+6.6,i+1.4,e+5.2)),n.add(B("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,t+6.6,i+3.15,e+5.2,-.5)),n}function gn(n,t,e,i={}){const s=new it;s.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const r=K(n,t);s.position.set(n,r,t),s.rotation.y=e,s.add(g(new E(4.2,1.25,2.2),f.rover,.2,1.45,0)),s.add(g(new E(1.55,.85,1.7),f.roverDark,1.55,2.25,0)),s.add(g(new E(2.5,.08,1.7),f.solar,.05,2.16,0)),s.add(g(new Z(.06,.06,1.6,6),f.steel,1.2,2.95,0)),s.add(g(new E(1.15,.2,.32),f.steelDark,-2.45,1.02,0));const a=new Z(.62,.62,.38,12),o=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[d,u,h]of o)s.add(g(a,f.roverDark,d,u,h,Math.PI/2,0,0));const l=-5.7;s.add(g(new E(4.5,.22,2.4),f.steelDark,l,1.02,0));const c=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[d,u,h]of c)s.add(g(new Z(.5,.5,.32,12),f.roverDark,d,u,h,Math.PI/2,0,0));if(i.kind==="cargo")s.add(g(new E(1.55,1.2,1.55),f.crate,l-.95,1.78,.12)),s.add(g(new E(1.55,1.2,1.55),f.crate,l+.9,1.78,-.08)),i.loaded!==!1&&s.add(g(new E(1.35,1.05,1.35),f.crate,l,2.9,.05)),s.add(B("CARGO","#1a100c","#f0c089",1.7,.42,l,2.05,1.28));else{if(s.add(g(new E(4.2,1.15,.1),f.steel,l,1.68,1.12)),s.add(g(new E(4.2,1.15,.1),f.steel,l,1.68,-1.12)),s.add(g(new E(.1,1.15,2.25),f.steel,l-2.15,1.68,0)),s.add(g(new E(.1,1.15,2.25),f.steel,l+2.15,1.68,0)),i.loaded!==!1){const d=g(new Re(1.15,0),f.ice,l,1.82,0);d.scale.set(1.65,.68,.95),s.add(d),s.add(g(new Re(.52,0),f.ice,l+.95,1.92,.22)),s.add(g(new Re(.4,0),f.ice,l-.85,1.88,-.18))}s.add(B("ICE","#1a2830","#d6e6ef",1.35,.38,l,2.35,1.24))}return s}function Is(n,t,e,i,s,r=16){const a=Math.atan2(i-t,s-e);for(let o=0;o<r;o++){const l=o/(r-1),c=t+(i-t)*l,d=e+(s-e)*l,u=K(c,d);for(const h of[-.7,.7]){const p=Math.cos(a)*h,x=-Math.sin(a)*h,v=g(new E(.4,.05,.9),f.track,c+p,u+.04,d+x,0,a,0);v.castShadow=!1,n.add(v)}}}function am(){const n=new it;n.name="haul-loop";const t=-64,e=-90,i=K(t,e);n.add(g(new E(11,.2,8.4),f.concrete,t,i+.08,e)),n.add(g(new E(2.6,3.2,2.6),f.steelDark,t+2.4,i+1.75,e-1.4)),n.add(g(new E(3.4,.18,1.3),f.steel,t+.2,i+2.35,e-1.4,0,0,.18));const s=g(new Re(2.4,0),f.ice,t-2.6,i+1.15,e+1.6);s.scale.set(1.35,.7,1.15),n.add(s),n.add(g(new Re(1.1,0),f.ice,t-1.2,i+.85,e+2.4)),n.add(g(new E(.22,5.6,.22),f.lattice,t+3.6,i+2.9,e+2.2)),n.add(g(new E(.22,4.2,.22),f.lattice,t+3.6,i+4.4,e+.4,.7,0,0)),n.add(g(new E(1.6,.7,.7),f.steelDark,t+3.6,i+5.5,e-.6)),n.add(B("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,t,i+3.7,e+3.4)),n.add(B("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,t,i+2.95,e+3.4));const r={x:-58,z:-158},a={x:-68,z:-16},o={x:0,z:0};return n.add(gn(-55,-146,Qe(-55,-146,a.x,a.z),{kind:"ice",loaded:!0})),n.add(gn(-61,-118,Qe(-61,-118,a.x,a.z),{kind:"ice",loaded:!0})),n.add(gn(-66,-78,Qe(-66,-78,a.x,a.z),{kind:"ice",loaded:!0})),n.add(gn(-68,-38,Qe(-68,-38,a.x,a.z),{kind:"ice",loaded:!0})),n.add(gn(-70,-62,Qe(-70,-62,r.x,r.z),{kind:"ice",loaded:!1})),n.add(gn(-50,-24,Qe(-50,-24,o.x,o.z),{kind:"cargo",loaded:!0})),n.add(gn(-18,-14,Qe(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(gn(22,12,Qe(22,12,50,22),{kind:"cargo",loaded:!0})),Is(n,-58,-156,-64,-92,18),Is(n,-64,-88,-68,-20,16),Is(n,-66,-18,-16,-10,12),Is(n,-14,-8,20,12,10),n}function qi(n,t,e,i,s,r=8,a=1.15,o=.16){const l=[];for(let d=0;d<=r;d++){const u=d/r,h=t+(i-t)*u,p=e+(s-e)*u,x=K(h,p)+a;l.push(new R(h,x,p)),d%2===0&&n.add(g(new E(.16,a,.16),f.steelDark,h,K(h,p)+a*.5,p))}const c=new le(new ti(new Ni(l),r*2,o,6,!1),f.pipe);c.castShadow=!1,n.add(c)}function om(){const n=new it;n.name="food";const t=38,e=-126,i=K(t,e);n.add(g(new E(13.2,.25,7.6),f.concrete,t,i+.1,e));const s=new le(new Z(3.55,3.55,12.4,18,1,!1,0,Math.PI),f.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.55,e),s.castShadow=!1,n.add(s),n.add(g(new E(12.2,.1,7.2),f.solarFrame,t,i+3.6,e));for(let r=-2;r<=2;r++){n.add(g(new E(1.85,.24,5.6),f.soil,t+r*2.1,i+.34,e));for(let a=-2;a<=2;a++){const o=a%2===0?f.plant:f.plantLeaf;n.add(g(new E(1.25,.58,.72),o,t+r*2.1,i+.78,e+a*.95))}n.add(g(new E(1.5,.05,5.2),f.glowWarm,t+r*2.1,i+3.15,e))}return n.add(g(new E(1.1,1.8,.14),f.habDark,t-6.2,i+1.1,e)),n.add(g(new Z(.14,.14,12,8),f.pipe,30,K(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(B("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(B("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,t,i+4.35,e+.15)),Dt(n,45,-122,.2,.9),Dt(n,46.2,-124.4,-.3,.85),n}function cm(){const n=new it;n.name="water-loop";const t=-60,e=-148,i=K(t,e);n.add(g(new E(7.2,.22,5.4),f.concrete,t,i+.1,e)),n.add(g(new E(3.4,2.1,2.4),f.habDark,t-1.1,i+1.2,e)),n.add(g(new Z(1.15,1.15,2.6,12),f.steel,t+1.8,i+1.5,e+.4)),n.add(g(new E(1.6,.7,1.2),f.ice,t+1.8,i+3.05,e+.4)),n.add(B("MELT","#1a2830","#d6e6ef",2.2,.55,t-1.1,i+1.7,e+1.35)),n.add(B("ICE","#1a2830","#d6e6ef",1.5,.42,t+1.8,i+1.7,e+1.7));const s=-64,r=-118,a=K(s,r);n.add(g(new E(7.4,.22,5.2),f.concrete,s,a+.1,r)),n.add(g(new E(3.6,2.2,2.6),f.steelDark,s,a+1.25,r)),n.add(g(new Z(.55,.55,2.8,10),f.pipe,s+2.2,a+1.6,r-.6)),n.add(B("FILTER","#1a2830","#d6e6ef",2.5,.55,s,a+1.85,r+1.45));const o=-18,l=-88,c=K(o,l);return n.add(g(new E(9.2,.22,7.2),f.concrete,o,c+.1,l)),n.add(g(new Z(2.15,2.15,5.6,16),f.tankO2,o-1.6,c+3,l)),n.add(g(new Z(1.55,1.55,4.2,14),f.pipe,o+2.4,c+2.3,l+1.1)),n.add(B("POTABLE","#1a2830","#d6e6ef",3.2,.7,o-1.6,c+3.2,l+2.35)),n.add(B("H2O","#1a2830","#d6e6ef",1.8,.5,o+2.4,c+2.5,l+2.55)),n.add(B("ICE TO CREW","#1a100c","#f0c089",3.1,.5,o,c+6.15,l)),qi(n,-58,-154,t,e,6,1.2,.15),qi(n,t,e,s,r,8,1.2,.15),qi(n,s,r,-68,-26,10,1.15,.14),qi(n,s,r,o,l,10,1.2,.15),qi(n,o,l,-6,-100,8,1.15,.13),n}function lm(){const n=new it;n.name="batteries";const t=68,e=-10,i=K(t,e);n.add(g(new E(15.2,.22,7.2),f.concrete,t,i+.1,e));for(let o=0;o<6;o++){const l=t-5.5+o*2.2;n.add(g(new E(1.85,2.15,4.4),f.battery,l,i+1.25,e)),n.add(g(new E(1.7,.08,4.2),f.steel,l,i+2.38,e))}n.add(B("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(B("NIGHT STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75)),n.add(g(new Z(.12,.12,18,8),f.cable,61,K(61,-14)+1.4,-14,0,0,Math.PI/2));const s=-22,r=-88,a=K(s,r);n.add(g(new E(7.2,.2,5.2),f.concrete,s,a+.1,r));for(let o=0;o<3;o++)n.add(g(new E(1.7,1.9,3.6),f.battery,s-2+o*2,a+1.15,r));return n.add(B("NIGHT","#111111","#f4e6c8",2.2,.5,s,a+2.55,r+2.7)),n.add(B("HABS","#111111","#d6b48a",1.8,.42,s,a+2.05,r+2.7)),n}function dm(n){const t=(c,d,u=1)=>n.push({type:"box",x:c,z:d,w:1.9*u,d:1.9*u}),e=(c,d,u)=>n.push({type:"cyl",x:c,z:d,r:u}),i=(c,d,u,h)=>n.push({type:"box",x:c,z:d,w:u,d:h});for(const[c,d]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])t(c,d);for(const[c,d]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])t(c,d);t(38.6,22.8,1.15),t(33.2,20.4,1.2),t(31.4,22.1,1.05);const s=24,r=70;for(const[c,d]of[[s,r],[s-1.8,r+2.1],[s+1.6,r+2.4],[s-2.4,r-1.2],[s+.8,r-2.2],[s-3.2,r+.6]])t(c,d);t(s-4.2,r+1.4,1.12),t(s-5.4,r-.6,1.05),t(5.4,13.2,.85);for(const[c,d]of[[18,-78],[20.2,-77.4],[18.4,-81.2],[24.6,-78.6],[26.2,-81.8]])t(c,d);const a=-60,o=66;for(const[c,d]of[[a,o],[a-1.8,o+2.1],[a+1.6,o+2.4],[a-2.4,o-1.2],[a+.8,o-2.2],[a-3.2,o+.6]])t(c,d);t(a-4.2,o+1.4,1.12),t(a-5.4,o-.6,1.05);for(const[c,d]of[[16,14],[8,-62],[30,74],[-94,-182],[48,-70],[-90,-148]])e(c,d,2.4);for(const[c,d]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])e(c,d,3.4);for(const[c,d]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])e(c,d,.55);for(const[c,d]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])e(c,d,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let c=0;c<8;c++)i(82.3,-22-c*6.2,50,2.6);i(54,-18,3,2.2);for(let c=0;c<4;c++)i(111.5,-74-c*6.2,30,2.6);i(96,-72,3,2.2);for(let c=0;c<5;c++)i(135.5,-28-c*6.2,30,2.6);i(120,-26,3,2.2);for(let c=0;c<5;c++)i(158.5,-48-c*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const l=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[c,d]of l)e(c,d,.4);e(-96,-198,.7),e(-72,-204,.7),e(-104,-176,.7);for(const[c,d]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(c,d,1.2,1.2);t(-84.5,-180.4,.85),t(-28,-68),t(-27,-71,1.1),t(-44,-80),t(-42.5,-68.5,.95),t(17.2,-119.4),t(18.4,-121.8,1.05),t(3.2,-118.6,.9),t(16.6,-128.8,.95),t(27.2,12.4,.9),t(12.6,13.1,.95),t(-32,124,.9),t(-30.6,126.4,.95)}function hm(){const n=new it;n.name="hab-street";const t=K(-13,-134);n.add(g(new E(30,.2,24),f.concrete,-13,t+.06,-136)),rn(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),rn(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),rn(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const e=K(-13,-132)+3.15;return n.add(g(new Z(1.15,1.15,8.2,12),f.habDark,-13,e,-132,0,0,Math.PI/2)),n.add(g(new Z(1.15,1.15,6.4,12),f.habDark,-13,e,-137,Math.PI/2,0,0)),n.add(B("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,t+5.4,-126)),Dt(n,-26,-128,.2),Dt(n,1.2,-128.4,-.3,1.05),n}function xi(n,t,e,i,s){i==="x"?(n.push({type:"box",x:t,z:e-1.35,w:s,d:.4}),n.push({type:"box",x:t,z:e+1.35,w:s,d:.4})):(n.push({type:"box",x:t-1.35,z:e,w:.4,d:s}),n.push({type:"box",x:t+1.35,z:e,w:.4,d:s}))}function um(n){const t=(e,i,s,r)=>n.push({type:"box",x:e,z:i,w:s,d:r});t(-6.2,0,5.2,14.8),t(6.2,0,5.2,14.8),t(0,-6.2,10,5.2),t(-4.35,5.8,6.4,5.2),t(4.35,5.8,6.4,5.2),t(0,7.15,3.8,.8),t(-1.45,7.15,.7,1.2),t(1.45,7.15,.7,1.2),t(-1.28,13,.36,12.4),t(1.28,13,.36,12.4),t(-1.45,19.2,.4,2.8),t(1.45,19.2,.4,2.8)}function fm(){const n=new it;n.name="food-3";const t=8,e=-142,i=K(t,e);n.add(g(new E(13.2,.25,7.6),f.concrete,t,i+.1,e));const s=new le(new Z(3.55,3.55,12.4,18,1,!1,0,Math.PI),f.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.55,e),s.castShadow=!1,n.add(s),n.add(g(new E(12.2,.1,7.2),f.solarFrame,t,i+3.6,e));for(let r=-2;r<=2;r++){n.add(g(new E(1.85,.24,5.6),f.soil,t+r*2.1,i+.34,e));for(let a=-2;a<=2;a++){const o=a%2===0?f.plant:f.plantLeaf;n.add(g(new E(1.25,.58,.72),o,t+r*2.1,i+.78,e+a*.95))}n.add(g(new E(1.5,.05,5.2),f.glowWarm,t+r*2.1,i+3.15,e))}return n.add(g(new E(1.1,1.8,.14),f.habDark,t-6.2,i+1.1,e)),n.add(B("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(B("HAB STREET","#1a100c","#d6b48a",3.4,.5,t,i+4.35,e+.15)),Dt(n,15,-138,.2,.9),n}function pm(){const n=new it;n.name="solar-3";const t=6,e=5;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=122+a*5.4,c=-28-o*6.2,d=K(l,c);n.add(g(new E(.18,1.6,.18),f.solarFrame,l,d+.8,c)),n.add(g(new E(4.6,.08,2.3),f.solar,l,d+1.55,c,-.55,.15,0)),n.add(g(new E(4.75,.05,2.42),f.solarFrame,l,d+1.5,c,-.55,.15,0))}const[i,s,r]=on(120,-26,.7);return n.add(g(new E(2.2,1.4,1.4),f.habDark,i,s,r)),n.add(B("POWER","#111111","#f4e6c8",2,.55,i,s+.2,r+.75)),n.add(B("FIELD 3","#111111","#d6b48a",2.2,.45,i,s+.85,r+.75)),n}function mm(){const n=new it;n.name="batteries-2";const t=68,e=6,i=K(t,e);n.add(g(new E(15.2,.22,7.2),f.concrete,t,i+.1,e));for(let o=0;o<6;o++){const l=t-5.5+o*2.2;n.add(g(new E(1.85,2.15,4.4),f.battery,l,i+1.25,e)),n.add(g(new E(1.7,.08,4.2),f.steel,l,i+2.38,e))}n.add(B("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(B("CREW STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75));const s=-28,r=-138,a=K(s,r);n.add(g(new E(7.2,.2,5.2),f.concrete,s,a+.1,r));for(let o=0;o<3;o++)n.add(g(new E(1.7,1.9,3.6),f.battery,s-2+o*2,a+1.15,r));return n.add(B("NIGHT","#111111","#f4e6c8",2.2,.5,s,a+2.55,r+2.7)),n.add(B("HAB 3-5","#111111","#d6b48a",2.2,.42,s,a+2.05,r+2.7)),n}function Dn(n,t,e,i,s){const r=(t+i)*.5,a=(e+s)*.5,o=(K(t,e)+K(i,s))*.5+2.45,l=Math.hypot(i-t,s-e),c=g(new Z(1.12,1.12,l,12),f.habDark,r,o,a,Math.PI/2,0,0);c.rotation.y=Math.atan2(i-t,s-e),n.add(c),n.add(g(new ee(1.18,.07,6,14),f.steel,t,o,e,Math.PI/2,0,0)),n.add(g(new ee(1.18,.07,6,14),f.steel,i,o,s,Math.PI/2,0,0))}function gm(){const n=new it;n.name="neighborhood",Dn(n,-46,-108,-20,-132),Dn(n,-6,-108,-6,-132),Dn(n,-46,-108,-32,-98),Dn(n,-6,-96,2,-22),Dn(n,-40,-76,-32,-98),Dn(n,-40,-76,-50,-72),Dn(n,-6,-132,10,-124),Dn(n,10,-124,8,-142);const[t,e,i]=on(-33,-120,3.4);n.add(B("PRESSURE","#1a100c","#f0c089",3.2,.55,t,e+1.2,i)),n.add(B("HAB 2-5","#1a100c","#d6b48a",2.8,.45,t,e+.55,i));const s=2,r=-22,a=K(s,r);return n.add(g(new Z(1.45,1.45,2.8,12),f.habDark,s,a+1.55,r)),n.add(g(new E(1.1,1.8,.12),f.steelDark,s,a+1.5,r+1.5)),n.add(g(new ee(1.48,.08,6,14),f.steel,s,a+2.95,r,Math.PI/2,0,0)),n.add(B("CREW ACCESS","#1a100c","#f0c089",3.4,.6,s,a+3.55,r+.2)),n.add(B("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,s,a+2.95,r+.2)),n}function _m(){const n=new it;n.name="yard";const t=-36,e=-74,i=K(t,e);return n.add(g(new E(18,.22,14),f.concrete,t,i+.08,e)),rn(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),rn(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(g(new E(.28,9.2,.28),f.lattice,t+6.2,i+4.7,e-3.4)),n.add(g(new E(8.4,.22,.22),f.lattice,t+2.4,i+9.2,e-3.4)),n.add(g(new Z(.05,.05,6.8,6),f.cable,t-1.2,i+6.2,e-2.2)),n.add(g(new E(1.4,1.2,1.4),f.crate,t+1.6,i+8.6,e-3.2)),Dt(n,-28,-68,.2),Dt(n,-27,-71,-.4,1.1),Dt(n,-44,-80,.3),Dt(n,-42.5,-68.5,.1,.95),n.add(B("CONSTRUCTION","#1a100c","#f0c089",4,.7,t,i+4.6,e+6.4)),n.add(B("NEXT KIT","#1a100c","#d6b48a",3.2,.5,t,i+3.9,e+6.4)),n}function xm(){const n=new it;n.name="crew-ops";const t=-50,e=-72,i=K(t,e);return n.add(g(new E(12,.2,10),f.concrete,t,i+.08,e)),rn(n,t,e,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(B("CREW OPS","#1a100c","#f0c089",3.4,.6,t,i+5.35,e+.2)),n.add(B("MEDICAL","#1a100c","#d6b48a",3,.45,t,i+4.75,e+.2)),Dt(n,-55.2,-76.4,.2,.9),Dt(n,-44.8,-68.6,-.25,.95),n}function vm(){const n=new it;n.name="commons";const t=10,e=-124,i=K(t,e);return n.add(g(new E(16,.22,12),f.concrete,t,i+.08,e)),rn(n,t,e,0,{airlock:!0,label:"MESS"}),n.add(B("CREW COMMONS","#1a100c","#f0c089",4.2,.7,t,i+6.15,e+.2)),n.add(B("FROM CARGO","#1a100c","#d6b48a",3.4,.48,t,i+5.5,e+.2)),Dt(n,17.2,-119.4,.2),Dt(n,18.4,-121.8,-.3,1.05),Dt(n,3.2,-118.6,.15,.9),Dt(n,16.6,-128.8,.4,.95),n}function Mm(){const n=new it;n.name="methalox-stock";const t=20,e=8,i=K(t,e);n.add(g(new E(16,.22,12),f.concrete,t,i+.08,e));for(let s=0;s<3;s++){const r=e-3.4+s*3.4;n.add(g(new Z(1.15,1.15,6.4,16),f.tankCh4,t-3.2,i+1.45,r,0,0,Math.PI/2)),n.add(g(new Z(1.15,1.15,6.4,16),f.tankO2,t+3.2,i+1.45,r,0,0,Math.PI/2))}return n.add(B("METHALOX","#1a100c","#f0c089",3.6,.7,t,i+3.55,e+6.2)),n.add(B("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,t,i+2.9,e+6.2)),n.add(B("CH4","#6a2208","#f4e6c8",1.6,.42,t-3.2,i+2.85,e+3.6)),n.add(B("O2","#2a3340","#e8eef4",1.4,.42,t+3.2,i+2.85,e+3.6)),jt(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],f.tankCh4,.12),Dt(n,27.2,12.4,.2,.9),Dt(n,12.6,13.1,-.25,.95),n}function Sm(){const n=new it;n.name="next-window-pad";const t=-16,e=136;n.add(Xn(t,e,{finished:!0}));const i=K(t,e);return n.add(B("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,t+22,i+3.6,e+4,-.55)),n.add(B("26 MONTHS","#1a100c","#d6b48a",3.6,.55,t+22,i+2.75,e+4,-.55)),n.add(g(new E(.12,3.4,.12),f.steelDark,t+22,i+1.7,e+4)),n.add(B("PAD 2","#1a100c","#f0c089",2.4,.55,t,i+.55,e+22.4)),n.add(g(new Z(18.4,18.4,.12,40),f.concrete,t,i+.38,e)),n.add(g(new ji(9.2,17.6,36),f.soot,t,i+.46,e,-Math.PI/2,0,0)),n.add(B("SINTERED","#1a100c","#f0c089",3.6,.55,t+22,i+1.95,e+4,-.55)),n.add(ym(-38,148)),Dt(n,-32,124,.2,.9),Dt(n,-30.6,126.4,-.25,.95),Dt(n,-40,144,.1,.85),Dt(n,-41.4,146.2,-.3,.8),n}function ym(n,t){const e=new it;e.name="sinter-rig";const i=K(n,t);e.add(g(new E(8.4,.22,6.2),f.concrete,n,i+.1,t)),e.add(g(new E(5.6,2.4,3.2),f.habDark,n,i+1.4,t)),e.add(g(new E(1.6,3.6,1.6),f.steelDark,n+2.8,i+2,t-.4)),e.add(g(new Z(.18,.18,4.8,8),f.steel,n+2.8,i+5.2,t-.4)),e.add(g(new E(2.4,.18,1.1),f.glowWarm,n+2.8,i+7.6,t-.4)),e.add(B("SINTER","#1a100c","#f0c089",3.2,.6,n,i+2.9,t+1.85)),e.add(B("REGOLITH","#1a100c","#d6b48a",3.4,.45,n,i+2.3,t+1.85));for(let s=0;s<4;s++)e.add(g(new E(1.4,.28,.9),f.concrete,n-2.4,i+.35+s*.32,t+2.6));return e}function wm(){const n=new it;n.name="solar-4";const t=6,e=5;for(let c=0;c<t;c++)for(let d=0;d<e;d++){const u=145+c*5.4,h=-48-d*6.2,p=K(u,h);n.add(g(new E(.18,1.6,.18),f.solarFrame,u,p+.8,h)),n.add(g(new E(4.6,.08,2.3),f.solar,u,p+1.55,h,-.55,.15,0)),n.add(g(new E(4.75,.05,2.42),f.solarFrame,u,p+1.5,h,-.55,.15,0))}const[i,s,r]=on(146,-46,.7);n.add(g(new E(2.2,1.4,1.4),f.habDark,i,s,r)),n.add(B("POWER","#111111","#f4e6c8",2,.55,i,s+.2,r+.75)),n.add(B("FIELD 4","#111111","#d6b48a",2.2,.45,i,s+.85,r+.75));const a=158,o=-28,l=K(a,o);n.add(g(new E(12,.2,7.2),f.concrete,a,l+.1,o));for(let c=0;c<5;c++)n.add(g(new E(1.7,2,4.2),f.battery,a-4+c*2,l+1.2,o));return n.add(B("NIGHT","#111111","#f4e6c8",2.2,.5,a,l+2.7,o+3.6)),n.add(B("FIELD 4","#111111","#d6b48a",2.4,.42,a,l+2.15,o+3.6)),n}function Em(){const n=new it;n.name="isru-2";const t=-96,e=-16,i=K(t,e);return n.add(g(new E(18,.35,18),f.concrete,t,i+.12,e)),n.add(g(new Z(1.55,1.7,11,12),f.steelDark,t+2.2,i+5.8,e)),n.add(g(new ee(2.15,.16,6,14),f.steel,t+2.2,i+8.8,e,Math.PI/2,0,0)),n.add(B("SABATIER","#1a100c","#f0c089",4.4,.9,t+4.2,i+7.2,e,Math.PI/2)),n.add(B("TRAIN 2","#1a100c","#d6b48a",3.2,.55,t+4.2,i+6.3,e,Math.PI/2)),n.add(g(new Z(2.4,2.4,11,18),f.tankCh4,t-5.2,i+6,e+4.6,0,0,Math.PI/2)),n.add(g(new Z(2.4,2.4,11,18),f.tankO2,t-5.2,i+6,e-4.4,0,0,Math.PI/2)),n.add(B("CH4","#6a2208","#f4e6c8",2.8,.8,t+.4,i+6,e+4.6)),n.add(B("O2","#2a3340","#e8eef4",2.6,.8,t+.4,i+6,e-4.4)),jt(n,[[-88,-16],[-80,-16],[-72,-16]],f.tankCh4,.14),jt(n,[[-88,-18],[-80,-20],[-72,-18]],f.steel,.12),n}function bm(){const n=new it;n.name="ice-mine-2";const t=-78,e=-172,i=K(t,e);n.add(g(new E(8,.3,8),f.concrete,t,i+.1,e)),n.add(g(new E(.28,14,.28),f.lattice,t-2.2,i+7,e-2.2)),n.add(g(new E(.28,14,.28),f.lattice,t+2.2,i+7,e-2.2)),n.add(g(new E(.28,14,.28),f.lattice,t-2.2,i+7,e+2.2)),n.add(g(new E(.28,14,.28),f.lattice,t+2.2,i+7,e+2.2)),n.add(g(new E(5.2,.25,5.2),f.steelDark,t,i+14.2,e)),n.add(g(new Z(.35,.55,9,10),f.steel,t,i+5,e)),n.add(g(new ns(.7,1.6,8),f.soot,t,i+.9,e));const s=g(new Re(4,0),f.ice,t+8.2,i+1.8,e+1.4);return s.scale.set(1.45,.75,1.2),n.add(s),n.add(g(new E(6.4,.35,1.1),f.steelDark,t+3.6,i+1.4,e,0,0,-.18)),n.add(B("ICE 2","#1a2830","#d6e6ef",2.6,.65,t,i+8.4,e+2.6)),jt(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],f.pipe,.13),n}function Tm(){const n=new it;n.name="workshop-2";const t=66,e=-74,i=K(t,e);n.add(g(new E(16,.28,12),f.concrete,t,i+.1,e));const s=g(new Z(5.4,5.4,14,16,1,!1,0,Math.PI),f.habDark,t-1.2,i+3.1,e);return s.rotation.z=Math.PI/2,n.add(s),n.add(g(new E(.2,3.8,5.8),f.steelDark,t-8.1,i+2,e)),n.add(g(new E(.28,8.4,.28),f.lattice,t+6.4,i+4.3,e-3.6)),n.add(g(new E(7.2,.2,.2),f.lattice,t+3,i+8.5,e-3.6)),n.add(g(new E(1.5,1.1,1.5),f.crate,t+2.2,i+8,e-3.4)),Dt(n,73.2,-69.4,.2),Dt(n,74.4,-71.6,-.3,1.05),Dt(n,58.6,-68.8,.15,.9),n.add(B("WORKSHOP","#1a100c","#f0c089",3.8,.75,t,i+5.4,e+.2)),n.add(B("BAY 2","#1a100c","#d6b48a",2.6,.5,t,i+4.7,e+.2)),n}function Am(){const n=new it;n.name="potable";const t=18,e=-152,i=K(t,e);n.add(g(new E(14,.22,10),f.concrete,t,i+.1,e));for(let s=0;s<4;s++){const r=t-4.5+s*3;n.add(g(new Z(1.15,1.15,6.2,14),f.pipe,r,i+1.5,e,0,0,Math.PI/2))}return n.add(B("POTABLE","#1a2830","#d6e6ef",3.4,.7,t,i+3.35,e+4.6)),n.add(B("HAB STORE","#1a2830","#d6b48a",3.2,.5,t,i+2.7,e+4.6)),jt(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],f.pipe,.12),n}function Rm(){const n=new it;n.name="hab-berms";const t=[[-58,-108,9.5,.2],[-20,-100,12.5,0],[22,-128,8.5,1.2],[-8,-148,7.5,.4]];for(const[r,a,o,l]of t){const c=K(r,a),d=g(new ee(o,1.55,8,24,Math.PI*1.15),f.rust,r,c-.2,a,Math.PI/2,l,0);d.scale.set(1,.42,1),n.add(d)}for(const[r,a]of[[-62,-102],[-14,-96],[26,-122]]){const o=g(new Re(2.4,0),f.rust,r,K(r,a)+.95,a);o.scale.set(1.25,.6,1.05),n.add(o)}const[e,i,s]=on(-20,-100,2.4);return n.add(B("DUST BERM","#1a100c","#f0c089",3.6,.65,e,i+1.1,s)),n.add(B("HAB WIND","#1a100c","#d6b48a",3.2,.48,e,i+.5,s)),n}function Cm(){const n=new it;n.name="earth-dish-2";const t=-8,e=-162,i=K(t,e);n.add(g(new Z(6.2,6.2,.26,28),f.concrete,t,i+.1,e)),n.add(g(new Z(1.1,1.4,4.2,12),f.steelDark,t,i+2.2,e));const s=new it;return s.position.set(t,i+6.8,e),s.rotation.set(-.88,.55,0),s.add(g(new xe(5.2,22,14,0,Math.PI*2,0,Math.PI/2.28),f.dish,0,0,0)),s.add(g(new Z(.06,.06,3.8,6),f.steelDark,0,1.9,0)),n.add(s),n.add(B("EARTH 2","#1a100c","#f0c089",3.2,.65,t,i+3.6,e+5.2)),n.add(B("BACKUP LINK","#1a100c","#d6b48a",3.4,.5,t,i+2.95,e+5.2)),n}function Pm(){const n=new it;n.name="eclss";const t=8,e=-98,i=K(t,e);return n.add(g(new E(11.2,.22,7.2),f.concrete,t,i+.1,e)),n.add(g(new E(4.8,2.6,3.4),f.habDark,t-2.4,i+1.5,e)),n.add(B("ECLSS","#1a100c","#f0c089",3.2,.6,t-2.4,i+3.05,e+1.85)),n.add(B("CO2 SCRUB","#1a100c","#d6b48a",3.4,.45,t-2.4,i+2.45,e+1.85)),n.add(g(new Z(.85,.85,3.4,12),f.steelDark,t+1.6,i+1.9,e-1.4)),n.add(g(new Z(.85,.85,3.4,12),f.steelDark,t+3.4,i+1.9,e-1.4)),n.add(B("AMINE","#1a100c","#d6b48a",2.2,.4,t+2.5,i+3.8,e-1.4)),n.add(g(new Z(.7,.7,2.6,12),f.tankO2,t+1.6,i+1.5,e+1.8)),n.add(g(new Z(.7,.7,2.6,12),f.tankO2,t+3.4,i+1.5,e+1.8)),n.add(B("O2","#2a3340","#e8eef4",1.4,.4,t+2.5,i+3.05,e+1.8)),jt(n,[[8,-98],[14,-104],[22,-112]],f.pipe,.1),jt(n,[[8,-98],[2,-102],[-6,-108]],f.tankO2,.09),n}function Dm(){const n=new it;n.name="rover-shelter";const t=48,e=-70,i=K(t,e);n.add(g(new E(12.4,.18,8.6),f.concrete,t,i+.08,e));const s=[[-5.2,-3.4],[5.2,-3.4],[-5.2,3.4],[5.2,3.4]];for(const[r,a]of s)n.add(g(new E(.28,4.6,.28),f.steelDark,t+r,i+2.4,e+a));return n.add(g(new E(12.8,.16,9),f.steel,t,i+4.75,e)),n.add(g(new E(12.8,.06,9),f.solar,t,i+4.88,e)),n.add(B("DUST","#1a100c","#f0c089",2.6,.5,t,i+5.35,e+4.6)),n.add(B("ROVER","#1a100c","#d6b48a",2.8,.42,t,i+4.8,e+4.6)),n}function Im(){const n=new it;n.name="isru-radiators";const t=-68,e=12,i=K(t,e);n.add(g(new E(16.4,.18,6.2),f.concrete,t,i+.08,e));for(let s=0;s<5;s++){const r=t-6+s*3;n.add(g(new E(.16,3.6,.16),f.steelDark,r,i+1.9,e-1.8)),n.add(g(new E(.16,3.6,.16),f.steelDark,r,i+1.9,e+1.8)),n.add(g(new E(2.4,3.2,.08),f.solar,r,i+2.4,e,-.15,0,0)),n.add(g(new E(2.5,3.3,.04),f.steel,r,i+2.4,e+.06,-.15,0,0))}return n.add(B("REJECT","#1a100c","#f0c089",2.8,.5,t,i+4.55,e+3.2)),n.add(B("HEAT","#1a100c","#d6b48a",2.4,.42,t,i+4,e+3.2)),jt(n,[[-68,-6],[-68,4],[-68,12]],f.pipe,.1),n}function Lm(){const n=new it;n.name="parts-depot";const t=22,e=-80,i=K(t,e);return n.add(g(new E(12.2,.18,8.2),f.concrete,t,i+.08,e)),n.add(g(new E(.22,3.8,8.2),f.steelDark,t-5.8,i+2,e)),n.add(g(new E(12.2,.14,8.4),f.steel,t,i+3.95,e)),Dt(n,18,-78,.15,1),Dt(n,20.2,-77.4,-.2,.95),Dt(n,18.4,-81.2,.3,1.05),Dt(n,24.6,-78.6,-.1,1),Dt(n,26.2,-81.8,.25,.9),n.add(g(new E(2.4,1.1,1.4),f.steel,t+1.2,i+.75,e+.4)),n.add(B("PARTS","#1a100c","#f0c089",2.8,.55,t,i+4.45,e+4.2)),n.add(B("CARGO","#1a100c","#d6b48a",2.6,.42,t,i+3.9,e+4.2)),n}function Um(){const n=new it;n.name="greenhouse-2";const t=52,e=-112,i=K(t,e);n.add(g(new E(13.6,.22,8.2),f.concrete,t,i+.1,e));const s=new le(new Z(3.7,3.7,12.6,16,1,!1,0,Math.PI),f.glass);s.rotation.z=Math.PI/2,s.position.set(t,i+3.7,e),s.castShadow=!1,n.add(s),n.add(g(new E(12.4,.1,7.6),f.solarFrame,t,i+3.75,e));for(let r=-2;r<=2;r++){n.add(g(new E(1.9,.24,6),f.soil,t+r*2.15,i+.34,e));for(let a=-2;a<=2;a++){const o=a%2===0?f.plant:f.plantLeaf;n.add(g(new E(1.3,.48,.74),o,t+r*2.15,i+.68,e+a*1.05))}n.add(g(new E(1.55,.05,5.6),f.glowWarm,t+r*2.15,i+3.2,e))}return n.add(B("GREENHOUSE 2","#1a100c","#f0c089",4,.65,t,i+5.15,e+.15)),n.add(B("GROW FROM CO2","#1a100c","#d6b48a",3.6,.48,t,i+4.5,e+.15)),jt(n,[[32,-112],[42,-112],[52,-112]],f.pipe,.1),n}function Nm(){const n=new it;n.name="ice-depot";const t=-90,e=-158,i=K(t,e);n.add(g(new E(12,.22,10),f.concrete,t,i+.1,e)),n.add(g(new E(3.6,2.4,2.8),f.steelDark,t-1.8,i+1.35,e)),n.add(g(new Z(.85,1.65,2.1,10),f.steelDark,t-1.8,i+3.35,e)),n.add(g(new E(2.4,.28,1.05),f.steel,t+.7,i+2.1,e,0,0,-.2));const s=g(new Re(2.8,0),f.ice,t+3.6,i+1.25,e+1.5);return s.scale.set(1.35,.7,1.15),n.add(s),n.add(g(new Re(1.15,0),f.ice,t+4.8,i+.85,e+.2)),n.add(B("ICE","#1a2830","#d6e6ef",2.2,.55,t,i+3.85,e+4.4)),n.add(B("CRUSH","#1a2830","#d6e6ef",2.6,.5,t,i+3.2,e+4.4)),jt(n,[[-86,-160],[-80,-166],[-74,-168]],f.pipe,.13),n}function Fm(){const n=new it;n.name="batteries-3";const t=8,e=-78,i=K(t,e);n.add(g(new E(11.6,.2,6.4),f.concrete,t,i+.1,e));for(let s=0;s<5;s++)n.add(g(new E(1.7,1.95,3.8),f.battery,t-4+s*2,i+1.15,e)),n.add(g(new E(1.55,.08,3.6),f.steel,t-4+s*2,i+2.18,e));return n.add(B("NIGHT","#111111","#f4e6c8",2.4,.5,t,i+2.7,e+3.3)),n.add(B("HAB STORE","#111111","#d6b48a",3,.42,t,i+2.15,e+3.3)),n}function Om(){const n=new it;n.name="o2-buffer";const t=-8,e=-88,i=K(t,e);n.add(g(new E(10.2,.2,7.4),f.concrete,t,i+.1,e));for(let s=0;s<4;s++){const r=t-3.3+s*2.2;n.add(g(new Z(.85,.85,3.6,12),f.tankO2,r,i+2,e))}return n.add(B("O2","#2a3340","#e8eef4",1.8,.5,t,i+4.15,e+3.7)),n.add(B("CREW","#2a3340","#d6b48a",2.2,.42,t,i+3.6,e+3.7)),jt(n,[[-8,-88],[0,-94],[8,-98]],f.tankO2,.1),n}function zm(){const n=new it;n.name="co2-capture";const t=-96,e=4,i=K(t,e);return n.add(g(new E(11.6,.2,7.4),f.concrete,t,i+.1,e)),n.add(g(new Z(.55,.55,6.8,10),f.steel,t-2.4,i+3.6,e)),n.add(g(new Z(2.1,.65,2.4,14),f.steelDark,t-2.4,i+7.8,e)),n.add(g(new ee(1.85,.1,6,16),f.steel,t-2.4,i+9.1,e,Math.PI/2,0,0)),n.add(g(new E(3.2,2.2,2.4),f.habDark,t+2.2,i+1.3,e)),n.add(B("CO2","#1a100c","#f0c089",2.2,.55,t-2.4,i+4.8,e+1.4)),n.add(B("INTAKE 2","#1a100c","#d6b48a",3,.45,t+2.2,i+2.7,e+1.35)),jt(n,[[-96,4],[-96,-6],[-96,-16]],f.pipe,.12),n}function Bm(){const n=new it;n.name="solar-dust-fence";const t=142,e=-62,i=K(t,e);for(let s=0;s<8;s++){const r=e-10.5+s*3;n.add(g(new E(.18,3.4,.18),f.steelDark,t,i+1.8,r)),s<7&&n.add(g(new E(.06,2.6,2.7),f.lattice,t,i+1.7,r+1.5))}return n.add(B("DUST","#1a100c","#f0c089",2.4,.45,t-1.4,i+3.5,e)),n.add(B("FENCE","#1a100c","#d6b48a",2.4,.4,t-1.4,i+3,e)),n}function km(){const n=new it;n.name="condensate";const t=28,e=-140,i=K(t,e);return n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e)),n.add(g(new Z(1.35,1.35,3.8,14),f.pipe,t-1.6,i+2.1,e)),n.add(g(new Z(1.35,1.35,3.8,14),f.pipe,t+1.8,i+2.1,e)),n.add(g(new E(2.4,1.6,1.8),f.habDark,t,i+1,e+2.2)),n.add(B("H2O","#1a2830","#d6e6ef",2.2,.5,t,i+4.3,e+3.6)),n.add(B("CONDENSATE","#1a2830","#d6b48a",3.6,.42,t,i+3.75,e+3.6)),jt(n,[[28,-140],[18,-146],[18,-152]],f.pipe,.1),jt(n,[[28,-140],[16,-142],[8,-142]],f.pipe,.09),n}function Hm(){const n=new it;n.name="eva-rack";const t=12,e=18,i=K(t,e);return n.add(g(new E(5.8,.16,2.4),f.steelDark,t,i+.08,e)),n.add(g(new E(.16,2.8,.16),f.steel,t-2.4,i+1.5,e-.7)),n.add(g(new E(.16,2.8,.16),f.steel,t+2.4,i+1.5,e-.7)),n.add(g(new E(5,.12,.12),f.steel,t,i+2.9,e-.7)),n.add(Zn(t-1.5,e,.2)),n.add(Zn(t,e+.15,-.1)),n.add(Zn(t+1.5,e,.15)),n.add(B("SUITS","#1a100c","#f0c089",2.4,.45,t,i+3.35,e+1.2)),n.add(B("EVA RACK","#1a100c","#d6b48a",2.8,.4,t,i+2.85,e+1.2)),n}function Gm(){const n=new it;n.name="ch4-buffer";const t=36,e=8,i=K(t,e);n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e));for(let s=0;s<3;s++)n.add(g(new Z(1.05,1.05,5.6,14),f.tankCh4,t-2.4+s*2.4,i+1.4,e,0,0,Math.PI/2));return n.add(B("CH4","#6a2208","#f4e6c8",2.2,.5,t,i+3.35,e+3.7)),n.add(B("RETURN","#6a2208","#d6b48a",2.6,.42,t,i+2.8,e+3.7)),jt(n,[[28,8],[32,8],[36,8]],f.tankCh4,.11),n}function Vm(){const n=new it;n.name="o2-return";const t=36,e=-6,i=K(t,e);n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e));for(let s=0;s<3;s++)n.add(g(new Z(1.05,1.05,5.6,14),f.tankO2,t-2.4+s*2.4,i+1.4,e,0,0,Math.PI/2));return n.add(B("O2","#2a3340","#e8eef4",1.8,.5,t,i+3.35,e+3.7)),n.add(B("RETURN","#2a3340","#d6b48a",2.6,.42,t,i+2.8,e+3.7)),jt(n,[[36,8],[36,1],[36,-6]],f.steel,.11),n}function Wm(){const n=new it;n.name="isru-electrolysis";const t=-50,e=4,i=K(t,e);n.add(g(new E(11.6,.2,7.4),f.concrete,t,i+.1,e)),n.add(g(new E(3.4,3.6,2.6),f.habDark,t-2.6,i+2,e)),n.add(g(new E(3.4,3.6,2.6),f.steelDark,t+1.2,i+2,e));for(let s=0;s<4;s++)n.add(g(new E(.18,3.1,2.2),f.steel,t-3.8+s*.7,i+2,e));return n.add(g(new Z(1.15,1.15,5.2,14),f.steel,t+4.2,i+2.8,e+1.4)),n.add(g(new Z(.95,.95,4.4,14),f.tankO2,t+4.2,i+2.4,e-1.6)),n.add(B("ELECTRO","#1a100c","#f0c089",3.2,.5,t,i+4.55,e+3.7)),n.add(B("H2 RECYCLE","#1a100c","#d6b48a",3.4,.42,t,i+4,e+3.7)),jt(n,[[-72,-26],[-50,-16],[-50,4]],f.pipe,.11),jt(n,[[-50,4],[-58,4],[-64,-8]],f.steel,.1),n}function Xm(){const n=new it;n.name="ice-melt";const t=-58,e=-142,i=K(t,e);n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e)),n.add(g(new E(3.6,2.8,3.2),f.habDark,t-1.8,i+1.6,e)),n.add(g(new Z(1.45,1.45,4.2,14),f.pipe,t+2.2,i+2.3,e)),n.add(g(new Z(.55,.85,1.6,10),f.steelDark,t+2.2,i+4.9,e));const s=g(new Re(1.8,0),f.ice,t-3.4,i+.9,e+2.1);return s.scale.set(1.15,.55,1),n.add(s),n.add(B("MELT","#1a2830","#d6e6ef",2.4,.5,t,i+4.4,e+3.7)),n.add(B("STILL","#1a2830","#d6b48a",2.2,.42,t,i+3.85,e+3.7)),jt(n,[[-58,-158],[-58,-150],[-58,-142]],f.pipe,.11),jt(n,[[-58,-142],[-64,-90],[-68,-26]],f.pipe,.1),n}function qm(){const n=new it;n.name="methalox-pump";const t=-32,e=-22,i=K(t,e);return n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e)),n.add(g(new E(5.2,3.2,4.4),f.habDark,t,i+1.8,e)),n.add(g(new E(5.4,.14,4.6),f.steel,t,i+3.5,e)),n.add(g(new Z(.55,.55,1.8,10),f.tankCh4,t-1.4,i+1.1,e+2.6,0,0,Math.PI/2)),n.add(g(new Z(.55,.55,1.8,10),f.steel,t+1.4,i+1.1,e+2.6,0,0,Math.PI/2)),n.add(B("PUMP","#1a100c","#f0c089",2.4,.5,t,i+4.15,e+3.7)),n.add(B("METHALOX","#1a100c","#d6b48a",3.2,.42,t,i+3.6,e+3.7)),jt(n,[[-32,-14],[-32,-18],[-32,-22]],f.tankCh4,.11),jt(n,[[-32,-18],[-32,-22],[-18,-10]],f.steel,.1),n}function Ym(){const n=new it;n.name="sinter-press";const t=66,e=-90,i=K(t,e);return n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e)),n.add(g(new E(4.6,2.2,3.4),f.steelDark,t,i+1.3,e)),n.add(g(new E(1.4,3.4,1.4),f.steel,t,i+3.2,e)),n.add(g(new E(3.2,.35,2.4),f.steel,t,i+4.9,e)),n.add(g(new E(2.2,.55,1.6),f.habDark,t,i+2.55,e)),Dt(n,62.2,-87.6,.2,.9),Dt(n,70,-92.2,-.15,.85),n.add(B("SINTER","#1a100c","#f0c089",2.8,.5,t,i+5.55,e+3.7)),n.add(B("PRESS","#1a100c","#d6b48a",2.4,.42,t,i+5,e+3.7)),n}function Km(){const n=new it;n.name="waste-recycle";const t=22,e=-98,i=K(t,e);return n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e)),n.add(g(new E(4.4,2.8,3.6),f.habDark,t-1.4,i+1.6,e)),n.add(g(new Z(1.15,1.15,3.6,14),f.pipe,t+2.8,i+2,e)),n.add(g(new Z(.85,.85,2.8,12),f.steelDark,t+2.8,i+1.6,e+2)),n.add(B("WASTE","#1a100c","#f0c089",2.6,.5,t,i+4.25,e+3.7)),n.add(B("RECOVERY","#1a100c","#d6b48a",3.2,.42,t,i+3.7,e+3.7)),jt(n,[[8,-98],[14,-98],[22,-98]],f.pipe,.1),jt(n,[[22,-98],[22,-112],[22,-112]],f.pipe,.09),n}function Jm(){const n=new it;n.name="solar-combiner";const t=172,e=-48,i=K(t,e);n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e)),n.add(g(new E(3.6,2.4,2.8),f.habDark,t-2,i+1.4,e)),n.add(g(new E(3.2,2,2.4),f.steelDark,t+2.2,i+1.2,e));for(let s=0;s<3;s++)n.add(g(new E(.7,1.5,1.8),f.battery,t+1.2+s*.85,i+1,e));return n.add(B("COMBINER","#111111","#f4e6c8",3.4,.5,t,i+3.55,e+3.7)),n.add(B("FIELD 4","#111111","#d6b48a",2.6,.42,t,i+3,e+3.7)),jt(n,[[158,-62],[166,-54],[172,-48]],f.cable,.1),jt(n,[[172,-48],[164,-38],[158,-28]],f.cable,.09),n}function Zm(){const n=new it;n.name="gh-dust-filter";const t=38,e=-104,i=K(t,e);return n.add(g(new E(9.2,.18,5.6),f.concrete,t,i+.09,e)),n.add(g(new E(3.8,2.6,2.4),f.habDark,t-1.6,i+1.5,e)),n.add(g(new Z(.95,.95,3.2,12),f.steelDark,t+2.4,i+1.8,e)),n.add(g(new E(.12,2.2,2),f.lattice,t+3.5,i+1.4,e)),n.add(B("DUST","#1a100c","#f0c089",2.2,.45,t,i+3.55,e+2.9)),n.add(B("FILTER","#1a100c","#d6b48a",2.6,.4,t,i+3.05,e+2.9)),jt(n,[[22,-112],[30,-108],[38,-104]],f.pipe,.1),jt(n,[[38,-104],[46,-108],[52,-112]],f.pipe,.09),n}function $m(){const n=new it;n.name="weather-mast";const t=24,e=-128,i=K(t,e);return n.add(g(new E(3.6,.16,3.6),f.concrete,t,i+.08,e)),n.add(g(new Z(.16,.22,14.4,8),f.lattice,t,i+7.3,e)),n.add(g(new E(2.8,.08,.08),f.steel,t,i+12.4,e)),n.add(g(new E(.08,.08,2.8),f.steel,t,i+12.4,e)),n.add(g(new E(2.2,.06,.06),f.steelDark,t,i+14.2,e)),n.add(g(new E(1.4,1.1,1.1),f.habDark,t+1.15,i+.75,e+.9)),n.add(B("MET","#1a100c","#f0c089",1.8,.42,t,i+8.6,e+1.6)),n.add(B("DUST","#1a100c","#d6b48a",2,.38,t,i+8.1,e+1.6)),n}function jm(){const n=new it;n.name="ch4-chiller";const t=-80,e=20,i=K(t,e);return n.add(g(new E(9.6,.2,7.2),f.concrete,t,i+.1,e)),n.add(g(new E(4.2,2.6,3.2),f.habDark,t-1.6,i+1.5,e)),n.add(g(new Z(1.25,1.25,5,14),f.tankCh4,t+2.6,i+2.7,e)),n.add(g(new ee(1.55,.1,6,14),f.steel,t+2.6,i+4.4,e,Math.PI/2,0,0)),n.add(B("CH4","#6a2208","#f4e6c8",2,.45,t,i+4.15,e+3.7)),n.add(B("CHILLER","#1a100c","#d6b48a",2.8,.4,t,i+3.6,e+3.7)),jt(n,[[-76,-10],[-80,6],[-80,20]],f.tankCh4,.11),jt(n,[[-68,12],[-74,16],[-80,20]],f.pipe,.09),n}const jo=new R(.55,.62,.38);function t1(){const n=new kp;T0(n),n.add(y0(jo)),n.add(w0(jo)),n.add(x0()),n.add(v0()),n.add(E0());const t=b0();n.add(t);const e=R0();return n.add(e.group),{scene:n,dust:t,settlement:e,getHeight:K}}function e1(n){const t=new Bp({canvas:n,antialias:!0,powerPreference:"high-performance"});return t.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=tc,t.outputColorSpace=Ne,t.toneMapping=nc,t.toneMappingExposure=1.05,t}function n1(n,t){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)})}export{Ni as C,Je as P,R as V,e1 as a,n1 as b,t1 as c,Qm as d};
