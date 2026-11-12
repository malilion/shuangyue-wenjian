var Kp=0,Yu=1,Jp=2;var xf=1,yh=2,Ti=3,li=0,bn=1,Xt=2,oi=0,$i=1,Ts=2,Ku=3,Ju=4,Zp=5,Ss=100,Qp=101,$p=102,em=103,tm=104,nm=200,im=201,sm=202,rm=203,$c=204,el=205,am=206,om=207,cm=208,lm=209,hm=210,um=211,dm=212,fm=213,pm=214,tl=0,nl=1,il=2,fr=3,sl=4,rl=5,al=6,ol=7,bf=0,mm=1,gm=2,ci=0,xm=1,bm=2,vm=3,ym=4,_m=5,Mm=6,wm=7,Zu="attached",Sm="detached",vf=300,pr=301,mr=302,cl=303,ll=304,Yo=306,hi=1e3,Ai=1001,oa=1002,sn=1003,_h=1004;var ar=1005;var xn=1006,ta=1007;var ai=1008;var Pi=1009,yf=1010,_f=1011,ca=1012,Mh=1013,As=1014,Zn=1015,An=1016,wh=1017,Sh=1018,gr=1020,Mf=35902,wf=1021,Sf=1022,Un=1023,Ef=1024,Tf=1025,hr=1026,xr=1027,Eh=1028,Th=1029,Af=1030,Ah=1031;var Rh=1033,lo=33776,ho=33777,uo=33778,fo=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,xl=37808,bl=37809,vl=37810,yl=37811,_l=37812,Ml=37813,wl=37814,Sl=37815,El=37816,Tl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,po=36492,Il=36494,Ll=36495,Rf=36283,Dl=36284,Ul=36285,kl=36286,Ko=2200,Jo=2201,Em=2202,br=2300,vr=2301,xc=2302,or=2400,cr=2401,mo=2402,Ch=2500,Tm=2501,Cf=0,Zo=1,ya=2,Am=3200,Ph=3201;var Pf=0,Rm=1,Ji="",_t="srgb",an="srgb-linear",Qo="linear",mt="srgb";var Hs=7680;var Qu=519,Cm=512,Pm=513,Im=514,If=515,Lm=516,Dm=517,Um=518,km=519,Fl=35044;var $u="300 es",Ri=2e3,go=2001,Ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=1234567,na=Math.PI/180,yr=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function Ih(i,e){return(i%e+e)%e}function Fm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Nm(i,e,t){return i!==e?(t-i)/(e-i):0}function ia(i,e,t){return(1-t)*i+t*e}function Om(i,e,t,n){return ia(i,e,1-Math.exp(-t*n))}function Bm(i,e=1){return e-Math.abs(Ih(i,e*2)-e)}function zm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vm(i,e){return i+Math.random()*(e-i)}function Wm(i){return i*(.5-Math.random())}function qm(i){i!==void 0&&(ed=i);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xm(i){return i*na}function jm(i){return i*yr}function Ym(i){return(i&i-1)===0&&i!==0}function Km(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lf={DEG2RAD:na,RAD2DEG:yr,generateUUID:Qn,clamp:Ht,euclideanModulo:Ih,mapLinear:Fm,inverseLerp:Nm,lerp:ia,damp:Om,pingpong:Bm,smoothstep:zm,smootherstep:Hm,randInt:Gm,randFloat:Vm,randFloatSpread:Wm,seededRandom:qm,degToRad:Xm,radToDeg:jm,isPowerOfTwo:Ym,ceilPowerOfTwo:Km,floorPowerOfTwo:Jm,setQuaternionFromProperEuler:Zm,normalize:ft,denormalize:Jn},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=s[0],x=s[3],m=s[6],v=s[1],_=s[4],y=s[7],L=s[2],T=s[5],I=s[8];return r[0]=a*b+o*v+c*L,r[3]=a*x+o*_+c*T,r[6]=a*m+o*y+c*I,r[1]=l*b+h*v+u*L,r[4]=l*x+h*_+u*T,r[7]=l*m+h*y+u*I,r[2]=d*b+f*v+g*L,r[5]=d*x+f*_+g*T,r[8]=d*m+f*y+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bc=new Ke;function Df(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qm(){let i=la("canvas");return i.style.display="block",i}var td={};function $r(i){i in td||(td[i]=!0,console.warn(i))}function $m(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function eg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:an,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=ur(i.r),i.g=ur(i.g),i.b=ur(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?Qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nd=[.64,.33,.3,.6,.15,.06],id=[.2126,.7152,.0722],sd=[.3127,.329],rd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[an]:{primaries:nd,whitePoint:sd,transfer:Qo,toXYZ:rd,fromXYZ:ad,luminanceCoefficients:id,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:nd,whitePoint:sd,transfer:mt,toXYZ:rd,fromXYZ:ad,luminanceCoefficients:id,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var Gs,Nl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=la("canvas")),Gs.width=e.width,Gs.height=e.height;let n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ng=0,xo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vc(s[a].image)):r.push(vc(s[a]))}else r=vc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ig=0,jt=class i extends Ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=xn,a=ai,o=Un,c=Pi,l=i.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Qn(),this.name="",this.source=new xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=vf;jt.DEFAULT_ANISOTROPY=1;var ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],x=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+x)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(f+1)/2,L=(m+1)/2,T=(h+d)/4,I=(u+b)/4,P=(g+x)/4;return _>y&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=I/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=I/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((x-g)*(x-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ol=class extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new xo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bo=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bl=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let x=1-o,m=c*d+l*f+h*g+u*b,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let L=Math.sqrt(_),T=Math.atan2(L,m*v);x=Math.sin(x*T)/L,o=Math.sin(o*T)/L}let y=o*v;if(c=c*x+d*y,l=l*x+f*y,h=h*x+g*y,u=u*x+b*y,x===1-o){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yc=new R,od=new rn,gt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Da.subVectors(this.max,Gr),Vs.subVectors(e.a,Gr),Ws.subVectors(e.b,Gr),qs.subVectors(e.c,Gr),Wi.subVectors(Ws,Vs),qi.subVectors(qs,Ws),xs.subVectors(Vs,qs);let t=[0,-Wi.z,Wi.y,0,-qi.z,qi.y,0,-xs.z,xs.y,Wi.z,0,-Wi.x,qi.z,0,-qi.x,xs.z,0,-xs.x,-Wi.y,Wi.x,0,-qi.y,qi.x,0,-xs.y,xs.x,0];return!_c(t,Vs,Ws,qs,Da)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,Vs,Ws,qs,Da))?!1:(Ua.crossVectors(Wi,qi),t=[Ua.x,Ua.y,Ua.z],_c(t,Vs,Ws,qs,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yi=[new R,new R,new R,new R,new R,new R,new R,new R],Xn=new R,La=new gt,Vs=new R,Ws=new R,qs=new R,Wi=new R,qi=new R,xs=new R,Gr=new R,Da=new R,Ua=new R,bs=new R;function _c(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bs.fromArray(i,r);let o=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=e.dot(bs),l=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var sg=new gt,Vr=new R,Mc=new R,Sn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Mc)),this.expandByPoint(Vr.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new R,wc=new R,ka=new R,Xi=new R,Sc=new R,Fa=new R,Ec=new R,Rs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wc.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(wc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ka),o=Xi.dot(this.direction),c=-Xi.dot(ka),l=Xi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wc).addScaledVector(ka,d),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){Sc.subVectors(t,e),Fa.subVectors(n,e),Ec.crossVectors(Sc,Fa);let a=this.direction.dot(Ec),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);let c=o*this.direction.dot(Fa.crossVectors(Xi,Fa));if(c<0)return null;let l=o*this.direction.dot(Sc.cross(Xi));if(l<0||c+l>a)return null;let h=-o*Xi.dot(Ec);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,b,x){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,b,x)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,b,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=b,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rg,e,ag)}lookAt(e,t,n){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ji.crossVectors(n,Mn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ji.crossVectors(n,Mn)),ji.normalize(),Na.crossVectors(Mn,ji),s[0]=ji.x,s[4]=Na.x,s[8]=Mn.x,s[1]=ji.y,s[5]=Na.y,s[9]=Mn.y,s[2]=ji.z,s[6]=Na.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],x=n[10],m=n[14],v=n[3],_=n[7],y=n[11],L=n[15],T=s[0],I=s[4],P=s[8],w=s[12],M=s[1],C=s[5],k=s[9],N=s[13],X=s[2],J=s[6],U=s[10],W=s[14],H=s[3],$=s[7],re=s[11],ue=s[15];return r[0]=a*T+o*M+c*X+l*H,r[4]=a*I+o*C+c*J+l*$,r[8]=a*P+o*k+c*U+l*re,r[12]=a*w+o*N+c*W+l*ue,r[1]=h*T+u*M+d*X+f*H,r[5]=h*I+u*C+d*J+f*$,r[9]=h*P+u*k+d*U+f*re,r[13]=h*w+u*N+d*W+f*ue,r[2]=g*T+b*M+x*X+m*H,r[6]=g*I+b*C+x*J+m*$,r[10]=g*P+b*k+x*U+m*re,r[14]=g*w+b*N+x*W+m*ue,r[3]=v*T+_*M+y*X+L*H,r[7]=v*I+_*C+y*J+L*$,r[11]=v*P+_*k+y*U+L*re,r[15]=v*w+_*N+y*W+L*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],x=e[11],m=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+x*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+m*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],x=e[14],m=e[15],v=u*x*l-b*d*l+b*c*f-o*x*f-u*c*m+o*d*m,_=g*d*l-h*x*l-g*c*f+a*x*f+h*c*m-a*d*m,y=h*b*l-g*u*l+g*o*f-a*b*f-h*o*m+a*u*m,L=g*u*c-h*b*c-g*o*d+a*b*d+h*o*x-a*u*x,T=t*v+n*_+s*y+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=v*I,e[1]=(b*d*r-u*x*r-b*s*f+n*x*f+u*s*m-n*d*m)*I,e[2]=(o*x*r-b*c*r+b*s*l-n*x*l-o*s*m+n*c*m)*I,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*I,e[4]=_*I,e[5]=(h*x*r-g*d*r+g*s*f-t*x*f-h*s*m+t*d*m)*I,e[6]=(g*c*r-a*x*r-g*s*l+t*x*l+a*s*m-t*c*m)*I,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*I,e[8]=y*I,e[9]=(g*u*r-h*b*r-g*n*f+t*b*f+h*n*m-t*u*m)*I,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*m+t*o*m)*I,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*I,e[12]=L*I,e[13]=(h*b*s-g*u*s+g*n*d-t*b*d-h*n*x+t*u*x)*I,e[14]=(g*o*s-a*b*s-g*n*c+t*b*c+a*n*x-t*o*x)*I,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,x=a*u,m=o*u,v=c*l,_=c*h,y=c*u,L=n.x,T=n.y,I=n.z;return s[0]=(1-(b+m))*L,s[1]=(f+y)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+m))*T,s[6]=(x+v)*T,s[7]=0,s[8]=(g+_)*I,s[9]=(x-v)*I,s[10]=(1-(d+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Xs.set(s[0],s[1],s[2]).length(),a=Xs.set(s[4],s[5],s[6]).length(),o=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);let l=1/r,h=1/a,u=1/o;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ri){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===Ri)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===go)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ri){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h,g,b;if(o===Ri)g=(a+r)*u,b=-2*u;else if(o===go)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xs=new R,jn=new We,rg=new R(0,0,0),ag=new R(1,1,1),ji=new R,Na=new R,Mn=new R,cd=new We,ld=new rn,ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},og=0,hd=new R,js=new rn,Mi=new We,Oa=new R,Wr=new R,cg=new R,lg=new rn,ud=new R(1,0,0),dd=new R(0,1,0),fd=new R(0,0,1),pd={type:"added"},hg={type:"removed"},Ys={type:"childadded",child:null},Tc={type:"childremoved",child:null},xt=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new ui,n=new rn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ke}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(dd,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return hd.copy(e).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(dd,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Wr,Oa,this.up):Mi.lookAt(Oa,Wr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Mi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};xt.DEFAULT_UP=new R(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new R,wi=new R,Ac=new R,Si=new R,Ks=new R,Js=new R,md=new R,Rc=new R,Cc=new R,Pc=new R,Ic=new ot,Lc=new ot,Dc=new ot,Zi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yn.subVectors(s,t),wi.subVectors(n,t),Ac.subVectors(e,t);let a=Yn.dot(Yn),o=Yn.dot(wi),c=Yn.dot(Ac),l=wi.dot(wi),h=wi.dot(Ac),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(a,Si.y),c.addScaledVector(o,Si.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ic.setScalar(0),Lc.setScalar(0),Dc.setScalar(0),Ic.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ic,r.x),a.addScaledVector(Lc,r.y),a.addScaledVector(Dc,r.z),a}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),wi.subVectors(e,t),Yn.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Yn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ks.subVectors(s,n),Js.subVectors(r,n),Rc.subVectors(e,n);let c=Ks.dot(Rc),l=Js.dot(Rc);if(c<=0&&l<=0)return t.copy(n);Cc.subVectors(e,s);let h=Ks.dot(Cc),u=Js.dot(Cc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ks,a);Pc.subVectors(e,r);let f=Ks.dot(Pc),g=Js.dot(Pc);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Js,o);let x=h*g-f*u;if(x<=0&&u-h>=0&&f-g>=0)return md.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(md,o);let m=1/(x+b+d);return a=b*m,o=d*m,t.copy(n).addScaledVector(Ks,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Uc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Ih(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Uc(a,r,e+1/3),this.g=Uc(a,r,e),this.b=Uc(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=Uf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return et.fromWorkingColorSpace(nn.copy(this),e),Math.round(Ht(nn.r*255,0,255))*65536+Math.round(Ht(nn.g*255,0,255))*256+Math.round(Ht(nn.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=_t){et.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Ba);let n=ia(Yi.h,Ba.h,t),s=ia(Yi.s,Ba.s,t),r=ia(Yi.l,Ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new ge;ge.NAMES=Uf;var ug=0,vn=class extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Qn(),this.name="",this.blending=$i,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=el,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$c&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends vn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new R,za=new ce,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fl&&(e.usage=this.usage),e}};var vo=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yo=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},dg=0,Dn=new We,kc=new xt,Zs=new R,wn=new gt,qr=new gt,qt=new R,bt=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?yo:vo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(wn.min,qr.min),wn.expandByPoint(qt),qt.addVectors(wn.max,qr.max),wn.expandByPoint(qt)):(wn.expandByPoint(qr.min),wn.expandByPoint(qr.max))}wn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)qt.fromBufferAttribute(o,l),c&&(Zs.fromBufferAttribute(e,l),qt.add(Zs)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;let l=new R,h=new R,u=new R,d=new ce,f=new ce,g=new ce,b=new R,x=new R;function m(P,w,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(b),o[w].add(b),o[M].add(b),c[P].add(x),c[w].add(x),c[M].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){let M=v[P],C=M.start,k=M.count;for(let N=C,X=C+k;N<X;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new R,y=new R,L=new R,T=new R;function I(P){L.fromBufferAttribute(s,P),T.copy(L);let w=o[P];_.copy(w),_.sub(L.multiplyScalar(L.dot(w))).normalize(),y.crossVectors(T,w);let C=y.dot(c[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,C)}for(let P=0,w=v.length;P<w;++P){let M=v[P],C=M.start,k=M.count;for(let N=C,X=C+k;N<X;N+=3)I(e.getX(N+0)),I(e.getX(N+1)),I(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),x=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,x),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,x=c.length;b<x;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gd=new We,vs=new Rs,Ha=new Sn,xd=new R,Ga=new R,Va=new R,Wa=new R,Fc=new R,qa=new R,bd=new R,Xa=new R,Be=class extends xt{constructor(e=new bt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){qa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Fc.fromBufferAttribute(u,e),a?qa.addScaledVector(Fc,h):qa.addScaledVector(Fc.sub(t),h))}t.add(qa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Ha.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Ha,xd)===null||vs.origin.distanceToSquared(xd)>(e.far-e.near)**2))&&(gd.copy(r).invert(),vs.copy(e.ray).applyMatrix4(gd),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let x=d[g],m=a[x.materialIndex],v=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let y=v,L=_;y<L;y+=3){let T=o.getX(y),I=o.getX(y+1),P=o.getX(y+2);s=ja(this,m,e,n,l,h,u,T,I,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let x=g,m=b;x<m;x+=3){let v=o.getX(x),_=o.getX(x+1),y=o.getX(x+2);s=ja(this,a,e,n,l,h,u,v,_,y),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let x=d[g],m=a[x.materialIndex],v=Math.max(x.start,f.start),_=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let y=v,L=_;y<L;y+=3){let T=y,I=y+1,P=y+2;s=ja(this,m,e,n,l,h,u,T,I,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let x=g,m=b;x<m;x+=3){let v=x,_=x+1,y=x+2;s=ja(this,a,e,n,l,h,u,v,_,y),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function fg(i,e,t,n,s,r,a,o){let c;if(e.side===bn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===li,o),c===null)return null;Xa.copy(o),Xa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Xa);return l<t.near||l>t.far?null:{distance:l,point:Xa.clone(),object:i}}function ja(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ga),i.getVertexPosition(c,Va),i.getVertexPosition(l,Wa);let h=fg(i,e,t,n,Ga,Va,Wa,bd);if(h){let u=new R;Zi.getBarycoord(bd,Ga,Va,Wa,u),s&&(h.uv=Zi.getInterpolatedAttribute(s,o,c,l,u,new ce)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,o,c,l,u,new ce)),a&&(h.normal=Zi.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};Zi.getNormal(Ga,Va,Wa,d.normal),h.face=d,h.barycoord=u}return h}var at=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(b,x,m,v,_,y,L,T,I,P,w){let M=y/I,C=L/P,k=y/2,N=L/2,X=T/2,J=I+1,U=P+1,W=0,H=0,$=new R;for(let re=0;re<U;re++){let ue=re*C-N;for(let xe=0;xe<J;xe++){let He=xe*M-k;$[b]=He*v,$[x]=ue*_,$[m]=X,l.push($.x,$.y,$.z),$[b]=0,$[x]=0,$[m]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(xe/I),u.push(1-re/P),W+=1}}for(let re=0;re<P;re++)for(let ue=0;ue<I;ue++){let xe=d+ue+J*re,He=d+ue+J*(re+1),Z=d+(ue+1)+J*(re+1),ae=d+(ue+1)+J*re;c.push(xe,He,ae),c.push(He,Z,ae),H+=6}o.addGroup(f,H,w),f+=H,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _r(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=_r(i[t]);for(let s in n)e[s]=n[s]}return e}function pg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Cr={clone:_r,merge:fn},mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends vn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_o=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new R,vd=new ce,yd=new ce,Gt=class extends _o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,vd,yd),t.subVectors(yd,vd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=-90,$s=1,zl=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Qs,$s,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Qs,$s,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Qs,$s,e,t);a.layers=this.layers,this.add(a);let o=new Gt(Qs,$s,e,t);o.layers=this.layers,this.add(o);let c=new Gt(Qs,$s,e,t);c.layers=this.layers,this.add(c);let l=new Gt(Qs,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Mo=class extends jt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hl=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Mo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:oi});r.uniforms.tEquirect.value=t;let a=new Be(s,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=xn),new zl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Nc=new R,xg=new R,bg=new Ke,Kn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Nc.subVectors(n,t).cross(xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bg.getNormalMatrix(e),s=this.coplanarPoint(Nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Sn,Ya=new R,ua=class{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],b=s[10],x=s[11],m=s[12],v=s[13],_=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,x-f,y-m).normalize(),n[1].setComponents(c+r,d+l,x+f,y+m).normalize(),n[2].setComponents(c+a,d+h,x+g,y+v).normalize(),n[3].setComponents(c-a,d-h,x-g,y-v).normalize(),n[4].setComponents(c-o,d-u,x-b,y-_).normalize(),t===Ri)n[5].setComponents(c+o,d+u,x+b,y+_).normalize();else if(t===go)n[5].setComponents(o,u,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ya.x=s.normal.x>0?e.max.x:e.min.x,Ya.y=s.normal.y>0?e.max.y:e.min.y,Ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ff(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Mr=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],x=[];for(let m=0;m<h;m++){let v=m*d-a;for(let _=0;_<l;_++){let y=_*u-r;g.push(y,-v,0),b.push(0,0,1),x.push(_/o),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let _=v+l*m,y=v+l*(m+1),L=v+1+l*(m+1),T=v+1+l*m;f.push(_,y,T),f.push(y,L,T)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
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
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rg=`#ifdef USE_BATCHING
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
#endif`,Cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ug=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,Wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qg=`vec3 transformedNormal = objectNormal;
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
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
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
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
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
#endif`,b0=`struct PhysicalMaterial {
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
}`,v0=`
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C0=`#if defined( USE_POINTS_UV )
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
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sx=`float getShadowMask() {
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
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#ifdef USE_TRANSMISSION
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
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
}`,Tx=`#if DEPTH_PACKING == 3200
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
}`,Ax=`#define DISTANCE
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
}`,Rx=`#define DISTANCE
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Ux=`uniform vec3 diffuse;
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
}`,kx=`#define LAMBERT
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
}`,Fx=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Bx=`#define NORMAL
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
}`,zx=`#define NORMAL
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
}`,Hx=`#define PHONG
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
}`,Gx=`#define PHONG
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
}`,Vx=`#define STANDARD
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
}`,Wx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,Xx=`#define TOON
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
}`,jx=`uniform float size;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,Jx=`uniform vec3 color;
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
}`,Zx=`uniform float rotation;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:yg,alphahash_pars_fragment:_g,alphamap_fragment:Mg,alphamap_pars_fragment:wg,alphatest_fragment:Sg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:Ag,batching_pars_vertex:Rg,batching_vertex:Cg,begin_vertex:Pg,beginnormal_vertex:Ig,bsdfs:Lg,iridescence_fragment:Dg,bumpmap_pars_fragment:Ug,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:zg,color_pars_vertex:Hg,color_vertex:Gg,common:Vg,cube_uv_reflection_fragment:Wg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Xg,displacementmap_vertex:jg,emissivemap_fragment:Yg,emissivemap_pars_fragment:Kg,colorspace_fragment:Jg,colorspace_pars_fragment:Zg,envmap_fragment:Qg,envmap_common_pars_fragment:$g,envmap_pars_fragment:e0,envmap_pars_vertex:t0,envmap_physical_pars_fragment:d0,envmap_vertex:n0,fog_vertex:i0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:c0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:h0,lights_pars_begin:u0,lights_toon_fragment:f0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:g0,lights_physical_fragment:x0,lights_physical_pars_fragment:b0,lights_fragment_begin:v0,lights_fragment_maps:y0,lights_fragment_end:_0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:E0,map_fragment:T0,map_pars_fragment:A0,map_particle_fragment:R0,map_particle_pars_fragment:C0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:I0,morphinstance_vertex:L0,morphcolor_vertex:D0,morphnormal_vertex:U0,morphtarget_pars_vertex:k0,morphtarget_vertex:F0,normal_fragment_begin:N0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:z0,normal_vertex:H0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:W0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:X0,opaque_fragment:j0,packing:Y0,premultiplied_alpha_fragment:K0,project_vertex:J0,dithering_fragment:Z0,dithering_pars_fragment:Q0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:ex,shadowmap_pars_fragment:tx,shadowmap_pars_vertex:nx,shadowmap_vertex:ix,shadowmask_pars_fragment:sx,skinbase_vertex:rx,skinning_pars_vertex:ax,skinning_vertex:ox,skinnormal_vertex:cx,specularmap_fragment:lx,specularmap_pars_fragment:hx,tonemapping_fragment:ux,tonemapping_pars_fragment:dx,transmission_fragment:fx,transmission_pars_fragment:px,uv_pars_fragment:mx,uv_pars_vertex:gx,uv_vertex:xx,worldpos_vertex:bx,background_vert:vx,background_frag:yx,backgroundCube_vert:_x,backgroundCube_frag:Mx,cube_vert:wx,cube_frag:Sx,depth_vert:Ex,depth_frag:Tx,distanceRGBA_vert:Ax,distanceRGBA_frag:Rx,equirect_vert:Cx,equirect_frag:Px,linedashed_vert:Ix,linedashed_frag:Lx,meshbasic_vert:Dx,meshbasic_frag:Ux,meshlambert_vert:kx,meshlambert_frag:Fx,meshmatcap_vert:Nx,meshmatcap_frag:Ox,meshnormal_vert:Bx,meshnormal_frag:zx,meshphong_vert:Hx,meshphong_frag:Gx,meshphysical_vert:Vx,meshphysical_frag:Wx,meshtoon_vert:qx,meshtoon_frag:Xx,points_vert:jx,points_frag:Yx,shadow_vert:Kx,shadow_frag:Jx,sprite_vert:Zx,sprite_frag:Qx},fe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ri={basic:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:fn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:fn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:fn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:fn([fe.points,fe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:fn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:fn([fe.common,fe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:fn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:fn([fe.sprite,fe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:fn([fe.common,fe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:fn([fe.lights,fe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ri.physical={uniforms:fn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Ka={r:0,b:0,g:0},_s=new ui,$x=new We;function eb(i,e,t,n,s,r,a){let o=new ge(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function b(v){let _=!1,y=g(v);y===null?m(o,c):y&&y.isColor&&(m(y,1),_=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===Yo)?(h===void 0&&(h=new Be(new at(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:_r(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(_.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(_s)),h.material.toneMapped=et.getTransfer(y.colorSpace)!==mt,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Be(new Mr(2,2),new It({name:"BackgroundMaterial",uniforms:_r(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,_){v.getRGB(Ka,kf(i)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(o,c)},render:b,addToRenderList:x}}function tb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,C,k,N,X){let J=!1,U=u(N,k,C);r!==U&&(r=U,l(r.object)),J=f(M,N,k,X),J&&g(M,N,k,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(M,C,k,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,k){let N=k.wireframe===!0,X=n[M.id];X===void 0&&(X={},n[M.id]=X);let J=X[C.id];J===void 0&&(J={},X[C.id]=J);let U=J[N];return U===void 0&&(U=d(c()),J[N]=U),U}function d(M){let C=[],k=[],N=[];for(let X=0;X<t;X++)C[X]=0,k[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,C,k,N){let X=r.attributes,J=C.attributes,U=0,W=k.getAttributes();for(let H in W)if(W[H].location>=0){let re=X[H],ue=J[H];if(ue===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;U++}return r.attributesNum!==U||r.index!==N}function g(M,C,k,N){let X={},J=C.attributes,U=0,W=k.getAttributes();for(let H in W)if(W[H].location>=0){let re=J[H];re===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));let ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),X[H]=ue,U++}r.attributes=X,r.attributesNum=U,r.index=N}function b(){let M=r.newAttributes;for(let C=0,k=M.length;C<k;C++)M[C]=0}function x(M){m(M,0)}function m(M,C){let k=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;k[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),X[M]!==C&&(i.vertexAttribDivisor(M,C),X[M]=C)}function v(){let M=r.newAttributes,C=r.enabledAttributes;for(let k=0,N=C.length;k<N;k++)C[k]!==M[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function _(M,C,k,N,X,J,U){U===!0?i.vertexAttribIPointer(M,C,k,X,J):i.vertexAttribPointer(M,C,k,N,X,J)}function y(M,C,k,N){b();let X=N.attributes,J=k.getAttributes(),U=C.defaultAttributeValues;for(let W in J){let H=J[W];if(H.location>=0){let $=X[W];if($===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){let re=$.normalized,ue=$.itemSize,xe=e.get($);if(xe===void 0)continue;let He=xe.buffer,Z=xe.type,ae=xe.bytesPerElement,q=Z===i.INT||Z===i.UNSIGNED_INT||$.gpuType===Mh;if($.isInterleavedBufferAttribute){let F=$.data,ie=F.stride,oe=$.offset;if(F.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe,F.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let pe=0;pe<H.locationSize;pe++)x(H.location+pe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let pe=0;pe<H.locationSize;pe++)_(H.location+pe,ue/H.locationSize,Z,re,ie*ae,(oe+ue/H.locationSize*pe)*ae,q)}else{if($.isInstancedBufferAttribute){for(let F=0;F<H.locationSize;F++)m(H.location+F,$.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let F=0;F<H.locationSize;F++)x(H.location+F);i.bindBuffer(i.ARRAY_BUFFER,He);for(let F=0;F<H.locationSize;F++)_(H.location+F,ue/H.locationSize,Z,re,ue*ae,ue/H.locationSize*F*ae,q)}}else if(U!==void 0){let re=U[W];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(H.location,re);break;case 3:i.vertexAttrib3fv(H.location,re);break;case 4:i.vertexAttrib4fv(H.location,re);break;default:i.vertexAttrib1fv(H.location,re)}}}}v()}function L(){P();for(let M in n){let C=n[M];for(let k in C){let N=C[k];for(let X in N)h(N[X].object),delete N[X];delete C[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let k in C){let N=C[k];for(let X in N)h(N[X].object),delete N[X];delete C[k]}delete n[M.id]}function I(M){for(let C in n){let k=n[C];if(k[M.id]===void 0)continue;let N=k[M.id];for(let X in N)h(N[X].object),delete N[X];delete k[M.id]}}function P(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:x,disableUnusedAttributes:v}}function nb(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ib(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Un&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let P=I===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Pi&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Zn&&!P)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:L,maxSamples:T}}function sb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Kn,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,x=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!x)r?h(null):l();else{let v=r?0:n,_=v*4,y=m.clippingState||null;c.value=y,y=h(g,d,_,f);for(let L=0;L!==_;++L)y[L]=t[L];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,x=null;if(b!==0){if(x=c.value,g!==!0||x===null){let m=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<m)&&(x=new Float32Array(m));for(let _=0,y=f;_!==b;++_,y+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(x,y),x[y+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function rb(i){let e=new WeakMap;function t(a,o){return o===cl?a.mapping=pr:o===ll&&(a.mapping=mr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===cl||o===ll)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Hl(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var es=class extends _o{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lr=4,_d=[.125,.215,.35,.446,.526,.582],Es=20,Oc=new es,Md=new ge,Bc=null,zc=0,Hc=0,Gc=!1,ws=(1+Math.sqrt(5))/2,er=1/ws,wd=[new R(-ws,er,0),new R(ws,er,0),new R(-er,0,ws),new R(er,0,ws),new R(0,ws,-er),new R(0,ws,er),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,zc,Hc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:An,format:Un,colorSpace:an,depthBuffer:!1},s=Sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ab(r)),this._blurMaterial=ob(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,n,s){let o=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Md),h.toneMapping=ci,h.autoClear=!1;let f=new Yt({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new Be(new at,f),b=!1,x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,b=!0):(f.color.copy(Md),b=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):v===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let _=this._cubeSize;Ja(s,v*_,m>2?_:0,_,_),h.setRenderTarget(s),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pr||e.mapping===mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ja(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wd[(s-r-1)%wd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Be(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Es-1),b=r/g,x=isFinite(r)?1+Math.floor(h*b):Es;x>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Es}`);let m=[],v=0;for(let I=0;I<Es;++I){let P=I/b,w=Math.exp(-P*P/2);m.push(w),I===0?v+=w:I<x&&(v+=2*w)}for(let I=0;I<m.length;I++)m[I]=m[I]/v;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[s],L=3*y*(s>_-lr?s-_+lr:0),T=4*(this._cubeSize-y);Ja(t,L,T,3*y,2*y),c.setRenderTarget(t),c.render(u,Oc)}};function ab(i){let e=[],t=[],n=[],s=i,r=i-lr+1+_d.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-lr?c=_d[a-i+lr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,x=2,m=1,v=new Float32Array(b*g*f),_=new Float32Array(x*g*f),y=new Float32Array(m*g*f);for(let T=0;T<f;T++){let I=T%3*2/3-1,P=T>2?0:-1,w=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];v.set(w,b*g*T),_.set(d,x*g*T);let M=[T,T,T,T,T,T];y.set(M,m*g*T)}let L=new bt;L.setAttribute("position",new Pt(v,b)),L.setAttribute("uv",new Pt(_,x)),L.setAttribute("faceIndex",new Pt(y,m)),e.push(L),s>lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sd(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ob(i,e,t){let n=new Float32Array(Es),s=new R(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ed(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Td(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function cb(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===cl||c===ll,h=c===pr||c===mr;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new wo(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new wo(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hb(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let x=0,m=b.length;x<m;x++)e.remove(b[x])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let b=f[g];for(let x=0,m=b.length;x<m;x++)e.update(b[x],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let _=0,y=v.length;_<y;_+=3){let L=v[_+0],T=v[_+1],I=v[_+2];d.push(L,T,T,I,I,L)}}else if(g!==void 0){let v=g.array;b=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let L=_+0,T=_+1,I=_+2;d.push(L,T,T,I,I,L)}}else return;let x=new(Df(d)?yo:vo)(d,1);x.version=b;let m=r.get(u);m&&e.remove(m),r.set(u,x)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ub(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let x=0;for(let m=0;m<g;m++)x+=f[m];t.update(x,n,1)}function u(d,f,g,b){if(g===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<d.length;m++)l(d[m]/a,f[m],b[m]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*b[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function db(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fb(i,e,t){let n=new WeakMap,s=new ot;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),b===!0&&(_=3);let y=o.attributes.position.count*_,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*L*4*u),I=new bo(T,y,L,u);I.type=Zn,I.needsUpdate=!0;let P=_*4;for(let M=0;M<u;M++){let C=x[M],k=m[M],N=v[M],X=y*L*4*M;for(let J=0;J<C.count;J++){let U=J*P;f===!0&&(s.fromBufferAttribute(C,J),T[X+U+0]=s.x,T[X+U+1]=s.y,T[X+U+2]=s.z,T[X+U+3]=0),g===!0&&(s.fromBufferAttribute(k,J),T[X+U+4]=s.x,T[X+U+5]=s.y,T[X+U+6]=s.z,T[X+U+7]=0),b===!0&&(s.fromBufferAttribute(N,J),T[X+U+8]=s.x,T[X+U+9]=s.y,T[X+U+10]=s.z,T[X+U+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new ce(y,L)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function pb(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var So=class extends jt{constructor(e,t,n,s,r,a,o,c,l,h=hr){if(h!==hr&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=As),n===void 0&&h===xr&&(n=gr),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nf=new jt,Ad=new So(1,1),Of=new bo,Bf=new Bl,zf=new Mo,Rd=[],Cd=[],Pd=new Float32Array(16),Id=new Float32Array(9),Ld=new Float32Array(4);function Pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rd[s];if(r===void 0&&(r=new Float32Array(s),Rd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $o(i,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function vb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),Wt(t,n)}}function yb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Id.set(n),i.uniformMatrix3fv(this.addr,!1,Id),Wt(t,n)}}function _b(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Pd.set(n),i.uniformMatrix4fv(this.addr,!1,Pd),Wt(t,n)}}function Mb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Sb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Eb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Tb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Rb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Pb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ad.compareFunction=If,r=Ad):r=Nf,t.setTexture2D(e||r,s)}function Ib(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bf,s)}function Lb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zf,s)}function Db(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Of,s)}function Ub(i){switch(i){case 5126:return mb;case 35664:return gb;case 35665:return xb;case 35666:return bb;case 35674:return vb;case 35675:return yb;case 35676:return _b;case 5124:case 35670:return Mb;case 35667:case 35671:return wb;case 35668:case 35672:return Sb;case 35669:case 35673:return Eb;case 5125:return Tb;case 36294:return Ab;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Db}}function kb(i,e){i.uniform1fv(this.addr,e)}function Fb(i,e){let t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Nb(i,e){let t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ob(i,e){let t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Bb(i,e){let t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zb(i,e){let t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hb(i,e){let t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gb(i,e){i.uniform1iv(this.addr,e)}function Vb(i,e){i.uniform2iv(this.addr,e)}function Wb(i,e){i.uniform3iv(this.addr,e)}function qb(i,e){i.uniform4iv(this.addr,e)}function Xb(i,e){i.uniform1uiv(this.addr,e)}function jb(i,e){i.uniform2uiv(this.addr,e)}function Yb(i,e){i.uniform3uiv(this.addr,e)}function Kb(i,e){i.uniform4uiv(this.addr,e)}function Jb(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Nf,r[a])}function Zb(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bf,r[a])}function Qb(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zf,r[a])}function $b(i,e,t){let n=this.cache,s=e.length,r=$o(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Of,r[a])}function ev(i){switch(i){case 5126:return kb;case 35664:return Fb;case 35665:return Nb;case 35666:return Ob;case 35674:return Bb;case 35675:return zb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Vb;case 35668:case 35672:return Wb;case 35669:case 35673:return qb;case 5125:return Xb;case 36294:return jb;case 36295:return Yb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return $b}}var Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ub(t.type)}},Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ev(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function Dd(i,e){i.seq.push(e),i.map[e.id]=e}function tv(i,e,t){let n=i.name,s=n.length;for(Vc.lastIndex=0;;){let r=Vc.exec(n),a=Vc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Dd(t,l===void 0?new Gl(o,i,e):new Vl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Wl(o),Dd(t,u)),t=u}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);tv(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var nv=37297,iv=0;function sv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var kd=new Ke;function rv(i){et._getMatrix(kd,et.workingColorSpace,i);let e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Qo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sv(i.getShaderSource(e),a)}else return s}function av(i,e){let t=rv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ov(i,e){let t;switch(e){case xm:t="Linear";break;case bm:t="Reinhard";break;case vm:t="Cineon";break;case ym:t="ACESFilmic";break;case Mm:t="AgX";break;case wm:t="Neutral";break;case _m:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Za=new R;function cv(){et.getLuminanceCoefficients(Za);let i=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function hv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ea(i){return i!==""}function Nd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Od(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(dv,pv)}var fv=new Map;function pv(i,e){let t=Ze[e];if(t===void 0){let n=fv.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ql(t)}var mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace(mv,gv)}function gv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function bv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===mr&&(e="ENVMAP_MODE_REFRACTION"),e}function yv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bf:e="ENVMAP_BLENDING_MULTIPLY";break;case mm:e="ENVMAP_BLENDING_MIX";break;case gm:e="ENVMAP_BLENDING_ADD";break}return e}function _v(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=xv(t),l=bv(t),h=vv(t),u=yv(t),d=_v(t),f=lv(t),g=hv(r),b=s.createProgram(),x,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(x=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ci?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,av("linearToOutputTexel",t.outputColorSpace),cv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=ql(a),a=Nd(a,t),a=Od(a,t),o=ql(o),o=Nd(o,t),o=Od(o,t),a=Bd(a),o=Bd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=v+x+a,y=v+m+o,L=Ud(s,s.VERTEX_SHADER,_),T=Ud(s,s.FRAGMENT_SHADER,y);s.attachShader(b,L),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(C){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(b).trim(),N=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(T).trim(),J=!0,U=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,L,T);else{let W=Fd(s,L,"vertex"),H=Fd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+W+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||X==="")&&(U=!1);U&&(C.diagnostics={runnable:J,programLog:k,vertexShader:{log:N,prefix:x},fragmentShader:{log:X,prefix:m}})}s.deleteShader(L),s.deleteShader(T),P=new dr(s,b),w=uv(s,b)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(b,nv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=T,this}var wv=0,Xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jl(e),t.set(e,n)),n}},jl=class{constructor(e){this.id=wv++,this.code=e,this.usedTimes=0}};function Sv(i,e,t,n,s,r,a){let o=new ha,c=new Xl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return l.add(w),w===0?"uv":`uv${w}`}function x(w,M,C,k,N){let X=k.fog,J=N.geometry,U=w.isMeshStandardMaterial?k.environment:null,W=(w.isMeshStandardMaterial?t:e).get(w.envMap||U),H=W&&W.mapping===Yo?W.image.height:null,$=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let re=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ue=re!==void 0?re.length:0,xe=0;J.morphAttributes.position!==void 0&&(xe=1),J.morphAttributes.normal!==void 0&&(xe=2),J.morphAttributes.color!==void 0&&(xe=3);let He,Z,ae,q;if($){let dt=ri[$];He=dt.vertexShader,Z=dt.fragmentShader}else He=w.vertexShader,Z=w.fragmentShader,c.update(w),ae=c.getVertexShaderID(w),q=c.getFragmentShaderID(w);let F=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),oe=N.isInstancedMesh===!0,pe=N.isBatchedMesh===!0,Le=!!w.map,Ie=!!w.matcap,tt=!!W,z=!!w.aoMap,Zt=!!w.lightMap,qe=!!w.bumpMap,Xe=!!w.normalMap,ke=!!w.displacementMap,At=!!w.emissiveMap,De=!!w.metalnessMap,D=!!w.roughnessMap,S=w.anisotropy>0,j=w.clearcoat>0,te=w.dispersion>0,se=w.iridescence>0,ee=w.sheen>0,Ce=w.transmission>0,be=S&&!!w.anisotropyMap,Me=j&&!!w.clearcoatMap,it=j&&!!w.clearcoatNormalMap,le=j&&!!w.clearcoatRoughnessMap,we=se&&!!w.iridescenceMap,Ne=se&&!!w.iridescenceThicknessMap,ze=ee&&!!w.sheenColorMap,Se=ee&&!!w.sheenRoughnessMap,nt=!!w.specularMap,Je=!!w.specularColorMap,Mt=!!w.specularIntensityMap,O=Ce&&!!w.transmissionMap,me=Ce&&!!w.thicknessMap,Q=!!w.gradientMap,ne=!!w.alphaMap,_e=w.alphaTest>0,ve=!!w.alphaHash,je=!!w.extensions,Ft=ci;w.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let en={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:Z,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:pe,batchingColor:pe&&N._colorsTexture!==null,instancing:oe,instancingColor:oe&&N.instanceColor!==null,instancingMorph:oe&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:an,alphaToCoverage:!!w.alphaToCoverage,map:Le,matcap:Ie,envMap:tt,envMapMode:tt&&W.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:Zt,bumpMap:qe,normalMap:Xe,displacementMap:d&&ke,emissiveMap:At,normalMapObjectSpace:Xe&&w.normalMapType===Rm,normalMapTangentSpace:Xe&&w.normalMapType===Pf,metalnessMap:De,roughnessMap:D,anisotropy:S,anisotropyMap:be,clearcoat:j,clearcoatMap:Me,clearcoatNormalMap:it,clearcoatRoughnessMap:le,dispersion:te,iridescence:se,iridescenceMap:we,iridescenceThicknessMap:Ne,sheen:ee,sheenColorMap:ze,sheenRoughnessMap:Se,specularMap:nt,specularColorMap:Je,specularIntensityMap:Mt,transmission:Ce,transmissionMap:O,thicknessMap:me,gradientMap:Q,opaque:w.transparent===!1&&w.blending===$i&&w.alphaToCoverage===!1,alphaMap:ne,alphaTest:_e,alphaHash:ve,combine:w.combine,mapUv:Le&&b(w.map.channel),aoMapUv:z&&b(w.aoMap.channel),lightMapUv:Zt&&b(w.lightMap.channel),bumpMapUv:qe&&b(w.bumpMap.channel),normalMapUv:Xe&&b(w.normalMap.channel),displacementMapUv:ke&&b(w.displacementMap.channel),emissiveMapUv:At&&b(w.emissiveMap.channel),metalnessMapUv:De&&b(w.metalnessMap.channel),roughnessMapUv:D&&b(w.roughnessMap.channel),anisotropyMapUv:be&&b(w.anisotropyMap.channel),clearcoatMapUv:Me&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:it&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&b(w.sheenRoughnessMap.channel),specularMapUv:nt&&b(w.specularMap.channel),specularColorMapUv:Je&&b(w.specularColorMap.channel),specularIntensityMapUv:Mt&&b(w.specularIntensityMap.channel),transmissionMapUv:O&&b(w.transmissionMap.channel),thicknessMapUv:me&&b(w.thicknessMap.channel),alphaMapUv:ne&&b(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Xe||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(Le||ne),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ie,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Le&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===mt,decodeVideoTextureEmissive:At&&w.emissiveMap.isVideoTexture===!0&&et.getTransfer(w.emissiveMap.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xt,flipSided:w.side===bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:je&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&w.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return en.vertexUv1s=l.has(1),en.vertexUv2s=l.has(2),en.vertexUv3s=l.has(3),l.clear(),en}function m(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(v(M,w),_(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){let M=g[w.type],C;if(M){let k=ri[M];C=Cr.clone(k.uniforms)}else C=w.uniforms;return C}function L(w,M){let C;for(let k=0,N=h.length;k<N;k++){let X=h[k];if(X.cacheKey===M){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Mv(i,M,w,r),h.push(C)),C}function T(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function I(w){c.remove(w)}function P(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:L,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:P}}function Ev(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Tv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,b,x){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:x},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=b,m.group=x),e++,m}function o(u,d,f,g,b,x){let m=a(u,d,f,g,b,x);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(u,d,f,g,b,x){let m=a(u,d,f,g,b,x);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||Tv),n.length>1&&n.sort(d||Hd),s.length>1&&s.sort(d||Hd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Av(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gd,i.set(n,[a])):s>=r.length?(a=new Gd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ge};break;case"SpotLight":t={position:new R,direction:new R,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Cv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Pv=0;function Iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lv(i){let e=new Rv,t=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new We,a=new We;function o(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,b=0,x=0,m=0,v=0,_=0,y=0,L=0,T=0,I=0;l.sort(Iv);for(let w=0,M=l.length;w<M;w++){let C=l[w],k=C.color,N=C.intensity,X=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],N);I++}else if(C.isDirectionalLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let W=C.shadow,H=t.get(C);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=U,f++}else if(C.isSpotLight){let U=e.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(k).multiplyScalar(N),U.distance=X,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[b]=U;let W=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,W.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[b]=W.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=J,y++}b++}else if(C.isRectAreaLight){let U=e.get(C);U.color.copy(k).multiplyScalar(N),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=U,x++}else if(C.isPointLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){let W=C.shadow,H=t.get(C);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=C.shadow.matrix,_++}n.point[g]=U,g++}else if(C.isHemisphereLight){let U=e.get(C);U.skyColor.copy(C.color).multiplyScalar(N),U.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[m]=U,m++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==b||P.rectAreaLength!==x||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=x,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,P.directionalLength=f,P.pointLength=g,P.spotLength=b,P.rectAreaLength=x,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=I,n.version=Pv++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0,x=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let _=l[m];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),a.identity(),r.copy(_.matrixWorld),r.premultiply(x),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){let y=n.hemi[b];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(x),b++}}}return{setup:o,setupView:c,state:n}}function Vd(i){let e=new Lv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Dv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vd(i),e.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var da=class extends vn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yl=class extends vn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
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
}`;function Fv(i,e,t){let n=new ua,s=new ce,r=new ce,a=new ot,o=new da({depthPacking:Ph}),c=new Yl,l={},h=t.maxTextureSize,u={[li]:bn,[bn]:li,[Xt]:Xt},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Uv,fragmentShader:kv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new bt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Be(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf;let m=this.type;this.render=function(T,I,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(oi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=m!==Ti&&this.type===Ti,X=m===Ti&&this.type!==Ti;for(let J=0,U=T.length;J<U;J++){let W=T[J],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let $=H.getFrameExtents();if(s.multiply($),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||N===!0||X===!0){let ue=this.type!==Ti?{minFilter:sn,magFilter:sn}:{};H.map!==null&&H.map.dispose(),H.map=new Qt(s.x,s.y,ue),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let re=H.getViewportCount();for(let ue=0;ue<re;ue++){let xe=H.getViewport(ue);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),k.viewport(a),H.updateMatrices(W,ue),n=H.getFrustum(),y(I,P,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&v(H,P),H.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(w,M,C)};function v(T,I){let P=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qt(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,P,d,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,P,f,b,null)}function _(T,I,P,w){let M=null,C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let k=M.uuid,N=I.uuid,X=l[k];X===void 0&&(X={},l[k]=X);let J=X[N];J===void 0&&(J=M.clone(),X[N]=J,I.addEventListener("dispose",L)),M=J}if(M.visible=I.visible,M.wireframe=I.wireframe,w===Ti?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=P}return M}function y(T,I,P,w,M){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ti)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let N=e.update(T),X=T.material;if(Array.isArray(X)){let J=N.groups;for(let U=0,W=J.length;U<W;U++){let H=J[U],$=X[H.materialIndex];if($&&$.visible){let re=_(T,$,w,M);T.onBeforeShadow(i,T,I,P,N,re,H),i.renderBufferDirect(P,null,N,re,T,H),T.onAfterShadow(i,T,I,P,N,re,H)}}}else if(X.visible){let J=_(T,X,w,M);T.onBeforeShadow(i,T,I,P,N,J,null),i.renderBufferDirect(P,null,N,J,T,null),T.onAfterShadow(i,T,I,P,N,J,null)}}let k=T.children;for(let N=0,X=k.length;N<X;N++)y(k[N],I,P,w,M)}function L(T){T.target.removeEventListener("dispose",L);for(let P in l){let w=l[P],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Nv={[tl]:nl,[il]:al,[sl]:ol,[fr]:rl,[nl]:tl,[al]:il,[ol]:sl,[rl]:fr};function Ov(i,e){function t(){let O=!1,me=new ot,Q=null,ne=new ot(0,0,0,0);return{setMask:function(_e){Q!==_e&&!O&&(i.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){O=_e},setClear:function(_e,ve,je,Ft,en){en===!0&&(_e*=Ft,ve*=Ft,je*=Ft),me.set(_e,ve,je,Ft),ne.equals(me)===!1&&(i.clearColor(_e,ve,je,Ft),ne.copy(me))},reset:function(){O=!1,Q=null,ne.set(-1,0,0,0)}}}function n(){let O=!1,me=!1,Q=null,ne=null,_e=null;return{setReversed:function(ve){if(me!==ve){let je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);let Ft=_e;_e=null,this.setClear(Ft)}me=ve},getReversed:function(){return me},setTest:function(ve){ve?F(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(ve){Q!==ve&&!O&&(i.depthMask(ve),Q=ve)},setFunc:function(ve){if(me&&(ve=Nv[ve]),ne!==ve){switch(ve){case tl:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=ve}},setLocked:function(ve){O=ve},setClear:function(ve){_e!==ve&&(me&&(ve=1-ve),i.clearDepth(ve),_e=ve)},reset:function(){O=!1,Q=null,ne=null,_e=null,me=!1}}}function s(){let O=!1,me=null,Q=null,ne=null,_e=null,ve=null,je=null,Ft=null,en=null;return{setTest:function(dt){O||(dt?F(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(dt){me!==dt&&!O&&(i.stencilMask(dt),me=dt)},setFunc:function(dt,Wn,bi){(Q!==dt||ne!==Wn||_e!==bi)&&(i.stencilFunc(dt,Wn,bi),Q=dt,ne=Wn,_e=bi)},setOp:function(dt,Wn,bi){(ve!==dt||je!==Wn||Ft!==bi)&&(i.stencilOp(dt,Wn,bi),ve=dt,je=Wn,Ft=bi)},setLocked:function(dt){O=dt},setClear:function(dt){en!==dt&&(i.clearStencil(dt),en=dt)},reset:function(){O=!1,me=null,Q=null,ne=null,_e=null,ve=null,je=null,Ft=null,en=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,b=!1,x=null,m=null,v=null,_=null,y=null,L=null,T=null,I=new ge(0,0,0),P=0,w=!1,M=null,C=null,k=null,N=null,X=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,W=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=W>=2);let $=null,re={},ue=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),He=new ot().fromArray(ue),Z=new ot().fromArray(xe);function ae(O,me,Q,ne){let _e=new Uint8Array(4),ve=i.createTexture();i.bindTexture(O,ve),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<Q;je++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(me+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ve}let q={};q[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),F(i.DEPTH_TEST),a.setFunc(fr),qe(!1),Xe(Yu),F(i.CULL_FACE),z(oi);function F(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ie(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function oe(O,me){return u[O]!==me?(i.bindFramebuffer(O,me),u[O]=me,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function pe(O,me){let Q=f,ne=!1;if(O){Q=d.get(me),Q===void 0&&(Q=[],d.set(me,Q));let _e=O.textures;if(Q.length!==_e.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,je=_e.length;ve<je;ve++)Q[ve]=i.COLOR_ATTACHMENT0+ve;Q.length=_e.length,ne=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ne=!0);ne&&i.drawBuffers(Q)}function Le(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Ie={[Ss]:i.FUNC_ADD,[Qp]:i.FUNC_SUBTRACT,[$p]:i.FUNC_REVERSE_SUBTRACT};Ie[em]=i.MIN,Ie[tm]=i.MAX;let tt={[nm]:i.ZERO,[im]:i.ONE,[sm]:i.SRC_COLOR,[$c]:i.SRC_ALPHA,[hm]:i.SRC_ALPHA_SATURATE,[cm]:i.DST_COLOR,[am]:i.DST_ALPHA,[rm]:i.ONE_MINUS_SRC_COLOR,[el]:i.ONE_MINUS_SRC_ALPHA,[lm]:i.ONE_MINUS_DST_COLOR,[om]:i.ONE_MINUS_DST_ALPHA,[um]:i.CONSTANT_COLOR,[dm]:i.ONE_MINUS_CONSTANT_COLOR,[fm]:i.CONSTANT_ALPHA,[pm]:i.ONE_MINUS_CONSTANT_ALPHA};function z(O,me,Q,ne,_e,ve,je,Ft,en,dt){if(O===oi){b===!0&&(ie(i.BLEND),b=!1);return}if(b===!1&&(F(i.BLEND),b=!0),O!==Zp){if(O!==x||dt!==w){if((m!==Ss||y!==Ss)&&(i.blendEquation(i.FUNC_ADD),m=Ss,y=Ss),dt)switch(O){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ts:i.blendFunc(i.ONE,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ts:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ju:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,_=null,L=null,T=null,I.set(0,0,0),P=0,x=O,w=dt}return}_e=_e||me,ve=ve||Q,je=je||ne,(me!==m||_e!==y)&&(i.blendEquationSeparate(Ie[me],Ie[_e]),m=me,y=_e),(Q!==v||ne!==_||ve!==L||je!==T)&&(i.blendFuncSeparate(tt[Q],tt[ne],tt[ve],tt[je]),v=Q,_=ne,L=ve,T=je),(Ft.equals(I)===!1||en!==P)&&(i.blendColor(Ft.r,Ft.g,Ft.b,en),I.copy(Ft),P=en),x=O,w=!1}function Zt(O,me){O.side===Xt?ie(i.CULL_FACE):F(i.CULL_FACE);let Q=O.side===bn;me&&(Q=!Q),qe(Q),O.blending===$i&&O.transparent===!1?z(oi):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ne=O.stencilWrite;o.setTest(ne),ne&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),At(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?F(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function Xe(O){O!==Kp?(F(i.CULL_FACE),O!==C&&(O===Yu?i.cullFace(i.BACK):O===Jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),C=O}function ke(O){O!==k&&(U&&i.lineWidth(O),k=O)}function At(O,me,Q){O?(F(i.POLYGON_OFFSET_FILL),(N!==me||X!==Q)&&(i.polygonOffset(me,Q),N=me,X=Q)):ie(i.POLYGON_OFFSET_FILL)}function De(O){O?F(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function D(O){O===void 0&&(O=i.TEXTURE0+J-1),$!==O&&(i.activeTexture(O),$=O)}function S(O,me,Q){Q===void 0&&($===null?Q=i.TEXTURE0+J-1:Q=$);let ne=re[Q];ne===void 0&&(ne={type:void 0,texture:void 0},re[Q]=ne),(ne.type!==O||ne.texture!==me)&&($!==Q&&(i.activeTexture(Q),$=Q),i.bindTexture(O,me||q[O]),ne.type=O,ne.texture=me)}function j(){let O=re[$];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(O){He.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),He.copy(O))}function Se(O){Z.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Z.copy(O))}function nt(O,me){let Q=l.get(me);Q===void 0&&(Q=new WeakMap,l.set(me,Q));let ne=Q.get(O);ne===void 0&&(ne=i.getUniformBlockIndex(me,O.name),Q.set(O,ne))}function Je(O,me){let ne=l.get(me).get(O);c.get(me)!==ne&&(i.uniformBlockBinding(me,ne,O.__bindingPointIndex),c.set(me,ne))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,re={},u={},d=new WeakMap,f=[],g=null,b=!1,x=null,m=null,v=null,_=null,y=null,L=null,T=null,I=new ge(0,0,0),P=0,w=!1,M=null,C=null,k=null,N=null,X=null,He.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:F,disable:ie,bindFramebuffer:oe,drawBuffers:pe,useProgram:Le,setBlending:z,setMaterial:Zt,setFlipSided:qe,setCullFace:Xe,setLineWidth:ke,setPolygonOffset:At,setScissorTest:De,activeTexture:D,bindTexture:S,unbindTexture:j,compressedTexImage2D:te,compressedTexImage3D:se,texImage2D:we,texImage3D:Ne,updateUBOMapping:nt,uniformBlockBinding:Je,texStorage2D:it,texStorage3D:le,texSubImage2D:ee,texSubImage3D:Ce,compressedTexSubImage2D:be,compressedTexSubImage3D:Me,scissor:ze,viewport:Se,reset:Mt}}function Wd(i,e,t,n){let s=Bv(n);switch(t){case wf:return i*e;case Ef:return i*e;case Tf:return i*e*2;case Eh:return i*e/s.components*s.byteLength;case Th:return i*e/s.components*s.byteLength;case Af:return i*e*2/s.components*s.byteLength;case Ah:return i*e*2/s.components*s.byteLength;case Sf:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Rh:return i*e*4/s.components*s.byteLength;case lo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:case fl:return Math.max(i,16)*Math.max(e,8)/4;case hl:case dl:return Math.max(i,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case po:case Il:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rf:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ul:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bv(i){switch(i){case Pi:case yf:return{byteLength:1,components:1};case ca:case _f:case An:return{byteLength:2,components:1};case wh:case Sh:return{byteLength:2,components:4};case As:case Mh:case Zn:return{byteLength:4,components:1};case Mf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function zv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,S){return f?new OffscreenCanvas(D,S):la("canvas")}function b(D,S,j){let te=1,se=De(D);if((se.width>j||se.height>j)&&(te=j/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ee=Math.floor(te*se.width),Ce=Math.floor(te*se.height);u===void 0&&(u=g(ee,Ce));let be=S?g(ee,Ce):u;return be.width=ee,be.height=Ce,be.getContext("2d").drawImage(D,0,0,ee,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+Ce+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function x(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,S,j,te,se=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=S;if(S===i.RED&&(j===i.FLOAT&&(ee=i.R32F),j===i.HALF_FLOAT&&(ee=i.R16F),j===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ee=i.R8UI),j===i.UNSIGNED_SHORT&&(ee=i.R16UI),j===i.UNSIGNED_INT&&(ee=i.R32UI),j===i.BYTE&&(ee=i.R8I),j===i.SHORT&&(ee=i.R16I),j===i.INT&&(ee=i.R32I)),S===i.RG&&(j===i.FLOAT&&(ee=i.RG32F),j===i.HALF_FLOAT&&(ee=i.RG16F),j===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ee=i.RG8UI),j===i.UNSIGNED_SHORT&&(ee=i.RG16UI),j===i.UNSIGNED_INT&&(ee=i.RG32UI),j===i.BYTE&&(ee=i.RG8I),j===i.SHORT&&(ee=i.RG16I),j===i.INT&&(ee=i.RG32I)),S===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),j===i.UNSIGNED_INT&&(ee=i.RGB32UI),j===i.BYTE&&(ee=i.RGB8I),j===i.SHORT&&(ee=i.RGB16I),j===i.INT&&(ee=i.RGB32I)),S===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),j===i.UNSIGNED_INT&&(ee=i.RGBA32UI),j===i.BYTE&&(ee=i.RGBA8I),j===i.SHORT&&(ee=i.RGBA16I),j===i.INT&&(ee=i.RGBA32I)),S===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),S===i.RGBA){let Ce=se?Qo:et.getTransfer(te);j===i.FLOAT&&(ee=i.RGBA32F),j===i.HALF_FLOAT&&(ee=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ee=Ce===mt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(D,S){let j;return D?S===null||S===As||S===gr?j=i.DEPTH24_STENCIL8:S===Zn?j=i.DEPTH32F_STENCIL8:S===ca&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===As||S===gr?j=i.DEPTH_COMPONENT24:S===Zn?j=i.DEPTH_COMPONENT32F:S===ca&&(j=i.DEPTH_COMPONENT16),j}function L(D,S){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==sn&&D.minFilter!==xn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function T(D){let S=D.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&h.delete(S)}function I(D){let S=D.target;S.removeEventListener("dispose",I),M(S)}function P(D){let S=n.get(D);if(S.__webglInit===void 0)return;let j=D.source,te=d.get(j);if(te){let se=te[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(D),Object.keys(te).length===0&&d.delete(j)}n.remove(D)}function w(D){let S=n.get(D);i.deleteTexture(S.__webglTexture);let j=D.source,te=d.get(j);delete te[S.__cacheKey],a.memory.textures--}function M(D){let S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let se=0;se<S.__webglFramebuffer[te].length;se++)i.deleteFramebuffer(S.__webglFramebuffer[te][se]);else i.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let j=D.textures;for(let te=0,se=j.length;te<se;te++){let ee=n.get(j[te]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(j[te])}n.remove(D)}let C=0;function k(){C=0}function N(){let D=C;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),C+=1,D}function X(D){let S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function J(D,S){let j=n.get(D);if(D.isVideoTexture&&ke(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){let te=D.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(j,D,S);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+S)}function U(D,S){let j=n.get(D);if(D.version>0&&j.__version!==D.version){Z(j,D,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+S)}function W(D,S){let j=n.get(D);if(D.version>0&&j.__version!==D.version){Z(j,D,S);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+S)}function H(D,S){let j=n.get(D);if(D.version>0&&j.__version!==D.version){ae(j,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+S)}let $={[hi]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},re={[sn]:i.NEAREST,[_h]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ue={[Cm]:i.NEVER,[km]:i.ALWAYS,[Pm]:i.LESS,[If]:i.LEQUAL,[Im]:i.EQUAL,[Um]:i.GEQUAL,[Lm]:i.GREATER,[Dm]:i.NOTEQUAL};function xe(D,S){if(S.type===Zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===xn||S.magFilter===ta||S.magFilter===ar||S.magFilter===ai||S.minFilter===xn||S.minFilter===ta||S.minFilter===ar||S.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,$[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,re[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==ar&&S.minFilter!==ai||S.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function He(D,S){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",T));let te=S.source,se=d.get(te);se===void 0&&(se={},d.set(te,se));let ee=X(S);if(ee!==D.__cacheKey){se[ee]===void 0&&(se[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),se[ee].usedTimes++;let Ce=se[D.__cacheKey];Ce!==void 0&&(se[D.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(S)),D.__cacheKey=ee,D.__webglTexture=se[ee].texture}return j}function Z(D,S,j){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);let se=He(D,S),ee=S.source;t.bindTexture(te,D.__webglTexture,i.TEXTURE0+j);let Ce=n.get(ee);if(ee.version!==Ce.__version||se===!0){t.activeTexture(i.TEXTURE0+j);let be=et.getPrimaries(et.workingColorSpace),Me=S.colorSpace===Ji?null:et.getPrimaries(S.colorSpace),it=S.colorSpace===Ji||be===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let le=b(S.image,!1,s.maxTextureSize);le=At(S,le);let we=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),ze=_(S.internalFormat,we,Ne,S.colorSpace,S.isVideoTexture);xe(te,S);let Se,nt=S.mipmaps,Je=S.isVideoTexture!==!0,Mt=Ce.__version===void 0||se===!0,O=ee.dataReady,me=L(S,le);if(S.isDepthTexture)ze=y(S.format===xr,S.type),Mt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,ze,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,ze,le.width,le.height,0,we,Ne,null));else if(S.isDataTexture)if(nt.length>0){Je&&Mt&&t.texStorage2D(i.TEXTURE_2D,me,ze,nt[0].width,nt[0].height);for(let Q=0,ne=nt.length;Q<ne;Q++)Se=nt[Q],Je?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Se.width,Se.height,we,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,Q,ze,Se.width,Se.height,0,we,Ne,Se.data);S.generateMipmaps=!1}else Je?(Mt&&t.texStorage2D(i.TEXTURE_2D,me,ze,le.width,le.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,we,Ne,le.data)):t.texImage2D(i.TEXTURE_2D,0,ze,le.width,le.height,0,we,Ne,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ze,nt[0].width,nt[0].height,le.depth);for(let Q=0,ne=nt.length;Q<ne;Q++)if(Se=nt[Q],S.format!==Un)if(we!==null)if(Je){if(O)if(S.layerUpdates.size>0){let _e=Wd(Se.width,Se.height,S.format,S.type);for(let ve of S.layerUpdates){let je=Se.data.subarray(ve*_e/Se.data.BYTES_PER_ELEMENT,(ve+1)*_e/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ve,Se.width,Se.height,1,we,je)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Se.width,Se.height,le.depth,we,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ze,Se.width,Se.height,le.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Se.width,Se.height,le.depth,we,Ne,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ze,Se.width,Se.height,le.depth,0,we,Ne,Se.data)}else{Je&&Mt&&t.texStorage2D(i.TEXTURE_2D,me,ze,nt[0].width,nt[0].height);for(let Q=0,ne=nt.length;Q<ne;Q++)Se=nt[Q],S.format!==Un?we!==null?Je?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ze,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Se.width,Se.height,we,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,Q,ze,Se.width,Se.height,0,we,Ne,Se.data)}else if(S.isDataArrayTexture)if(Je){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ze,le.width,le.height,le.depth),O)if(S.layerUpdates.size>0){let Q=Wd(le.width,le.height,S.format,S.type);for(let ne of S.layerUpdates){let _e=le.data.subarray(ne*Q/le.data.BYTES_PER_ELEMENT,(ne+1)*Q/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,we,Ne,_e)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,we,Ne,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,le.width,le.height,le.depth,0,we,Ne,le.data);else if(S.isData3DTexture)Je?(Mt&&t.texStorage3D(i.TEXTURE_3D,me,ze,le.width,le.height,le.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,we,Ne,le.data)):t.texImage3D(i.TEXTURE_3D,0,ze,le.width,le.height,le.depth,0,we,Ne,le.data);else if(S.isFramebufferTexture){if(Mt)if(Je)t.texStorage2D(i.TEXTURE_2D,me,ze,le.width,le.height);else{let Q=le.width,ne=le.height;for(let _e=0;_e<me;_e++)t.texImage2D(i.TEXTURE_2D,_e,ze,Q,ne,0,we,Ne,null),Q>>=1,ne>>=1}}else if(nt.length>0){if(Je&&Mt){let Q=De(nt[0]);t.texStorage2D(i.TEXTURE_2D,me,ze,Q.width,Q.height)}for(let Q=0,ne=nt.length;Q<ne;Q++)Se=nt[Q],Je?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,we,Ne,Se):t.texImage2D(i.TEXTURE_2D,Q,ze,we,Ne,Se);S.generateMipmaps=!1}else if(Je){if(Mt){let Q=De(le);t.texStorage2D(i.TEXTURE_2D,me,ze,Q.width,Q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ne,le)}else t.texImage2D(i.TEXTURE_2D,0,ze,we,Ne,le);x(S)&&m(te),Ce.__version=ee.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ae(D,S,j){if(S.image.length!==6)return;let te=He(D,S),se=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+j);let ee=n.get(se);if(se.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+j);let Ce=et.getPrimaries(et.workingColorSpace),be=S.colorSpace===Ji?null:et.getPrimaries(S.colorSpace),Me=S.colorSpace===Ji||Ce===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let it=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,we=[];for(let ne=0;ne<6;ne++)!it&&!le?we[ne]=b(S.image[ne],!0,s.maxCubemapSize):we[ne]=le?S.image[ne].image:S.image[ne],we[ne]=At(S,we[ne]);let Ne=we[0],ze=r.convert(S.format,S.colorSpace),Se=r.convert(S.type),nt=_(S.internalFormat,ze,Se,S.colorSpace),Je=S.isVideoTexture!==!0,Mt=ee.__version===void 0||te===!0,O=se.dataReady,me=L(S,Ne);xe(i.TEXTURE_CUBE_MAP,S);let Q;if(it){Je&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,nt,Ne.width,Ne.height);for(let ne=0;ne<6;ne++){Q=we[ne].mipmaps;for(let _e=0;_e<Q.length;_e++){let ve=Q[_e];S.format!==Un?ze!==null?Je?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,ve.width,ve.height,ze,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,nt,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,ve.width,ve.height,ze,Se,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,nt,ve.width,ve.height,0,ze,Se,ve.data)}}}else{if(Q=S.mipmaps,Je&&Mt){Q.length>0&&me++;let ne=De(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,nt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){Je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,we[ne].width,we[ne].height,ze,Se,we[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,nt,we[ne].width,we[ne].height,0,ze,Se,we[ne].data);for(let _e=0;_e<Q.length;_e++){let je=Q[_e].image[ne].image;Je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,je.width,je.height,ze,Se,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,nt,je.width,je.height,0,ze,Se,je.data)}}else{Je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ze,Se,we[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,nt,ze,Se,we[ne]);for(let _e=0;_e<Q.length;_e++){let ve=Q[_e];Je?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,ze,Se,ve.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,nt,ze,Se,ve.image[ne])}}}x(S)&&m(i.TEXTURE_CUBE_MAP),ee.__version=se.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function q(D,S,j,te,se,ee){let Ce=r.convert(j.format,j.colorSpace),be=r.convert(j.type),Me=_(j.internalFormat,Ce,be,j.colorSpace),it=n.get(S),le=n.get(j);if(le.__renderTarget=S,!it.__hasExternalTextures){let we=Math.max(1,S.width>>ee),Ne=Math.max(1,S.height>>ee);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ee,Me,we,Ne,S.depth,0,Ce,be,null):t.texImage2D(se,ee,Me,we,Ne,0,Ce,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,se,le.__webglTexture,0,qe(S)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,se,le.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(D,S,j){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){let te=S.depthTexture,se=te&&te.isDepthTexture?te.type:null,ee=y(S.stencilBuffer,se),Ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=qe(S);Xe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ee,S.width,S.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ee,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,D)}else{let te=S.textures;for(let se=0;se<te.length;se++){let ee=te[se],Ce=r.convert(ee.format,ee.colorSpace),be=r.convert(ee.type),Me=_(ee.internalFormat,Ce,be,ee.colorSpace),it=qe(S);j&&Xe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Me,S.width,S.height):Xe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(S.depthTexture);te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);let se=te.__webglTexture,ee=qe(S);if(S.depthTexture.format===hr)Xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(S.depthTexture.format===xr)Xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function oe(D){let S=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){let te=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){let se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=te}if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ie(S.__webglFramebuffer,D)}else if(j){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=i.createRenderbuffer(),F(S.__webglDepthbuffer[te],D,!1);else{let se=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),F(S.__webglDepthbuffer,D,!1);else{let te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(D,S,j){let te=n.get(D);S!==void 0&&q(te.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&oe(D)}function Le(D){let S=D.texture,j=n.get(D),te=n.get(S);D.addEventListener("dispose",I);let se=D.textures,ee=D.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,a.memory.textures++),ee){j.__webglFramebuffer=[];for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[be]=[];for(let Me=0;Me<S.mipmaps.length;Me++)j.__webglFramebuffer[be][Me]=i.createFramebuffer()}else j.__webglFramebuffer[be]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)j.__webglFramebuffer[be]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let be=0,Me=se.length;be<Me;be++){let it=n.get(se[be]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Xe(D)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let be=0;be<se.length;be++){let Me=se[be];j.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[be]);let it=r.convert(Me.format,Me.colorSpace),le=r.convert(Me.type),we=_(Me.internalFormat,it,le,Me.colorSpace,D.isXRRenderTarget===!0),Ne=qe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,we,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,j.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),F(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),xe(i.TEXTURE_CUBE_MAP,S);for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)q(j.__webglFramebuffer[be][Me],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Me);else q(j.__webglFramebuffer[be],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let be=0,Me=se.length;be<Me;be++){let it=se[be],le=n.get(it);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),xe(i.TEXTURE_2D,it),q(j.__webglFramebuffer,D,it,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),x(it)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,te.__webglTexture),xe(be,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)q(j.__webglFramebuffer[Me],D,S,i.COLOR_ATTACHMENT0,be,Me);else q(j.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,be,0);x(S)&&m(be),t.unbindTexture()}D.depthBuffer&&oe(D)}function Ie(D){let S=D.textures;for(let j=0,te=S.length;j<te;j++){let se=S[j];if(x(se)){let ee=v(D),Ce=n.get(se).__webglTexture;t.bindTexture(ee,Ce),m(ee),t.unbindTexture()}}}let tt=[],z=[];function Zt(D){if(D.samples>0){if(Xe(D)===!1){let S=D.textures,j=D.width,te=D.height,se=i.COLOR_BUFFER_BIT,ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(D),be=S.length>1;if(be)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);let it=n.get(S[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,j,te,0,0,j,te,se,i.NEAREST),c===!0&&(tt.length=0,z.length=0,tt.push(i.COLOR_ATTACHMENT0+Me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(tt.push(ee),z.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);let it=n.get(S[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function qe(D){return Math.min(s.maxSamples,D.samples)}function Xe(D){let S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(D){let S=a.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function At(D,S){let j=D.colorSpace,te=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==an&&j!==Ji&&(et.getTransfer(j)===mt?(te!==Un||se!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function De(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=pe,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Xe}function Hv(i,e){function t(n,s=Ji){let r,a=et.getTransfer(s);if(n===Pi)return i.UNSIGNED_BYTE;if(n===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yf)return i.BYTE;if(n===_f)return i.SHORT;if(n===ca)return i.UNSIGNED_SHORT;if(n===Mh)return i.INT;if(n===As)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===wf)return i.ALPHA;if(n===Sf)return i.RGB;if(n===Un)return i.RGBA;if(n===Ef)return i.LUMINANCE;if(n===Tf)return i.LUMINANCE_ALPHA;if(n===hr)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===Eh)return i.RED;if(n===Th)return i.RED_INTEGER;if(n===Af)return i.RG;if(n===Ah)return i.RG_INTEGER;if(n===Rh)return i.RGBA_INTEGER;if(n===lo||n===ho||n===uo||n===fo)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pl||n===ml)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xl||n===bl||n===vl||n===yl||n===_l||n===Ml||n===wl||n===Sl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===Il||n===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rf||n===Dl||n===Ul||n===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Kl=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ve=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gv={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let x=t.getJointPose(b,n),m=this._getHandJoint(l,b);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
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

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:Vv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends Ii{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=new Jl,x=t.getContextAttributes(),m=null,v=null,_=[],y=[],L=new ce,T=null,I=new Gt;I.viewport=new ot;let P=new Gt;P.viewport=new ot;let w=[I,P],M=new Kl,C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=_[Z];return ae===void 0&&(ae=new sa,_[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=_[Z];return ae===void 0&&(ae=new sa,_[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=_[Z];return ae===void 0&&(ae=new sa,_[Z]=ae),ae.getHandSpace()};function N(Z){let ae=y.indexOf(Z.inputSource);if(ae===-1)return;let q=_[ae];q!==void 0&&(q.update(Z.inputSource,Z.frame,l||a),q.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<_.length;Z++){let ae=y[Z];ae!==null&&(y[Z]=null,_[Z].disconnect(ae))}C=null,k=null,b.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qt(f.framebufferWidth,f.framebufferHeight,{format:Un,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ae=null,q=null,F=null;x.depth&&(F=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?xr:hr,q=x.stencil?gr:As);let ie={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Qt(d.textureWidth,d.textureHeight,{format:Un,type:Pi,depthTexture:new So(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function J(Z){for(let ae=0;ae<Z.removed.length;ae++){let q=Z.removed[ae],F=y.indexOf(q);F>=0&&(y[F]=null,_[F].disconnect(q))}for(let ae=0;ae<Z.added.length;ae++){let q=Z.added[ae],F=y.indexOf(q);if(F===-1){for(let oe=0;oe<_.length;oe++)if(oe>=y.length){y.push(q),F=oe;break}else if(y[oe]===null){y[oe]=q,F=oe;break}if(F===-1)break}let ie=_[F];ie&&ie.connect(q)}}let U=new R,W=new R;function H(Z,ae,q){U.setFromMatrixPosition(ae.matrixWorld),W.setFromMatrixPosition(q.matrixWorld);let F=U.distanceTo(W),ie=ae.projectionMatrix.elements,oe=q.projectionMatrix.elements,pe=ie[14]/(ie[10]-1),Le=ie[14]/(ie[10]+1),Ie=(ie[9]+1)/ie[5],tt=(ie[9]-1)/ie[5],z=(ie[8]-1)/ie[0],Zt=(oe[8]+1)/oe[0],qe=pe*z,Xe=pe*Zt,ke=F/(-z+Zt),At=ke*-z;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(At),Z.translateZ(ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ie[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let De=pe+ke,D=Le+ke,S=qe-At,j=Xe+(F-At),te=Ie*Le/D*De,se=tt*Le/D*De;Z.projectionMatrix.makePerspective(S,j,te,se,De,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function $(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ae=Z.near,q=Z.far;b.texture!==null&&(b.depthNear>0&&(ae=b.depthNear),b.depthFar>0&&(q=b.depthFar)),M.near=P.near=I.near=ae,M.far=P.far=I.far=q,(C!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,k=M.far),I.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,M.layers.mask=I.layers.mask|P.layers.mask;let F=Z.parent,ie=M.cameras;$(M,F);for(let oe=0;oe<ie.length;oe++)$(ie[oe],F);ie.length===2?H(M,I,P):M.projectionMatrix.copy(I.projectionMatrix),re(Z,M,F)};function re(Z,ae,q){q===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(q.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=yr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let ue=null;function xe(Z,ae){if(h=ae.getViewerPose(l||a),g=ae,h!==null){let q=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let F=!1;q.length!==M.cameras.length&&(M.cameras.length=0,F=!0);for(let oe=0;oe<q.length;oe++){let pe=q[oe],Le=null;if(f!==null)Le=f.getViewport(pe);else{let tt=u.getViewSubImage(d,pe);Le=tt.viewport,oe===0&&(e.setRenderTargetTextures(v,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(v))}let Ie=w[oe];Ie===void 0&&(Ie=new Gt,Ie.layers.enable(oe),Ie.viewport=new ot,w[oe]=Ie),Ie.matrix.fromArray(pe.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(pe.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Le.x,Le.y,Le.width,Le.height),oe===0&&(M.matrix.copy(Ie.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),F===!0&&M.cameras.push(Ie)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")){let oe=u.getDepthInformation(q[0]);oe&&oe.isValid&&oe.texture&&b.init(e,oe,s.renderState)}}for(let q=0;q<_.length;q++){let F=y[q],ie=_[q];F!==null&&ie!==void 0&&ie.update(F,ae,l||a)}ue&&ue(Z,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}let He=new Ff;He.setAnimationLoop(xe),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}},Ms=new ui,qv=new We;function Xv(i,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,kf(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,v,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),d(x,m),m.isMeshPhysicalMaterial&&f(x,m,y)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),b(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&o(x,m)):m.isPointsMaterial?c(x,m,v,_):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===bn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===bn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let v=e.get(m),_=v.envMap,y=v.envMapRotation;_&&(x.envMap.value=_,Ms.copy(y),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),x.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(Ms)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function o(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,v,_){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*v,x.scale.value=_*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function d(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function f(x,m,v){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function b(x,m){let v=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",x));let L=_.program;n.updateUBOMapping(v,L);let T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){let _=u();v.__bindingPointIndex=_;let y=i.createBuffer(),L=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],y=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,I=y.length;T<I;T++){let P=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,M=P.length;w<M;w++){let C=P[w];if(f(C,T,w,L)===!0){let k=C.__offset,N=Array.isArray(C.value)?C.value:[C.value],X=0;for(let J=0;J<N.length;J++){let U=N[J],W=b(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,k+X,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,X),X+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,y,L){let T=v.value,I=_+"_"+y;if(L[I]===void 0)return typeof T=="number"||typeof T=="boolean"?L[I]=T:L[I]=T.clone(),!0;{let P=L[I];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[I]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){let _=v.uniforms,y=0,L=16;for(let I=0,P=_.length;I<P;I++){let w=Array.isArray(_[I])?_[I]:[_[I]];for(let M=0,C=w.length;M<C;M++){let k=w[M],N=Array.isArray(k.value)?k.value:[k.value];for(let X=0,J=N.length;X<J;X++){let U=N[X],W=b(U),H=y%L,$=H%W.boundary,re=H+$;y+=$,re!==0&&L-re<W.storage&&(y+=L-re),k.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=W.storage}}}let T=y%L;return T>0&&(y+=L-T),v.__size=y,v.__cache={},this}function b(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function x(v){let _=v.target;_.removeEventListener("dispose",x);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Eo=class{constructor(e={}){let{canvas:t=Qm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),b=new Int32Array(4),x=null,m=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=ci,this.toneMappingExposure=1;let y=this,L=!1,T=0,I=0,P=null,w=-1,M=null,C=new ot,k=new ot,N=null,X=new ge(0),J=0,U=t.width,W=t.height,H=1,$=null,re=null,ue=new ot(0,0,U,W),xe=new ot(0,0,U,W),He=!1,Z=new ua,ae=!1,q=!1,F=new We,ie=new We,oe=new R,pe=new ot,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function tt(){return P===null?H:1}let z=n;function Zt(E,G){return t.getContext(E,G)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){let G="webgl2";if(z=Zt(G,E),z===null)throw Zt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let qe,Xe,ke,At,De,D,S,j,te,se,ee,Ce,be,Me,it,le,we,Ne,ze,Se,nt,Je,Mt,O;function me(){qe=new lb(z),qe.init(),Je=new Hv(z,qe),Xe=new ib(z,qe,e,Je),ke=new Ov(z,qe),Xe.reverseDepthBuffer&&d&&ke.buffers.depth.setReversed(!0),At=new db(z),De=new Ev,D=new zv(z,qe,ke,De,Xe,Je,At),S=new rb(y),j=new cb(y),te=new vg(z),Mt=new tb(z,te),se=new hb(z,te,At,Mt),ee=new pb(z,se,te,At),ze=new fb(z,Xe,D),le=new sb(De),Ce=new Sv(y,S,j,qe,Xe,Mt,le),be=new Xv(y,De),Me=new Av,it=new Dv(qe),Ne=new eb(y,S,j,ke,ee,f,c),we=new Fv(y,ee,Xe),O=new jv(z,At,Xe,ke),Se=new nb(z,qe,At),nt=new ub(z,qe,At),At.programs=Ce.programs,y.capabilities=Xe,y.extensions=qe,y.properties=De,y.renderLists=Me,y.shadowMap=we,y.state=ke,y.info=At}me();let Q=new Zl(y,z);this.xr=Q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(U,W,!1))},this.getSize=function(E){return E.set(U,W)},this.setSize=function(E,G,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,W=G,t.width=Math.floor(E*H),t.height=Math.floor(G*H),Y===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(U*H,W*H).floor()},this.setDrawingBufferSize=function(E,G,Y){U=E,W=G,H=Y,t.width=Math.floor(E*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,G,Y,K){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,G,Y,K),ke.viewport(C.copy(ue).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(xe)},this.setScissor=function(E,G,Y,K){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,G,Y,K),ke.scissor(k.copy(xe).multiplyScalar(H).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(E){ke.setScissorTest(He=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,G=!0,Y=!0){let K=0;if(E){let V=!1;if(P!==null){let he=P.texture.format;V=he===Rh||he===Ah||he===Th}if(V){let he=P.texture.type,ye=he===Pi||he===As||he===ca||he===gr||he===wh||he===Sh,Te=Ne.getClearColor(),Ae=Ne.getClearAlpha(),Ge=Te.r,Ye=Te.g,Re=Te.b;ye?(g[0]=Ge,g[1]=Ye,g[2]=Re,g[3]=Ae,z.clearBufferuiv(z.COLOR,0,g)):(b[0]=Ge,b[1]=Ye,b[2]=Re,b[3]=Ae,z.clearBufferiv(z.COLOR,0,b))}else K|=z.COLOR_BUFFER_BIT}G&&(K|=z.DEPTH_BUFFER_BIT),Y&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Me.dispose(),it.dispose(),De.dispose(),S.dispose(),j.dispose(),ee.dispose(),Mt.dispose(),O.dispose(),Ce.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",zu),Q.removeEventListener("sessionend",Hu),gs.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let E=At.autoReset,G=we.enabled,Y=we.autoUpdate,K=we.needsUpdate,V=we.type;me(),At.autoReset=E,we.enabled=G,we.autoUpdate=Y,we.needsUpdate=K,we.type=V}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){let G=E.target;G.removeEventListener("dispose",je),Ft(G)}function Ft(E){en(E),De.remove(E)}function en(E){let G=De.get(E).programs;G!==void 0&&(G.forEach(function(Y){Ce.releaseProgram(Y)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,Y,K,V,he){G===null&&(G=Le);let ye=V.isMesh&&V.matrixWorld.determinant()<0,Te=Xp(E,G,Y,K,V);ke.setMaterial(K,ye);let Ae=Y.index,Ge=1;if(K.wireframe===!0){if(Ae=se.getWireframeAttribute(Y),Ae===void 0)return;Ge=2}let Ye=Y.drawRange,Re=Y.attributes.position,rt=Ye.start*Ge,wt=(Ye.start+Ye.count)*Ge;he!==null&&(rt=Math.max(rt,he.start*Ge),wt=Math.min(wt,(he.start+he.count)*Ge)),Ae!==null?(rt=Math.max(rt,0),wt=Math.min(wt,Ae.count)):Re!=null&&(rt=Math.max(rt,0),wt=Math.min(wt,Re.count));let Rt=wt-rt;if(Rt<0||Rt===1/0)return;Mt.setup(V,K,Te,Y,Ae);let gn,ht=Se;if(Ae!==null&&(gn=te.get(Ae),ht=nt,ht.setIndex(gn)),V.isMesh)K.wireframe===!0?(ke.setLineWidth(K.wireframeLinewidth*tt()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(V.isLine){let Pe=K.linewidth;Pe===void 0&&(Pe=1),ke.setLineWidth(Pe*tt()),V.isLineSegments?ht.setMode(z.LINES):V.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else V.isPoints?ht.setMode(z.POINTS):V.isSprite&&ht.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ht.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ht.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Pe=V._multiDrawStarts,vi=V._multiDrawCounts,ut=V._multiDrawCount,qn=Ae?te.get(Ae).bytesPerElement:1,zs=De.get(K).currentProgram.getUniforms();for(let _n=0;_n<ut;_n++)zs.setValue(z,"_gl_DrawID",_n),ht.render(Pe[_n]/qn,vi[_n])}else if(V.isInstancedMesh)ht.renderInstances(rt,Rt,V.count);else if(Y.isInstancedBufferGeometry){let Pe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,vi=Math.min(Y.instanceCount,Pe);ht.renderInstances(rt,Rt,vi)}else ht.render(rt,Rt)};function dt(E,G,Y){E.transparent===!0&&E.side===Xt&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,Ia(E,G,Y),E.side=li,E.needsUpdate=!0,Ia(E,G,Y),E.side=Xt):Ia(E,G,Y)}this.compile=function(E,G,Y=null){Y===null&&(Y=E),m=it.get(Y),m.init(G),_.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),E!==Y&&E.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let K=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let he=V.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){let Te=he[ye];dt(Te,Y,V),K.add(Te)}else dt(he,Y,V),K.add(he)}),_.pop(),m=null,K},this.compileAsync=function(E,G,Y=null){let K=this.compile(E,G,Y);return new Promise(V=>{function he(){if(K.forEach(function(ye){De.get(ye).currentProgram.isReady()&&K.delete(ye)}),K.size===0){V(E);return}setTimeout(he,10)}qe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Wn=null;function bi(E){Wn&&Wn(E)}function zu(){gs.stop()}function Hu(){gs.start()}let gs=new Ff;gs.setAnimationLoop(bi),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(E){Wn=E,Q.setAnimationLoop(E),E===null?gs.stop():gs.start()},Q.addEventListener("sessionstart",zu),Q.addEventListener("sessionend",Hu),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(G),G=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,G,P),m=it.get(E,_.length),m.init(G),_.push(m),ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(ie),q=this.localClippingEnabled,ae=le.init(this.clippingPlanes,q),x=Me.get(E,v.length),x.init(),v.push(x),Q.enabled===!0&&Q.isPresenting===!0){let he=y.xr.getDepthSensingMesh();he!==null&&gc(he,G,-1/0,y.sortObjects)}gc(E,G,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort($,re),Ie=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ie&&Ne.addToRenderList(x,E),this.info.render.frame++,ae===!0&&le.beginShadows();let Y=m.state.shadowsArray;we.render(Y,E,G),ae===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=x.opaque,V=x.transmissive;if(m.setupLights(),G.isArrayCamera){let he=G.cameras;if(V.length>0)for(let ye=0,Te=he.length;ye<Te;ye++){let Ae=he[ye];Vu(K,V,E,Ae)}Ie&&Ne.render(E);for(let ye=0,Te=he.length;ye<Te;ye++){let Ae=he[ye];Gu(x,E,Ae,Ae.viewport)}}else V.length>0&&Vu(K,V,E,G),Ie&&Ne.render(E),Gu(x,E,G);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(y,E,G),Mt.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],ae===!0&&le.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?x=v[v.length-1]:x=null};function gc(E,G,Y,K){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){K&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);let ye=ee.update(E),Te=E.material;Te.visible&&x.push(E,ye,Te,Y,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){let ye=ee.update(E),Te=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pe.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),pe.copy(ye.boundingSphere.center)),pe.applyMatrix4(E.matrixWorld).applyMatrix4(ie)),Array.isArray(Te)){let Ae=ye.groups;for(let Ge=0,Ye=Ae.length;Ge<Ye;Ge++){let Re=Ae[Ge],rt=Te[Re.materialIndex];rt&&rt.visible&&x.push(E,ye,rt,Y,pe.z,Re)}}else Te.visible&&x.push(E,ye,Te,Y,pe.z,null)}}let he=E.children;for(let ye=0,Te=he.length;ye<Te;ye++)gc(he[ye],G,Y,K)}function Gu(E,G,Y,K){let V=E.opaque,he=E.transmissive,ye=E.transparent;m.setupLightsView(Y),ae===!0&&le.setGlobalState(y.clippingPlanes,Y),K&&ke.viewport(C.copy(K)),V.length>0&&Pa(V,G,Y),he.length>0&&Pa(he,G,Y),ye.length>0&&Pa(ye,G,Y),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Vu(E,G,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Qt(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?An:Pi,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let he=m.state.transmissionRenderTarget[K.id],ye=K.viewport||C;he.setSize(ye.z,ye.w);let Te=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(X),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Ie&&Ne.render(Y);let Ae=y.toneMapping;y.toneMapping=ci;let Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ae===!0&&le.setGlobalState(y.clippingPlanes,K),Pa(E,Y,K),D.updateMultisampleRenderTarget(he),D.updateRenderTargetMipmap(he),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Re=0,rt=G.length;Re<rt;Re++){let wt=G[Re],Rt=wt.object,gn=wt.geometry,ht=wt.material,Pe=wt.group;if(ht.side===Xt&&Rt.layers.test(K.layers)){let vi=ht.side;ht.side=bn,ht.needsUpdate=!0,Wu(Rt,Y,K,gn,ht,Pe),ht.side=vi,ht.needsUpdate=!0,Ye=!0}}Ye===!0&&(D.updateMultisampleRenderTarget(he),D.updateRenderTargetMipmap(he))}y.setRenderTarget(Te),y.setClearColor(X,J),Ge!==void 0&&(K.viewport=Ge),y.toneMapping=Ae}function Pa(E,G,Y){let K=G.isScene===!0?G.overrideMaterial:null;for(let V=0,he=E.length;V<he;V++){let ye=E[V],Te=ye.object,Ae=ye.geometry,Ge=K===null?ye.material:K,Ye=ye.group;Te.layers.test(Y.layers)&&Wu(Te,G,Y,Ae,Ge,Ye)}}function Wu(E,G,Y,K,V,he){E.onBeforeRender(y,G,Y,K,V,he),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(y,G,Y,K,E,he),V.transparent===!0&&V.side===Xt&&V.forceSinglePass===!1?(V.side=bn,V.needsUpdate=!0,y.renderBufferDirect(Y,G,K,V,E,he),V.side=li,V.needsUpdate=!0,y.renderBufferDirect(Y,G,K,V,E,he),V.side=Xt):y.renderBufferDirect(Y,G,K,V,E,he),E.onAfterRender(y,G,Y,K,V,he)}function Ia(E,G,Y){G.isScene!==!0&&(G=Le);let K=De.get(E),V=m.state.lights,he=m.state.shadowsArray,ye=V.state.version,Te=Ce.getParameters(E,V.state,he,G,Y),Ae=Ce.getProgramCacheKey(Te),Ge=K.programs;K.environment=E.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(E.isMeshStandardMaterial?j:S).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",je),Ge=new Map,K.programs=Ge);let Ye=Ge.get(Ae);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===ye)return Xu(E,Te),Ye}else Te.uniforms=Ce.getUniforms(E),E.onBeforeCompile(Te,y),Ye=Ce.acquireProgram(Te,Ae),Ge.set(Ae,Ye),K.uniforms=Te.uniforms;let Re=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=le.uniform),Xu(E,Te),K.needsLights=Yp(E),K.lightsStateVersion=ye,K.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMap.value=V.state.directionalShadowMap,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotShadowMap.value=V.state.spotShadowMap,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMap.value=V.state.pointShadowMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Ye,K.uniformsList=null,Ye}function qu(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=dr.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Xu(E,G){let Y=De.get(E);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Xp(E,G,Y,K,V){G.isScene!==!0&&(G=Le),D.resetTextureUnits();let he=G.fog,ye=K.isMeshStandardMaterial?G.environment:null,Te=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:an,Ae=(K.isMeshStandardMaterial?j:S).get(K.envMap||ye),Ge=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Re=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,wt=!!Y.morphAttributes.color,Rt=ci;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=y.toneMapping);let gn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=gn!==void 0?gn.length:0,Pe=De.get(K),vi=m.state.lights;if(ae===!0&&(q===!0||E!==M)){let Ln=E===M&&K.id===w;le.setState(K,E,Ln)}let ut=!1;K.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==vi.state.version||Pe.outputColorSpace!==Te||V.isBatchedMesh&&Pe.batching===!1||!V.isBatchedMesh&&Pe.batching===!0||V.isBatchedMesh&&Pe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Pe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Pe.instancing===!1||!V.isInstancedMesh&&Pe.instancing===!0||V.isSkinnedMesh&&Pe.skinning===!1||!V.isSkinnedMesh&&Pe.skinning===!0||V.isInstancedMesh&&Pe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pe.instancingMorph===!1&&V.morphTexture!==null||Pe.envMap!==Ae||K.fog===!0&&Pe.fog!==he||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==Ge||Pe.vertexTangents!==Ye||Pe.morphTargets!==Re||Pe.morphNormals!==rt||Pe.morphColors!==wt||Pe.toneMapping!==Rt||Pe.morphTargetsCount!==ht)&&(ut=!0):(ut=!0,Pe.__version=K.version);let qn=Pe.currentProgram;ut===!0&&(qn=Ia(K,G,V));let zs=!1,_n=!1,zr=!1,Ct=qn.getUniforms(),si=Pe.uniforms;if(ke.useProgram(qn.program)&&(zs=!0,_n=!0,zr=!0),K.id!==w&&(w=K.id,_n=!0),zs||M!==E){ke.buffers.depth.getReversed()?(F.copy(E.projectionMatrix),eg(F),tg(F),Ct.setValue(z,"projectionMatrix",F)):Ct.setValue(z,"projectionMatrix",E.projectionMatrix),Ct.setValue(z,"viewMatrix",E.matrixWorldInverse);let Gi=Ct.map.cameraPosition;Gi!==void 0&&Gi.setValue(z,oe.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&Ct.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ct.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,_n=!0,zr=!0)}if(V.isSkinnedMesh){Ct.setOptional(z,V,"bindMatrix"),Ct.setOptional(z,V,"bindMatrixInverse");let Ln=V.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ct.setValue(z,"boneTexture",Ln.boneTexture,D))}V.isBatchedMesh&&(Ct.setOptional(z,V,"batchingTexture"),Ct.setValue(z,"batchingTexture",V._matricesTexture,D),Ct.setOptional(z,V,"batchingIdTexture"),Ct.setValue(z,"batchingIdTexture",V._indirectTexture,D),Ct.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&Ct.setValue(z,"batchingColorTexture",V._colorsTexture,D));let Hr=Y.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&ze.update(V,Y,qn),(_n||Pe.receiveShadow!==V.receiveShadow)&&(Pe.receiveShadow=V.receiveShadow,Ct.setValue(z,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(si.envMap.value=Ae,si.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(si.envMapIntensity.value=G.environmentIntensity),_n&&(Ct.setValue(z,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&jp(si,zr),he&&K.fog===!0&&be.refreshFogUniforms(si,he),be.refreshMaterialUniforms(si,K,H,W,m.state.transmissionRenderTarget[E.id]),dr.upload(z,qu(Pe),si,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(dr.upload(z,qu(Pe),si,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ct.setValue(z,"center",V.center),Ct.setValue(z,"modelViewMatrix",V.modelViewMatrix),Ct.setValue(z,"normalMatrix",V.normalMatrix),Ct.setValue(z,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Ln=K.uniformsGroups;for(let Gi=0,Vi=Ln.length;Gi<Vi;Gi++){let ju=Ln[Gi];O.update(ju,qn),O.bind(ju,qn)}}return qn}function jp(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Yp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,G,Y){De.get(E.texture).__webglTexture=G,De.get(E.depthTexture).__webglTexture=Y;let K=De.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,G){let Y=De.get(E);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,Y=0){P=E,T=G,I=Y;let K=!0,V=null,he=!1,ye=!1;if(E){let Ae=De.get(E);if(Ae.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(z.FRAMEBUFFER,null),K=!1;else if(Ae.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(Ae.__hasExternalTextures)D.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Re=E.depthTexture;if(Ae.__boundDepthTexture!==Re){if(Re!==null&&De.has(Re)&&(E.width!==Re.image.width||E.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}let Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ye=!0);let Ye=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?V=Ye[G][Y]:V=Ye[G],he=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?V=De.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?V=Ye[Y]:V=Ye,C.copy(E.viewport),k.copy(E.scissor),N=E.scissorTest}else C.copy(ue).multiplyScalar(H).floor(),k.copy(xe).multiplyScalar(H).floor(),N=He;if(ke.bindFramebuffer(z.FRAMEBUFFER,V)&&K&&ke.drawBuffers(E,V),ke.viewport(C),ke.scissor(k),ke.setScissorTest(N),he){let Ae=De.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae.__webglTexture,Y)}else if(ye){let Ae=De.get(E.texture),Ge=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ae.__webglTexture,Y||0,Ge)}w=-1},this.readRenderTargetPixels=function(E,G,Y,K,V,he,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){ke.bindFramebuffer(z.FRAMEBUFFER,Te);try{let Ae=E.texture,Ge=Ae.format,Ye=Ae.type;if(!Xe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-K&&Y>=0&&Y<=E.height-V&&z.readPixels(G,Y,K,V,Je.convert(Ge),Je.convert(Ye),he)}finally{let Ae=P!==null?De.get(P).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,G,Y,K,V,he,ye){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){let Ae=E.texture,Ge=Ae.format,Ye=Ae.type;if(!Xe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=E.width-K&&Y>=0&&Y<=E.height-V){ke.bindFramebuffer(z.FRAMEBUFFER,Te);let Re=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Re),z.bufferData(z.PIXEL_PACK_BUFFER,he.byteLength,z.STREAM_READ),z.readPixels(G,Y,K,V,Je.convert(Ge),Je.convert(Ye),0);let rt=P!==null?De.get(P).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,rt);let wt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await $m(z,wt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Re),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,he),z.deleteBuffer(Re),z.deleteSync(wt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,G=null,Y=0){E.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1]);let K=Math.pow(2,-Y),V=Math.floor(E.image.width*K),he=Math.floor(E.image.height*K),ye=G!==null?G.x:0,Te=G!==null?G.y:0;D.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,ye,Te,V,he),ke.unbindTexture()},this.copyTextureToTexture=function(E,G,Y=null,K=null,V=0){E.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],G=arguments[2],V=arguments[3]||0,Y=null);let he,ye,Te,Ae,Ge,Ye,Re,rt,wt,Rt=E.isCompressedTexture?E.mipmaps[V]:E.image;Y!==null?(he=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Ae=Y.min.x,Ge=Y.min.y,Ye=Y.isBox3?Y.min.z:0):(he=Rt.width,ye=Rt.height,Te=Rt.depth||1,Ae=0,Ge=0,Ye=0),K!==null?(Re=K.x,rt=K.y,wt=K.z):(Re=0,rt=0,wt=0);let gn=Je.convert(G.format),ht=Je.convert(G.type),Pe;G.isData3DTexture?(D.setTexture3D(G,0),Pe=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),Pe=z.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),Pe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let vi=z.getParameter(z.UNPACK_ROW_LENGTH),ut=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qn=z.getParameter(z.UNPACK_SKIP_PIXELS),zs=z.getParameter(z.UNPACK_SKIP_ROWS),_n=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Rt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ae),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ge),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ye);let zr=E.isDataArrayTexture||E.isData3DTexture,Ct=G.isDataArrayTexture||G.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let si=De.get(E),Hr=De.get(G),Ln=De.get(si.__renderTarget),Gi=De.get(Hr.__renderTarget);ke.bindFramebuffer(z.READ_FRAMEBUFFER,Ln.__webglFramebuffer),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Vi=0;Vi<Te;Vi++)zr&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.get(E).__webglTexture,V,Ye+Vi),E.isDepthTexture?(Ct&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.get(G).__webglTexture,V,wt+Vi),z.blitFramebuffer(Ae,Ge,he,ye,Re,rt,he,ye,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ct?z.copyTexSubImage3D(Pe,V,Re,rt,wt+Vi,Ae,Ge,he,ye):z.copyTexSubImage2D(Pe,V,Re,rt,wt+Vi,Ae,Ge,he,ye);ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ct?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Pe,V,Re,rt,wt,he,ye,Te,gn,ht,Rt.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,V,Re,rt,wt,he,ye,Te,gn,Rt.data):z.texSubImage3D(Pe,V,Re,rt,wt,he,ye,Te,gn,ht,Rt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,Re,rt,he,ye,gn,ht,Rt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,Re,rt,Rt.width,Rt.height,gn,Rt.data):z.texSubImage2D(z.TEXTURE_2D,V,Re,rt,he,ye,gn,ht,Rt);z.pixelStorei(z.UNPACK_ROW_LENGTH,vi),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qn),z.pixelStorei(z.UNPACK_SKIP_ROWS,zs),z.pixelStorei(z.UNPACK_SKIP_IMAGES,_n),V===0&&G.generateMipmaps&&z.generateMipmap(Pe),ke.unbindTexture()},this.copyTextureToTexture3D=function(E,G,Y=null,K=null,V=0){return E.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,E=arguments[2],G=arguments[3],V=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,G,Y,K,V)},this.initRenderTarget=function(E){De.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),ke.unbindTexture()},this.resetState=function(){T=0,I=0,P=null,ke.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}},ts=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var To=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new R,Cs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sr=class extends vn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tr,Xr=new R,nr=new R,ir=new R,sr=new ce,jr=new ce,Hf=new We,Qa=new R,Yr=new R,$a=new R,qd=new ce,Wc=new ce,Xd=new ce,fa=class extends xt{constructor(e=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wr(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Cs(n,3,0,!1)),tr.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=tr,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),Hf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;eo(Qa.set(-.5,-.5,0),ir,a,nr,s,r),eo(Yr.set(.5,-.5,0),ir,a,nr,s,r),eo($a.set(.5,.5,0),ir,a,nr,s,r),qd.set(0,0),Wc.set(1,0),Xd.set(1,1);let o=e.ray.intersectTriangle(Qa,Yr,$a,!1,Xr);if(o===null&&(eo(Yr.set(-.5,.5,0),ir,a,nr,s,r),Wc.set(0,1),o=e.ray.intersectTriangle(Qa,$a,Yr,!1,Xr),o===null))return;let c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:Zi.getInterpolation(Xr,Qa,Yr,$a,qd,Wc,Xd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function eo(i,e,t,n,s,r){sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(jr.x=r*sr.x-s*sr.y,jr.y=s*sr.x+r*sr.y):jr.copy(sr),i.copy(e),i.x+=jr.x,i.y+=jr.y,i.applyMatrix4(Hf)}var jd=new R,Yd=new ot,Kd=new ot,Yv=new R,Jd=new We,to=new R,qc=new Sn,Zd=new We,Xc=new Rs,Ao=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zu,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qc.copy(this.boundingSphere),qc.applyMatrix4(s),e.ray.intersectsSphere(qc)!==!1&&(Zd.copy(s).invert(),Xc.copy(e.ray).applyMatrix4(Zd),!(this.boundingBox!==null&&Xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Yd.fromBufferAttribute(s.attributes.skinIndex,e),Kd.fromBufferAttribute(s.attributes.skinWeight,e),jd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Kd.getComponent(r);if(a!==0){let o=Yd.getComponent(r);Jd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yv.copy(jd).applyMatrix4(Jd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},pa=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ro=class extends jt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=sn,h=sn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qd=new We,Kv=new We,Co=class i{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Kv;Qd.multiplyMatrices(o,t[r]),Qd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ro(t,e,e,Un,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new pa),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ps=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new We,$d=new We,no=[],ef=new gt,Jv=new We,Kr=new Be,Jr=new Sn,di=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),ef.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Jr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),$d.multiplyMatrices(n,rr),Kr.matrixWorld=$d,Kr.raycast(e,no);for(let a=0,o=no.length;a<o;a++){let c=no[a];c.instanceId=r,c.object=this,t.push(c)}no.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(s*this.count),s,this.count,Eh,Zn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ma=class extends vn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Po=new R,Io=new R,tf=new We,Zr=new Rs,io=new Sn,jc=new R,nf=new R,Er=class extends xt{constructor(e=new bt,t=new ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Po.fromBufferAttribute(t,s-1),Io.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Po.distanceTo(Io);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;tf.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,x=g-1;b<x;b+=l){let m=h.getX(b),v=h.getX(b+1),_=so(this,e,Zr,c,m,v);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(g-1),x=h.getX(f),m=so(this,e,Zr,c,b,x);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,x=g-1;b<x;b+=l){let m=so(this,e,Zr,c,b,b+1);m&&t.push(m)}if(this.isLineLoop){let b=so(this,e,Zr,c,g-1,f);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function so(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Po.fromBufferAttribute(a,s),Io.fromBufferAttribute(a,r),t.distanceSqToSegment(Po,Io,jc,nf)>n)return;jc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(jc);if(!(c<e.near||c>e.far))return{distance:c,point:nf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var sf=new R,rf=new R,Lo=class extends Er{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)sf.fromBufferAttribute(t,s),rf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sf.distanceTo(rf);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Do=class extends Er{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends vn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},af=new We,Ql=new Rs,ro=new Sn,ao=new R,ns=class extends xt{constructor(e=new bt,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;af.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let x=l.getX(g);ao.fromBufferAttribute(u,x),of(ao,x,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)ao.fromBufferAttribute(u,g),of(ao,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function of(i,e,t,n,s,r,a){let o=Ql.distanceSqToPoint(i);if(o<t){let c=new R;Ql.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var kn=class extends jt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ce:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,s=[],r=[],a=[],o=new R,c=new We;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ga=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends ga{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var oo=new R,Yc=new Dh,Kc=new Dh,Jc=new Dh,eh=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(oo.subVectors(s[0],s[1]).add(s[0]),l=oo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),x<1e-4&&(x=b),Yc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,x),Kc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,x),Jc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,x)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Kc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Jc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Yc.calc(c),Kc.calc(c),Jc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Zv(i,e){let t=1-i;return t*t*e}function Qv(i,e){return 2*(1-i)*i*e}function $v(i,e){return i*i*e}function ra(i,e,t,n){return Zv(i,e)+Qv(i,t)+$v(i,n)}function ey(i,e){let t=1-i;return t*t*t*e}function ty(i,e){let t=1-i;return 3*t*t*i*e}function ny(i,e){return 3*(1-i)*i*i*e}function iy(i,e){return i*i*i*e}function aa(i,e,t,n,s){return ey(i,e)+ty(i,t)+ny(i,n)+iy(i,s)}var Uo=class extends Fn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,s.x,r.x,a.x,o.x),aa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},th=class extends Fn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,s.x,r.x,a.x,o.x),aa(e,s.y,r.y,a.y,o.y),aa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends Fn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nh=class extends Fn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends Fn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ra(e,s.x,r.x,a.x),ra(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ih=class extends Fn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ra(e,s.x,r.x,a.x),ra(e,s.y,r.y,a.y),ra(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(cf(o,c.x,l.x,h.x,u.x),cf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},lf=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:eh,CubicBezierCurve:Uo,CubicBezierCurve3:th,EllipseCurve:ga,LineCurve:ko,LineCurve3:nh,QuadraticBezierCurve:Fo,QuadraticBezierCurve3:ih,SplineCurve:No}),sh=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new lf[s.type]().fromJSON(s))}return this}},rh=class extends sh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ko(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fo(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Uo(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new ga(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ah=class i extends bt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ht(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new R,d=new ce,f=new R,g=new R,b=new R,x=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:x=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-x,f.z=m*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:x=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-x,f.z=m*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let v=0;v<=t;v++){let _=n+v*h*s,y=Math.sin(_),L=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*L,a.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),o.push(d.x,d.y);let I=c[3*T+0]*y,P=c[3*T+1],w=c[3*T+0]*L;l.push(I,P,w)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,L=y,T=y+e.length,I=y+e.length+1,P=y+1;r.push(L,T,P),r.push(I,P,T)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Tr=class i extends ah{constructor(e=1,t=1,n=4,s=8){let r=new rh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Nn=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new R,h=new ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},st=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,b=[],x=n/2,m=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function v(){let y=new R,L=new R,T=0,I=(t-e)/n;for(let P=0;P<=r;P++){let w=[],M=P/r,C=M*(t-e)+e;for(let k=0;k<=s;k++){let N=k/s,X=N*c+o,J=Math.sin(X),U=Math.cos(X);L.x=C*J,L.y=-M*n+x,L.z=C*U,u.push(L.x,L.y,L.z),y.set(J,I,U).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-M),w.push(g++)}b.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let M=b[w][P],C=b[w+1][P],k=b[w+1][P+1],N=b[w][P+1];(e>0||w!==0)&&(h.push(M,C,N),T+=3),(t>0||w!==r-1)&&(h.push(C,k,N),T+=3)}l.addGroup(m,T,0),m+=T}function _(y){let L=g,T=new ce,I=new R,P=0,w=y===!0?e:t,M=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,x*M,0),d.push(0,M,0),f.push(.5,.5),g++;let C=g;for(let k=0;k<=s;k++){let X=k/s*c+o,J=Math.cos(X),U=Math.sin(X);I.x=w*U,I.y=x*M,I.z=w*J,u.push(I.x,I.y,I.z),d.push(0,M,0),T.x=J*.5+.5,T.y=U*.5*M+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){let N=L+k,X=C+k;y===!0?h.push(X,X+1,N):h.push(X+1,X,N),P+=3}l.addGroup(m,P,y===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yn=class i extends st{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oo=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new R,y=new R,L=new R;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],y),f(t[T+2],L),c(_,y,L,v)}function c(v,_,y,L){let T=L+1,I=[];for(let P=0;P<=T;P++){I[P]=[];let w=v.clone().lerp(y,P/T),M=_.clone().lerp(y,P/T),C=T-P;for(let k=0;k<=C;k++)k===0&&P===T?I[P][k]=w:I[P][k]=w.clone().lerp(M,k/C)}for(let P=0;P<T;P++)for(let w=0;w<2*(T-P)-1;w++){let M=Math.floor(w/2);w%2===0?(d(I[P][M+1]),d(I[P+1][M]),d(I[P][M])):(d(I[P][M+1]),d(I[P+1][M+1]),d(I[P+1][M]))}}function l(v){let _=new R;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new R;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=x(v)/2/Math.PI+.5,L=m(v)/Math.PI+.5;a.push(y,1-L)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],y=a[v+2],L=a[v+4],T=Math.max(_,y,L),I=Math.min(_,y,L);T>.9&&I<.1&&(_<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new R,_=new R,y=new R,L=new R,T=new ce,I=new ce,P=new ce;for(let w=0,M=0;w<r.length;w+=9,M+=6){v.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(a[M+0],a[M+1]),I.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),L.copy(v).add(_).add(y).divideScalar(3);let C=x(L);b(T,M+0,v,C),b(I,M+2,_,C),b(P,M+4,y,C)}}function b(v,_,y,L){L<0&&v.x===1&&(a[_]=v.x-1),y.x===0&&y.z===0&&(a[_]=L/2/Math.PI+.5)}function x(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},$n=class i extends Oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Bo=class i extends Oo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Li=class i extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,d=new R,f=[],g=[],b=[],x=[];for(let m=0;m<=n;m++){let v=[],_=m/n,y=0;m===0&&a===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let T=L/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),x.push(T+y,1-_),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let _=h[m][v+1],y=h[m][v],L=h[m+1][v],T=h[m+1][v+1];(m!==0||a>0)&&f.push(_,y,T),(m!==n-1||c<Math.PI)&&f.push(y,L,T)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zo=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let b=g/s*r,x=f/n*Math.PI*2;u.x=(e+t*Math.cos(x))*Math.cos(b),u.y=(e+t*Math.cos(x))*Math.sin(b),u.z=t*Math.sin(x),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let b=(s+1)*f+g-1,x=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;a.push(b,x,v),a.push(x,m,v)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var St=class extends vn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pf,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends St{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function co(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ry(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function hf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Gf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oh=class extends is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:or,endingEnd:or}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cr:r=e,o=2*t-n;break;case mo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cr:a=e,c=2*n-t;break;case mo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,x=b*g,m=-d*x+2*d*b-d*g,v=(1+d)*x+(-1.5-2*d)*b+(-.5+d)*g+1,_=(-1-f)*x+(1.5+f)*b+.5*g,y=f*x-f*b;for(let L=0;L!==o;++L)r[L]=m*a[h+L]+v*a[l+L]+_*a[c+L]+y*a[u+L];return r}},Ho=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},ch=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case xc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&sy(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=vr;var ss=class extends On{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=br;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends On{};Go.prototype.ValueTypeName="color";var Di=class extends On{};Di.prototype.ValueTypeName="number";var lh=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ui=class extends On{InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends On{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=br;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends On{};ki.prototype.ValueTypeName="vector";var Fi=class{constructor(e="",t=-1,n=[],s=Ch){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(oy(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=ry(c);c=hf(c,1,h),l=hf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Di(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,b){if(f.length!==0){let x=[],m=[];Gf(f,x,m,g),x.length!==0&&b.push(new u(d,x,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let x=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){let _=d[g];x.push(_.time),m.push(_.morphTarget===b?1:0)}s.push(new Di(".morphTargetInfluence["+b+"]",x,m))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(ki,f+".position",d,"pos",s),n(Ui,f+".quaternion",d,"rot",s),n(ki,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ay(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return Go;case"quaternion":return Ui;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function oy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ay(i.type);if(i.times===void 0){let t=[],n=[];Gf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Qi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},hh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Uh=new hh,Ni=class{constructor(e){this.manager=e!==void 0?e:Uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei={},uh=class extends Error{constructor(e,t){super(e),this.response=t}},xa=class extends Ni{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ei[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,x=new ReadableStream({start(m){v();function v(){u.read().then(({done:_,value:y})=>{if(_)m.close();else{b+=y.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,I=h.length;T<I;T++){let P=h[T];P.onProgress&&P.onProgress(L)}m.enqueue(y),v()}},_=>{m.error(_)})}}});return new Response(x)}else throw new uh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Qi.add(e,l);let h=Ei[e];delete Ei[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ei[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ei[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var dh=class extends Ni{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=la("img");function c(){h(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Vo=class extends Ni{constructor(e){super(e)}load(e,t,n,s){let r=new jt,a=new dh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ar=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},as=class extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zc=new We,uf=new R,df=new R,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(uf),df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(df),t.updateMatrixWorld(),Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fh=class extends ba{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Wo=class extends Ar{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ff=new We,Qr=new R,Qc=new R,ph=class extends ba{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qr),Qc.copy(n.position),Qc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qc),n.updateMatrixWorld(),s.makeTranslation(-Qr.x,-Qr.y,-Qr.z),ff.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff)}},Rr=class extends Ar{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},mh=class extends ba{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tn=class extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var os=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var qo=class extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qi.add(e,c),r.manager.itemStart(e)}};var Xo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pf(){return performance.now()}var gh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){rn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;rn.multiplyQuaternionsFlat(e,a,e,t,e,n),rn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},kh="\\[\\]\\.:\\/",cy=new RegExp("["+kh+"]","g"),Fh="[^"+kh+"]",ly="[^"+kh.replace("\\.","")+"]",hy=/((?:WC+[\/:])*)/.source.replace("WC",Fh),uy=/(WCOD+)?/.source.replace("WCOD",ly),dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),py=new RegExp("^"+hy+uy+dy+fy+"$"),my=["material","materials","bones","map"],xh=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cy,"")}static parseTrackName(e){let t=py.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);my.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=xh;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:or,endingEnd:or};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Tm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Ch:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Em;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Ko){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=cr,s.endingEnd=cr):(e?s.endingStart=this.zeroSlopeAtStart?cr:or:s.endingStart=mo,t?s.endingEnd=this.zeroSlopeAtEnd?cr:or:s.endingEnd=mo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},gy=new Float32Array(1),va=class extends Ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;g=new gh(yt.create(n,f,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ho(new Float32Array(2),new Float32Array(2),1,gy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Fi.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ch),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new bh(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Fi.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var mf=new We,jo=class{constructor(e,t,n=0,s=1/0){this.ray=new Rs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(e,t=!0,n=[]){return vh(e,this,n,t),n.sort(gf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vh(e[s],this,n,t);return n.sort(gf),n}};function gf(i,e){return i.distance-e.distance}function vh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)vh(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ut=new Set,on=new Set,Ir={x:0,y:0},Vf={KeyW:"KeyS",KeyS:"KeyW",KeyA:"KeyD",KeyD:"KeyA"},ec=[],Nh=i=>{ec.push(i),ec=ec.slice(-8)};addEventListener("keydown",i=>{if(!(i.isComposing||i.keyCode===229)){if(/^(Meta|Alt|Control)/.test(i.code)){Ut.clear();return}i.metaKey||i.altKey||i.ctrlKey||(i.repeat||(Nh("\u2193"+i.code),Vf[i.code]&&Ut.delete(Vf[i.code])),Ut.has(i.code)||on.add(i.code),Ut.add(i.code),(i.code==="Space"||i.code==="Tab")&&i.preventDefault())}});addEventListener("keyup",i=>{Nh("\u2191"+i.code),Ut.delete(i.code),/^(Meta|Alt|Control)/.test(i.code)&&Ut.clear()});for(let i of["blur","focus","pagehide"])addEventListener(i,()=>{Nh("["+i+"]"),Ut.clear()});document.addEventListener("visibilitychange",()=>Ut.clear());addEventListener("mousemove",i=>{window.__touch||(i.buttons&2||Ut.delete("RMB"),Ir.x=i.clientX/innerWidth*2-1,Ir.y=-(i.clientY/innerHeight)*2+1)});addEventListener("mousedown",i=>{window.__touch||(i.button===0&&on.add("LMB"),i.button===2&&(on.add("RMB"),Ut.add("RMB")))});addEventListener("mouseup",i=>{i.button===2&&Ut.delete("RMB")});addEventListener("contextmenu",i=>i.preventDefault());function Wf(){on.clear()}function qf(i=()=>""){let e=document.createElement("div");return e.style.cssText="position:fixed;left:8px;top:60px;z-index:99;font:11px ui-monospace,Menlo,monospace;color:#9fe0c0;background:rgba(0,0,0,.55);padding:6px 8px;white-space:pre;display:none;pointer-events:none",document.body.appendChild(e),addEventListener("keydown",t=>{t.code==="F3"&&(t.preventDefault(),e.style.display=e.style.display==="none"?"block":"none")},!0),()=>{e.style.display!=="none"&&(e.textContent=`held: ${[...Ut].join(" ")||"-"}
focus: ${document.hasFocus()}
${i()}
recent: ${ec.join(" ")}`)}}var tc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},xy=new es(-1,1,1,-1,0,1),Oh=class extends bt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},by=new Oh,Lr=class{constructor(e){this._mesh=new Be(by,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Dr=class extends ei{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cr.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Lr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _a=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},nc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ic=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dr(tc),this.copyPass.material.blending=oi,this.clock=new Xo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_a!==void 0&&(a instanceof _a?n=!0:a instanceof nc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sc=class extends ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Xf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ur=class i extends ei{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,a,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qt(r,a,{type:An});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Qt(r,a,{type:An});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Xf;this.highPassUniforms=Cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=tc;this.copyUniforms=Cr.clone(h.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ts,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new Lr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ur.BlurDirectionX=new ce(1,0);Ur.BlurDirectionY=new ce(0,1);var vy={uniforms:{tDiffuse:{value:null},uTime:{value:0},uExposure:{value:1.15},uTint:{value:new R(0,0,0)},uFlash:{value:0},uMono:{value:0},uShock:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`
    varying vec2 vUv; uniform sampler2D tDiffuse; uniform float uTime, uExposure, uFlash, uMono, uShock; uniform vec3 uTint;
    vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14), 0., 1.); }
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 sd = (vUv - .5) * uShock * .045;                                              /* radial colour split on big impacts */
      vec3 c = vec3(texture2D(tDiffuse, vUv + sd).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - sd).b) * uExposure;
      float l = dot(c, vec3(.2126,.7152,.0722));
      c = mix(c * vec3(.84,.96,1.16), c * vec3(1.08,1.,.9), smoothstep(.02,.9,l));   /* cold shadows, warm highlights */
      c += uTint * (.15 + l); c += uFlash * vec3(.55, .8, 1.) * (.35 + l);
      c = aces(c);
      float mg = dot(c, vec3(.3,.59,.11)); c = mix(c, vec3(smoothstep(.2,.92,mg)) * vec3(.9,.96,1.), uMono);   /* ink-wash moment: hard black and white */
      vec2 d = vUv - .5; c *= 1. - dot(d,d) * 1.05;
      c = pow(c, vec3(1./2.2));
      c += (hash(vUv * 900. + uTime) - .5) * .022;
      gl_FragColor = vec4(c, 1.);
    }`},jf=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches;function Yf(i){let e=new Eo({canvas:i,antialias:!1,powerPreference:"high-performance"});e.shadowMap.enabled=!0,e.shadowMap.type=yh,e.toneMapping=ci;let t=new To,n=new Gt(36,1,.5,220),s=new Qt(4,4,{type:An,samples:4}),r=new ic(e,s);r.addPass(new sc(t,n));let a=new Ur(new ce(4,4),.62,.7,1);r.addPass(a);let o=new Dr(vy);r.addPass(o);let c={h:1};function l(){let h=innerWidth,u=innerHeight,d=Math.min(devicePixelRatio||1,jf?1.25:1.5,Math.sqrt((jf?15e5:32e5)/(h*u)));e.setPixelRatio(d),e.setSize(h,u,!1),r.setPixelRatio(d),r.setSize(h,u),n.aspect=h/u,n.updateProjectionMatrix(),c.h=u*d}return addEventListener("resize",l),l(),{renderer:e,scene:t,camera:n,composer:r,grade:o,bloom:a,view:c,resize:l,render(h){o.uniforms.uTime.value=h,r.render()}}}var Ma=13.6,Oi=[],Fe=(()=>{let i=20261112;return()=>(i=i*1664525+1013904223>>>0)/4294967296})(),rc=i=>{let e=document.createElement("canvas");return e.width=e.height=i,e};function yy(){let e=rc(2048),t=rc(2048),n=e.getContext("2d"),s=t.getContext("2d"),r=2048/2;n.fillStyle="#23272c",n.fillRect(0,0,2048,2048),s.fillStyle="#202020",s.fillRect(0,0,2048,2048);let a=[0,.13,.25,.38,.51,.64,.77,.89,1];for(let l=1;l<a.length;l++){let h=a[l-1]*r,u=a[l]*r,d=l===1?1:Math.round((h+u)*Math.PI/150),f=Fe()*6.28;for(let g=0;g<d;g++){let b=f+g/d*6.2832,x=f+(g+1)/d*6.2832,m=Fe();for(let[v,_,y,L]of[[n,`hsl(${205+m*20},${5+m*5}%,${27+m*11}%)`,"#14171b",5],[s,`rgb(${[0,0,0].map(()=>150+m*60|0)})`,"#181818",9]])v.beginPath(),v.arc(r,r,u,b,x),v.arc(r,r,h,x,b,!0),v.closePath(),v.fillStyle=_,v.fill(),v.strokeStyle=y,v.lineWidth=L,v.stroke()}}for(let[l,h]of[[n,"rgba(10,12,14,.55)"],[s,"rgba(40,40,40,.9)"]]){l.strokeStyle=h,l.lineWidth=7,l.lineCap="round",l.beginPath(),l.arc(r,r,r*.105,0,6.2832),l.stroke(),l.beginPath(),l.arc(r,r-r*.052,r*.052,-Math.PI/2,Math.PI/2),l.arc(r,r+r*.052,r*.052,-Math.PI/2,Math.PI/2,!0),l.stroke();for(let u=0;u<24;u++){let d=u/24*6.2832,f=r*.3,g=r*(u%3?.325:.345);l.beginPath(),l.moveTo(r+Math.cos(d)*f,r+Math.sin(d)*f),l.lineTo(r+Math.cos(d)*g,r+Math.sin(d)*g),l.stroke()}l.lineWidth=5,l.beginPath(),l.arc(r,r,r*.585,0,6.2832),l.stroke()}for(let l=0;l<26e3;l++){let h=Fe()*2048,u=Fe()*2048,d=Fe();n.fillStyle=d>.5?"rgba(255,255,255,.035)":"rgba(0,0,0,.07)",n.fillRect(h,u,2+d*3,2+d*3),s.fillStyle=d>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.08)",s.fillRect(h,u,3,3)}for(let l=0;l<46;l++){let h=Fe()*6.2832,u=r*(.35+.65*Math.sqrt(Fe())),d=r+Math.cos(h)*u,f=r+Math.sin(h)*u,g=50+Fe()*190,b=n.createRadialGradient(d,f,0,d,f,g);b.addColorStop(0,Fe()>.45?"rgba(52,78,50,.42)":"rgba(8,10,14,.5)"),b.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=b,n.fillRect(d-g,f-g,g*2,g*2)}for(let l=0;l<34;l++){let h=Fe()*2048,u=Fe()*2048,d=Fe()*6.28;for(let[f,g,b]of[[n,"rgba(8,9,11,.8)",2.5],[s,"rgba(10,10,10,.95)",5]]){let x=h,m=u,v=d;f.strokeStyle=g,f.lineWidth=b,f.beginPath(),f.moveTo(x,m);for(let _=0;_<9;_++)v+=Math.sin(l*7+_*3.1)*.7,x+=Math.cos(v)*26,m+=Math.sin(v)*26,f.lineTo(x,m);f.stroke()}}let o=new kn(e);o.colorSpace=_t,o.anisotropy=8;let c=new kn(t);return c.anisotropy=8,{map:o,bump:c}}function _y(){let e=rc(512),t=e.getContext("2d");t.fillStyle="#10171a",t.fillRect(0,0,512,512);for(let s=0;s<9e3;s++){let r=Fe();t.fillStyle=`hsla(${120+r*60},${10+r*18}%,${5+r*11}%,.5)`;let a=2+r*9;t.fillRect(Fe()*512,Fe()*512,a,a*(.5+Fe()))}let n=new kn(e);return n.colorSpace=_t,n.wrapS=n.wrapT=hi,n.repeat.set(14,14),n}function Kf(i){let e=new Ve,t=[];i.add(e);let n=new ge(329999),s=new ts(462102,.021),r=(q,F=.9)=>new St({color:q,roughness:F}),a=(q,F,ie,oe,pe,Le={})=>{let Ie=new Be(q,F);return Ie.position.set(ie,oe,pe),Ie.castShadow=Le.cast!==!1,Ie.receiveShadow=!0,Le.rot&&Ie.rotation.set(...Le.rot),(o||e).add(Ie),Ie},o=null,c={},l={pillars:[],fallen:[],lanterns:[]},h=q=>{o=c[q]=new Ve,e.add(o)},{map:u,bump:d}=yy(),f=a(new Nn(14.4,96),new St({map:u,bumpMap:d,bumpScale:2.2,roughness:.86}),0,0,0,{cast:!1,rot:[-Math.PI/2,0,0]});a(new st(14.4,14.75,.5,96,1,!0),r(2764597),0,-.25,0),a(new st(15.5,15.9,.22,96),r(2369838),0,-.4,0),a(new Nn(90,48),new St({map:_y(),roughness:1}),0,-.5,0,{cast:!1,rot:[-Math.PI/2,0,0]}),e.add(new as(5996469,724754,.85));let g=new Tn(11126015,2.3);g.position.set(-15,26,-11),g.castShadow=!0,g.shadow.mapSize.set(matchMedia("(pointer: coarse)").matches?1024:2048,matchMedia("(pointer: coarse)").matches?1024:2048),Object.assign(g.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:4,far:70}),g.shadow.bias=-6e-4,g.shadow.normalBias=.03,g.shadow.radius=3,e.add(g);let b=new Tn(13227775,.85);b.position.set(5,12,16),e.add(b);let x=r(4870232),m=r(3751493);h("pillars");for(let q=0;q<10;q++){let F=(q+.5)/10*6.2832,ie=Math.sin(F)*12.55,oe=Math.cos(F)*12.55,pe=oe<-2,Le=pe?3.2+Fe()*1.6:oe<5?1.4+Fe()*1.2:.5+Fe()*.5;a(new st(.42,.5,Le,10),x,ie,Le/2,oe,{rot:[0,Fe()*3,pe?0:(Fe()-.5)*.06]}),a(new st(.62,.62,.22,10),m,ie,.11,oe),pe&&Le>4?a(new at(1.15,.26,1.15),m,ie,Le+.13,oe):a(new $n(.36+Fe()*.12,0),x,ie+(Fe()-.5)*1.6,.2,oe+(Fe()-.2)*1.2,{rot:[Fe()*3,Fe()*3,0]}),t.push({x:ie,z:oe,r:.78,tag:"pillars"}),l.pillars.push({x:ie,z:oe,h:Le,far:pe,ry:Fe()*6.28})}h("fallen");for(let[q,F,ie]of[[-6.4,-2.6,.5],[6.9,2.2,-1.1]])l.fallen.push({x:q,z:F,ry:ie}),a(new st(.5,.5,2.3,10),x,q,.46,F,{rot:[Math.PI/2,0,ie]}),a(new $n(.42,0),x,q+.9,.24,F+.7,{rot:[1,2,0]}),t.push({x:q-Math.sin(ie)*.6,z:F,r:.8,tag:"fallen"},{x:q+Math.sin(ie)*.6,z:F,r:.8,tag:"fallen"});h("burner");let v=new St({color:5069388,roughness:.55,metalness:.7});a(new st(.75,.5,1.1,14,1,!0),v,3.4,.62,-8.6,{rot:[1.25,.4,0]}).material.side=Xt,a(new zo(.75,.07,6,18),v,3.52,.95,-8.12,{rot:[1.25-Math.PI/2,.4,0]}),t.push({x:3.4,z:-8.6,r:1,tag:"burner"}),h("lanterns");let _=[],y=new Yt({color:new ge(3.2,1.5,.5)});for(let q of[.62,2.2,3.95,5.6]){let F=Math.sin(q)*11.2,ie=Math.cos(q)*11.2;a(new st(.16,.24,1.2,8),m,F,.6,ie),a(new at(.62,.1,.62),m,F,1.24,ie);let oe=new Be(new at(.4,.4,.4),y);oe.position.set(F,1.5,ie),e.add(oe),l.lanterns.push({x:F,z:ie,glow:oe}),a(new yn(.56,.36,4),m,F,1.9,ie,{rot:[0,Math.PI/4,0]});let pe=new Rr(16749632,46,17,1.9);pe.position.set(F,1.6,ie),e.add(pe),_.push({l:pe,base:46,ph:Fe()*9}),t.push({x:F,z:ie,r:.5,tag:"lanterns"})}h("gate");let L=r(2760476,.8),T=r(1777702,.7);for(let q of[-1,1])a(new st(.38,.44,6.4,10),L,q*3.4,2.7,-17.2),a(new at(1.1,.5,1.1),m,q*3.4,-.25,-17.2);a(new at(9.4,.5,.6),L,0,5.1,-17.2),a(new at(8.2,.34,.5),L,0,4.3,-17.2),a(new at(10.8,.3,2.2),T,0,6.05,-17.2,{rot:[0,0,0]}),a(new at(11.4,.16,2.7),T,0,5.85,-17.2),a(new at(2.2,.8,.12),r(1382685),0,4.72,-16.86),o=null;for(let q=0;q<4;q++)a(new at(6.4+q*.5,.2,.7),m,0,-.1-q*.1,-14.9-q*.62);let I=[],P=[];for(let q=0;q<1400&&I.length<520;q++){let F=Fe()*6.2832,ie=17.2+Math.pow(Fe(),1.5)*30,oe=Math.sin(F)*ie,pe=Math.cos(F)*ie;if(pe>7&&Math.abs(oe)<30||Math.abs(oe)<5&&pe<-15&&pe>-32)continue;let Le=8+Fe()*9,Ie=(Fe()-.5)*.16,tt=Fe()*6.28;I.push({x:oe,z:pe,h:Le,lean:Ie,ry:tt,w:.8+Fe()*.7});for(let z=0;z<7;z++){let Zt=.42+Fe()*.58,qe=.5+Fe()*1,Xe=Fe()*6.2832;P.push({x:oe+Math.sin(Xe)*qe*.5,y:Le*Zt-.5,z:pe+Math.cos(Xe)*qe*.5,ry:Xe,tilt:-.25-Fe()*.7,s:1.5+Fe()*1.6,c:.7+Fe()*.5})}}let w=(()=>{let q=rc(64),F=q.getContext("2d"),ie=F.createLinearGradient(0,0,64,0);ie.addColorStop(0,"#2c4a2c"),ie.addColorStop(.45,"#6f9a58"),ie.addColorStop(1,"#27422a"),F.fillStyle=ie,F.fillRect(0,0,64,64),F.fillStyle="rgba(210,225,170,.75)",F.fillRect(0,0,64,3),F.fillStyle="rgba(15,30,15,.7)",F.fillRect(0,3,64,3);let oe=new kn(q);return oe.colorSpace=_t,oe.wrapS=oe.wrapT=hi,oe.repeat.set(1,14),oe})(),M=(()=>{let q=document.createElement("canvas");q.width=256,q.height=128;let F=q.getContext("2d");for(let oe=0;oe<9;oe++){let pe=(oe/8-.5)*1.5+(Fe()-.5)*.15,Le=150+Fe()*95,Ie=9+Fe()*6;F.save(),F.translate(6,64),F.rotate(pe);let tt=F.createLinearGradient(0,0,Le,0);tt.addColorStop(0,"#2d5a2c"),tt.addColorStop(.6,oe%2?"#5b9048":"#467c3c"),tt.addColorStop(1,"#8fb468"),F.fillStyle=tt,F.beginPath(),F.moveTo(0,0),F.quadraticCurveTo(Le*.4,-Ie,Le,0),F.quadraticCurveTo(Le*.4,Ie,0,0),F.fill(),F.restore()}let ie=new kn(q);return ie.colorSpace=_t,ie})(),C={value:0},k=(q,F)=>(q.onBeforeCompile=ie=>{ie.uniforms.uWind=C,ie.vertexShader=`uniform float uWind;
`+ie.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 io = instanceMatrix[3].xyz; float hgt = ${F?"clamp(io.y / 14., 0., 1.) + position.x * .05":"position.y + .5"};
        float ph = uWind * 1.1 + io.x * .21 + io.z * .17; vec2 off = vec2(sin(ph) + .4 * sin(ph * 2.3 + 1.), cos(ph * .8)) * hgt * hgt * ${F?".55":".5"};
        ${F?"off += vec2(sin(uWind * 3.1 + io.x + position.x * 2.), 0.) * .06 * position.x;":""}
        transformed.xz += (inverse(mat3(instanceMatrix)) * vec3(off.x, 0., off.y)).xz;
      #endif`)},q),N=new st(.045,.085,1,7,10),X=new di(N,k(new St({map:w,roughness:.55})),I.length),J=new Mr(1,.5,4,1);J.translate(.5,0,0);{let q=J.attributes.position;for(let F=0;F<q.count;F++)q.setZ(F,-q.getX(F)*q.getX(F)*.22);J.computeVertexNormals()}let U=new di(J,k(new St({map:M,alphaTest:.45,side:Xt,roughness:.8}),!0),P.length),W=new xt,H=new ge;I.forEach((q,F)=>{W.position.set(q.x,q.h/2-.5,q.z),W.rotation.set(q.lean,q.ry,q.lean*.6),W.scale.set(q.w,q.h,q.w),W.updateMatrix(),X.setMatrixAt(F,W.matrix)}),P.forEach((q,F)=>{W.position.set(q.x,q.y,q.z),W.rotation.set(0,0,0),W.rotation.order="YZX",W.rotation.set(Fe()*.8-.4,q.ry,q.tilt),W.scale.set(q.s,q.s,q.s),W.updateMatrix(),U.setMatrixAt(F,W.matrix),U.setColorAt(F,H.setRGB(q.c*.8,q.c,q.c*.75))}),X.castShadow=U.castShadow=!0,U.customDepthMaterial=k(new da({depthPacking:Ph,map:M,alphaTest:.45}),!0),X.frustumCulled=U.frustumCulled=!1,e.add(X,U);for(let q=0;q<46;q++){let F=Fe()*6.2832,ie=16.6+Fe()*14,oe=.4+Fe()*1.1;a(new $n(oe,0),r(2830647),Math.sin(F)*ie,-.5+oe*.35,Math.cos(F)*ie,{rot:[Fe()*3,Fe()*3,0]})}let $=new It({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new ge(.34,.46,.62)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      varying vec3 vW; uniform float uTime; uniform vec3 uColor;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a = .5, s = 0.; for(int i=0;i<4;i++){ s += a*noise(p); p = p*2.03 + 7.1; a *= .5; } return s; }
      void main(){
        vec2 p = vW.xz; float r = length(p);
        float n = fbm(p * .11 + vec2(uTime * .035, -uTime * .02)) * fbm(p * .05 - uTime * .012 + 3.);
        float a = smoothstep(.16, .55, n * 1.9) * (.1 + .5 * smoothstep(9., 20., r)) * smoothstep(80., 40., r);
        gl_FragColor = vec4(uColor, a * .6);
      }`}),re=new Be(new Nn(85,40),$);re.rotation.x=-Math.PI/2,re.position.y=.55,re.renderOrder=2,e.add(re);let ue={k:0,to:0};function xe(q,F){let ie=q.scene.clone(!0),oe=new Ve;ie.traverse(tt=>{tt.isMesh&&(tt.castShadow=tt.receiveShadow=!0)}),F.pre&&ie.rotation.set(...F.pre),oe.add(ie),oe.updateMatrixWorld(!0);let pe=new gt().setFromObject(ie),Le=pe.getSize(new R),Ie=F.size/(F.fit==="long"?Math.max(Le.x,Le.z):F.fit==="wide"?Le.x:Le.y);return ie.scale.multiplyScalar(Ie),oe.updateMatrixWorld(!0),pe=new gt().setFromObject(ie),ie.position.set(-(pe.min.x+pe.max.x)/2,-pe.min.y,-(pe.min.z+pe.max.z)/2),oe.position.set(F.x,F.y??0,F.z),oe.rotation.y=F.ry??0,e.add(oe),oe.userData.half={x:(pe.max.x-pe.min.x)/2,z:(pe.max.z-pe.min.z)/2},oe}function He(q,F,ie={}){let oe=F.userData.half,pe=Math.max(oe.x,oe.z),Le=Math.min(oe.x,oe.z),Ie=F.rotation.y,tt=oe.x>=oe.z?[Math.cos(Ie),-Math.sin(Ie)]:[Math.sin(Ie),Math.cos(Ie)];if(pe<Le*1.5){t.push({x:F.position.x,z:F.position.z,r:(ie.k??.8)*(pe+Le)/2,tag:q});return}let z=Le*(ie.k??.9),Zt=Math.max(2,Math.ceil((pe-z)/(z*.8))+1);for(let qe=0;qe<Zt;qe++){let Xe=(qe/(Zt-1)*2-1)*(pe-z);t.push({x:F.position.x+tt[0]*Xe,z:F.position.z+tt[1]*Xe,r:z,tag:q})}}let Z=q=>{for(let F=t.length-1;F>=0;F--)t[F].tag===q&&t.splice(F,1)};function ae(q){if(q.pillar_tall&&q.pillar_broken){c.pillars.visible=!1,Z("pillars");for(let F of l.pillars)He("pillars",F.far?xe(q.pillar_tall,{x:F.x,z:F.z,size:F.h+1.2,ry:F.ry}):xe(q.pillar_broken,{x:F.x,z:F.z,size:Math.max(1.1,F.h),ry:F.ry}),{k:.78})}if(q.pillar_fallen){c.fallen.visible=!1,Z("fallen");for(let F of l.fallen)He("fallen",xe(q.pillar_fallen,{x:F.x,z:F.z,size:2.9,fit:"long",ry:F.ry}))}if(q.burner&&(c.burner.visible=!1,Z("burner"),He("burner",xe(q.burner,{x:3.4,z:-8.6,size:1.5,ry:.6}),{k:.78})),q.lantern){c.lanterns.visible=!1,Z("lanterns");for(let F of l.lanterns)He("lanterns",xe(q.lantern,{x:F.x,z:F.z,size:2.3,ry:Math.atan2(-F.x,-F.z)}),{k:.62}),F.glow.scale.setScalar(.72),F.glow.position.y=1.35}q.gate&&(c.gate.visible=!1,xe(q.gate,{x:0,z:-17.4,y:-.5,size:11.5,fit:"wide"}))}return{top:f,moon:g,lanterns:_,useProps:ae,root:e,activate(){i.background=n,i.fog=s,Oi.length=0,Oi.push(...t)},setMood(q){ue.to=q},update(q,F){$.uniforms.uTime.value=F,C.value=F,ue.k+=(ue.to-ue.k)*Math.min(1,q*1.2);for(let ie of _)ie.l.intensity=ie.base*(.86+.1*Math.sin(F*7+ie.ph)+.06*Math.sin(F*17.3+ie.ph*2))*(1+ue.k*.25),ie.l.color.setRGB(1,.58-.42*ue.k,.25-.2*ue.k);y.color.setRGB(3.2,1.5-1.1*ue.k,.5-.35*ue.k),g.intensity=2.3-ue.k*.25}}}function pt(i,e){for(let t=0;t<2;t++){for(let r of Oi){let a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),l=r.r+e;c<l&&c>1e-4&&(i.x=r.x+a/c*l,i.z=r.z+o/c*l)}let n=Math.hypot(i.x,i.z),s=Ma-e;n>s&&(i.x*=s/n,i.z*=s/n)}return i}var Ee=(()=>{let i=77012;return()=>(i=i*1664525+1013904223>>>0)/4294967296})();function My(){let e=document.createElement("canvas");e.width=e.height=2048;let t=e.getContext("2d"),n=2048/2,s=t.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"#1f4560"),s.addColorStop(.55,"#356a86"),s.addColorStop(1,"#6f9db2"),t.fillStyle=s,t.fillRect(0,0,2048,2048);for(let a=0;a<26;a++){let o=Ee()*6.28,c=n*(.15+Ee()*.8),l=n+Math.cos(o)*c,h=n+Math.sin(o)*c,u=90+Ee()*120;t.save(),t.translate(l,h),t.rotate(Ee()*6.28),t.fillStyle="rgba(14,30,44,.32)",t.fillRect(-u/2,-5,u,10),t.fillRect(-u/2+u*.22,-16,8,32),t.restore()}for(let a=0;a<70;a++){let o=Ee()*2048,c=Ee()*2048,l=Ee()*6.28,h=[[o,c]];for(let u=0;u<10+Ee()*10;u++)l+=(Ee()-.5)*.9,o+=Math.cos(l)*46,c+=Math.sin(l)*46,h.push([o,c]);for(let[u,d,f]of[["rgba(10,34,52,.5)",5,3],["rgba(235,250,255,.75)",2.2,0]])t.strokeStyle=u,t.lineWidth=d,t.beginPath(),h.forEach(([g,b],x)=>x?t.lineTo(g+f,b+f):t.moveTo(g+f,b+f)),t.stroke()}for(let a=0;a<9;a++)t.strokeStyle="rgba(230,246,252,.16)",t.lineWidth=3+Ee()*5,t.beginPath(),t.arc(n,n,n*(.12+a*.1),Ee()*6,Ee()*6+3+Ee()*3),t.stroke();for(let a=0;a<60;a++){let o=Ee()*6.28,c=n*Math.sqrt(Ee()),l=n+Math.cos(o)*c,h=n+Math.sin(o)*c,u=40+Ee()*170,d=t.createRadialGradient(l,h,0,l,h,u);d.addColorStop(0,"rgba(240,250,255,.16)"),d.addColorStop(1,"rgba(240,250,255,0)"),t.fillStyle=d,t.fillRect(l-u,h-u,u*2,u*2)}for(let a=0;a<22e3;a++)t.fillStyle=Ee()>.5?"rgba(255,255,255,.06)":"rgba(0,20,40,.05)",t.fillRect(Ee()*2048,Ee()*2048,2+Ee()*3,2+Ee()*3);let r=new kn(e);return r.colorSpace=_t,r.anisotropy=8,r}function wy(){let i=[[.09,1.5,.02,0,.95,0],[.36,.06,.06,0,1.72,0],[.05,.34,.05,0,1.92,0]],e=[],t=[],n=0;for(let[a,o,c,l,h,u]of i){let d=new at(a,o,c);d.translate(l,h,u),e.push(...d.attributes.position.array);for(let f of d.index.array)t.push(f+n);n+=d.attributes.position.count}let s=new yn(.045,.22,4);s.rotateX(Math.PI),s.scale(1,1,.25),s.translate(0,.09,0),e.push(...s.attributes.position.array);for(let a of s.index.array)t.push(a+n);let r=new bt;return r.setAttribute("position",new Qe(e,3)),r.setIndex(t),r.computeVertexNormals(),r}function Jf(i){let e=new Ve,t=[];e.visible=!1,i.add(e);let n=new ge(3886438),s=new ts(4742262,.019),r=(U,W=.9,H={})=>new St({color:U,roughness:W,...H}),a=(U,W,H,$,re,ue={})=>{let xe=new Be(U,W);return xe.position.set(H,$,re),xe.castShadow=ue.cast!==!1,xe.receiveShadow=!0,ue.rot&&xe.rotation.set(...ue.rot),ue.s&&xe.scale.set(...ue.s),(ue.parent||e).add(xe),xe};a(new Nn(14.4,96),new St({map:My(),roughness:.28,metalness:.15}),0,0,0,{cast:!1,rot:[-Math.PI/2,0,0]}),a(new Nn(90,48),r(8295336,1),0,-.35,0,{cast:!1,rot:[-Math.PI/2,0,0]});let o=r(10334402,1),c=r(5661037,.95);for(let U=0;U<64;U++){let W=U/64*6.2832+Ee()*.08,H=14.8+Ee()*1.6,$=.9+Ee()*1.3;a(new $n($,1),o,Math.sin(W)*H,-.35+$*.2,Math.cos(W)*H,{s:[1.3,.5,1.1],rot:[0,Ee()*6,0]})}for(let U=0;U<40;U++){let W=Ee()*6.2832,H=17+Ee()*20,$=.6+Ee()*1.6;a(new $n($,0),c,Math.sin(W)*H,$*.2-.3,Math.cos(W)*H,{rot:[Ee()*3,Ee()*3,0]})}e.add(new as(12375029,3424858,.7));let l=new Tn(16765104,2.1);l.position.set(16,17,-15),l.castShadow=!0;let h=matchMedia("(pointer: coarse)").matches?1024:2048;l.shadow.mapSize.set(h,h),Object.assign(l.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:4,far:70}),l.shadow.bias=-6e-4,l.shadow.normalBias=.03,l.shadow.radius=3,e.add(l);let u=new Tn(12374271,.45);u.position.set(-5,12,16),e.add(u);let d={},f={crystals:[],steles:[],monument:[{x:0,z:-18.5}]},g=U=>(d[U]=new Ve,e.add(d[U]),d[U]),b=new St({color:10474730,roughness:.15,metalness:.1,transparent:!0,opacity:.82,emissive:1456202}),x=g("crystals");for(let[U,W,H]of[[-7.2,-4.5,1.1],[6.4,-6.8,1.25],[7.4,3.4,1],[-5.6,5.8,.9],[.6,-10.6,1.2]]){f.crystals.push({x:U,z:W,s:H,ry:Ee()*6});for(let $=0;$<4;$++)a(new yn(.35*H,(1.4+Ee()*1.6)*H,5),b,U+(Ee()-.5)*.8,.7*H,W+(Ee()-.5)*.8,{parent:x,rot:[(Ee()-.5)*.6,Ee()*3,(Ee()-.5)*.6]});t.push({x:U,z:W,r:.95*H,tag:"crystals"})}x=g("steles");let m=r(7042690,.9);for(let U of[.5,1.9,3.5,4.6,5.6]){let W=Math.sin(U)*12.3,H=Math.cos(U)*12.3,$=H<0;f.steles.push({x:W,z:H,ry:Math.atan2(-W,-H),h:$?2.6:1.5}),a(new at(.9,$?2.4:1.3,.3),m,W,$?1.2:.65,H,{parent:x,rot:[0,Math.atan2(-W,-H),(Ee()-.5)*.1]}),t.push({x:W,z:H,r:.7,tag:"steles"})}x=g("monument"),a(new at(1.6,13,.5),m,0,6.5,-18.5,{parent:x}),a(new at(5,.7,.9),m,0,9.5,-18.5,{parent:x});let v=wy(),_=[];for(let U=0;U<900&&_.length<300;U++){let W=Ee()*6.2832,H=15.6+Math.pow(Ee(),1.3)*26,$=Math.sin(W)*H,re=Math.cos(W)*H;re>9&&Math.abs($)<26||_.push({x:$,z:re,y:-.55-Ee()*.35,s:.9+Ee()*1.5,rx:(Ee()-.5)*.5,rz:(Ee()-.5)*.5,ry:Ee()*6})}for(let[U,W]of[[-3.2,-7.6],[3.9,6.6],[-9.3,1.2],[9.8,-1.8],[-1.6,9.4],[4.6,-2.2]])_.push({x:U,z:W,y:-.5,s:1.25,rx:(Ee()-.5)*.3,rz:(Ee()-.5)*.3,ry:Ee()*6}),t.push({x:U,z:W,r:.32});let y=new di(v,new St({color:5990002,roughness:.5,metalness:.75}),_.length),L=new xt;_.forEach((U,W)=>{L.position.set(U.x,U.y*U.s,U.z),L.rotation.set(U.rx,U.ry,U.rz),L.scale.setScalar(U.s),L.updateMatrix(),y.setMatrixAt(W,L.matrix)}),y.castShadow=!0,y.frustumCulled=!1,e.add(y);let T=new di(new yn(1,1,5),new St({color:7311272,roughness:.5,flatShading:!0}),46);for(let U=0;U<46;U++){let W=Ee()*6.2832,H=30+Ee()*30,$=9+Ee()*20;Math.cos(W)*H>12&&Math.abs(Math.sin(W)*H)<34?L.scale.setScalar(0):(L.position.set(Math.sin(W)*H,$/2-1,Math.cos(W)*H),L.rotation.set((Ee()-.5)*.2,Ee()*6,(Ee()-.5)*.2),L.scale.set(2+Ee()*3,$,2+Ee()*3)),L.updateMatrix(),T.setMatrixAt(U,L.matrix)}T.frustumCulled=!1,e.add(T);let I=matchMedia("(pointer: coarse)").matches?700:1500,P=new Float32Array(I*3),w=new Float32Array(I);for(let U=0;U<I;U++)P[U*3]=(Ee()-.5)*46,P[U*3+1]=Ee()*16,P[U*3+2]=(Ee()-.5)*40,w[U]=1.6+Ee()*1.8;let M=new bt;M.setAttribute("position",new Pt(P,3));let C=new ns(M,new Is({color:14543090,size:.09,transparent:!0,opacity:.7,depthWrite:!1,sizeAttenuation:!0}));C.frustumCulled=!1,e.add(C);function k(U,W){let H=U.scene.clone(!0),$=new Ve;H.traverse(xe=>{xe.isMesh&&(xe.castShadow=xe.receiveShadow=!0,W.ice&&(xe.material=xe.material.clone(),xe.material.transparent=!0,xe.material.opacity=.9,xe.material.roughness=.2,xe.material.emissive=new ge(1390666)))}),$.add(H),$.updateMatrixWorld(!0);let re=new gt().setFromObject(H),ue=re.getSize(new R);return H.scale.multiplyScalar(W.size/(W.fit==="wide"?Math.max(ue.x,ue.z):ue.y)),$.updateMatrixWorld(!0),re=new gt().setFromObject(H),H.position.set(-(re.min.x+re.max.x)/2,-re.min.y,-(re.min.z+re.max.z)/2),$.position.set(W.x,W.y??0,W.z),$.rotation.y=W.ry??0,e.add($),{g:$,r:Math.max(re.max.x-re.min.x,re.max.z-re.min.z)/2}}let N=U=>{for(let W=t.length-1;W>=0;W--)t[W].tag===U&&t.splice(W,1)};function X(U){if(U.crystal){d.crystals.visible=!1,N("crystals");for(let W of f.crystals){let{r:H}=k(U.crystal,{x:W.x,z:W.z,size:2.6*W.s,ry:W.ry,ice:!0});t.push({x:W.x,z:W.z,r:H*.72,tag:"crystals"})}}if(U.stele){d.steles.visible=!1,N("steles");for(let W of f.steles){let{r:H}=k(U.stele,{x:W.x,z:W.z,size:W.h,ry:W.ry});t.push({x:W.x,z:W.z,r:Math.min(.9,H*.7),tag:"steles"})}}U.monument&&(d.monument.visible=!1,k(U.monument,{x:0,z:-19,y:-.6,size:15,ry:0}))}let J={k:0,to:0};return{root:e,lanterns:[],useProps:X,activate(){i.background=n,i.fog=s,Oi.length=0,Oi.push(...t)},setMood(U){J.to=U},update(U,W,H){J.k+=(J.to-J.k)*Math.min(1,U*1.2),l.intensity=2.1-J.k*.9,l.color.setRGB(1,.82-.25*J.k,.69+.25*J.k),n.setRGB(.23-.07*J.k,.3-.13*J.k,.4-.08*J.k),s.color.setRGB(.28-.08*J.k,.36-.14*J.k,.46-.07*J.k);let $=H?H.x:0,re=H?H.z:0,ue=Math.sin(W*.3)*.8+.6;for(let xe=0;xe<I;xe++){let He=xe*3;P[He]+=ue*U,P[He+1]-=w[xe]*U*(1+J.k),P[He+2]+=.3*U,P[He+1]<0&&(P[He+1]=16,P[He]=$+(Ee()-.5)*46,P[He+2]=re+(Ee()-.5)*40)}M.attributes.position.needsUpdate=!0}}}var Nt=(()=>{let i=31337;return()=>(i=i*1664525+1013904223>>>0)/4294967296})();function Sy(){let e=document.createElement("canvas");e.width=e.height=2048;let t=e.getContext("2d"),n=2048/2;t.fillStyle="#5a554a",t.fillRect(0,0,2048,2048);let s=[0,.16,.3,.44,.58,.72,.86,1];for(let a=1;a<s.length;a++){let o=s[a-1]*n,c=s[a]*n,l=a===1?1:Math.round((o+c)*Math.PI/190),h=Nt()*6.28;for(let u=0;u<l;u++){let d=h+u/l*6.2832,f=h+(u+1)/l*6.2832,g=Nt();t.beginPath(),t.arc(n,n,c,d,f),t.arc(n,n,o,f,d,!0),t.closePath(),t.fillStyle=`hsl(${40+g*14},${10+g*8}%,${31+g*8}%)`,t.fill(),t.strokeStyle="rgba(40,30,12,.8)",t.lineWidth=4,t.stroke()}}for(let a=0;a<90;a++){let o=Nt()*2048,c=Nt()*2048,l=Nt()*6.28;t.strokeStyle=Nt()>.5?"rgba(255,252,240,.22)":"rgba(70,64,52,.16)",t.lineWidth=1.5+Nt()*3,t.beginPath(),t.moveTo(o,c);for(let h=0;h<14;h++)l+=(Nt()-.5)*.7,o+=Math.cos(l)*40,c+=Math.sin(l)*40,t.lineTo(o,c);t.stroke()}t.strokeStyle="#c79a36",t.lineCap="round";for(let[a,o]of[[.155,10],[.44,7],[.585,5],[.86,12]])t.lineWidth=o,t.beginPath(),t.arc(n,n,n*a,0,6.2832),t.stroke();t.lineWidth=6;for(let a=0;a<36;a++){let o=a/36*6.2832,c=n*.47,l=n*.56;t.save(),t.translate(n+Math.cos(o)*(c+l)/2,n+Math.sin(o)*(c+l)/2),t.rotate(o),t.strokeRect(-18,-14,36,28),t.strokeRect(-8,-5,16,10),t.restore()}t.lineWidth=8,t.beginPath();for(let a=0;a<=16;a++){let o=a/16*6.2832,c=n*(a%2?.06:.145);a?t.lineTo(n+Math.cos(o)*c,n+Math.sin(o)*c):t.moveTo(n+Math.cos(o)*c,n+Math.sin(o)*c)}t.stroke();for(let a=0;a<2e4;a++)t.fillStyle=Nt()>.5?"rgba(255,255,255,.035)":"rgba(0,0,0,.04)",t.fillRect(Nt()*2048,Nt()*2048,2+Nt()*3,2+Nt()*3);let r=new kn(e);return r.colorSpace=_t,r.anisotropy=8,r}function Zf(i){let e=new Ve,t=[];e.visible=!1,i.add(e);let n=new ge(4862008),s=new ts(5913148,.011),r=(P,w=.9,M={})=>new St({color:P,roughness:w,...M}),a=(P,w,M,C,k,N={})=>{let X=new Be(P,w);return X.position.set(M,C,k),X.castShadow=N.cast!==!1,X.receiveShadow=!0,N.rot&&X.rotation.set(...N.rot),N.s&&X.scale.set(...N.s),(N.parent||e).add(X),X};a(new Nn(14.4,96),new St({map:Sy(),roughness:.42,metalness:.08}),0,0,0,{cast:!1,rot:[-Math.PI/2,0,0]});let o=r(10123820,.4,{metalness:.85}),c=r(9078390,.5),l=r(5918792,.95,{flatShading:!0});a(new st(14.4,14.6,.5,96,1,!0),o,0,-.25,0),a(new st(14.6,13.4,2.2,48,1,!0),c,0,-1.6,0),a(new yn(13.6,15,9,3),l,0,-10.2,0,{rot:[Math.PI,.4,0],cast:!1});for(let P=0;P<26;P++){let w=Nt()*6.2832,M=22+Nt()*34,C=2+Nt()*5,k=-5+Nt()*9;Math.cos(w)*M>10&&Math.abs(Math.sin(w)*M)<30||(a(new $n(C,0),l,Math.sin(w)*M,k,Math.cos(w)*M,{s:[1.3,.8+Nt()*.7,1.1],rot:[Nt(),Nt()*6,Nt()],cast:!1}),a(new st(C*.8,C*.95,.3,9),c,Math.sin(w)*M,k+C*.62,Math.cos(w)*M,{cast:!1}))}let h=new It({uniforms:{uTime:{value:0},uStorm:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      varying vec3 vW; uniform float uTime, uStorm;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a = .5, s = 0.; for(int i=0;i<5;i++){ s += a*noise(p); p = p*2.02 + 5.3; a *= .5; } return s; }
      void main(){
        vec2 p = vW.xz * .028 + vec2(uTime * .012, uTime * .006);
        float n = fbm(p + fbm(p * 1.7 - uTime * .01) * .9), puff = smoothstep(.32, .78, n);
        vec3 lit = mix(vec3(.85,.46,.22), vec3(.3,.27,.45), uStorm), shade = mix(vec3(.2,.1,.14), vec3(.05,.05,.12), uStorm);
        vec3 c = mix(shade, lit, puff) * (.75 + .5 * fbm(p * 3.));
        float d = length(vW.xz); c = mix(c, mix(vec3(.36,.22,.22), vec3(.1,.08,.16), uStorm), smoothstep(60., 150., d));
        gl_FragColor = vec4(c, 1.);
      }`}),u=new Be(new Nn(170,48),h);u.rotation.x=-Math.PI/2,u.position.y=-8,e.add(u);let d=new as(16765096,3484232,.5);e.add(d);let f=new Tn(16758896,2.6);f.position.set(-17,15,-9),f.castShadow=!0;let g=matchMedia("(pointer: coarse)").matches?1024:2048;f.shadow.mapSize.set(g,g),Object.assign(f.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:4,far:70}),f.shadow.bias=-6e-4,f.shadow.normalBias=.03,f.shadow.radius=3,e.add(f);let b=new Tn(10133759,.4);b.position.set(6,12,16),e.add(b);let x={},m={pillars:[],bell:[{x:-9.6,z:-6.6}],gate:[{x:0,z:-20}]},v=P=>(x[P]=new Ve,e.add(x[P]),x[P]),_=v("pillars");for(let P=0;P<8;P++){let w=(P+.5)/8*6.2832,M=Math.sin(w)*12.7,C=Math.cos(w)*12.7,k=C<-1,N=k?6.5:C<6?3:1.4;m.pillars.push({x:M,z:C,h:N,ry:Nt()*6}),a(new st(.42,.5,N,10),c,M,N/2,C,{parent:_}),a(new st(.7,.7,.3,10),o,M,.15,C,{parent:_}),t.push({x:M,z:C,r:.8,tag:"pillars"})}_=v("bell"),a(new st(.9,1.2,1.8,14),r(6969908,.5,{metalness:.8}),-9.6,1.4,-6.6,{parent:_}),a(new at(3,.3,.5),c,-9.6,2.9,-6.6,{parent:_}),t.push({x:-9.6,z:-6.6,r:1.5,tag:"bell"}),_=v("gate");for(let P of[-1,1])a(new at(1.4,12,1.4),c,P*5,6,-20,{parent:_});a(new at(14,1.2,2.4),o,0,12.4,-20,{parent:_}),a(new st(8.5,6,3,9),l,0,-1.6,-20.5,{cast:!1}),a(new st(8.4,8.5,.3,24),c,0,.05,-20.5,{cast:!1});for(let P=0;P<5;P++)a(new at(5.2,.2,.9),c,0,.05,-14.6-P*.95,{cast:!1});function y(P,w){let M=P.scene.clone(!0),C=new Ve;M.traverse(X=>{X.isMesh&&(X.castShadow=X.receiveShadow=!0)}),C.add(M),C.updateMatrixWorld(!0);let k=new gt().setFromObject(M),N=k.getSize(new R);return M.scale.multiplyScalar(w.size/(w.fit==="wide"?Math.max(N.x,N.z):N.y)),C.updateMatrixWorld(!0),k=new gt().setFromObject(M),M.position.set(-(k.min.x+k.max.x)/2,-k.min.y,-(k.min.z+k.max.z)/2),C.position.set(w.x,w.y??0,w.z),C.rotation.y=w.ry??0,e.add(C),{g:C,r:Math.max(k.max.x-k.min.x,k.max.z-k.min.z)/2}}let L=P=>{for(let w=t.length-1;w>=0;w--)t[w].tag===P&&t.splice(w,1)};function T(P){if(P.jadepillar){x.pillars.visible=!1,L("pillars");for(let w of m.pillars){let{r:M}=y(P.jadepillar,{x:w.x,z:w.z,size:w.h,ry:w.ry});t.push({x:w.x,z:w.z,r:Math.max(.5,Math.min(.9,M*.75)),tag:"pillars"})}}if(P.bell){x.bell.visible=!1,L("bell");let{r:w}=y(P.bell,{x:-9.6,z:-6.6,size:3.4,ry:.9});t.push({x:-9.6,z:-6.6,r:Math.min(1.7,w*.8),tag:"bell"})}P.skygate&&(x.gate.visible=!1,y(P.skygate,{x:0,z:-20.5,y:.1,size:15,fit:"wide"}))}let I={k:0,to:0};return{root:e,lanterns:[],useProps:T,activate(){i.background=n,i.fog=s,Oi.length=0,Oi.push(...t)},setMood(P){I.to=P},update(P,w){I.k+=(I.to-I.k)*Math.min(1,P*1.1);let M=I.k;h.uniforms.uTime.value=w,h.uniforms.uStorm.value=M,f.intensity=2.6-M*1.6,f.color.setRGB(1,.72-.15*M,.44+.4*M),d.intensity=.5-.15*M,b.intensity=.4+.9*M,n.setRGB(.29-.2*M,.19-.12*M,.22-.04*M),s.color.setRGB(.35-.25*M,.23-.15*M,.24-.04*M)}}}var Bi=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
  float fbm(vec2 p){ float a = .5, s = 0.; for(int i=0;i<4;i++){ s += a*noise(p); p = p*2.03 + 3.7; a *= .5; } return s; }`,Ey="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }";function Ls(i,e=0,t=56){let n=[],s=[],r=[];for(let o=0;o<=t;o++){let c=o/t,l=(c-.5)*i,h=Math.sin(l),u=Math.cos(l);n.push(h*e,0,u*e,h,0,u),s.push(c,0,c,1)}for(let o=0;o<t;o++){let c=o*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}let a=new bt;return a.setAttribute("position",new Qe(n,3)),a.setAttribute("uv",new Qe(s,2)),a.setIndex(r),a}function Qf(){let i=new bt;return i.setAttribute("position",new Qe([-.5,0,0,.5,0,0,-.5,0,1,.5,0,1],3)),i.setAttribute("uv",new Qe([0,0,1,0,0,1,1,1],2)),i.setIndex([0,2,1,1,2,3]),i}var Bh=new Map,Bn=(i,e)=>(Bh.has(i)||Bh.set(i,e()),Bh.get(i)),$f=`
  varying vec2 vUv; uniform float uT, uDir, uSeed, uAlpha, uStatic; uniform vec3 uColor; ${Bi}
  void main(){
    float u = clamp(uDir > 0. ? vUv.x : 1. - vUv.x, 0., 1.), vy = clamp(vUv.y, 0., 1.);   /* pow() of a slightly negative varying is NaN, and bloom spreads NaN over the whole frame */
    float head = uT * 2.4, behind = head - u;
    float trail = mix(step(0., behind) * exp(-max(behind, 0.) * 2.4), 1., uStatic);
    float tip = pow(max(sin(3.14159 * u), 0.), .55);                                   /* both ends taper to a point */
    float core = pow(vy, 10.), body = pow(vy, 2.4) * .5;
    float n = fbm(vec2(u * 7. - uT * 5., vy * 3.5 + uSeed));
    float erode = mix(smoothstep(uT * 1.2 - .3, uT * 1.2 + .02, n * .75 + trail * .55), .65 + .5 * n, uStatic);
    float a = min((core * 1.5 + body * (.4 + 1.1 * n)) * trail * tip * erode, 1.3) * uAlpha;
    gl_FragColor = vec4(uColor * a * 1.9 + vec3(.9) * core * trail * tip * erode * uAlpha * .55, 1.);
  }`,Ty=`
  varying vec2 vUv; uniform float uT, uDir, uSeed; ${Bi}
  void main(){
    float u = uDir > 0. ? vUv.x : 1. - vUv.x; float tip = pow(max(sin(3.14159 * u), 0.), .7);
    float n = fbm(vec2(u * 5. + uSeed, vUv.y * 3.));
    float a = pow(clamp(vUv.y, 0., 1.), 1.6) * tip * step(u, uT * 3.) * smoothstep(uT * 1.1 - .15, uT * 1.1 + .15, n + .25) * .55;
    gl_FragColor = vec4(vec3(.01, .02, .03), a);
  }`,Ay=`
  varying vec2 vUv; uniform float uP, uTime, uFade, uLine, uSide; uniform vec3 uColor; ${Bi}
  void main(){
    float r = clamp(vUv.y, 0., 1.), lat = abs(vUv.x - .5) * 2., a; vec3 col = uColor;
    if (uLine > .5) {
      /* aiming line: a hair-thin core with dashes running toward the target and a faint halo; it tightens and brightens as the shot nears */
      float core = smoothstep(.11, 0., lat), halo = smoothstep(1., 0., lat) * .16, dash = .35 + .65 * step(.4, fract(r * 11. - uTime * 3.));
      float len = smoothstep(0., .03, r) * smoothstep(1., .5, r), hot = pow(uP, 5.);
      a = (core * dash * (.3 + .5 * uP) + halo * (.15 + .85 * uP) + core * hot) * len * uFade; col *= 1. + hot * 1.6;
    } else {
      /* area warning: quiet ink wash, a crisp thin outline, and one bright front sweeping outward as the timer runs */
      float grain = .78 + .22 * noise(vec2(vUv.x * 46., r * 5.));
      float rim = smoothstep(.972, .988, r) + uSide * smoothstep(.975, .995, lat) * smoothstep(.02, .1, r);
      float front = smoothstep(.07, 0., abs(r - uP)) * step(r, uP + .01), wash = (.035 + .08 * r * r) * grain, filled = step(r, uP) * .07 * grain;
      a = (wash + filled + rim * .55 + front * .5) * uFade * (1. - uSide * smoothstep(.995, 1., lat)); col *= 1. + front * .9 + rim * .5;
    }
    gl_FragColor = vec4(col, a);
  }`,Ry=`
  varying vec2 vUv; uniform float uT, uSeed; uniform vec3 uColor; ${Bi}
  void main(){
    float r = vUv.y, front = 1. - pow(max(1. - uT, 0.), 3.);
    float n = fbm(vec2(vUv.x * 26. + uSeed, r * 4. - uT * 3.));
    float band = smoothstep(.16, 0., front - r) * step(r, front) * (.5 + n);
    float a = band * pow(max(1. - uT, 0.), 1.5);
    gl_FragColor = vec4(uColor * a * 1.8, 1.);
  }`,Cy=`
  varying vec2 vUv; uniform float uT, uSeed; uniform vec3 uColor; ${Bi}
  void main(){
    float r = vUv.y, ang = vUv.x * 6.2832;
    float rays = pow(abs(sin(ang * 5. + uSeed + fbm(vec2(r * 3., uSeed)) * 3.)), 26.) * smoothstep(1., .25, r);
    float scorch = smoothstep(.75, .0, r) * .5;
    float glow = rays * smoothstep(1., 0., uT * 1.6);
    gl_FragColor = vec4(mix(vec3(.01), uColor * 2.2, glow), (scorch + rays * .8) * smoothstep(1., .6, uT));
  }`,Py=`
  varying vec2 vUv; uniform float uT, uTime; uniform vec3 uColor; ${Bi}
  float ring(float r, float c, float w){ return smoothstep(w, 0., abs(r - c)); }
  float poly(float a, float r, float n, float d, float w){ float s = 6.2832 / n; return smoothstep(w, 0., abs(cos(floor(.5 + a / s) * s - a) * r - d)); }
  void main(){
    float reveal = smoothstep(0., .22, uT), rr = vUv.y / max(reveal, .001), a = vUv.x * 6.2832; if (rr > 1.) discard;
    float v = ring(rr, .975, .008) + ring(rr, .9, .004) + ring(rr, .62, .006) + ring(rr, .3, .004) + ring(rr, .12, .007);
    float ang = a + uTime * .45, cells = 30., ci = floor(ang / 6.2832 * cells), h = hash(vec2(ci, 3.));          /* rune band: one glyph of two or three strokes per cell */
    vec2 cu = vec2(fract(ang / 6.2832 * cells), (rr - .66) / .2);
    float glyph = step(.22, cu.x) * step(cu.x, .78) * step(.12, cu.y) * step(cu.y, .88) * min(1., step(abs(cu.y - .2 - .6 * h), .07) + step(abs(cu.x - .3 - .4 * fract(h * 7.)), .06) + step(abs(cu.y - .8 + .5 * fract(h * 13.)), .06) * step(h, .65));
    v += glyph * step(.66, rr) * step(rr, .86) * .85;
    v += (poly(a - uTime * .7, rr, 6., .5, .006) + poly(a + uTime * .35 + .52, rr, 3., .27, .005) + poly(a + uTime * .35 + 1.57, rr, 3., .27, .005)) * step(rr, .62);
    v += step(.905, rr) * step(rr, .93) * step(.5, fract(a / 6.2832 * 90.)) * .55;
    float fade = smoothstep(1., .82, uT) * (.8 + .2 * sin(uTime * 7.));
    gl_FragColor = vec4(uColor * (min(v, 1.3) * .42 + (1. - rr) * .02) * fade, 1.);
  }`,Iy=`
  varying vec2 vUv; uniform float uT, uSeed; uniform vec3 uColor; ${Bi}
  void main(){
    float r = clamp(vUv.y, 0., 1.), a = vUv.x * 6.2832; vec2 p = vec2(cos(a), sin(a)) * r;
    float maria = fbm(p * 2.4 + uSeed), limb = mix(.7, 1., sqrt(max(1. - r * r, 0.)));
    float v = (.5 + .55 * smoothstep(.32, .68, maria)) * limb * smoothstep(1., .965, r), halo = smoothstep(.86, .985, r) * smoothstep(1., .985, r);
    gl_FragColor = vec4(uColor * (v * .075 + halo * .22) * smoothstep(0., .28, uT) * smoothstep(1., .78, uT), 1.);
  }`,Ly=`
  varying vec2 vUv; uniform float uT; uniform vec3 uColor;
  void main(){
    float lat = abs(vUv.x - .5) * 2., al = clamp(vUv.y, 0., 1.), taper = max(pow(max(sin(3.14159 * al), 0.), .45), .001);
    float core = smoothstep(.2 * taper, 0., lat), glow = smoothstep(1., 0., lat / taper) * .22;
    gl_FragColor = vec4((uColor * (core * 1.5 + glow) + vec3(.6) * core) * step(al, uT * 4.) * smoothstep(1., .3, uT), 1.);
  }`,Dy=`
  varying vec2 vUv; uniform float uT, uSeed; uniform vec3 uColor; ${Bi}
  void main(){
    float h = clamp(vUv.y, 0., 1.), n = noise(vec2(vUv.x * 9. + uSeed, h * 5. - uT * 9.));
    float a = pow(1. - h, 1.6) * (.55 + .6 * n) * smoothstep(0., .12, uT) * smoothstep(1., .25, uT);
    gl_FragColor = vec4(uColor * a, 1.);
  }`,Uy=`
  varying vec2 vUv; uniform float uTime, uAlpha; uniform vec3 uColor; ${Bi}
  void main(){
    float h = clamp(vUv.y, 0., 1.), a = vUv.x * 90.;
    float bolts = pow(noise(vec2(a, uTime * 9. + h * 3.)), 3.) * 2.2 + pow(noise(vec2(a * .31 + 4., h * 6. - uTime * 5.)), 2.) * .8;
    float v = (bolts * (1. - h * .75) + smoothstep(.12, 0., h) * 1.4) * uAlpha;
    gl_FragColor = vec4(uColor * v, 1.);
  }`,zh=class{constructor(e,t=1400){this.cap=t,this.i=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.max=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.rgb=new Float32Array(t*3);let n=this.geo=new bt;n.setAttribute("position",new Pt(this.pos,3)),n.setAttribute("aCol",new Pt(this.col,4)),n.setAttribute("aSize",new Pt(this.size,1)),this.mat=new It({transparent:!0,depthWrite:!1,blending:Ts,uniforms:{uH:{value:600}},vertexShader:"attribute vec4 aCol; attribute float aSize; uniform float uH; varying vec4 vC; void main(){ vC = aCol; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = aSize * uH / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec4 vC; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .1, d) * vC.a; gl_FragColor = vec4(vC.rgb * a, 1.); }"}),this.pts=new ns(n,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=6,e.add(this.pts)}spawn(e,t,n,s,r,a,o,c,l,h,u,d=0,f=0){let g=this.i;this.i=(g+1)%this.cap,this.pos.set([e,t,n],g*3),this.vel.set([s,r,a],g*3),this.rgb.set([l,h,u],g*3),this.life[g]=this.max[g]=o,this.size[g]=c,this.grav[g]=d,this.drag[g]=f}update(e){let{pos:t,vel:n,life:s,max:r,col:a,rgb:o,grav:c,drag:l}=this;for(let h=0;h<this.cap;h++){if(s[h]<=0){a[h*4+3]=0;continue}s[h]-=e;let u=h*3,d=Math.exp(-l[h]*e);n[u]*=d,n[u+1]=n[u+1]*d-c[h]*e,n[u+2]*=d,t[u]+=n[u]*e,t[u+1]+=n[u+1]*e,t[u+2]+=n[u+2]*e,t[u+1]<.03&&c[h]>0&&(t[u+1]=.03,n[u+1]*=-.35);let f=Math.max(0,s[h]/r[h]);a[h*4]=o[u],a[h*4+1]=o[u+1],a[h*4+2]=o[u+2],a[h*4+3]=f*f}this.geo.attributes.position.needsUpdate=this.geo.attributes.aCol.needsUpdate=this.geo.attributes.aSize.needsUpdate=!0}};function ls(i=[.5,1.6,1.8],e=3){let t=new Ve,n=new Yt({color:new ge(...i)}),s=new St({color:2106924,metalness:.7,roughness:.4}),r=new Be(new st(.11,.11,e,4),n);r.scale.z=.28,r.position.y=e/2+.12,t.add(r);let a=new Be(new yn(.11,.5,4),n);a.scale.z=.28,a.rotation.x=Math.PI,a.position.y=-.13,t.add(a);let o=new Be(new at(.62,.1,.16),s);o.position.y=e+.14,t.add(o);let c=new Be(new st(.05,.05,.6,6),s);return c.position.y=e+.5,t.add(c),t.userData.glow=n,t}var ac=class{constructor(e){this.scene=e,this.items=[],this.time=0,this.p=new zh(e)}setView(e,t){this.p.mat.uniforms.uH.value=e/(2*Math.tan(t*Math.PI/360))}_mat(e,t,n){return new It({vertexShader:Ey,fragmentShader:e,uniforms:t,transparent:!0,depthWrite:!1,side:Xt,blending:n?Ts:$i})}_add(e,t,n){this.scene.add(e);let s={mesh:e,t:0,dur:t,tick:n,dead:!1};return this.items.push(s),s}slash(e){let t=e.arc??2.3,n=e.width??.5,s=Bn("s"+t.toFixed(2)+n,()=>Ls(t,1-n)),r=Math.random()*20,a=(l,h,u)=>{let d=new Be(s,this._mat(l,{uT:{value:0},uDir:{value:e.dir??1},uSeed:{value:r},uAlpha:{value:1},uStatic:{value:0},uColor:{value:new R(...e.color??[.45,1.25,1.4])}},h));return d.rotation.order="YXZ",d.rotation.set(0,e.yaw,e.tilt??0),d.position.set(e.pos.x,(e.y??1.05)+u,e.pos.z),d.scale.setScalar(e.radius??2.8),d.renderOrder=h?5:3,d},o=a($f,!0,0),c=e.dur??.3;if(this._add(o,c,(l,h)=>{o.material.uniforms.uT.value=h}),!e.tilt){let l=a(Ty,!1,-.95);l.position.y=.04,this._add(l,c*2.6,(h,u)=>{l.material.uniforms.uT.value=u})}}crescent(e){let t=e.arc??1.9,n=Bn("s"+t.toFixed(2)+.5,()=>Ls(t,.5)),s=new Be(n,this._mat($f,{uT:{value:0},uDir:{value:1},uSeed:{value:Math.random()*20},uAlpha:{value:1},uStatic:{value:1},uColor:{value:new R(...e.color)}},!0));s.rotation.order="YXZ",s.scale.setScalar(e.radius??1.6),s.renderOrder=5;let r=this._add(s,99,(a,o,c)=>{s.material.uniforms.uT.value+=c});return{mesh:s,kill:()=>{r.dur=r.t+.12,r.tick=(a,o)=>{s.material.uniforms.uAlpha.value=Math.max(0,(r.dur-r.t)/.12)}}}}telegraph(e){let t=e.kind==="line",n=e.kind==="circle"?Math.PI*2:e.arc??2,s=t?Bn("line",Qf):Bn("t"+n.toFixed(2),()=>Ls(n,0,64)),r=new Be(s,this._mat(Ay,{uP:{value:0},uTime:{value:0},uFade:{value:0},uLine:{value:t?1:0},uSide:{value:e.kind==="fan"?1:0},uColor:{value:new R(...e.color??[1.5,.5,.15])}},!1));t?r.scale.set(e.width,1,e.length):r.scale.setScalar(e.radius),r.position.set(e.pos.x,.05,e.pos.z),r.rotation.y=e.yaw??0,r.renderOrder=4;let a=this._add(r,e.dur,(o,c)=>{let l=r.material.uniforms;l.uP.value=c,l.uTime.value=this.time,l.uFade.value=Math.min(1,o.t/.12)*Math.min(1,(o.dur-o.t)/.06+.2)});return{mesh:r,cancel:()=>{a.dead=!0},set:(o,c)=>{r.position.x=o.x,r.position.z=o.z,c!==void 0&&(r.rotation.y=c)}}}ring(e,t,n=[1,.8,.5],s=.5,r=.08){let a=new Be(Bn("t6.28",()=>Ls(Math.PI*2,0,64)),this._mat(Ry,{uT:{value:0},uSeed:{value:Math.random()*9},uColor:{value:new R(...n)}},!0));a.position.set(e.x,r,e.z),a.scale.setScalar(t),a.renderOrder=5,this._add(a,s,(o,c)=>{a.material.uniforms.uT.value=c})}crack(e,t,n=[1,.5,.2],s=2.4){let r=new Be(Bn("t6.28",()=>Ls(Math.PI*2,0,64)),this._mat(Cy,{uT:{value:0},uSeed:{value:Math.random()*9},uColor:{value:new R(...n)}},!1));r.position.set(e.x,.035,e.z),r.scale.setScalar(t),r.renderOrder=3,this._add(r,s,(a,o)=>{r.material.uniforms.uT.value=o})}fallSword(e,t,n,s=1,r=.55){let a=ls(t,3);a.scale.setScalar(s),a.rotation.z=.22,a.visible=!1;let o=.3,c=Math.min(.16,n);this._add(a,n+r+o,l=>{let h=l.t;if(a.visible=h>n-c,h<n){let u=1-(n-h)/c;a.position.set(e.x-(1-u)*3.2,(1-u)*15,e.z),a.visible&&this.p.spawn(a.position.x,a.position.y+2,a.position.z,0,0,0,.25,.5,t[0],t[1],t[2])}else{a.position.set(e.x,-.25,e.z);let u=Math.max(0,(h-n-r)/o);a.scale.set(s*(1-u),s,s*(1-u)),a.position.y=-.25-u*2.6*s}})}moon(e,t,n=[.8,.9,1],s=3){let r=new Be(Bn("t6.28",()=>Ls(Math.PI*2,0,64)),this._mat(Iy,{uT:{value:0},uSeed:{value:Math.random()*9},uColor:{value:new R(...n)}},!0));r.position.set(e.x,.045,e.z),r.scale.setScalar(t),r.renderOrder=3,this._add(r,s,(a,o)=>{r.material.uniforms.uT.value=o})}lineSlash(e,t,n,s,r=[.6,1.3,1.5],a=.32,o=1){let c=new Be(Bn("line",Qf),this._mat(Ly,{uT:{value:0},uColor:{value:new R(...r)}},!0));c.scale.set(s,1,n),c.rotation.y=t,c.position.set(e.x-Math.sin(t)*n/2,o,e.z-Math.cos(t)*n/2),c.renderOrder=6,this._add(c,a,(l,h)=>{c.material.uniforms.uT.value=h})}beam(e,t,n,s=[.5,1.4,1.6],r=.6){let a=Bn("beam",()=>{let c=new st(1,1,1,14,1,!0);return c.translate(0,.5,0),c}),o=new Be(a,this._mat(Dy,{uT:{value:0},uSeed:{value:Math.random()*9},uColor:{value:new R(...s)}},!0));o.position.set(e.x,0,e.z),o.renderOrder=5,this._add(o,r,(c,l)=>{o.material.uniforms.uT.value=l;let h=1-Math.pow(1-l,3);o.scale.set(n*(1.4-.9*h),t*(.25+.75*h),n*(1.4-.9*h))})}wall(e,t,n,s=[1.6,1.2,.5]){let r=Bn("beam",()=>{let h=new st(1,1,1,14,1,!0);return h.translate(0,.5,0),h}),a=Bn("wall",()=>{let h=new st(1,1,1,96,1,!0);return h.translate(0,.5,0),h}),o=new Be(a,this._mat(Uy,{uTime:{value:0},uAlpha:{value:0},uColor:{value:new R(...s)}},!0));o.position.set(e.x,0,e.z),o.scale.set(t,n,t),o.renderOrder=5;let c=!1,l=this._add(o,999,(h,u,d)=>{let f=o.material.uniforms;f.uTime.value=this.time,f.uAlpha.value+=((c?0:1)-f.uAlpha.value)*Math.min(1,d*6),c&&f.uAlpha.value<.02&&(h.dead=!0)});return{set:h=>{o.scale.x=o.scale.z=h},kill:()=>{c=!0}}}sigil(e,t,n=[.4,1.2,1.4],s=2.5){let r=new Be(Bn("t6.28",()=>Ls(Math.PI*2,0,64)),this._mat(Py,{uT:{value:0},uTime:{value:0},uColor:{value:new R(...n)}},!0));r.position.set(e.x,.06,e.z),r.scale.setScalar(t),r.renderOrder=4,this._add(r,s,(a,o)=>{r.material.uniforms.uT.value=o,r.material.uniforms.uTime.value=a.t})}swordHalo(e){let t=new Ve,n=e.n,s=[];t.position.set(e.pos.x,e.y??4.2,e.pos.z);for(let o=0;o<n;o++){let c=ls(e.color??[.5,1.5,1.7],1.9),l=o/n*Math.PI*2;c.position.set(Math.sin(l)*e.radius,0,Math.cos(l)*e.radius),c.rotation.set(Math.cos(l)*.35,0,-Math.sin(l)*.35),c.scale.setScalar(.001),t.add(c),s.push(c)}let r=Math.max(...e.release)+.2,a=e.spin??.9;this._add(t,r,o=>{let c=o.t;t.rotation.y=c*a,s.forEach((l,h)=>{let u=h/n*e.appear,d=Math.min(1,Math.max(0,(c-u)/.16)),f=Math.min(1,Math.max(0,(c-e.release[h])/.08)),g=1-Math.pow(1-d,3);l.scale.setScalar(Math.max(.001,g*(1+.35*Math.sin(Math.min(1,d)*Math.PI))*(1-f))),l.position.y=Math.sin(c*3+h)*.12+f*1.5,d>0&&d<1&&Math.random()<.5&&this.p.spawn(t.position.x+l.position.x*Math.cos(t.rotation.y)+l.position.z*Math.sin(t.rotation.y),t.position.y+1,t.position.z+l.position.z*Math.cos(t.rotation.y)-l.position.x*Math.sin(t.rotation.y),0,1.5,0,.4,.25,.5,1.5,1.7)})})}sparks(e,t,n,s=[2.2,1.5,.7],r=9,a=.7){for(let o=0;o<n;o++){let c=t+(Math.random()-.5)*a*2,l=r*(.35+Math.random()*.9);this.p.spawn(e.x,e.y??1.1,e.z,Math.sin(c)*l,1+Math.random()*4,Math.cos(c)*l,.22+Math.random()*.3,.09+Math.random()*.1,s[0],s[1],s[2],16,2.5)}}burst(e,t,n,s=4,r=2,a=.22,o=.6,c=.8){for(let l=0;l<t;l++){let h=Math.random()*6.2832,u=s*(.3+Math.random()*.8);this.p.spawn(e.x+Math.sin(h)*.2,c+Math.random()*.6,e.z+Math.cos(h)*.2,Math.sin(h)*u,r*(.3+Math.random()),Math.cos(h)*u,o*(.5+Math.random()*.7),a*(.6+Math.random()*.8),n[0],n[1],n[2],0,3)}}update(e){this.time+=e;for(let t of this.items)if(!t.dead){if(t.t+=e,t.t>=t.dur){t.dead=!0;continue}t.tick&&t.tick(t,t.t/t.dur,e)}for(let t=this.items.length-1;t>=0;t--)if(this.items[t].dead){let n=this.items[t].mesh;this.scene.remove(n),n.traverse?.(s=>{s.material&&s.material.isShaderMaterial&&s.material.dispose()}),this.items.splice(t,1)}this.p.update(e)}};function ep(i){let e=i.h/1.75,t=i.bulk||1,n=[],s=(L,T={})=>{let I=new St({color:L,roughness:.82,...T});return n.push(I),I},r=s(i.robe,{side:Xt}),a=s(i.trim),o=s(i.skin),c=s(i.dark??1909032),l=s(i.metal??3817286,{metalness:.7,roughness:.45}),h=(L,T,I,P=0,w=0,M=0)=>{let C=new Be(L,T);return C.position.set(P,w,M),C.castShadow=!0,I.add(C),C},u=new Ve,d=new Ve,f=new Ve;if(u.add(d),d.add(f),h(new Tr(.19*t*e,.36*e,4,12),r,f,0,.33*e,0),h(new st(.205*t*e,.215*t*e,.1*e,12),a,f,0,.05*e,0),h(new st(.2*t*e,.37*t*e,.52*e,12,1,!0),r,d,0,-.23*e,0),h(new Li(.125*e,14,12),o,f,0,.77*e,0),i.bun&&(h(new Li(.132*e,12,10,0,6.3,0,1.7),c,f,0,.785*e,-.02*e),h(new Li(.055*e,8,8),c,f,0,.93*e,-.02*e)),i.hat&&h(new st(.07*e,.12*e,.34*e,8),c,f,0,1.02*e,0),i.talisman&&h(new at(.07*e,.2*e,.01),s(14275240,{emissive:2906658}),f,0,.8*e,.128*e),i.pauldron)for(let L of[-1,1])h(new Li(.17*t*e,10,8,0,6.3,0,1.6),l,f,L*.3*t*e,.56*e,0);if(i.horn){let L=h(new yn(.035*e,.22*e,6),l,f,.07*e,.93*e,.05*e);L.rotation.z=-.5,h(new Li(.09*e,8,6),s(14211288),f,0,.66*e,.09*e).scale.set(1,1.5,.6)}let g=L=>{let T=new Ve;return T.position.set(L*.27*t*e,.56*e,0),f.add(T),h(new Tr(.06*t*e,.44*e,3,8),r,T,0,-.26*e,0),h(new Li(.062*t*e,8,8),i.pauldron?l:o,T,0,-.55*e,0),T},b=L=>{let T=new Ve;return T.position.set(L*.1*t*e,0,0),d.add(T),h(new Tr(.072*t*e,.66*e,3,8),c,T,0,-.45*e,0),T},x=g(-1),m=g(1),v=b(-1),_=b(1),y=new Ve;if(y.position.y=-.55*e,x.add(y),i.weapon){let L=i.weapon,T=s(L.color,{metalness:.85,roughness:.28,emissive:L.glow??0});h(new at(L.w,.025,L.len),T,y,0,0,L.len/2+.1),h(new at(L.w*3.2,.05,.05),l,y,0,0,.09),h(new st(.022,.022,.22,6),c,y,0,0,-.03).rotation.x=Math.PI/2,y.userData.blade=T}return{root:u,hips:d,chest:f,armR:x,armL:m,legR:v,legL:_,weapon:y,mats:n,s:e,cur:null}}var ky=["hy","hx","hY","cy","arx","arz","alx","alz","lr","ll","wx"];function tp(i,e,t){let n={hy:0,hx:0,hY:0,cy:0,arx:-.3,arz:0,alx:0,alz:0,lr:0,ll:0,wx:.5},s=Math.min(1,Math.max(0,e.animP||0)),r=1-Math.pow(1-s,4),a=e.swingDir||1,o=(d,f,g)=>d+(f-d)*g,c=!1;switch(e.anim){case"run":{let d=Math.sin(e.phase);n.lr=d*.85,n.ll=-d*.85,n.alx=d*.6,n.arx=-.5-d*.15,n.hx=.17,n.hY=-.03+Math.abs(Math.cos(e.phase))*.045;break}case"windup":e.tilt?(n.arx=-2.95*s,n.alx=-2.2*s,n.hx=-.14*s,n.wx=.15,n.hY=-.06*s):(n.cy=.8*a*s,n.arx=-1-1.4*s,n.arz=-.55*a*s,n.wx=.3,n.hx=-.06*s,n.hY=-.05*s);break;case"swing":e.tilt?(n.arx=o(-2.95,-.7,r),n.alx=o(-2.2,-.6,r),n.hx=.32*r,n.wx=1.3,n.lr=.4*r,n.ll=-.5*r,n.hY=-.1*r):(n.cy=o(.8,-1,r)*a,n.arx=o(-2.4,-1.3,r),n.arz=o(-.55,.65,r)*a,n.wx=1.3,n.hx=.2*r,n.lr=.35*r,n.ll=-.45*r,n.hY=-.06);break;case"block":n.arx=-1.4,n.arz=.8,n.alx=-1.15,n.alz=-.5,n.wx=-.55,n.hY=-.07,n.lr=.28,n.ll=-.3;break;case"dodge":n.hx=s*Math.PI*2,n.hY=-.4*Math.sin(s*Math.PI),n.lr=n.ll=-1.2,n.arx=n.alx=-1,c=!0;break;case"hurt":n.hx=-.38,n.cy=.3,n.arx=.35,n.alx=.4,n.hY=-.04;break;case"dead":n.hx=-1.52*r,n.hY=-.74*r,n.arx=.6,n.alx=.7,n.alz=.5,n.lr=.15;break;case"cast":n.alx=-1.7,n.arx=-2.7*Math.min(1,s*2.5),n.wx=.15,n.hx=-.1;break;case"leap":n.arx=-3,n.alx=-2.7,n.lr=-.8,n.ll=.5,n.hx=.35*s,n.wx=.1;break;default:n.hY=Math.sin((e.idleT||0)*2)*.008,n.arx=-.3+Math.sin((e.idleT||0)*2)*.02}let l=i.cur||(i.cur={...n}),h=1-Math.exp(-t*22);for(let d of ky)l[d]=c&&d==="hx"||Math.abs(l[d]-n[d])>Math.PI?n[d]:l[d]+(n[d]-l[d])*h;let u=i.s;i.hips.position.y=(.93+l.hY)*u,i.hips.rotation.set(l.hx,l.hy,0),i.chest.rotation.y=l.cy,i.armR.rotation.set(l.arx,0,l.arz),i.armL.rotation.set(l.alx,0,l.alz),i.legR.rotation.x=l.lr,i.legL.rotation.x=l.ll,i.weapon.rotation.x=l.wx}var ct=null,hs=null,Hh=null,wa=null;function Gh(i){if(i)return;if(ct){ct.state!=="running"&&ct.resume();return}try{ct=new(window.AudioContext||window.webkitAudioContext)}catch{return}hs=ct.createGain(),hs.gain.value=.55,wa=ct.createAnalyser(),wa.fftSize=2048,hs.connect(wa),hs.connect(ct.destination),ct.state!=="running"&&ct.resume(),hp(),Oy(),Hh=ct.createBuffer(1,ct.sampleRate*2,ct.sampleRate);let e=Hh.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}function zn(i,e,t,n,s=1.2,r="bandpass"){let a=ct.currentTime,o=ct.createBufferSource(),c=ct.createBiquadFilter(),l=ct.createGain();o.buffer=Hh,o.loopStart=Math.random(),c.type=r,c.Q.value=s,c.frequency.setValueAtTime(e,a),c.frequency.exponentialRampToValueAtTime(t,a+i),l.gain.setValueAtTime(0,a),l.gain.linearRampToValueAtTime(n,a+.008),l.gain.exponentialRampToValueAtTime(.001,a+i),o.connect(c).connect(l).connect(hs),o.start(a,Math.random()),o.stop(a+i+.02)}function cn(i,e,t,n,s="sine"){let r=ct.currentTime,a=ct.createOscillator(),o=ct.createGain();a.type=s,a.frequency.setValueAtTime(i,r),a.frequency.exponentialRampToValueAtTime(e,r+t),o.gain.setValueAtTime(n,r),o.gain.exponentialRampToValueAtTime(.001,r+t),a.connect(o).connect(hs),a.start(r),a.stop(r+t+.02)}var Sa={},Fy={battle2:"battle",boss2:"boss",battle3:"battle",boss3:"boss"},Ds=null,np=!1,Ny=.2;async function Oy(){if(!np){np=!0;for(let i of["explore","battle","boss","battle2","boss2","battle3","boss3"])try{let e=await fetch(`assets/music/${i}.mp3`);if(!e.ok)continue;let t=await ct.decodeAudioData(await e.arrayBuffer()),n=ct.createBufferSource(),s=ct.createGain();n.buffer=t,n.loop=!0,s.gain.value=0,n.connect(s).connect(hs),n.start(),Sa[i]=s,rp(2.5)}catch{}}}function rp(i){if(!ct)return;let e=ct.currentTime;for(let[t,n]of Object.entries(Sa))n.gain.cancelScheduledValues(e),n.gain.setValueAtTime(n.gain.value,e),n.gain.linearRampToValueAtTime(t===(Sa[Ds]?Ds:Fy[Ds]||Ds)?Ny:0,e+i)}function ap(i,e=1.6){i!==Ds&&(Ds=i,rp(e))}var op=()=>{if(!ct)return{ctx:"none"};let i=new Float32Array(wa.fftSize);wa.getFloatTimeDomainData(i);let e=0;for(let t of i)e+=t*t;return{ctx:ct.state,rms:+Math.sqrt(e/i.length).toFixed(4),samples:Object.keys(Vh).length,time:+ct.currentTime.toFixed(2)}},cp=()=>({want:Ds,loaded:Object.keys(Sa),gains:Object.fromEntries(Object.entries(Sa).map(([i,e])=>[i,+e.gain.value.toFixed(3)]))}),lp={swing:[5,.5,1],heavy:["swing",.65,.72],hit:[3,.8,1],hitHeavy:[2,.95,.9],parry:[2,1,1.1],ring:[1,.7,1],block:[3,.7,1],hurt:[2,.7,1],dodge:[2,.45,1],cast:[3,.45,1],bolt:[3,.5,1.1],boom:[3,.9,.85],die:[3,.6,1],roar:[2,.8,.9]},Vh={},ip=!1;async function hp(){ip||(ip=!0,await Promise.all(Object.entries(lp).filter(([,i])=>typeof i[0]=="number").flatMap(([i,e])=>Array.from({length:e[0]},async(t,n)=>{try{let s=await fetch(`assets/sfx/${i}_${n+1}.mp3`);if(!s.ok)return;let r=await ct.decodeAudioData(await s.arrayBuffer());(Vh[i]||=[]).push(r)}catch{}}))))}function sp(i){let e=lp[i];if(!e)return!1;let t=Vh[typeof e[0]=="string"?e[0]:i];if(!t||!t.length)return!1;let n=ct.createBufferSource(),s=ct.createGain();return n.buffer=t[Math.random()*t.length|0],n.playbackRate.value=e[2]*(.94+Math.random()*.12),s.gain.value=e[1],n.connect(s).connect(hs),n.start(),!0}function de(i){if(!ct)return;hp();let e=.92+Math.random()*.16;if(sp(i)){if(i==="hit")cn(150*e,60,.1,.35);else if(i==="hitHeavy")cn(105*e,38,.22,.7);else if(i==="boom")cn(85,27,.6,.9);else if(i==="parry"){sp("ring");for(let t of[2637,3951,5274])cn(t*e,t*e*.995,.45,.12,"triangle")}else i==="hurt"&&cn(190*e,70,.2,.4,"sawtooth");return}switch(i){case"swing":zn(.16,900*e,3200*e,.22,.8);break;case"heavy":zn(.26,500*e,2600*e,.3,.7);break;case"hit":zn(.09,2400*e,700,.5,.7),cn(150*e,60,.12,.5);break;case"hitHeavy":zn(.16,1800*e,300,.65,.6),cn(110*e,40,.22,.8);break;case"parry":for(let t of[2093,3136,4186,5274])cn(t*e,t*e*.995,.5,.2,"triangle");zn(.05,6e3,3e3,.6,.5,"highpass");break;case"block":cn(700*e,420,.12,.3,"triangle"),zn(.08,3e3,1200,.4);break;case"hurt":cn(200*e,70,.25,.6,"sawtooth"),zn(.14,900,250,.4);break;case"dodge":zn(.22,400,1500*e,.16,.6);break;case"cast":cn(300*e,900*e,.3,.14,"triangle");break;case"bolt":zn(.2,1800*e,600,.2,2);break;case"boom":cn(90,28,.6,.95),zn(.5,700,80,.6,.5,"lowpass");break;case"ultCharge":cn(90,520,.85,.28,"triangle"),cn(180,1040,.85,.1,"sine"),zn(.85,300,4e3,.12,.7);break;case"ultHit":cn(1400*e,500,.12,.12,"triangle");break;case"die":zn(.5,1200,100,.4,.5,"lowpass"),cn(160,40,.5,.4,"sawtooth");break}}function Wh(i,e){if(e===Cf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ya||e===Zo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ya)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var oc=class extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=os.extractUrlBase(e);a=os.resolveURL(l,this.path)}else a=os.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new xa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===mp){try{a[$e.KHR_BINARY_GLTF]=new du(e)}catch(u){s&&s(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new vu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new Kh;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new fu(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new pu;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new mu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function By(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yh=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],an);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Tn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Rr(h),l.distance=u;break;case"spot":l=new Wo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Kh=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let s=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],an),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(s)}},Jh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],an)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,_t)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],an),Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],an),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,_t)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},cu=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},lu=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},hu=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},uu=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new We,x=new R,m=new rn,v=new R(1,1,1),_=new di(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,b.compose(x,m,v));for(let y in c)if(y==="_COLOR_0"){let L=c[y];_.instanceColor=new Ps(L.array,L.itemSize,L.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);xt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},mp="glTF",Ea=12,up={JSON:1313821514,BIN:5130562},du=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ea,r=new DataView(e,Ea),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===up.JSON){let l=new Uint8Array(e,Ea+a,o);this.content=n.decode(l)}else if(c===up.BIN){let l=Ea+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},fu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=xu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=xu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=kr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],x=c[g];x!==void 0&&(b.normalized=x)}u(f)},o,l,an,d)})})}},pu=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},mu=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},cc=class extends is{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,x=-2*f+3*d,m=f-d,v=1-x,_=m-d+u;for(let y=0;y!==o;y++){let L=a[b+y+o],T=a[b+y+c]*h,I=a[g+y+o],P=a[g+y]*h;r[y]=v*L+_*T+x*I+m*P}return r}},zy=new rn,gu=class extends cc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return zy.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dp={9728:sn,9729:xn,9984:_h,9985:ta,9986:ar,9987:ai},fp={33071:Ai,33648:oa,10497:hi},qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hy={CUBICSPLINE:void 0,LINEAR:vr,STEP:br},Xh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new St({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),i.DefaultMaterial}function Us(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Wy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qy(i){let e,t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jh(t.attributes):e=i.indices+":"+jh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+jh(i.targets[n]);return e}function jh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var jy=new We,vu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new By,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Vo(this.options.manager):this.textureLoader=new qo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Us(r,o,s),zi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(os.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=qh[s.type],o=kr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Pt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=qh[s.type],l=kr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,x;if(f&&f!==u){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(v);_||(b=new l(o,m*f,s.count*f/h),_=new wr(b,f/h),t.cache.add(v,_)),x=new Cs(_,c,d%f/h,g)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),x=new Pt(b,c,g);if(s.sparse!==void 0){let m=qh.SCALAR,v=kr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,L=new v(a[1],_,s.sparse.count*m),T=new l(a[2],y,s.sparse.count*c);o!==null&&(x=new Pt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let I=0,P=L.length;I<P;I++){let w=L[I];if(x.setX(w,T[I*c]),c>=2&&x.setY(w,T[I*c+1]),c>=3&&x.setZ(w,T[I*c+2]),c>=4&&x.setW(w,T[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=dp[d.magFilter]||xn,h.minFilter=dp[d.minFilter]||ai,h.wrapS=fp[d.wrapS]||hi,h.wrapT=fp[d.wrapT]||hi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==xn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let x=new jt(b);x.needsUpdate=!0,d(x)}),t.load(os.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),zi(u,a),u.userData.mimeType=a.mimeType||Xy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Is,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ma,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return St}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=s[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],an),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,_t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Xt);let h=r.alphaMode||Xh.OPAQUE;if(h===Xh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Xh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Yt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Yt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Yt){let u=r.emissiveFactor;o.emissive=new ge().setRGB(u[0],u[1],u[2],an)}return r.emissiveTexture!==void 0&&a!==Yt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_t)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Us(s,u,r),u})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return pp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=qy(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=pp(new bt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Gy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],x=a[f],m,v=l[f];if(x.mode===Hn.TRIANGLES||x.mode===Hn.TRIANGLE_STRIP||x.mode===Hn.TRIANGLE_FAN||x.mode===void 0)m=r.isSkinnedMesh===!0?new Ao(b,v):new Be(b,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),x.mode===Hn.TRIANGLE_STRIP?m.geometry=Wh(m.geometry,Zo):x.mode===Hn.TRIANGLE_FAN&&(m.geometry=Wh(m.geometry,ya));else if(x.mode===Hn.LINES)m=new Lo(b,v);else if(x.mode===Hn.LINE_STRIP)m=new Er(b,v);else if(x.mode===Hn.LINE_LOOP)m=new Do(b,v);else if(x.mode===Hn.POINTS)m=new ns(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(m.geometry.morphAttributes).length>0&&Wy(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),zi(m,r),x.extensions&&Us(s,m,x),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Us(s,u[0],r),u[0];let d=new Ve;r.extensions&&Us(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Lf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new es(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new We;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Co(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],b=f.target,x=b.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],x=u[4],m=[];for(let v=0,_=d.length;v<_;v++){let y=d[v],L=f[v],T=g[v],I=b[v],P=x[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let w=n._createAnimationTracks(y,L,T,I,P);if(w)for(let M=0;M<w.length;M++)m.push(w[M])}return new Fi(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,jy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new pa:l.length>1?h=new Ve:l.length===1?h=l[0]:h=new xt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),zi(h,r),r.extensions&&Us(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ve;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&Us(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof vn||d instanceof jt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];us[r.path]===us.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(us[r.path]){case us.weights:l=Di;break;case us.rotation:l=Ui;break;case us.position:case us.scale:l=ki;break;default:n.itemSize===1?l=Di:l=ki;break}let h=s.interpolation!==void 0?Hy[s.interpolation]:vr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+us[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ui?gu:cc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Yy(i,e,t){let n=e.attributes,s=new gt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=bu(kr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=bu(kr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Sn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function pp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=xu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),zi(i,e),Yy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Vy(i,e.targets,t):i})}function yu(i){let e=new Map,t=new Map,n=i.clone();return gp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)gp(i.children[n],e.children[n],t)}var xp=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var v=new Uint8Array(m.length),_=0;_<m.length;++_){var y=m.charCodeAt(_);v[_]=y>96?y-97:y>64?y-39:y+4}for(var L=0,_=0;_<m.length;++_)v[L++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,L)}function c(m,v,_,y,L,T){var I=r.exports.sbrk,P=_+3&-4,w=I(P*y),M=I(L.length),C=new Uint8Array(r.exports.memory.buffer);C.set(L,M);var k=m(w,_,y,M,L.length);if(k==0&&T&&T(w,P,y),v.set(C.subarray(w,w+_*y)),I(w-I(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(m){var v={object:new Worker(m),pending:0,requests:{}};return v.object.onmessage=function(_){var y=_.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function g(m){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+x.toString(),_=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(_),L=0;L<m;++L)u[L]=f(y);URL.revokeObjectURL(y)}function b(m,v,_,y,L){for(var T=u[0],I=1;I<u.length;++I)u[I].pending<T.pending&&(T=u[I]);return new Promise(function(P,w){var M=new Uint8Array(_),C=d++;T.pending+=m,T.requests[C]={resolve:P,reject:w},T.object.postMessage({id:C,count:m,size:v,source:M,mode:y,filter:L},[M.buffer])})}function x(m){a.then(function(){var v=m.data;try{var _=new Uint8Array(v.count*v.size);c(r.exports[v.mode],_,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,v,_,y,L){c(r.exports.meshopt_decodeVertexBuffer,m,v,_,y,r.exports[l[L]])},decodeIndexBuffer:function(m,v,_,y){c(r.exports.meshopt_decodeIndexBuffer,m,v,_,y)},decodeIndexSequence:function(m,v,_,y){c(r.exports.meshopt_decodeIndexSequence,m,v,_,y)},decodeGltfBuffer:function(m,v,_,y,L,T){c(r.exports[h[L]],m,v,_,y,r.exports[l[T]])},decodeGltfBufferAsync:function(m,v,_,y,L){return u.length>0?b(m,v,_,h[y],l[L]):a.then(function(){var T=new Uint8Array(m*v);return c(r.exports[h[y]],T,m,v,_,r.exports[l[L]]),T})}}})();var Jy=new oc().setMeshoptDecoder(xp),_u=new Map;typeof window<"u"&&window.__A&&Uh.setURLModifier(i=>window.__A[String(i).replace(/^\.\//,"").split("?")[0]]||i);function yp(i){let e=t=>Jy.loadAsync(i).catch(n=>t>0?new Promise(s=>setTimeout(s,600)).then(()=>e(t-1)):(console.warn("model failed to load",i,n&&n.message),null));return _u.has(i)||_u.set(i,fetch(i,{method:"HEAD"}).then(t=>t.ok?e(2):null).catch(()=>e(1))),_u.get(i)}var Kt=()=>new R,Or=()=>new rn,pn=Kt(),Mu=Kt(),Ta=Kt(),lc=Kt(),Fr=Or(),Nr=Or(),hc=Or(),wu=new R(0,1,0);function Su(i){if(i.userData.clips)return i.userData.clips;let e=i.scene.getObjectByName("Hips");i.scene.updateMatrixWorld(!0);let t=e.parent.getWorldQuaternion(Or()),n=t.clone().invert(),s=e.position.clone().applyQuaternion(t),r={};for(let a of i.animations){let o=a.tracks.filter(c=>!c.name.endsWith(".scale")&&(!c.name.endsWith(".position")||c.name==="Hips.position"));for(let c of o)if(c.name==="Hips.position")for(let l=0;l<c.values.length;l+=3)pn.fromArray(c.values,l).applyQuaternion(t),pn.x=s.x,pn.z=s.z,pn.applyQuaternion(n).toArray(c.values,l);r[a.name]=new Fi(a.name,a.duration,o)}return i.userData.clips=r}function bp(i,e,t){i.getWorldPosition(pn),e.getWorldPosition(Mu),Mu.sub(pn).normalize(),Fr.setFromUnitVectors(Mu,t),i.getWorldQuaternion(Nr).premultiply(Fr),i.parent.getWorldQuaternion(hc),i.quaternion.copy(hc.invert().multiply(Nr)),i.updateWorldMatrix(!1,!0)}function vp(i,e,t,n,s){i.getWorldPosition(Ta),e.getWorldPosition(lc);let r=Ta.distanceTo(lc);t.getWorldPosition(pn);let a=lc.distanceTo(pn),o=lc.copy(n).sub(Ta),c=Math.min(Math.max(o.length(),Math.abs(r-a)+.01),(r+a)*.995);o.normalize();let l=Math.min(1,Math.max(-1,(r*r+c*c-a*a)/(2*r*c))),h=pn.copy(s).addScaledVector(o,-s.dot(o)).normalize(),u=Kt().copy(o).multiplyScalar(l).addScaledVector(h,Math.sqrt(1-l*l)).normalize();bp(i,e,u),e.getWorldPosition(Ta),bp(e,t,Kt().copy(n).sub(Ta).normalize())}function _p(i,e){let t=yu(i.scene),n=new Ve,s=new Ve,r=[],a={};s.add(n),n.add(t),t.traverse(C=>{C.isBone&&(a[C.name]=C),C.isMesh&&(C.castShadow=!0,C.frustumCulled=!1,C.material=C.material.clone(),C.material.envMapIntensity=.6,r.push(C.material))}),s.updateMatrixWorld(!0);let o=a.LeftUpLeg.getWorldPosition(Kt()),c=a.RightUpLeg.getWorldPosition(Kt()),l=Kt().crossVectors(wu,c.sub(o)).normalize();n.rotation.y=-Math.atan2(l.x,l.z),s.updateMatrixWorld(!0);let h=new gt().setFromObject(t),u=e.h/(h.max.y-h.min.y);n.scale.setScalar(u),s.updateMatrixWorld(!0),h=new gt().setFromObject(t),n.position.set(-(h.min.x+h.max.x)/2,-h.min.y,-(h.min.z+h.max.z)/2);let d=e.h/1.75,f=new va(t),g=Su(i),b={};for(let[C,k]of Object.entries(e.clips))g[k]&&(b[C]=f.clipAction(g[k]));for(let[C,[k,N]]of Object.entries(e.borrow||{}))k&&Su(k)[N]&&(b[C]=f.clipAction(Su(k)[N]));let x=new Ve,m=null;if(e.weapon){let C=e.weapon.scene.clone(!0);C.traverse(J=>{J.isMesh&&(J.castShadow=!0,J.material=J.material.clone(),m=J.material)});let k=new gt().setFromObject(C),N=k.max.y-k.min.y,X=e.weaponLen/N;C.scale.setScalar(X),C.position.y=-(k.min.y+N*(e.grip??.17))*X,e.flip&&(C.rotation.z=Math.PI,C.position.y=(k.max.y-N*(e.grip??.17))*X),x.add(C),x.scale.setScalar(1/u),a.RightHand.add(x)}let v={hand:Kt(),blade:new R(0,-.5,.85),w:0,cy:0,lw:0,init:!1},_={hand:Kt(),blade:Kt(),lhand:Kt()},y=(C,k)=>k.copy(C).multiplyScalar(d).applyMatrix4(s.matrixWorld),L=(C,k)=>k.copy(C).transformDirection(s.matrixWorld),T=["Spine1","RightArm","RightForeArm","LeftArm","LeftForeArm"].map(C=>[a[C],Or()]),I=null,P="";function w(C,{fade:k=.14,once:N=!1,ts:X=1,at:J=0}={}){let U=b[C]||b.idle;if(U){if(U===I&&!N){U.timeScale=X;return}U.reset(),U.time=J,U.timeScale=X,U.setLoop(N?Ko:Jo,1/0),U.clampWhenFinished=N,U.play(),I&&I!==U&&I.crossFadeTo(U,k,!1),I=U}}function M(C,k){let N=C.anim,X=N!==P;P=N;let J=Math.min(1,Math.max(0,C.animP||0)),U=1-Math.pow(1-J,4),W=C.swingDir||1,H=(Z,ae,q)=>Z+(ae-Z)*q,$=0,re=0,ue=0,xe=!1;switch(_.blade.set(-.1*1,-.62,.78),N){case"run":w("run",{ts:e.runTs??1}),_.blade.set(-.25,-.2,-.95);break;case"hurt":X&&w("hit",{once:!0,ts:1.6,at:.12,fade:.06}),_.blade.set(-.4,-.7,.5);break;case"dead":X&&w("death",{once:!0,ts:1.5,fade:.1}),_.blade.set(-.6,-.2,.6);break;case"dodge":X&&w("roll",{once:!0,ts:2.1,fade:.05}),_.blade.set(-.3,.1,-.9);break;case"windup":case"swing":{if(w("guard",{fade:.1}),$=1,xe=N==="swing",C.tilt){let Z=N==="windup"?H(.9,-.55,J):H(-.55,2.05,U);_.blade.set(-.12*W,Math.cos(Z),Math.sin(Z)),_.hand.set(-.16,1.36+.46*Math.cos(Z),.12+.42*Math.sin(Z)),ue=N==="swing"?.1:-.25*J}else{let Z=(N==="windup"?H(-.5,-2.15,J):H(-2.15,1.25,U))*W;_.blade.set(Math.sin(Z),N==="windup"?.25*J:.12-.25*U,Math.cos(Z)),_.hand.set(-.12+.5*Math.sin(Z),1.3-(N==="swing"?.14*U:0),.08+.46*Math.cos(Z)),ue=(N==="windup"?-.75*J:H(-.75,.85,U))*W}break}case"block":w("guard",{fade:.08}),$=1,_.hand.set(.04,1.24,.4),_.blade.set(.72,.66,.12),re=1,_.lhand.set(.3,1.34,.44);break;case"cast":w("guard",{fade:.1}),$=1,re=1,_.hand.set(-.4,1.5+.3*Math.min(1,J*2.5),-.1),_.blade.set(-.25,.95,-.1),_.lhand.set(.12,1.36,.62),ue=.35;break;case"leap":w("guard",{fade:.1}),$=1,_.hand.set(-.2,1.98,-.08),_.blade.set(-.1,.8,-.6),ue=-.2;break;default:w(C.guard?"guard":"idle",{fade:.22})}f.update(k),s.updateWorldMatrix(!0,!0);let He=1-Math.exp(-k*20);if(_.blade.normalize(),!v.init||xe?(v.hand.copy(_.hand),v.blade.copy(_.blade),v.init=!0):($&&v.hand.lerp(_.hand,He),v.blade.lerp(_.blade,He).normalize()),v.w+=($-v.w)*(1-Math.exp(-k*16)),v.lw+=(re-v.lw)*(1-Math.exp(-k*14)),v.cy+=(ue-v.cy)*(xe?1:He),v.w>.01||v.lw>.01){for(let[q,F]of T)F.copy(q.quaternion);if(Math.abs(v.cy)>.01){let q=a.Spine1;Fr.setFromAxisAngle(wu,v.cy*Math.max(v.w,v.lw)),q.getWorldQuaternion(Nr).premultiply(Fr),q.parent.getWorldQuaternion(hc),q.quaternion.copy(hc.invert().multiply(Nr)),q.updateWorldMatrix(!1,!0)}let Z=Kt(),ae=Kt();v.w>.01&&(vp(a.RightArm,a.RightForeArm,a.RightHand,y(v.hand,Z),L(ae.set(-.55,-.7,-.45),ae)),v.w<.99&&(T[1][0].quaternion.slerpQuaternions(T[1][1],T[1][0].quaternion.clone(),v.w),T[2][0].quaternion.slerpQuaternions(T[2][1],T[2][0].quaternion.clone(),v.w))),v.lw>.01&&(vp(a.LeftArm,a.LeftForeArm,a.LeftHand,y(_.lhand,Z),L(ae.set(.55,-.7,-.45),ae)),v.lw<.99&&(T[3][0].quaternion.slerpQuaternions(T[3][1],T[3][0].quaternion.clone(),v.lw),T[4][0].quaternion.slerpQuaternions(T[4][1],T[4][0].quaternion.clone(),v.lw))),s.updateWorldMatrix(!0,!0)}e.weapon&&(L(v.blade,pn),Fr.setFromUnitVectors(wu,pn),a.RightHand.getWorldQuaternion(Nr),x.quaternion.copy(Nr.invert().multiply(Fr)))}return{root:s,mats:r,s:d,pose:M,bones:a,weapon:{userData:{blade:m}},acts:b,isChar:!0}}function Eu(i,e){let t=yu(i.scene),n=new Ve,s=new Ve,r=[];s.add(n),n.add(t);let a=null,o=null;if(t.traverse(g=>{if(g.isBone&&(!a&&!(g.parent&&g.parent.isBone)&&(a=g),!o&&/head/i.test(g.name)&&(o=g)),g.isMesh){g.frustumCulled=!1;let b=g.material=g.material.clone();b.emissive=new ge(e.glow??5233126),b.emissiveMap=b.map,b.emissiveIntensity=e.glowI??1.1,b.transparent=!0,b.opacity=.88,r.push(b)}}),!i.userData.bclips){i.scene.updateMatrixWorld(!0);let g=i.scene.getObjectByName(a.name),b=g.parent.getWorldQuaternion(Or()),x=b.clone().invert(),m=g.position.clone().applyQuaternion(b),v={};for(let _ of i.animations){let y=_.tracks.filter(L=>!L.name.endsWith(".scale")).map(L=>L.clone());for(let L of y)if(L.name===a.name+".position")for(let T=0;T<L.values.length;T+=3)pn.fromArray(L.values,T).applyQuaternion(b),pn.x=m.x,pn.z=m.z,pn.applyQuaternion(x).toArray(L.values,T);v[_.name]=new Fi(_.name,_.duration,y)}i.userData.bclips=v}s.updateMatrixWorld(!0);let c=new gt().setFromObject(t),l=c.getSize(Kt());if(o){let g=c.getCenter(Kt()),b=o.getWorldPosition(Kt()),x=Math.atan2(b.x-g.x,b.z-g.z);n.rotation.y=-Math.round(x/(Math.PI/2))*(Math.PI/2)}else l.x>l.z&&(n.rotation.y=Math.PI/2);e.flip&&(n.rotation.y+=Math.PI),s.updateMatrixWorld(!0),c=new gt().setFromObject(t),n.scale.setScalar(e.length/(e.span?Math.max(c.max.x-c.min.x,c.max.z-c.min.z):c.max.z-c.min.z)),s.updateMatrixWorld(!0),c=new gt().setFromObject(t),n.position.set(-(c.min.x+c.max.x)/2,-c.min.y,-(c.min.z+c.max.z)/2);let h=new va(t),u={};for(let[g,b]of Object.entries(e.clips))i.userData.bclips[b]&&(u[g]=h.clipAction(i.userData.bclips[b]));let d=null;function f(g,{once:b=!1,ts:x=1,fade:m=.12}={}){let v=u[g]||u.idle;if(v){if(v===d&&!b){v.timeScale=x;return}v.reset(),v.timeScale=x,v.setLoop(b?Ko:Jo,1/0),v.clampWhenFinished=b,v.play(),d&&d!==v&&d.crossFadeTo(v,m,!1),d=v}}return{root:s,mats:r,play:f,update:g=>h.update(g),bones:{root:a&&a.name,head:o&&o.name},clipNames:Object.keys(i.userData.bclips)}}function Mp(i,e){let t=Eu(i,{...e,glow:0,glowI:0});for(let r of t.mats)r.transparent=!1,r.opacity=1,r.emissiveMap=null;t.root.traverse(r=>{r.isMesh&&(r.castShadow=!0)});let n="";function s(r,a){let o=r.anim,c=o!==n;n=o,o==="run"?t.play("run",{ts:1.5}):o==="swing"?c&&t.play("lunge",{once:!0,ts:2.6,fade:.05}):o==="hurt"?c&&t.play("hit",{once:!0,ts:1.8,fade:.05}):o==="dead"?c&&t.play("death",{once:!0,ts:1.1,fade:.08}):t.play("idle",{ts:o==="windup"?2.2:1}),t.update(a)}return{root:t.root,mats:t.mats,s:e.s??.65,pose:s,isChar:!0,weapon:{userData:{}}}}var mn={on:!1,mx:0,mz:0},Zy=[["s-atk","LMB"],["s-blk","RMB",!0],["s-dge","Space"],["s-q","KeyQ"],["s-e","KeyE"],["s-f","KeyF"],["s-c","KeyC"],["s-v","KeyV"],["s-fly","ShiftLeft",!0],["s-r","KeyR"]];function wp(i,e){let t=new URLSearchParams(location.search);if(t.has("notouch")||!(t.has("touch")||matchMedia("(pointer: coarse)").matches||"ontouchstart"in window))return;mn.on=!0,window.__touch=!0,document.body.classList.add("touch");let n=document.createElement("div"),s=document.createElement("div");n.id="stick",s.id="knob",n.appendChild(s),document.body.appendChild(n);let r=null,a=0,o=0,c=54,l=h=>{h.pointerId===r&&(r=null,mn.mx=mn.mz=0,n.style.display="none")};addEventListener("pointerdown",h=>{r!==null||h.clientX>innerWidth*.46||h.target.closest(".slot")||h.target.closest(".screen")||(r=h.pointerId,a=h.clientX,o=h.clientY,n.style.display="block",n.style.left=a+"px",n.style.top=o+"px",s.style.transform="translate(-50%,-50%)")}),addEventListener("pointermove",h=>{if(h.pointerId!==r)return;let u=h.clientX-a,d=h.clientY-o,f=Math.hypot(u,d);f>c&&(u*=c/f,d*=c/f),s.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${d}px))`;let g=Math.hypot(u,d)/c;mn.mx=g<.22?0:u/c,mn.mz=g<.22?0:d/c});for(let h of["pointerup","pointercancel"])addEventListener(h,l);for(let[h,u,d]of Zy){let f=document.getElementById(h);if(!f)continue;let g=f.closest(".slotw")||f,b=x=>{x.preventDefault(),d&&i.delete(u),f.classList.remove("down")};g.addEventListener("pointerdown",x=>{x.preventDefault(),x.stopPropagation(),e.add(u),d&&i.add(u),f.classList.add("down")});for(let x of["pointerup","pointercancel","pointerleave"])g.addEventListener(x,b)}addEventListener("contextmenu",h=>h.preventDefault()),addEventListener("pointerup",function h(){removeEventListener("pointerup",h);let u=document.documentElement;try{let d=u.requestFullscreen&&u.requestFullscreen();d&&d.then&&d.then(()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})).catch(()=>{})}catch{}})}var Tu=()=>mn.on&&innerHeight>innerWidth;var gi=new URLSearchParams(location.search),Et=i=>document.getElementById(i),xi=Yf(Et("c")),{scene:Bt,camera:Ns}=xi,Ra=Kf(Bt),Lu=Jf(Bt),Du=Zf(Bt),B=new ac(Bt),Pn=Ra;Ra.activate();var Lp=()=>B.setView(xi.view.h,Ns.fov);Lp();addEventListener("resize",Lp);var Tt=Math.PI*2,Ue=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),Oe=(i,e)=>Math.atan2(e.x-i.x,e.z-i.z),Ca=(i,e)=>{let t=(i-e)%Tt;return t>Math.PI&&(t-=Tt),t<-Math.PI&&(t+=Tt),t},Ot=(i,e,t)=>i+Ca(e,i)*Math.min(1,t),Ru=(i,e,t,n,s,r=0)=>{let a=Ue(i,t);return a<=n+r&&(a<.7+r||Math.abs(Ca(Oe(i,t),e))<=s/2)},ln=(i,e,t)=>{i.pos.x+=e,i.pos.z+=t,pt(i.pos,i.r)},Rn=[.4,1.25,1.4],ii=[1.6,.62,.16],vt=[1.7,.16,.22],Vn=[1.8,1.3,.55],A=window.G={loaded:0,mode:"title",phase:"wave",time:0,shake:0,slow:0,tokens:[],tokenCd:0,waveIdx:0,enemies:[],projs:[],timers:[],boss:null,god:gi.has("god"),zoom:1,flash:0,shock:0,fx:B,focus:new R(0,0,3),intro:0},Dt=(i,e)=>A.timers.push({t:i,fn:e}),ds={player:{h:1.78,runTs:.95,weapon:"w_jian",weaponLen:1.2,clips:{idle:"human_000090",guard:"human_000040",run:"human_000067",hit:"human_000026",death:"human_000068",roll:"human_000042"}},melee:{h:1.75,runTs:1.65,borrow:i=>({run:[i.ranged,"human_000089"]}),weapon:"w_dao",weaponLen:1.05,clips:{idle:"human_000071",guard:"human_000040",run:"human_000053",hit:"human_000026",death:"human_000011"}},elite:{model:"melee",h:2.15,runTs:1.25,weapon:"w_dao",weaponLen:1.35,borrow:i=>({run:[i.ranged,"human_000089"]}),clips:{idle:"human_000040",guard:"human_000040",hit:"human_000026",death:"human_000011"}},thunder:{model:"ranged",h:1.8,runTs:1.6,clips:{idle:"human_000090",guard:"human_000090",run:"human_000089",hit:"human_000026",death:"human_000081"}},guard:{h:2.08,runTs:1.4,weapon:"w_great",weaponLen:2,borrow:i=>({run:[i.ranged,"human_000089"]}),clips:{idle:"human_000040",guard:"human_000040",hit:"human_000026",death:"human_000011"}},hawk:{quad:!0,span:!0,length:2.9,s:.5,clips:{idle:"bird_000003",run:"bird_000001",lunge:"bird_000002"}},boss3:{h:2.95,runTs:1.25,weapon:"w_great",weaponLen:3,clips:{idle:"human_000040",guard:"human_000040",run:"human_000089",hit:"human_000003",death:"human_000074"}},frost:{model:"ranged",h:1.78,runTs:1.6,clips:{idle:"human_000090",guard:"human_000090",run:"human_000089",hit:"human_000026",death:"human_000081"}},spirit:{h:1.98,runTs:1.5,weapon:"w_jian",weaponLen:1.35,borrow:i=>({run:[i.ranged,"human_000089"]}),clips:{idle:"human_000040",guard:"human_000040",hit:"human_000026",death:"human_000011"}},wolf:{quad:!0,length:2.3,s:.62,clips:{idle:"canine_000001",run:"canine_000002",lunge:"canine_000015",hit:"canine_000013",death:"canine_000018"}},boss2:{h:2,runTs:1.9,weapon:"w_jian",weaponLen:1.5,clips:{idle:"human_000090",guard:"human_000040",run:"human_000089",hit:"human_000026",death:"human_000081"}},ranged:{h:1.72,runTs:1.6,clips:{idle:"human_000090",guard:"human_000090",run:"human_000089",hit:"human_000026",death:"human_000081"}},boss:{h:2.6,runTs:1.3,weapon:"w_great",weaponLen:2.5,clips:{idle:"human_000040",guard:"human_000040",run:"human_000089",hit:"human_000003",death:"human_000074"}}},hn={},Qy=["player","melee","ranged","boss","w_jian","w_dao","w_great","lantern","pillar_tall","pillar_broken","pillar_fallen","burner","gate","beast"],Dp=["boss2","spirit","wolf","crystal","stele","monument"],Up=["boss3","guard","hawk","skygate","jadepillar","bell"],Au=(i,e)=>Promise.all(i.map(async t=>{hn[t]=await yp(`assets/models/${t}.glb`),e&&e()})),Sp=gi.get("stage")||"",$y=/^(2|boss2)$/.test(Sp)?Dp:/^(3|boss3)$/.test(Sp)?Up:[],uc=Qy.concat($y);gi.has("standin")||(await Au(uc,()=>{Et("go").textContent=`\u8F09\u5165\u4E2D ${++A.loaded} / ${uc.length}`}),Au(Dp.filter(i=>!uc.includes(i))).then(()=>(Lu.useProps(hn),A.stage===2&&Pn.activate(),Au(Up.filter(i=>!uc.includes(i))))).then(()=>{Du.useProps(hn),A.stage===3&&Pn.activate(),A.s2ready=!0}));var kp=(i,e)=>ds[i].quad&&hn[i]?Mp(hn[i],ds[i]):hn[ds[i].model||i]?_p(hn[ds[i].model||i],{...ds[i],weapon:hn[ds[i].weapon]||null,borrow:ds[i].borrow?ds[i].borrow(hn):null}):ep(e);A.GL=hn;Ra.useProps(hn);Lu.useProps(hn);Du.useProps(hn);function Uu(i){let e=[Ra,Lu,Du];A.stage=i,Pn=e[i-1]||Ra,e.forEach(t=>{t.root.visible=t===Pn}),Pn.activate(),Pn.setMood(0)}Uu(1);var Fp=[{dur:.42,hit:.12,cancel:.25,range:2.75,arc:2.3,dmg:14,lunge:2.4,stop:.065,kb:1,dir:1},{dur:.44,hit:.12,cancel:.26,range:2.85,arc:2.4,dmg:15,lunge:2.4,stop:.065,kb:1.2,dir:-1},{dur:.72,hit:.27,cancel:.52,range:3.3,arc:1.3,dmg:30,lunge:3.2,stop:.12,kb:3,dir:-1,tilt:1.32,heavy:!0}],p=A.player={pos:new R(0,0,7),yaw:Math.PI,r:.45,hp:150,maxHp:150,st:100,qi:30,state:"idle",t:0,dur:0,combo:0,hitstop:0,iframe:0,orbitT:0,cdF:0,cdC:0,cdV:0,lean:0,flyV:new R,ult:gi.has("ult")?100:0,buf:null,bufT:0,parryT:9,counterT:0,counterFrom:null,cdQ:0,cdE:0,kb:new R,anim:"idle",animP:0,phase:0,idleT:0,y:0,body:kp("player",{h:1.75,robe:14542568,trim:2847872,skin:14203291,dark:1843760,bun:!0,weapon:{len:1.15,w:.05,color:13625838,glow:801344}})};Bt.add(p.body.root);var Ep=new jo,e_=new Kn(new R(0,1,0),0),Gn=new R(0,0,0),Tp=new ce;function t_(){if(mn.on){let i=null,e=15;for(let t of A.enemies)if(!t.dead&&t.spawnT<=0){let n=Ue(p.pos,t.pos);n<e&&(e=n,i=t)}i?Gn.copy(i.pos):mn.mx||mn.mz?Gn.set(p.pos.x+mn.mx*6,0,p.pos.z+mn.mz*6):Gn.set(p.pos.x+Math.sin(p.yaw)*6,0,p.pos.z+Math.cos(p.yaw)*6);return}Tp.set(Ir.x,Ir.y),Ep.setFromCamera(Tp,Ns),Ep.ray.intersectPlane(e_,Gn)||Gn.copy(p.pos)}var fs=i=>{p.buf=i,p.bufT=.28},ku=()=>A.enemies.filter(i=>!i.dead&&i.spawnT<=0);function n_(i,e=6.5){let t=null,n=1e9;for(let s of ku()){let r=Ue(p.pos,s.pos)-s.r,a=Math.abs(Ca(Oe(p.pos,s.pos),i));if(r>e||a>1.15&&r>2.2||a>2.3)continue;let o=r+a*3.2;o<n&&(n=o,t=s)}return t}function Ap(i){let e=Fp[i],t=n_(Oe(p.pos,Gn));p.state="attack",p.t=0,p.combo=i,p.hitDone=!1,p.tgt=t,p.yaw=t?Oe(p.pos,t.pos):Oe(p.pos,Gn),p.lunge=t?Math.max(0,Math.min(e.lunge,Ue(p.pos,t.pos)-t.r-e.range*.62)):e.lunge*.35,de(e.heavy?"heavy":"swing")}function i_(i,e){let t=Math.hypot(i,e);p.dx=t?i/t:Math.sin(p.yaw),p.dz=t?e/t:Math.cos(p.yaw),p.yaw=Math.atan2(p.dx,p.dz),p.state="dodge",p.t=0,p.lean=0,p.iframe=.3,p.st-=18,p.hitstop=0,p.perfect=!1,p.buf=null,de("dodge");for(let n=0;n<8;n++)B.p.spawn(p.pos.x,.15,p.pos.z,(Math.random()-.5)*2,.6,(Math.random()-.5)*2,.5,.5,.25,.3,.36,0,2)}function s_(){let i=p.counterFrom,e=Oe(i.pos,p.pos);p.pos.set(i.pos.x+Math.sin(e)*(i.r+1.25),0,i.pos.z+Math.cos(e)*(i.r+1.25)),pt(p.pos,p.r),p.yaw=Oe(p.pos,i.pos),p.state="counter",p.t=0,p.hitDone=!1,p.iframe=.6,p.counterT=0,A.slow=.2,de("heavy"),B.ring(p.pos,2.2,Vn,.35)}function Rp(i,e,t){let n=!1,s={from:p.pos,heavy:i.heavy,stop:i.stop,kb:i.kb,dir:i.dir,poise:i.poise};for(let r of[...A.enemies])!r.dead&&(r===t||Ru(p.pos,e,r.pos,i.range,i.arc,r.r))&&(n=Hi(r,i.dmg,s)||n);for(let r of A.projs)r.team==="e"&&r.cut&&Ru(p.pos,e,r.pos,i.range,i.arc,.3)&&(r.life=0,B.sparks({x:r.pos.x,y:1.1,z:r.pos.z},e,14,vt,7,1.6),n=!0,p.qi=Math.min(100,p.qi+4));n&&(p.hitstop=i.stop,A.shake=Math.max(A.shake,i.heavy?.32:.12),p.qi=Math.min(100,p.qi+3),Bs(i.heavy?8:5),de(i.heavy?"hitHeavy":"hit"))}function r_(i){let e=p.body;if(p.idleT+=i,p.state!=="fly"&&p.state!=="dive"&&p.state!=="ult"&&(p.y=Math.max(0,(p.y||0)-i*9),p.lean=0),p.state==="dead"){p.t+=i,p.anim="dead",p.animP=p.t/.7;return}on.has("LMB")&&fs("atk"),on.has("Space")&&fs("dodge"),on.has("KeyQ")&&fs("q"),on.has("KeyE")&&fs("e"),on.has("KeyR")&&fs("r"),on.has("KeyF")&&fs("f"),on.has("KeyC")&&fs("c"),on.has("KeyV")&&fs("v"),p.bufT-=i,p.bufT<=0&&(p.buf=null),p.iframe=Math.max(0,p.iframe-i),p.cdQ=Math.max(0,p.cdQ-i),p.cdE=Math.max(0,p.cdE-i),p.cdF=Math.max(0,p.cdF-i),p.cdC=Math.max(0,p.cdC-i),p.cdV=Math.max(0,p.cdV-i),p.state!=="fly"&&(p.qi=Math.min(100,p.qi+1.7*i)),p.counterT=Math.max(0,p.counterT-i);let t=(Ut.has("KeyD")?1:0)-(Ut.has("KeyA")?1:0)+mn.mx,n=(Ut.has("KeyS")?1:0)-(Ut.has("KeyW")?1:0)+mn.mz,s=Math.hypot(t,n),r=Oe(p.pos,Gn);if(p.buf==="dodge"&&p.st>=18&&p.state!=="hurt"&&p.state!=="counter"&&p.state!=="dodge"&&p.state!=="ult"&&i_(t,n),p.hitstop>0){p.hitstop-=i;return}p.kb.lengthSq()>.02&&(ln(p,p.kb.x*i,p.kb.z*i),p.kb.multiplyScalar(Math.exp(-9*i)));let a=h=>{p.st=Math.min(100,p.st+h*i)},o=()=>p.buf==="r"&&p.ult>=100?(a_(),!0):p.buf==="atk"?(p.buf=null,p.counterT>0&&p.counterFrom&&!p.counterFrom.dead?s_():Ap(0),!0):p.buf==="q"&&p.cdQ<=0&&p.qi>=25?(p.buf=null,p.qi-=25,p.cdQ=3.5,p.state="skill",p.skill="q",p.t=0,p.hitDone=!1,p.yaw=r,de("cast"),!0):p.buf==="e"&&p.cdE<=0&&p.qi>=50?(p.buf=null,p.qi-=50,p.cdE=8,p.state="skill",p.skill="e",p.t=0,p.hitDone=!1,p.yaw=r,de("cast"),!0):p.buf==="f"&&p.cdF<=0&&p.qi>=30?(p.buf=null,p.qi-=30,p.cdF=6,p.state="skill",p.skill="f",p.t=0,p.hitDone=!1,p.yaw=r,de("cast"),!0):p.buf==="v"&&p.cdV<=0&&p.qi>=45&&hn.beast?(p.buf=null,p.qi-=45,p.cdV=20,l_(),!0):p.buf==="c"&&p.cdC<=0&&p.qi>=35?(p.buf=null,p.qi-=35,p.cdC=12,p.orbitT=Np,de("cast"),de("ring"),B.ring(p.pos,3.2,ms,.5),!0):!1,c=Ut.has("ShiftLeft")||Ut.has("ShiftRight"),l=()=>{let h=Math.hypot(p.pos.x,p.pos.z),u=Ma-p.r;h>u&&(p.pos.x*=u/h,p.pos.z*=u/h)};switch(p.state){case"idle":if(o())break;if(c||(p.noFly=!1),c&&!p.noFly&&p.qi>=8){p.state="fly",p.t=0,p.flyV.set(0,0,0),de("dodge"),de("ring"),B.ring(p.pos,2.2,ms,.4);break}if(Ut.has("RMB")&&p.st>0){p.state="block",p.parryT=0;break}s>0?(ln(p,t/s*6.2*i,n/s*6.2*i),p.yaw=Ot(p.yaw,Math.atan2(t,n),i*14),p.anim="run",p.phase+=i*12,Math.random()<i*9&&B.p.spawn(p.pos.x,.08,p.pos.z,0,.5,0,.5,.35,.16,.19,.23,0,2)):p.anim="idle",a(30);break;case"attack":{let h=Fp[p.combo];if(p.t+=i,p.swingDir=h.dir,p.tilt=h.tilt,p.t<h.hit){let u=Math.min(p.lunge,18*i,p.tgt&&!p.tgt.dead?Math.max(0,Ue(p.pos,p.tgt.pos)-p.tgt.r-1):99);p.lunge-=u,ln(p,Math.sin(p.yaw)*u,Math.cos(p.yaw)*u),p.anim="windup",p.animP=p.t/h.hit}else if(p.anim="swing",p.animP=(p.t-h.hit)/.14,!p.hitDone&&(p.hitDone=!0,B.slash({pos:p.pos,yaw:p.yaw,radius:h.range,arc:h.heavy?2.6:h.arc,dir:h.dir,tilt:h.tilt,dur:h.heavy?.36:.28,color:Rn,width:h.heavy?.6:.5}),Rp(h,p.yaw),h.heavy)){let u={x:p.pos.x+Math.sin(p.yaw)*2.2,z:p.pos.z+Math.cos(p.yaw)*2.2};B.ring(u,1.8,Rn,.4),B.crack(u,1.3,Rn,1.6)}if(p.t>=h.cancel&&p.buf==="atk"&&p.combo<2){p.buf=null,Ap(p.combo+1);break}if(p.t>=h.cancel&&(p.buf==="q"||p.buf==="e"||p.buf==="r"&&p.ult>=100)){p.state="idle",o();break}p.t>=h.dur&&(p.state="idle"),a(12);break}case"counter":p.t+=i,p.swingDir=1,p.tilt=0,p.anim=p.t<.12?"windup":"swing",p.animP=p.t<.12?p.t/.12:(p.t-.12)/.14,p.t>=.12&&!p.hitDone&&(p.hitDone=!0,B.slash({pos:p.pos,yaw:p.yaw,radius:3.8,arc:3,dir:1,dur:.4,color:Vn,width:.65}),Rp({range:3.8,arc:2.6,dmg:52,stop:.14,kb:3.4,heavy:!0,dir:1,poise:34},p.yaw,p.counterFrom)),p.t>=.5&&(p.state="idle");break;case"dodge":{p.t+=i;let h=p.t/.42;ln(p,p.dx*15*(1-h*.78)*i,p.dz*15*(1-h*.78)*i),p.anim="dodge",p.animP=h,h>=1&&(p.state="idle");break}case"block":if(p.parryT+=i,p.yaw=Ot(p.yaw,r,i*16),p.anim="block",s>0&&ln(p,t/s*2.2*i,n/s*2.2*i),p.buf==="atk"||p.buf==="q"||p.buf==="e"||p.buf==="r"&&p.ult>=100){p.state="idle",o();break}Ut.has("RMB")||(p.state="idle"),a(8);break;case"hurt":p.t+=i,p.anim="hurt",p.t>=p.dur&&(p.state="idle");break;case"fly":{p.t+=i,p.qi=Math.max(0,p.qi-8*i);let h=Math.min(1,p.t/.3);p.y=1.25*h*(2-h)+Math.sin(A.time*3)*.06;let u=1-Math.exp(-i*5);p.flyV.x+=((s?t/s*10.5:0)-p.flyV.x)*u,p.flyV.z+=((s?n/s*10.5:0)-p.flyV.z)*u,p.pos.x+=p.flyV.x*i,p.pos.z+=p.flyV.z*i,l();let d=Math.hypot(p.flyV.x,p.flyV.z);if(d>1&&(p.yaw=Ot(p.yaw,Math.atan2(p.flyV.x,p.flyV.z),i*10)),p.anim="fly",p.lean=.1+d*.022,Math.random()<i*(20+d*6)&&B.p.spawn(p.pos.x-Math.sin(p.yaw)*1.2+(Math.random()-.5)*.3,p.y+.05,p.pos.z-Math.cos(p.yaw)*1.2+(Math.random()-.5)*.3,0,.2,0,.45,.28,.35,1.2,1.4,0,1),p.buf==="atk"){p.buf=null,p.state="dive",p.t=0,p.yaw=r,p.diveHit=new Set,p.diveFrom=p.pos.clone(),p.iframe=.55,de("heavy");break}(!c||p.qi<=0)&&(p.state="idle",p.noFly=!0,pt(p.pos,p.r),B.ring(p.pos,1.8,ms,.35));break}case"dive":{p.t+=i;let h=Math.min(1,p.t/.3),u=27*i;p.pos.x+=Math.sin(p.yaw)*u,p.pos.z+=Math.cos(p.yaw)*u,l(),p.y=1.25*(1-h)+.2,p.lean=.65,p.anim="windup",p.animP=1,p.swingDir=1,p.tilt=0;for(let d=0;d<3;d++)B.p.spawn(p.pos.x+(Math.random()-.5)*.5,p.y+Math.random(),p.pos.z+(Math.random()-.5)*.5,0,.5,0,.35,.3,.4,1.4,1.6,0,1);for(let d of[...A.enemies])!d.dead&&!p.diveHit.has(d)&&Ue(p.pos,d.pos)<1.7+d.r&&(p.diveHit.add(d),Hi(d,34,{from:p.diveFrom,heavy:!0,stop:.08,kb:3,poise:22})&&(de("hitHeavy"),Bs(8),p.qi=Math.min(100,p.qi+3),A.shake=Math.max(A.shake,.35)));if(h>=1){let d=Ue(p.diveFrom,p.pos),f={x:(p.diveFrom.x+p.pos.x)/2,z:(p.diveFrom.z+p.pos.z)/2};pt(p.pos,p.r),B.lineSlash(f,p.yaw,d+3,.8,[.8,1.6,1.8],.38),B.lineSlash(f,p.yaw,d+3,2,[.1,.32,.38],.5,.08),B.ring(p.pos,3.4,ms,.45),B.crack(p.pos,1.7,Rn,2.2),A.shake=Math.max(A.shake,.45),de("hitHeavy"),p.state="idle",p.noFly=!0}break}case"ult":{p.t+=i;let h=p.t,u=Math.min(1,h/.55),d=u*u*(3-2*u);if(p.hidden=h>=lt.cut&&h<lt.fin-.07,h<lt.fin-.1){if(p.y=.95*d+Math.sin(h*4)*.04,p.anim="leap",p.animP=u,Math.random()<i*60){let f=Math.random()*Tt,g=1+Math.random()*8;B.p.spawn(p.ultC.x+Math.sin(f)*g,.1,p.ultC.z+Math.cos(f)*g,0,2.5+Math.random()*3.5,0,.8,.13,.4,1.2,1.4,0,.5)}}else{let f=Math.min(1,(h-lt.fin+.1)/.1);if(p.y=.95*(1-f),p.swingDir=1,p.tilt=0,p.anim=h<lt.fin?"windup":"swing",p.animP=h<lt.fin?f:(h-lt.fin)/.2,h>=lt.fin){let g=Math.min(1,(h-lt.fin)/.32);p.yaw=p.ultYaw+Tt*(1-Math.pow(1-g,3))}}if(h>=lt.fin&&!p.finDone){p.finDone=!0;let f=p.ultC;B.slash({pos:f,yaw:p.ultYaw,radius:10.5,arc:Tt,dir:1,dur:.65,color:[.22,.6,.72],width:.2}),B.slash({pos:f,yaw:p.ultYaw+2,radius:6.8,arc:Tt,dir:-1,dur:.5,color:[.6,.5,.28],width:.26,y:1.3}),B.slash({pos:f,yaw:p.ultYaw+4,radius:13.5,arc:Tt,dir:1,dur:.8,color:[.16,.42,.5],width:.12,y:.6}),B.ring(f,13,[.18,.45,.55],.75),B.ring(f,7,[.5,.38,.16],.5,.12),B.ring(f,16,[.08,.2,.26],1.1),B.crack(f,5,[.25,.7,.8],4),B.burst(f,80,[.3,.9,1],13,7,.24,1.2,.4),p.pins.forEach((g,b)=>Dt(b*.012,()=>{B.beam(g,8+Math.random()*4,.4,[.15,.42,.5],.7),B.burst(g,5,[.3,.9,1],4,6,.2,.6,.3)})),B.beam(f,15,1.1,[.1,.26,.32],.9),A.flash=.42,A.shock=1,A.shake=1.1,A.slow=.55,de("boom"),de("parry"),de("heavy"),de("roar");for(let g of[...A.enemies])!g.dead&&Ue(f,g.pos)<10.5+g.r&&Hi(g,80,{from:f,heavy:!0,stop:.2,kb:4.5,poise:45})}h>=lt.end&&(p.state="idle",p.y=0,p.hidden=!1,p.iframe=Math.max(p.iframe,.4));break}case"skill":if(p.t+=i,p.anim="cast",p.animP=p.t/.2,p.t>=.16&&!p.hitDone)if(p.hitDone=!0,p.skill==="q"){let h=B.crescent({color:Rn,radius:1.9,arc:1.9});A.projs.push({team:"p",pos:p.pos.clone().add(new R(Math.sin(p.yaw),0,Math.cos(p.yaw))),yaw:p.yaw,speed:24,r:1.5,dmg:26,life:.7,pierce:!0,hit:new Set,fxh:h,color:Rn}),de("heavy")}else if(p.skill==="f"){for(let h=-1;h<=1;h++){let u=new Ve,d=ls([.5,1.6,1.8],1.3);d.rotation.x=-Math.PI/2,d.position.z=.8,u.add(d),Bt.add(u),A.projs.push({team:"p",homing:!0,sword:!0,pos:p.pos.clone(),yaw:p.yaw+h*.95,speed:17,r:.75,dmg:10,life:2.7,pierce:!0,hit:new Set,hitT:.55,mesh:u,color:Rn})}de("swing"),de("ring")}else{let h=Math.min(10,Ue(p.pos,Gn)),u=new R(p.pos.x+Math.sin(p.yaw)*h,0,p.pos.z+Math.cos(p.yaw)*h);pt(u,.2),B.telegraph({kind:"circle",pos:u,radius:3.3,dur:.5,color:Rn}),B.fallSword(u,[.5,1.7,1.9],.5,1.25),Dt(.5,()=>{B.ring(u,4.6,Rn,.55),B.crack(u,3.3,Rn,3),B.burst(u,30,Rn,7,5,.3,.7,.3),A.shake=.5,de("boom");for(let d of[...A.enemies])!d.dead&&Ue(u,d.pos)<3.3+d.r&&Hi(d,58,{from:u,heavy:!0,stop:.12,kb:3,poise:30})})}p.t>=.36&&(p.state="idle");break}}var lt={charge:.85,gap:.05,n:22,cut:2.1,cuts:8,cutGap:.045,fin:2.52,end:3.3},Bs=i=>{p.state!=="ult"&&(p.ult=Math.min(100,p.ult+i))},ms=[.25,.8,.9];function a_(){p.buf=null,p.ult=0,p.state="ult",p.t=0,p.finDone=!1,p.iframe=lt.end+.4,p.hitstop=0,p.kb.set(0,0,0),p.counterT=0,p.ultYaw=p.yaw,p.pins=[];let i=p.ultC=p.pos.clone();for(let t of A.enemies)t.dead||(In(t),t.stun=Math.max(t.stun,.35));for(let t of A.projs)t.team==="e"&&(t.life=0);B.moon(i,9.3,[.8,.9,1],lt.end+.4),B.sigil(i,9.5,[.32,1.05,1.25],lt.end+.5),B.ring(i,5,ms,.55),B.ring(i,9,[.15,.45,.55],.8),de("ultCharge"),A.shake=.3;let e=t=>lt.charge+t*lt.gap-.14;B.swordHalo({pos:i,n:12,radius:2.5,y:4.7,appear:.6,release:Array.from({length:12},(t,n)=>e(n*2))}),B.swordHalo({pos:i,n:10,radius:4.3,y:3.5,appear:.7,spin:-.75,release:Array.from({length:10},(t,n)=>e(n*2+1))});for(let t=0;t<lt.n;t++)Dt(lt.charge+t*lt.gap-.16,()=>{let n=ku().filter(c=>Ue(i,c.pos)<11),s=n.length&&t%3!==2?n[t%n.length]:null,r=Math.random()*Tt,a=s?Math.random()*.7:2+Math.random()*6,o=pt(new R((s?s.pos.x:i.x)+Math.sin(r)*a,0,(s?s.pos.z:i.z)+Math.cos(r)*a),.2);p.pins.push(o),B.fallSword(o,[.5,1.7,1.9],.16,.9,lt.fin-p.t-.1),Dt(.16,()=>{B.ring(o,2.3,ms,.32),B.sparks({x:o.x,y:.5,z:o.z},Math.random()*Tt,9,Rn,8,3.2),A.shake=Math.max(A.shake,.24),de("hit"),de("ultHit");for(let c of[...A.enemies])!c.dead&&Ue(o,c.pos)<1.7+c.r&&Hi(c,11,{from:{x:o.x-Math.sin(r),z:o.z-Math.cos(r)},heavy:!0,stop:.05,kb:.3,poise:4})})});for(let t=0;t<lt.cuts;t++)Dt(lt.cut+t*lt.cutGap,()=>{let n=t*2.4+Math.random()*.5,s=Math.random()*3,r=Math.random()*Tt,a={x:i.x+Math.sin(r)*s,z:i.z+Math.cos(r)*s};B.lineSlash(a,n,21,.6,[1.6,2.4,2.6],.34),B.lineSlash(a,n,21,1.6,[.1,.3,.36],.5,.08),A.shake=Math.max(A.shake,.36),de("swing"),de("ultHit");for(let o of[...A.enemies])!o.dead&&Ue(i,o.pos)<10.5+o.r&&Hi(o,5,{from:a,heavy:!0,stop:.03,kb:.2,poise:2,dir:t%2?1:-1})})}var Np=6.5,o_=Array.from({length:4},()=>{let i=ls([.5,1.5,1.7],1.5);return i.visible=!1,Bt.add(i),i});function c_(i){let e=p.orbitT>0&&p.state!=="dead";e&&(p.orbitT-=i);let t=e?Math.min(1,(Np-p.orbitT)/.3,p.orbitT/.4):0;if(o_.forEach((n,s)=>{if(n.visible=t>.01,!n.visible)return;let r=A.time*5.2+s*Tt/4,a=2.3;n.position.set(p.pos.x+Math.sin(r)*a,(p.y||0)+.55+Math.sin(A.time*3+s)*.1,p.pos.z+Math.cos(r)*a),n.rotation.set(Math.cos(r)*.3,0,-Math.sin(r)*.3),n.scale.setScalar(Math.max(.01,t)),Math.random()<i*18&&B.p.spawn(n.position.x,n.position.y+.8,n.position.z,0,.3,0,.3,.22,.35,1.2,1.4,0,1);for(let o of[...A.enemies])!o.dead&&o.spawnT<=0&&(o.orbitCd||0)<=A.time&&Ue(n.position,o.pos)<.8+o.r&&(o.orbitCd=A.time+.45,Hi(o,7,{from:p.pos,stop:.03,kb:.7,poise:3,noChain:!0,stun:.14})&&(de("hit"),Bs(1)))}),e)for(let n of A.projs)n.team==="e"&&n.cut&&Ue(n.pos,p.pos)<2.8&&(n.life=0,B.sparks({x:n.pos.x,y:1.1,z:n.pos.z},n.yaw+Math.PI,10,vt,6,1.5))}var pi=null;function l_(){pi||(pi={body:Eu(hn.beast,{length:3,clips:{idle:"canine_000001",run:"canine_000002",atk1:"canine_000011",atk2:"canine_000012",lunge:"canine_000015"}}),pos:new R,yaw:0,side:1},Bt.add(pi.body.root));let i=pi,e=p.yaw+Math.PI/2;i.pos.set(p.pos.x+Math.sin(e)*2,0,p.pos.z+Math.cos(e)*2),pt(i.pos,.6),i.yaw=p.yaw,i.life=12,i.atk=0,i.cd=.35,i.k=0,i.on=!0,B.sigil(i.pos,2.8,[.3,1,1.2],1.2),B.ring(i.pos,3.4,ms,.5),B.beam(i.pos,8,1,[.16,.5,.6],.8),B.burst(i.pos,26,[.3,.9,1],5,5,.3,.8,.3),de("roar"),de("cast"),A.shake=Math.max(A.shake,.3)}function Cp(i){let e=pi;if(!e)return;if(!e.on||A.mode!=="play"){e.on=!1,e.body.root.visible=!1;return}e.life-=i,e.k=Math.min(1,e.k+i*4),e.cd-=i;let t=e.body.root;if(t.visible=!0,t.scale.setScalar(Math.max(.01,e.k*Math.min(1,e.life/.35))),e.life<=0){e.on=!1,t.visible=!1,B.burst(e.pos,24,[.3,.9,1],4,5,.3,.8,.5),B.ring(e.pos,2.5,ms,.4);return}let n=null,s=1e9;for(let a of A.enemies)if(!a.dead&&a.spawnT<=0){let o=Ue(e.pos,a.pos);o<s&&(s=o,n=a)}let r=(a,o)=>{e.pos.x+=Math.sin(a)*o,e.pos.z+=Math.cos(a)*o,pt(e.pos,.5)};if(e.atk>0)e.atk-=i,!e.hit&&e.atk<.33&&(e.hit=!0,B.slash({pos:e.pos,yaw:e.yaw,radius:2.7,arc:1.7,dir:e.side,color:[.4,1.2,1.3],dur:.26,width:.5,y:.9}),B.slash({pos:e.pos,yaw:e.yaw+.25*e.side,radius:2.3,arc:1.5,dir:e.side,color:[.3,.9,1],dur:.3,width:.4,y:1.2}),e.tgt&&!e.tgt.dead&&Ue(e.pos,e.tgt.pos)<2.9+e.tgt.r&&Hi(e.tgt,18,{from:e.pos,heavy:!0,stop:.07,kb:2,poise:12})&&(de("hitHeavy"),Bs(3),A.shake=Math.max(A.shake,.22)));else if(n){let a=1.9+n.r,o=Oe(e.pos,n.pos);e.yaw=Ot(e.yaw,o,i*11),s>a?(r(e.yaw,Math.min(12.5*i,s-a+.05)),e.body.play("run",{ts:1.5})):e.cd<=0?(e.tgt=n,e.side=-e.side,e.atk=.55,e.hit=!1,e.cd=.9,e.body.play(e.side>0?"atk1":"atk2",{once:!0,ts:1.8,fade:.06}),de("swing")):e.body.play("idle")}else{let a=Ue(e.pos,p.pos);a>3.2?(e.yaw=Ot(e.yaw,Oe(e.pos,p.pos),i*9),r(e.yaw,Math.min(9*i,a-2.6)),e.body.play("run",{ts:1.2})):e.body.play("idle")}Math.random()<i*22&&B.p.spawn(e.pos.x+(Math.random()-.5)*1.4,.3+Math.random()*1.2,e.pos.z+(Math.random()-.5)*1.4,0,.8,0,.5,.22,.35,1.1,1.3,0,1),t.position.set(e.pos.x,0,e.pos.z),t.rotation.y=e.yaw,e.body.update(i)}A.beast=()=>pi;var ps=new Ve;{let i=ls([.55,1.7,1.9],2.1);i.rotation.x=-Math.PI/2,i.position.z=1.25,ps.add(i),ps.visible=!1,Bt.add(ps)}function un(i,e){if(p.state==="dead")return"miss";if(p.iframe>0)return p.state==="dodge"&&!p.perfect&&(p.perfect=!0,Bs(8),p.qi=Math.min(100,p.qi+12),p.st=Math.min(100,p.st+18),A.slow=.16,B.ring(p.pos,1.8,Rn,.35)),"miss";let t=Oe(p.pos,e.from);if(p.state==="block"&&!e.unblockable&&Math.abs(Ca(t,p.yaw))<1.75){let n={x:p.pos.x+Math.sin(t)*.7,y:1.2,z:p.pos.z+Math.cos(t)*.7};return p.parryT<.24?(B.sparks(n,t,26,Vn,11,1.4),B.ring(p.pos,2.4,Vn,.4),de("parry"),A.shake=.22,A.slow=.12,Bs(14),p.qi=Math.min(100,p.qi+18),p.hitstop=.08,e.src&&!e.src.dead&&(p.counterT=1.25,p.counterFrom=e.src,e.src.isBoss?(e.src.poise-=36,e.src.hitstop=.16,e.src.poise<=0?Bp(e.src):e.proj||(In(e.src),e.src.stun=.9)):e.proj||(In(e.src),e.src.stun=1.5,e.src.hitstop=.12)),"parry"):(p.st-=i*1.5,p.kb.set(-Math.sin(t)*4,0,-Math.cos(t)*4),B.sparks(n,t,9,[1.6,1.5,1.3],6,1.2),de("block"),A.shake=.1,p.st<=0?(p.st=0,p.state="hurt",p.t=0,p.dur=.8,de("hurt")):e.src&&!e.src.dead&&!e.proj&&(p.counterT=.85,p.counterFrom=e.src),"block")}return A.god||(p.hp-=i),p.state="hurt",p.t=0,p.dur=.32,p.iframe=1,p.kb.set(-Math.sin(t)*7,0,-Math.cos(t)*7),A.shake=.4,A.hurtFlash=1,de("hurt"),p.counterT=0,B.sparks({x:p.pos.x,y:1.1,z:p.pos.z},t+Math.PI,10,[1.8,.25,.2],6,1.2),p.hp<=0&&(p.hp=0,p.state="dead",p.t=0,A.slow=.6,de("die"),Dt(1.6,()=>Ou("dead"))),"hit"}var h_={guard:{hp:105,speed:2.8,r:.6,body:{h:2.05,bulk:1.2,robe:15130828,trim:11569710,skin:13279818,weapon:{len:1.8,w:.1,color:14205562}}},hawk:{hp:44,speed:6,r:.6,fly:!0,body:{h:1,bulk:1.4,robe:15656656,trim:8019904,skin:13279818}},thunder:{hp:55,speed:2.9,r:.45,body:{h:1.72,bulk:.86,robe:6969908,trim:13279818,skin:15131354,hat:!0}},boss3:{hp:2400,speed:3.5,r:1.05,poise:110,body:{h:2.9,bulk:1.45,robe:15262412,trim:11569710,skin:11901574,dark:4865904,metal:11569710,pauldron:!0,weapon:{len:2.6,w:.18,color:14205562,glow:3811845}}},wolf:{hp:50,speed:5.2,r:.6,body:{h:1.1,bulk:1.3,robe:14212578,trim:10466504,skin:13620956}},spirit:{hp:100,speed:3.1,r:.55,body:{h:1.95,bulk:1.15,robe:9415101,trim:6191248,skin:10466504,weapon:{len:1.2,w:.07,color:12575728}}},frost:{hp:50,speed:2.9,r:.45,body:{h:1.7,bulk:.86,robe:6188940,trim:10474730,skin:15134450,hat:!0}},boss2:{hp:2300,speed:4,r:.75,poise:100,body:{h:1.95,bulk:.95,robe:15133170,trim:10129360,skin:15260884,dark:14212584,bun:!0,weapon:{len:1.4,w:.05,color:14674687,glow:2763366}}},elite:{hp:120,speed:2.6,r:.65,body:{h:2.1,bulk:1.25,robe:5910576,trim:9183018,skin:10128e3,talisman:!0,weapon:{len:1.2,w:.1,color:7168600}}},melee:{hp:60,speed:2.9,r:.5,body:{h:1.72,bulk:1.05,robe:5593423,trim:6965813,skin:9279370,talisman:!0,weapon:{len:.95,w:.08,color:7168600}}},ranged:{hp:40,speed:2.9,r:.45,body:{h:1.66,bulk:.86,robe:4202559,trim:9183018,skin:15131354,hat:!0}},boss:{hp:1500,speed:3.4,r:1,poise:100,body:{h:2.55,bulk:1.38,robe:1905688,trim:8198690,skin:10849664,dark:1381146,metal:2828848,pauldron:!0,horn:!0,weapon:{len:2.3,w:.17,color:2499627,glow:3802376}}}};function Fu(i,e,t){let n=h_[i],s={kind:i,pos:new R(e,0,t),yaw:Oe({x:e,z:t},p.pos),r:n.r,hp:n.hp,maxHp:n.hp,speed:n.speed,poise:n.poise||0,maxPoise:n.poise||0,stun:0,hitstop:0,flash:0,kb:new R,seq:null,si:0,t:0,cd:.6+Math.random()*1.6,anim:"idle",animP:0,phase:Math.random()*6,idleT:Math.random()*6,y:0,isBoss:/^boss/.test(i),fly:!!n.fly,spawnT:/^boss/.test(i)?0:.9,strafe:Math.random()<.5?1:-1,dead:!1,deadT:0,body:kp(i,n.body),last:"",hits:0,chain:0};if(Bt.add(s.body.root),i==="elite"&&s.body.isChar)for(let r of s.body.mats)r.color.setRGB(1.25,.6,.52);if(i==="frost"&&s.body.isChar)for(let r of s.body.mats)r.color.setRGB(.6,.85,1.25);if(i==="thunder"&&s.body.isChar)for(let r of s.body.mats)r.color.setRGB(1.35,1.05,.5);if(!s.isBoss){let r=new fa(new Sr({color:395532,opacity:.75,transparent:!0,depthTest:!1})),a=new fa(new Sr({color:13125180,depthTest:!1}));r.center.set(0,.5),a.center.set(0,.5),r.scale.set(1.04,.1,1),a.scale.set(1,.06,1),r.renderOrder=8,a.renderOrder=9,Bt.add(r,a),s.bar=[r,a],B.ring(s.pos,1.6,[.35,1.1,.4],.8),B.burst(s.pos,16,[.12,.3,.14],1.6,2.2,.5,1,.1)}return A.enemies.push(s),s}A.spawn=Fu;function In(i){i.cage&&(i.cage.kill(),i.cage=null),i.tele&&(i.tele.cancel(),i.tele=null),i.teles&&(i.teles.forEach(t=>t.cancel()),i.teles=null),i.seq=null,i.y=0;let e=A.tokens.indexOf(i);e>=0&&(A.tokens.splice(e,1),A.tokenCd=.7)}function Cn(i,e,t){i.seq=e,i.si=0,i.t=0,i.fresh=!0,i.last=t||""}function u_(i,e){let t=i.seq[i.si];if(!t){let s=i.seq.cd??1;In(i),i.cd=s;return}i.fresh&&(i.fresh=!1,t.start&&t.start(i)),i.t+=e;let n=Math.min(1,i.t/t.dur);i.anim=t.anim||"idle",i.animP=n,i.swingDir=t.dir||1,i.tilt=t.tilt||0,t.tick&&t.tick(i,n,e),i.t>=t.dur&&(t.end&&t.end(i),i.seq&&(i.si++,i.t=0,i.fresh=!0))}var Jt=(i,e,t={})=>({dur:i,anim:"windup",dir:t.dir,tilt:t.tilt,start(n){n.yaw=Oe(n.pos,p.pos),n.tele=B.telegraph({...e,pos:n.pos,yaw:n.yaw,dur:i})},tick(n,s,r){if(s<(t.track??.55)&&(n.yaw=Ot(n.yaw,Oe(n.pos,p.pos),r*7),n.tele&&n.tele.set(n.pos,n.yaw)),n.isBoss&&n.body.weapon.userData.blade){let a=n.body.weapon.userData.blade;n.kind==="boss2"?a.emissive.setRGB(.12*s,.16*s,.5*s):n.kind==="boss3"?a.emissive.setRGB(.5*s,.36*s,.06*s):a.emissive.setRGB(.5*s,.03*s,.04*s)}},end(n){n.tele=null}}),$t=i=>({dur:i.dur??.22,anim:"swing",dir:i.dir,tilt:i.tilt,start(e){i.step&&ln(e,Math.sin(e.yaw)*i.step,Math.cos(e.yaw)*i.step),B.slash({pos:e.pos,yaw:e.yaw,radius:i.range,arc:i.arc,dir:i.dir??1,tilt:i.tilt,color:i.color??ii,dur:.3,width:i.width??.45,y:e.isBoss?1.5:1.05}),de(e.isBoss?"heavy":"swing"),p.state!=="fly"&&p.state!=="dive"&&Ru(e.pos,e.yaw,p.pos,i.range,i.arc,.35)&&un(i.dmg,{from:e.pos,src:e})==="hit"&&(e.hitstop=.07),e.isBoss&&e.body.weapon.userData.blade&&e.body.weapon.userData.blade.emissive.setRGB(0,0,0)}}),kt=i=>({dur:i,anim:"idle"});function d_(i){if(i&&i.kind==="elite"){let n={kind:"fan",radius:3.5,arc:2.1,color:ii},s={range:3.5,arc:2.1,dmg:10},r=[Jt(.62,n,{dir:1}),$t({...s,dir:1,step:.7}),Jt(.42,n,{dir:-1,track:.4}),$t({...s,dir:-1,step:.9}),Jt(.55,{kind:"fan",radius:4,arc:1.1,color:ii},{tilt:1,track:.5}),$t({range:4,arc:1.1,dmg:13,dir:-1,tilt:1.35,step:1,width:.55}),kt(1.5)];return r.cd=1.1,r}if(i&&i.kind==="guard"){let n=[{dur:.62,anim:"windup",dir:1,start(s){s.yaw=Oe(s.pos,p.pos),s.tele=B.telegraph({kind:"line",pos:s.pos,yaw:s.yaw,length:6,width:1.5,dur:.62,color:fi})},tick(s,r,a){r<.55&&(s.yaw=Ot(s.yaw,Oe(s.pos,p.pos),a*6),s.tele&&s.tele.set(s.pos,s.yaw))},end(s){s.tele=null}},{dur:.22,anim:"swing",dir:1,start(s){let r={x:s.pos.x+Math.sin(s.yaw)*6,z:s.pos.z+Math.cos(s.yaw)*6};B.lineSlash({x:(s.pos.x+r.x)/2,z:(s.pos.z+r.z)/2},s.yaw,6,.7,[1.9,1.4,.5],.3,1.1),de("heavy"),p.state!=="fly"&&p.state!=="dive"&&Nu(p.pos,s.pos,r)<.8+p.r&&un(11,{from:s.pos,src:s})}},Jt(.58,{kind:"fan",radius:3.6,arc:2.6,color:fi},{dir:-1,track:.4}),$t({range:3.6,arc:2.6,dmg:10,dir:-1,step:.6,color:[1.6,1.2,.5]}),kt(1.1)];return n.cd=1.3,n}if(i&&i.kind==="spirit"){let n={kind:"fan",radius:3.1,arc:2,color:ni},s={range:3.1,arc:2,dmg:11,color:[.7,1.1,1.9]},r=[Jt(.6,n,{dir:1}),$t({...s,dir:1,step:.6}),Jt(.48,n,{dir:-1,track:.45}),$t({...s,dir:-1,step:.8}),{dur:.05,anim:"swing",start(a){let o=B.crescent({color:[.7,1.1,2],radius:1.7,arc:1.5});A.projs.push({team:"e",src:a,pos:a.pos.clone(),yaw:a.yaw,speed:12,r:.9,dmg:9,life:1,fxh:o,color:ni,big:!0})}},kt(1.1)];return r.cd=1.4,r}let e={kind:"fan",radius:2.7,arc:1.9,color:ii},t=[Jt(.7,e,{dir:1}),$t({range:2.7,arc:1.9,dmg:8,dir:1,step:.5}),Jt(.48,e,{dir:-1,track:.4}),$t({range:2.7,arc:1.9,dmg:8,dir:-1,step:.7}),kt(1.1)];return t.cd=1.6,t}function Cu(i,e,t={}){let n;if(t.sword){n=new Ve;let s=ls(t.color,1.2);s.rotation.x=-Math.PI/2,s.position.z=.7,n.add(s)}else n=new Be(new Bo(t.size??.22,0),new Yt({color:new ge(...t.color??[2.4,.35,.3])}));Bt.add(n),A.projs.push({team:"e",src:i,pos:new R(i.pos.x+Math.sin(e)*(i.r+.5),0,i.pos.z+Math.cos(e)*(i.r+.5)),yaw:e,speed:t.speed??11,r:t.r??.35,dmg:t.dmg??8,life:3,cut:!0,mesh:n,sword:!!t.sword,color:t.color?t.color.map(s=>Math.min(1.4,s)):vt}),de("bolt")}function f_(i){let e=i&&i.kind==="frost",t=[Jt(.95,{kind:"line",length:13,width:.7,color:e?ni:vt},{track:.72}),{dur:.3,anim:"cast",start(n){if(e)for(let s of[-.24,0,.24])Cu(n,n.yaw+s,{color:[.9,1.3,2.2],dmg:8});else Cu(n,n.yaw)}},kt(.5)];return t[0].anim="cast",t.cd=(A.stage===1?3.4:2.4)+Math.random(),t}function ti(i,e,t,n){ln(i,Math.sin(e)*t*n,Math.cos(e)*t*n),i.anim="run",i.phase+=n*t*2.6}var ni=[1.15,.8,1.9],mc=[1.9,1.4,.5],fi=[.85,.75,2.1],Os=(i,e,t,n)=>{B.telegraph({kind:"circle",pos:i,radius:e,dur:n,color:fi}),Dt(n,()=>{B.beam(i,16,e*.3,[.55,.42,.2],.32),B.beam(i,16,e*.1,[1.6,1.45,1.1],.22),B.ring(i,e*1.5,[.9,.65,.25],.4),B.crack(i,e,[1.4,1,.4],2),B.burst(i,10,[1.8,1.5,.6],7,5,.22,.5,.2),A.flash=Math.max(A.flash,e>3?.4:.1),A.shake=Math.max(A.shake,e>3?.9:.25),de("boom"),Ue(i,p.pos)<e+p.r*.5&&un(t,{from:i,unblockable:!0})})},Aa={elite(i,e){Aa.melee(i,e)},spirit(i,e){Aa.melee(i,e)},frost(i,e){Aa.ranged(i,e)},guard(i,e){Aa.melee(i,e)},thunder(i,e){let t=Ue(i.pos,p.pos),n=Oe(i.pos,p.pos);if(i.yaw=Ot(i.yaw,n,e*8),i.cd<=0&&t<14){let s=[{dur:1.5,anim:"cast",start(r){Os(pt(p.pos.clone(),.2),2.1,9,1.05),Dt(.6,()=>{r.dead||Os(pt(p.pos.clone(),.2),2.1,9,1.05)})}},kt(.4)];s.cd=3.8+Math.random()*1.4,Cn(i,s,"bolt");return}t<6?ti(i,n+Math.PI+i.strafe*.5,i.speed,e):t>11?ti(i,n,i.speed,e):(ti(i,n+i.strafe*Math.PI/2,i.speed*.45,e),Math.random()<e*.4&&(i.strafe*=-1))},hawk(i,e){let t=Ue(i.pos,p.pos),n=Oe(i.pos,p.pos);if(i.y+=(2.4-i.y)*Math.min(1,e*3),i.cd<=0&&t<11&&t>3){let a=[{dur:.65,anim:"windup",start(o){o.yaw=Oe(o.pos,p.pos),o.tele=B.telegraph({kind:"line",pos:o.pos,yaw:o.yaw,length:11,width:1.5,dur:.65,color:fi})},tick(o,c,l){c<.6&&(o.yaw=Ot(o.yaw,Oe(o.pos,p.pos),l*6),o.tele&&o.tele.set(o.pos,o.yaw)),o.y+=(2.9-o.y)*Math.min(1,l*4)},end(o){o.tele=null}},{dur:.44,anim:"swing",start(o){o.bit=!1,de("swing")},tick(o,c,l){ln(o,Math.sin(o.yaw)*25*l,Math.cos(o.yaw)*25*l),o.y=2.9-1.9*Math.sin(c*Math.PI),!o.bit&&p.state!=="dive"&&Ue(o.pos,p.pos)<1.4&&(o.bit=!0,B.slash({pos:o.pos,yaw:o.yaw,radius:1.9,arc:1.7,dir:1,color:[1.8,1.4,.6],dur:.22,width:.5,y:1.2}),un(8,{from:o.pos,src:o}))}},kt(.6)];a.cd=3.2+Math.random()*2,Cn(i,a,"stoop");return}let s=n+i.strafe*1.35,r=t>8?1:t<6?-1:0;i.yaw=Ot(i.yaw,s,e*6),ln(i,(Math.sin(n)*r*.7+Math.sin(s)*.8)*i.speed*e,(Math.cos(n)*r*.7+Math.cos(s)*.8)*i.speed*e),i.anim="run",Math.random()<e*.3&&(i.strafe*=-1)},boss3(i,e){let t=Ue(i.pos,p.pos),n=Oe(i.pos,p.pos),s=i.p2;if(i.yaw=Ot(i.yaw,n,e*6),i.cd>0){t>3.6?ti(i,n,i.speed*(s?1.15:1),e):ti(i,n+i.strafe*Math.PI/2,i.speed*.35,e);return}let r=t<5.5?[["combo",3],["dashes",1.2],["chain",1]]:[["dashes",2.4],["waves",2],["chain",1.8],["combo",t<8?1:0]];s&&r.push(["storm",i.rainCd>0?0:2.4]);let a=0;for(let l of r)l[0]===i.last&&(l[1]*=.25),a+=l[1];let o=Math.random()*a,c=r[0][0];for(let l of r)if(o-=l[1],o<=0){c=l[0];break}Cn(i,v_[c](i),c)},wolf(i,e){let t=Ue(i.pos,p.pos),n=Oe(i.pos,p.pos);if(i.cd<=0&&t<7.5&&t>2){let a=[{dur:.62,anim:"windup",start(o){o.yaw=Oe(o.pos,p.pos),o.tele=B.telegraph({kind:"line",pos:o.pos,yaw:o.yaw,length:7,width:1.6,dur:.62,color:ii})},tick(o,c,l){c<.6&&(o.yaw=Ot(o.yaw,Oe(o.pos,p.pos),l*6),o.tele&&o.tele.set(o.pos,o.yaw))},end(o){o.tele=null}},{dur:.3,anim:"swing",start(o){o.bit=!1,de("swing")},tick(o,c,l){ln(o,Math.sin(o.yaw)*22*l,Math.cos(o.yaw)*22*l),!o.bit&&p.state!=="fly"&&p.state!=="dive"&&Ue(o.pos,p.pos)<1.35&&(o.bit=!0,B.slash({pos:o.pos,yaw:o.yaw,radius:1.8,arc:1.6,dir:1,color:[1.2,1.3,1.5],dur:.22,width:.5,y:.8}),un(9,{from:o.pos,src:o}))}},kt(.7)];a.cd=2.8+Math.random()*1.8,Cn(i,a,"pounce");return}let s=n+i.strafe*1.25,r=t>6?1:t<4?-1:0;i.yaw=Ot(i.yaw,r?n+(r<0?Math.PI:0)*0:s,e*9),ln(i,(Math.sin(n)*r*.8+Math.sin(s)*.7)*i.speed*e,(Math.cos(n)*r*.8+Math.cos(s)*.7)*i.speed*e),i.anim="run",i.phase+=e*10,Math.random()<e*.5&&(i.strafe*=-1)},boss2(i,e){let t=Ue(i.pos,p.pos),n=Oe(i.pos,p.pos),s=i.p2;if(i.yaw=Ot(i.yaw,n,e*8),i.cd>0){let l=n+i.strafe*Math.PI/2,h=t>9?1:t<5?-1:0;ln(i,(Math.sin(n)*h+Math.sin(l)*.7)*i.speed*.75*e,(Math.cos(n)*h+Math.cos(l)*.7)*i.speed*.75*e),i.anim="run",i.phase+=e*8,Math.random()<e*.5&&(i.strafe*=-1);return}let r=t<5?[["blink",2],["ring",2.2],["volley",1]]:[["volley",3],["ring",1.4],["blink",2.2]];s&&r.push(["pillars",i.rainCd>0?0:2.4]);let a=0;for(let l of r)l[0]===i.last&&(l[1]*=.25),a+=l[1];let o=Math.random()*a,c=r[0][0];for(let l of r)if(o-=l[1],o<=0){c=l[0];break}Cn(i,x_[c](i),c)},melee(i,e){let t=Ue(i.pos,p.pos),n=Oe(i.pos,p.pos);if(i.yaw=Ot(i.yaw,n,e*8),!A.tokens.includes(i)&&A.tokens.length<(A.stage===1?1:2)&&A.tokenCd<=0&&i.cd<=0&&t<10&&A.tokens.push(i),A.tokens.includes(i)){t>(i.kind==="elite"?2.5:2)?ti(i,n,i.speed,e):Cn(i,d_(i));return}let s=4.9,r=t>s+.5?1:t<s-.5?-1:0,a=n+i.strafe*Math.PI/2;ln(i,(Math.sin(n)*r*.9+Math.sin(a)*.55)*i.speed*.6*e,(Math.cos(n)*r*.9+Math.cos(a)*.55)*i.speed*.6*e),i.anim="run",i.phase+=e*6,Math.random()<e*.3&&(i.strafe*=-1)},ranged(i,e){let t=Ue(i.pos,p.pos),n=Oe(i.pos,p.pos);if(i.yaw=Ot(i.yaw,n,e*8),i.cd<=0&&t<13){Cn(i,f_(i));return}t<5.5?ti(i,n+Math.PI+i.strafe*.5,i.speed,e):t>10.5?ti(i,n,i.speed,e):(ti(i,n+i.strafe*Math.PI/2,i.speed*.45,e),Math.random()<e*.4&&(i.strafe*=-1))},boss(i,e){let t=Ue(i.pos,p.pos),n=Oe(i.pos,p.pos),s=i.p2;if(i.yaw=Ot(i.yaw,n,e*6),i.cd>0){t>3.4?ti(i,n,i.speed*(s?1.15:1),e):ti(i,n+i.strafe*Math.PI/2,i.speed*.35,e);return}let r=[];t<5.2?r.push(["combo",3],["slam",1],["blink",.8]):r.push(["slam",1.6],["waves",2],["blink",2.2],["combo",t<8?1:0]),s&&r.push(["rain",i.rainCd>0?0:2.4]);let a=0;for(let l of r)l[0]===i.last&&(l[1]*=.25),a+=l[1];let o=Math.random()*a,c=r[0][0];for(let l of r)if(o-=l[1],o<=0){c=l[0];break}Cn(i,Op[c](i),c)}},Op={combo(i){let e=i.p2?.82:1,t={kind:"fan",radius:4.4,arc:2.2,color:ii},n={range:4.4,arc:2.2,dmg:12,width:.5},s=[Jt(.8*e,t,{dir:1}),$t({...n,dir:1,step:1.3}),Jt(.56*e,t,{dir:-1,track:.45}),$t({...n,dir:-1,step:1.5}),Jt(.72*e,{kind:"fan",radius:5,arc:1.1,color:ii},{tilt:1,track:.5}),$t({range:5,arc:1.1,dmg:17,dir:-1,tilt:1.35,step:1.6,width:.6,dur:.3}),{dur:.05,anim:"swing",start(r){let a=B.crescent({color:[1.7,.3,.2],radius:2.4,arc:1.5});A.projs.push({team:"e",src:r,pos:r.pos.clone(),yaw:r.yaw,speed:15,r:1.2,dmg:14,life:1.1,fxh:a,color:vt,big:!0}),B.crack({x:r.pos.x+Math.sin(r.yaw)*3,z:r.pos.z+Math.cos(r.yaw)*3},2,vt,2.5),A.shake=Math.max(A.shake,.4)}},kt(1.2*e)];return s.cd=i.p2?.5:.9,s},slam(i){let e=[{dur:i.p2?.9:1.05,anim:"leap",start(t){t.from=t.pos.clone(),t.to=pt(p.pos.clone(),t.r),t.tele=B.telegraph({kind:"circle",pos:t.to,radius:3.7,dur:this.dur,color:vt})},tick(t,n){if(n>.28){let s=(n-.28)/.72,r=s*s*(3-2*s);t.pos.lerpVectors(t.from,t.to,r),t.y=Math.sin(s*Math.PI)*3.4,t.yaw=Oe(t.from,t.to)||t.yaw}},end(t){t.y=0,t.tele=null;for(let n=0;n<8;n++){let s=n*Tt/8+.3;B.lineSlash({x:t.pos.x+Math.sin(s)*2.6,z:t.pos.z+Math.cos(s)*2.6},s,5,.5,[1.5,.3,.2],.4,.1),n%2&&B.beam({x:t.pos.x+Math.sin(s)*3.3,z:t.pos.z+Math.cos(s)*3.3},6,.3,[.9,.16,.12],.6)}B.ring(t.pos,5.2,vt,.6),B.crack(t.pos,3.7,vt,3.5),B.burst(t.pos,40,[1.2,.5,.3],8,5,.34,.8,.2),A.shake=.7,de("boom"),p.state!=="fly"&&Ue(t.pos,p.pos)<3.7+p.r&&un(19,{from:t.pos,src:t,unblockable:!0})}},kt(i.p2?.9:1.25)];return e.cd=.8,e},waves(i){let e=i.p2?5:3,t=.3,n=[{dur:.9,anim:"cast",start(s){s.yaw=Oe(s.pos,p.pos),s.teles=[];for(let r=0;r<e;r++)s.teles.push(B.telegraph({kind:"line",pos:s.pos,yaw:s.yaw+(r-(e-1)/2)*t,length:15,width:1.7,dur:.9,color:ii}))},end(s){s.teles=null;for(let r=0;r<e;r++){let a=s.yaw+(r-(e-1)/2)*t,o=B.crescent({color:[1.7,.3,.2],radius:1.7,arc:1.7});A.projs.push({team:"e",src:s,pos:s.pos.clone(),yaw:a,speed:12,r:.95,dmg:10,life:1.6,fxh:o,color:vt,big:!0})}de("heavy"),A.shake=.2}},kt(.85)];return n.cd=.7,n},rain(i){i.rainCd=11;let e=[{dur:2.5,anim:"cast",start(t){B.ring(t.pos,3,vt,.7),B.sigil(t.pos,4.2,[1.1,.16,.2],2.6);for(let n=0;n<7;n++)Dt(.15+n*.3,()=>{if(t.dead||p.state==="dead")return;let s=n?Math.random()*1.6:0,r=Math.random()*Tt,a=pt(new R(p.pos.x+Math.sin(r)*s,0,p.pos.z+Math.cos(r)*s),.2);B.telegraph({kind:"circle",pos:a,radius:2.1,dur:.85,color:vt}),B.fallSword(a,[2,.3,.25],.85,.9),Dt(.85,()=>{B.ring(a,3,vt,.45),B.crack(a,2.1,vt,2.2),B.burst(a,14,vt,5,4,.26,.6,.2),A.shake=Math.max(A.shake,.25),de("boom"),Ue(a,p.pos)<2.1+p.r*.5&&un(16,{from:a,unblockable:!0})})})}},kt(.7)];return e.cd=.6,e}},Nu=(i,e,t)=>{let n=t.x-e.x,s=t.z-e.z,r=n*n+s*s||1,a=Math.max(0,Math.min(1,((i.x-e.x)*n+(i.z-e.z)*s)/r));return Math.hypot(i.x-e.x-n*a,i.z-e.z-s*a)};Op.blink=i=>{let e=[{dur:i.p2?.62:.75,anim:"windup",dir:1,start(t){t.yaw=Oe(t.pos,p.pos);let n=Math.min(12,Ue(t.pos,p.pos)+3.2);t.from=t.pos.clone(),t.to=pt(new R(t.pos.x+Math.sin(t.yaw)*n,0,t.pos.z+Math.cos(t.yaw)*n),t.r),t.tele=B.telegraph({kind:"line",pos:t.pos,yaw:t.yaw,length:Ue(t.from,t.to),width:2.2,dur:this.dur,color:ii})},end(t){t.tele=null;let n={x:(t.from.x+t.to.x)/2,z:(t.from.z+t.to.z)/2},s=Ue(t.from,t.to);for(let r=0;r<5;r++){let a=r/4;B.burst({x:t.from.x+(t.to.x-t.from.x)*a,z:t.from.z+(t.to.z-t.from.z)*a},5,[.9,.12,.12],2,2,.3,.5,1)}t.pos.copy(t.to),B.lineSlash(n,t.yaw,s+2,1,[2.2,.5,.35],.4,1.2),B.lineSlash(n,t.yaw,s+2,2.6,[.4,.05,.06],.6,.1),B.ring(t.to,2.6,vt,.4),A.shake=Math.max(A.shake,.45),de("heavy"),de("ring"),p.state!=="fly"&&p.state!=="dive"&&Nu(p.pos,t.from,t.to)<1.25+p.r&&un(14,{from:t.from,src:t}),t.yaw+=Math.PI}},{dur:.25,anim:"swing",dir:1},kt(i.p2?.7:.95)];return e.cd=.6,e};function p_(i){i.ulted=!0,In(i),i.stun=0,i.invuln=!0;let e=(n,s,r,a,o)=>{B.telegraph({kind:"circle",pos:n,radius:s,dur:a,color:vt}),B.fallSword(n,[2,.3,.25],a,o,.7),Dt(a,()=>{B.ring(n,s*1.4,vt,.5),B.crack(n,s,vt,2.6),B.burst(n,16,vt,6,5,.28,.7,.2),A.shake=Math.max(A.shake,s>3?1:.28),de("boom"),Ue(n,p.pos)<s+p.r*.5&&un(r,{from:n,unblockable:!0})})},t=[{dur:.75,anim:"leap",start(n){n.from=n.pos.clone(),de("roar"),mi("","\u300C\u5C71\u9580\u65E2\u9589\uFF0C\u4FBF\u4E0D\u8A72\u518D\u958B\u3002\u300D",3.4),A.shake=.5,B.ring(n.pos,5,vt,.6)},tick(n,s){let r=s*s*(3-2*s);n.pos.set(n.from.x*(1-r),0,n.from.z*(1-r)),n.y=Math.sin(s*Math.PI)*4},end(n){n.y=0,n.pos.set(0,0,0),B.ring(n.pos,7,vt,.7),B.crack(n.pos,4,vt,9),A.shake=.8,de("boom");let s=Oe(n.pos,p.pos);Ue(n.pos,p.pos)<5&&p.kb.set(Math.sin(s)*15,0,Math.cos(s)*15)}},{dur:1.5,anim:"cast",start(n){A.bossUlt=!0,B.moon(n.pos,13.3,[1,.22,.2],8.6),B.sigil(n.pos,13.3,[1.15,.15,.2],8.6),de("ultCharge"),n.sweep=Math.random()*Tt,n.teles=[0,1,2,3].map(s=>B.telegraph({kind:"line",pos:n.pos,yaw:n.sweep+s*Math.PI/2,length:13.4,width:2.4,dur:5.9,color:vt}))},tick(n,s,r){if(n.yaw+=r*5,Math.random()<r*30){let a=Math.random()*Tt,o=2+Math.random()*10;B.p.spawn(Math.sin(a)*o,.1,Math.cos(a)*o,0,2+Math.random()*3,0,.8,.14,1.6,.2,.2,0,.5)}}},{dur:4.4,anim:"cast",start(n){n.swT=0,n.dropT=.5,de("heavy")},tick(n,s,r){n.sweep+=(s<.5?.52:-.7)*r,n.yaw=n.sweep,n.swT-=r,n.dropT-=r;let a=n.swT<=0;a&&(n.swT=.075);for(let o=0;o<4;o++){let c=n.sweep+o*Math.PI/2;if(n.teles&&n.teles[o].set(n.pos,c),a){B.lineSlash({x:Math.sin(c)*6.9,z:Math.cos(c)*6.9},c,13.4,.75,[1.9,.35,.3],.2,1.1);let h=1+Math.random()*12;B.p.spawn(Math.sin(c)*h,1+Math.random(),Math.cos(c)*h,0,2,0,.4,.2,2,.3,.25,0,1)}let l=Ue(n.pos,p.pos);l<13.6&&(l<1.4||Math.abs(Ca(Oe(n.pos,p.pos),c))<Math.atan2(.85,l))&&un(9,{from:{x:p.pos.x-Math.cos(c),z:p.pos.z+Math.sin(c)},unblockable:!0})}n.dropT<=0&&(n.dropT=1.1,e(pt(p.pos.clone(),.2),2,8,1,.9))},end(n){n.teles&&(n.teles.forEach(s=>s.cancel()),n.teles=null)}},{dur:1.35,anim:"leap",start(n){n.y=0,e(pt(p.pos.clone(),.2),5.2,24,1.5,3.4),n.fin=p.pos.clone(),de("ultCharge")},end(n){let s=n.fin;for(let r=0;r<10;r++){let a=r*Tt/10;B.beam({x:s.x+Math.sin(a)*4.4,z:s.z+Math.cos(a)*4.4},9,.4,[.9,.15,.12],.8),B.lineSlash({x:s.x+Math.sin(a)*3,z:s.z+Math.cos(a)*3},a,6,.6,[1.6,.3,.2],.45,.12)}B.ring(s,12,[.8,.12,.1],.9),A.flash=.45,A.shock=1,A.slow=.4,de("roar")}},{dur:.2,anim:"hurt",end(n){n.invuln=!1,A.bossUlt=!1,n.stun=3.4,n.poise=n.maxPoise,B.ring(n.pos,4,Vn,.6)}}];t.cd=.4,Cn(i,t,"ult")}var m_=(i,e,t,n,s,r=ni)=>{B.telegraph({kind:"circle",pos:i,radius:e,dur:n,color:r}),B.fallSword(i,[1.2,1.3,2.2],n,s,.7),Dt(n,()=>{B.ring(i,e*1.4,r,.5),B.crack(i,e,[.6,.8,1.6],2.6),B.burst(i,14,[.7,.9,1.8],6,5,.26,.7,.2),B.beam(i,6,e*.3,[.3,.4,.9],.6),A.shake=Math.max(A.shake,e>3?.9:.26),de("boom"),Ue(i,p.pos)<e+p.r*.5&&un(t,{from:i,unblockable:!0})})},Br=[];function Pu(i,e={}){let t=new Ve,n=22;for(let s=0;s<n;s++){let r=ls([1.1,1.2,2.1],1.1),a=s/n*Tt;r.rotation.set(Math.PI/2,0,0);let o=new Ve;o.rotation.y=a,r.position.set(0,1,1),o.add(r),t.add(o)}t.position.set(i.x,0,i.z),Bt.add(t),Br.push({g:t,pos:i.clone(),r:e.r0??1.2,speed:e.speed??7.2,max:e.max??15,dmg:e.dmg??12,hit:!1}),de("heavy"),de("ring")}function g_(i){for(let e=Br.length-1;e>=0;e--){let t=Br[e];t.r+=t.speed*i,t.g.scale.set(t.r,1,t.r),t.g.rotation.y+=i*.6;for(let n of t.g.children)n.children[0].scale.set(1/t.r,1/t.r,1);if(Math.random()<i*60){let n=Math.random()*Tt;B.p.spawn(t.pos.x+Math.sin(n)*t.r,1,t.pos.z+Math.cos(n)*t.r,0,.5,0,.35,.22,.7,.9,1.8,0,1)}!t.hit&&Math.abs(Ue(t.pos,p.pos)-t.r)<.75&&un(t.dmg,{from:t.pos,unblockable:!0})==="hit"&&(t.hit=!0),t.r>t.max&&(Bt.remove(t.g),Br.splice(e,1))}}var x_={volley(i){let e=i.p2?6:4,t=[{dur:.65,anim:"cast",start(n){n.yaw=Oe(n.pos,p.pos),n.tele=B.telegraph({kind:"line",pos:n.pos,yaw:n.yaw,length:14,width:.9,dur:.65,color:ni}),B.swordHalo({pos:n.pos,n:e,radius:1.5,y:2.4,appear:.4,release:Array.from({length:e},(s,r)=>.65+r*.2)})},tick(n,s,r){n.yaw=Ot(n.yaw,Oe(n.pos,p.pos),r*8),n.tele&&n.tele.set(n.pos,n.yaw)},end(n){n.tele=null}},{dur:e*.2+.1,anim:"cast",start(n){n.shot=0},tick(n,s,r){for(n.yaw=Ot(n.yaw,Oe(n.pos,p.pos),r*10);n.shot<e&&n.t>=n.shot*.2;)n.shot++,Cu(n,n.yaw+(Math.random()-.5)*.08,{sword:!0,color:[1.1,1.2,2.2],speed:16,dmg:9,r:.45})}},kt(i.p2?.8:1.1)];return t.cd=.5,t},ring(i){let e=[{dur:.85,anim:"cast",start(t){t.tele=B.telegraph({kind:"circle",pos:t.pos,radius:3,dur:.85,color:ni}),B.sigil(t.pos,3.2,[.7,.6,1.6],1.4),de("ultCharge")},end(t){t.tele=null,Pu(t.pos),t.p2&&Dt(.7,()=>{t.dead||Pu(t.pos,{speed:8.6})}),A.shake=Math.max(A.shake,.35)}},kt(i.p2?1.2:1.5)];return e.cd=.8,e},blink(i){let e={kind:"fan",radius:3.7,arc:2.3,color:ni},t={range:3.7,arc:2.3,dmg:14,color:[.8,1.1,2]},n=[{dur:.22,anim:"cast",start(s){B.burst(s.pos,18,[.7,.9,1.8],4,4,.3,.5,.8),B.ring(s.pos,2.2,ni,.35);let r=p.yaw+Math.PI,a=pt(new R(p.pos.x+Math.sin(r)*2.6,0,p.pos.z+Math.cos(r)*2.6),s.r);B.lineSlash({x:(s.pos.x+a.x)/2,z:(s.pos.z+a.z)/2},Oe(s.pos,a),Ue(s.pos,a),.4,[.6,.7,1.6],.3,1.2),s.pos.copy(a),s.yaw=Oe(s.pos,p.pos),B.burst(s.pos,18,[.7,.9,1.8],4,4,.3,.5,.8),de("dodge")}},Jt(i.p2?.46:.55,e,{dir:1,track:.5}),$t({...t,dir:1,step:.6}),Jt(.38,e,{dir:-1,track:.4}),$t({...t,dir:-1,step:.8}),kt(1.1)];return n.cd=.5,n},pillars(i){i.rainCd=10;let e=[{dur:2.2,anim:"cast",start(t){B.sigil(t.pos,4,[.7,.6,1.6],2.4);for(let n=0;n<5;n++)Dt(.15+n*.4,()=>{if(t.dead||p.state==="dead")return;let s=n?Math.random()*1.8:0,r=Math.random()*Tt;m_(pt(new R(p.pos.x+Math.sin(r)*s,0,p.pos.z+Math.cos(r)*s),.2),2.2,12,.95,.9)})}},kt(.9)];return e.cd=.6,e}};function b_(i){i.ulted=!0,In(i),i.stun=0,i.invuln=!0;let e=(a,o)=>{let c=a%2===0,l=[];for(let h=-5;h<=5;h++)(h+a)%2===0&&l.push(h*2.6);for(let h of l){let u=c?{x:-14.5,z:h}:{x:h,z:-14.5},d=c?Math.PI/2:0;B.telegraph({kind:"line",pos:u,yaw:d,length:29,width:2.5,dur:o,color:ni}),Dt(o,()=>{let f=c?{x:0,z:h}:{x:h,z:0};B.lineSlash(f,d,29,1.5,[1.3,1.5,2.6],.34,.9),B.lineSlash(f,d,29,2.6,[.2,.25,.6],.5,.08);for(let b=-2;b<=2;b++){let x=c?{x:b*5.2+(Math.random()-.5)*2,z:h}:{x:h,z:b*5.2+(Math.random()-.5)*2};Math.hypot(x.x,x.z)<13.4&&(B.fallSword(x,[1.2,1.3,2.2],.05,.8,.5),B.beam(x,5,.28,[.3,.4,.9],.5))}let g=c?p.pos.z-h:p.pos.x-h;Math.abs(g)<1.05&&un(11,{from:c?{x:p.pos.x,z:h-Math.sign(g||1)}:{x:h-Math.sign(g||1),z:p.pos.z},unblockable:!0})})}Dt(o,()=>{A.shake=Math.max(A.shake,.4),de("heavy"),de("ring")})},t=[1.25,1.15,1.05,.98,.92,.86],n=.3,s=t.map(a=>{let o=n;return n+=a*.92,o}),r=[{dur:.6,anim:"leap",start(a){a.from=a.pos.clone(),de("roar"),mi("","\u300C\u6B64\u8655\u846C\u528D\uFF0C\u4E0D\u846C\u4EBA\u3002\u4F60\u53EF\u4EE5\u4F8B\u5916\u3002\u300D",3.4),B.burst(a.pos,24,[.7,.9,1.8],5,5,.3,.6,.8)},tick(a,o){let c=o*o*(3-2*o);a.pos.set(a.from.x*(1-c),0,a.from.z*(1-c)),a.y=2.6*c}},{dur:1.3,anim:"cast",start(a){A.bossUlt=!0,a.y=2.6,B.moon(a.pos,13.3,[.7,.7,1.2],n+4.5),B.sigil(a.pos,13.3,[.75,.6,1.7],n+4.5),de("ultCharge"),B.swordHalo({pos:a.pos,n:16,radius:3.2,y:5.4,appear:1,spin:1.6,release:Array.from({length:16},(o,c)=>1.3+n*c/16)})},tick(a,o,c){a.y=2.6+Math.sin(A.time*2)*.15,a.yaw+=c*3}},{dur:n+.5,anim:"cast",start(a){t.forEach((o,c)=>Dt(s[c],()=>{!a.dead&&p.state!=="dead"&&e(c,o)}))},tick(a,o,c){a.y=2.6+Math.sin(A.time*2)*.15,a.yaw=Ot(a.yaw,Oe(a.pos,p.pos),c*4)}},{dur:1.9,anim:"leap",start(a){for(let o=0;o<3;o++)Dt(.1+o*.6,()=>{a.dead||Pu(a.pos,{speed:7.6+o*.8})})},tick(a,o){a.y=2.6*(1-o*o)},end(a){a.y=0,B.ring(a.pos,6,ni,.6),B.crack(a.pos,3,[.6,.8,1.6],4),A.shake=.5}},{dur:.2,anim:"hurt",end(a){a.invuln=!1,A.bossUlt=!1,a.stun=3.4,a.poise=a.maxPoise,B.ring(a.pos,4,Vn,.6)}}];r.cd=.4,Cn(i,r,"ult")}var v_={combo(i){let e=i.p2?.85:1,t={kind:"fan",radius:5,arc:2.2,color:fi},n={range:5,arc:2.2,dmg:14,width:.5,color:[1.7,1.25,.5]},s={dur:.05,anim:"swing",start(a){for(let o=0;o<3;o++)Os(pt(new R(a.pos.x+Math.sin(a.yaw)*(4.5+o*3),0,a.pos.z+Math.cos(a.yaw)*(4.5+o*3)),.2),1.7,9,.62+o*.16)}},r=[Jt(.75*e,t,{dir:1}),$t({...n,dir:1,step:1.3}),s,Jt(.55*e,t,{dir:-1,track:.45}),$t({...n,dir:-1,step:1.5}),s,Jt(.7*e,{kind:"fan",radius:5.6,arc:1.1,color:fi},{tilt:1,track:.5}),$t({range:5.6,arc:1.1,dmg:19,dir:-1,tilt:1.35,step:1.6,width:.6,dur:.3,color:[1.7,1.25,.5]}),s,kt(1.2*e)];return r.cd=i.p2?.5:.9,r},chain(i){let e=i.p2?6:4,t=[{dur:e*.42+1,anim:"cast",start(n){B.sigil(n.pos,4,[1.2,.9,.35],e*.42+1.2);for(let s=0;s<e;s++)Dt(.2+s*.42,()=>{!n.dead&&p.state!=="dead"&&Os(pt(p.pos.clone(),.2),2.1,10,.9)})}},kt(.9)];return t.cd=.6,t},dashes(i){let e=n=>({dur:n,anim:"windup",dir:1,start(s){s.yaw=Oe(s.pos,p.pos);let r=Math.min(11,Ue(s.pos,p.pos)+3);s.from=s.pos.clone(),s.to=pt(new R(s.pos.x+Math.sin(s.yaw)*r,0,s.pos.z+Math.cos(s.yaw)*r),s.r),s.tele=B.telegraph({kind:"line",pos:s.pos,yaw:s.yaw,length:Ue(s.from,s.to),width:2.2,dur:n,color:fi})},end(s){s.tele=null;let r={x:(s.from.x+s.to.x)/2,z:(s.from.z+s.to.z)/2},a=Ue(s.from,s.to);s.pos.copy(s.to),B.lineSlash(r,s.yaw,a+2,1,[2.4,1.8,.6],.4,1.2),B.lineSlash(r,s.yaw,a+2,2.6,[.4,.3,.08],.6,.1),B.ring(s.to,2.6,mc,.4),A.shake=Math.max(A.shake,.4),de("heavy"),de("ring"),p.state!=="fly"&&p.state!=="dive"&&Nu(p.pos,s.from,s.to)<1.25+p.r&&un(13,{from:s.from,src:s})}}),t=[e(i.p2?.62:.72),e(.5),e(.5),{dur:.25,anim:"swing",dir:1},kt(1)];return t.cd=.6,t},waves(i){let n=r=>{for(let a=0;a<5;a++){let o=r.yaw+(a-2)*.3,c=B.crescent({color:[1.8,1.3,.4],radius:1.7,arc:1.7});A.projs.push({team:"e",src:r,pos:r.pos.clone(),yaw:o,speed:12,r:.95,dmg:11,life:1.6,fxh:c,color:fi,big:!0})}de("heavy"),A.shake=Math.max(A.shake,.2)},s=[{dur:.85,anim:"cast",start(r){r.yaw=Oe(r.pos,p.pos),r.teles=[];for(let a=0;a<5;a++)r.teles.push(B.telegraph({kind:"line",pos:r.pos,yaw:r.yaw+(a-2)*.3,length:15,width:1.7,dur:.85,color:fi}))},end(r){r.teles=null,n(r)}}];return i.p2&&s.push({dur:.6,anim:"cast",start(r){r.yaw=Oe(r.pos,p.pos)+.3/2},end(r){n(r)}}),s.push(kt(.85)),s.cd=.7,s},storm(i){i.rainCd=10;let e=[{dur:2.6,anim:"cast",start(t){B.sigil(t.pos,5,[1.2,.9,.35],2.8);for(let n=0;n<9;n++)Dt(.2+n*.26,()=>{if(t.dead||p.state==="dead")return;let s=Math.random()*Tt,r=Math.random()*11;Os(n%3===0?pt(p.pos.clone(),.2):pt(new R(Math.sin(s)*r,0,Math.cos(s)*r),.2),2.2,10,.95)})}},kt(.9)];return e.cd=.6,e}};function y_(i){i.ulted=!0,In(i),i.stun=0,i.invuln=!0;let e=13.4,t=6.4,n=4.5,s=6.5,r=[{dur:.75,anim:"leap",start(a){a.from=a.pos.clone(),de("roar"),mi("","\u300C\u5929\u95D5\u4E4B\u4E0A\uFF0C\u53EA\u5BB9\u5F97\u4E0B\u4E00\u628A\u528D\u3002\u300D",3.4),A.shake=.5,B.ring(a.pos,5,mc,.6)},tick(a,o){let c=o*o*(3-2*o);a.pos.set(a.from.x*(1-c),0,a.from.z*(1-c)),a.y=Math.sin(o*Math.PI)*4},end(a){a.y=0,a.pos.set(0,0,0),B.ring(a.pos,7,mc,.7),B.crack(a.pos,4,[1.4,1,.4],9),A.shake=.8,de("boom");let o=Oe(a.pos,p.pos);Ue(a.pos,p.pos)<4&&p.kb.set(Math.sin(o)*13,0,Math.cos(o)*13)}},{dur:n+s,anim:"cast",start(a){A.bossUlt=!0,a.cage=B.wall(a.pos,e,7,[.55,.4,.16]),a.cageR=e,a.burn=0,a.boltT=1.2,a.fanT=2.4,a.spin=Math.random()*Tt,B.sigil(a.pos,t,[.9,.65,.25],n+s+1.6),de("ultCharge")},tick(a,o,c){let l=a.t;if(a.cageR=l<n?e+(t-e)*(l/n)*(l/n)*(3-2*l/n):t,a.cage.set(a.cageR),a.yaw=Ot(a.yaw,Oe(a.pos,p.pos),c*3),a.burn-=c,Ue(a.pos,p.pos)>a.cageR+.2&&a.burn<=0&&(a.burn=.6,un(7,{from:{x:p.pos.x*1.3,z:p.pos.z*1.3},unblockable:!0})),Math.random()<c*30){let h=Math.random()*Tt;B.p.spawn(Math.sin(h)*a.cageR,Math.random()*5,Math.cos(h)*a.cageR,0,3,0,.3,.2,2,1.6,.6,0,1)}if(a.boltT-=c,a.boltT<=0&&(a.boltT=l<n?1.1:.8,Os(pt(p.pos.clone(),.2),2,9,.95)),a.fanT-=c,a.fanT<=0&&l>n){a.fanT=1.9,a.spin+=.5;for(let h=0;h<6;h++){let u=a.spin+h*Tt/6,d=B.crescent({color:[1.8,1.3,.4],radius:1.4,arc:1.5});A.projs.push({team:"e",src:a,pos:a.pos.clone(),yaw:u,speed:7,r:.8,dmg:9,life:1.1,fxh:d,color:fi,big:!0})}de("heavy")}}},{dur:1.6,anim:"leap",start(a){Os(pt(p.pos.clone(),.2),4.4,24,1.7),de("ultCharge")},end(a){a.cage&&(a.cage.kill(),a.cage=null),A.shock=1,A.slow=.4,de("roar")}},{dur:.2,anim:"hurt",end(a){a.invuln=!1,A.bossUlt=!1,a.stun=3.4,a.poise=a.maxPoise,B.ring(a.pos,4,Vn,.6)}}];r.cd=.4,Cn(i,r,"ult")}function Bp(i){In(i),i.stun=2.6,i.poise=i.maxPoise,B.ring(i.pos,4,Vn,.6),A.shake=.5,A.slow=.25,de("parry")}function __(i){let e=i.kind==="boss2",t=i.kind==="boss3";i.p2=!0,In(i),i.stun=0,i.invuln=!0,Pn.setMood(1),xi.grade.uniforms.uTint.value.set(e?.02:t?.03:.05,t?.01:0,e||t?.05:0),Cn(i,[{dur:1.5,anim:"cast",start(n){de("roar"),B.ring(n.pos,9,vt,.9),B.burst(n.pos,50,vt,9,6,.3,1),A.shake=.6,de("boom");let s=Oe(n.pos,p.pos);Ue(n.pos,p.pos)<7&&p.kb.set(Math.sin(s)*16,0,Math.cos(s)*16),mi("",n.kind==="boss3"?"\u300C\u4F60\u4E00\u8DEF\u4E0A\u4F86\uFF0C\u6298\u4E86\u591A\u5C11\u528D\uFF0C\u81EA\u5DF1\u6578\u904E\u55CE\u3002\u300D":n.kind==="boss2"?"\u300C\u528D\u9084\u8A8D\u5F97\u4F60\u3002\u53EF\u60DC\u6211\u4E0D\u8A8D\u5F97\u3002\u300D":"\u300C\u4E09\u5341\u5E74\u4E86\u3002\u9084\u6709\u4EBA\u6562\u4E0A\u9019\u5EA7\u5C71\u3002\u300D",3.2)},end(n){n.invuln=!1}}],"p2"),i.seq.cd=.3}function Hi(i,e,t={}){if(i.dead||i.invuln||i.spawnT>0)return!1;let n=i.isBoss,s=Oe(t.from,i.pos),r=!1;!n&&i.seq&&i.seq[i.si]&&i.seq[i.si].anim!=="idle"&&i.si%2===0&&i.t/i.seq[i.si].dur>.4&&(r=!0,e*=1.35),n&&i.stun>0&&(e*=1.3),i.hp-=e,i.hitstop=t.stop??.07,i.flash=.14,i.hits++,A.time-(i.lastHit||0)>1.2&&(i.chain=0),i.lastHit=A.time;let a={x:i.pos.x-Math.sin(s)*i.r*.8,y:n?1.5:1.1,z:i.pos.z-Math.cos(s)*i.r*.8};if(B.sparks(a,s+(t.dir||0)*1.1,t.heavy?20:10,n?[2,1.2,.6]:[1.2,1.8,1.1],t.heavy?12:8,.6),n)i.poise-=t.poise??(t.heavy?18:6),i.poise<=0&&i.stun<=0&&!i.invuln&&Bp(i),!i.p2&&i.hp<=i.maxHp*.5&&i.hp>0?__(i):i.p2&&!i.ulted&&i.hp<=i.maxHp*.3&&i.hp>0&&p.state!=="ult"&&({boss2:b_,boss3:y_}[i.kind]||p_)(i);else if(i.kind==="elite"&&!t.heavy&&!r)i.hitstop=Math.min(i.hitstop,.04);else if((i.kind==="melee"||i.kind==="spirit")&&!t.heavy&&!t.noChain&&!r&&++i.chain>=3&&i.hp>0){i.chain=0,i.stun=0,In(i),i.yaw=Oe(i.pos,p.pos),B.ring(i.pos,1.5,ii,.3);let o=[Jt(.4,{kind:"fan",radius:2.9,arc:2.1,color:ii},{dir:-1,track:.7}),$t({range:2.9,arc:2.1,dmg:13,dir:-1,step:.6}),kt(.8)];o.cd=1,Cn(i,o,"riposte")}else{t.noChain||In(i),i.stun=t.stun??(r?1.1:t.heavy?.6:.32),(t.heavy||r)&&(i.chain=0);let o=(t.kb??1.2)*6.5;i.kb.set(Math.sin(s)*o,0,Math.cos(s)*o),r&&B.ring(i.pos,1.8,Vn,.35)}return i.hp<=0&&M_(i,s),!0}function M_(i,e){Bs(6),i.dead=!0,i.hp=0,In(i),i.kb.set(Math.sin(e)*9,0,Math.cos(e)*9),p.qi=Math.min(100,p.qi+8),de("die"),i.bar&&(Bt.remove(...i.bar),i.bar=null),i.isBoss?(A.bossUlt=!1,de("roar"),A.slow=1.2,A.shake=.8,B.ring(i.pos,10,Vn,1.2),B.burst(i.pos,70,vt,9,7,.35,1.4),Pn.setMood(0),xi.grade.uniforms.uTint.value.set(0,0,0),A.projs.forEach(t=>{t.team==="e"&&(t.life=0)}),Dt(2.6,()=>A.stage<3?R_():Ou("win"))):B.burst(i.pos,22,[.2,.5,.22],3,3,.4,.9)}function w_(i,e){if(i.idleT+=e,i.flash=Math.max(0,i.flash-e),i.dead){i.fly&&i.deadT<1.8&&(i.y=Math.max(0,i.y-e*7)),i.deadT+=e,i.anim="dead",i.animP=i.deadT/.6,ln(i,i.kb.x*e,i.kb.z*e),i.kb.multiplyScalar(Math.exp(-7*e)),i.deadT>1.8&&(i.y=-(i.deadT-1.8)*1.4);return}if(i.hitstop>0){i.hitstop-=e;return}if(i.spawnT>0){i.spawnT-=e,i.y=-Math.max(0,i.spawnT)*2,i.anim="idle";return}if(i.kb.lengthSq()>.02&&(ln(i,i.kb.x*e,i.kb.z*e),i.kb.multiplyScalar(Math.exp(-8*e))),i.rainCd=Math.max(0,(i.rainCd||0)-e),i.stun>0){i.stun-=e,i.anim="hurt",i.stun<=0&&i.isBoss&&(i.cd=.35);return}i.cd-=e,i.seq?u_(i,e):A.intro<=0?Aa[i.kind](i,e):i.anim="idle"}function S_(i){for(let e of A.projs){if(e.homing){e.hitT-=i,e.hitT<=0&&(e.hit.clear(),e.hitT=.55);let n=null,s=1e9;for(let r of A.enemies)if(!r.dead&&r.spawnT<=0&&!e.hit.has(r)){let a=Ue(e.pos,r.pos);a<s&&(s=a,n=r)}(!n||e.life<.45)&&(n=p),e.yaw=Ot(e.yaw,Oe(e.pos,n.pos),i*9),e.life<.45&&Ue(e.pos,p.pos)<1&&(e.life=0)}e.life-=i,e.pos.x+=Math.sin(e.yaw)*e.speed*i,e.pos.z+=Math.cos(e.yaw)*e.speed*i,!e.homing&&Math.hypot(e.pos.x,e.pos.z)>Ma+2.5&&(e.life=0);let t=e.mesh||e.fxh.mesh;if(t.position.set(e.pos.x,1.05,e.pos.z),t.rotation.y=e.yaw,e.mesh&&(e.sword||(t.rotation.x+=i*9),B.p.spawn(e.pos.x,1.05,e.pos.z,0,.3,0,.3,.3,e.color[0],e.color[1]*.5,e.color[2]*.5)),!(e.life<=0)){if(e.team==="e"){if(Ue(e.pos,p.pos)<e.r+p.r){let n=un(e.dmg,{from:{x:e.pos.x-Math.sin(e.yaw),z:e.pos.z-Math.cos(e.yaw)},src:e.src,proj:!0});n==="parry"&&e.mesh?(e.team="p",e.yaw+=Math.PI,e.speed*=1.7,e.dmg=40,e.life=2,e.hit=new Set,e.mesh.material.color.setRGB(...Vn),e.color=Vn):n!=="miss"&&(e.life=0)}}else for(let n of A.enemies)if(!n.dead&&!e.hit.has(n)&&Ue(e.pos,n.pos)<e.r+n.r&&(e.hit.add(n),Hi(n,e.dmg,{from:{x:e.pos.x-Math.sin(e.yaw)*2,z:e.pos.z-Math.cos(e.yaw)*2},heavy:!0,kb:2,poise:16,stop:.05})&&de("hit"),!e.pierce)){e.life=0;break}}}for(let e=A.projs.length-1;e>=0;e--)if(A.projs[e].life<=0){let t=A.projs[e];t.mesh?(Bt.remove(t.mesh),B.burst(t.pos,6,t.color,3,2,.2,.3,.9)):t.fxh.kill(),A.projs.splice(e,1)}}function E_(){let i=A.enemies.filter(t=>!t.dead&&t.spawnT<=0&&t.y<.5);for(let t=0;t<i.length;t++)for(let n=t+1;n<i.length;n++){let s=i[t],r=i[n],a=r.pos.x-s.pos.x,o=r.pos.z-s.pos.z,c=Math.hypot(a,o)||.001,l=s.r+r.r+.15-c;if(l>0){let h=r.isBoss?1:s.isBoss?0:.5;s.pos.x-=a/c*l*h,s.pos.z-=o/c*l*h,r.pos.x+=a/c*l*(1-h),r.pos.z+=o/c*l*(1-h)}}let e=p.state==="fly"||p.state==="dive";if(p.state!=="dodge"&&p.state!=="dead"&&!e)for(let t of i){let n=p.pos.x-t.pos.x,s=p.pos.z-t.pos.z,r=Math.hypot(n,s)||.001,a=p.r+t.r-r;if(a>0){let o=t.isBoss?1:.6;p.pos.x+=n/r*a*o,p.pos.z+=s/r*a*o,t.pos.x-=n/r*a*(1-o),t.pos.z-=s/r*a*(1-o)}}for(let t of i)pt(t.pos,t.r);e||pt(p.pos,p.r)}var dc=Et("banner"),fc=0;function mi(i,e,t=3){dc.children[0].textContent=i,dc.children[1].textContent=e,dc.classList.add("on"),fc=t}function Ou(i){A.mode=i,document.body.classList.toggle("play",i==="play");for(let e of["title","dead","win"])Et(e).classList.toggle("on",e===i)}function zp(){for(let i of A.enemies)Bt.remove(i.body.root),i.bar&&Bt.remove(...i.bar),In(i);A.enemies.length=0;for(let i of A.projs)i.mesh?Bt.remove(i.mesh):i.fxh.kill();A.projs.length=0,A.timers.length=0,A.tokens.length=0,A.boss=null;for(let i of Br)Bt.remove(i.g);Br.length=0}var Pp=[["melee","melee","ranged"],["melee","melee","ranged","ranged"],["melee","melee","melee","ranged","elite"]],T_=[["wolf","wolf","wolf","spirit","spirit"],["wolf","wolf","wolf","frost","frost","spirit"],["wolf","wolf","wolf","spirit","spirit","frost","frost"]],A_=[["guard","guard","hawk","hawk"],["guard","guard","hawk","hawk","thunder","thunder"],["guard","guard","guard","hawk","hawk","thunder","thunder"]],Hp=()=>[Pp,T_,A_][A.stage-1]||Pp;function Gp(i){A.waveIdx=i;let e=Hp(),t=e[i].length,n=Math.random()*Tt;e[i].forEach((s,r)=>{let a=0,o=0;for(let l=0;l<12;l++){let h=n+r/t*Tt+(Math.random()-.5)*.5,u=(s==="ranged"||s==="frost"||s==="thunder"?10.5:8)+Math.random()*1.5;if(a=Math.sin(h)*u,o=Math.cos(h)*u,Math.hypot(a-p.pos.x,o-p.pos.z)>5)break}let c=pt(new R(a,0,o),.7);Dt(r*.12,()=>Fu(s,c.x,c.z))})}function Vp(){Gp(0),A.stage===3?mi("\u96F2\u5DD4\u5929\u95D5","\u528D\u585A\u7684\u76E1\u982D\u662F\u4E00\u9053\u5411\u4E0A\u7684\u77F3\u968E\uFF0C\u77F3\u968E\u7684\u76E1\u982D\u5728\u96F2\u4E0A\u9762\u3002",3.8):A.stage===2?mi("\u5BD2\u6F6D\u528D\u585A","\u5C71\u9580\u4E4B\u5F8C\uFF0C\u662F\u4E00\u6574\u7247\u7D50\u4E86\u51B0\u7684\u528D\u3002",3.6):mi("","\u6F14\u6B66\u53F0\u4E0A\u9084\u6709\u6771\u897F\u5728\u52D5\u3002",3)}function Wp(){let i=A.stage,e=[["boss",vt,"\u53B2\u7121\u548E<small>\u58AE\u528D\u5C0A</small>","\u53B2\u7121\u548E","\u5B88\u5728\u9019\u88E1\u7684\uFF0C\u662F\u7576\u5E74\u89AA\u624B\u95DC\u4E0A\u5C71\u9580\u7684\u4EBA\u3002"],["boss2",ni,"\u971C\u665A<small>\u5B88\u585A\u4EBA</small>","\u971C\u665A","\u5979\u5728\u9019\u88E1\u5B88\u4E86\u5F88\u4E45\uFF0C\u4E45\u5230\u5FD8\u4E86\u662F\u5728\u7B49\u8AB0\u3002"],["boss3",mc,"\u7384\u9704<small>\u5929\u95D5\u4E4B\u4E3B</small>","\u7384\u9704","\u5C71\u9580\u662F\u4ED6\u4E0B\u4EE4\u95DC\u7684\u3002\u528D\u585A\u88E1\u7684\u528D\uFF0C\u662F\u4ED6\u4E00\u628A\u4E00\u628A\u6536\u4E0A\u4F86\u7684\u3002"]][i-1];A.phase="boss";let t=A.boss=Fu(e[0],0,-11.5);t.cd=.4,A.intro=2.8,Et("boss").classList.add("on"),de("boom"),A.shake=.3,B.ring(t.pos,6,e[1],1.1),Et("boss").firstElementChild.innerHTML=e[2],mi(e[3],e[4],3.6)}function R_(){let i=A.stage+1;A.phase="travel",A.fadeTo=1,mi("",i===3?"\u51B0\u9762\u88C2\u958B\u4E00\u9053\u7E2B\uFF0C\u7E2B\u88E1\u662F\u5F80\u4E0A\u7684\u77F3\u968E\u3002":"\u5C71\u9580\u958B\u4E86\u3002\u98A8\u662F\u5F9E\u9580\u5F8C\u5439\u4F86\u7684\u3002",2.6),Dt(1.5,()=>{zp(),Uu(i),xi.grade.uniforms.uTint.value.set(0,0,0),Et("boss").classList.remove("on"),pi&&(pi.on=!1),p.pos.set(0,0,7),p.yaw=Math.PI,p.kb.set(0,0,0),p.state="idle",p.y=0,p.hp=Math.min(p.maxHp,p.hp+70),p.qi=Math.max(p.qi,50),A.focus.set(0,0,5),A.fadeTo=0,A.phase="wave",A.waveAt=A.time,A.intro=0,Dt(.6,Vp)})}function Bu(i){zp(),Object.assign(p,{orbitT:0,cdF:0,cdC:0,cdV:0,lean:0,ult:gi.has("ult")?100:0,hp:p.maxHp,st:100,qi:30,state:"idle",hidden:!1,t:0,hitstop:0,iframe:1,buf:null,counterT:0,cdQ:0,cdE:0,yaw:Math.PI,y:0}),p.pos.set(0,0,7),p.kb.set(0,0,0),Uu(/^(3|boss3)$/.test(i||"")?3:/^(2|boss2)$/.test(i||"")?2:1),A.fadeTo=0,A.bossUlt=!1,pi&&(pi.on=!1),Pn.setMood(0),xi.grade.uniforms.uTint.value.set(0,0,0),Et("boss").classList.remove("on"),A.slow=0,A.intro=0,Ou("play"),/^boss/.test(i||"")?Wp():(A.phase="wave",A.waveAt=A.time,Vp())}A.start=Bu;function C_(i){let e=A.enemies.filter(n=>!n.dead).length,t=Hp();A.phase==="wave"&&A.waveIdx<t.length-1&&e<=1&&A.time-(A.waveAt||0)>3?(A.waveAt=A.time,p.hp=Math.min(p.maxHp,p.hp+20),B.ring(p.pos,2,[.4,1.4,.7],.6),Gp(A.waveIdx+1),mi("",A.stage===3?A.waveIdx===1?"\u96F2\u88E1\u6709\u7FC5\u8180\u7684\u8072\u97F3\u3002":"\u9418\u97FF\u4E86\u4E00\u8072\uFF0C\u6C92\u6709\u4EBA\u6572\u3002":A.stage===2?A.waveIdx===1?"\u51B0\u4E0B\u6709\u6771\u897F\u5728\u7FFB\u8EAB\u3002":"\u72FC\u7FA4\u9084\u6C92\u6563\u3002":A.waveIdx===1?"\u7B26\u7D19\u53C8\u4EAE\u4E86\u4E00\u7247\u3002":"\u9084\u6C92\u5B8C\u3002",2.2)):A.phase==="wave"&&A.waveIdx===t.length-1&&e===0&&A.time-(A.waveAt||0)>3&&(A.phase="lull",p.hp=Math.min(p.maxHp,p.hp+60),B.ring(p.pos,2.4,[.4,1.4,.7],.8),Dt(2.4,Wp)),A.intro=Math.max(0,A.intro-i);for(let n=A.enemies.length-1;n>=0;n--){let s=A.enemies[n];s.dead&&!s.isBoss&&s.deadT>3.2&&(Bt.remove(s.body.root),A.enemies.splice(n,1))}}for(let i of["pointerdown","keydown"])addEventListener(i,()=>Gh(gi.has("mute")),!0);wp(Ut,on);addEventListener("pointerdown",()=>{!A.ready||Tu()||A.mode!=="play"&&(Gh(gi.has("mute")),Bu(A.mode==="win"?void 0:A.mode==="dead"?A.boss?["boss","boss2","boss3"][A.stage-1]:[void 0,"2","3"][A.stage-1]:gi.get("stage")),on.delete("LMB"))});var pc=new R(0,16.5,11.8);Ns.position.copy(A.focus).add(pc);Ns.lookAt(A.focus.x,1,A.focus.z);var ks=new R;function P_(i){if(A.mode==="title")ks.set(Math.sin(A.time*.12)*2.5,0,2.5+Math.cos(A.time*.09)*1.5);else{ks.copy(p.pos);let r=A.boss;if(r&&!r.dead){let a=r.pos.x-p.pos.x,o=r.pos.z-p.pos.z,c=Math.hypot(a,o)||1,l=A.intro>.6?Math.min(c*.75,9):Math.min(c*.22,3);ks.x+=a/c*l,ks.z+=o/c*l}ks.x+=Math.max(-1,Math.min(1,(Gn.x-p.pos.x)*.05)),ks.z+=Math.max(-1,Math.min(1,(Gn.z-p.pos.z)*.05))}if(A.camO){Ns.position.copy(A.camO.pos),Ns.lookAt(A.camO.look);return}A.focus.lerp(ks,1-Math.exp(-i*(A.intro>0?2.2:5))),A.shake=Math.max(0,A.shake-i*1.8);let e=p.state==="ult"&&A.mode==="play",t=(mn.on?.84:1)*(e?p.t<lt.cut?.82:p.t<lt.fin?.94:1.18:p.state==="fly"&&A.mode==="play"?1.1:1);A.zoom+=(t-A.zoom)*(1-Math.exp(-i*(t>1?14:3.5)));let n=A.shake*A.shake*1.6;Ns.position.set(A.focus.x+pc.x*A.zoom+(Math.random()-.5)*n,pc.y*A.zoom+(Math.random()-.5)*n,A.focus.z+pc.z*A.zoom+(Math.random()-.5)*n*.5),A.flash=Math.max(0,A.flash-i*3.4);let s=xi.grade.uniforms;s.uFlash.value=A.flash*A.flash,s.uExposure.value+=((e&&p.t<lt.fin?p.t<lt.cut?.56:.34:A.bossUlt?.8:1.15)-s.uExposure.value)*(1-Math.exp(-i*(e&&p.t>=lt.cut?22:6))),A.shock=Math.max(0,A.shock-i*2.2),s.uShock.value=A.shock,s.uMono.value+=((e&&p.t>=lt.cut-.04&&p.t<lt.fin?1:0)-s.uMono.value)*(1-Math.exp(-i*30))}var I_=Et("fade"),Fs=(i,e)=>{i.style.width=(Math.max(0,Math.min(1,e))*100).toFixed(1)+"%"},Lt={hp:Et("hp").children,st:Et("st").children,qi:Et("qi").children,bhp:Et("bhp").children,bpo:Et("bpo").children,hurt:Et("hurt"),counter:Et("counter"),sq:Et("s-q"),sf:Et("s-f"),sc:Et("s-c"),sv:Et("s-v"),sfl:Et("s-fly"),ur:Et("s-r-ring"),se:Et("s-e"),sd:Et("s-dge"),sb:Et("s-blk")};function L_(i){Fs(Lt.hp[0],p.hp/p.maxHp),Fs(Lt.hp[1],p.hp/p.maxHp),Fs(Lt.st[0],p.st/100),Fs(Lt.qi[0],p.qi/100);let e=A.boss;e&&(Fs(Lt.bhp[0],e.hp/e.maxHp),Fs(Lt.bhp[1],e.hp/e.maxHp),Fs(Lt.bpo[0],e.poise/e.maxPoise)),A.hurtFlash=Math.max(0,(A.hurtFlash||0)-i*2.2),Lt.hurt.style.opacity=(A.hurtFlash*.7+(p.hp<30&&p.state!=="dead"?.18+.1*Math.sin(A.time*6):0)).toFixed(2),Lt.counter.classList.toggle("on",p.counterT>0&&A.mode==="play"),Lt.sv.classList.toggle("dim",p.qi<45||!hn.beast),Lt.sv.lastElementChild.style.height=p.cdV/20*100+"%",Lt.sf.classList.toggle("dim",p.qi<30),Lt.sf.lastElementChild.style.height=p.cdF/6*100+"%",Lt.sc.classList.toggle("dim",p.qi<35&&p.orbitT<=0),Lt.sc.lastElementChild.style.height=p.cdC/12*100+"%",Lt.sfl.classList.toggle("dim",p.qi<8&&p.state!=="fly"),Lt.sfl.classList.toggle("active",p.state==="fly"),Lt.sq.classList.toggle("dim",p.qi<25),Lt.sq.lastElementChild.style.height=p.cdQ/3.5*100+"%",Lt.se.classList.toggle("dim",p.qi<50),Lt.se.lastElementChild.style.height=p.cdE/8*100+"%",Lt.ur.style.setProperty("--p",p.ult.toFixed(0)+"%"),Lt.ur.parentNode.classList.toggle("ready",p.ult>=100),Lt.sd.classList.toggle("dim",p.st<18),Lt.sb.classList.toggle("dim",p.st<=0),fc>0&&(fc-=i,fc<=0&&dc.classList.remove("on"))}function Ip(i,e){let t=i.body,n=i.hitstop>0&&i!==p?.05:0;t.root.position.set(i.pos.x+(Math.random()-.5)*n,i.y||0,i.pos.z+(Math.random()-.5)*n),t.root.rotation.order="YXZ",t.root.rotation.set(i.lean||0,i.yaw,0),t.root.visible=!i.hidden,i.hitstop>0||(t.pose?t.pose(i,e):tp(t,i,e));let s=i.flash>0?i.flash/.14:0;if(i!==p)for(let r of t.mats)r.userData.base||r.emissive.setScalar(s*.9);if(i.bar){let r=2.25*t.s+(i.y||0);i.bar[0].position.set(i.pos.x-.52,r,i.pos.z),i.bar[1].position.set(i.pos.x-.5,r,i.pos.z),i.bar[1].scale.x=Math.max(.001,i.hp/i.maxHp);let a=i.hp<i.maxHp&&!i.dead;i.bar[0].visible=i.bar[1].visible=a}}function D_(i){if(Pn.update(i,A.time,A.focus),A.mode==="play"){t_(),A.tokenCd=Math.max(0,A.tokenCd-i);for(let t=A.timers.length-1;t>=0;t--){let n=A.timers[t];n.t-=i,n.t<=0&&(A.timers.splice(t,1),n.fn())}r_(i),c_(i),Cp(i);let e=p.state==="ult"&&p.t<lt.fin;for(let t of[...A.enemies]){if(e&&!t.dead){t.flash=Math.max(0,t.flash-i),t.hitstop=Math.max(0,t.hitstop-i),t.kb.lengthSq()>.02&&(ln(t,t.kb.x*i,t.kb.z*i),t.kb.multiplyScalar(Math.exp(-8*i))),t.anim="hurt";continue}w_(t,i)}E_(),e||(S_(i),g_(i)),C_(i)}else p.anim=p.state==="dead"?"dead":"idle",Cp(i);Ip(p,i);for(let e of A.enemies)Ip(e,i);if(ps.visible=A.mode==="play"&&(p.state==="fly"||p.state==="dive"),ps.visible&&(ps.position.set(p.pos.x,(p.y||0)-.04,p.pos.z),ps.rotation.order="YXZ",ps.rotation.set(-(p.lean||0)*.6,p.yaw,0)),Pn.lanterns.length&&Math.random()<i*5){let e=Pn.lanterns[Math.random()*4|0].l.position;B.p.spawn(e.x,1.7,e.z,(Math.random()-.5)*.5,.7+Math.random(),(Math.random()-.5)*.5,1.6,.09,2,.8,.25,-.3,.6)}ap(A.mode!=="play"?"explore":A.phase==="boss"&&A.boss&&!A.boss.dead?["boss","boss2","boss3"][A.stage-1]:A.phase==="wave"?["battle","battle2","battle3"][A.stage-1]:"explore"),A.stage===3&&A.boss&&A.boss.p2&&!A.boss.dead&&A.mode==="play"&&Math.random()<i*.3&&(A.flash=Math.max(A.flash,.22)),A.fade=(A.fade||0)+((A.fadeTo||0)-(A.fade||0))*Math.min(1,i*3.2),I_.style.opacity=A.fade.toFixed(3),B.update(i),P_(i),L_(i)}var Iu=performance.now();function qp(i,e){let t=e??Math.min(.05,(i-Iu)/1e3);Iu=i;let n=t;A.slow>0&&(A.slow-=t,n*=.3),A.time+=n,D_(n),A.noRender||xi.render(A.time),U_(),Wf()}var U_=qf(()=>`mode ${A.mode}/${A.phase}  state ${p.state}  t ${p.t.toFixed(2)}
pos ${p.pos.x.toFixed(1)},${p.pos.z.toFixed(1)}  rim ${(Ma-Math.hypot(p.pos.x,p.pos.z)).toFixed(1)}
hp ${p.hp|0} st ${p.st|0} qi ${p.qi|0} ult ${p.ult|0}  enemies ${ku().length}`);A.step=(i=60,e=1/60)=>{for(let t=0;t<i;t++)qp(0,e)};A.clamp=pt;A.music=cp;A.audio=op;A.press=(...i)=>i.forEach(e=>on.add(e));A.keys=Ut;A.mouse=Ir;A.aim=Gn;A.R=xi;A.world=Pn;A.state=()=>({stage:A.stage,mode:A.mode,phase:A.phase,p:{s:p.state,hp:Math.round(p.hp),st:Math.round(p.st),qi:Math.round(p.qi),x:+p.pos.x.toFixed(2),z:+p.pos.z.toFixed(2)},e:A.enemies.map(i=>({k:i.kind,hp:Math.round(i.hp),x:+i.pos.x.toFixed(1),z:+i.pos.z.toFixed(1),dead:i.dead,seq:i.seq?i.last+":"+i.si:"",stun:+i.stun.toFixed(2)})),projs:A.projs.length,fx:B.items.length});A.ready=!0;Et("go").textContent="\u9EDE\u64CA\u958B\u59CB";gi.has("auto")&&Bu(gi.get("stage"));(function i(e){A.paused||Tu()?(Iu=e,xi.render(A.time)):qp(e),requestAnimationFrame(i)})(performance.now());
