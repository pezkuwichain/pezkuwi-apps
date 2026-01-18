"use strict";(("undefined"!=typeof self?self:this).webpackChunk_pezkuwi_apps=("undefined"!=typeof self?self:this).webpackChunk_pezkuwi_apps||[]).push([[8719],{49718(e,s,t){t.d(s,{Ay:()=>T});var r=t(95647),n=t(69679),i=t(81284);const a={name:"@pezkuwi/react-identicon",path:new URL("file:///home/runner/work/pezkuwi-apps/pezkuwi-apps/node_modules/@pezkuwi/react-identicon/packageInfo.js").pathname.substring(0,new URL("file:///home/runner/work/pezkuwi-apps/pezkuwi-apps/node_modules/@pezkuwi/react-identicon/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"3.17.2"};(0,i.Q)(a,null,[r.z,n.z]);var o=t(31085),c=t(14041),l=t(5750),u=t(49723),m=t(36013),d=t(33482),p=t(54143),h=t(92100),f=t(84645),y=t(92110),w=t(76506),g=t(88241);const x=c.memo(function({address:e,className:s="",size:t,style:r={}}){const n=(0,c.useCallback)(s=>{s&&(s.innerHTML="",s.appendChild((0,g.G)(e,{isAlternative:!1,size:t})))},[e,t]);return(0,o.jsx)("div",{className:s,ref:n,style:r})});var v=t(8634);const k=c.memo(function({className:e="",publicKey:s,size:t,style:r={}}){const n=(0,c.useMemo)(()=>({__html:v.YI(s.substring(2),t)}),[s,t]);return(0,o.jsx)("div",{className:e,dangerouslySetInnerHTML:n,style:r})}),z=c.memo(function({className:e="",size:s,style:t={}}){return(0,o.jsx)("svg",{className:e,height:s,style:t,viewBox:"0 0 64 64",width:s})});var b=t(13766),N=t(64767);const j=N.I4.img(({size:e})=>`\n  display: block;\n  height: ${e}px;\n  width: ${e}px;\n`),I=c.memo(function({address:e,className:s="",size:t,style:r={}}){const n=(0,c.useMemo)(()=>b(e),[e]);return(0,o.jsx)(j,{className:s,size:t,src:n,style:r})});var A=t(10441);function E({cx:e,cy:s,fill:t,r},n){return(0,o.jsx)("circle",{cx:e,cy:s,fill:t,r},n)}const D=c.memo(function({address:e,className:s="",isAlternative:t=!1,size:r,style:n={}}){const i=(0,c.useMemo)(()=>(0,A.H)(e,{isAlternative:t}),[e,t]);return(0,o.jsx)("svg",{className:s,height:r,id:e,name:e,style:n,viewBox:"0 0 64 64",width:r,children:i.map(E)})}),U=x,C=64,S={beachball:x,bizinikiwi:k,empty:z,ethereum:I,jdenticon:k,pezkuwi:D};class q extends c.PureComponent{state={address:"",publicKey:"0x"};static prefix=void 0;static setDefaultPrefix(e){q.prefix=e}static getDerivedStateFromProps({prefix:e=q.prefix,theme:s,value:t},r){if("ethereum"===s)return{address:(0,d.b)(t)?(0,f.w)(t):t||"",publicKey:""};try{const s=(0,d.b)(t)||(0,p.qv)(t)?(0,y.j)(t,e):t||"",n=(0,h.X)((0,w.F)(s,!1,e));return s===r.address?null:{address:s,publicKey:n}}catch{return{address:"",publicKey:"0x"}}}render(){const{address:e}=this.state,s=this.getWrapped(this.state,this.props);return e?(0,o.jsx)(l,{onCopy:this.onCopy,text:e,children:s}):s}getWrapped({address:e,publicKey:s},{Custom:t}){const{className:r="",isAlternative:n,isHighlight:i,size:a=C,style:c={},theme:l=u.W.icon}=this.props,d=e?t||S["default"===l?m.Zs:l]||U:z;return(0,o.jsx)(M,{className:`ui--IdentityIcon  ${r}`,style:c,children:(0,o.jsx)(d,{address:e,className:i?"highlight":"",isAlternative:n,publicKey:s,size:a})},e)}onCopy=()=>{const{onCopy:e}=this.props,{address:s}=this.state;s&&e&&e(s)}}const M=N.I4.div`
  cursor: copy;
  display: inline-block;
  line-height: 0;

  > .container {
    position: relative;

    > div,
    > svg {
      position: relative;
    }

    &.highlight:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px #aaa;
      content: '';
    }
  }
`,T=c.memo(function(e){return(0,o.jsx)(q,{...e})})},86566(e,s,t){t.d(s,{oQ:()=>N,us:()=>j,FK:()=>U,TA:()=>C});var r=t(81284);const n={name:"@pezkuwi/react-qr",path:new URL("file:///home/runner/work/pezkuwi-apps/pezkuwi-apps/node_modules/@pezkuwi/react-qr/packageInfo.js").pathname.substring(0,new URL("file:///home/runner/work/pezkuwi-apps/pezkuwi-apps/node_modules/@pezkuwi/react-qr/packageInfo.js").pathname.lastIndexOf("/")+1),type:"esm",version:"3.17.2"};(0,r.Q)(n,null,[]);var i=t(31085),a=t(14041),o=t(93302),c=t(63513);const l=t(8036);l.stringToBytes=e=>e;var u=t(64767),m=t(83448),d=t(6409),p=t(76733),h=t(76506);const f="secret",y=new Uint8Array([83]),w=new Uint8Array([1]),g=(new Uint8Array([0]),new Uint8Array([1]),new Uint8Array([2]),new Uint8Array([3]),new Uint8Array([0]));function x(e){return new Uint8Array([e>>8,255&e])}function v(e){if(!e)return{height:"auto",width:"100%"};const s=(0,p.K)(e)?e:`${e}px`;return{height:s,width:s}}function k(e){const s=l(0,"M");return s.addData(e,"Byte"),s.make(),s.createDataURL(16,0)}const z=u.I4.div`
  .ui--qr-Display {
    height: 100%;
    width: 100%;

    img,
    svg {
      background: white;
      height: auto !important;
      max-height: 100%;
      max-width: 100%;
      width: auto !important;
    }
  }
`,b=a.memo(function({className:e="",size:s,skipEncoding:t,style:r={},timerDelay:n=2750,value:l}){const[{image:u},d]=(0,a.useState)({frameIdx:0,frames:[],image:null,valueHash:null}),p=(0,a.useRef)({timerDelay:n,timerId:null}),h=(0,a.useMemo)(()=>v(s),[s]);return(0,a.useEffect)(()=>{const e=()=>d(s=>{if(s.frames.length<=1)return s;let t=s.frameIdx+1;t===s.frames.length&&(t=0,p.current.timerDelay=p.current.timerDelay+500);const r=(0,o.b)({},s,{frameIdx:t,image:k(s.frames[t])});return p.current.timerId=setTimeout(e,p.current.timerDelay),r});return p.current.timerId=setTimeout(e,p.current.timerDelay),()=>{p.current.timerId&&clearTimeout(p.current.timerId)}},[]),(0,a.useEffect)(()=>{d(e=>{const s=(0,c.E)(l);if(s===e.valueHash)return e;const r=t?[l]:function(e){const s=[];let t=0;for(;t<e.length;)s.push(e.subarray(t,t+1024)),t+=1024;return s.map((e,t)=>(0,m.z)(g,x(s.length),x(t),e))}(l);return{frameIdx:0,frames:r,image:k(r[0]),valueHash:s}})},[t,l]),u?(0,i.jsx)(z,{className:e,style:h,children:(0,i.jsx)("div",{className:"ui--qr-Display",style:r,children:(0,i.jsx)("img",{src:u})})}):null}),N=a.memo(function({address:e,className:s,cmd:t,genesisHash:r,payload:n,size:o,style:c,timerDelay:l}){const u=(0,a.useMemo)(()=>function(e,s,t,r){return(0,m.z)(y,w,new Uint8Array([s]),(0,h.F)(e),(0,d.e)(t),(0,d.e)(r))}(e,t,n,r),[e,t,n,r]);return u?(0,i.jsx)(b,{className:s,size:o,style:c,timerDelay:l,value:u}):null}),j=a.memo(function({className:e,networkSpecs:s,size:t,style:r}){const n=(0,a.useMemo)(()=>function(e){const s=e.length,t=new Uint8Array(s);for(let r=0;r<s;r++)t[r]=e.charCodeAt(r);return t}(JSON.stringify(s)),[s]);return n?(0,i.jsx)(b,{className:e,size:t,skipEncoding:!0,style:r,value:n}):null});var I=t(32236);const A=e=>{console.error("@pezkuwi/react-qr:Scan",e.message)},E=u.I4.div`
  .ui--qr-Scan {
    display: inline-block;
    height: 100%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 100%;
  }
`,D=a.memo(function({className:e="",delay:s=150,onError:t=A,onScan:r,size:n,style:o={}}){const c=(0,a.useRef)(null),l=(0,a.useRef)(null),u=(0,a.useMemo)(()=>v(n),[n]),m=(0,a.useCallback)(e=>t(e),[t]);return(0,a.useEffect)(()=>{const e=new I.wg,t=setTimeout(async()=>{try{const s=(await I.wg.listVideoInputDevices())[0].deviceId;l.current=await e.decodeFromVideoDevice(s,c.current??void 0,(e,s)=>{e&&r(e.getText()),!s||s instanceof Error||m(new Error(s))})}catch(e){m(e instanceof Error?e:new Error("Unknown error occurred"))}},s);return()=>{clearTimeout(t),l.current&&l.current.stop()}},[r,m,s]),(0,i.jsx)(E,{className:e,style:u,children:(0,i.jsx)("video",{className:"ui--qr-Scan",ref:c,style:o})})}),U=a.memo(function({className:e,isEthereum:s,onError:t,onScan:r,size:n,style:o}){const c=(0,a.useCallback)(e=>{if(e)try{let t,n,i,a;s?([t,n,...a]=e.split(":"),i=null,n=n.substring(0,42)):[t,n,i,...a]=e.split(":");const o=s?"ethereum":"substrate";if(t!==o&&t!==f)throw new Error(`Invalid prefix received, expected '${o} or ${f}' , found '${t}'`);const c=t===o;c&&!s&&(0,h.F)(n),r({content:n,genesisHash:i,isAddress:c,name:a?.length?a.join(":"):void 0})}catch(s){t&&t(s),console.error("@pezkuwi/react-qr:QrScanAddress",s.message,e)}},[r,t,s]);return(0,i.jsx)(D,{className:e,onError:t,onScan:c,size:n,style:o})}),C=a.memo(function({className:e,onError:s,onScan:t,size:r,style:n}){const o=(0,a.useCallback)(e=>e&&t({signature:`0x${e}`}),[t]);return(0,i.jsx)(D,{className:e,onError:s,onScan:o,size:r,style:n})})}}]);