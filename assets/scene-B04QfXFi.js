(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="170",kc=0,Ha=1,Hc=2,Qo=1,tc=2,fn=3,Un=0,Re=1,tn=2,In=0,vi=1,Va=2,Ga=3,Wa=4,Vc=5,Xn=100,Gc=101,Wc=102,Xc=103,qc=104,Yc=200,Kc=201,Jc=202,Zc=203,Rs=204,Cs=205,$c=206,jc=207,Qc=208,tl=209,el=210,nl=211,il=212,rl=213,sl=214,Ps=0,Ds=1,Is=2,yi=3,Ls=4,Us=5,Ns=6,Fs=7,ec=0,al=1,ol=2,Ln=0,cl=1,ll=2,dl=3,nc=4,hl=5,ul=6,fl=7,ic=300,Ei=301,wi=302,Os=303,zs=304,Gr=306,Bs=1e3,Yn=1001,ks=1002,Fe=1003,pl=1004,ir=1005,en=1006,Yr=1007,Kn=1008,gn=1009,rc=1010,sc=1011,Ji=1012,_a=1013,Jn=1014,nn=1015,Zi=1016,xa=1017,va=1018,bi=1020,ac=35902,oc=1021,cc=1022,Ze=1023,lc=1024,dc=1025,Mi=1026,Ti=1027,Ma=1028,Sa=1029,hc=1030,ya=1031,Ea=1033,Ir=33776,Lr=33777,Ur=33778,Nr=33779,Hs=35840,Vs=35841,Gs=35842,Ws=35843,Xs=36196,qs=37492,Ys=37496,Ks=37808,Js=37809,Zs=37810,$s=37811,js=37812,Qs=37813,ta=37814,ea=37815,na=37816,ia=37817,ra=37818,sa=37819,aa=37820,oa=37821,Fr=36492,ca=36494,la=36495,uc=36283,da=36284,ha=36285,ua=36286,ml=3200,gl=3201,fc=0,_l=1,Dn="",Ie="srgb",Ri="srgb-linear",Wr="linear",ne="srgb",ei=7680,Xa=519,xl=512,vl=513,Ml=514,pc=515,Sl=516,yl=517,El=518,wl=519,qa=35044,Ya="300 es",pn=2e3,zr=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,fa=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function bl(n,t){return(n%t+t)%t}function Jr(n,t,e){return(1-e)*n+e*t}function Oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,r,s,a,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],T=r[1],b=r[4],S=r[7],O=r[2],C=r[5],D=r[8];return s[0]=a*v+o*T+l*O,s[3]=a*m+o*b+l*C,s[6]=a*p+o*S+l*D,s[1]=c*v+d*T+u*O,s[4]=c*m+d*b+u*C,s[7]=c*p+d*S+u*D,s[2]=h*v+f*T+g*O,s[5]=h*m+f*b+g*C,s[8]=h*p+f*S+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,h=o*l-d*s,f=c*s-a*l,g=e*u+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(r*c-d*i)*v,t[2]=(o*i-r*a)*v,t[3]=h*v,t[4]=(d*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new zt;function mc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tl(){const n=Br("canvas");return n.style.display="block",n}const Ka={};function Xi(n){n in Ka||(Ka[n]=!0,console.warn(n))}function Al(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Rl(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cl(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(n.r=mn(n.r),n.g=mn(n.g),n.b=mn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(n.r=Si(n.r),n.g=Si(n.g),n.b=Si(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Dn?Wr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Si(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ja=[.64,.33,.3,.6,.15,.06],Za=[.2126,.7152,.0722],$a=[.3127,.329],ja=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Ri]:{primaries:Ja,whitePoint:$a,transfer:Wr,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:Za,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Ja,whitePoint:$a,transfer:ne,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:Za,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let ni;class Pl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Br("canvas")),ni.width=t.width,ni.height=t.height;const i=ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Br("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mn(e[i]/255)*255):e[i]=mn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dl=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($r(r[a].image)):s.push($r(r[a]))}else s=$r(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function $r(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Il=0;class Te extends Ci{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,i=Yn,r=Yn,s=en,a=Kn,o=Ze,l=gn,c=Te.DEFAULT_ANISOTROPY,d=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=$i(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case ks:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case ks:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=ic;Te.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,r=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(f+1)/2,O=(p+1)/2,C=(d+h)/4,D=(u+v)/4,L=(g+m)/4;return b>S&&b>O?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=C/i,s=D/i):S>O?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=L/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=D/s,r=L/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(h-d)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ll extends Ci{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Te(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Ll{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class _c extends Te{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ul extends Te{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],u=i[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==h||c!==f||d!==g){let m=1-o;const p=l*h+c*f+d*g+u*v,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const O=Math.sqrt(b),C=Math.atan2(O,p*T);m=Math.sin(m*C)/O,o=Math.sin(o*C)/O}const S=o*T;if(l=l*m+h*S,c=c*m+f*S,d=d*m+g*S,u=u*m+v*S,m===1-o){const O=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=O,c*=O,d*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],u=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+d*u+l*f-c*h,t[e+1]=l*g+d*h+c*u-o*f,t[e+2]=c*g+d*f+o*h-l*u,t[e+3]=d*g-o*u-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),u=o(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=i+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(to.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(to.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),d=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*d,this.y=i+l*d+o*c-s*u,this.z=r+l*u+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new R,to=new ji;class jn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(s,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rr.copy(i.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),sr.subVectors(this.max,zi),ii.subVectors(t.a,zi),ri.subVectors(t.b,zi),si.subVectors(t.c,zi),yn.subVectors(ri,ii),En.subVectors(si,ri),Fn.subVectors(ii,si);let e=[0,-yn.z,yn.y,0,-En.z,En.y,0,-Fn.z,Fn.y,yn.z,0,-yn.x,En.z,0,-En.x,Fn.z,0,-Fn.x,-yn.y,yn.x,0,-En.y,En.x,0,-Fn.y,Fn.x,0];return!Qr(e,ii,ri,si,sr)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,ii,ri,si,sr))?!1:(ar.crossVectors(yn,En),e=[ar.x,ar.y,ar.z],Qr(e,ii,ri,si,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new R,new R,new R,new R,new R,new R,new R,new R],We=new R,rr=new jn,ii=new R,ri=new R,si=new R,yn=new R,En=new R,Fn=new R,zi=new R,sr=new R,ar=new R,On=new R;function Qr(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){On.fromArray(n,s);const o=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),d=i.dot(On);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Nl=new jn,Bi=new R,ts=new R;class Pi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nl.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Bi,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ts.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(ts)),this.expandByPoint(Bi.copy(t.center).sub(ts))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new R,es=new R,or=new R,wn=new R,ns=new R,cr=new R,is=new R;class xc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){es.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(es);const s=t.distanceTo(e)*.5,a=-this.direction.dot(or),o=wn.dot(this.direction),l=-wn.dot(or),c=wn.lengthSq(),d=Math.abs(1-a*a);let u,h,f,g;if(d>0)if(u=a*l-o,h=a*o-l,g=s*d,u>=0)if(h>=-g)if(h<=g){const v=1/d;u*=v,h*=v,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(es).addScaledVector(or,h),f}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const i=ln.dot(this.direction),r=ln.dot(ln)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),d>=0?(s=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,i,r,s){ns.subVectors(e,t),cr.subVectors(i,t),is.crossVectors(ns,cr);let a=this.direction.dot(is),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);const l=o*this.direction.dot(cr.crossVectors(wn,cr));if(l<0)return null;const c=o*this.direction.dot(ns.cross(wn));if(c<0||l+c>a)return null;const d=-o*wn.dot(is);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,r,s,a,o,l,c,d,u,h,f,g,v,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,d,u,h,f,g,v,m)}set(t,e,i,r,s,a,o,l,c,d,u,h,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/ai.setFromMatrixColumn(t,0).length(),s=1/ai.setFromMatrixColumn(t,1).length(),a=1/ai.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=a*d,f=a*u,g=o*d,v=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,f=l*u,g=c*d,v=c*u;e[0]=h+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=f*o-g,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,f=l*u,g=c*d,v=c*u;e[0]=h-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*d,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,f=a*u,g=o*d,v=o*u;e[0]=l*d,e[4]=g*c-f,e[8]=h*c+v,e[1]=l*u,e[5]=v*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*d,e[4]=v-h*u,e[8]=g*u+f,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*u+g,e[10]=h-v*u}else if(t.order==="XZY"){const h=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+v,e[5]=a*d,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fl,t,Ol)}lookAt(t,e,i){const r=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),bn.crossVectors(i,Ue),bn.lengthSq()===0&&(Math.abs(i.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),bn.crossVectors(i,Ue)),bn.normalize(),lr.crossVectors(Ue,bn),r[0]=bn.x,r[4]=lr.x,r[8]=Ue.x,r[1]=bn.y,r[5]=lr.y,r[9]=Ue.y,r[2]=bn.z,r[6]=lr.z,r[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],b=i[7],S=i[11],O=i[15],C=r[0],D=r[4],L=r[8],w=r[12],y=r[1],I=r[5],G=r[9],k=r[13],q=r[2],Q=r[6],Y=r[10],rt=r[14],W=r[3],ct=r[7],mt=r[11],Tt=r[15];return s[0]=a*C+o*y+l*q+c*W,s[4]=a*D+o*I+l*Q+c*ct,s[8]=a*L+o*G+l*Y+c*mt,s[12]=a*w+o*k+l*rt+c*Tt,s[1]=d*C+u*y+h*q+f*W,s[5]=d*D+u*I+h*Q+f*ct,s[9]=d*L+u*G+h*Y+f*mt,s[13]=d*w+u*k+h*rt+f*Tt,s[2]=g*C+v*y+m*q+p*W,s[6]=g*D+v*I+m*Q+p*ct,s[10]=g*L+v*G+m*Y+p*mt,s[14]=g*w+v*k+m*rt+p*Tt,s[3]=T*C+b*y+S*q+O*W,s[7]=T*D+b*I+S*Q+O*ct,s[11]=T*L+b*G+S*Y+O*mt,s[15]=T*w+b*k+S*rt+O*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*u-r*c*u-s*o*h+i*c*h+r*o*f-i*l*f)+v*(+e*l*f-e*c*h+s*a*h-r*a*f+r*c*d-s*l*d)+m*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*d-i*c*d)+p*(-r*o*d-e*l*u+e*o*h+r*a*u-i*a*h+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=u*m*c-v*h*c+v*l*f-o*m*f-u*l*p+o*h*p,b=g*h*c-d*m*c-g*l*f+a*m*f+d*l*p-a*h*p,S=d*v*c-g*u*c+g*o*f-a*v*f-d*o*p+a*u*p,O=g*u*l-d*v*l-g*o*h+a*v*h+d*o*m-a*u*m,C=e*T+i*b+r*S+s*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=T*D,t[1]=(v*h*s-u*m*s-v*r*f+i*m*f+u*r*p-i*h*p)*D,t[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*p+i*l*p)*D,t[3]=(u*l*s-o*h*s-u*r*c+i*h*c+o*r*f-i*l*f)*D,t[4]=b*D,t[5]=(d*m*s-g*h*s+g*r*f-e*m*f-d*r*p+e*h*p)*D,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*p-e*l*p)*D,t[7]=(a*h*s-d*l*s+d*r*c-e*h*c-a*r*f+e*l*f)*D,t[8]=S*D,t[9]=(g*u*s-d*v*s-g*i*f+e*v*f+d*i*p-e*u*p)*D,t[10]=(a*v*s-g*o*s+g*i*c-e*v*c-a*i*p+e*o*p)*D,t[11]=(d*o*s-a*u*s-d*i*c+e*u*c+a*i*f-e*o*f)*D,t[12]=O*D,t[13]=(d*v*r-g*u*r+g*i*h-e*v*h-d*i*m+e*u*m)*D,t[14]=(g*o*r-a*v*r-g*i*l+e*v*l+a*i*m-e*o*m)*D,t[15]=(a*u*r-d*o*r+d*i*l-e*u*l-a*i*h+e*o*h)*D,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,u=o+o,h=s*c,f=s*d,g=s*u,v=a*d,m=a*u,p=o*u,T=l*c,b=l*d,S=l*u,O=i.x,C=i.y,D=i.z;return r[0]=(1-(v+p))*O,r[1]=(f+S)*O,r[2]=(g-b)*O,r[3]=0,r[4]=(f-S)*C,r[5]=(1-(h+p))*C,r[6]=(m+T)*C,r[7]=0,r[8]=(g+b)*D,r[9]=(m-T)*D,r[10]=(1-(h+v))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=ai.set(r[0],r[1],r[2]).length();const a=ai.set(r[4],r[5],r[6]).length(),o=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Xe.copy(this);const c=1/s,d=1/a,u=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=d,Xe.elements[5]*=d,Xe.elements[6]*=d,Xe.elements[8]*=u,Xe.elements[9]*=u,Xe.elements[10]*=u,e.setFromRotationMatrix(Xe),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=pn){const l=this.elements,c=2*s/(e-t),d=2*s/(i-r),u=(e+t)/(e-t),h=(i+r)/(i-r);let f,g;if(o===pn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===zr)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=pn){const l=this.elements,c=1/(e-t),d=1/(i-r),u=1/(a-s),h=(e+t)*c,f=(i+r)*d;let g,v;if(o===pn)g=(a+s)*u,v=-2*u;else if(o===zr)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ai=new R,Xe=new re,Fl=new R(0,0,0),Ol=new R(1,1,1),bn=new R,lr=new R,Ue=new R,eo=new re,no=new ji;class sn{constructor(t=0,e=0,i=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return eo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return no.setFromEuler(this),this.setFromQuaternion(no,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zl=0;const io=new R,oi=new ji,dn=new re,dr=new R,ki=new R,Bl=new R,kl=new ji,ro=new R(1,0,0),so=new R(0,1,0),ao=new R(0,0,1),oo={type:"added"},Hl={type:"removed"},ci={type:"childadded",child:null},rs={type:"childremoved",child:null};class xe extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new R,e=new sn,i=new ji,r=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new re},normalMatrix:{value:new zt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(ro,t)}rotateY(t){return this.rotateOnAxis(so,t)}rotateZ(t){return this.rotateOnAxis(ao,t)}translateOnAxis(t,e){return io.copy(t).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ro,t)}translateY(t){return this.translateOnAxis(so,t)}translateZ(t){return this.translateOnAxis(ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?dr.copy(t):dr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(ki,dr,this.up):dn.lookAt(dr,ki,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(dn),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oo),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hl),rs.child=t,this.dispatchEvent(rs),rs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oo),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Bl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,kl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}xe.DEFAULT_UP=new R(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new R,hn=new R,ss=new R,un=new R,li=new R,di=new R,co=new R,as=new R,os=new R,cs=new R,ls=new pe,ds=new pe,hs=new pe;class Je{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),qe.subVectors(t,e),r.cross(qe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){qe.subVectors(r,e),hn.subVectors(i,e),ss.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(hn),l=qe.dot(ss),c=hn.dot(hn),d=hn.dot(ss),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,g=(a*d-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return ls.setScalar(0),ds.setScalar(0),hs.setScalar(0),ls.fromBufferAttribute(t,e),ds.fromBufferAttribute(t,i),hs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ls,s.x),a.addScaledVector(ds,s.y),a.addScaledVector(hs,s.z),a}static isFrontFacing(t,e,i,r){return qe.subVectors(i,e),hn.subVectors(t,e),qe.cross(hn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qe.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Je.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;li.subVectors(r,i),di.subVectors(s,i),as.subVectors(t,i);const l=li.dot(as),c=di.dot(as);if(l<=0&&c<=0)return e.copy(i);os.subVectors(t,r);const d=li.dot(os),u=di.dot(os);if(d>=0&&u<=d)return e.copy(r);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(li,a);cs.subVectors(t,s);const f=li.dot(cs),g=di.dot(cs);if(g>=0&&f<=g)return e.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(di,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return co.subVectors(s,r),o=(u-d)/(u-d+(f-g)),e.copy(r).addScaledVector(co,o);const p=1/(m+v+h);return a=v*p,o=h*p,e.copy(i).addScaledVector(li,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function us(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=bl(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=us(a,s,t+1/3),this.g=us(a,s,t),this.b=us(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ie){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=Mc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Zt.fromWorkingColorSpace(we.copy(this),t),Math.round(be(we.r*255,0,255))*65536+Math.round(be(we.g*255,0,255))*256+Math.round(be(we.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(we.copy(this),e);const i=we.r,r=we.g,s=we.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ie){Zt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,i=we.g,r=we.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(hr);const i=Jr(Tn.h,hr.h,e),r=Jr(Tn.s,hr.s,e),s=Jr(Tn.l,hr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Ht;Ht.NAMES=Mc;let Vl=0;class Di extends Ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=$i(),this.name="",this.blending=vi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rs,this.blendDst=Cs,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(i.blending=this.blending),this.side!==Un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rs&&(i.blendSrc=this.blendSrc),this.blendDst!==Cs&&(i.blendDst=this.blendDst),this.blendEquation!==Xn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wa extends Di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new R,ur=new At;class Oe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qa,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class Sc extends Oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yc extends Oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class he extends Oe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Gl=0;const ke=new re,fs=new xe,hi=new R,Ne=new jn,Hi=new jn,Se=new R;class Ce extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?yc:Sc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,i){return ke.makeTranslation(t,e,i),this.applyMatrix4(ke),this}scale(t,e,i){return ke.makeScale(t,e,i),this.applyMatrix4(ke),this}lookAt(t){return fs.lookAt(t),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ne.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ne.min,Hi.min),Ne.expandByPoint(Se),Se.addVectors(Ne.max,Hi.max),Ne.expandByPoint(Se)):(Ne.expandByPoint(Hi.min),Ne.expandByPoint(Hi.max))}Ne.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Se.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(t,c),Se.add(hi)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new R,l[L]=new R;const c=new R,d=new R,u=new R,h=new At,f=new At,g=new At,v=new R,m=new R;function p(L,w,y){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),h.fromBufferAttribute(s,L),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,y),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(I),o[L].add(v),o[w].add(v),o[y].add(v),l[L].add(m),l[w].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,w=T.length;L<w;++L){const y=T[L],I=y.start,G=y.count;for(let k=I,q=I+G;k<q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new R,S=new R,O=new R,C=new R;function D(L){O.fromBufferAttribute(r,L),C.copy(O);const w=o[L];b.copy(w),b.sub(O.multiplyScalar(O.dot(w))).normalize(),S.crossVectors(C,w);const I=S.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,w=T.length;L<w;++L){const y=T[L],I=y.start,G=y.count;for(let k=I,q=I+G;k<q;k+=3)D(t.getX(k+0)),D(t.getX(k+1)),D(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,d=new R,u=new R;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new Oe(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=t(h,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new re,zn=new xc,fr=new Pi,ho=new R,pr=new R,mr=new R,gr=new R,ps=new R,_r=new R,uo=new R,xr=new R;class de extends xe{constructor(t=new Ce,e=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){_r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(ps.fromBufferAttribute(u,t),a?_r.addScaledVector(ps,d):_r.addScaledVector(ps.sub(e),d))}e.add(_r)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(s),zn.copy(t.ray).recast(t.near),!(fr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(fr,ho)===null||zn.origin.distanceToSquared(ho)>(t.far-t.near)**2))&&(lo.copy(s).invert(),zn.copy(t.ray).applyMatrix4(lo),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,O=b;S<O;S+=3){const C=o.getX(S),D=o.getX(S+1),L=o.getX(S+2);r=vr(this,p,t,i,c,d,u,C,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);r=vr(this,a,t,i,c,d,u,T,b,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,O=b;S<O;S+=3){const C=S,D=S+1,L=S+2;r=vr(this,p,t,i,c,d,u,C,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=m,b=m+1,S=m+2;r=vr(this,a,t,i,c,d,u,T,b,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Wl(n,t,e,i,r,s,a,o){let l;if(t.side===Re?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Un,o),l===null)return null;xr.copy(o),xr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:n}}function vr(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,pr),n.getVertexPosition(l,mr),n.getVertexPosition(c,gr);const d=Wl(n,t,e,i,pr,mr,gr,uo);if(d){const u=new R;Je.getBarycoord(uo,pr,mr,gr,u),r&&(d.uv=Je.getInterpolatedAttribute(r,o,l,c,u,new At)),s&&(d.uv1=Je.getInterpolatedAttribute(s,o,l,c,u,new At)),a&&(d.normal=Je.getInterpolatedAttribute(a,o,l,c,u,new R),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};Je.getNormal(pr,mr,gr,h.normal),d.face=h,d.barycoord=u}return d}class P extends Ce{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(u,2));function g(v,m,p,T,b,S,O,C,D,L,w){const y=S/D,I=O/L,G=S/2,k=O/2,q=C/2,Q=D+1,Y=L+1;let rt=0,W=0;const ct=new R;for(let mt=0;mt<Y;mt++){const Tt=mt*I-k;for(let Gt=0;Gt<Q;Gt++){const te=Gt*y-G;ct[v]=te*T,ct[m]=Tt*b,ct[p]=q,c.push(ct.x,ct.y,ct.z),ct[v]=0,ct[m]=0,ct[p]=C>0?1:-1,d.push(ct.x,ct.y,ct.z),u.push(Gt/D),u.push(1-mt/L),rt+=1}}for(let mt=0;mt<L;mt++)for(let Tt=0;Tt<D;Tt++){const Gt=h+Tt+Q*mt,te=h+Tt+Q*(mt+1),J=h+(Tt+1)+Q*(mt+1),at=h+(Tt+1)+Q*mt;l.push(Gt,te,at),l.push(te,J,at),W+=6}o.addGroup(f,W,w),f+=W,h+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new P(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ai(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ae(n){const t={};for(let e=0;e<n.length;e++){const i=Ai(n[e]);for(const r in i)t[r]=i[r]}return t}function Xl(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ec(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const ql={clone:Ai,merge:Ae};var Yl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yl,this.fragmentShader=Kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=Xl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new R,fo=new At,po=new At;class Ke extends wc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,fo,po),e.subVectors(po,fo)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,fi=1;class Jl extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ke(ui,fi,t,e);r.layers=this.layers,this.add(r);const s=new Ke(ui,fi,t,e);s.layers=this.layers,this.add(s);const a=new Ke(ui,fi,t,e);a.layers=this.layers,this.add(a);const o=new Ke(ui,fi,t,e);o.layers=this.layers,this.add(o);const l=new Ke(ui,fi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(ui,fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bc extends Te{constructor(t,e,i,r,s,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zl extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new bc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new P(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Ai(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:In});s.uniforms.tEquirect.value=e;const a=new de(r,s),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=en),new Jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const ms=new R,$l=new R,jl=new zt;class Vn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ms.subVectors(i,e).cross($l.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ms),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jl.getNormalMatrix(t),r=this.coplanarPoint(ms).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Pi,Mr=new R;class ba{constructor(t=new Vn,e=new Vn,i=new Vn,r=new Vn,s=new Vn,a=new Vn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],u=r[6],h=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],T=r[13],b=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-f,S-p).normalize(),i[1].setComponents(l+s,h+c,m+f,S+p).normalize(),i[2].setComponents(l+a,h+d,m+g,S+T).normalize(),i[3].setComponents(l-a,h-d,m-g,S-T).normalize(),i[4].setComponents(l-o,h-u,m-v,S-b).normalize(),e===pn)i[5].setComponents(l+o,h+u,m+v,S+b).normalize();else if(e===zr)i[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Mr.x=r.normal.x>0?t.max.x:t.min.x,Mr.y=r.normal.y>0?t.max.y:t.min.y,Mr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Ql(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ii extends Ce{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,u=t/o,h=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const T=p*h-a;for(let b=0;b<c;b++){const S=b*u-s;g.push(S,-T,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const b=T+c*p,S=T+c*(p+1),O=T+1+c*(p+1),C=T+1+c*p;f.push(b,S,C),f.push(S,O,C)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var td=`#ifdef USE_ALPHAHASH
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
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
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
} // validated`,wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
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
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
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
#endif`,Eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wh=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Gh=`float specularStrength;
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
}`,su=`#include <common>
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
}`,wu=`#define STANDARD
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
}`,kt={alphahash_fragment:td,alphahash_pars_fragment:ed,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:rd,alphatest_pars_fragment:sd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:cd,batching_vertex:ld,begin_vertex:dd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:xd,color_fragment:vd,color_pars_fragment:Md,color_pars_vertex:Sd,color_vertex:yd,common:Ed,cube_uv_reflection_fragment:wd,defaultnormal_vertex:bd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ad,emissivemap_fragment:Rd,emissivemap_pars_fragment:Cd,colorspace_fragment:Pd,colorspace_pars_fragment:Dd,envmap_fragment:Id,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Ud,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:qd,envmap_vertex:Fd,fog_vertex:Od,fog_pars_vertex:zd,fog_fragment:Bd,fog_pars_fragment:kd,gradientmap_pars_fragment:Hd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:Kd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Zd,lights_physical_fragment:$d,lights_physical_pars_fragment:jd,lights_fragment_begin:Qd,lights_fragment_maps:th,lights_fragment_end:eh,logdepthbuf_fragment:nh,logdepthbuf_pars_fragment:ih,logdepthbuf_pars_vertex:rh,logdepthbuf_vertex:sh,map_fragment:ah,map_pars_fragment:oh,map_particle_fragment:ch,map_particle_pars_fragment:lh,metalnessmap_fragment:dh,metalnessmap_pars_fragment:hh,morphinstance_vertex:uh,morphcolor_vertex:fh,morphnormal_vertex:ph,morphtarget_pars_vertex:mh,morphtarget_vertex:gh,normal_fragment_begin:_h,normal_fragment_maps:xh,normal_pars_fragment:vh,normal_pars_vertex:Mh,normal_vertex:Sh,normalmap_pars_fragment:yh,clearcoat_normal_fragment_begin:Eh,clearcoat_normal_fragment_maps:wh,clearcoat_pars_fragment:bh,iridescence_pars_fragment:Th,opaque_fragment:Ah,packing:Rh,premultiplied_alpha_fragment:Ch,project_vertex:Ph,dithering_fragment:Dh,dithering_pars_fragment:Ih,roughnessmap_fragment:Lh,roughnessmap_pars_fragment:Uh,shadowmap_pars_fragment:Nh,shadowmap_pars_vertex:Fh,shadowmap_vertex:Oh,shadowmask_pars_fragment:zh,skinbase_vertex:Bh,skinning_pars_vertex:kh,skinning_vertex:Hh,skinnormal_vertex:Vh,specularmap_fragment:Gh,specularmap_pars_fragment:Wh,tonemapping_fragment:Xh,tonemapping_pars_fragment:qh,transmission_fragment:Yh,transmission_pars_fragment:Kh,uv_pars_fragment:Jh,uv_pars_vertex:Zh,uv_vertex:$h,worldpos_vertex:jh,background_vert:Qh,background_frag:tu,backgroundCube_vert:eu,backgroundCube_frag:nu,cube_vert:iu,cube_frag:ru,depth_vert:su,depth_frag:au,distanceRGBA_vert:ou,distanceRGBA_frag:cu,equirect_vert:lu,equirect_frag:du,linedashed_vert:hu,linedashed_frag:uu,meshbasic_vert:fu,meshbasic_frag:pu,meshlambert_vert:mu,meshlambert_frag:gu,meshmatcap_vert:_u,meshmatcap_frag:xu,meshnormal_vert:vu,meshnormal_frag:Mu,meshphong_vert:Su,meshphong_frag:yu,meshphysical_vert:Eu,meshphysical_frag:wu,meshtoon_vert:bu,meshtoon_frag:Tu,points_vert:Au,points_frag:Ru,shadow_vert:Cu,shadow_frag:Pu,sprite_vert:Du,sprite_frag:Iu},ot={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Qe={basic:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ae([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ae([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ae([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ae([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ae([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ae([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ae([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ae([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ae([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ae([ot.lights,ot.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Qe.physical={uniforms:Ae([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Sr={r:0,b:0,g:0},kn=new sn,Lu=new re;function Uu(n,t,e,i,r,s,a){const o=new Ht(0);let l=s===!0?0:1,c,d,u=null,h=0,f=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function v(T){let b=!1;const S=g(T);S===null?p(o,l):S&&S.isColor&&(p(S,1),b=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===Gr)?(d===void 0&&(d=new de(new P(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Ai(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),kn.copy(b.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Lu.makeRotationFromEuler(kn)),d.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ne,(u!==S||h!==S.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new de(new Ii(2,2),new _n({name:"BackgroundMaterial",uniforms:Ai(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,b){T.getRGB(Sr,Ec(n)),i.buffers.color.setClear(Sr.r,Sr.g,Sr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:v,addToRenderList:m}}function Nu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,I,G,k,q){let Q=!1;const Y=u(k,G,I);s!==Y&&(s=Y,c(s.object)),Q=f(y,k,G,q),Q&&g(y,k,G,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(y,I,G,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function u(y,I,G){const k=G.wireframe===!0;let q=i[y.id];q===void 0&&(q={},i[y.id]=q);let Q=q[I.id];Q===void 0&&(Q={},q[I.id]=Q);let Y=Q[k];return Y===void 0&&(Y=h(l()),Q[k]=Y),Y}function h(y){const I=[],G=[],k=[];for(let q=0;q<e;q++)I[q]=0,G[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,I,G,k){const q=s.attributes,Q=I.attributes;let Y=0;const rt=G.getAttributes();for(const W in rt)if(rt[W].location>=0){const mt=q[W];let Tt=Q[W];if(Tt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),mt===void 0||mt.attribute!==Tt||Tt&&mt.data!==Tt.data)return!0;Y++}return s.attributesNum!==Y||s.index!==k}function g(y,I,G,k){const q={},Q=I.attributes;let Y=0;const rt=G.getAttributes();for(const W in rt)if(rt[W].location>=0){let mt=Q[W];mt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));const Tt={};Tt.attribute=mt,mt&&mt.data&&(Tt.data=mt.data),q[W]=Tt,Y++}s.attributes=q,s.attributesNum=Y,s.index=k}function v(){const y=s.newAttributes;for(let I=0,G=y.length;I<G;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const G=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;G[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),q[y]!==I&&(n.vertexAttribDivisor(y,I),q[y]=I)}function T(){const y=s.newAttributes,I=s.enabledAttributes;for(let G=0,k=I.length;G<k;G++)I[G]!==y[G]&&(n.disableVertexAttribArray(G),I[G]=0)}function b(y,I,G,k,q,Q,Y){Y===!0?n.vertexAttribIPointer(y,I,G,q,Q):n.vertexAttribPointer(y,I,G,k,q,Q)}function S(y,I,G,k){v();const q=k.attributes,Q=G.getAttributes(),Y=I.defaultAttributeValues;for(const rt in Q){const W=Q[rt];if(W.location>=0){let ct=q[rt];if(ct===void 0&&(rt==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),rt==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const mt=ct.normalized,Tt=ct.itemSize,Gt=t.get(ct);if(Gt===void 0)continue;const te=Gt.buffer,J=Gt.type,at=Gt.bytesPerElement,Et=J===n.INT||J===n.UNSIGNED_INT||ct.gpuType===_a;if(ct.isInterleavedBufferAttribute){const dt=ct.data,Dt=dt.stride,Nt=ct.offset;if(dt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<W.locationSize;Wt++)p(W.location+Wt,dt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Wt=0;Wt<W.locationSize;Wt++)m(W.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Wt=0;Wt<W.locationSize;Wt++)b(W.location+Wt,Tt/W.locationSize,J,mt,Dt*at,(Nt+Tt/W.locationSize*Wt)*at,Et)}else{if(ct.isInstancedBufferAttribute){for(let dt=0;dt<W.locationSize;dt++)p(W.location+dt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let dt=0;dt<W.locationSize;dt++)b(W.location+dt,Tt/W.locationSize,J,mt,Tt*at,Tt/W.locationSize*dt*at,Et)}}else if(Y!==void 0){const mt=Y[rt];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(W.location,mt);break;case 3:n.vertexAttrib3fv(W.location,mt);break;case 4:n.vertexAttrib4fv(W.location,mt);break;default:n.vertexAttrib1fv(W.location,mt)}}}}T()}function O(){L();for(const y in i){const I=i[y];for(const G in I){const k=I[G];for(const q in k)d(k[q].object),delete k[q];delete I[G]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const G in I){const k=I[G];for(const q in k)d(k[q].object),delete k[q];delete I[G]}delete i[y.id]}function D(y){for(const I in i){const G=i[I];if(G[y.id]===void 0)continue;const k=G[y.id];for(const q in k)d(k[q].object),delete k[q];delete G[y.id]}}function L(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Fu(n,t,e){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function a(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),e.update(d,i,u))}function o(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];e.update(f,i,1)}function l(c,d,u,h){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*h[v];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ou(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Ze&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const L=D===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==gn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==nn&&!L)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:O,maxSamples:C}}function zu(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Vn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||r;return r=h,i=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const T=s?0:i,b=T*4;let S=p.clippingState||null;l.value=S,S=d(g,h,b,f);for(let O=0;O!==b;++O)S[O]=e[O];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,h,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==v;++b,S+=4)a.copy(u[b]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Bu(n){let t=new WeakMap;function e(a,o){return o===Os?a.mapping=Ei:o===zs&&(a.mapping=wi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Os||o===zs)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zl(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ac extends wc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xi=4,mo=[.125,.215,.35,.446,.526,.582],qn=20,gs=new Ac,go=new Ht;let _s=null,xs=0,vs=0,Ms=!1;const Gn=(1+Math.sqrt(5))/2,pi=1/Gn,_o=[new R(-Gn,pi,0),new R(Gn,pi,0),new R(-pi,0,Gn),new R(pi,0,Gn),new R(0,Gn,-pi),new R(0,Gn,pi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){_s=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_s,xs,vs),this._renderer.xr.enabled=Ms,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_s=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Zi,format:Ze,colorSpace:Ri,depthBuffer:!1},r=vo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(s)),this._blurMaterial=Hu(s,t,e)}return r}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,gs)}_sceneToCubeUV(t,e,i,r){const o=new Ke(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(go),d.toneMapping=Ln,d.autoClear=!1;const f=new wa({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new de(new P,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(go),v=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):T===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;yr(r,T*b,p>2?b:0,b,b),d.setRenderTarget(r),v&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ei||t.mapping===wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,gs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_o[(r-s-1)%_o.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new de(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*qn-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):qn;m>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const p=[];let T=0;for(let D=0;D<qn;++D){const L=D/v,w=Math.exp(-L*L/2);p.push(w),D===0?T+=w:D<m&&(T+=2*w)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const S=this._sizeLods[r],O=3*S*(r>b-xi?r-b+xi:0),C=4*(this._cubeSize-S);yr(e,O,C,3*S,2*S),l.setRenderTarget(e),l.render(u,gs)}}function ku(n){const t=[],e=[],i=[];let r=n;const s=n-xi+1+mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-xi?l=mo[a-n+xi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),b=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let C=0;C<f;C++){const D=C%3*2/3-1,L=C>2?0:-1,w=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];T.set(w,v*g*C),b.set(h,m*g*C);const y=[C,C,C,C,C,C];S.set(y,p*g*C)}const O=new Ce;O.setAttribute("position",new Oe(T,v)),O.setAttribute("uv",new Oe(b,m)),O.setAttribute("faceIndex",new Oe(S,p)),t.push(O),r>xi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vo(n,t,e){const i=new Zn(n,t,e);return i.texture.mapping=Gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Hu(n,t,e){const i=new Float32Array(qn),r=new R(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Mo(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function So(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function Vu(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Os||l===zs,d=l===Ei||l===wi;if(c||d){let u=t.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new xo(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&r(f)?(e===null&&(e=new xo(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Gu(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Xi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wu(n,t,e,i){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(u){const h=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let b=0,S=T.length;b<S;b+=3){const O=T[b+0],C=T[b+1],D=T[b+2];h.push(O,C,C,D,D,O)}}else if(g!==void 0){const T=g.array;v=g.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const O=b+0,C=b+1,D=b+2;h.push(O,C,C,D,D,O)}}else return;const m=new(mc(h)?yc:Sc)(h,1);m.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Xu(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*a),e.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*a,g),e.update(f,i,g))}function d(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(h,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function qu(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Yu(n,t,e){const i=new WeakMap,r=new pe;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let w=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let S=o.attributes.position.count*b,O=1;S>t.maxTextureSize&&(O=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const C=new Float32Array(S*O*4*u),D=new _c(C,S,O,u);D.type=nn,D.needsUpdate=!0;const L=b*4;for(let y=0;y<u;y++){const I=m[y],G=p[y],k=T[y],q=S*O*4*y;for(let Q=0;Q<I.count;Q++){const Y=Q*L;f===!0&&(r.fromBufferAttribute(I,Q),C[q+Y+0]=r.x,C[q+Y+1]=r.y,C[q+Y+2]=r.z,C[q+Y+3]=0),g===!0&&(r.fromBufferAttribute(G,Q),C[q+Y+4]=r.x,C[q+Y+5]=r.y,C[q+Y+6]=r.z,C[q+Y+7]=0),v===!0&&(r.fromBufferAttribute(k,Q),C[q+Y+8]=r.x,C[q+Y+9]=r.y,C[q+Y+10]=r.z,C[q+Y+11]=k.itemSize===4?r.w:1)}}h={count:u,texture:D,size:new At(S,O)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ku(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Rc extends Te{constructor(t,e,i,r,s,a,o,l,c,d=Mi){if(d!==Mi&&d!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Mi&&(i=Jn),i===void 0&&d===Ti&&(i=bi),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cc=new Te,yo=new Rc(1,1),Pc=new _c,Dc=new Ul,Ic=new bc,Eo=[],wo=[],bo=new Float32Array(16),To=new Float32Array(9),Ao=new Float32Array(4);function Li(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Eo[r];if(s===void 0&&(s=new Float32Array(r),Eo[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xr(n,t){let e=wo[t];e===void 0&&(e=new Int32Array(t),wo[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ju(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Zu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function $u(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function ju(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function Qu(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;Ao.set(i),n.uniformMatrix2fv(this.addr,!1,Ao),Me(e,i)}}function tf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;To.set(i),n.uniformMatrix3fv(this.addr,!1,To),Me(e,i)}}function ef(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;bo.set(i),n.uniformMatrix4fv(this.addr,!1,bo),Me(e,i)}}function nf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function sf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function af(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function of(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function lf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function df(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function hf(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yo.compareFunction=pc,s=yo):s=Cc,e.setTexture2D(t||s,r)}function uf(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Dc,r)}function ff(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ic,r)}function pf(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Pc,r)}function mf(n){switch(n){case 5126:return Ju;case 35664:return Zu;case 35665:return $u;case 35666:return ju;case 35674:return Qu;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return rf;case 35668:case 35672:return sf;case 35669:case 35673:return af;case 5125:return of;case 36294:return cf;case 36295:return lf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}function gf(n,t){n.uniform1fv(this.addr,t)}function _f(n,t){const e=Li(t,this.size,2);n.uniform2fv(this.addr,e)}function xf(n,t){const e=Li(t,this.size,3);n.uniform3fv(this.addr,e)}function vf(n,t){const e=Li(t,this.size,4);n.uniform4fv(this.addr,e)}function Mf(n,t){const e=Li(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Sf(n,t){const e=Li(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yf(n,t){const e=Li(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ef(n,t){n.uniform1iv(this.addr,t)}function wf(n,t){n.uniform2iv(this.addr,t)}function bf(n,t){n.uniform3iv(this.addr,t)}function Tf(n,t){n.uniform4iv(this.addr,t)}function Af(n,t){n.uniform1uiv(this.addr,t)}function Rf(n,t){n.uniform2uiv(this.addr,t)}function Cf(n,t){n.uniform3uiv(this.addr,t)}function Pf(n,t){n.uniform4uiv(this.addr,t)}function Df(n,t,e){const i=this.cache,r=t.length,s=Xr(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Cc,s[a])}function If(n,t,e){const i=this.cache,r=t.length,s=Xr(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Dc,s[a])}function Lf(n,t,e){const i=this.cache,r=t.length,s=Xr(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ic,s[a])}function Uf(n,t,e){const i=this.cache,r=t.length,s=Xr(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Pc,s[a])}function Nf(n){switch(n){case 5126:return gf;case 35664:return _f;case 35665:return xf;case 35666:return vf;case 35674:return Mf;case 35675:return Sf;case 35676:return yf;case 5124:case 35670:return Ef;case 35667:case 35671:return wf;case 35668:case 35672:return bf;case 35669:case 35673:return Tf;case 5125:return Af;case 36294:return Rf;case 36295:return Cf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Uf}}class Ff{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mf(e.type)}}class Of{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nf(e.type)}}class zf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function Ro(n,t){n.seq.push(t),n.map[t.id]=t}function Bf(n,t,e){const i=n.name,r=i.length;for(Ss.lastIndex=0;;){const s=Ss.exec(i),a=Ss.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ro(e,c===void 0?new Ff(o,n,t):new Of(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new zf(o),Ro(e,u)),e=u}}}class Or{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Bf(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Co(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const kf=37297;let Hf=0;function Vf(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Po=new zt;function Gf(n){Zt._getMatrix(Po,Zt.workingColorSpace,n);const t=`mat3( ${Po.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case Wr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Do(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Vf(n.getShaderSource(t),a)}else return r}function Wf(n,t){const e=Gf(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xf(n,t){let e;switch(t){case cl:e="Linear";break;case ll:e="Reinhard";break;case dl:e="Cineon";break;case nc:e="ACESFilmic";break;case ul:e="AgX";break;case fl:e="Neutral";break;case hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new R;function qf(){Zt.getLuminanceCoefficients(Er);const n=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function Kf(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jf(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function qi(n){return n!==""}function Io(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zf=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(n){return n.replace(Zf,jf)}const $f=new Map;function jf(n,t){let e=kt[t];if(e===void 0){const i=$f.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pa(e)}const Qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(n){return n.replace(Qf,tp)}function tp(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function No(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ep(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qo?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function np(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case wi:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ip(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function rp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ec:t="ENVMAP_BLENDING_MULTIPLY";break;case al:t="ENVMAP_BLENDING_MIX";break;case ol:t="ENVMAP_BLENDING_ADD";break}return t}function sp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ap(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ep(e),c=np(e),d=ip(e),u=rp(e),h=sp(e),f=Yf(e),g=Kf(s),v=r.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`)):(m=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),p=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Xf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Wf("linearToOutputTexel",e.outputColorSpace),qf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),a=pa(a),a=Io(a,e),a=Lo(a,e),o=pa(o),o=Io(o,e),o=Lo(o,e),a=Uo(a),o=Uo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+m+a,S=T+p+o,O=Co(r,r.VERTEX_SHADER,b),C=Co(r,r.FRAGMENT_SHADER,S);r.attachShader(v,O),r.attachShader(v,C),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(I){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(O).trim(),q=r.getShaderInfoLog(C).trim();let Q=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,O,C);else{const rt=Do(r,O,"vertex"),W=Do(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+rt+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||q==="")&&(Y=!1);Y&&(I.diagnostics={runnable:Q,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(O),r.deleteShader(C),L=new Or(r,v),w=Jf(r,v)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,kf)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=C,this}let op=0;class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new lp(t),e.set(t,i)),i}}class lp{constructor(t){this.id=op++,this.code=t,this.usedTimes=0}}function dp(n,t,e,i,r,s,a){const o=new vc,l=new cp,c=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,I,G,k){const q=G.fog,Q=k.geometry,Y=w.isMeshStandardMaterial?G.environment:null,rt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),W=rt&&rt.mapping===Gr?rt.image.height:null,ct=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=mt!==void 0?mt.length:0;let Gt=0;Q.morphAttributes.position!==void 0&&(Gt=1),Q.morphAttributes.normal!==void 0&&(Gt=2),Q.morphAttributes.color!==void 0&&(Gt=3);let te,J,at,Et;if(ct){const ee=Qe[ct];te=ee.vertexShader,J=ee.fragmentShader}else te=w.vertexShader,J=w.fragmentShader,l.update(w),at=l.getVertexShaderID(w),Et=l.getFragmentShaderID(w);const dt=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Nt=k.isInstancedMesh===!0,Wt=k.isBatchedMesh===!0,ue=!!w.map,Kt=!!w.matcap,me=!!rt,z=!!w.aoMap,ze=!!w.lightMap,Xt=!!w.bumpMap,qt=!!w.normalMap,Ct=!!w.displacementMap,oe=!!w.emissiveMap,Rt=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,B=w.clearcoat>0,Z=w.dispersion>0,tt=w.iridescence>0,K=w.sheen>0,wt=w.transmission>0,ht=M&&!!w.anisotropyMap,_t=B&&!!w.clearcoatMap,Jt=B&&!!w.clearcoatNormalMap,nt=B&&!!w.clearcoatRoughnessMap,xt=tt&&!!w.iridescenceMap,Pt=tt&&!!w.iridescenceThicknessMap,It=K&&!!w.sheenColorMap,vt=K&&!!w.sheenRoughnessMap,Yt=!!w.specularMap,Bt=!!w.specularColorMap,se=!!w.specularIntensityMap,U=wt&&!!w.transmissionMap,lt=wt&&!!w.thicknessMap,X=!!w.gradientMap,$=!!w.alphaMap,pt=w.alphaTest>0,ut=!!w.alphaHash,Ft=!!w.extensions;let fe=Ln;w.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(fe=n.toneMapping);const ye={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:J,defines:w.defines,customVertexShaderID:at,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Wt,batchingColor:Wt&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ri,alphaToCoverage:!!w.alphaToCoverage,map:ue,matcap:Kt,envMap:me,envMapMode:me&&rt.mapping,envMapCubeUVHeight:W,aoMap:z,lightMap:ze,bumpMap:Xt,normalMap:qt,displacementMap:h&&Ct,emissiveMap:oe,normalMapObjectSpace:qt&&w.normalMapType===_l,normalMapTangentSpace:qt&&w.normalMapType===fc,metalnessMap:Rt,roughnessMap:A,anisotropy:M,anisotropyMap:ht,clearcoat:B,clearcoatMap:_t,clearcoatNormalMap:Jt,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:tt,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:K,sheenColorMap:It,sheenRoughnessMap:vt,specularMap:Yt,specularColorMap:Bt,specularIntensityMap:se,transmission:wt,transmissionMap:U,thicknessMap:lt,gradientMap:X,opaque:w.transparent===!1&&w.blending===vi&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:pt,alphaHash:ut,combine:w.combine,mapUv:ue&&v(w.map.channel),aoMapUv:z&&v(w.aoMap.channel),lightMapUv:ze&&v(w.lightMap.channel),bumpMapUv:Xt&&v(w.bumpMap.channel),normalMapUv:qt&&v(w.normalMap.channel),displacementMapUv:Ct&&v(w.displacementMap.channel),emissiveMapUv:oe&&v(w.emissiveMap.channel),metalnessMapUv:Rt&&v(w.metalnessMap.channel),roughnessMapUv:A&&v(w.roughnessMap.channel),anisotropyMapUv:ht&&v(w.anisotropyMap.channel),clearcoatMapUv:_t&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(w.sheenRoughnessMap.channel),specularMapUv:Yt&&v(w.specularMap.channel),specularColorMapUv:Bt&&v(w.specularColorMap.channel),specularIntensityMapUv:se&&v(w.specularIntensityMap.channel),transmissionMapUv:U&&v(w.transmissionMap.channel),thicknessMapUv:lt&&v(w.thicknessMap.channel),alphaMapUv:$&&v(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(qt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(ue||$),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:ue&&w.map.isVideoTexture===!0&&Zt.getTransfer(w.map.colorSpace)===ne,decodeVideoTextureEmissive:oe&&w.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(w.emissiveMap.colorSpace)===ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===tn,flipSided:w.side===Re,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)y.push(I),y.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(T(y,w),b(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function T(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function b(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const y=g[w.type];let I;if(y){const G=Qe[y];I=ql.clone(G.uniforms)}else I=w.uniforms;return I}function O(w,y){let I;for(let G=0,k=d.length;G<k;G++){const q=d[G];if(q.cacheKey===y){I=q,++I.usedTimes;break}}return I===void 0&&(I=new ap(n,y,w,s),d.push(I)),I}function C(w){if(--w.usedTimes===0){const y=d.indexOf(w);d[y]=d[d.length-1],d.pop(),w.destroy()}}function D(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:O,releaseProgram:C,releaseShaderCache:D,programs:d,dispose:L}}function hp(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function up(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Fo(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Oo(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,h,f,g,v,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,h,f,g,v,m){const p=a(u,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function l(u,h,f,g,v,m){const p=a(u,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,h){e.length>1&&e.sort(u||up),i.length>1&&i.sort(h||Fo),r.length>1&&r.sort(h||Fo)}function d(){for(let u=t,h=n.length;u<h;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function fp(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Oo,n.set(i,[a])):r>=s.length?(a=new Oo,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function pp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ht};break;case"SpotLight":e={position:new R,direction:new R,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function mp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let gp=0;function _p(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xp(n){const t=new pp,e=mp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const r=new R,s=new re,a=new re;function o(c){let d=0,u=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,b=0,S=0,O=0,C=0,D=0;c.sort(_p);for(let w=0,y=c.length;w<y;w++){const I=c[w],G=I.color,k=I.intensity,q=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*k,u+=G.g*k,h+=G.b*k;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],k);D++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const rt=I.shadow,W=e.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=Q,i.directionalShadowMatrix[f]=I.shadow.matrix,T++}i.directional[f]=Y,f++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(G).multiplyScalar(k),Y.distance=q,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[v]=Y;const rt=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,rt.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[v]=rt.matrix,I.castShadow){const W=e.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=Q,S++}v++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(G).multiplyScalar(k),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const rt=I.shadow,W=e.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,W.shadowCameraNear=rt.camera.near,W.shadowCameraFar=rt.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(k),Y.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==O||L.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+O-C,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=O,L.numLightProbes=D,i.version=gp++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const b=c[p];if(b.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(b.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function zo(n){const t=new xp(n),e=[],i=[];function r(d){c.camera=d,e.length=0,i.length=0}function s(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function vp(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new zo(n),t.set(r,[o])):s>=a.length?(o=new zo(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Mp extends Di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sp extends Di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yp=`void main() {
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
}`;function wp(n,t,e){let i=new ba;const r=new At,s=new At,a=new pe,o=new Mp({depthPacking:gl}),l=new Sp,c={},d=e.maxTextureSize,u={[Un]:Re,[Re]:Un,[tn]:tn},h=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:yp,fragmentShader:Ep}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new de(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let p=this.type;this.render=function(C,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),G=n.state;G.setBlending(In),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=p!==fn&&this.type===fn,q=p===fn&&this.type!==fn;for(let Q=0,Y=C.length;Q<Y;Q++){const rt=C[Q],W=rt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ct=W.getFrameExtents();if(r.multiply(ct),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ct.x),r.x=s.x*ct.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ct.y),r.y=s.y*ct.y,W.mapSize.y=s.y)),W.map===null||k===!0||q===!0){const Tt=this.type!==fn?{minFilter:Fe,magFilter:Fe}:{};W.map!==null&&W.map.dispose(),W.map=new Zn(r.x,r.y,Tt),W.map.texture.name=rt.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const mt=W.getViewportCount();for(let Tt=0;Tt<mt;Tt++){const Gt=W.getViewport(Tt);a.set(s.x*Gt.x,s.y*Gt.y,s.x*Gt.z,s.y*Gt.w),G.viewport(a),W.updateMatrices(rt,Tt),i=W.getFrustum(),S(D,L,W.camera,rt,this.type)}W.isPointLightShadow!==!0&&this.type===fn&&T(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,y,I)};function T(C,D){const L=t.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,L,h,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,L,f,v,null)}function b(C,D,L,w){let y=null;const I=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const G=y.uuid,k=D.uuid;let q=c[G];q===void 0&&(q={},c[G]=q);let Q=q[k];Q===void 0&&(Q=y.clone(),q[k]=Q,D.addEventListener("dispose",O)),y=Q}if(y.visible=D.visible,y.wireframe=D.wireframe,w===fn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:u[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=n.properties.get(y);G.light=L}return y}function S(C,D,L,w,y){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===fn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const k=t.update(C),q=C.material;if(Array.isArray(q)){const Q=k.groups;for(let Y=0,rt=Q.length;Y<rt;Y++){const W=Q[Y],ct=q[W.materialIndex];if(ct&&ct.visible){const mt=b(C,ct,w,y);C.onBeforeShadow(n,C,D,L,k,mt,W),n.renderBufferDirect(L,null,k,mt,C,W),C.onAfterShadow(n,C,D,L,k,mt,W)}}}else if(q.visible){const Q=b(C,q,w,y);C.onBeforeShadow(n,C,D,L,k,Q,null),n.renderBufferDirect(L,null,k,Q,C,null),C.onAfterShadow(n,C,D,L,k,Q,null)}}const G=C.children;for(let k=0,q=G.length;k<q;k++)S(G[k],D,L,w,y)}function O(C){C.target.removeEventListener("dispose",O);for(const L in c){const w=c[L],y=C.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const bp={[Ps]:Ds,[Is]:Ns,[Ls]:Fs,[yi]:Us,[Ds]:Ps,[Ns]:Is,[Fs]:Ls,[Us]:yi};function Tp(n,t){function e(){let U=!1;const lt=new pe;let X=null;const $=new pe(0,0,0,0);return{setMask:function(pt){X!==pt&&!U&&(n.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){U=pt},setClear:function(pt,ut,Ft,fe,ye){ye===!0&&(pt*=fe,ut*=fe,Ft*=fe),lt.set(pt,ut,Ft,fe),$.equals(lt)===!1&&(n.clearColor(pt,ut,Ft,fe),$.copy(lt))},reset:function(){U=!1,X=null,$.set(-1,0,0,0)}}}function i(){let U=!1,lt=!1,X=null,$=null,pt=null;return{setReversed:function(ut){if(lt!==ut){const Ft=t.get("EXT_clip_control");lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const fe=pt;pt=null,this.setClear(fe)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?dt(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(ut){X!==ut&&!U&&(n.depthMask(ut),X=ut)},setFunc:function(ut){if(lt&&(ut=bp[ut]),$!==ut){switch(ut){case Ps:n.depthFunc(n.NEVER);break;case Ds:n.depthFunc(n.ALWAYS);break;case Is:n.depthFunc(n.LESS);break;case yi:n.depthFunc(n.LEQUAL);break;case Ls:n.depthFunc(n.EQUAL);break;case Us:n.depthFunc(n.GEQUAL);break;case Ns:n.depthFunc(n.GREATER);break;case Fs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ut}},setLocked:function(ut){U=ut},setClear:function(ut){pt!==ut&&(lt&&(ut=1-ut),n.clearDepth(ut),pt=ut)},reset:function(){U=!1,X=null,$=null,pt=null,lt=!1}}}function r(){let U=!1,lt=null,X=null,$=null,pt=null,ut=null,Ft=null,fe=null,ye=null;return{setTest:function(ee){U||(ee?dt(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(ee){lt!==ee&&!U&&(n.stencilMask(ee),lt=ee)},setFunc:function(ee,Ve,an){(X!==ee||$!==Ve||pt!==an)&&(n.stencilFunc(ee,Ve,an),X=ee,$=Ve,pt=an)},setOp:function(ee,Ve,an){(ut!==ee||Ft!==Ve||fe!==an)&&(n.stencilOp(ee,Ve,an),ut=ee,Ft=Ve,fe=an)},setLocked:function(ee){U=ee},setClear:function(ee){ye!==ee&&(n.clearStencil(ee),ye=ee)},reset:function(){U=!1,lt=null,X=null,$=null,pt=null,ut=null,Ft=null,fe=null,ye=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,b=null,S=null,O=null,C=null,D=new Ht(0,0,0),L=0,w=!1,y=null,I=null,G=null,k=null,q=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,rt=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=rt>=1):W.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=rt>=2);let ct=null,mt={};const Tt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),te=new pe().fromArray(Tt),J=new pe().fromArray(Gt);function at(U,lt,X,$){const pt=new Uint8Array(4),ut=n.createTexture();n.bindTexture(U,ut),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<X;Ft++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(lt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return ut}const Et={};Et[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(n.DEPTH_TEST),a.setFunc(yi),Xt(!1),qt(Ha),dt(n.CULL_FACE),z(In);function dt(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Dt(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Nt(U,lt){return u[U]!==lt?(n.bindFramebuffer(U,lt),u[U]=lt,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=lt),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Wt(U,lt){let X=f,$=!1;if(U){X=h.get(lt),X===void 0&&(X=[],h.set(lt,X));const pt=U.textures;if(X.length!==pt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Ft=pt.length;ut<Ft;ut++)X[ut]=n.COLOR_ATTACHMENT0+ut;X.length=pt.length,$=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,$=!0);$&&n.drawBuffers(X)}function ue(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Kt={[Xn]:n.FUNC_ADD,[Gc]:n.FUNC_SUBTRACT,[Wc]:n.FUNC_REVERSE_SUBTRACT};Kt[Xc]=n.MIN,Kt[qc]=n.MAX;const me={[Yc]:n.ZERO,[Kc]:n.ONE,[Jc]:n.SRC_COLOR,[Rs]:n.SRC_ALPHA,[el]:n.SRC_ALPHA_SATURATE,[Qc]:n.DST_COLOR,[$c]:n.DST_ALPHA,[Zc]:n.ONE_MINUS_SRC_COLOR,[Cs]:n.ONE_MINUS_SRC_ALPHA,[tl]:n.ONE_MINUS_DST_COLOR,[jc]:n.ONE_MINUS_DST_ALPHA,[nl]:n.CONSTANT_COLOR,[il]:n.ONE_MINUS_CONSTANT_COLOR,[rl]:n.CONSTANT_ALPHA,[sl]:n.ONE_MINUS_CONSTANT_ALPHA};function z(U,lt,X,$,pt,ut,Ft,fe,ye,ee){if(U===In){v===!0&&(Dt(n.BLEND),v=!1);return}if(v===!1&&(dt(n.BLEND),v=!0),U!==Vc){if(U!==m||ee!==w){if((p!==Xn||S!==Xn)&&(n.blendEquation(n.FUNC_ADD),p=Xn,S=Xn),ee)switch(U){case vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Va:n.blendFunc(n.ONE,n.ONE);break;case Ga:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Va:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ga:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,b=null,O=null,C=null,D.set(0,0,0),L=0,m=U,w=ee}return}pt=pt||lt,ut=ut||X,Ft=Ft||$,(lt!==p||pt!==S)&&(n.blendEquationSeparate(Kt[lt],Kt[pt]),p=lt,S=pt),(X!==T||$!==b||ut!==O||Ft!==C)&&(n.blendFuncSeparate(me[X],me[$],me[ut],me[Ft]),T=X,b=$,O=ut,C=Ft),(fe.equals(D)===!1||ye!==L)&&(n.blendColor(fe.r,fe.g,fe.b,ye),D.copy(fe),L=ye),m=U,w=!1}function ze(U,lt){U.side===tn?Dt(n.CULL_FACE):dt(n.CULL_FACE);let X=U.side===Re;lt&&(X=!X),Xt(X),U.blending===vi&&U.transparent===!1?z(In):z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const $=U.stencilWrite;o.setTest($),$&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function qt(U){U!==kc?(dt(n.CULL_FACE),U!==I&&(U===Ha?n.cullFace(n.BACK):U===Hc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),I=U}function Ct(U){U!==G&&(Y&&n.lineWidth(U),G=U)}function oe(U,lt,X){U?(dt(n.POLYGON_OFFSET_FILL),(k!==lt||q!==X)&&(n.polygonOffset(lt,X),k=lt,q=X)):Dt(n.POLYGON_OFFSET_FILL)}function Rt(U){U?dt(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function A(U){U===void 0&&(U=n.TEXTURE0+Q-1),ct!==U&&(n.activeTexture(U),ct=U)}function M(U,lt,X){X===void 0&&(ct===null?X=n.TEXTURE0+Q-1:X=ct);let $=mt[X];$===void 0&&($={type:void 0,texture:void 0},mt[X]=$),($.type!==U||$.texture!==lt)&&(ct!==X&&(n.activeTexture(X),ct=X),n.bindTexture(U,lt||Et[U]),$.type=U,$.texture=lt)}function B(){const U=mt[ct];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(U){te.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function vt(U){J.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),J.copy(U))}function Yt(U,lt){let X=c.get(lt);X===void 0&&(X=new WeakMap,c.set(lt,X));let $=X.get(U);$===void 0&&($=n.getUniformBlockIndex(lt,U.name),X.set(U,$))}function Bt(U,lt){const $=c.get(lt).get(U);l.get(lt)!==$&&(n.uniformBlockBinding(lt,$,U.__bindingPointIndex),l.set(lt,$))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ct=null,mt={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,b=null,S=null,O=null,C=null,D=new Ht(0,0,0),L=0,w=!1,y=null,I=null,G=null,k=null,q=null,te.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:dt,disable:Dt,bindFramebuffer:Nt,drawBuffers:Wt,useProgram:ue,setBlending:z,setMaterial:ze,setFlipSided:Xt,setCullFace:qt,setLineWidth:Ct,setPolygonOffset:oe,setScissorTest:Rt,activeTexture:A,bindTexture:M,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Yt,uniformBlockBinding:Bt,texStorage2D:Jt,texStorage3D:nt,texSubImage2D:K,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:It,viewport:vt,reset:se}}function Bo(n,t,e,i){const r=Ap(i);switch(e){case oc:return n*t;case lc:return n*t;case dc:return n*t*2;case Ma:return n*t/r.components*r.byteLength;case Sa:return n*t/r.components*r.byteLength;case hc:return n*t*2/r.components*r.byteLength;case ya:return n*t*2/r.components*r.byteLength;case cc:return n*t*3/r.components*r.byteLength;case Ze:return n*t*4/r.components*r.byteLength;case Ea:return n*t*4/r.components*r.byteLength;case Ir:case Lr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vs:case Ws:return Math.max(n,16)*Math.max(t,8)/4;case Hs:case Gs:return Math.max(n,8)*Math.max(t,8)/2;case Xs:case qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ys:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ks:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Js:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zs:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $s:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case js:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Qs:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Fr:case ca:case la:return Math.ceil(n/4)*Math.ceil(t/4)*16;case uc:case da:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ha:case ua:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ap(n){switch(n){case gn:case rc:return{byteLength:1,components:1};case Ji:case sc:case Zi:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case Jn:case _a:case nn:return{byteLength:4,components:1};case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Rp(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):Br("canvas")}function v(A,M,B){let Z=1;const tt=Rt(A);if((tt.width>B||tt.height>B)&&(Z=B/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Z*tt.width),wt=Math.floor(Z*tt.height);u===void 0&&(u=g(K,wt));const ht=M?g(K,wt):u;return ht.width=K,ht.height=wt,ht.getContext("2d").drawImage(A,0,0,K,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+wt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,M,B,Z,tt=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=M;if(M===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),M===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),M===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),M===n.RGBA){const wt=tt?Wr:Zt.getTransfer(Z);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=wt===ne?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(A,M){let B;return A?M===null||M===Jn||M===bi?B=n.DEPTH24_STENCIL8:M===nn?B=n.DEPTH32F_STENCIL8:M===Ji&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===bi?B=n.DEPTH_COMPONENT24:M===nn?B=n.DEPTH_COMPONENT32F:M===Ji&&(B=n.DEPTH_COMPONENT16),B}function O(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Fe&&A.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),L(M),M.isVideoTexture&&d.delete(M)}function D(A){const M=A.target;M.removeEventListener("dispose",D),y(M)}function L(A){const M=i.get(A);if(M.__webglInit===void 0)return;const B=A.source,Z=h.get(B);if(Z){const tt=Z[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(A),Object.keys(Z).length===0&&h.delete(B)}i.remove(A)}function w(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const B=A.source,Z=h.get(B);delete Z[M.__cacheKey],a.memory.textures--}function y(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let tt=0;tt<M.__webglFramebuffer[Z].length;tt++)n.deleteFramebuffer(M.__webglFramebuffer[Z][tt]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=A.textures;for(let Z=0,tt=B.length;Z<tt;Z++){const K=i.get(B[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(B[Z])}i.remove(A)}let I=0;function G(){I=0}function k(){const A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function q(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Q(A,M){const B=i.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,A,M);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function Y(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){J(B,A,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function rt(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){J(B,A,M);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function W(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){at(B,A,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const ct={[Bs]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[ks]:n.MIRRORED_REPEAT},mt={[Fe]:n.NEAREST,[pl]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Yr]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},Tt={[xl]:n.NEVER,[wl]:n.ALWAYS,[vl]:n.LESS,[pc]:n.LEQUAL,[Ml]:n.EQUAL,[El]:n.GEQUAL,[Sl]:n.GREATER,[yl]:n.NOTEQUAL};function Gt(A,M){if(M.type===nn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Yr||M.magFilter===ir||M.magFilter===Kn||M.minFilter===en||M.minFilter===Yr||M.minFilter===ir||M.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ct[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ct[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ct[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,mt[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,mt[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fe||M.minFilter!==ir&&M.minFilter!==Kn||M.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function te(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let tt=h.get(Z);tt===void 0&&(tt={},h.set(Z,tt));const K=q(M);if(K!==A.__cacheKey){tt[K]===void 0&&(tt[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[K].usedTimes++;const wt=tt[A.__cacheKey];wt!==void 0&&(tt[A.__cacheKey].usedTimes--,wt.usedTimes===0&&w(M)),A.__cacheKey=K,A.__webglTexture=tt[K].texture}return B}function J(A,M,B){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);const tt=te(A,M),K=M.source;e.bindTexture(Z,A.__webglTexture,n.TEXTURE0+B);const wt=i.get(K);if(K.version!==wt.__version||tt===!0){e.activeTexture(n.TEXTURE0+B);const ht=Zt.getPrimaries(Zt.workingColorSpace),_t=M.colorSpace===Dn?null:Zt.getPrimaries(M.colorSpace),Jt=M.colorSpace===Dn||ht===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let nt=v(M.image,!1,r.maxTextureSize);nt=oe(M,nt);const xt=s.convert(M.format,M.colorSpace),Pt=s.convert(M.type);let It=b(M.internalFormat,xt,Pt,M.colorSpace,M.isVideoTexture);Gt(Z,M);let vt;const Yt=M.mipmaps,Bt=M.isVideoTexture!==!0,se=wt.__version===void 0||tt===!0,U=K.dataReady,lt=O(M,nt);if(M.isDepthTexture)It=S(M.format===Ti,M.type),se&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,It,nt.width,nt.height,0,xt,Pt,null));else if(M.isDataTexture)if(Yt.length>0){Bt&&se&&e.texStorage2D(n.TEXTURE_2D,lt,It,Yt[0].width,Yt[0].height);for(let X=0,$=Yt.length;X<$;X++)vt=Yt[X],Bt?U&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,xt,Pt,vt.data):e.texImage2D(n.TEXTURE_2D,X,It,vt.width,vt.height,0,xt,Pt,vt.data);M.generateMipmaps=!1}else Bt?(se&&e.texStorage2D(n.TEXTURE_2D,lt,It,nt.width,nt.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,xt,Pt,nt.data)):e.texImage2D(n.TEXTURE_2D,0,It,nt.width,nt.height,0,xt,Pt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,It,Yt[0].width,Yt[0].height,nt.depth);for(let X=0,$=Yt.length;X<$;X++)if(vt=Yt[X],M.format!==Ze)if(xt!==null)if(Bt){if(U)if(M.layerUpdates.size>0){const pt=Bo(vt.width,vt.height,M.format,M.type);for(const ut of M.layerUpdates){const Ft=vt.data.subarray(ut*pt/vt.data.BYTES_PER_ELEMENT,(ut+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ut,vt.width,vt.height,1,xt,Ft)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,nt.depth,xt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,It,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,nt.depth,xt,Pt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,It,vt.width,vt.height,nt.depth,0,xt,Pt,vt.data)}else{Bt&&se&&e.texStorage2D(n.TEXTURE_2D,lt,It,Yt[0].width,Yt[0].height);for(let X=0,$=Yt.length;X<$;X++)vt=Yt[X],M.format!==Ze?xt!==null?Bt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,It,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?U&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,xt,Pt,vt.data):e.texImage2D(n.TEXTURE_2D,X,It,vt.width,vt.height,0,xt,Pt,vt.data)}else if(M.isDataArrayTexture)if(Bt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,It,nt.width,nt.height,nt.depth),U)if(M.layerUpdates.size>0){const X=Bo(nt.width,nt.height,M.format,M.type);for(const $ of M.layerUpdates){const pt=nt.data.subarray($*X/nt.data.BYTES_PER_ELEMENT,($+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,nt.width,nt.height,1,xt,Pt,pt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,Pt,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,xt,Pt,nt.data);else if(M.isData3DTexture)Bt?(se&&e.texStorage3D(n.TEXTURE_3D,lt,It,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,Pt,nt.data)):e.texImage3D(n.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,xt,Pt,nt.data);else if(M.isFramebufferTexture){if(se)if(Bt)e.texStorage2D(n.TEXTURE_2D,lt,It,nt.width,nt.height);else{let X=nt.width,$=nt.height;for(let pt=0;pt<lt;pt++)e.texImage2D(n.TEXTURE_2D,pt,It,X,$,0,xt,Pt,null),X>>=1,$>>=1}}else if(Yt.length>0){if(Bt&&se){const X=Rt(Yt[0]);e.texStorage2D(n.TEXTURE_2D,lt,It,X.width,X.height)}for(let X=0,$=Yt.length;X<$;X++)vt=Yt[X],Bt?U&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,xt,Pt,vt):e.texImage2D(n.TEXTURE_2D,X,It,xt,Pt,vt);M.generateMipmaps=!1}else if(Bt){if(se){const X=Rt(nt);e.texStorage2D(n.TEXTURE_2D,lt,It,X.width,X.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Pt,nt)}else e.texImage2D(n.TEXTURE_2D,0,It,xt,Pt,nt);m(M)&&p(Z),wt.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function at(A,M,B){if(M.image.length!==6)return;const Z=te(A,M),tt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const K=i.get(tt);if(tt.version!==K.__version||Z===!0){e.activeTexture(n.TEXTURE0+B);const wt=Zt.getPrimaries(Zt.workingColorSpace),ht=M.colorSpace===Dn?null:Zt.getPrimaries(M.colorSpace),_t=M.colorSpace===Dn||wt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let $=0;$<6;$++)!Jt&&!nt?xt[$]=v(M.image[$],!0,r.maxCubemapSize):xt[$]=nt?M.image[$].image:M.image[$],xt[$]=oe(M,xt[$]);const Pt=xt[0],It=s.convert(M.format,M.colorSpace),vt=s.convert(M.type),Yt=b(M.internalFormat,It,vt,M.colorSpace),Bt=M.isVideoTexture!==!0,se=K.__version===void 0||Z===!0,U=tt.dataReady;let lt=O(M,Pt);Gt(n.TEXTURE_CUBE_MAP,M);let X;if(Jt){Bt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Yt,Pt.width,Pt.height);for(let $=0;$<6;$++){X=xt[$].mipmaps;for(let pt=0;pt<X.length;pt++){const ut=X[pt];M.format!==Ze?It!==null?Bt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt,0,0,ut.width,ut.height,It,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt,Yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt,0,0,ut.width,ut.height,It,vt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt,Yt,ut.width,ut.height,0,It,vt,ut.data)}}}else{if(X=M.mipmaps,Bt&&se){X.length>0&&lt++;const $=Rt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Yt,$.width,$.height)}for(let $=0;$<6;$++)if(nt){Bt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xt[$].width,xt[$].height,It,vt,xt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,xt[$].width,xt[$].height,0,It,vt,xt[$].data);for(let pt=0;pt<X.length;pt++){const Ft=X[pt].image[$].image;Bt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt+1,0,0,Ft.width,Ft.height,It,vt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt+1,Yt,Ft.width,Ft.height,0,It,vt,Ft.data)}}else{Bt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,It,vt,xt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,It,vt,xt[$]);for(let pt=0;pt<X.length;pt++){const ut=X[pt];Bt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt+1,0,0,It,vt,ut.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt+1,Yt,It,vt,ut.image[$])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),K.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Et(A,M,B,Z,tt,K){const wt=s.convert(B.format,B.colorSpace),ht=s.convert(B.type),_t=b(B.internalFormat,wt,ht,B.colorSpace),Jt=i.get(M),nt=i.get(B);if(nt.__renderTarget=M,!Jt.__hasExternalTextures){const xt=Math.max(1,M.width>>K),Pt=Math.max(1,M.height>>K);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,_t,xt,Pt,M.depth,0,wt,ht,null):e.texImage2D(tt,K,_t,xt,Pt,0,wt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),qt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,tt,nt.__webglTexture,0,Xt(M)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,tt,nt.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(A,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,K=S(M.stencilBuffer,tt),wt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Xt(M);qt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,K,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,A)}else{const Z=M.textures;for(let tt=0;tt<Z.length;tt++){const K=Z[tt],wt=s.convert(K.format,K.colorSpace),ht=s.convert(K.type),_t=b(K.internalFormat,wt,ht,K.colorSpace),Jt=Xt(M);B&&qt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,_t,M.width,M.height):qt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt,_t,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,_t,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const tt=Z.__webglTexture,K=Xt(M);if(M.depthTexture.format===Mi)qt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Ti)qt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const M=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Dt(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),dt(M.__webglDepthbuffer[Z],A,!1);else{const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),dt(M.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(A,M,B){const Z=i.get(A);M!==void 0&&Et(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Nt(A)}function ue(A){const M=A.texture,B=i.get(A),Z=i.get(M);A.addEventListener("dispose",D);const tt=A.textures,K=A.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let _t=0;_t<M.mipmaps.length;_t++)B.__webglFramebuffer[ht][_t]=n.createFramebuffer()}else B.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)B.__webglFramebuffer[ht]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ht=0,_t=tt.length;ht<_t;ht++){const Jt=i.get(tt[ht]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&qt(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const _t=tt[ht];B.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Jt=s.convert(_t.format,_t.colorSpace),nt=s.convert(_t.type),xt=b(_t.internalFormat,Jt,nt,_t.colorSpace,A.isXRRenderTarget===!0),Pt=Xt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Et(B.__webglFramebuffer[ht][_t],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else Et(B.__webglFramebuffer[ht],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,_t=tt.length;ht<_t;ht++){const Jt=tt[ht],nt=i.get(Jt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Gt(n.TEXTURE_2D,Jt),Et(B.__webglFramebuffer,A,Jt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(Jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),Gt(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Et(B.__webglFramebuffer[_t],A,M,n.COLOR_ATTACHMENT0,ht,_t);else Et(B.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,ht,0);m(M)&&p(ht),e.unbindTexture()}A.depthBuffer&&Nt(A)}function Kt(A){const M=A.textures;for(let B=0,Z=M.length;B<Z;B++){const tt=M[B];if(m(tt)){const K=T(A),wt=i.get(tt).__webglTexture;e.bindTexture(K,wt),p(K),e.unbindTexture()}}}const me=[],z=[];function ze(A){if(A.samples>0){if(qt(A)===!1){const M=A.textures,B=A.width,Z=A.height;let tt=n.COLOR_BUFFER_BIT;const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(A),ht=M.length>1;if(ht)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Jt=i.get(M[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,tt,n.NEAREST),l===!0&&(me.length=0,z.length=0,me.push(n.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(me.push(K),z.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Jt=i.get(M[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Xt(A){return Math.min(r.maxSamples,A.samples)}function qt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(A){const M=a.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function oe(A,M){const B=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ri&&B!==Dn&&(Zt.getTransfer(B)===ne?(Z!==Ze||tt!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=rt,this.setTextureCube=W,this.rebindTextures=Wt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=qt}function Cp(n,t){function e(i,r=Dn){let s;const a=Zt.getTransfer(r);if(i===gn)return n.UNSIGNED_BYTE;if(i===xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===va)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ac)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rc)return n.BYTE;if(i===sc)return n.SHORT;if(i===Ji)return n.UNSIGNED_SHORT;if(i===_a)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===nn)return n.FLOAT;if(i===Zi)return n.HALF_FLOAT;if(i===oc)return n.ALPHA;if(i===cc)return n.RGB;if(i===Ze)return n.RGBA;if(i===lc)return n.LUMINANCE;if(i===dc)return n.LUMINANCE_ALPHA;if(i===Mi)return n.DEPTH_COMPONENT;if(i===Ti)return n.DEPTH_STENCIL;if(i===Ma)return n.RED;if(i===Sa)return n.RED_INTEGER;if(i===hc)return n.RG;if(i===ya)return n.RG_INTEGER;if(i===Ea)return n.RGBA_INTEGER;if(i===Ir||i===Lr||i===Ur||i===Nr)if(a===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ir)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ir)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hs||i===Vs||i===Gs||i===Ws)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ws)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xs||i===qs||i===Ys)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xs||i===qs)return a===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ys)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ks||i===Js||i===Zs||i===$s||i===js||i===Qs||i===ta||i===ea||i===na||i===ia||i===ra||i===sa||i===aa||i===oa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ks)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Js)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zs)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$s)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===js)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qs)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ta)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ea)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===na)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ia)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ra)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sa)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===aa)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oa)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fr||i===ca||i===la)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Fr)return a===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===la)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===da||i===ha||i===ua)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Pp extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gt extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ip=`
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

}`;class Up{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Te,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new _n({vertexShader:Ip,fragmentShader:Lp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Np extends Ci{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const v=new Up,m=e.getContextAttributes();let p=null,T=null;const b=[],S=[],O=new At;let C=null;const D=new Ke;D.viewport=new pe;const L=new Ke;L.viewport=new pe;const w=[D,L],y=new Pp;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=b[J];return at===void 0&&(at=new ys,b[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=b[J];return at===void 0&&(at=new ys,b[J]=at),at.getGripSpace()},this.getHand=function(J){let at=b[J];return at===void 0&&(at=new ys,b[J]=at),at.getHandSpace()};function k(J){const at=S.indexOf(J.inputSource);if(at===-1)return;const Et=b[at];Et!==void 0&&(Et.update(J.inputSource,J.frame,c||a),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Q);for(let J=0;J<b.length;J++){const at=S[J];at!==null&&(S[J]=null,b[J].disconnect(at))}I=null,G=null,v.reset(),t.setRenderTarget(p),f=null,h=null,u=null,r=null,T=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Et=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Ti:Mi,Et=m.stencil?bi:Jn);const Dt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};u=new XRWebGLBinding(r,e),h=u.createProjectionLayer(Dt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new Zn(h.textureWidth,h.textureHeight,{format:Ze,type:gn,depthTexture:new Rc(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(J){for(let at=0;at<J.removed.length;at++){const Et=J.removed[at],dt=S.indexOf(Et);dt>=0&&(S[dt]=null,b[dt].disconnect(Et))}for(let at=0;at<J.added.length;at++){const Et=J.added[at];let dt=S.indexOf(Et);if(dt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=S.length){S.push(Et),dt=Nt;break}else if(S[Nt]===null){S[Nt]=Et,dt=Nt;break}if(dt===-1)break}const Dt=b[dt];Dt&&Dt.connect(Et)}}const Y=new R,rt=new R;function W(J,at,Et){Y.setFromMatrixPosition(at.matrixWorld),rt.setFromMatrixPosition(Et.matrixWorld);const dt=Y.distanceTo(rt),Dt=at.projectionMatrix.elements,Nt=Et.projectionMatrix.elements,Wt=Dt[14]/(Dt[10]-1),ue=Dt[14]/(Dt[10]+1),Kt=(Dt[9]+1)/Dt[5],me=(Dt[9]-1)/Dt[5],z=(Dt[8]-1)/Dt[0],ze=(Nt[8]+1)/Nt[0],Xt=Wt*z,qt=Wt*ze,Ct=dt/(-z+ze),oe=Ct*-z;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(oe),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Rt=Wt+Ct,A=ue+Ct,M=Xt-oe,B=qt+(dt-oe),Z=Kt*ue/A*Rt,tt=me*ue/A*Rt;J.projectionMatrix.makePerspective(M,B,Z,tt,Rt,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ct(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let at=J.near,Et=J.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),y.near=L.near=D.near=at,y.far=L.far=D.far=Et,(I!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,G=y.far),D.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,y.layers.mask=D.layers.mask|L.layers.mask;const dt=J.parent,Dt=y.cameras;ct(y,dt);for(let Nt=0;Nt<Dt.length;Nt++)ct(Dt[Nt],dt);Dt.length===2?W(y,D,L):y.projectionMatrix.copy(D.projectionMatrix),mt(J,y,dt)};function mt(J,at,Et){Et===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Tt=null;function Gt(J,at){if(d=at.getViewerPose(c||a),g=at,d!==null){const Et=d.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let dt=!1;Et.length!==y.cameras.length&&(y.cameras.length=0,dt=!0);for(let Nt=0;Nt<Et.length;Nt++){const Wt=Et[Nt];let ue=null;if(f!==null)ue=f.getViewport(Wt);else{const me=u.getViewSubImage(h,Wt);ue=me.viewport,Nt===0&&(t.setRenderTargetTextures(T,me.colorTexture,h.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(T))}let Kt=w[Nt];Kt===void 0&&(Kt=new Ke,Kt.layers.enable(Nt),Kt.viewport=new pe,w[Nt]=Kt),Kt.matrix.fromArray(Wt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Wt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ue.x,ue.y,ue.width,ue.height),Nt===0&&(y.matrix.copy(Kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),dt===!0&&y.cameras.push(Kt)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Nt=u.getDepthInformation(Et[0]);Nt&&Nt.isValid&&Nt.texture&&v.init(t,Nt,r.renderState)}}for(let Et=0;Et<b.length;Et++){const dt=S[Et],Dt=b[Et];dt!==null&&Dt!==void 0&&Dt.update(dt,at,c||a)}Tt&&Tt(J,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}const te=new Tc;te.setAnimationLoop(Gt),this.setAnimationLoop=function(J){Tt=J},this.dispose=function(){}}}const Hn=new sn,Fp=new re;function Op(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ec(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),b=T.envMap,S=T.envMapRotation;b&&(m.envMap.value=b,Hn.copy(S),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(Hn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zp(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const S=b.program;i.uniformBlockBinding(T,S)}function c(T,b){let S=r[T.id];S===void 0&&(g(T),S=d(T),r[T.id]=S,T.addEventListener("dispose",m));const O=b.program;i.updateUBOMapping(T,O);const C=t.render.frame;s[T.id]!==C&&(h(T),s[T.id]=C)}function d(T){const b=u();T.__bindingPointIndex=b;const S=n.createBuffer(),O=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const b=r[T.id],S=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,D=S.length;C<D;C++){const L=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,y=L.length;w<y;w++){const I=L[w];if(f(I,C,w,O)===!0){const G=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let Q=0;Q<k.length;Q++){const Y=k[Q],rt=v(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,G+q,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,q),q+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,b,S,O){const C=T.value,D=b+"_"+S;if(O[D]===void 0)return typeof C=="number"||typeof C=="boolean"?O[D]=C:O[D]=C.clone(),!0;{const L=O[D];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return O[D]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(T){const b=T.uniforms;let S=0;const O=16;for(let D=0,L=b.length;D<L;D++){const w=Array.isArray(b[D])?b[D]:[b[D]];for(let y=0,I=w.length;y<I;y++){const G=w[y],k=Array.isArray(G.value)?G.value:[G.value];for(let q=0,Q=k.length;q<Q;q++){const Y=k[q],rt=v(Y),W=S%O,ct=W%rt.boundary,mt=W+ct;S+=ct,mt!==0&&O-mt<rt.storage&&(S+=O-mt),G.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=rt.storage}}}const C=S%O;return C>0&&(S+=O-C),T.__size=S,T.__cache={},this}function v(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Bp{constructor(t={}){const{canvas:e=Tl(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Ln,this.toneMappingExposure=1;const S=this;let O=!1,C=0,D=0,L=null,w=-1,y=null;const I=new pe,G=new pe;let k=null;const q=new Ht(0);let Q=0,Y=e.width,rt=e.height,W=1,ct=null,mt=null;const Tt=new pe(0,0,Y,rt),Gt=new pe(0,0,Y,rt);let te=!1;const J=new ba;let at=!1,Et=!1;const dt=new re,Dt=new re,Nt=new R,Wt=new pe,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function me(){return L===null?W:1}let z=i;function ze(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),z===null){const N="webgl2";if(z=ze(N,E),z===null)throw ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xt,qt,Ct,oe,Rt,A,M,B,Z,tt,K,wt,ht,_t,Jt,nt,xt,Pt,It,vt,Yt,Bt,se,U;function lt(){Xt=new Gu(z),Xt.init(),Bt=new Cp(z,Xt),qt=new Ou(z,Xt,t,Bt),Ct=new Tp(z,Xt),qt.reverseDepthBuffer&&h&&Ct.buffers.depth.setReversed(!0),oe=new qu(z),Rt=new hp,A=new Rp(z,Xt,Ct,Rt,qt,Bt,oe),M=new Bu(S),B=new Vu(S),Z=new Ql(z),se=new Nu(z,Z),tt=new Wu(z,Z,oe,se),K=new Ku(z,tt,Z,oe),It=new Yu(z,qt,A),nt=new zu(Rt),wt=new dp(S,M,B,Xt,qt,se,nt),ht=new Op(S,Rt),_t=new fp,Jt=new vp(Xt),Pt=new Uu(S,M,B,Ct,K,f,l),xt=new wp(S,K,qt),U=new zp(z,oe,qt,Ct),vt=new Fu(z,Xt,oe),Yt=new Xu(z,Xt,oe),oe.programs=wt.programs,S.capabilities=qt,S.extensions=Xt,S.properties=Rt,S.renderLists=_t,S.shadowMap=xt,S.state=Ct,S.info=oe}lt();const X=new Np(S,z);this.xr=X,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(Y,rt,!1))},this.getSize=function(E){return E.set(Y,rt)},this.setSize=function(E,N,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,rt=N,e.width=Math.floor(E*W),e.height=Math.floor(N*W),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Y*W,rt*W).floor()},this.setDrawingBufferSize=function(E,N,H){Y=E,rt=N,W=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,N,H,V){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,N,H,V),Ct.viewport(I.copy(Tt).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Gt)},this.setScissor=function(E,N,H,V){E.isVector4?Gt.set(E.x,E.y,E.z,E.w):Gt.set(E,N,H,V),Ct.scissor(G.copy(Gt).multiplyScalar(W).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){Ct.setScissorTest(te=E)},this.setOpaqueSort=function(E){ct=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(E=!0,N=!0,H=!0){let V=0;if(E){let F=!1;if(L!==null){const st=L.texture.format;F=st===Ea||st===ya||st===Sa}if(F){const st=L.texture.type,ft=st===gn||st===Jn||st===Ji||st===bi||st===xa||st===va,Mt=Pt.getClearColor(),St=Pt.getClearAlpha(),Lt=Mt.r,Ot=Mt.g,yt=Mt.b;ft?(g[0]=Lt,g[1]=Ot,g[2]=yt,g[3]=St,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=Lt,v[1]=Ot,v[2]=yt,v[3]=St,z.clearBufferiv(z.COLOR,0,v))}else V|=z.COLOR_BUFFER_BIT}N&&(V|=z.DEPTH_BUFFER_BIT),H&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),_t.dispose(),Jt.dispose(),Rt.dispose(),M.dispose(),B.dispose(),K.dispose(),se.dispose(),U.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",La),X.removeEventListener("sessionend",Ua),Nn.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=oe.autoReset,N=xt.enabled,H=xt.autoUpdate,V=xt.needsUpdate,F=xt.type;lt(),oe.autoReset=E,xt.enabled=N,xt.autoUpdate=H,xt.needsUpdate=V,xt.type=F}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ft(E){const N=E.target;N.removeEventListener("dispose",Ft),fe(N)}function fe(E){ye(E),Rt.remove(E)}function ye(E){const N=Rt.get(E).programs;N!==void 0&&(N.forEach(function(H){wt.releaseProgram(H)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,V,F,st){N===null&&(N=ue);const ft=F.isMesh&&F.matrixWorld.determinant()<0,Mt=Oc(E,N,H,V,F);Ct.setMaterial(V,ft);let St=H.index,Lt=1;if(V.wireframe===!0){if(St=tt.getWireframeAttribute(H),St===void 0)return;Lt=2}const Ot=H.drawRange,yt=H.attributes.position;let $t=Ot.start*Lt,ae=(Ot.start+Ot.count)*Lt;st!==null&&($t=Math.max($t,st.start*Lt),ae=Math.min(ae,(st.start+st.count)*Lt)),St!==null?($t=Math.max($t,0),ae=Math.min(ae,St.count)):yt!=null&&($t=Math.max($t,0),ae=Math.min(ae,yt.count));const ce=ae-$t;if(ce<0||ce===1/0)return;se.setup(F,V,Mt,H,St);let Pe,jt=vt;if(St!==null&&(Pe=Z.get(St),jt=Yt,jt.setIndex(Pe)),F.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*me()),jt.setMode(z.LINES)):jt.setMode(z.TRIANGLES);else if(F.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Ct.setLineWidth(bt*me()),F.isLineSegments?jt.setMode(z.LINES):F.isLineLoop?jt.setMode(z.LINE_LOOP):jt.setMode(z.LINE_STRIP)}else F.isPoints?jt.setMode(z.POINTS):F.isSprite&&jt.setMode(z.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,on=F._multiDrawCounts,Qt=F._multiDrawCount,Ge=St?Z.get(St).bytesPerElement:1,ti=Rt.get(V).currentProgram.getUniforms();for(let Le=0;Le<Qt;Le++)ti.setValue(z,"_gl_DrawID",Le),jt.render(bt[Le]/Ge,on[Le])}else if(F.isInstancedMesh)jt.renderInstances($t,ce,F.count);else if(H.isInstancedBufferGeometry){const bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,on=Math.min(H.instanceCount,bt);jt.renderInstances($t,ce,on)}else jt.render($t,ce)};function ee(E,N,H){E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,nr(E,N,H),E.side=Un,E.needsUpdate=!0,nr(E,N,H),E.side=tn):nr(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),p=Jt.get(H),p.init(N),b.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const st=F.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const Mt=st[ft];ee(Mt,H,F),V.add(Mt)}else ee(st,H,F),V.add(st)}),b.pop(),p=null,V},this.compileAsync=function(E,N,H=null){const V=this.compile(E,N,H);return new Promise(F=>{function st(){if(V.forEach(function(ft){Rt.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){F(E);return}setTimeout(st,10)}Xt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Ve=null;function an(E){Ve&&Ve(E)}function La(){Nn.stop()}function Ua(){Nn.start()}const Nn=new Tc;Nn.setAnimationLoop(an),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(E){Ve=E,X.setAnimationLoop(E),E===null?Nn.stop():Nn.start()},X.addEventListener("sessionstart",La),X.addEventListener("sessionend",Ua),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,N,L),p=Jt.get(E,b.length),p.init(N),b.push(p),Dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(Dt),Et=this.localClippingEnabled,at=nt.init(this.clippingPlanes,Et),m=_t.get(E,T.length),m.init(),T.push(m),X.enabled===!0&&X.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&qr(st,N,-1/0,S.sortObjects)}qr(E,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ct,mt),Kt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Kt&&Pt.addToRenderList(m,E),this.info.render.frame++,at===!0&&nt.beginShadows();const H=p.state.shadowsArray;xt.render(H,E,N),at===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const st=N.cameras;if(F.length>0)for(let ft=0,Mt=st.length;ft<Mt;ft++){const St=st[ft];Fa(V,F,E,St)}Kt&&Pt.render(E);for(let ft=0,Mt=st.length;ft<Mt;ft++){const St=st[ft];Na(m,E,St,St.viewport)}}else F.length>0&&Fa(V,F,E,N),Kt&&Pt.render(E),Na(m,E,N);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(S,E,N),se.resetDefaultState(),w=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],at===!0&&nt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function qr(E,N,H,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){V&&Wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Dt);const ft=K.update(E),Mt=E.material;Mt.visible&&m.push(E,ft,Mt,H,Wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){const ft=K.update(E),Mt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Wt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Wt.copy(ft.boundingSphere.center)),Wt.applyMatrix4(E.matrixWorld).applyMatrix4(Dt)),Array.isArray(Mt)){const St=ft.groups;for(let Lt=0,Ot=St.length;Lt<Ot;Lt++){const yt=St[Lt],$t=Mt[yt.materialIndex];$t&&$t.visible&&m.push(E,ft,$t,H,Wt.z,yt)}}else Mt.visible&&m.push(E,ft,Mt,H,Wt.z,null)}}const st=E.children;for(let ft=0,Mt=st.length;ft<Mt;ft++)qr(st[ft],N,H,V)}function Na(E,N,H,V){const F=E.opaque,st=E.transmissive,ft=E.transparent;p.setupLightsView(H),at===!0&&nt.setGlobalState(S.clippingPlanes,H),V&&Ct.viewport(I.copy(V)),F.length>0&&er(F,N,H),st.length>0&&er(st,N,H),ft.length>0&&er(ft,N,H),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Fa(E,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Zn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Zi:gn,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const st=p.state.transmissionRenderTarget[V.id],ft=V.viewport||I;st.setSize(ft.z,ft.w);const Mt=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(q),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),Kt&&Pt.render(H);const St=S.toneMapping;S.toneMapping=Ln;const Lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),at===!0&&nt.setGlobalState(S.clippingPlanes,V),er(E,H,V),A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let yt=0,$t=N.length;yt<$t;yt++){const ae=N[yt],ce=ae.object,Pe=ae.geometry,jt=ae.material,bt=ae.group;if(jt.side===tn&&ce.layers.test(V.layers)){const on=jt.side;jt.side=Re,jt.needsUpdate=!0,Oa(ce,H,V,Pe,jt,bt),jt.side=on,jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st))}S.setRenderTarget(Mt),S.setClearColor(q,Q),Lt!==void 0&&(V.viewport=Lt),S.toneMapping=St}function er(E,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=E.length;F<st;F++){const ft=E[F],Mt=ft.object,St=ft.geometry,Lt=V===null?ft.material:V,Ot=ft.group;Mt.layers.test(H.layers)&&Oa(Mt,N,H,St,Lt,Ot)}}function Oa(E,N,H,V,F,st){E.onBeforeRender(S,N,H,V,F,st),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(S,N,H,V,E,st),F.transparent===!0&&F.side===tn&&F.forceSinglePass===!1?(F.side=Re,F.needsUpdate=!0,S.renderBufferDirect(H,N,V,F,E,st),F.side=Un,F.needsUpdate=!0,S.renderBufferDirect(H,N,V,F,E,st),F.side=tn):S.renderBufferDirect(H,N,V,F,E,st),E.onAfterRender(S,N,H,V,F,st)}function nr(E,N,H){N.isScene!==!0&&(N=ue);const V=Rt.get(E),F=p.state.lights,st=p.state.shadowsArray,ft=F.state.version,Mt=wt.getParameters(E,F.state,st,N,H),St=wt.getProgramCacheKey(Mt);let Lt=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",Ft),Lt=new Map,V.programs=Lt);let Ot=Lt.get(St);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===ft)return Ba(E,Mt),Ot}else Mt.uniforms=wt.getUniforms(E),E.onBeforeCompile(Mt,S),Ot=wt.acquireProgram(Mt,St),Lt.set(St,Ot),V.uniforms=Mt.uniforms;const yt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(yt.clippingPlanes=nt.uniform),Ba(E,Mt),V.needsLights=Bc(E),V.lightsStateVersion=ft,V.needsLights&&(yt.ambientLightColor.value=F.state.ambient,yt.lightProbe.value=F.state.probe,yt.directionalLights.value=F.state.directional,yt.directionalLightShadows.value=F.state.directionalShadow,yt.spotLights.value=F.state.spot,yt.spotLightShadows.value=F.state.spotShadow,yt.rectAreaLights.value=F.state.rectArea,yt.ltc_1.value=F.state.rectAreaLTC1,yt.ltc_2.value=F.state.rectAreaLTC2,yt.pointLights.value=F.state.point,yt.pointLightShadows.value=F.state.pointShadow,yt.hemisphereLights.value=F.state.hemi,yt.directionalShadowMap.value=F.state.directionalShadowMap,yt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,yt.spotShadowMap.value=F.state.spotShadowMap,yt.spotLightMatrix.value=F.state.spotLightMatrix,yt.spotLightMap.value=F.state.spotLightMap,yt.pointShadowMap.value=F.state.pointShadowMap,yt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function za(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Or.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ba(E,N){const H=Rt.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Oc(E,N,H,V,F){N.isScene!==!0&&(N=ue),A.resetTextureUnits();const st=N.fog,ft=V.isMeshStandardMaterial?N.environment:null,Mt=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ri,St=(V.isMeshStandardMaterial?B:M).get(V.envMap||ft),Lt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),yt=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let ce=Ln;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ce=S.toneMapping);const Pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,jt=Pe!==void 0?Pe.length:0,bt=Rt.get(V),on=p.state.lights;if(at===!0&&(Et===!0||E!==y)){const Be=E===y&&V.id===w;nt.setState(V,E,Be)}let Qt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==on.state.version||bt.outputColorSpace!==Mt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==St||V.fog===!0&&bt.fog!==st||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Lt||bt.vertexTangents!==Ot||bt.morphTargets!==yt||bt.morphNormals!==$t||bt.morphColors!==ae||bt.toneMapping!==ce||bt.morphTargetsCount!==jt)&&(Qt=!0):(Qt=!0,bt.__version=V.version);let Ge=bt.currentProgram;Qt===!0&&(Ge=nr(V,N,F));let ti=!1,Le=!1,Ni=!1;const le=Ge.getUniforms(),$e=bt.uniforms;if(Ct.useProgram(Ge.program)&&(ti=!0,Le=!0,Ni=!0),V.id!==w&&(w=V.id,Le=!0),ti||y!==E){Ct.buffers.depth.getReversed()?(dt.copy(E.projectionMatrix),Rl(dt),Cl(dt),le.setValue(z,"projectionMatrix",dt)):le.setValue(z,"projectionMatrix",E.projectionMatrix),le.setValue(z,"viewMatrix",E.matrixWorldInverse);const Mn=le.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,Nt.setFromMatrixPosition(E.matrixWorld)),qt.logarithmicDepthBuffer&&le.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Le=!0,Ni=!0)}if(F.isSkinnedMesh){le.setOptional(z,F,"bindMatrix"),le.setOptional(z,F,"bindMatrixInverse");const Be=F.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),le.setValue(z,"boneTexture",Be.boneTexture,A))}F.isBatchedMesh&&(le.setOptional(z,F,"batchingTexture"),le.setValue(z,"batchingTexture",F._matricesTexture,A),le.setOptional(z,F,"batchingIdTexture"),le.setValue(z,"batchingIdTexture",F._indirectTexture,A),le.setOptional(z,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(z,"batchingColorTexture",F._colorsTexture,A));const Fi=H.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&It.update(F,H,Ge),(Le||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,le.setValue(z,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&($e.envMap.value=St,$e.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&($e.envMapIntensity.value=N.environmentIntensity),Le&&(le.setValue(z,"toneMappingExposure",S.toneMappingExposure),bt.needsLights&&zc($e,Ni),st&&V.fog===!0&&ht.refreshFogUniforms($e,st),ht.refreshMaterialUniforms($e,V,W,rt,p.state.transmissionRenderTarget[E.id]),Or.upload(z,za(bt),$e,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Or.upload(z,za(bt),$e,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(z,"center",F.center),le.setValue(z,"modelViewMatrix",F.modelViewMatrix),le.setValue(z,"normalMatrix",F.normalMatrix),le.setValue(z,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Be=V.uniformsGroups;for(let Mn=0,Sn=Be.length;Mn<Sn;Mn++){const ka=Be[Mn];U.update(ka,Ge),U.bind(ka,Ge)}}return Ge}function zc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Bc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,N,H){Rt.get(E.texture).__webglTexture=N,Rt.get(E.depthTexture).__webglTexture=H;const V=Rt.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const H=Rt.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,H=0){L=E,C=N,D=H;let V=!0,F=null,st=!1,ft=!1;if(E){const St=Rt.get(E);if(St.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(z.FRAMEBUFFER,null),V=!1;else if(St.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(St.__hasExternalTextures)A.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const yt=E.depthTexture;if(St.__boundDepthTexture!==yt){if(yt!==null&&Rt.has(yt)&&(E.width!==yt.image.width||E.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ft=!0);const Ot=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?F=Ot[N][H]:F=Ot[N],st=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?F=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?F=Ot[H]:F=Ot,I.copy(E.viewport),G.copy(E.scissor),k=E.scissorTest}else I.copy(Tt).multiplyScalar(W).floor(),G.copy(Gt).multiplyScalar(W).floor(),k=te;if(Ct.bindFramebuffer(z.FRAMEBUFFER,F)&&V&&Ct.drawBuffers(E,F),Ct.viewport(I),Ct.scissor(G),Ct.setScissorTest(k),st){const St=Rt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,H)}else if(ft){const St=Rt.get(E.texture),Lt=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Lt)}w=-1},this.readRenderTargetPixels=function(E,N,H,V,F,st,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Ct.bindFramebuffer(z.FRAMEBUFFER,Mt);try{const St=E.texture,Lt=St.format,Ot=St.type;if(!qt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&H>=0&&H<=E.height-F&&z.readPixels(N,H,V,F,Bt.convert(Lt),Bt.convert(Ot),st)}finally{const St=L!==null?Rt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(z.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,V,F,st,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const St=E.texture,Lt=St.format,Ot=St.type;if(!qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-V&&H>=0&&H<=E.height-F){Ct.bindFramebuffer(z.FRAMEBUFFER,Mt);const yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,yt),z.bufferData(z.PIXEL_PACK_BUFFER,st.byteLength,z.STREAM_READ),z.readPixels(N,H,V,F,Bt.convert(Lt),Bt.convert(Ot),0);const $t=L!==null?Rt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(z.FRAMEBUFFER,$t);const ae=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Al(z,ae,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,st),z.deleteBuffer(yt),z.deleteSync(ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,H=0){E.isTexture!==!0&&(Xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(E.image.width*V),st=Math.floor(E.image.height*V),ft=N!==null?N.x:0,Mt=N!==null?N.y:0;A.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,ft,Mt,F,st),Ct.unbindTexture()},this.copyTextureToTexture=function(E,N,H=null,V=null,F=0){E.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let st,ft,Mt,St,Lt,Ot,yt,$t,ae;const ce=E.isCompressedTexture?E.mipmaps[F]:E.image;H!==null?(st=H.max.x-H.min.x,ft=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Lt=H.min.y,Ot=H.isBox3?H.min.z:0):(st=ce.width,ft=ce.height,Mt=ce.depth||1,St=0,Lt=0,Ot=0),V!==null?(yt=V.x,$t=V.y,ae=V.z):(yt=0,$t=0,ae=0);const Pe=Bt.convert(N.format),jt=Bt.convert(N.type);let bt;N.isData3DTexture?(A.setTexture3D(N,0),bt=z.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),bt=z.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),bt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);const on=z.getParameter(z.UNPACK_ROW_LENGTH),Qt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ge=z.getParameter(z.UNPACK_SKIP_PIXELS),ti=z.getParameter(z.UNPACK_SKIP_ROWS),Le=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ce.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,St),z.pixelStorei(z.UNPACK_SKIP_ROWS,Lt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ot);const Ni=E.isDataArrayTexture||E.isData3DTexture,le=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const $e=Rt.get(E),Fi=Rt.get(N),Be=Rt.get($e.__renderTarget),Mn=Rt.get(Fi.__renderTarget);Ct.bindFramebuffer(z.READ_FRAMEBUFFER,Be.__webglFramebuffer),Ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Sn=0;Sn<Mt;Sn++)Ni&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.get(E).__webglTexture,F,Ot+Sn),E.isDepthTexture?(le&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.get(N).__webglTexture,F,ae+Sn),z.blitFramebuffer(St,Lt,st,ft,yt,$t,st,ft,z.DEPTH_BUFFER_BIT,z.NEAREST)):le?z.copyTexSubImage3D(bt,F,yt,$t,ae+Sn,St,Lt,st,ft):z.copyTexSubImage2D(bt,F,yt,$t,ae+Sn,St,Lt,st,ft);Ct.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else le?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(bt,F,yt,$t,ae,st,ft,Mt,Pe,jt,ce.data):N.isCompressedArrayTexture?z.compressedTexSubImage3D(bt,F,yt,$t,ae,st,ft,Mt,Pe,ce.data):z.texSubImage3D(bt,F,yt,$t,ae,st,ft,Mt,Pe,jt,ce):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,F,yt,$t,st,ft,Pe,jt,ce.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,F,yt,$t,ce.width,ce.height,Pe,ce.data):z.texSubImage2D(z.TEXTURE_2D,F,yt,$t,st,ft,Pe,jt,ce);z.pixelStorei(z.UNPACK_ROW_LENGTH,on),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Qt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,ti),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Le),F===0&&N.generateMipmaps&&z.generateMipmap(bt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H=null,V=null,F=0){return E.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0),Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,H,V,F)},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){C=0,D=0,L=null,Ct.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class Aa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new Aa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hp extends Te{constructor(t=null,e=1,i=1,r,s,a,o,l,c=Fe,d=Fe,u,h){super(null,a,o,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko extends Oe{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const mi=new re,Ho=new re,wr=[],Vo=new jn,Vp=new re,Vi=new de,Gi=new Pi;class Gp extends de{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Vp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,mi),Vo.copy(t.boundingBox).applyMatrix4(mi),this.boundingBox.union(Vo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,mi),Gi.copy(t.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Gi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(i),t.ray.intersectsSphere(Gi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mi),Ho.multiplyMatrices(i,mi),Vi.matrixWorld=Ho,Vi.raycast(t,wr);for(let a=0,o=wr.length;a<o;a++){const l=wr[a];l.instanceId=s,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hp(new Float32Array(r*this.count),r,this.count,Ma,nn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Lc extends Di{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Go=new re,ma=new xc,br=new Pi,Tr=new R;class Wp extends xe{constructor(t=new Ce,e=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),br.radius+=s,t.ray.intersectsSphere(br)===!1)return;Go.copy(r).invert(),ma.copy(t.ray).applyMatrix4(Go);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,v=f;g<v;g++){const m=c.getX(g);Tr.fromBufferAttribute(u,m),Wo(Tr,m,l,r,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=h,v=f;g<v;g++)Tr.fromBufferAttribute(u,g),Wo(Tr,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wo(n,t,e,i,r,s,a){const o=ma.distanceSqToPoint(n);if(o<e){const l=new R;ma.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Xp extends Te{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],h=i[r+1]-d,f=(a-d)/h;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new At:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new R,r=[],s=[],a=[],o=new R,l=new re;for(let f=0;f<=t;f++){const g=f/t;r[f]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(be(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(be(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uc extends vn{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new At){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qp extends Uc{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ra(){let n=0,t=0,e=0,i=0;function r(s,a,o,l){n=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,d,u){let h=(a-s)/c-(o-s)/(c+d)+(o-a)/d,f=(o-a)/d-(l-a)/(d+u)+(l-o)/u;h*=d,f*=d,r(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const Ar=new R,Es=new Ra,ws=new Ra,bs=new Ra;class Ui extends vn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new R){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=r[(o-1)%s]:(Ar.subVectors(r[0],r[1]).add(r[0]),c=Ar);const u=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(Ar.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Es.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,g,v,m),ws.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,g,v,m),bs.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Es.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),ws.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),bs.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return i.set(Es.calc(l),ws.calc(l),bs.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xo(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,l=n*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*n+e}function Yp(n,t){const e=1-n;return e*e*t}function Kp(n,t){return 2*(1-n)*n*t}function Jp(n,t){return n*n*t}function Yi(n,t,e,i){return Yp(n,t)+Kp(n,e)+Jp(n,i)}function Zp(n,t){const e=1-n;return e*e*e*t}function $p(n,t){const e=1-n;return 3*e*e*n*t}function jp(n,t){return 3*(1-n)*n*n*t}function Qp(n,t){return n*n*n*t}function Ki(n,t,e,i,r){return Zp(n,t)+$p(n,e)+jp(n,i)+Qp(n,r)}class tm extends vn{constructor(t=new At,e=new At,i=new At,r=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new At){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ki(t,r.x,s.x,a.x,o.x),Ki(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class em extends vn{constructor(t=new R,e=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new R){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ki(t,r.x,s.x,a.x,o.x),Ki(t,r.y,s.y,a.y,o.y),Ki(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nm extends vn{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class im extends vn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rm extends vn{constructor(t=new At,e=new At,i=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new At){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Yi(t,r.x,s.x,a.x),Yi(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nc extends vn{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Yi(t,r.x,s.x,a.x),Yi(t,r.y,s.y,a.y),Yi(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sm extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],d=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Xo(o,l.x,c.x,d.x,u.x),Xo(o,l.y,c.y,d.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new At().fromArray(r))}return this}}var am=Object.freeze({__proto__:null,ArcCurve:qp,CatmullRomCurve3:Ui,CubicBezierCurve:tm,CubicBezierCurve3:em,EllipseCurve:Uc,LineCurve:nm,LineCurve3:im,QuadraticBezierCurve:rm,QuadraticBezierCurve3:Nc,SplineCurve:sm});class it extends Ce{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],f=[];let g=0;const v=[],m=i/2;let p=0;T(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function T(){const S=new R,O=new R;let C=0;const D=(e-t)/i;for(let L=0;L<=s;L++){const w=[],y=L/s,I=y*(e-t)+t;for(let G=0;G<=r;G++){const k=G/r,q=k*l+o,Q=Math.sin(q),Y=Math.cos(q);O.x=I*Q,O.y=-y*i+m,O.z=I*Y,u.push(O.x,O.y,O.z),S.set(Q,D,Y).normalize(),h.push(S.x,S.y,S.z),f.push(k,1-y),w.push(g++)}v.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){const y=v[w][L],I=v[w+1][L],G=v[w+1][L+1],k=v[w][L+1];(t>0||w!==0)&&(d.push(y,I,k),C+=3),(e>0||w!==s-1)&&(d.push(I,G,k),C+=3)}c.addGroup(p,C,0),p+=C}function b(S){const O=g,C=new At,D=new R;let L=0;const w=S===!0?t:e,y=S===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,m*y,0),h.push(0,y,0),f.push(.5,.5),g++;const I=g;for(let G=0;G<=r;G++){const q=G/r*l+o,Q=Math.cos(q),Y=Math.sin(q);D.x=w*Y,D.y=m*y,D.z=w*Q,u.push(D.x,D.y,D.z),h.push(0,y,0),C.x=Q*.5+.5,C.y=Y*.5*y+.5,f.push(C.x,C.y),g++}for(let G=0;G<r;G++){const k=O+G,q=I+G;S===!0?d.push(q,q+1,k):d.push(q+1,q,k),L+=3}c.addGroup(p,L,S===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qi extends it{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tr extends Ce{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(s.slice(),3)),this.setAttribute("uv",new he(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const b=new R,S=new R,O=new R;for(let C=0;C<e.length;C+=3)f(e[C+0],b),f(e[C+1],S),f(e[C+2],O),l(b,S,O,T)}function l(T,b,S,O){const C=O+1,D=[];for(let L=0;L<=C;L++){D[L]=[];const w=T.clone().lerp(S,L/C),y=b.clone().lerp(S,L/C),I=C-L;for(let G=0;G<=I;G++)G===0&&L===C?D[L][G]=w:D[L][G]=w.clone().lerp(y,G/I)}for(let L=0;L<C;L++)for(let w=0;w<2*(C-L)-1;w++){const y=Math.floor(w/2);w%2===0?(h(D[L][y+1]),h(D[L+1][y]),h(D[L][y])):(h(D[L][y+1]),h(D[L+1][y+1]),h(D[L+1][y]))}}function c(T){const b=new R;for(let S=0;S<s.length;S+=3)b.x=s[S+0],b.y=s[S+1],b.z=s[S+2],b.normalize().multiplyScalar(T),s[S+0]=b.x,s[S+1]=b.y,s[S+2]=b.z}function d(){const T=new R;for(let b=0;b<s.length;b+=3){T.x=s[b+0],T.y=s[b+1],T.z=s[b+2];const S=m(T)/2/Math.PI+.5,O=p(T)/Math.PI+.5;a.push(S,1-O)}g(),u()}function u(){for(let T=0;T<a.length;T+=6){const b=a[T+0],S=a[T+2],O=a[T+4],C=Math.max(b,S,O),D=Math.min(b,S,O);C>.9&&D<.1&&(b<.2&&(a[T+0]+=1),S<.2&&(a[T+2]+=1),O<.2&&(a[T+4]+=1))}}function h(T){s.push(T.x,T.y,T.z)}function f(T,b){const S=T*3;b.x=t[S+0],b.y=t[S+1],b.z=t[S+2]}function g(){const T=new R,b=new R,S=new R,O=new R,C=new At,D=new At,L=new At;for(let w=0,y=0;w<s.length;w+=9,y+=6){T.set(s[w+0],s[w+1],s[w+2]),b.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),C.set(a[y+0],a[y+1]),D.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),O.copy(T).add(b).add(S).divideScalar(3);const I=m(O);v(C,y+0,T,I),v(D,y+2,b,I),v(L,y+4,S,I)}}function v(T,b,S,O){O<0&&T.x===1&&(a[b]=T.x-1),S.x===0&&S.z===0&&(a[b]=O/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.vertices,t.indices,t.radius,t.details)}}class He extends tr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new He(t.radius,t.detail)}}class Ca extends tr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ca(t.radius,t.detail)}}class Pa extends tr{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pa(t.radius,t.detail)}}class kr extends Ce{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let u=t;const h=(e-t)/r,f=new R,g=new At;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const p=s+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,d.push(g.x,g.y)}u+=h}for(let v=0;v<r;v++){const m=v*(i+1);for(let p=0;p<i;p++){const T=p+m,b=T,S=T+i+1,O=T+i+2,C=T+1;o.push(b,S,C),o.push(S,O,C)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _e extends Ce{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new R,h=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const T=[],b=p/i;let S=0;p===0&&a===0?S=.5/e:p===i&&l===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const C=O/e;u.x=-t*Math.cos(r+C*s)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(r+C*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(C+S,1-b),T.push(c++)}d.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){const b=d[p][T+1],S=d[p][T],O=d[p+1][T],C=d[p+1][T+1];(p!==0||a>0)&&f.push(b,S,C),(p!==i-1||l<Math.PI)&&f.push(S,O,C)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ie extends Ce{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],d=new R,u=new R,h=new R;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const v=g/r*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const v=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,T=(r+1)*f+g;a.push(v,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qn extends Ce{constructor(t=new Nc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new At;let d=new R;const u=[],h=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function v(){for(let b=0;b<e;b++)m(b);m(s===!1?e:0),T(),p()}function m(b){d=t.getPointAt(b/e,d);const S=a.normals[b],O=a.binormals[b];for(let C=0;C<=r;C++){const D=C/r*Math.PI*2,L=Math.sin(D),w=-Math.cos(D);l.x=w*S.x+L*O.x,l.y=w*S.y+L*O.y,l.z=w*S.z+L*O.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=d.x+i*l.x,o.y=d.y+i*l.y,o.z=d.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=e;b++)for(let S=1;S<=r;S++){const O=(r+1)*(b-1)+(S-1),C=(r+1)*b+(S-1),D=(r+1)*b+S,L=(r+1)*(b-1)+S;g.push(O,C,L),g.push(C,D,L)}}function T(){for(let b=0;b<=e;b++)for(let S=0;S<=r;S++)c.x=b/e,c.y=S/r,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qn(new am[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ut extends Di{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Da extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class om extends Da{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ts=new re,qo=new R,Yo=new R;class cm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;qo.setFromMatrixPosition(t.matrixWorld),e.position.copy(qo),Yo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yo),e.updateMatrixWorld(),Ts.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ts),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ts)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lm extends cm{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dm extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new lm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hm extends Da{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class A0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ko(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ko();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ko(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);function Rr(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Ia(n,t){const e=Math.floor(n),i=Math.floor(t),r=n-e,s=t-i,a=r*r*(3-2*r),o=s*s*(3-2*s),l=Rr(e,i),c=Rr(e+1,i),d=Rr(e,i+1),u=Rr(e+1,i+1);return l+(c-l)*a+(d-l)*o+(l-c-d+u)*a*o}function Jo(n,t,e=4){let i=0,r=.5,s=1;for(let a=0;a<e;a++)i+=Ia(n*s,t*s)*r,s*=2,r*=.5;return i}function Hr(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}function um(n,t,e){return n+(t-n)*e}const Vr=640,Zo=180,fm=[[180,-90,46,8],[-210,150,30,5.5],[95,230,18,3.2],[-70,-250,36,6],[250,80,14,2.4],[-160,-40,12,2]];function pm(n,t,e,i,r,s){const a=n-e,o=t-i,l=Math.sqrt(a*a+o*o);if(l>r)return 0;const c=l/r,d=-s*(1-c*c),u=s*.28*Math.exp(-((c-.86)*(c-.86))/.018);return d+u}const mm=[[0,0,48,100],[52,24,18,36],[22,82,14,28],[80,-44,40,60],[112,-83,18,30],[-32,-98,16,26],[-88,-188,24,42],[-68,-16,16,28],[22,-112,12,20],[-6,-108,18,32],[36,72,16,32],[-24,44,16,32],[-32,-148,12,22],[-64,-90,10,18],[-50,-100,16,28],[38,-126,12,20],[-60,-148,8,14],[-64,-118,8,14],[-18,-88,10,18],[68,-10,12,20],[-22,-88,8,14],[-48,68,16,32],[78,56,16,32],[-13,-134,16,28],[8,-142,12,20],[135,-40,20,34],[68,6,12,20],[-28,-138,8,14],[-36,-74,14,24],[2,-22,8,14],[-50,-72,10,16],[10,-124,12,20],[20,8,12,20],[-16,136,28,48],[158,-62,22,36],[158,-28,10,16],[-96,-16,16,26],[-78,-172,12,20],[66,-74,14,22],[18,-152,12,18]];function et(n,t){let e=0;e+=(Jo(n*.0038,t*.0038,5)-.45)*16,e+=(Jo(n*.018,t*.018,3)-.5)*2.8,e+=(Ia(n*.07,t*.07)-.5)*.45;for(const[i,r,s,a]of fm)e+=pm(n,t,i,r,s,a);for(const[i,r,s,a]of mm){const o=Hr(a,s,Math.hypot(n-i,t-r));e=um(e,.35+e*.12,o)}return e}function gm(n,t,e,i){const r=new Ht(9059108),s=new Ht(12085818),a=new Ht(12880469),o=new Ht(4858904),l=Hr(-4,8,e),c=r.clone().lerp(s,l).lerp(a,Hr(6,14,e)*.35);i>.45&&c.lerp(o,Math.min(.55,(i-.45)*1.4));const d=Ia(n*.11,t*.11);c.offsetHSL(0,(d-.5)*.08,(d-.5)*.06);const u=_m(n,t);return u>0&&c.lerp(new Ht(5911332),u*.85),c}function _m(n,t){const e=[{ax:0,az:18,bx:0,bz:-124},{ax:0,az:-40,bx:84,bz:-42},{ax:0,az:-40,bx:-68,bz:-16},{ax:0,az:-90,bx:-55,bz:-150},{ax:18,az:-70,bx:52,bz:-88},{ax:12,az:8,bx:50,bz:22},{ax:16,az:28,bx:22,bz:78},{ax:-58,az:-158,bx:-90,bz:-190},{ax:-14,az:-104,bx:-32,bz:-98},{ax:84,az:-42,bx:112,bz:-83},{ax:0,az:-108,bx:22,bz:-112},{ax:22,az:-112,bx:48,bz:-86},{ax:-6,az:-116,bx:-18,bz:-138},{ax:0,az:8,bx:-15,bz:-8},{ax:16,az:28,bx:36,bz:72},{ax:0,az:18,bx:-24,bz:44},{ax:-58,az:-158,bx:-64,bz:-90},{ax:-64,az:-90,bx:-68,bz:-16},{ax:-18,az:-138,bx:-32,bz:-148},{ax:-32,az:-98,bx:-46,bz:-100},{ax:22,az:-112,bx:38,bz:-126},{ax:-58,az:-158,bx:-60,bz:-148},{ax:-64,az:-118,bx:-18,bz:-88},{ax:84,az:-42,bx:68,bz:-10},{ax:-6,az:-108,bx:-18,bz:-88},{ax:0,az:18,bx:-48,bz:68},{ax:16,az:28,bx:78,bz:56},{ax:-6,az:-116,bx:-13,bz:-134},{ax:38,az:-126,bx:8,bz:-142},{ax:-13,az:-134,bx:8,bz:-142},{ax:112,az:-83,bx:135,bz:-40},{ax:68,az:-10,bx:68,bz:6},{ax:-13,az:-134,bx:-28,bz:-138},{ax:-46,az:-108,bx:-20,bz:-132},{ax:-6,az:-108,bx:-6,bz:-132},{ax:-6,az:-96,bx:2,bz:-22},{ax:-32,az:-98,bx:-36,bz:-74},{ax:-40,az:-76,bx:-32,bz:-98},{ax:-40,az:-76,bx:-50,bz:-72},{ax:-6,az:-132,bx:10,bz:-124},{ax:10,az:-124,bx:8,bz:-142},{ax:0,az:8,bx:20,bz:8},{ax:22,az:82,bx:-16,bz:136},{ax:0,az:32,bx:-16,bz:136},{ax:135,az:-40,bx:158,bz:-62},{ax:-68,az:-16,bx:-96,bz:-16},{ax:-58,az:-158,bx:-78,bz:-172},{ax:48,az:-86,bx:66,bz:-74},{ax:8,az:-142,bx:18,bz:-152}];let i=0;for(const r of e){const s=r.bx-r.ax,a=r.bz-r.az,o=s*s+a*a;let l=((n-r.ax)*s+(t-r.az)*a)/o;l=Math.min(1,Math.max(0,l));const c=r.ax+s*l,d=r.az+a*l,u=Math.hypot(n-c,t-d);i=Math.max(i,Hr(5.4,1.6,u))}return i}function xm(){const n=new Ii(Vr,Vr,Zo,Zo);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){const o=t.getX(a),l=t.getZ(a),c=et(o,l);t.setY(a,c)}n.computeVertexNormals();const i=n.attributes.normal;for(let a=0;a<t.count;a++){const o=1-Math.abs(i.getY(a)),l=gm(t.getX(a),t.getZ(a),t.getY(a),o);e[a*3]=l.r,e[a*3+1]=l.g,e[a*3+2]=l.b}n.setAttribute("color",new Oe(e,3));const r=new Ut({vertexColors:!0,roughness:.94,metalness:.02,flatShading:!1}),s=new de(n,r);return s.receiveShadow=!0,s.name="terrain",s}function vm(){const n=new gt;n.name="rocks";const t=[new He(1,0),new Ca(1,0),new Pa(1,0)],e=[new Ut({color:8011048,roughness:.95,flatShading:!0}),new Ut({color:6040604,roughness:.92,flatShading:!0}),new Ut({color:9260592,roughness:.9,flatShading:!0})],i=new xe,r=[220,160,90];for(let s=0;s<3;s++){const a=new Gp(t[s],e[s],r[s]);a.castShadow=!0,a.receiveShadow=!0;let o=0,l=0;for(;o<r[s]&&l<r[s]*8;){l++;const c=(Rn(o,s,1)-.5)*Vr*.92,d=(Rn(o,s,2)-.5)*Vr*.92;if(Math.hypot(c,d)<42||Math.hypot(c-52,d-24)<22||Math.hypot(c-22,d-82)<18||Math.hypot(c-80,d+44)<44||Math.hypot(c-112,d+83)<22||Math.hypot(c+32,d+98)<20||Math.hypot(c+88,d+188)<30||Math.hypot(c-22,d+112)<16||Math.hypot(c+68,d+16)<22||Math.hypot(c-36,d-72)<20||Math.hypot(c+24,d-44)<20||Math.hypot(c+32,d+148)<16||Math.hypot(c+64,d+90)<14||Math.hypot(c+50,d+100)<22||Math.hypot(c-38,d+126)<16||Math.hypot(c+18,d+88)<14||Math.hypot(c-68,d+10)<16||Math.hypot(c+60,d+148)<12||Math.hypot(c+64,d+118)<12||Math.hypot(c+48,d-68)<20||Math.hypot(c-78,d-56)<20||Math.hypot(c+13,d+134)<20||Math.hypot(c-8,d+142)<16||Math.hypot(c-135,d+40)<24||Math.hypot(c-68,d-6)<16||Math.hypot(c+28,d+138)<12||Math.hypot(c+36,d+74)<18||Math.hypot(c-2,d+22)<12||Math.hypot(c+50,d+72)<14||Math.hypot(c-10,d+124)<16||Math.hypot(c-20,d-8)<16||Math.hypot(c+16,d-136)<32||Math.hypot(c-158,d+62)<24||Math.hypot(c+96,d+16)<20||Math.hypot(c+78,d+172)<16||Math.hypot(c-66,d+74)<16||Math.hypot(c-18,d+152)<14)continue;const u=et(c,d),h=.35+Rn(o,s,3)*(s===2?2.8:1.4);i.position.set(c,u+h*.25,d),i.rotation.set(Rn(o,s,4)*6,Rn(o,s,5)*6,Rn(o,s,6)*6),i.scale.set(h,h*(.6+Rn(o,s,7)*.7),h*(.7+Rn(o,s,8)*.5)),i.updateMatrix(),a.setMatrixAt(o,i.matrix),o++}a.count=o,n.add(a)}return n}function Rn(n,t,e){const i=Math.sin(n*12.9898+t*78.233+e*45.164)*43758.5453;return i-Math.floor(i)}const Mm=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Sm=`
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
`;function ym(n){const t=new _e(900,32,20),e=new _n({vertexShader:Mm,fragmentShader:Sm,uniforms:{uSunDir:{value:n.clone().normalize()}},side:Re,depthWrite:!1}),i=new de(t,e);return i.name="sky",i}function Em(n){const t=new gt,e=n.clone().normalize(),i=new dm(16769456,2.15);i.position.copy(e.clone().multiplyScalar(180)),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.near=10,i.shadow.camera.far=420,i.shadow.camera.left=-130,i.shadow.camera.right=130,i.shadow.camera.top=130,i.shadow.camera.bottom=-130,i.shadow.bias=-8e-4,t.add(i);const r=new om(14727304,6959128,.55);t.add(r);const s=new hm(12611648,.16);t.add(s);const a=new de(new _e(7,16,16),new wa({color:16773572}));return a.position.copy(e.clone().multiplyScalar(420)),t.add(a),t.name="sun",t}function wm(){const n=new gt;n.name="mountains";const t=new Ut({color:7024156,roughness:1,flatShading:!0}),e=[[0,-300,18,70],[80,-310,14,52],[-90,-305,16,60],[220,-280,12,40],[-240,-270,13,48],[300,-40,15,55],[305,80,11,38],[-310,20,16,62],[-300,140,12,44],[40,310,17,58],[-70,300,13,46],[160,290,10,36]];for(const[i,r,s,a]of e){const o=new Qi(s,a,6),l=new de(o,t),c=et(i,r)+a*.35;l.position.set(i,c,r),l.rotation.y=(i+r)*.01,n.add(l)}return n}function bm(){const t=new Float32Array(2100);for(let s=0;s<700;s++)t[s*3]=(Math.random()-.5)*220,t[s*3+1]=1+Math.random()*18,t[s*3+2]=(Math.random()-.5)*220;const e=new Ce;e.setAttribute("position",new Oe(t,3));const i=new Lc({color:13934698,size:.18,transparent:!0,opacity:.35,depthWrite:!1}),r=new Wp(e,i);return r.name="dust",r}function Tm(n){n.fog=new Aa(12880472,.00155),n.background=new Ht(12880472)}const _={steel:new Ut({color:13225425,metalness:.88,roughness:.28}),steelDark:new Ut({color:9146518,metalness:.82,roughness:.38}),tiles:new Ut({color:1710620,metalness:.15,roughness:.72}),soot:new Ut({color:2763308,metalness:.4,roughness:.55}),pad:new Ut({color:7168600,metalness:.08,roughness:.88}),padRing:new Ut({color:4866876,metalness:.1,roughness:.8}),solar:new Ut({color:727603,metalness:.55,roughness:.22}),solarFrame:new Ut({color:10133670,metalness:.7,roughness:.35}),tankCh4:new Ut({color:12868132,metalness:.35,roughness:.45}),tankO2:new Ut({color:14212579,metalness:.4,roughness:.4}),hab:new Ut({color:13616824,metalness:.15,roughness:.62}),habDark:new Ut({color:6972508,metalness:.2,roughness:.55}),glass:new Ut({color:8963232,metalness:.1,roughness:.18,transparent:!0,opacity:.42,depthWrite:!1}),plant:new Ut({color:4160056,roughness:.85}),rover:new Ut({color:12106944,metalness:.55,roughness:.4}),roverDark:new Ut({color:3356218,metalness:.4,roughness:.5}),crate:new Ut({color:9080724,metalness:.45,roughness:.5}),ice:new Ut({color:14083823,metalness:.05,roughness:.35}),rust:new Ut({color:8011560,roughness:.9}),glowWarm:new Ut({color:16761994,emissive:16751178,emissiveIntensity:.85,roughness:.4}),glowPad:new Ut({color:16765056,emissive:16756800,emissiveIntensity:.7}),concrete:new Ut({color:9076852,roughness:.92}),lattice:new Ut({color:10133668,metalness:.7,roughness:.4}),graded:new Ut({color:6968134,roughness:.94,metalness:.04}),pipe:new Ut({color:8030868,metalness:.55,roughness:.4}),cable:new Ut({color:2762274,metalness:.35,roughness:.55}),robot:new Ut({color:13159632,metalness:.62,roughness:.38}),flagIce:new Ut({color:12966116,roughness:.72,metalness:.04}),flagDeposit:new Ut({color:12081704,roughness:.8,metalness:.06}),track:new Ut({color:4006936,roughness:.97}),roadBed:new Ut({color:6044202,roughness:.97,metalness:.02}),soil:new Ut({color:4861468,roughness:.96}),plantLeaf:new Ut({color:3107378,roughness:.88}),dish:new Ut({color:14210252,metalness:.38,roughness:.42}),suit:new Ut({color:15131352,metalness:.18,roughness:.55}),suitDark:new Ut({color:6052438,metalness:.35,roughness:.5}),visor:new Ut({color:12886090,metalness:.75,roughness:.18,emissive:3811336,emissiveIntensity:.28}),battery:new Ut({color:3817026,metalness:.48,roughness:.48})};function Am(n,t="#1c120c",e="#f3e2cc"){const i=document.createElement("canvas");i.width=512,i.height=128;const r=i.getContext("2d");r.fillStyle=t,r.fillRect(0,0,512,128),r.strokeStyle=e,r.lineWidth=6,r.strokeRect(10,10,492,108),r.fillStyle=e;const s=n.length>12?36:n.length>8?44:n.length>5?54:64;r.font=`bold ${s}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(n,256,68);const a=new Xp(i);return a.colorSpace=Ie,a}function x(n,t,e,i,r,s=0,a=0,o=0){const l=new de(n,t);return l.position.set(e,i,r),l.rotation.set(s,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function xn(n,t,e=0){return[n,et(n,t)+e,t]}function j(n,t,e,i,r,s,a,o,l=0){const c=new Ut({map:Am(n,t,e),side:tn,roughness:.55,metalness:.08}),d=new de(new Ii(i,r),c);return d.position.set(s,a,o),d.rotation.y=l,d.castShadow=!1,d}function Vt(n,t,e,i=0,r=1){const s=et(t,e)+.85*r;n.add(x(new P(1.7*r,1.5*r,1.7*r),_.crate,t,s,e,0,i,0)),n.add(x(new P(1.78*r,.08,1.78*r),_.steelDark,t,s+.78*r,e,0,i,0))}function Rm(){const n=new gt;n.name="settlement";const t=[],e=[];n.add(Wn(0,0,{finished:!0}));const i=gi(0,0,{name:"starship",crewHab:!0});n.add(i),u0(t),e.push({id:"starship",name:"Crew hab Starship",position:new R(0,18,0)}),e.push({id:"eva",name:"EVA / airlock",position:new R(2,3,12)}),n.add(Wn(52,24,{finished:!1}));const r=gi(52,24,{name:"cargo-starship",cargoOpen:!0});n.add(r),t.push({type:"cyl",x:52,z:24,r:7.4}),e.push({id:"cargo",name:"Cargo Starship",position:new R(52,18,24)}),n.add(Wn(36,72,{finished:!1}));const s=gi(36,72,{name:"cargo-3",cargoOpen:!0});n.add(s),t.push({type:"cyl",x:36,z:72,r:7.4}),e.push({id:"cargo3",name:"Cargo Starship 3",position:new R(36,18,72)}),n.add($o(24,70)),n.add(Wn(-24,44,{finished:!1}));const a=gi(-24,44,{name:"cargo-4"});n.add(a),t.push({type:"cyl",x:-24,z:44,r:7.4}),e.push({id:"cargo4",name:"Cargo Starship 4",position:new R(-24,18,44)}),n.add(Wn(-48,68,{finished:!1}));const o=gi(-48,68,{name:"cargo-5",cargoOpen:!0});n.add(o),t.push({type:"cyl",x:-48,z:68,r:7.4}),e.push({id:"cargo5",name:"Window-2 cargo Starship",position:new R(-48,18,68)}),n.add($o(-60,66)),n.add(Wn(78,56,{finished:!1}));const l=gi(78,56,{name:"cargo-6"});n.add(l),t.push({type:"cyl",x:78,z:56,r:7.4}),e.push({id:"cargo6",name:"Window-2 cargo Starship",position:new R(78,18,56)}),n.add(Cm()),n.add(Pm()),n.add(Dm()),n.add(Im()),e.push({id:"prep",name:"Landing prep",position:new R(22,4,82)}),n.add(S0()),e.push({id:"pad2",name:"Next-window pad",position:new R(-16,6,136)});const c=Lm();n.add(c),e.push({id:"solar",name:"Solar farm",position:new R(82,6,-44)});const d=Gm();n.add(d),e.push({id:"solar2",name:"Solar field 2",position:new R(112,5,-83)});const u=p0();n.add(u),e.push({id:"solar3",name:"Solar field 3",position:new R(135,5,-40)});const h=y0();n.add(h),t.push({type:"box",x:158,z:-28,w:12,d:8}),e.push({id:"solar4",name:"Solar field 4",position:new R(158,5,-62)}),n.add(Um()),n.add(Wm());const f=Fm();n.add(f),t.push({type:"box",x:-68,z:-16,w:30,d:22}),e.push({id:"isru",name:"Sabatier ISRU",position:new R(-68,8,-16)});const g=E0();n.add(g),t.push({type:"box",x:-96,z:-16,w:18,d:18}),e.push({id:"isru2",name:"Sabatier train 2",position:new R(-96,8,-16)}),n.add(Nm());const v=Om();n.add(v),t.push({type:"box",x:-14,z:-104,w:14,d:8}),t.push({type:"box",x:2,z:-104,w:14,d:8}),t.push({type:"box",x:-6,z:-116,w:8,d:14}),e.push({id:"habs",name:"Hab cluster",position:new R(-6,5,-108)});const m=Xm();n.add(m),t.push({type:"box",x:-32,z:-98,w:16,d:12}),e.push({id:"hab-kit",name:"Hab from cargo",position:new R(-32,5,-98)});const p=qm();n.add(p),t.push({type:"box",x:-46,z:-108,w:14,d:8}),t.push({type:"box",x:-46,z:-94,w:14,d:8}),t.push({type:"box",x:-58,z:-102,w:8,d:14}),e.push({id:"pressure",name:"Pressure habs",position:new R(-50,5,-100)});const T=h0();n.add(T),t.push({type:"box",x:-20,z:-132,w:14,d:8}),t.push({type:"box",x:-6,z:-132,w:14,d:8}),t.push({type:"box",x:-13,z:-142,w:8,d:14}),e.push({id:"hab3",name:"Hab street",position:new R(-13,5,-134)});const b=g0();n.add(b),_i(t,-33,-120,"x",28),_i(t,-6,-120,"z",24),_i(t,-4,-58,"z",70),t.push({type:"cyl",x:2,z:-22,r:1.6}),e.push({id:"corridors",name:"Pressurized neighborhood",position:new R(-20,4,-120)});const S=_0();n.add(S),t.push({type:"box",x:-30,z:-69,w:9,d:9}),t.push({type:"box",x:-38,z:-74.2,w:7,d:4.4}),_i(t,-36,-87,"z",24),_i(t,-45,-74,"x",12),e.push({id:"yard",name:"Construction yard",position:new R(-36,5,-74)}),e.push({id:"hab6",name:"Hab 6",position:new R(-40,5,-76)});const O=x0();n.add(O),t.push({type:"box",x:-53,z:-72,w:6,d:7}),e.push({id:"med",name:"Crew ops / medical",position:new R(-50,5,-72)});const C=v0();n.add(C),t.push({type:"box",x:10,z:-124,w:14,d:10}),_i(t,2,-128,"x",10),e.push({id:"commons",name:"Crew commons / mess",position:new R(10,5,-124)});const D=zm();n.add(D),t.push({type:"box",x:22,z:-112,w:16,d:10}),t.push({type:"box",x:32,z:-112,w:8,d:6}),e.push({id:"greenhouse",name:"CO2 life support",position:new R(22,4,-112)});const L=o0();n.add(L),t.push({type:"box",x:38,z:-126,w:14,d:9}),e.push({id:"food",name:"Food / grow vault",position:new R(38,4,-126)});const w=f0();n.add(w),t.push({type:"box",x:8,z:-142,w:14,d:9}),e.push({id:"food2",name:"Hab-street grow vault",position:new R(8,4,-142)});const y=c0();n.add(y),t.push({type:"box",x:-60,z:-148,w:8,d:6}),t.push({type:"box",x:-64,z:-118,w:8,d:6}),t.push({type:"box",x:-18,z:-88,w:10,d:8}),e.push({id:"water",name:"Water loop",position:new R(-18,4,-88)});const I=T0();n.add(I),t.push({type:"box",x:18,z:-152,w:14,d:10}),e.push({id:"potable",name:"Potable water store",position:new R(18,4,-152)});const G=l0();n.add(G),t.push({type:"box",x:68,z:-10,w:16,d:8}),t.push({type:"box",x:-22,z:-88,w:8,d:6}),e.push({id:"battery",name:"Night power store",position:new R(68,4,-10)});const k=m0();n.add(k),t.push({type:"box",x:68,z:6,w:16,d:8}),t.push({type:"box",x:-28,z:-138,w:8,d:6}),e.push({id:"battery2",name:"Crew night store",position:new R(68,4,6)});const q=jm();n.add(q),t.push({type:"box",x:-15,z:-8,w:10,d:7}),e.push({id:"spaceport",name:"Methalox spaceport",position:new R(-15,4,-8)});const Q=M0();n.add(Q),t.push({type:"box",x:20,z:8,w:16,d:12}),e.push({id:"stock",name:"Methalox stockpile",position:new R(20,4,8)}),n.add($m()),n.add(Qm()),n.add(Cr(16,14,-.4)),n.add(Cr(8,-62,1.2)),n.add(Cr(30,74,-.2)),n.add(Cr(-94,-182,.7)),e.push({id:"rover",name:"Haul rover",position:new R(8,2,-62)});const Y=a0();n.add(Y),t.push({type:"box",x:-64,z:-90,w:10,d:8}),e.push({id:"haul",name:"Ice haul",position:new R(-64,3,-90)});const rt=Bm();n.add(rt),t.push({type:"box",x:48,z:-86,w:16,d:12}),e.push({id:"workshop",name:"Workshop",position:new R(48,5,-86)});const W=b0();n.add(W),t.push({type:"box",x:66,z:-74,w:16,d:12}),e.push({id:"workshop2",name:"Workshop bay 2",position:new R(66,5,-74)});const ct=km();n.add(ct),t.push({type:"cyl",x:-18,z:-138,r:3}),e.push({id:"comms",name:"Comms tower",position:new R(-18,16,-138)});const mt=s0();n.add(mt),t.push({type:"cyl",x:-32,z:-148,r:8.4}),t.push({type:"box",x:-40,z:-154,w:6,d:5}),e.push({id:"earth",name:"Earth dish · 12 min delay",position:new R(-32,12,-148)});const Tt=Hm();n.add(Tt),t.push({type:"cyl",x:-58,z:-158,r:6}),e.push({id:"ice",name:"Ice mining rig",position:new R(-58,8,-158)});const Gt=w0();n.add(Gt),t.push({type:"cyl",x:-78,z:-172,r:6}),e.push({id:"ice2",name:"Ice mine 2",position:new R(-78,8,-172)});const te=Zm();return n.add(te),t.push({type:"cyl",x:-82,z:-176,r:2.4}),e.push({id:"survey",name:"Resource survey",position:new R(-88,5,-188)}),n.add(Ye(42,22,.6)),n.add(Ye(39,26,-.4)),n.add(Ye(26,78,2.2)),n.add(Ye(26,68,.5)),n.add(Ye(22,72,-.8)),n.add(Ye(-80,-174,.8)),n.add(Ye(-34,-92,-1.2)),n.add(Ye(-28,-104,.3)),n.add(Ye(16,-120,.6)),n.add(Ye(70,-70,.4)),n.add(Ye(-28,128,1.1)),n.add(Jm()),d0(t),n.add(n0()),n.add(i0()),n.add(r0()),{group:n,colliders:t,landmarks:e}}function Wn(n,t,e={}){const i=new gt;i.name=e.finished?"pad":"cargo-pad";const r=et(n,t),s=e.finished?20:16,a=e.finished?_.pad:_.graded;if(i.add(x(new it(s,s,.45,48),a,n,r+.15,t)),e.finished){i.add(x(new ie(s+.4,.55,8,48),_.padRing,n,r+.4,t,Math.PI/2,0,0)),i.add(x(new kr(7.5,8.1,40),_.padRing,n,r+.4,t,-Math.PI/2,0,0)),i.add(x(new kr(13,13.5,40),_.padRing,n,r+.4,t,-Math.PI/2,0,0));for(let c=0;c<12;c++){const d=c/12*Math.PI*2;i.add(x(new P(.35,.55,.35),_.glowPad,n+Math.cos(d)*19.2,r+.55,t+Math.sin(d)*19.2))}}else{i.add(x(new ie(s+.3,.4,8,36),_.padRing,n,r+.32,t,Math.PI/2,0,0));for(let c=0;c<8;c++){const d=c/8*Math.PI*2;i.add(x(new P(.28,.4,.28),_.glowPad,n+Math.cos(d)*(s-.6),r+.45,t+Math.sin(d)*(s-.6)))}}const o=e.finished?26:21,l=x(new ie(o,e.finished?2.2:1.8,8,40),_.rust,n,r-.4,t,Math.PI/2,0,0);return l.scale.set(1,.45,1),i.add(l),i}function gi(n=0,t=0,e={}){const i=new gt;i.name=e.name||"starship",i.position.set(n,0,t);const r=et(n,t)-3.1,s=36,a=4.4;i.add(x(new it(a,a,s,28),_.steel,0,r+8+s/2,0));const o=x(new _e(a,24,16,0,Math.PI*2,0,Math.PI/2),_.steel,0,r+8+s,0);o.scale.set(1,1.55,1),i.add(o);const l=x(new it(a+.04,a+.04,s*.72,20,1,!0,Math.PI*.55,Math.PI*.9),_.tiles,0,r+8+s*.38,0);i.add(l);const c=x(new it(a+.15,a+.55,3.2,24),_.soot,0,r+6.4,0);i.add(c);for(let h=0;h<3;h++){const f=h/3*Math.PI*2;i.add(x(new it(.55,1.15,2.2,12),_.soot,Math.cos(f)*1.5,r+4.6,Math.sin(f)*1.5))}const d=new P(1.1,7.2,3.6);i.add(x(d,_.steelDark,-a-.2,r+14,0,0,0,.18)),i.add(x(d,_.steelDark,a+.2,r+14,0,0,0,-.18));const u=new P(.45,4.2,2.4);i.add(x(u,_.steelDark,-a+.2,r+40,1.2,.15,0,.4)),i.add(x(u,_.steelDark,a-.2,r+40,1.2,.15,0,-.4));for(let h=0;h<6;h++){const f=h/6*Math.PI*2+.2,g=new gt,v=x(new P(.22,8.2,.22),_.steelDark,0,0,0,0,0,.72),m=x(new P(1.3,.18,.9),_.steel,3.4,-3.7,0);g.add(v,m),g.position.set(Math.cos(f)*3.2,r+7.6,Math.sin(f)*3.2),g.rotation.y=-f,i.add(g)}for(let h=0;h<5;h++)i.add(x(new P(.7,.35,.08),_.tiles,0,r+28+h*2.1,a+.05));if(i.add(x(new P(1.6,.12,.12),_.glowWarm,0,r+44.5,0)),e.cargoOpen){i.add(x(new P(2.4,6.2,3.4),_.soot,-a+.4,r+16.4,0)),i.add(x(new P(.12,6.4,3.6),_.steel,-a-2.1,r+16.6,2,0,1.15,0));const h=r+13.2,f=et(n,t)+.22,g=-a-.3,v=-a-12.4,m=Math.hypot(g-v,h-f),p=Math.atan2(h-f,g-v);i.add(x(new P(m,.16,3.1),_.steelDark,(g+v)/2,(h+f)/2,0,0,0,p)),i.add(x(new P(10.5,.18,.18),_.lattice,-7.2,r+22.5,0,0,0,.55)),i.add(x(new it(.05,.05,7.2,6),_.cable,-12.2,r+16.2,0)),i.add(x(new P(1.5,1.3,1.5),_.crate,-12.2,r+12.4,0)),i.add(j("CARGO","#1a100c","#f0c089",3.4,.9,-a-.1,r+24,0,-Math.PI/2))}if(e.crewHab){const h=r+13;i.add(x(new it(1.2,1.2,2.7,14),_.habDark,0,h,a+1.35,Math.PI/2,0,0)),i.add(x(new ie(1.22,.09,6,16),_.steel,0,h,a+.28)),i.add(x(new ie(1.22,.09,6,16),_.steel,0,h,a+2.55)),i.add(x(new P(1.05,1.75,.1),_.steelDark,0,h,a+2.72)),i.add(x(new P(3.4,.14,2.6),_.steelDark,0,h-1.28,a+2.9)),i.add(x(new P(.1,1.15,2.5),_.steel,-1.6,h-.65,a+2.9)),i.add(x(new P(.1,1.15,2.5),_.steel,1.6,h-.65,a+2.9));const f=h-1.28,g=et(n,t)+.28,v=a+3.6,m=a+13.2,p=11;for(let C=0;C<p;C++){const D=C/(p-1);i.add(x(new P(2.15,.12,.95),_.steelDark,0,f+(g-f)*D,v+(m-v)*D))}const T=Math.hypot(v-m,f-g),b=Math.atan2(f-g,m-v);i.add(x(new P(2.25,.08,T),_.steel,0,(f+g)/2-.12,(v+m)/2,b,0,0)),i.add(x(new P(.08,.85,T),_.steel,-1.12,(f+g)/2+.35,(v+m)/2,b,0,0)),i.add(x(new P(.08,.85,T),_.steel,1.12,(f+g)/2+.35,(v+m)/2,b,0,0));const S=m+1.55,O=et(n,t)+1.35;i.add(x(new it(1.35,1.35,2.5,12),_.habDark,0,O,S)),i.add(x(new P(1.05,1.7,.1),_.steelDark,0,O+.05,S+1.4)),i.add(x(new ie(1.38,.07,6,14),_.steel,0,O+1.28,S,Math.PI/2,0,0)),i.add(x(new P(2.2,.12,2.2),_.steelDark,0,et(n,t)+.12,S));for(let C=0;C<5;C++)i.add(x(new P(.85,.48,.08),_.glowWarm,1.55,r+16.5+C*3.4,a+.06)),i.add(x(new P(.08,.48,.85),_.glowWarm,a+.06,r+16.5+C*3.4,-1.35));i.add(x(new it(.55,.55,.2,12),_.steel,2.55,r+14.2,a+.04,Math.PI/2,0,0)),i.add(x(new ie(.52,.06,6,12),_.steelDark,2.55,r+14.2,a+.14)),i.add(j("CREW HAB","#1a100c","#f0c089",3.4,.85,0,h+2.55,a+2.35)),i.add(j("AIRLOCK","#1a100c","#f0c089",2.3,.55,1.85,h+.15,a+2.05,Math.PI/2))}return i}function Cm(){const n=new gt;n.name="crates";const t=[[10,8,0],[12.2,8.4,.4],[10.4,10.6,1.6],[13.5,6.2,-.3],[-12,9,.5],[-14,7.2,2.1],[8.5,-11,0],[6.4,-12.5,1.1]];for(const[e,i,r]of t)Vt(n,e,i,r);return n}function Pm(){const n=new gt;n.name="cargo-offload";const t=[[40,22,.2],[38.2,24.1,-.3],[41.4,26.2,.8],[36.5,21.4,.1],[37.8,27.6,1.4],[34.8,24.8,-.5],[39.2,19.6,.6],[35.4,19.2,.15]];for(const[s,a,o]of t)Vt(n,s,a,o);Vt(n,38.6,22.8,.1,1.15),Vt(n,33.2,20.4,.25,1.2),Vt(n,31.4,22.1,-.2,1.05);const[e,i,r]=xn(36,23.5,.08);return n.add(x(new P(8.5,.12,4.2),_.steelDark,e,i,r,0,.15,0)),n.add(j("HAB KIT","#1a100c","#f0c089",2.6,.7,33.2,et(33.2,20.4)+2.5,20.4,.35)),n}function Dm(){const n=new gt;n.name="approach";const t=[{fx:0,fz:118,tx:0,tz:32,n:7},{fx:52,fz:90,tx:52,tz:42,n:5},{fx:36,fz:128,tx:36,tz:90,n:4},{fx:-24,fz:92,tx:-24,tz:60,n:4},{fx:-48,fz:118,tx:-48,tz:86,n:4},{fx:78,fz:104,tx:78,tz:74,n:4},{fx:-16,fz:178,tx:-16,tz:154,n:5}];for(const e of t){const i=Math.atan2(e.tx-e.fx,e.tz-e.fz);for(let r=0;r<e.n;r++){const s=r/(e.n-1),a=e.fx+(e.tx-e.fx)*s,o=e.fz+(e.tz-e.fz)*s,l=et(a,o),c=new gt;c.add(x(new P(2.5,.16,.34),_.glowPad,-.75,0,0,0,.5,0)),c.add(x(new P(2.5,.16,.34),_.glowPad,.75,0,0,0,-.5,0)),c.position.set(a,l+.14,o),c.rotation.y=i,n.add(c)}}return n}function Im(){const n=new gt;n.name="prep-pad";const t=22,e=82,i=et(t,e);n.add(x(new it(14,14,.28,36),_.graded,t,i+.08,e));const r=x(new ie(16.2,1.7,8,28,Math.PI*1.35),_.rust,t,i-.15,e,Math.PI/2,.5,0);r.scale.set(1,.42,1),n.add(r);for(let a=0;a<8;a++){const o=a/8*Math.PI*2+.2,l=t+Math.cos(o)*15.2,c=e+Math.sin(o)*15.2,d=et(l,c);n.add(x(new P(.08,1.7,.08),_.steel,l,d+.85,c)),n.add(x(new P(.28,.16,.06),_.glowPad,l,d+1.62,c,0,o,0))}const s=[[12,74],[30,88],[14,90]];for(const[a,o]of s){const l=x(new He(2.2,0),_.rust,a,et(a,o)+.9,o);l.scale.set(1.2,.65,1.05),n.add(l)}return n.add(j("LANDING PREP","#1a100c","#f0c089",4.4,1,t+10.5,i+2.4,e+2,-.6)),n.add(x(new P(.12,2.4,.12),_.steelDark,t+10.5,i+1.2,e+2)),n}function Lm(){const n=new gt;n.name="solar";const t=10,e=8;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=58+a*5.4,c=-22-o*6.2,d=et(l,c),u=x(new P(.18,1.6,.18),_.solarFrame,l,d+.8,c),h=x(new P(4.6,.08,2.3),_.solar,l,d+1.55,c,-.55,.15,0),f=x(new P(4.75,.05,2.42),_.solarFrame,l,d+1.5,c,-.55,.15,0);n.add(u,h,f)}for(let a=0;a<5;a++){const o=58+a*5.4,l=-22-8*6.2,c=et(o,l);n.add(x(new P(.18,1.6,.18),_.solarFrame,o,c+.8,l)),a<2&&n.add(x(new P(4.6,.08,2.3),_.solar,o+1.1,c+.22,l+1.5,1.2,.25,0))}const[i,r,s]=xn(54,-18,.7);return n.add(x(new P(2.2,1.4,1.4),_.habDark,i,r,s)),n.add(j("POWER","#111111","#f4e6c8",2,.55,i,r+.2,s+.75)),n}function Um(){const n=new gt;n.name="power-run";const t=54,e=-18,i=-54,r=-16,s=[],a=10;for(let o=0;o<=a;o++){const l=o/a,c=t+(i-t)*l,d=e+(r-e)*l,u=et(c,d);n.add(x(new it(.09,.11,4.4,6),_.steelDark,c,u+2.2,d)),n.add(x(new P(1.15,.08,.08),_.steel,c,u+4.35,d)),s.push({x:c,y:u+4.32,z:d})}for(let o=0;o<s.length-1;o++){const l=s[o],c=s[o+1];for(const d of[-.38,.38]){const u=new Ui([new R(l.x,l.y,l.z+d),new R((l.x+c.x)/2,(l.y+c.y)/2-.75,(l.z+c.z)/2+d),new R(c.x,c.y,c.z+d)]),h=new de(new Qn(u,6,.035,4,!1),_.cable);h.castShadow=!1,n.add(h)}}return n}function Nm(){const n=new gt;n.name="water-feed";const t=-58,e=-150,i=-68,r=-26,s=12,a=[];for(let c=0;c<=s;c++){const d=c/s,u=t+(i-t)*d,h=e+(r-e)*d,f=et(u,h)+1.15;a.push(new R(u,f,h)),c%2===0&&n.add(x(new P(.16,1.1,.16),_.steelDark,u,et(u,h)+.55,h))}const o=new Ui(a),l=new de(new Qn(o,24,.16,6,!1),_.pipe);return l.castShadow=!1,n.add(l),n}function Fm(){const n=new gt;n.name="isru";const t=-68,e=-16,i=et(t,e);n.add(x(new P(30,.4,22),_.concrete,t,i+.15,e));const r=x(new it(1.8,2,13,12),_.steelDark,t+4,i+6.8,e);n.add(r),n.add(x(new ie(2.5,.18,6,16),_.steel,t+4,i+10.2,e,Math.PI/2,0,0)),n.add(x(new ie(2.5,.18,6,16),_.steel,t+4,i+7.4,e,Math.PI/2,0,0)),n.add(j("SABATIER","#1a100c","#f0c089",5.2,1.15,t+6.1,i+8.2,e,Math.PI/2));const s=x(new it(3,3,13,20),_.tankCh4,t-8,i+7.1,e+5.4,0,0,Math.PI/2),a=x(new it(3,3,13,20),_.tankO2,t-8,i+7.1,e-5.2,0,0,Math.PI/2);n.add(s,a),n.add(j("CH4","#6a2208","#f4e6c8",3.6,1,t-1.2,i+7.1,e+5.4)),n.add(j("O2","#2a3340","#e8eef4",3.6,1,t-1.2,i+7.1,e-5.2)),n.add(x(new it(2.2,2.2,7.2,16),_.pipe,t-4,i+4,e-10.4)),n.add(j("H2O","#1a2830","#d6e6ef",2.6,.75,t-4,i+5.6,e-8.1));const o=x(new He(2.1,0),_.ice,t+1.5,i+1.1,e-10.2);return o.scale.set(1.15,.6,1),n.add(o),n.add(x(new it(.55,.55,7.5,10),_.steel,t+10.5,i+4.1,e-5.4)),n.add(x(new it(2.3,.7,2.6,14),_.steelDark,t+10.5,i+8.8,e-5.4)),n.add(x(new ie(2.05,.1,6,16),_.steel,t+10.5,i+10.15,e-5.4,Math.PI/2,0,0)),n.add(j("CO2","#1a100c","#f0c089",2.4,.7,t+10.5,i+5.8,e-3.2)),n.add(x(new P(4.2,3,3.2),_.habDark,t+10,i+1.8,e+4.2)),n.add(j("POWER","#111111","#f4e6c8",2.2,.55,t+10,i+2.6,e+5.9)),n.add(x(new it(.16,.16,10,8),_.pipe,t+7.2,i+3.4,e-2.6,0,0,Math.PI/2)),n.add(x(new it(.16,.16,9,8),_.pipe,t-1.5,i+3.6,e+2.4,0,0,Math.PI/2)),n.add(x(new it(.16,.16,8.5,8),_.steel,t-1.5,i+3.6,e-2.2,0,0,Math.PI/2)),n.add(x(new it(.14,.14,6.4,8),_.cable,t+12.2,i+3.8,e+1.2,0,0,Math.PI/2)),n}function Om(){const n=new gt;n.name="habs";const t=[[-14,-104,0],[2,-104,0],[-6,-116,1.57]];for(const[l,c,d]of t){const u=et(l,c),h=x(new it(3.1,3.1,12,18),_.hab,l,u+3.2,c,0,0,Math.PI/2);h.rotation.y=d,n.add(h),n.add(x(new _e(3.1,14,10),_.hab,l+Math.cos(d)*6,u+3.2,c+Math.sin(d)*6)),n.add(x(new _e(3.1,14,10),_.hab,l-Math.cos(d)*6,u+3.2,c-Math.sin(d)*6));for(let f=-2;f<=2;f++){const g=l+Math.cos(d)*f*2,v=c+Math.sin(d)*f*2;n.add(x(new P(.9,.7,.08),_.glowWarm,g,u+3.3,v+(d===0?3.15:0)))}}const[e,i,r]=xn(-6,-96,1.4);n.add(x(new it(1.5,1.5,2.6,12),_.habDark,e,i,r)),n.add(x(new P(1.1,1.8,.12),_.steelDark,e,i+.1,r+1.5));const[s,a,o]=xn(-6,-108,6.8);return n.add(x(new _e(4.4,18,12,0,Math.PI*2,0,Math.PI/2),_.hab,s,a,o)),n.add(j("HAB 1","#1a100c","#f0c089",2.6,.7,-6,et(-6,-96)+3.6,-94.4)),n}function zm(){const n=new gt;n.name="greenhouse";const t=22,e=-112,i=et(t,e);n.add(x(new P(15.2,.25,8.6),_.concrete,t,i+.1,e));const r=new de(new it(4.15,4.15,14.2,18,1,!1,0,Math.PI),_.glass);r.rotation.z=Math.PI/2,r.position.set(t,i+4.1,e),r.castShadow=!1,n.add(r),n.add(x(new P(14.2,.1,8.4),_.solarFrame,t,i+4.15,e));for(let l=-2;l<=2;l++)n.add(x(new ie(4.12,.055,6,16,Math.PI),_.solarFrame,t+l*2.7,i+4.1,e,0,Math.PI/2,0));for(let l=-2;l<=2;l++){n.add(x(new P(2.05,.26,6.6),_.soil,t+l*2.35,i+.36,e));for(let c=-2;c<=2;c++){const d=c%2===0?_.plant:_.plantLeaf;n.add(x(new P(1.45,.52,.82),d,t+l*2.35,i+.72,e+c*1.12)),n.add(x(new P(.55,.42,.4),_.plantLeaf,t+l*2.35+.2,i+1.05,e+c*1.12))}n.add(x(new P(1.7,.05,6.1),_.glowWarm,t+l*2.35,i+3.55,e))}n.add(x(new P(1.2,2,.15),_.habDark,t-7.1,i+1.2,e));const s=t+10.4,a=e,o=et(s,a);return n.add(x(new P(5.4,.2,4.6),_.concrete,s,o+.08,a)),n.add(x(new it(.52,.52,5.4,10),_.steel,s+1.15,o+2.9,a-1.05)),n.add(x(new it(1.75,.55,1.7,14),_.steelDark,s+1.15,o+6.2,a-1.05)),n.add(x(new ie(1.5,.08,6,14),_.steel,s+1.15,o+7.1,a-1.05,Math.PI/2,0,0)),n.add(j("CO2","#1a100c","#f0c089",1.9,.5,s+1.15,o+3.7,a+.35)),n.add(x(new P(2.5,1.85,1.9),_.habDark,s-.7,o+1.08,a+.95)),n.add(j("COMPRESS","#1a100c","#f0c089",2.35,.55,s-.7,o+1.55,a+1.95)),n.add(x(new it(.14,.14,6.4,8),_.pipe,t+6.6,i+1.55,e,0,0,Math.PI/2)),n.add(x(new it(.68,.68,2.35,12),_.tankO2,t-5.5,i+1.45,e+5.15)),n.add(j("O2","#2a3340","#e8eef4",1.35,.42,t-5.5,i+1.65,e+5.95)),n.add(j("LIFE SUPPORT","#1a100c","#f0c089",3.7,.7,t,i+5.55,e+.15)),n.add(j("COMPRESSED CO2","#1a100c","#d6b48a",3.5,.55,t,i+4.75,e+.15)),n}function Cr(n,t,e){const i=new gt;i.name="rover";const r=et(n,t);i.position.set(n,r,t),i.rotation.y=e,i.add(x(new P(3.4,1.1,2.1),_.rover,0,1.35,0)),i.add(x(new P(1.4,.7,1.5),_.roverDark,1.2,2.1,0)),i.add(x(new P(2.2,.08,1.6),_.solar,0,2,0)),i.add(x(new it(.07,.07,2.1,6),_.steel,-.4,2.9,0)),i.add(x(new P(.25,.2,.25),_.roverDark,-.4,4,0));const s=new it(.55,.55,.35,12),a=[[-1.2,.55,1.15],[.1,.55,1.15],[1.2,.55,1.15],[-1.2,.55,-1.15],[.1,.55,-1.15],[1.2,.55,-1.15]];for(const[o,l,c]of a)i.add(x(s,_.roverDark,o,l,c,Math.PI/2,0,0));return i}function Ye(n,t,e){const i=new gt;i.name="optimus";const r=et(n,t);return i.position.set(n,r,t),i.rotation.y=e,i.add(x(new P(.42,.62,.24),_.robot,0,1.28,0)),i.add(x(new it(.14,.15,.22,10),_.robot,0,1.72,0)),i.add(x(new P(.16,.08,.04),_.steelDark,0,1.74,.14)),i.add(x(new P(.12,.48,.12),_.robot,-.28,1.22,0)),i.add(x(new P(.12,.48,.12),_.robot,.28,1.22,0)),i.add(x(new P(.14,.62,.14),_.steelDark,-.1,.62,0)),i.add(x(new P(.14,.62,.14),_.steelDark,.1,.62,0)),i}function Bm(){const n=new gt;n.name="workshop";const t=48,e=-86,i=et(t,e),r=x(new it(6.2,6.2,16,16,1,!1,0,Math.PI),_.habDark,t,i+3.4,e);return r.rotation.z=Math.PI/2,n.add(r),n.add(x(new P(16,.3,10),_.concrete,t,i+.1,e)),n.add(x(new P(.2,4.2,6.5),_.steelDark,t-7.8,i+2.2,e)),n.add(x(new P(2.4,1.1,1.4),_.crate,t+2,i+.8,e+1.5)),n.add(x(new P(4.6,.16,.16),_.steel,t+1.2,i+.35,e-2.8)),n.add(x(new P(4.6,.16,.16),_.steel,t+1.2,i+.55,e-3.05)),n.add(j("WORKSHOP","#1a100c","#f0c089",3.6,.85,t,i+5.6,e+.2)),n}function km(){const n=new gt;n.name="comms";const t=-18,e=-138,i=et(t,e);for(let s=0;s<8;s++)n.add(x(new P(.18,3.2,.18),_.lattice,t-.7,i+1.6+s*3,e-.7)),n.add(x(new P(.18,3.2,.18),_.lattice,t+.7,i+1.6+s*3,e-.7)),n.add(x(new P(.18,3.2,.18),_.lattice,t-.7,i+1.6+s*3,e+.7)),n.add(x(new P(.18,3.2,.18),_.lattice,t+.7,i+1.6+s*3,e+.7)),n.add(x(new P(1.6,.1,.1),_.lattice,t,i+3+s*3,e-.7)),n.add(x(new P(1.6,.1,.1),_.lattice,t,i+3+s*3,e+.7));const r=x(new _e(3.2,16,10,0,Math.PI*2,0,Math.PI/2.4),_.steel,t,i+26.5,e,-.7,.4,0);return n.add(r),n.add(x(new it(.08,.08,2.2,6),_.steelDark,t+.4,i+27.4,e+1.1,.6,0,0)),n}function Hm(){const n=new gt;n.name="ice-mine";const t=-58,e=-158,i=et(t,e);n.add(x(new P(8,.3,8),_.concrete,t,i+.1,e)),n.add(x(new P(.28,14,.28),_.lattice,t-2.2,i+7,e-2.2)),n.add(x(new P(.28,14,.28),_.lattice,t+2.2,i+7,e-2.2)),n.add(x(new P(.28,14,.28),_.lattice,t-2.2,i+7,e+2.2)),n.add(x(new P(.28,14,.28),_.lattice,t+2.2,i+7,e+2.2)),n.add(x(new P(5.2,.25,5.2),_.steelDark,t,i+14.2,e)),n.add(x(new it(.35,.55,9,10),_.steel,t,i+5,e)),n.add(x(new Qi(.7,1.6,8),_.soot,t,i+.9,e));const r=x(new He(3.4,0),_.ice,t+7.5,i+1.6,e+1.2);return r.scale.set(1.3,.7,1.1),n.add(r),n.add(x(new P(6,.35,1.1),_.steelDark,t+3.4,i+1.4,e,0,0,-.18)),n.add(j("ICE","#1a2830","#d6e6ef",2.2,.65,t,i+8.4,e+2.6)),n}function As(n,t,e,i,r){const s=et(t,e);n.add(x(new it(.05,.07,3.2,6),_.steelDark,t,s+1.6,e)),n.add(x(new P(1.15,.7,.04),r,t+.58,s+2.75,e)),n.add(j(i,"#1a100c","#f0c089",1.45,.4,t+.58,s+2.75,e+.05))}function Fc(n,t,e,i){const r=et(t,e);n.add(x(new P(.07,1.55,.07),_.steelDark,t,r+.78,e)),n.add(x(new P(.38,.22,.03),i,t+.2,r+1.42,e))}function Vm(n,t,e,i=0){const r=et(t,e);n.add(x(new P(.85,.55,.65),_.crate,t,r+.32,e,0,i,0)),n.add(x(new P(.88,.06,.68),_.steelDark,t,r+.62,e,0,i,0))}function Gm(){const n=new gt;n.name="solar-2";const t=6,e=4;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=98+a*5.4,c=-74-o*6.2,d=et(l,c),u=x(new P(.18,1.6,.18),_.solarFrame,l,d+.8,c),h=x(new P(4.6,.08,2.3),_.solar,l,d+1.55,c,-.55,.15,0),f=x(new P(4.75,.05,2.42),_.solarFrame,l,d+1.5,c,-.55,.15,0);n.add(u,h,f)}const[i,r,s]=xn(96,-72,.7);return n.add(x(new P(2.2,1.4,1.4),_.habDark,i,r,s)),n.add(j("POWER","#111111","#f4e6c8",2,.55,i,r+.2,s+.75)),n}function Wm(){const n=new gt;n.name="solar-tie";const t=90,e=-48,i=112,r=-83,s=[],a=5;for(let o=0;o<=a;o++){const l=o/a,c=t+(i-t)*l,d=e+(r-e)*l,u=et(c,d);n.add(x(new it(.09,.11,4.4,6),_.steelDark,c,u+2.2,d)),n.add(x(new P(1.15,.08,.08),_.steel,c,u+4.35,d)),s.push({x:c,y:u+4.32,z:d})}for(let o=0;o<s.length-1;o++){const l=s[o],c=s[o+1];for(const d of[-.38,.38]){const u=new Ui([new R(l.x,l.y,l.z+d),new R((l.x+c.x)/2,(l.y+c.y)/2-.65,(l.z+c.z)/2+d),new R(c.x,c.y,c.z+d)]),h=new de(new Qn(u,6,.035,4,!1),_.cable);h.castShadow=!1,n.add(h)}}return n}function Xm(){const n=new gt;n.name="hab-assembly";const t=-32,e=-98,i=et(t,e);n.add(x(new P(18,.22,14),_.concrete,t,i+.08,e));const r=[[-5,-2.2],[5,-2.2],[-5,2.2],[5,2.2]];for(const[a,o]of r)n.add(x(new it(.18,.28,1.85,8),_.steelDark,t+a,i+1.02,e+o)),n.add(x(new P(.72,.12,.72),_.steel,t+a,i+.14,e+o)),n.add(x(new P(.55,.1,.55),_.steel,t+a,i+1.96,e+o));const s=i+3.55;n.add(x(new it(3,3,11,16),_.hab,t,s,e,0,0,Math.PI/2)),n.add(x(new _e(3,14,10),_.hab,t-5.5,s,e)),n.add(x(new _e(3,14,10,0,Math.PI*2,0,Math.PI/2),_.hab,t+8.4,i+1.55,e+.45,.22,.35,.12)),n.add(x(new it(1.35,1.35,2.4,12),_.habDark,t,s,e+4.15,Math.PI/2,0,0)),n.add(x(new P(1,1.65,.1),_.steelDark,t,s,e+5.45)),n.add(x(new ie(1.38,.08,6,14),_.steel,t,s,e+3.05,0,0,0));for(const[a,o]of[[-7.2,4.6],[6.8,4.8],[-6.4,-5.2]])n.add(x(new P(.12,3.6,.12),_.lattice,t+a,i+1.9,e+o)),n.add(x(new P(.12,3.6,.12),_.lattice,t+a+1.4,i+1.9,e+o)),n.add(x(new P(1.6,.08,.08),_.lattice,t+a+.7,i+3.7,e+o));return Vt(n,t-8.2,e+6.2,.2),Vt(n,t-6.3,e+7.4,-.35),Vt(n,t+7.1,e-5.6,.5,1.1),Vt(n,t+5.4,e-6.4,.15),n.add(j("HAB KIT","#1a100c","#f0c089",3,.75,t,i+6.4,e+3.2)),n.add(j("AIRLOCK","#1a100c","#f0c089",2.2,.55,t+2.4,s+.2,e+4.2,Math.PI/2)),n}function rn(n,t,e,i,r={}){const s=et(t,e),a=r.r||2.85,o=r.len||10.4,l=r.onStands?s+3.4:s+3.05,c=Math.cos(i),d=Math.sin(i);if(r.onStands)for(const[h,f]of[[-4.1,-2.05],[4.1,-2.05],[-4.1,2.05],[4.1,2.05]]){const g=t+c*h-d*f,v=e+d*h+c*f;n.add(x(new it(.16,.26,1.75,8),_.steelDark,g,s+.98,v)),n.add(x(new P(.7,.12,.7),_.steel,g,s+.14,v)),n.add(x(new P(.52,.1,.52),_.steel,g,s+1.9,v))}else for(const[h,f]of[[-3.6,0],[3.6,0]]){const g=t+c*h-d*f,v=e+d*h+c*f;n.add(x(new P(1.6,.55,1.15),_.steelDark,g,s+.38,v,0,i,0))}const u=x(new it(a,a,o,16),_.hab,t,l,e,0,0,Math.PI/2);if(u.rotation.y=i,n.add(u),!r.partial)n.add(x(new _e(a,14,10),_.hab,t+c*(o/2),l,e+d*(o/2))),n.add(x(new _e(a,14,10),_.hab,t-c*(o/2),l,e-d*(o/2)));else{n.add(x(new _e(a,14,10),_.hab,t-c*(o/2),l,e-d*(o/2)));const h=t+c*(o/2+2.3),f=e+d*(o/2+2.3);n.add(x(new _e(a,14,10,0,Math.PI*2,0,Math.PI/2),_.hab,h,s+1.45,f,.22,.3,.1))}for(let h=-2;h<=2;h++){const f=t+c*h*1.75,g=e+d*h*1.75;n.add(x(new P(.8,.55,.08),_.glowWarm,f-d*a,l+.08,g+c*a))}if(r.airlock){const h=t-d*(a+1.15),f=e+c*(a+1.15);n.add(x(new it(1.15,1.15,2.2,12),_.habDark,h,l,f,Math.PI/2,i,0)),n.add(x(new P(1,1.6,.1),_.steelDark,h-d*1.15,l,f+c*1.15,0,i,0)),n.add(x(new ie(1.18,.07,6,14),_.steel,h+d*.2,l,f-c*.2,0,i,0)),n.add(j("AIRLOCK","#1a100c","#f0c089",2.15,.5,h-d*.2,l+1.45,f+c*.2,i))}r.label&&n.add(j(r.label,"#1a100c","#f0c089",2.7,.65,t,l+a+.55,e+.15,i))}function qm(){const n=new gt;n.name="pressure-habs";const t=et(-46,-101);n.add(x(new P(28,.2,22),_.concrete,-50,t+.06,-101)),rn(n,-46,-108,0,{airlock:!0,label:"HAB 2"}),rn(n,-46,-94,0,{onStands:!0,airlock:!0,label:"HAB KIT"});const e=et(-46,-101)+3.15;return n.add(x(new it(1.15,1.15,8.2,12),_.habDark,-46,e,-101,Math.PI/2,0,0)),n.add(x(new ie(1.2,.08,6,14),_.steel,-46,e,-105.1,Math.PI/2,0,0)),n.add(x(new ie(1.2,.08,6,14),_.steel,-46,e,-96.9,Math.PI/2,0,0)),n.add(j("CONNECT","#1a100c","#f0c089",2.4,.5,-46,e+1.55,-101)),rn(n,-58,-102,Math.PI/2,{onStands:!0,partial:!0,label:"MOD"}),Vt(n,-54.5,-110.2,.25),Vt(n,-52.8,-111.4,-.3,1.08),Vt(n,-61.2,-96.4,.4),Vt(n,-40.6,-90.8,.15,1.05),n}function Pr(n,t,e){const i=new gt;i.name="eva";const r=et(n,t);return i.position.set(n,r,t),i.rotation.y=e,i.add(x(new P(.56,.8,.4),_.suit,0,1.46,0)),i.add(x(new P(.44,.5,.24),_.suitDark,0,1.52,-.3)),i.add(x(new _e(.21,12,10),_.suit,0,2.04,.02)),i.add(x(new _e(.165,10,8,0,Math.PI*2,0,Math.PI*.58),_.visor,0,2.04,.1)),i.add(x(new P(.17,.6,.17),_.suit,-.4,1.36,.04)),i.add(x(new P(.17,.6,.17),_.suit,.4,1.36,.04)),i.add(x(new P(.2,.76,.2),_.suitDark,-.15,.7,0)),i.add(x(new P(.2,.76,.2),_.suitDark,.15,.7,0)),i}function Ym(n,t,e,i){const r=et(t,e),s=new gt;s.position.set(t,r,e),s.rotation.y=i,s.add(x(new P(1.2,.18,.72),_.steelDark,0,.62,0)),s.add(x(new P(1.15,.28,.68),_.crate,0,.86,0)),s.add(x(new P(.08,.55,.08),_.steel,-.48,.32,.26)),s.add(x(new P(.08,.55,.08),_.steel,.48,.32,.26)),s.add(x(new P(.08,.55,.08),_.steel,-.48,.32,-.26)),s.add(x(new P(.08,.55,.08),_.steel,.48,.32,-.26));const a=new it(.12,.12,.1,10);s.add(x(a,_.roverDark,-.48,.12,.3,Math.PI/2,0,0)),s.add(x(a,_.roverDark,.48,.12,.3,Math.PI/2,0,0)),s.add(x(a,_.roverDark,-.48,.12,-.3,Math.PI/2,0,0)),s.add(x(a,_.roverDark,.48,.12,-.3,Math.PI/2,0,0)),s.add(x(new P(.06,.7,.06),_.steel,-.22,1.3,.08)),s.add(x(new P(.06,.55,.06),_.steel,.18,1.22,-.06)),s.add(x(new P(.22,.12,.12),_.steelDark,-.22,1.68,.08)),n.add(s)}function Km(n,t,e,i){const r=et(t,e),s=new gt;s.position.set(t,r,e),s.rotation.y=i,s.add(x(new P(.85,2.45,.32),_.steelDark,0,1.32,0)),s.add(x(new ie(.42,.07,8,14),_.steel,0,1.58,.22)),s.add(x(new it(.38,.38,.1,12),_.habDark,0,1.58,.18,Math.PI/2,0,0)),s.add(x(new P(.7,.16,.55),_.steel,0,.12,.05)),n.add(s)}function Jm(){const n=new gt;n.name="eva-presence",n.add(Pr(2.4,12.2,je(2.4,12.2,0,7))),n.add(Pr(-2.2,11.5,je(-2.2,11.5,0,7))),n.add(Pr(3.8,15.6,.35)),n.add(Pr(.6,18.2,Math.PI)),Ym(n,4.3,14.8,.4),Km(n,-3.9,9.1,.2),Vt(n,5.4,13.2,.2,.85);const t=et(5.1,16.4);return n.add(x(new P(.1,2.2,.1),_.steelDark,5.1,t+1.1,16.4)),n.add(j("EVA PREP","#1a100c","#f0c089",2.3,.55,5.1,t+2.45,16.4,-.35)),n}function Zm(){const n=new gt;n.name="survey";const t=-82,e=-176,i=et(t,e);for(let c=0;c<3;c++){const d=c/3*Math.PI*2+.4,u=Math.cos(d)*.62,h=Math.sin(d)*.62;n.add(x(new P(.08,2.5,.08),_.steelDark,t+u,i+1.15,e+h,.32*Math.cos(d),0,.32*Math.sin(d)))}n.add(x(new P(.58,.32,.48),_.roverDark,t,i+2.28,e)),n.add(x(new it(.04,.04,1.35,6),_.steel,t,i+3.08,e)),n.add(x(new P(.22,.12,.22),_.steelDark,t,i+3.78,e)),n.add(x(new P(.12,2.2,.12),_.steelDark,t+1.15,i+1.1,e+.2)),n.add(j("SURVEY","#1a100c","#f0c089",2.6,.7,t+.2,i+3.55,e+1.15));const r=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(let c=0;c<r.length;c++){const[d,u]=r[c];Fc(n,d,u,c%3===0?_.flagIce:_.flagDeposit)}As(n,-96,-198,"ICE",_.flagIce),As(n,-72,-204,"H2O",_.flagIce),As(n,-104,-176,"DEPOSIT",_.flagDeposit);const s=[[-90,-184,.2],[-88.4,-182.6,-.4],[-91.2,-181.8,.7],[-86.6,-185.2,.1]];for(const[c,d,u]of s)Vm(n,c,d,u);Vt(n,-84.5,-180.4,.15,.85),n.add(j("SAMPLES","#1a2830","#d6e6ef",2.2,.55,-90,et(-90,-184)+1.55,-184));const a={x:-60,z:-162},o={x:-100,z:-200},l=14;for(let c=0;c<l;c++){const d=c/(l-1),u=a.x+(o.x-a.x)*d,h=a.z+(o.z-a.z)*d,f=et(u,h),g=Math.atan2(o.x-a.x,o.z-a.z);for(const v of[-.55,.55]){const m=Math.cos(g)*v,p=-Math.sin(g)*v,T=x(new P(.42,.05,.85),_.track,u+m,f+.04,h+p,0,g,0);T.castShadow=!1,n.add(T)}}return n}function $n(n,t,e,i=.14){const r=[];for(let o=0;o<t.length;o++){const[l,c]=t[o],d=et(l,c)+1.05;r.push(new R(l,d,c)),o%2===0&&n.add(x(new P(.18,1.05,.18),_.steelDark,l,et(l,c)+.5,c))}const s=new Ui(r),a=new de(new Qn(s,28,i,6,!1),e);a.castShadow=!1,n.add(a)}function $m(){const n=new gt;return n.name="methalox-lines",$n(n,[[-76,-10.6],[-52,-18],[-32,-14],[-18,-8.4]],_.tankCh4,.13),$n(n,[[-76,-21.2],[-52,-24],[-32,-18],[-18,-9.6]],_.steel,.13),n.add(j("TO PAD","#1a100c","#f0c089",2.2,.5,-50,et(-50,-18)+2.15,-16.4)),n}function jm(){const n=new gt;n.name="methalox-stand";const t=-15,e=-8,i=et(t,e);n.add(x(new P(8.6,.16,5.4),_.steelDark,t,i+.42,e)),n.add(x(new it(.88,.88,3.5,14),_.tankCh4,t-2.25,i+2.2,e+.55)),n.add(x(new it(.88,.88,3.5,14),_.tankO2,t-2.25,i+2.2,e-1.25)),n.add(j("CH4","#6a2208","#f4e6c8",1.45,.42,t-1.3,i+2.25,e+.55,Math.PI/2)),n.add(j("O2","#2a3340","#e8eef4",1.45,.42,t-1.3,i+2.25,e-1.25,Math.PI/2));const r=[[1.55,1.65],[1.55,-1.65],[3.45,1.65],[3.45,-1.65]];for(const[s,a]of r)n.add(x(new P(.16,3.15,.16),_.steelDark,t+s,i+1.88,e+a));return n.add(x(new P(2.25,.12,3.5),_.steel,t+2.5,i+3.5,e)),n.add(x(new ie(.42,.11,8,14),_.tankCh4,t+.15,i+1.45,e+.55,Math.PI/2,0,0)),n.add(x(new ie(.42,.11,8,14),_.steel,t+.15,i+1.45,e-1.2,Math.PI/2,0,0)),n.add(x(new it(.09,.09,6.4,8),_.tankCh4,t+4.55,i+1.18,e+.55,0,0,Math.PI/2)),n.add(x(new it(.09,.09,6.4,8),_.steel,t+4.55,i+.98,e-1.2,0,0,Math.PI/2)),n.add(x(new P(1.55,1.05,1.15),_.habDark,t+.55,i+.98,e+1.85)),n.add(x(new it(.55,.55,2.8,12),_.tankCh4,t-.4,i+1.15,e+2.55,0,0,Math.PI/2)),n.add(x(new P(1.6,.35,.85),_.steelDark,t-.4,i+.55,e+2.55)),n.add(j("METHALOX","#1a100c","#f0c089",3.15,.68,t+2.5,i+4.12,e)),n.add(j("RETURN PROPELLANT","#1a100c","#f0c089",3.85,.58,t+2.5,i+3.42,e+.02)),n}function Qm(){const n=new gt;n.name="spaceport-sign";const t=17,e=-17,i=et(t,e);return n.add(x(new P(.12,3.5,.12),_.steelDark,t,i+1.75,e)),n.add(j("SPACEPORT","#1a100c","#f0c089",3.5,.85,t,i+3.45,e,.55)),n.add(j("METHALOX PAD","#1a100c","#d6b48a",3.2,.58,t,i+2.55,e,.55)),n}function t0(n,t,e,i,r,s){const a=i-t,o=r-e,l=Math.hypot(a,o),c=Math.ceil(l/6),d=Math.atan2(a,o);for(let u=0;u<c;u++){const h=(u+.5)/c,f=t+a*h,g=e+o*h,v=et(f,g),m=l/c+.35,p=x(new P(s+1.7,.055,m+.25),_.roadBed,f,v+.03,g,0,d,0);p.castShadow=!1,n.add(p);const T=x(new P(s,.08,m+.15),_.padRing,f,v+.07,g,0,d,0);T.castShadow=!1,n.add(T)}}function e0(n,t,e,i=4.2){const r=et(t,e),s=x(new it(i+.8,i+.8,.06,20),_.roadBed,t,r+.03,e);s.castShadow=!1,n.add(s);const a=x(new it(i,i,.08,20),_.graded,t,r+.07,e);a.castShadow=!1,n.add(a)}function n0(){const n=new gt;n.name="roads";const t=[[0,18,0,-124,5.2],[0,-40,84,-42,4.6],[0,-40,-68,-16,4.6],[0,-92,-56,-154,4],[16,-72,48,-86,3.6],[12,8,50,22,4.2],[16,28,22,78,3.5],[-58,-158,-90,-190,3.6],[-14,-104,-32,-98,3.4],[84,-42,112,-83,3.6],[0,-108,22,-112,3.6],[22,-112,48,-86,3.4],[-6,-116,-18,-138,3.2],[0,8,-15,-8,3.4],[16,28,36,72,3.8],[0,18,-24,44,3.8],[-58,-158,-64,-90,4.2],[-64,-90,-68,-16,4.2],[-18,-138,-32,-148,3.2],[-32,-98,-46,-100,3.4],[0,18,-48,68,3.8],[16,28,78,56,3.8],[-6,-116,-13,-134,3.4],[22,-112,38,-126,3.4],[-58,-158,-60,-148,3.2],[-64,-118,-18,-88,3.6],[84,-42,68,-10,3.4],[-6,-108,-18,-88,3.2],[38,-126,8,-142,3.4],[-13,-134,8,-142,3.2],[112,-83,135,-40,3.6],[68,-10,68,6,3.2],[-13,-134,-28,-138,3],[-46,-108,-20,-132,3.2],[-6,-108,-6,-132,3.2],[-6,-96,2,-22,3.4],[-32,-98,-36,-74,3.2],[-40,-76,-32,-98,3.2],[-40,-76,-50,-72,3],[-6,-132,10,-124,3.2],[10,-124,8,-142,3],[0,8,20,8,3.4],[22,82,-16,136,3.6],[0,32,-16,136,3.4],[135,-40,158,-62,3.4],[-68,-16,-96,-16,3.6],[-58,-158,-78,-172,3.4],[48,-86,66,-74,3.4],[8,-142,18,-152,3.2],[-18,-88,18,-152,3.2]];for(const[i,r,s,a,o]of t)t0(n,i,r,s,a,o);for(const[i,r,s]of[[0,-40,5.2],[0,-108,4.4],[84,-42,4],[22,-112,3.8],[0,10,4.6],[-64,-90,4.2],[36,72,3.6],[-46,-100,3.6],[38,-126,3.6],[-18,-88,3.8],[68,-10,3.8],[-48,68,3.6],[78,56,3.6],[-13,-134,3.6],[8,-142,3.6],[135,-40,3.6],[68,6,3.6],[-36,-74,3.6],[2,-22,3.4],[-50,-72,3.4],[10,-124,3.6],[20,8,3.6],[-16,136,4.2],[158,-62,3.6],[-96,-16,3.8],[-78,-172,3.6],[66,-74,3.6],[18,-152,3.4]])e0(n,i,r,s);const e=[[3.2,-20],[-3.2,-20],[3.2,-60],[-3.2,-60],[3.2,-90],[22,-40],[42,-40],[64,-41],[-22,-32],[-44,-24],[8,-110],[16,-111],[-8,-130],[-28,-148],[-70,-172],[96,-58],[104,-72],[28,50],[32,62],[-12,30],[-20,40],[-60,-130],[-66,-70],[-66,-40],[-26,-144],[-40,-100],[-52,-108],[3.4,12],[-3.2,12],[30,-118],[38,-126],[-60,-148],[-64,-118],[-18,-88],[68,-10]];for(const[i,r]of e)Fc(n,i,r,_.flagDeposit);return n}function i0(){const n=new gt,t=[[18,-8],[-16,-6],[12,-48],[-10,-70],[6,-100],[30,-100],[-30,-20],[40,-40],[40,18],[58,32],[16,70],[28,88],[-54,-8],[-80,-176],[-96,-196],[-28,-90],[112,-80],[100,-50],[0,-40],[22,-112],[32,-112],[70,-40],[84,-44],[36,60],[-24,32],[-64,-90],[-40,-148],[-32,-156],[4,14],[-46,-108],[-46,-92],[-58,-102],[38,-126],[-18,-88],[68,-10],[-60,-148],[-64,-118],[-22,-88]];for(const[e,i]of t){const r=et(e,i);n.add(x(new it(.1,.12,5.2,6),_.steelDark,e,r+2.6,i)),n.add(x(new P(.7,.15,.35),_.glowWarm,e,r+5.3,i))}return n}function r0(){const n=new gt,t=14,e=22,i=et(t,e);n.add(x(new P(.12,3.6,.12),_.steelDark,t,i+1.8,e));const r=j("BASE ALPHA","#1a100c","#f0c089",3.8,1.05,t,i+3.55,e,.4);n.add(r);const s=j("CARGO CAMPAIGN","#1a100c","#f0c089",3.4,.7,t,i+2.55,e,.4);n.add(s);const a=j("ARCADIA PLANITIA","#1a100c","#d6b48a",3.2,.55,18,et(18,26)+2.15,26,.15);n.add(x(new P(.1,2.2,.1),_.steelDark,18,et(18,26)+1.1,26)),n.add(a);const o=20,l=36,c=et(o,l);return n.add(x(new P(.1,2.6,.1),_.steelDark,o,c+1.3,l)),n.add(j("6 SHIPS","#1a100c","#f0c089",2.6,.65,o,c+3.15,l,.25)),n.add(j("TWO WINDOWS","#1a100c","#d6b48a",2.8,.5,o,c+2.45,l,.25)),n}function je(n,t,e,i){return Math.atan2(-(i-t),e-n)}function $o(n,t){const e=new gt;e.name="window-offload";const i=[[n,t,.2],[n-1.8,t+2.1,-.3],[n+1.6,t+2.4,.7],[n-2.4,t-1.2,.15],[n+.8,t-2.2,1.1],[n-3.2,t+.6,-.4]];for(const[o,l,c]of i)Vt(e,o,l,c);Vt(e,n-4.2,t+1.4,.2,1.12),Vt(e,n-5.4,t-.6,-.15,1.05);const[r,s,a]=xn(n-1.2,t,.08);return e.add(x(new P(7.2,.12,3.8),_.steelDark,r,s,a,0,.12,0)),e.add(j("CARGO","#1a100c","#f0c089",2.4,.65,n-4.2,et(n-4.2,t+1.4)+2.4,t+1.4,.4)),e}function s0(){const n=new gt;n.name="earth-dish";const t=-32,e=-148,i=et(t,e);n.add(x(new it(8.6,8.6,.28,32),_.concrete,t,i+.1,e)),n.add(x(new it(1.45,1.85,5.4,14),_.steelDark,t,i+2.8,e)),n.add(x(new it(2.05,2.05,.42,18),_.steel,t,i+5.55,e)),n.add(x(new ie(2.15,.12,8,20),_.lattice,t,i+5.8,e,Math.PI/2,0,0)),n.add(x(new P(.32,4.4,.32),_.lattice,t-2.55,i+7.6,e)),n.add(x(new P(.32,4.4,.32),_.lattice,t+2.55,i+7.6,e)),n.add(x(new P(5.6,.32,.32),_.lattice,t,i+9.75,e));const r=new gt;r.position.set(t,i+9.5,e),r.rotation.set(-.92,.68,0);const s=x(new _e(7.6,28,16,0,Math.PI*2,0,Math.PI/2.28),_.dish,0,0,0);r.add(s);const a=x(new _e(7.72,20,10,0,Math.PI*2,0,Math.PI/2.45),_.steelDark,0,-.12,0);r.add(a);for(let d=0;d<8;d++){const u=d/8*Math.PI*2;r.add(x(new P(.07,.07,7.4),_.steelDark,0,.18,0,.12,u,0))}r.add(x(new it(.07,.07,5.4,6),_.steelDark,0,2.7,0)),r.add(x(new it(.38,.2,.75,10),_.steel,0,5.35,0)),n.add(r);const o=t-8.2,l=e-5.6,c=et(o,l);return n.add(x(new P(4.6,2.5,3.4),_.habDark,o,c+1.35,l)),n.add(x(new P(2.2,.85,1.4),_.steelDark,o+2.8,c+.55,l+.4)),n.add(j("EARTH LINK","#1a100c","#f0c089",3.6,.75,t,i+4.2,e+6.4)),n.add(j("LIGHT TIME 12 MIN","#1a100c","#d6b48a",3.9,.6,t,i+3.4,e+6.4)),n.add(j("NOT REAL-TIME","#1a100c","#d6b48a",3.3,.5,o,c+2.85,l+1.85)),n.add(x(new P(.1,2.8,.1),_.steelDark,t+6.6,i+1.4,e+5.2)),n.add(j("DSN / STARSHIP","#1a100c","#f0c089",3.2,.55,t+6.6,i+3.15,e+5.2,-.5)),n}function Cn(n,t,e,i={}){const r=new gt;r.name=i.kind==="cargo"?"cargo-haul":"ice-haul";const s=et(n,t);r.position.set(n,s,t),r.rotation.y=e,r.add(x(new P(4.2,1.25,2.2),_.rover,.2,1.45,0)),r.add(x(new P(1.55,.85,1.7),_.roverDark,1.55,2.25,0)),r.add(x(new P(2.5,.08,1.7),_.solar,.05,2.16,0)),r.add(x(new it(.06,.06,1.6,6),_.steel,1.2,2.95,0)),r.add(x(new P(1.15,.2,.32),_.steelDark,-2.45,1.02,0));const a=new it(.62,.62,.38,12),o=[[-1.35,.62,1.22],[.25,.62,1.22],[1.55,.62,1.22],[-1.35,.62,-1.22],[.25,.62,-1.22],[1.55,.62,-1.22]];for(const[d,u,h]of o)r.add(x(a,_.roverDark,d,u,h,Math.PI/2,0,0));const l=-5.7;r.add(x(new P(4.5,.22,2.4),_.steelDark,l,1.02,0));const c=[[-4.5,.52,1.22],[-6.7,.52,1.22],[-4.5,.52,-1.22],[-6.7,.52,-1.22]];for(const[d,u,h]of c)r.add(x(new it(.5,.5,.32,12),_.roverDark,d,u,h,Math.PI/2,0,0));if(i.kind==="cargo")r.add(x(new P(1.55,1.2,1.55),_.crate,l-.95,1.78,.12)),r.add(x(new P(1.55,1.2,1.55),_.crate,l+.9,1.78,-.08)),i.loaded!==!1&&r.add(x(new P(1.35,1.05,1.35),_.crate,l,2.9,.05)),r.add(j("CARGO","#1a100c","#f0c089",1.7,.42,l,2.05,1.28));else{if(r.add(x(new P(4.2,1.15,.1),_.steel,l,1.68,1.12)),r.add(x(new P(4.2,1.15,.1),_.steel,l,1.68,-1.12)),r.add(x(new P(.1,1.15,2.25),_.steel,l-2.15,1.68,0)),r.add(x(new P(.1,1.15,2.25),_.steel,l+2.15,1.68,0)),i.loaded!==!1){const d=x(new He(1.15,0),_.ice,l,1.82,0);d.scale.set(1.65,.68,.95),r.add(d),r.add(x(new He(.52,0),_.ice,l+.95,1.92,.22)),r.add(x(new He(.4,0),_.ice,l-.85,1.88,-.18))}r.add(j("ICE","#1a2830","#d6e6ef",1.35,.38,l,2.35,1.24))}return r}function Dr(n,t,e,i,r,s=16){const a=Math.atan2(i-t,r-e);for(let o=0;o<s;o++){const l=o/(s-1),c=t+(i-t)*l,d=e+(r-e)*l,u=et(c,d);for(const h of[-.7,.7]){const f=Math.cos(a)*h,g=-Math.sin(a)*h,v=x(new P(.4,.05,.9),_.track,c+f,u+.04,d+g,0,a,0);v.castShadow=!1,n.add(v)}}}function a0(){const n=new gt;n.name="haul-loop";const t=-64,e=-90,i=et(t,e);n.add(x(new P(11,.2,8.4),_.concrete,t,i+.08,e)),n.add(x(new P(2.6,3.2,2.6),_.steelDark,t+2.4,i+1.75,e-1.4)),n.add(x(new P(3.4,.18,1.3),_.steel,t+.2,i+2.35,e-1.4,0,0,.18));const r=x(new He(2.4,0),_.ice,t-2.6,i+1.15,e+1.6);r.scale.set(1.35,.7,1.15),n.add(r),n.add(x(new He(1.1,0),_.ice,t-1.2,i+.85,e+2.4)),n.add(x(new P(.22,5.6,.22),_.lattice,t+3.6,i+2.9,e+2.2)),n.add(x(new P(.22,4.2,.22),_.lattice,t+3.6,i+4.4,e+.4,.7,0,0)),n.add(x(new P(1.6,.7,.7),_.steelDark,t+3.6,i+5.5,e-.6)),n.add(j("ICE TRANSFER","#1a2830","#d6e6ef",3.5,.7,t,i+3.7,e+3.4)),n.add(j("MINE TO ISRU","#1a100c","#f0c089",3.1,.5,t,i+2.95,e+3.4));const s={x:-58,z:-158},a={x:-68,z:-16},o={x:0,z:0};return n.add(Cn(-55,-146,je(-55,-146,a.x,a.z),{kind:"ice",loaded:!0})),n.add(Cn(-61,-118,je(-61,-118,a.x,a.z),{kind:"ice",loaded:!0})),n.add(Cn(-66,-78,je(-66,-78,a.x,a.z),{kind:"ice",loaded:!0})),n.add(Cn(-68,-38,je(-68,-38,a.x,a.z),{kind:"ice",loaded:!0})),n.add(Cn(-70,-62,je(-70,-62,s.x,s.z),{kind:"ice",loaded:!1})),n.add(Cn(-50,-24,je(-50,-24,o.x,o.z),{kind:"cargo",loaded:!0})),n.add(Cn(-18,-14,je(-18,-14,12,8),{kind:"cargo",loaded:!0})),n.add(Cn(22,12,je(22,12,50,22),{kind:"cargo",loaded:!0})),Dr(n,-58,-156,-64,-92,18),Dr(n,-64,-88,-68,-20,16),Dr(n,-66,-18,-16,-10,12),Dr(n,-14,-8,20,12,10),n}function Wi(n,t,e,i,r,s=8,a=1.15,o=.16){const l=[];for(let d=0;d<=s;d++){const u=d/s,h=t+(i-t)*u,f=e+(r-e)*u,g=et(h,f)+a;l.push(new R(h,g,f)),d%2===0&&n.add(x(new P(.16,a,.16),_.steelDark,h,et(h,f)+a*.5,f))}const c=new de(new Qn(new Ui(l),s*2,o,6,!1),_.pipe);c.castShadow=!1,n.add(c)}function o0(){const n=new gt;n.name="food";const t=38,e=-126,i=et(t,e);n.add(x(new P(13.2,.25,7.6),_.concrete,t,i+.1,e));const r=new de(new it(3.55,3.55,12.4,18,1,!1,0,Math.PI),_.glass);r.rotation.z=Math.PI/2,r.position.set(t,i+3.55,e),r.castShadow=!1,n.add(r),n.add(x(new P(12.2,.1,7.2),_.solarFrame,t,i+3.6,e));for(let s=-2;s<=2;s++){n.add(x(new P(1.85,.24,5.6),_.soil,t+s*2.1,i+.34,e));for(let a=-2;a<=2;a++){const o=a%2===0?_.plant:_.plantLeaf;n.add(x(new P(1.25,.58,.72),o,t+s*2.1,i+.78,e+a*.95))}n.add(x(new P(1.5,.05,5.2),_.glowWarm,t+s*2.1,i+3.15,e))}return n.add(x(new P(1.1,1.8,.14),_.habDark,t-6.2,i+1.1,e)),n.add(x(new it(.14,.14,12,8),_.pipe,30,et(30,-119)+1.2,-119,0,0,Math.PI/2)),n.add(j("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(j("GROW FROM CO2","#1a100c","#d6b48a",3.6,.5,t,i+4.35,e+.15)),Vt(n,45,-122,.2,.9),Vt(n,46.2,-124.4,-.3,.85),n}function c0(){const n=new gt;n.name="water-loop";const t=-60,e=-148,i=et(t,e);n.add(x(new P(7.2,.22,5.4),_.concrete,t,i+.1,e)),n.add(x(new P(3.4,2.1,2.4),_.habDark,t-1.1,i+1.2,e)),n.add(x(new it(1.15,1.15,2.6,12),_.steel,t+1.8,i+1.5,e+.4)),n.add(x(new P(1.6,.7,1.2),_.ice,t+1.8,i+3.05,e+.4)),n.add(j("MELT","#1a2830","#d6e6ef",2.2,.55,t-1.1,i+1.7,e+1.35)),n.add(j("ICE","#1a2830","#d6e6ef",1.5,.42,t+1.8,i+1.7,e+1.7));const r=-64,s=-118,a=et(r,s);n.add(x(new P(7.4,.22,5.2),_.concrete,r,a+.1,s)),n.add(x(new P(3.6,2.2,2.6),_.steelDark,r,a+1.25,s)),n.add(x(new it(.55,.55,2.8,10),_.pipe,r+2.2,a+1.6,s-.6)),n.add(j("FILTER","#1a2830","#d6e6ef",2.5,.55,r,a+1.85,s+1.45));const o=-18,l=-88,c=et(o,l);return n.add(x(new P(9.2,.22,7.2),_.concrete,o,c+.1,l)),n.add(x(new it(2.15,2.15,5.6,16),_.tankO2,o-1.6,c+3,l)),n.add(x(new it(1.55,1.55,4.2,14),_.pipe,o+2.4,c+2.3,l+1.1)),n.add(j("POTABLE","#1a2830","#d6e6ef",3.2,.7,o-1.6,c+3.2,l+2.35)),n.add(j("H2O","#1a2830","#d6e6ef",1.8,.5,o+2.4,c+2.5,l+2.55)),n.add(j("ICE TO CREW","#1a100c","#f0c089",3.1,.5,o,c+6.15,l)),Wi(n,-58,-154,t,e,6,1.2,.15),Wi(n,t,e,r,s,8,1.2,.15),Wi(n,r,s,-68,-26,10,1.15,.14),Wi(n,r,s,o,l,10,1.2,.15),Wi(n,o,l,-6,-100,8,1.15,.13),n}function l0(){const n=new gt;n.name="batteries";const t=68,e=-10,i=et(t,e);n.add(x(new P(15.2,.22,7.2),_.concrete,t,i+.1,e));for(let o=0;o<6;o++){const l=t-5.5+o*2.2;n.add(x(new P(1.85,2.15,4.4),_.battery,l,i+1.25,e)),n.add(x(new P(1.7,.08,4.2),_.steel,l,i+2.38,e))}n.add(j("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(j("NIGHT STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75)),n.add(x(new it(.12,.12,18,8),_.cable,61,et(61,-14)+1.4,-14,0,0,Math.PI/2));const r=-22,s=-88,a=et(r,s);n.add(x(new P(7.2,.2,5.2),_.concrete,r,a+.1,s));for(let o=0;o<3;o++)n.add(x(new P(1.7,1.9,3.6),_.battery,r-2+o*2,a+1.15,s));return n.add(j("NIGHT","#111111","#f4e6c8",2.2,.5,r,a+2.55,s+2.7)),n.add(j("HABS","#111111","#d6b48a",1.8,.42,r,a+2.05,s+2.7)),n}function d0(n){const t=(c,d,u=1)=>n.push({type:"box",x:c,z:d,w:1.9*u,d:1.9*u}),e=(c,d,u)=>n.push({type:"cyl",x:c,z:d,r:u}),i=(c,d,u,h)=>n.push({type:"box",x:c,z:d,w:u,d:h});for(const[c,d]of[[10,8],[12.2,8.4],[10.4,10.6],[13.5,6.2],[-12,9],[-14,7.2],[8.5,-11],[6.4,-12.5]])t(c,d);for(const[c,d]of[[40,22],[38.2,24.1],[41.4,26.2],[36.5,21.4],[37.8,27.6],[34.8,24.8],[39.2,19.6],[35.4,19.2]])t(c,d);t(38.6,22.8,1.15),t(33.2,20.4,1.2),t(31.4,22.1,1.05);const r=24,s=70;for(const[c,d]of[[r,s],[r-1.8,s+2.1],[r+1.6,s+2.4],[r-2.4,s-1.2],[r+.8,s-2.2],[r-3.2,s+.6]])t(c,d);t(r-4.2,s+1.4,1.12),t(r-5.4,s-.6,1.05),t(5.4,13.2,.85);const a=-60,o=66;for(const[c,d]of[[a,o],[a-1.8,o+2.1],[a+1.6,o+2.4],[a-2.4,o-1.2],[a+.8,o-2.2],[a-3.2,o+.6]])t(c,d);t(a-4.2,o+1.4,1.12),t(a-5.4,o-.6,1.05);for(const[c,d]of[[16,14],[8,-62],[30,74],[-94,-182]])e(c,d,2.4);for(const[c,d]of[[-55,-146],[-61,-118],[-66,-78],[-68,-38],[-70,-62],[-50,-24],[-18,-14],[22,12]])e(c,d,3.4);for(const[c,d]of[[42,22],[39,26],[26,78],[26,68],[22,72],[-80,-174],[-34,-92],[-28,-104],[16,-120],[-28,128]])e(c,d,.55);for(const[c,d]of[[2.4,12.2],[-2.2,11.5],[3.8,15.6],[.6,18.2]])e(c,d,.55);i(4.3,14.8,1.4,1),i(-3.9,9.1,1.1,.8),i(5.1,16.4,1.2,.8);for(let c=0;c<8;c++)i(82.3,-22-c*6.2,50,2.6);i(54,-18,3,2.2);for(let c=0;c<4;c++)i(111.5,-74-c*6.2,30,2.6);i(96,-72,3,2.2);for(let c=0;c<5;c++)i(135.5,-28-c*6.2,30,2.6);i(120,-26,3,2.2);for(let c=0;c<5;c++)i(158.5,-48-c*6.2,30,2.6);i(146,-46,3,2.2),i(14,22,2.4,1.6),i(18,26,1.8,1.3),i(20,36,2,1.3),i(17,-17,2.4,1.6);const l=[[-108,-210],[-98,-210],[-88,-210],[-78,-210],[-68,-210],[-108,-198],[-98,-198],[-88,-198],[-78,-198],[-68,-198],[-108,-186],[-98,-186],[-88,-186],[-78,-186],[-68,-186],[-108,-174],[-98,-174],[-88,-174],[-78,-174],[-68,-174]];for(const[c,d]of l)e(c,d,.4);e(-96,-198,.7),e(-72,-204,.7),e(-104,-176,.7);for(const[c,d]of[[-90,-184],[-88.4,-182.6],[-91.2,-181.8],[-86.6,-185.2]])i(c,d,1.2,1.2);t(-84.5,-180.4,.85),t(-28,-68),t(-27,-71,1.1),t(-44,-80),t(-42.5,-68.5,.95),t(17.2,-119.4),t(18.4,-121.8,1.05),t(3.2,-118.6,.9),t(16.6,-128.8,.95),t(27.2,12.4,.9),t(12.6,13.1,.95),t(-32,124,.9),t(-30.6,126.4,.95)}function h0(){const n=new gt;n.name="hab-street";const t=et(-13,-134);n.add(x(new P(30,.2,24),_.concrete,-13,t+.06,-136)),rn(n,-20,-132,0,{airlock:!0,label:"HAB 3"}),rn(n,-6,-132,0,{airlock:!0,label:"HAB 4"}),rn(n,-13,-142,Math.PI/2,{airlock:!0,label:"HAB 5"});const e=et(-13,-132)+3.15;return n.add(x(new it(1.15,1.15,8.2,12),_.habDark,-13,e,-132,0,0,Math.PI/2)),n.add(x(new it(1.15,1.15,6.4,12),_.habDark,-13,e,-137,Math.PI/2,0,0)),n.add(j("HAB STREET","#1a100c","#f0c089",3.4,.65,-13,t+5.4,-126)),Vt(n,-26,-128,.2),Vt(n,1.2,-128.4,-.3,1.05),n}function _i(n,t,e,i,r){i==="x"?(n.push({type:"box",x:t,z:e-1.35,w:r,d:.4}),n.push({type:"box",x:t,z:e+1.35,w:r,d:.4})):(n.push({type:"box",x:t-1.35,z:e,w:.4,d:r}),n.push({type:"box",x:t+1.35,z:e,w:.4,d:r}))}function u0(n){const t=(e,i,r,s)=>n.push({type:"box",x:e,z:i,w:r,d:s});t(-6.2,0,5.2,14.8),t(6.2,0,5.2,14.8),t(0,-6.2,10,5.2),t(-4.35,5.8,6.4,5.2),t(4.35,5.8,6.4,5.2),t(0,7.15,3.8,.8),t(-1.45,7.15,.7,1.2),t(1.45,7.15,.7,1.2),t(-1.28,13,.36,12.4),t(1.28,13,.36,12.4),t(-1.45,19.2,.4,2.8),t(1.45,19.2,.4,2.8)}function f0(){const n=new gt;n.name="food-3";const t=8,e=-142,i=et(t,e);n.add(x(new P(13.2,.25,7.6),_.concrete,t,i+.1,e));const r=new de(new it(3.55,3.55,12.4,18,1,!1,0,Math.PI),_.glass);r.rotation.z=Math.PI/2,r.position.set(t,i+3.55,e),r.castShadow=!1,n.add(r),n.add(x(new P(12.2,.1,7.2),_.solarFrame,t,i+3.6,e));for(let s=-2;s<=2;s++){n.add(x(new P(1.85,.24,5.6),_.soil,t+s*2.1,i+.34,e));for(let a=-2;a<=2;a++){const o=a%2===0?_.plant:_.plantLeaf;n.add(x(new P(1.25,.58,.72),o,t+s*2.1,i+.78,e+a*.95))}n.add(x(new P(1.5,.05,5.2),_.glowWarm,t+s*2.1,i+3.15,e))}return n.add(x(new P(1.1,1.8,.14),_.habDark,t-6.2,i+1.1,e)),n.add(j("FOOD","#1a100c","#f0c089",2.8,.7,t,i+5.05,e+.15)),n.add(j("HAB STREET","#1a100c","#d6b48a",3.4,.5,t,i+4.35,e+.15)),Vt(n,15,-138,.2,.9),n}function p0(){const n=new gt;n.name="solar-3";const t=6,e=5;for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=122+a*5.4,c=-28-o*6.2,d=et(l,c);n.add(x(new P(.18,1.6,.18),_.solarFrame,l,d+.8,c)),n.add(x(new P(4.6,.08,2.3),_.solar,l,d+1.55,c,-.55,.15,0)),n.add(x(new P(4.75,.05,2.42),_.solarFrame,l,d+1.5,c,-.55,.15,0))}const[i,r,s]=xn(120,-26,.7);return n.add(x(new P(2.2,1.4,1.4),_.habDark,i,r,s)),n.add(j("POWER","#111111","#f4e6c8",2,.55,i,r+.2,s+.75)),n.add(j("FIELD 3","#111111","#d6b48a",2.2,.45,i,r+.85,s+.75)),n}function m0(){const n=new gt;n.name="batteries-2";const t=68,e=6,i=et(t,e);n.add(x(new P(15.2,.22,7.2),_.concrete,t,i+.1,e));for(let o=0;o<6;o++){const l=t-5.5+o*2.2;n.add(x(new P(1.85,2.15,4.4),_.battery,l,i+1.25,e)),n.add(x(new P(1.7,.08,4.2),_.steel,l,i+2.38,e))}n.add(j("BATTERY","#111111","#f4e6c8",3.4,.7,t,i+3.15,e+3.75)),n.add(j("CREW STORE","#111111","#d6b48a",3.5,.55,t,i+2.45,e+3.75));const r=-28,s=-138,a=et(r,s);n.add(x(new P(7.2,.2,5.2),_.concrete,r,a+.1,s));for(let o=0;o<3;o++)n.add(x(new P(1.7,1.9,3.6),_.battery,r-2+o*2,a+1.15,s));return n.add(j("NIGHT","#111111","#f4e6c8",2.2,.5,r,a+2.55,s+2.7)),n.add(j("HAB 3-5","#111111","#d6b48a",2.2,.42,r,a+2.05,s+2.7)),n}function Pn(n,t,e,i,r){const s=(t+i)*.5,a=(e+r)*.5,o=(et(t,e)+et(i,r))*.5+2.45,l=Math.hypot(i-t,r-e),c=x(new it(1.12,1.12,l,12),_.habDark,s,o,a,Math.PI/2,0,0);c.rotation.y=Math.atan2(i-t,r-e),n.add(c),n.add(x(new ie(1.18,.07,6,14),_.steel,t,o,e,Math.PI/2,0,0)),n.add(x(new ie(1.18,.07,6,14),_.steel,i,o,r,Math.PI/2,0,0))}function g0(){const n=new gt;n.name="neighborhood",Pn(n,-46,-108,-20,-132),Pn(n,-6,-108,-6,-132),Pn(n,-46,-108,-32,-98),Pn(n,-6,-96,2,-22),Pn(n,-40,-76,-32,-98),Pn(n,-40,-76,-50,-72),Pn(n,-6,-132,10,-124),Pn(n,10,-124,8,-142);const[t,e,i]=xn(-33,-120,3.4);n.add(j("PRESSURE","#1a100c","#f0c089",3.2,.55,t,e+1.2,i)),n.add(j("HAB 2-5","#1a100c","#d6b48a",2.8,.45,t,e+.55,i));const r=2,s=-22,a=et(r,s);return n.add(x(new it(1.45,1.45,2.8,12),_.habDark,r,a+1.55,s)),n.add(x(new P(1.1,1.8,.12),_.steelDark,r,a+1.5,s+1.5)),n.add(x(new ie(1.48,.08,6,14),_.steel,r,a+2.95,s,Math.PI/2,0,0)),n.add(j("CREW ACCESS","#1a100c","#f0c089",3.4,.6,r,a+3.55,s+.2)),n.add(j("TO STARSHIP","#1a100c","#d6b48a",3.1,.45,r,a+2.95,s+.2)),n}function _0(){const n=new gt;n.name="yard";const t=-36,e=-74,i=et(t,e);return n.add(x(new P(18,.22,14),_.concrete,t,i+.08,e)),rn(n,-40,-76,0,{airlock:!0,label:"HAB 6"}),rn(n,-32,-70,-.2,{onStands:!0,label:"NEXT"}),n.add(x(new P(.28,9.2,.28),_.lattice,t+6.2,i+4.7,e-3.4)),n.add(x(new P(8.4,.22,.22),_.lattice,t+2.4,i+9.2,e-3.4)),n.add(x(new it(.05,.05,6.8,6),_.cable,t-1.2,i+6.2,e-2.2)),n.add(x(new P(1.4,1.2,1.4),_.crate,t+1.6,i+8.6,e-3.2)),Vt(n,-28,-68,.2),Vt(n,-27,-71,-.4,1.1),Vt(n,-44,-80,.3),Vt(n,-42.5,-68.5,.1,.95),n.add(j("CONSTRUCTION","#1a100c","#f0c089",4,.7,t,i+4.6,e+6.4)),n.add(j("NEXT KIT","#1a100c","#d6b48a",3.2,.5,t,i+3.9,e+6.4)),n}function x0(){const n=new gt;n.name="crew-ops";const t=-50,e=-72,i=et(t,e);return n.add(x(new P(12,.2,10),_.concrete,t,i+.08,e)),rn(n,t,e,Math.PI/2,{r:2.2,len:7.6,airlock:!0,label:"MED"}),n.add(j("CREW OPS","#1a100c","#f0c089",3.4,.6,t,i+5.35,e+.2)),n.add(j("MEDICAL","#1a100c","#d6b48a",3,.45,t,i+4.75,e+.2)),Vt(n,-55.2,-76.4,.2,.9),Vt(n,-44.8,-68.6,-.25,.95),n}function v0(){const n=new gt;n.name="commons";const t=10,e=-124,i=et(t,e);return n.add(x(new P(16,.22,12),_.concrete,t,i+.08,e)),rn(n,t,e,0,{airlock:!0,label:"MESS"}),n.add(j("CREW COMMONS","#1a100c","#f0c089",4.2,.7,t,i+6.15,e+.2)),n.add(j("FROM CARGO","#1a100c","#d6b48a",3.4,.48,t,i+5.5,e+.2)),Vt(n,17.2,-119.4,.2),Vt(n,18.4,-121.8,-.3,1.05),Vt(n,3.2,-118.6,.15,.9),Vt(n,16.6,-128.8,.4,.95),n}function M0(){const n=new gt;n.name="methalox-stock";const t=20,e=8,i=et(t,e);n.add(x(new P(16,.22,12),_.concrete,t,i+.08,e));for(let r=0;r<3;r++){const s=e-3.4+r*3.4;n.add(x(new it(1.15,1.15,6.4,16),_.tankCh4,t-3.2,i+1.45,s,0,0,Math.PI/2)),n.add(x(new it(1.15,1.15,6.4,16),_.tankO2,t+3.2,i+1.45,s,0,0,Math.PI/2))}return n.add(j("METHALOX","#1a100c","#f0c089",3.6,.7,t,i+3.55,e+6.2)),n.add(j("RETURN STOCK","#1a100c","#d6b48a",3.8,.5,t,i+2.9,e+6.2)),n.add(j("CH4","#6a2208","#f4e6c8",1.6,.42,t-3.2,i+2.85,e+3.6)),n.add(j("O2","#2a3340","#e8eef4",1.4,.42,t+3.2,i+2.85,e+3.6)),$n(n,[[20,2],[8,-2],[-8,-6],[-15,-8]],_.tankCh4,.12),Vt(n,27.2,12.4,.2,.9),Vt(n,12.6,13.1,-.25,.95),n}function S0(){const n=new gt;n.name="next-window-pad";const t=-16,e=136;n.add(Wn(t,e,{finished:!0}));const i=et(t,e);return n.add(j("NEXT WINDOW","#1a100c","#f0c089",4.6,.85,t+22,i+3.6,e+4,-.55)),n.add(j("26 MONTHS","#1a100c","#d6b48a",3.6,.55,t+22,i+2.75,e+4,-.55)),n.add(x(new P(.12,3.4,.12),_.steelDark,t+22,i+1.7,e+4)),n.add(j("PAD 2","#1a100c","#f0c089",2.4,.55,t,i+.55,e+22.4)),Vt(n,-32,124,.2,.9),Vt(n,-30.6,126.4,-.25,.95),n}function y0(){const n=new gt;n.name="solar-4";const t=6,e=5;for(let c=0;c<t;c++)for(let d=0;d<e;d++){const u=145+c*5.4,h=-48-d*6.2,f=et(u,h);n.add(x(new P(.18,1.6,.18),_.solarFrame,u,f+.8,h)),n.add(x(new P(4.6,.08,2.3),_.solar,u,f+1.55,h,-.55,.15,0)),n.add(x(new P(4.75,.05,2.42),_.solarFrame,u,f+1.5,h,-.55,.15,0))}const[i,r,s]=xn(146,-46,.7);n.add(x(new P(2.2,1.4,1.4),_.habDark,i,r,s)),n.add(j("POWER","#111111","#f4e6c8",2,.55,i,r+.2,s+.75)),n.add(j("FIELD 4","#111111","#d6b48a",2.2,.45,i,r+.85,s+.75));const a=158,o=-28,l=et(a,o);n.add(x(new P(12,.2,7.2),_.concrete,a,l+.1,o));for(let c=0;c<5;c++)n.add(x(new P(1.7,2,4.2),_.battery,a-4+c*2,l+1.2,o));return n.add(j("NIGHT","#111111","#f4e6c8",2.2,.5,a,l+2.7,o+3.6)),n.add(j("FIELD 4","#111111","#d6b48a",2.4,.42,a,l+2.15,o+3.6)),n}function E0(){const n=new gt;n.name="isru-2";const t=-96,e=-16,i=et(t,e);return n.add(x(new P(18,.35,18),_.concrete,t,i+.12,e)),n.add(x(new it(1.55,1.7,11,12),_.steelDark,t+2.2,i+5.8,e)),n.add(x(new ie(2.15,.16,6,14),_.steel,t+2.2,i+8.8,e,Math.PI/2,0,0)),n.add(j("SABATIER","#1a100c","#f0c089",4.4,.9,t+4.2,i+7.2,e,Math.PI/2)),n.add(j("TRAIN 2","#1a100c","#d6b48a",3.2,.55,t+4.2,i+6.3,e,Math.PI/2)),n.add(x(new it(2.4,2.4,11,18),_.tankCh4,t-5.2,i+6,e+4.6,0,0,Math.PI/2)),n.add(x(new it(2.4,2.4,11,18),_.tankO2,t-5.2,i+6,e-4.4,0,0,Math.PI/2)),n.add(j("CH4","#6a2208","#f4e6c8",2.8,.8,t+.4,i+6,e+4.6)),n.add(j("O2","#2a3340","#e8eef4",2.6,.8,t+.4,i+6,e-4.4)),$n(n,[[-88,-16],[-80,-16],[-72,-16]],_.tankCh4,.14),$n(n,[[-88,-18],[-80,-20],[-72,-18]],_.steel,.12),n}function w0(){const n=new gt;n.name="ice-mine-2";const t=-78,e=-172,i=et(t,e);n.add(x(new P(8,.3,8),_.concrete,t,i+.1,e)),n.add(x(new P(.28,14,.28),_.lattice,t-2.2,i+7,e-2.2)),n.add(x(new P(.28,14,.28),_.lattice,t+2.2,i+7,e-2.2)),n.add(x(new P(.28,14,.28),_.lattice,t-2.2,i+7,e+2.2)),n.add(x(new P(.28,14,.28),_.lattice,t+2.2,i+7,e+2.2)),n.add(x(new P(5.2,.25,5.2),_.steelDark,t,i+14.2,e)),n.add(x(new it(.35,.55,9,10),_.steel,t,i+5,e)),n.add(x(new Qi(.7,1.6,8),_.soot,t,i+.9,e));const r=x(new He(4,0),_.ice,t+8.2,i+1.8,e+1.4);return r.scale.set(1.45,.75,1.2),n.add(r),n.add(x(new P(6.4,.35,1.1),_.steelDark,t+3.6,i+1.4,e,0,0,-.18)),n.add(j("ICE 2","#1a2830","#d6e6ef",2.6,.65,t,i+8.4,e+2.6)),$n(n,[[-74,-168],[-68,-150],[-64,-90],[-68,-26]],_.pipe,.13),n}function b0(){const n=new gt;n.name="workshop-2";const t=66,e=-74,i=et(t,e);n.add(x(new P(16,.28,12),_.concrete,t,i+.1,e));const r=x(new it(5.4,5.4,14,16,1,!1,0,Math.PI),_.habDark,t-1.2,i+3.1,e);return r.rotation.z=Math.PI/2,n.add(r),n.add(x(new P(.2,3.8,5.8),_.steelDark,t-8.1,i+2,e)),n.add(x(new P(.28,8.4,.28),_.lattice,t+6.4,i+4.3,e-3.6)),n.add(x(new P(7.2,.2,.2),_.lattice,t+3,i+8.5,e-3.6)),n.add(x(new P(1.5,1.1,1.5),_.crate,t+2.2,i+8,e-3.4)),Vt(n,73.2,-69.4,.2),Vt(n,74.4,-71.6,-.3,1.05),Vt(n,58.6,-68.8,.15,.9),n.add(j("WORKSHOP","#1a100c","#f0c089",3.8,.75,t,i+5.4,e+.2)),n.add(j("BAY 2","#1a100c","#d6b48a",2.6,.5,t,i+4.7,e+.2)),n}function T0(){const n=new gt;n.name="potable";const t=18,e=-152,i=et(t,e);n.add(x(new P(14,.22,10),_.concrete,t,i+.1,e));for(let r=0;r<4;r++){const s=t-4.5+r*3;n.add(x(new it(1.15,1.15,6.2,14),_.pipe,s,i+1.5,e,0,0,Math.PI/2))}return n.add(j("POTABLE","#1a2830","#d6e6ef",3.4,.7,t,i+3.35,e+4.6)),n.add(j("HAB STORE","#1a2830","#d6b48a",3.2,.5,t,i+2.7,e+4.6)),$n(n,[[18,-148],[8,-142],[-6,-120],[-18,-88]],_.pipe,.12),n}const jo=new R(.55,.62,.38);function R0(){const n=new kp;Tm(n),n.add(ym(jo)),n.add(Em(jo)),n.add(xm()),n.add(vm()),n.add(wm());const t=bm();n.add(t);const e=Rm();return n.add(e.group),{scene:n,dust:t,settlement:e,getHeight:et}}function C0(n){const t=new Bp({canvas:n,antialias:!0,powerPreference:"high-performance"});return t.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=tc,t.outputColorSpace=Ie,t.toneMapping=nc,t.toneMappingExposure=1.05,t}function P0(n,t){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)})}export{Ui as C,Ke as P,R as V,C0 as a,P0 as b,R0 as c,A0 as d};
