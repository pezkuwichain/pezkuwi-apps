"use strict";(("undefined"!=typeof self?self:this).webpackChunk_pezkuwi_apps=("undefined"!=typeof self?self:this).webpackChunk_pezkuwi_apps||[]).push([[6267],{815(e,t,n){n.d(t,{d:()=>u,z:()=>d});var a=n(99302),s=n(10366),i=n(49723),r=n(11243),o=n(79876),l=n(73108),c=n(82228);function d(){const e=s.A.parse(location.href.split("?")[1]);if(e.types)try{(0,r.vA)(!Array.isArray(e.types),"Expected a single type specification");const t=e.types.split("#"),n=(0,c.u)(decodeURIComponent(t[0])),s=(0,a.a8)(n);return JSON.parse((0,l.F)(s))}catch(e){console.error(e)}return null}function u(e){const t=(0,o.j)(JSON.stringify(e)),n=(0,a.$)(t,{level:9}),s=(0,c.KA)(n);return`${window.location.origin}${window.location.pathname}?rpc=${encodeURIComponent(i.W.apiUrl)}&types=${encodeURIComponent(s)}`}},1010(e,t,n){n.d(t,{A:()=>r});var a=n(31085),s=n(14041),i=n(61020);const r=s.memo(function({children:e,className:t="",label:n}){const{systemName:s}=(0,i.g)();return(0,a.jsxs)("div",{className:t,children:[n||"",s,e]})})},1290(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(61020),r=n(79129),o=n(33168);const l=s.memo(function({children:e,className:t="",label:n}){const{api:s}=(0,i.g)(),l=(0,r.Gc)(s.query.balances?.inactiveIssuance);return(0,a.jsxs)("div",{className:t,children:[n||"",(0,a.jsx)(o.A,{className:l?"":"--tmp",value:l||1,withSi:!0}),e]})})},1445(e,t,n){n.d(t,{Ux:()=>ua,lp:()=>Ae,ov:()=>He,J8:()=>ga,y1:()=>it,y:()=>Aa,Ex:()=>xa.A,x:()=>va,$n:()=>j,Zp:()=>ya,dS:()=>Ia,nZ:()=>Ba.A,rl:()=>Da,t1:()=>Za,Sc:()=>_a,Yt:()=>is,GC:()=>rs.A,i8:()=>Jt,SY:()=>R,ms:()=>Pt.A,KE:()=>cs,tH:()=>kn,L3:()=>us,c6:()=>W,PW:()=>Rs,ZY:()=>$s,f7:()=>Hs,EX:()=>Gs,In:()=>b.A,AX:()=>Ge,_x:()=>Te,Mz:()=>Xs,pd:()=>Vt.Ay,B4:()=>bn,ur:()=>ai,J9:()=>ii,xg:()=>Wn.A,I5:()=>hi,Le:()=>xi,CI:()=>ki,bT:()=>Fi,YI:()=>Ti.A,u1:()=>Ri,qe:()=>Oi,bW:()=>Ki,Rx:()=>tr,JU:()=>G,On:()=>sr,ks:()=>Zt.A,e9:()=>f,o_:()=>xn,WM:()=>Yn,W1:()=>pt,aF:()=>Mn,pq:()=>ir,k7:()=>Xi,JV:()=>or.A,_2:()=>lr,Xh:()=>mr,zD:()=>Tt,ke:()=>Ea,z2:()=>pr,oQ:()=>Xr.oQ,us:()=>Xr.us,FK:()=>Xr.FK,TA:()=>Xr.TA,Bx:()=>N,mi:()=>fr,y$:()=>x,iR:()=>br,eX:()=>ne,UZ:()=>re,jC:()=>Xt,nW:()=>kr,cp:()=>Cr,XI:()=>Ps,tU:()=>Pr,vw:()=>tt.A,YD:()=>Un.A,fs:()=>zr,lM:()=>Jn,OY:()=>$r,m_:()=>q.A,XU:()=>_n,jX:()=>ee,Xb:()=>Gr,g1:()=>Yr,mB:()=>Zr,I4:()=>m.I});var a=n(31085),s=n(14041),i=n(66899),r=n(31706);s.memo(function({children:e,className:t="",defaultValue:n,label:o,value:l}){const c=(0,i.H)(),d=(0,r.q)(l),u=(0,s.useMemo)(()=>function({accountIndex:e}={}){return e?e.toString():null}(d),[d]);return c?.query.indices?(0,a.jsxs)("div",{className:`${t} ui--AccountIndex`,children:[o||"",(0,a.jsx)("div",{className:"account-index",children:u||n||"-"}),e]}):null});var o=n(99655),l=n(7970),c=n(58430),d=n(34402),u=n(61020),m=n(9106),h=n(80087);function p(e,{data:t,hash:n,isText:s,type:i}){return Object.entries(d.$).map(([r,{chains:o,create:l,homepage:c,isActive:d,paths:u,ui:m}])=>{const h=o[e],p=u[i];return d&&h&&p?(0,a.jsx)("a",{href:l(h,p,t,n),rel:"noopener noreferrer",target:"_blank",title:`${r}, ${c}`,children:s?r:(0,a.jsx)("img",{src:m.logo})},r):null}).filter(e=>!!e)}const g=m.I.div`
  text-align: right;

  &.isMain {
    text-align: left;
  }

  &.isSmall {
    font-size: var(--font-size-small);
    line-height: 1.35;
    text-align: center;
  }

  &.isSidebar {
    text-align: center;

    .links {
      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  &:not(.fullColor) {
    .links {
      img {
        filter: grayscale(1) opacity(0.66);

        &:hover {
          filter: grayscale(0) opacity(1);
        }
      }
    }
  }

  .links {
    img {
      border-radius: 50%;
      cursor: pointer;
      height: 1.5rem;
      width: 1.5rem;
    }

    span {
      word-wrap: normal;
      display: inline-block;
    }

    span+span {
      margin-left: 0.3rem;
    }
  }

  &.isLogo {
    line-height: 1;

    .links {
      white-space: nowrap;
    }
  }
`,f=s.memo(function({className:e="",data:t,hash:n,isSidebar:i,isSmall:r,isText:o,type:l,withTitle:c}){const{t:d}=(0,h.B)(),{systemChain:m}=(0,u.g)(),f=(0,s.useMemo)(()=>p(m,{data:t,hash:n,isSidebar:i,isText:o,type:l}),[m,t,n,i,o,l]);return f.length||c?(0,a.jsxs)(g,{className:`${e} ui--LinkExternal ${o?"isText":"isLogo"} ${c?"isMain":""} ${r?"isSmall":""} ${i?"isSidebar":""}`,children:[o&&!r&&(0,a.jsx)("div",{children:d("View this externally")}),c&&(0,a.jsx)("h5",{children:d("external links")}),(0,a.jsx)("div",{className:"links",children:f.length?f.map((e,t)=>(0,a.jsx)("span",{children:e},t)):(0,a.jsx)("div",{children:d("none")})})]}):null});var b=n(25768);const A=m.I.div`
  display: block;
  line-height: 1rem;
  margin: 0 auto;
  text-align: center;

  &.variant-appPadded {
    margin-top: 0.5rem;
  }

  img {
    border: 1px solid transparent;
    border-radius: 10rem;
  }

  &.variant-cover {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;

    img {
      border: 1 px solid white;
      margin: 0 auto;
    }
  }

  .text {
    color: inherit !important;
    margin: 0.25rem auto 1.5rem auto;
    opacity: var(--opacity-light);

    div+div {
      margin-top: 0.25rem;
    }
  }
`,x=s.memo(function({className:e="",label:t,noLabel:n,variant:s="app"}){const{t:i}=(0,h.B)();return(0,a.jsxs)(A,{className:`${e} ui--Spinner variant-${s}`,children:[(0,a.jsx)("img",{className:"push"===s?"":"highlight--bg highlight--border",src:"data:image/png;base64,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"}),!n&&s.startsWith("app")&&(0,a.jsx)("div",{className:"text",children:t||i("Retrieving data")})]})}),v=m.I.div`
  margin: 1rem 0;
  text-align: right;

  & .clear {
    clear: both;
  }

  &.isCentered {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &+.ui--Table {
    margin-top: 1.5rem;
  }

  .ui--Button {
    margin: 0 0.25rem;
  }

  .ui--CopyButton {
    display: inline-block;
  }

  .ui--ToggleGroup, .ui--Dropdown {
    float: left;
  }
`,w=s.memo(function({children:e,className:t="",isCentered:n}){return(0,a.jsxs)(v,{className:`${t} ui--Button-Group ${n?"isCentered":""}`,children:[e,(0,a.jsx)("div",{className:"clear"})]})}),y=m.I.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  line-height: 1;
  margin: 0;
  outline: none;
  position: relative;
  vertical-align: middle;
  text-align: center;

  &:not(.hasLabel) {
    padding: 0.7em;

    .ui--Icon {
      padding: 0.6rem;
      margin: -0.6rem;
    }
  }

  &:not(.isCircular) {
    border-radius: 0.25rem;
  }

  &:focus {
    outline:0;
  }

  &.hasLabel {
    padding: 0.7rem 1.1rem 0.7rem ${1.1-.5}rem;

    .ui--Icon {
      margin-right: 0.425rem !important;
    }
  }

  &.isBasic {
    background: var(--bg-table);
  }

  &.isCircular {
    border-radius: 10rem;
  }

  &.isDisabled, &.isReadOnly {
    background: none;
    box-shadow: none;
    cursor: not-allowed;
  }

  &.isBusy {
    cursor: wait;
  }

  &.isFull {
    display: block;
    width: 100%;
  }

  &.isIcon {
    background: transparent;
  }

  .ui--Button-overlay {
    background: rgba(253, 252, 251, 0.75);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    visibility: hidden;
  }

  .ui--Icon {
    border-radius: 50%;
    box-sizing: content-box;
    height: 1rem;
    margin: -${.5}rem 0;
    padding: ${.5}rem;
    width: 1rem;
  }

  &.isDisabled {
    color: #bcbbba;
  }
`,k=s.memo(function({activeOnEnter:e,children:t,className:n="",dataTestId:i="",icon:r,isBasic:o,isBusy:l,isCircular:c,isDisabled:d,isFull:u,isIcon:m,isSelected:h,isToplevel:p,label:g,onClick:f,isReadOnly:A=!f,onMouseEnter:v,onMouseLeave:w,tabIndex:k,withoutLink:j}){const C=(0,s.useCallback)(()=>{!l&&!d&&f&&Promise.resolve(f()).catch(console.error)},[l,d,f]),N=(0,s.useCallback)(()=>{v&&Promise.resolve(v()).catch(console.error)},[v]),E=(0,s.useCallback)(()=>{w&&Promise.resolve(w()).catch(console.error)},[w]),S=(0,s.useCallback)(e=>{l||d||"Enter"!==e.key||f&&Promise.resolve(f()).catch(console.error)},[l,d,f]);return(0,s.useEffect)(()=>(e&&window.addEventListener("keydown",S,!0),()=>{e&&window.removeEventListener("keydown",S,!0)}),[e,S]),(0,a.jsxs)(y,{className:`${n} ui--Button ${g?"hasLabel":""} ${o?"isBasic":""} ${c?"isCircular":""} ${u?"isFull":""} ${m?"isIcon":""} ${l||d?"isDisabled":""} ${l?"isBusy":""} ${A?"isReadOnly":""}${h?"isSelected":""} ${p?"isToplevel":""} ${j?"withoutLink":""}`,"data-testid":i,onClick:C,onMouseEnter:N,onMouseLeave:E,tabIndex:k,children:[r&&(0,a.jsx)(b.A,{icon:r}),g,t,l&&(0,a.jsx)(x,{className:"ui--Button-spinner",variant:"cover"})]})});k.Group=w;const j=k,C=m.I.div`
  background: var(--bg-page);
  bottom: 0;
  margin-left: -0.125rem;
  max-width: 24rem;
  min-width: 24rem;
  position: fixed;
  padding: 1rem;
  overflow-y: auto;
  top: 0;
  z-index: 999;

  &.leftPosition {
    box-shadow: 6px 0px 20px 0px rgba(0, 0, 0, 0.3);
    left: 0;
  }

  &.rightPosition {
    box-shadow: -6px 0px 20px 0px rgba(0, 0, 0, 0.3);
    right: 0;
  }

  .ui--Sidebar-buttons {
    margin: 0;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
`,N=s.memo(function({buttons:e,children:t,className:n="",dataTestId:s="",onClose:i,position:r,sidebarRef:o}){return(0,a.jsxs)(C,{className:`${n} ui--Sidebar ${r}Position`,"data-testid":s,ref:o,children:[(0,a.jsxs)(j.Group,{className:"ui--Sidebar-buttons",children:[e,(0,a.jsx)(j,{dataTestId:"close-sidebar-button",icon:"times",isBasic:!0,isCircular:!0,onClick:i})]}),t]})});var E=n(71889),S=n(27900),I=n(40941),B=n(69956),F=n(33168),T=n(69832),D=n(94547),L=n(51524),M=n(21327),P=n(848),V=n(41206),z=n(74809);const R=s.memo(function({accountId:e,className:t="",label:n=""}){const[i,r]=(0,s.useState)("unknown");return(0,s.useEffect)(()=>{const t=(0,z.$)(e);"unknown"!==t&&r(t)},[e]),(0,a.jsxs)("div",{className:`${t} ui--CryptoType`,children:[n,i]})});var q=n(16902);let $=0;const U=m.I.div`
  white-space: nowrap;

  .ui--FormatBalance {
    display: inline-block;
  }
`,H=s.memo(function({className:e="",value:t}){const{t:n}=(0,h.B)(),i=(0,I.x)(),[r]=(0,s.useState)(()=>`${Date.now()}-democracy-locks-${++$}`),[{maxBalance:o,sorted:l},c]=(0,s.useState)({maxBalance:L.Yz,sorted:[]});return(0,s.useEffect)(()=>{i&&c(e=>{const s=function(e,t,n=[]){return{maxBalance:(0,V.N)(...n.map(({balance:e})=>e).filter(e=>!!e)),sorted:n.map(e=>[e,e.unlockAt&&e.unlockAt.gt(t)?e.unlockAt.sub(t):L.Yz]).sort((e,t)=>(e[0].referendumId||L.Yz).cmp(t[0].referendumId||L.Yz)).sort((e,t)=>e[1].cmp(t[1])).sort((e,t)=>e[0].isFinished===t[0].isFinished?0:e[0].isFinished?-1:1).reduce((t,[{balance:n,isDelegated:s,isFinished:i=!1,referendumId:r,vote:o},l])=>{const c=l.gt(L.Yz),d=r&&o?(0,a.jsxs)("div",{children:["#",r.toString()," ",(0,P.Q)(n,{forceUnit:"-"})," ",o.conviction?.toString(),s&&"/d"]}):(0,a.jsx)("div",{children:e("Prior locked voting")}),u=t.length?t[t.length-1]:null;return!u||c||i!==u.isFinished?t.push({details:(0,a.jsx)("div",{className:"faded",children:c?(0,a.jsx)(T.A,{label:`${e("{{blocks}} blocks",{replace:{blocks:(0,M.Z)(l)}})}, `,value:l}):e(i?"lock expired":"ongoing referendum")}),headers:[d],isCountdown:c,isFinished:i}):u.headers.push(d),t},[])}}(n,i,t);return e.sorted.length!==s.sorted.length||e.sorted.some((e,t)=>e.headers.length!==s.sorted[t].headers.length)?s:e})},[i,n,t]),l.length?(0,a.jsxs)(U,{className:e,children:[(0,a.jsx)(F.A,{labelPost:(0,a.jsx)(b.A,{icon:"clock",tooltip:r}),value:o}),(0,a.jsx)(q.A,{trigger:r,children:l.map(({details:e,headers:t},n)=>(0,a.jsxs)("div",{className:"row",children:[t.map((e,t)=>(0,a.jsx)("div",{children:e},t)),(0,a.jsx)("div",{className:"faded",children:e})]},n))})]}):null});var Q=n(28138);const O=m.I.div`
  max-width: 60rem;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(.isExpanded) {
    .ui--Expander-content {
      display: none;
    }
  }

  &.isExpanded {
    .ui--Expander-content {
      margin-top: 0.75rem;

      .body.column {
        justify-content: end;
      }
    }
  }

  &.isHeader {
    margin-left: 2rem;
  }

  &.withBreaks .ui--Expander-content {
    white-space: normal;
  }

  .ui--Expander-summary {
    margin: 0;
    min-width: 13.5rem;
    overflow: hidden;

    .ui--Expander-summary-header {
      display: inline-block;
      max-width: calc(100% - 2rem);
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;

      span {
        white-space: normal;
      }

      .ui--Expander-summary-header-sub,
      .ui--Expander-summary-title {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        box-orient: vertical;
        display: -webkit-box;
        line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
      }

      .ui--Expander-summary-header-sub {
        font-size: var(--font-size-small);
        opacity: var(--opacity-light);
      }
    }

    .ui--Icon {
      vertical-align: middle;
    }

    &:not(.isLeft) > .ui--Icon {
      margin-left: 0.75rem;
    }

    &.isLeft > .ui--Icon {
      margin-right: 0.75rem;
    }

    .ui--LabelHelp {
      .ui--Icon {
        margin-left: 0;
        margin-right: 0.5rem;
        vertical-align: text-bottom;
      }
    }
  }

  &.hasContent .ui--Expander-summary {
    cursor: pointer;
  }

  &.isPadded .ui--Expander-summary {
    margin-left: 2.25rem;
  }
`,W=s.memo(function({children:e,className:t="",isHeader:n,isLeft:i,isOpen:r,isPadded:o,onClick:l,renderChildren:c,summary:d,summaryHead:u,summaryMeta:m,summarySub:h,withBreaks:p,withHidden:g}){const[f,A]=(0,Q.e)(r,l),x=(0,s.useMemo)(()=>f&&c&&c(),[f,c]),[v,w]=(0,s.useMemo)(()=>function(e){if(!e?.docs.length)return null;const t=e.docs.map(e=>e.toString().trim()),n=t.findIndex(e=>!e.length),s=(i=(-1===n?t:t.slice(0,n)).join(" ").replace(/# ?<weight>[^<]*<\/weight>/,"").replace(/\\/g,"").replace(/`/g,""),["[","]"].reduce((e,t)=>function(e,t){return e.reduce((e,n)=>n.split(t).reduce((e,t)=>e.concat(t),e),[])}(e,t),[i]));var i;return[s[0].split(/[.(]/)[0],(0,a.jsxs)(a.Fragment,{children:[s.map((e,t)=>t%2?(0,a.jsxs)("em",{children:["[",e,"]"]},t):(0,a.jsx)("span",{children:e},t))," "]})]}(m)||[h,h],[m,h]),y=(0,s.useMemo)(()=>!!c||!!e&&(!Array.isArray(e)||0!==e.length),[e,c]),k=(0,s.useMemo)(()=>(0,a.jsx)(b.A,{color:y?void 0:"transparent",icon:f?"caret-up":"caret-down"}),[y,f]);return(0,a.jsxs)(O,{className:`${t} ui--Expander ${f?"isExpanded":""} ${n?"isHeader":""} ${o?"isPadded":""} ${y?"hasContent":""} ${p?"withBreaks":""}`,children:[(0,a.jsxs)("div",{className:"ui--Expander-summary"+(i?" isLeft":""),onClick:A,children:[i&&k,(0,a.jsxs)("div",{className:"ui--Expander-summary-header",children:[(0,a.jsx)("div",{className:"ui--Expander-summary-title",children:u}),d,w&&(0,a.jsx)("div",{className:"ui--Expander-summary-header-sub",children:f?w:v})]}),!i&&k]}),y&&(f||g)&&(0,a.jsx)("div",{className:"ui--Expander-content",children:e||x})]})}),G=s.memo(function({className:e="",label:t,withEllipsis:n}){return(0,a.jsx)("label",{className:e,children:n?(0,a.jsx)("div",{className:"withEllipsis",children:t}):t})});var Y=n(97186),K=n(79129),J=n(22067),Z=n(51999),X=n(6404),_=n(11243);const ee=s.memo(function({accountId:e,className:t="",extrinsic:n,icon:i,isBasic:r,isBusy:o,isDisabled:l,isIcon:c,isToplevel:d,isUnsigned:u,label:m,onClick:p,onFailed:g,onSendRef:f,onStart:b,onSuccess:A,onUpdate:x,params:v,tooltip:w,tx:y,withSpinner:k,withoutLink:C}){const{t:N}=(0,h.B)(),E=(0,J.T)(),{queueExtrinsic:S}=(0,Z.x)(),[I,B]=(0,s.useState)(!1),[F,T]=(0,s.useState)(!1);(0,s.useEffect)(()=>{F&&b&&b()},[F,b]);const D=(0,s.useCallback)(e=>{E.current&&B(!1),g&&g(e)},[g,B,E]),L=(0,s.useCallback)(e=>{E.current&&B(!1),A&&A(e)},[A,B,E]),M=(0,s.useCallback)(()=>{E.current&&T(!0)},[T,E]),P=(0,s.useCallback)(()=>{let t;n?t=Array.isArray(n)?n:[n]:y&&(t=[y(...(0,X.T)(v)?v():v||[])]),(0,_.vA)(t?.length,"Expected generated extrinsic passed to TxButton"),E.current&&k&&B(!0),t.forEach(t=>{S({accountId:e?.toString(),extrinsic:t,isUnsigned:u,txFailedCb:k?D:g,txStartCb:M,txSuccessCb:k?L:A,txUpdateCb:x})}),p&&p()},[D,M,L,e,u,E,p,g,A,x,v,n,S,y,k]);return f&&(f.current=P),(0,a.jsx)(j,{className:t,icon:i||"check",isBasic:r,isBusy:o,isDisabled:I||l||!u&&!e||!y&&(Array.isArray(n)?0===n.length:!n),isIcon:c,isToplevel:d,label:m||(c?"":N("Submit")),onClick:P,tooltip:w,withoutLink:C})}),te={transform:e=>e.isNone?0:e.unwrap().prior.length+1},ne=s.memo(function({className:e="",isPool:t,stakingInfo:n}){const{api:s}=(0,u.g)(),{allAccounts:i}=(0,Y.o)(),{t:r}=(0,h.B)(),o=(0,K.Gc)(s.query.staking.slashingSpans,[n?.stashId],te);return n?.redeemable?.gtn(0)?(0,a.jsx)("div",{className:e,children:(0,a.jsx)(F.A,{value:n.redeemable,children:i.includes((n.controllerId||"").toString())?(0,a.jsx)(ee,{accountId:n.controllerId,icon:"lock",isIcon:!0,params:t?[n.controllerId,o]:1===s.tx.staking.withdrawUnbonded.meta.args.length?[o]:[],tooltip:r("Withdraw these unbonded funds"),tx:t?s.tx.nominationPools.withdrawUnbonded:s.tx.staking.withdrawUnbonded},"unlock"):(0,a.jsx)("span",{className:"icon-void",children:" "})})}):null});var ae=n(95927),se=n.n(ae);const ie=m.I.div`
  white-space: nowrap;

  .ui--Icon.left {
    margin-left: 0;
    margin-right: 0.25rem;
  }

  .ui--Icon.right {
    margin-left: 0.25rem;
    margin-right: 0;
  }

  .ui--FormatBalance {
    display: inline-block;
  }
`,re=s.memo(function({className:e="",iconPosition:t="left",stakingInfo:n}){const{api:i}=(0,u.g)(),{isStakingAsync:r,rcApi:o}=(0,B.Y)(),l=(0,s.useMemo)(()=>r?o:i,[i,r,o]),c=(0,K.Gc)(l?.derive.session.progress),{t:d}=(0,h.B)(),[m,p,g]=(0,s.useMemo)(()=>function(e,t){if(!e?.unlocking||!t)return[[],L.Yz,!1];const n=t.eraProgress.gt(L.Yz)&&t.eraProgress.gt(t.eraLength),a=e.unlocking.filter(({remainingEras:e,value:t})=>t.gt(L.Yz)&&e.gt(L.Yz)).map(e=>[e,e.remainingEras,e.remainingEras.sub(L.Uu).imul(t.eraLength).iadd(t.eraLength).isub(n?t.eraProgress.mod(t.eraLength):t.eraProgress)]),s=a.reduce((e,[{value:t}])=>e.iadd(t),new(se())(0));return[a,s,n]}(n,c),[c,n]);if(!n||!m.length)return null;const f=`${n.accountId.toString()}-unlocking-trigger`;return(0,a.jsxs)(ie,{className:e,children:["left"===t&&(0,a.jsx)(b.A,{className:"left",icon:"clock",tooltip:f}),(0,a.jsx)(F.A,{value:p}),(0,a.jsx)(q.A,{trigger:f,children:m.map(([{value:e},t,n],s)=>(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{children:d("Unbonding {{value}}",{replace:{value:(0,P.Q)(e,{forceUnit:"-"})}})}),(0,a.jsx)("div",{className:"faded",children:l?.consts.babe?.epochDuration?(0,a.jsx)(T.A,{api:l,label:`${d("{{blocks}} blocks",{replace:{blocks:(0,M.Z)(n)}})}, `,value:n}):d("{{eras}} eras remaining",{replace:{eras:(0,M.Z)(t)}})}),g&&(0,a.jsx)("div",{className:"faded",children:d("Era is overdue for completion due to current network operating conditions")})]},s))}),"right"===t&&(0,a.jsx)(b.A,{className:"right",icon:"clock",tooltip:f})]})}),oe={available:!0,bonded:!0,locked:!0,redeemable:!0,reserved:!0,total:!0,unlocking:!0,vested:!0},le={crypto:!0,nonce:!0},ce={unstakeThreshold:!0,validatorPayment:!0};function de(){return(0,a.jsx)("span",{className:"icon-void",children:" "})}function ue(e,t){const n=t.toHuman();try{return e[n]||n}catch{return n}}function me({stakingInfo:e,withBalance:t=!0,withValidatorPrefs:n=!1}){if(e)return!0;if(!0===t||n)return!1;if((0,D.G)(t)){if(t.unlocking||t.redeemable)return!1;if(t.bonded)return Array.isArray(t.bonded)}return!0}function he({address:e,balancesAll:t,withExtended:n},s){const i=!0===n?le:n||void 0;return i?(0,a.jsxs)("div",{className:"column",children:[t&&i.nonce&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{label:s("transactions")}),(0,a.jsx)("div",{className:"result",children:(0,M.Z)(t.accountNonce)})]}),i.crypto&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{label:s("type")}),(0,a.jsx)(R,{accountId:e,className:"result"})]})]}):null}function pe({stakingInfo:e,withValidatorPrefs:t=!1},n){const s=!0===t?ce:t;return s&&e?.validatorPrefs?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{}),s.unstakeThreshold&&e.validatorPrefs.unstakeThreshold&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{label:n("unstake threshold")}),(0,a.jsx)("div",{className:"result",children:e.validatorPrefs.unstakeThreshold.toString()})]}),s.validatorPayment&&(e.validatorPrefs.commission||e.validatorPrefs.validatorPayment)&&(e.validatorPrefs.validatorPayment?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{label:n("commission")}),(0,a.jsx)(F.A,{className:"result",value:e.validatorPrefs.validatorPayment})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{label:n("commission")}),(0,a.jsxs)("span",{children:[(e.validatorPrefs.commission.unwrap().toNumber()/1e7).toFixed(2),"%"]})]}))]}):null}function ge(e,t,n,{address:i,apiOverride:r,balanceDisplay:o,balancesAll:l,bestNumber:c,convictionLocks:d,democracyLocks:u,isAllLocked:m,otherBonded:h,ownBonded:p,stakingInfo:g,vestingBestNumber:f,vestingInfo:A,votingOf:x,withBalanceToggle:v,withLabel:w}){const y=[],k=l;!v&&o.total&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:w?n("total"):""}),(0,a.jsx)(F.A,{className:"result "+(l?"":"--tmp"),formatIndex:e,labelPost:(0,a.jsx)(de,{}),value:l?l.freeBalance.add(l.reservedBalance):1})]},0)),l&&o.available&&(k.transferable||k.availableBalance)&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("transferable")}),(0,a.jsx)(F.A,{className:"result",formatIndex:e,labelPost:(0,a.jsx)(de,{}),value:k.transferable||k.availableBalance})]},1));const j=A||k,C=f||c,N=f&&j?.isVesting&&j.vesting.length>0?(()=>{const e=function(e,t){let n=L.Yz,a=L.Yz;for(const s of e){const{endBlock:e,locked:i,perBlock:r,startingBlock:o}=s;if(t.lt(o)){a=a.add(i);continue}if(t.gte(e)){n=n.add(i);continue}const l=t.sub(o),c=(0,V.J)(l.mul(r),i),d=i.sub(c);n=n.add(c),a=a.add(d)}return{vestedBalance:n,vestedClaimable:n,vestingLocked:a}}(j.vesting,f),t=e.vestedBalance.add(j.vestedClaimable);return{...j,vestedBalance:e.vestedBalance,vestedClaimable:t,vestingLocked:e.vestingLocked}})():j;if(C&&o.vested&&N?.isVesting){const t=N.vesting.filter(({endBlock:e})=>C.lt(e));y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("vested")}),(0,a.jsx)(F.A,{className:"result",formatIndex:e,labelPost:(0,a.jsx)(b.A,{icon:"info-circle",tooltip:`${i}-vested-trigger`}),value:N.vestedBalance,children:(0,a.jsxs)(be,{trigger:`${i}-vested-trigger`,children:[(0,a.jsxs)("div",{className:"tooltip-header",children:[(0,P.Q)(N.vestedClaimable.abs(),{forceUnit:"-"}),(0,a.jsx)("div",{className:"faded",children:n("available to be unlocked")})]}),t.map(({endBlock:e,locked:t,perBlock:s,startingBlock:i,vested:o},l)=>{let c=o;return f&&(C.lt(i)?c=L.Yz:C.gte(e)?c=t:(c=C.sub(i).mul(s),c.gt(t)&&(c=t))),(0,a.jsxs)("div",{className:"inner",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:[(0,P.Q)(t,{forceUnit:"-"})," ",n("fully vested in")]}),(0,a.jsx)(T.A,{api:r,value:e.sub(C)})]}),(0,a.jsxs)("div",{className:"middle",children:["(Block ",(0,M.Z)(e)," @ ",(0,P.Q)(s),"/block)"]}),(0,a.jsxs)("div",{children:[(0,P.Q)(c,{forceUnit:"-"}),(0,a.jsx)("div",{children:n("already vested")})]})]},`item:${l}`)})]})})]},2))}const E=(k?.namedReserves||[]).reduce((e,t)=>e.concat(...t),[]),S=!!E&&0!==E.length;if(o.locked&&l&&(m||k.lockedBalance?.gtn(0))&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("locked")}),(0,a.jsx)(F.A,{className:"result",formatIndex:e,labelPost:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.A,{icon:"info-circle",tooltip:`${i}-locks-trigger`}),(0,a.jsx)(q.A,{trigger:`${i}-locks-trigger`,children:k.lockedBreakdown.map(({amount:e,id:s,reasons:i},r)=>(0,a.jsxs)("div",{className:"row",children:[e?.isMax()?n("everything"):(0,P.Q)(e,{forceUnit:"-"}),s&&(0,a.jsx)("div",{className:"faded",children:ue(t,s)}),(0,a.jsx)("div",{className:"faded",children:i.toString()})]},r))})]}),value:m?"all":k.lockedBalance})]},3)),o.reserved&&l?.reservedBalance?.gtn(0)&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("reserved")}),(0,a.jsx)(F.A,{className:"result",formatIndex:e,labelPost:S?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.A,{icon:"info-circle",tooltip:`${i}-named-reserves-trigger`}),(0,a.jsx)(q.A,{trigger:`${i}-named-reserves-trigger`,children:E.map(({amount:e,id:n},s)=>(0,a.jsxs)("div",{children:[(0,P.Q)(e,{forceUnit:"-"}),n&&(0,a.jsx)("div",{className:"faded",children:ue(t,n)})]},s))})]}):(0,a.jsx)(de,{}),value:l.reservedBalance})]},4)),o.bonded&&(p.gtn(0)||0!==h.length)&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("bonded")}),(0,a.jsx)(F.A,{className:"result",formatIndex:e,labelPost:(0,a.jsx)(de,{}),value:p,children:0!==h.length&&(0,a.jsxs)(a.Fragment,{children:[" (+",h.map((t,n)=>(0,a.jsx)(F.A,{formatIndex:e,labelPost:(0,a.jsx)(de,{}),value:t},n)),")"]})})]},5)),o.redeemable&&g?.redeemable?.gtn(0)&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("redeemable")}),(0,a.jsx)(ne,{className:"result",stakingInfo:g})]},6)),o.unlocking){if(g?.unlocking&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("unbonding")}),(0,a.jsx)("div",{className:"result",children:(0,a.jsx)(re,{iconPosition:"right",stakingInfo:g})})]},7)),u&&0!==u.length)y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("democracy")}),(0,a.jsx)("div",{className:"result",children:(0,a.jsx)(H,{value:u})})]},8));else if(c&&x&&x.isDirect){const{prior:[e,t]}=x.asDirect;t.gt(L.Yz)&&e.gt(L.Yz)&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("democracy")}),(0,a.jsx)("div",{className:"result",children:(0,a.jsx)(H,{value:[{balance:t,isFinished:c.gt(e),unlockAt:e}]})})]},8))}if(c&&d?.length){const e=d.reduce((e,{total:t})=>(0,V.N)(e,t),L.Yz);y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("referenda")}),(0,a.jsx)(F.A,{className:"result",labelPost:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.A,{icon:"clock",tooltip:`${i}-conviction-locks-trigger`}),(0,a.jsx)(q.A,{trigger:`${i}-conviction-locks-trigger`,children:d.map(({endBlock:e,locked:t,refId:s,total:i},r)=>(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"nowrap",children:["#",s.toString()," ",(0,P.Q)(i,{forceUnit:"-"})," ",t]}),(0,a.jsx)("div",{className:"faded nowrap",children:e.eq(L.Vk)?n("ongoing referendum"):c.gte(e)?n("lock expired"):(0,a.jsxs)(a.Fragment,{children:[(0,M.Z)(e.sub(c))," ",n("blocks"),", ",(0,a.jsx)(T.A,{isInline:!0,value:e.sub(c)})]})})]},r))})]}),value:e})]},9))}}return l&&l.accountNonce&&o.nonce&&y.push((0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:n("transactions")}),(0,a.jsxs)("div",{className:"result",children:[(0,M.Z)(l.accountNonce),(0,a.jsx)(de,{})]})]},10)),v?(0,a.jsx)(s.Fragment,{children:(0,a.jsx)(W,{className:l?"":"isBlurred",summary:(0,a.jsx)(F.A,{formatIndex:e,value:l?.freeBalance.add(l.reservedBalance)}),children:0!==y.length&&(0,a.jsx)("div",{className:"body column",children:y})})},e):(0,a.jsx)(s.Fragment,{children:y},e)}function fe(e,t,n,a,s){const{address:i,balancesAll:r,convictionLocks:o,democracyLocks:l,stakingInfo:c,vestingBestNumber:d,vestingInfo:u,votingOf:m,withBalance:h=!0,withBalanceToggle:p=!1,withLabel:g=!1}=e,f=!0===h?oe:h||!1;if(!f)return[null];const[b,A]=function(e,t){let n=[],a=L.Yz;return Array.isArray(t)?(n=t.filter((e,t)=>0!==t).filter(e=>e.gt(L.Yz)),a=t[0]):e?.stakingLedger?.active&&e.accountId.eq(e.stashId)&&(a=e.stakingLedger.active.unwrap()),[a,n]}(c,f.bonded),x={address:i,apiOverride:a,balanceDisplay:f,bestNumber:n,convictionLocks:o,democracyLocks:l,isAllLocked:!!r&&r.lockedBreakdown.some(({amount:e})=>e?.isMax()),otherBonded:A,ownBonded:b,vestingBestNumber:d,vestingInfo:u,votingOf:m,withBalanceToggle:p,withLabel:g},v=[ge(0,t,s,{...x,balancesAll:r,stakingInfo:c})];return p&&r?.additional.length&&r.additional.forEach((e,n)=>{v.push(ge(n+1,t,s,{...x,balancesAll:e}))}),v}const be=(0,m.I)(q.A)`
  min-width: 26rem;
  text-align: left;
  word-wrap: break-word;

  .ui--BlockToTime {
    margin-top: -1rem;
  }

  .tooltip-header {
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid #eeeeee50;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-block: 1.5rem;
  }

  .middle {
    margin-top: -1rem;
  }

  .inner > div {
    display: flex;
    align-items: center;
    gap: 2px;
    word-wrap: break-word;
  }
`,Ae=(0,S.C9)((0,m.I)(function(e){const{t}=(0,h.B)(),n=(0,I.m)(),{isStakingAsync:i,rcApi:r}=(0,B.Y)(),{children:o,className:l="",extraInfo:c,withBalanceToggle:d,withHexSessionId:u}=e,m=(0,s.useRef)({democrac:t("via Democracy/Vote"),phrelect:t("via Council/Vote"),pyconvot:t("via Referenda/Vote"),"staking ":t("via Staking/Bond"),"vesting ":t("via Vesting")});return(0,a.jsxs)("div",{className:`${l} ui--AddressInfo ${d?"ui--AddressInfo-expander":""}`,children:[(0,a.jsxs)("div",{className:"column"+(d?" column--expander":""),children:[fe(e,m.current,n,i?r:void 0,t),u?.[0]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{label:t("session keys")}),(0,a.jsx)("div",{className:"result",children:u[0]})]}),u&&u[0]!==u[1]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G,{label:t("session next")}),(0,a.jsx)("div",{className:"result",children:u[1]})]}),pe(e,t),c&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{}),c.map(([e,t],n)=>(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(G,{label:e}),(0,a.jsx)("div",{className:"result",children:t})]},`label:${n}`))]})]}),he(e,t),o&&(0,a.jsx)("div",{className:"column",children:o})]})})`
    align-items: flex-start;
    display: flex;
    flex: 1;
    white-space: nowrap;

    &:not(.ui--AddressInfo-expander) {
      justify-content: flex-end;
    }

    .nowrap {
      white-space: nowrap;

      .ui--FormatBalance {
        display: inline-block;
      }
    }

    & + .ui--Button,
    & + .ui--ButtonGroup {
      margin-right: 0.25rem;
      margin-top: 0.5rem;
    }

    .column {
      max-width: 260px;
      &.column--expander {
        width: 17.5rem;

        .ui--Expander {
          width: 100%;

          .summary {
            display: inline-block;
            text-align: right;
            min-width: 12rem;
          }
        }
      }

      &:not(.column--expander) {
        flex: 1;
        display: grid;
        column-gap: 0.75rem;
        row-gap: 0.5rem;
        opacity: 1;

        div.inner {
          margin-top: 0.25rem;

          &:first-child {
            margin-top: 0;
          }
        }

        label {
          grid-column: 1;
          padding-right: 0.5rem;
          text-align: right;
          vertical-align: middle;
          margin-bottom: 0.25rem;

          .help.circle.icon {
            display: none;
          }
        }

        .result {
          grid-column: 2;
          text-align: right;

          .ui--Icon,
          .icon-void {
            margin-left: 0.25rem;
            margin-right: 0;
            padding-right: 0 !important;
          }

          .icon-void {
            float: right;
            width: 1em;
          }
        }
      }
    }
  `,(0,S.up)(["derive.balances.all",{paramName:"address",propName:"balancesAll",skipIf:function({withBalance:e=!0,withExtended:t=!1}){if(!0===e||!0===t)return!1;if((0,D.G)(e)){if(e.available||e.locked||e.reserved||e.total||e.vested)return!1}else if((0,D.G)(t)&&t.nonce)return!1;return!0}}],["derive.staking.account",{paramName:"address",propName:"stakingInfo",skipIf:me}],["derive.democracy.locks",{paramName:"address",propName:"democracyLocks",skipIf:me}],["query.democracy.votingOf",{paramName:"address",propName:"votingOf",skipIf:me}])),xe={available:!0,bonded:!0,free:!0,locked:!0,reserved:!0,total:!0},ve=m.I.section`
  .balanceExpander {
    justify-content: flex-start;

    .column {
      width: auto;
      max-width: 18.57rem;

      label {
        text-align: left;
        color: inherit;
      }

      .ui--Expander-content .ui--FormatBalance-value {
        font-size: var(--font-size-small);
      }
    }
  }
`,we=s.memo(function({address:e,className:t}){const{t:n}=(0,h.B)();return(0,a.jsxs)(ve,{className:t,children:[(0,a.jsx)("div",{className:"ui--AddressMenu-sectionHeader",children:n("balance")}),(0,a.jsx)(Ae,{address:e,className:"balanceExpander",withBalance:xe,withLabel:!0},e)]})});var ye=n(55155);const ke=(0,ye.F)("useRegistrars",function(e){const{apiIdentity:t}=(0,u.g)(),{allAccounts:n,hasAccounts:a}=(0,Y.o)(),i=(0,K.Gc)(!e&&t.query.identity?.registrars);return(0,s.useMemo)(()=>{const e=(i||[]).map((e,t)=>({address:e.isSome?e.unwrap().account.toString():null,index:t})).filter(e=>!!e.address);return{isRegistrar:a&&e.some(({address:e})=>n.includes(e)),registrars:e}},[n,a,i])});var je=n(58792),Ce=n(86832),Ne=n(54143),Ee=n(90896),Se=n(49718),Ie=n(49723),Be=n(41797);function Fe(e){return!(!e||!e.toHuman)}const Te=s.memo(function({className:e="",forceIconType:t,prefix:n,size:i=24,theme:r,value:o}){const{apiEndpoint:l,isEthereum:c,specName:d,systemName:m}=(0,u.g)(),{t:p}=(0,h.B)(),{queueAction:g}=(0,Z.x)(),f=r||function(e,t,n){return"default"===Ie.W.icon&&(e?.ui?.identityIcon||(0,Ee.d)(t,n))||Ie.W.icon}(l,m,d),b="robohash"===f?Be.A:void 0,A=(0,s.useCallback)(e=>g({account:e,action:p("clipboard"),message:p("address copied"),status:"queued"}),[g,p]);return(0,a.jsx)(Se.Ay,{Custom:b,className:`ui--Identicon-React-Base ${e}`,onCopy:A,prefix:n,size:i,theme:t||(c?"ethereum":f),value:Fe(o)?o.toString():o})});var De=n(26577);function Le({className:e="",label:t,value:n}){let s;if(Array.isArray(n)){const e=n.filter((e,t)=>0!==t),t=e.reduce((e,t)=>e.add(t),L.Yz).gtn(0);t&&(s=e.map((e,t)=>(0,a.jsx)(F.A,{value:e},t)))}return(0,a.jsx)(F.A,{className:`${e} ui--Balance`,label:t,value:Array.isArray(n)?n[0]:n,children:s&&(0,a.jsxs)("span",{children:[" (+",s,")"]})})}const Me=s.memo(function(e){const{balance:t,className:n="",label:s,params:i}=e;return i?t?(0,a.jsx)(a.Fragment,{children:Le({className:n,label:s,value:t})}):(0,a.jsx)(De.A,{className:`${n} ui--Balance`,label:s,params:i}):null}),Pe={transform:e=>e.unwrapOr(null)},Ve={transform:e=>e.unwrapOr(null)},ze=s.memo(function({children:e,className:t="",label:n,params:s}){const{api:i}=(0,u.g)(),r=(0,K.Gc)(i.query.staking?.bonded,[s],Pe),o=(0,K.Gc)(r&&i.query.staking?.ledger,[r],Ve);return(0,a.jsx)(F.A,{className:t,label:n,value:o?.active,children:e})}),Re=s.memo(function(e){const{bonded:t,className:n="",label:s,params:i}=e;return i?t?(0,a.jsx)(a.Fragment,{children:Le({className:n,label:s,value:t})}):(0,a.jsx)(ze,{className:`${n} ui--Bonded`,label:s,params:i}):null}),qe=s.memo(function({children:e,className:t="",label:n,params:s}){const{api:i}=(0,u.g)(),r=(0,K.Gc)(i.derive.council.votesOf,[s]);return r?.stake.gtn(0)?(0,a.jsx)(F.A,{className:t,label:n,value:r?.stake,children:e}):null}),$e=s.memo(function({className:e="",label:t,params:n}){return n?(0,a.jsx)(qe,{className:`${e} ui--LockedVote`,label:t,params:n}):null}),Ue=m.I.div`
  overflow-x: hidden;
  padding: 0 0.25rem 0 1rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.padded {
    padding: 0 1rem 0 0;
  }

  &.summary {
    position: relative;
    top: -0.2rem;
  }

  .ui--AddressMini-info {
  }

  .ui--AddressMini-address {
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;

    > div {
      overflow: hidden;
      text-overflow: ellipsis;

      &.shortAddress {
        min-width: var(--width-shortaddr);
        max-width: var(--width-shortaddr);
        opacity: var(--opacity-light);
      }
    }
  }

  &.withShrink {
    .ui--AddressMini-address {
      min-width: 3rem;
    }
  }

  .ui--AddressMini-label {
    margin: 0 0 -0.5rem 2.25rem;
  }

  .ui--AddressMini-balances {
    display: grid;

    .ui--Balance,
    .ui--Bonded,
    .ui--LockedVote {
      font-size: var(--font-size-tiny);
      margin-left: 2.25rem;
      margin-top: -0.5rem;
      text-align: left;
    }
  }

  .ui--AddressMini-icon {
    .ui--AddressMini-icon-info {
      position: absolute;
      right: -0.5rem;
      top: -0.5rem;
      z-index: 1;
    }

    .ui--IdentityIcon {
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  }

  .ui--AddressMini-icon,
  .ui--AddressMini-info {
    position: relative;
    vertical-align: middle;
  }

  .ui--AddressMini-summary {
    font-size: var(--font-size-small);
    line-height: 1.2;
    margin-left: 2.25rem;
    margin-top: -0.2rem;
    text-align: left;
  }
`,He=s.memo(function({balance:e,bonded:t,children:n,className:s="",iconInfo:i,isHighlight:r,isPadded:l=!0,label:c,labelBalance:d,nameExtra:u,onNameClick:m,summary:h,value:p,withAddress:g=!0,withBalance:f=!1,withBonded:b=!1,withLockedVote:A=!1,withName:x=!0,withShrink:v=!1,withSidebar:w=!0}){return p?(0,a.jsxs)(Ue,{className:`${s} ui--AddressMini ${r?"isHighlight":""} ${l?"padded":""} ${v?"withShrink":""}`,children:[c&&(0,a.jsx)("label",{className:"ui--AddressMini-label",children:c}),(0,a.jsxs)("span",{className:"ui--AddressMini-icon",children:[(0,a.jsx)(Te,{value:p}),i&&(0,a.jsx)("div",{className:"ui--AddressMini-icon-info",children:i})]}),(0,a.jsxs)("span",{className:"ui--AddressMini-info",children:[g&&(0,a.jsx)("span",{className:"ui--AddressMini-address",onClick:m,children:x?(0,a.jsx)(o.Ay,{value:p,withSidebar:w,children:u}):(0,a.jsx)("span",{className:"shortAddress",children:p.toString()})}),n]}),(0,a.jsxs)("div",{className:"ui--AddressMini-balances",children:[f&&(0,a.jsx)(Me,{balance:e,label:d,params:p}),b&&(0,a.jsx)(Re,{bonded:t,label:"",params:p}),A&&(0,a.jsx)($e,{params:p}),h&&(0,a.jsx)("div",{className:"ui--AddressMini-summary",children:h})]})]}):null}),Qe=m.I.div`
  & {
    display: flex;
    align-items: center;

    .ui--AvatarItem-icon {
      margin-right: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .ui--AvatarItem-details {
    .ui--AvatarItem-title {
      font-weight: 600;
      font-size: var(--font-size-base);
    }

    .ui--AvatarItem-subtitle {
      font-weight: var(--font-weight-normal);
      font-size: var(--font-size-base);
    }
  }

  &.big {
    .ui--AvatarItem-icon {
      width: 3.4rem;
      height: 3.4rem;
      margin-right: 0.6rem;

      > .ui--Icon {
        font-size: 1.6rem;
        line-height: 3.4rem;
      }
    }

    .ui--AvatarItem-details {
      .ui--AvatarItem-name {
        font-size: 1.4rem;
        line-height: 1.4rem;
      }
    }
  }
`,Oe=s.memo(function({children:e,className:t="",icon:n,isBig:s,subtitle:i,title:r}){return(0,a.jsxs)(Qe,{className:["ui--AvatarItem",t,s&&"big"].join(" "),children:[(0,a.jsx)("div",{className:"ui--AvatarItem-icon",children:n}),(0,a.jsxs)("div",{className:"ui--AvatarItem-details",children:[(0,a.jsx)("div",{className:"ui--AvatarItem-title",children:r}),(0,a.jsx)("div",{className:"ui--AvatarItem-subtitle",children:i})]}),e]})}),We=m.I.a`
  .ui--Icon {
    margin-right: 0.5em;
  }
`,Ge=s.memo(function({className:e="",href:t,icon:n,label:s,onClick:i,rel:r,target:o}){return(0,a.jsxs)(We,{className:e,href:t,onClick:i,rel:r,target:o,children:[n&&(0,a.jsx)(b.A,{icon:n}),s]})});function Ye(e){return e.map(e=>e[0])}const Ke=e=>e.filter(([,e])=>!e.isFeePaid),Je=e=>e.filter(([,e])=>e.isKnownGood),Ze=e=>e.filter(([,e])=>e.isReasonable),Xe=e=>e.filter(([,e])=>e.isErroneous),_e=e=>e.filter(([,e])=>e.isLowQuality);const et=(0,ye.F)("useJudgements",function(e){const{identity:t}=(0,c.T)(e),{registrars:n}=ke(),a=(0,s.useMemo)(()=>function(e){if(!e)return[];const t=function(e){const t=Ke(e),n=Je(t),a=Ze(t);return{Erroneous:Xe(t),"Known good":n,"Low quality":_e(t),Reasonable:a}}(e.judgements),n=[];for(const e in t){const a=e;0!==t[a].length&&n.push({judgementName:a,registrarsIndexes:Ye(t[a])})}return n}(t),[t]);return(0,s.useMemo)(()=>function(e,t){return e.map(({judgementName:e,registrarsIndexes:n})=>({judgementName:e,registrars:n.map(e=>(e=>t.find(t=>t.index===e))(e.toNumber()))}))}(a,n),[n,a])});var tt=n(12387);const nt=m.I.div`
  align-items: center;
  color: #8B8B8B;
  var(--font-size-small);
  display: flex;

  & .parent-icon {
    font-size: var(--font-size-percent-small);
    margin-right: 0.3rem;
    margin-left: 0.15rem;
  }
`,at=s.memo(function({address:e,className:t}){return(0,a.jsxs)(nt,{className:t,"data-testid":"parent",children:[(0,a.jsx)(b.A,{className:"parent-icon",icon:"code-branch"}),(0,a.jsx)(o.Ay,{value:e,withSidebar:!0})]})}),st=m.I.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.withPadding {
    padding: 0.75rem 0;
  }

  .ui--AddressSmall-icon {
    .ui--IdentityIcon {
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  }

  .ui--AddressSmall-info {
    position: relative;
    vertical-align: middle;

    .parentName, .shortAddress {
      font-size: var(--font-size-tiny);
    }

    .parentName {
      left: 0;
      position: absolute;
      top: -0.80rem;
    }

    .shortAddress {
      bottom: -0.95rem;
      color: #8B8B8B;
      display: inline-block;
      left: 0;
      min-width: var(--width-shortaddr);
      max-width: var(--width-shortaddr);
      overflow: hidden;
      position: absolute;
      text-overflow: ellipsis;
    }
  }

  .ui--AccountName {
    overflow: hidden;
    vertical-align: middle;
    white-space: nowrap;

    &.withSidebar {
      cursor: help;
    }
  }
`,it=s.memo(function({children:e,className:t="",defaultName:n,onClickName:s,overrideName:i,parentAddress:r,toggle:l,value:c,withShortAddress:d=!1,withSidebar:u=!0}){return(0,a.jsxs)(st,{className:`${t} ui--AddressSmall ${r||d?"withPadding":""}`,children:[(0,a.jsx)("span",{className:"ui--AddressSmall-icon",children:(0,a.jsx)(Te,{value:c})}),(0,a.jsxs)("span",{className:"ui--AddressSmall-info",children:[r&&(0,a.jsx)("div",{className:"parentName",children:(0,a.jsx)(at,{address:r})}),(0,a.jsx)(o.Ay,{className:"accountName "+(u?"withSidebar":""),defaultName:n,onClick:s,override:i,toggle:l,value:c,withSidebar:u,children:e}),c&&d&&(0,a.jsx)("div",{className:"shortAddress","data-testid":"short-address",children:c.toString()})]})]})}),rt=m.I.div`
  margin: 0.25rem 0 1rem;
  border-top: 1px solid var(--border-table);

  &:first-child, &:last-child {
    display: none
  }
`,ot=s.memo(function({className:e=""}){return(0,a.jsx)(rt,{className:`${e} ui--Menu__Divider`})}),lt=m.I.div`
  color: var(--color-label);
  font-size: var(--font-size-tiny);
  line-height: 0.857rem;
  margin-bottom: 0.3rem;
`,ct=s.memo(function({children:e,className:t}){return(0,a.jsx)(lt,{className:t,children:e})}),dt=m.I.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: var(--font-size-small);
  line-height: 0.93rem;
  padding: 0.5rem 1rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &.hasIcon {
    padding-left: 2.6rem;
  }

  .ui--Icon {
    position: absolute;
    left: 1rem;
  }

  &.isDisabled {
    cursor: default;
    opacity: 0.5;
  }
`,ut=s.memo(function({children:e,className:t="",icon:n,isDisabled:i,label:r,onClick:o}){const l=(0,s.useCallback)(()=>{!i&&o&&Promise.resolve(o()).catch(console.error)},[i,o]);return(0,a.jsxs)(dt,{className:`${t} ui--Menu__Item ${n?"hasIcon":""} ${i?"isDisabled":""}`,onClick:l,children:[n&&(0,a.jsx)(b.A,{color:"darkGray",icon:n}),r,e]})}),mt=m.I.div`
  display: flex;
  flex-direction: column;
  min-width: 14.286rem;
  margin: 1rem 0;

  & > *:not(.ui--Menu__Item):not(.ui--Menu__Divider) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`,ht=s.memo(function({children:e,className:t=""}){return(0,a.jsx)(mt,{className:`${t} ui--Menu`,children:e})});ht.Divider=ot,ht.Item=ut,ht.Header=ct;const pt=ht;var gt=n(85121);const ft=(0,ye.F)("useOutsideClick",function(e,t){const n=(0,s.useCallback)(n=>{e.length&&!function(e,t){return e.some(e=>e.current&&e.current.contains(t.target))}(e,n)&&t()},[e,t]);(0,s.useEffect)(()=>(document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}),[n,t])});var bt=n(43144);const At=14*.8;function xt(e,t){return"left"===t?e-At:"right"===t?At:e/2}function vt(e,t,n,a,s){const{height:i,y:r}=t;return"bottom"===e?a.height-i-r-14>n:s<56?r-(56-s)>n:r>n}function wt(e,t,n){return"bottom"===t?e/2:-1*(e/2+n+At)}function yt(e,t,n,a){return"bottom"===t?e+n.height-a-14:e<56?56:e}const kt=(0,ye.F)("useScroll",function(){const[e,t]=(0,s.useState)(window.scrollY),n=(0,s.useCallback)(()=>t(window.scrollY),[]);return(0,s.useEffect)(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[n]),e});var jt=n(56482);const Ct=(0,ye.F)("useWindowSize",function(){return(0,s.useContext)(jt.D)}),Nt=(0,ye.F)("useElementPosition",function(e){const[t,n]=(0,s.useState)(),a=(0,J.T)(),i=Ct(),r=kt();return(0,s.useEffect)(()=>{if(a.current&&e?.current){const{height:t,width:a,x:s,y:i}=e.current.getBoundingClientRect();n({height:t,width:a,x:s,y:i})}},[a,e,r,i]),t}),Et={x:0,y:0},St=(0,ye.F)("usePopupWindow",function(e,t,n){const[a,i]=(0,s.useState)(Et),[r,o]=(0,s.useState)("top"),l=Nt(e),c=Nt(t),d=kt(),u=Ct();return(0,s.useEffect)(()=>{u&&c&&o(c.y>u.height/2?"top":"bottom")},[c,u]),(0,s.useEffect)(()=>{l&&c&&i(function(e,t,n,a,s,i){const r=e.x+e.width/2,o=e.y+s+e.height/2;return{x:r-xt(a.width,t),y:vt(n,e,a.height,i,s)?o+wt(e.height,n,a.height):yt(s,n,i,a.height)}}(c,n,r,l,d,u))},[n,d,c,r,l,u]),(0,s.useMemo)(()=>({pointerStyle:r,renderCoords:a}),[a,r])}),It=m.I.div`
  background-color: var(--bg-menu);
  border: 1px solid #d4d4d5;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%);
  color: var(--color-text);
  left: 0;
  margin: 0.7rem 0;
  padding: 0;
  position: absolute;
  top: 0;
  z-index: -1;

  &.leftPosition {
    &::before {
      left: unset;
      right: 0.75rem;
    }
  }

  &.rightPosition {
    &::before {
      left: 0.75rem;
      right: unset;
    }
  }

  &::before {
    background-color: var(--bg-menu);
    bottom: -0.5rem;
    box-shadow: 1px 1px 0 0 #bababc;
    content: '';
    height: 1rem;
    position: absolute;
    right: 50%;
    top: unset;
    width: 1rem;
    transform: rotate(45deg);
    z-index: 2;
  }

  &.bottomPointer::before {
    box-shadow: -1px -1px 0 0 #bababc;

    top: -0.5rem;
    bottom: unset;
  }

  .ui.text.menu .item {
    color: var(--color-text) !important;
    text-align: left;

    &.disabled {
     opacity: 0.3;
    }
  }

  & > *:not(.ui--Menu) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  & > *:first-child:not(.ui--Menu) {
    margin-top: 1rem;
  }

  & > *:last-child:not(.ui--Menu) {
    margin-bottom: 1rem;
  }
`,Bt=s.memo(function({children:e,className:t="",position:n,triggerRef:s,windowRef:i}){const{pointerStyle:r,renderCoords:{x:o,y:l}}=St(i,s,n);return(0,bt.createPortal)((0,a.jsx)(It,{className:`${t} ${r}Pointer ${n}Position`,"data-testid":"popup-window",ref:i,style:o&&l&&{transform:`translate3d(${o}px, ${l}px, 0)`,zIndex:1e3}||void 0,children:e}),document.body)}),Ft=m.I.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`,Tt=s.memo(function({children:e,className:t="",closeOnScroll:n,isDisabled:i,onCloseAction:r,position:o="left",value:l}){const{themeClassName:c}=(0,gt.D)(),[d,u,m]=(0,Q.e)(!1),h=(0,s.useRef)(null),p=(0,s.useRef)(null),g=(0,s.useCallback)(()=>m(!1),[m]),f=(0,s.useMemo)(()=>[h,p],[h,p]);return ft(f,g),(0,s.useEffect)(()=>(n&&document.addEventListener("scroll",g,!0),()=>document.removeEventListener("scroll",g,!0)),[n,g,m]),(0,s.useEffect)(()=>{!d&&r&&r()},[d,r]),(0,a.jsxs)(Ft,{className:`${t} ui--Popup ${c}`,children:[d&&(0,a.jsx)(Bt,{position:o,triggerRef:h,windowRef:p,children:l}),(0,a.jsx)("div",{"data-testid":"popup-open",onClick:u,ref:h,children:e??(0,a.jsx)(j,{className:d?"isOpen":"",icon:"ellipsis-v",isDisabled:i,isReadOnly:!1})})]})}),Dt=s.memo(function({judgement:{judgementName:e,registrars:t}}){const n=(0,s.useMemo)(()=>{return"Erroneous"===(t=e)||"Low quality"===t?"red":"green";var t},[e]);return(0,a.jsx)(Tt,{closeOnScroll:!0,position:"middle",value:(0,a.jsx)(pt,{children:t.map(e=>e&&(0,a.jsx)(it,{value:e.address},e.address))}),children:(0,a.jsx)(tt.A,{color:n,label:`${t.length} ${e}`,size:"tiny"})})}),Lt=m.I.div`
  margin-top: 0.714rem;

  &:not(.no-judgements) {
    .ui--Tag:hover {
      cursor: pointer;
    }
  }
`,Mt=s.memo(function({address:e,className:t=""}){const{t:n}=(0,h.B)(),s=et(e);return 0===s.length?(0,a.jsx)("div",{className:`${t} no-judgements`,"data-testid":"judgements",children:(0,a.jsx)(tt.A,{color:"yellow",label:n("No judgements"),size:"tiny"},"NoJudgements")}):(0,a.jsx)(Lt,{className:t,"data-testid":"judgements",children:s.map(t=>(0,a.jsx)(Dt,{judgement:t},`${e}${t.judgementName}`))})});var Pt=n(41340),Vt=n(7135),zt=n(70020),Rt=n.n(zt),qt=n(770),$t=n(18767),Ut=n(60750),Ht=n(63181),Qt=n(15896),Ot=n(5750),Wt=n.n(Ot),Gt=n(76733);const Yt=()=>{},Kt=m.I.div`
  .copySpan {
    white-space: nowrap;
  }
`,Jt=s.memo(function({children:e,className:t="",icon:n="copy",label:i,type:r,value:o}){const{t:l}=(0,h.B)(),{queueAction:c}=(0,Z.x)(),d=(0,s.useCallback)(()=>{c&&c({action:l("clipboard"),message:l("{{type}} copied",{replace:{type:r||l("value")}}),status:"queued"})},[r,c,l]);return(0,Gt.K)(o)?(0,a.jsx)(Kt,{className:`${t} ui--CopyButton`,children:(0,a.jsx)(Wt(),{onCopy:d,text:o,children:(0,a.jsxs)("div",{className:"copyContainer",children:[e,(0,a.jsx)("span",{className:"copySpan",children:(0,a.jsx)(j,{className:"icon-button show-on-hover",icon:n,isDisabled:!o,label:i,onClick:Yt})})]})})}):null});var Zt=n(43194);const Xt=s.memo(function({children:e,className:t="",copyValue:n,defaultValue:s,isFull:i,isHidden:r,isSmall:o,label:l,value:c,withCopy:d,withLabel:u}){return(0,a.jsxs)(Zt.A,{className:t,isFull:i,isHidden:r,isSmall:o,label:l,withLabel:u,children:[(0,a.jsxs)("div",{className:"ui--Static ui dropdown selection disabled",children:[c||s,e]}),d&&(0,a.jsx)(Jt,{value:n||c||s})]})});var _t=n(76506);const en=m.I.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  white-space: nowrap;

  > .address {
    display: inline-block;
    flex: 1;
    font-size: var(--font-size-small);
    margin-left: 1rem;
    max-width: var(--width-shortaddr);
    min-width: var(--width-shortaddr);
    opacity: var(--opacity-light);
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
  }

  > .icon {
    position: absolute;
    top: -5px;
    left: 0;
  }

  > .name {
    display: inline-block;
    flex: 1 0;
    margin-left: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;

    &.uppercase {
      text-transform: uppercase;
    }
  }
`,tn=s.memo(function({address:e,className:t=""}){return(0,a.jsxs)(en,{className:`${t} ui--KeyPair`,children:[(0,a.jsx)(Te,{className:"icon",value:e}),(0,a.jsx)("div",{className:"name",children:(0,a.jsx)(o.Ay,{value:e})}),(0,a.jsx)("div",{className:"address",children:e})]})});function nn(e,t=!0){const n="ethereum"===qt.AC.keyring.type?20:32;try{if((0,_t.F)(e.key).length>=n)return{...e,text:(0,a.jsx)(tn,{address:e.key||"",isUppercase:t,name:e.name})}}catch{}return null}const an="options:InputAddress",sn="all",rn=[];function on(e){try{return(0,z.ch)(e,!1,"ethereum"===qt.AC.keyring.type?20:32)||null}catch{}return null}function ln(e){if(!e)return null;return on(e)||null}function cn(e){let t;const n=qt.AC.getAccount(e);let a;if(n)a=n.meta.name;else{const n=qt.AC.getAddress(e);n?(a=n.meta.name,t=n.meta.isRecent):t=!0}return nn((0,$t.j)(e,a),!t)}function dn(){return Rt().get(an)||{defaults:{}}}function un(e=sn){return dn().defaults[e]}function mn(e=sn,t){const n=dn();n.defaults[e]=t,Rt().set(an,n)}function hn(e){return e.reduce((e,t,n)=>(e.some(({key:e},a)=>a!==n&&e===t.key)||e.push(t),e),[])}class pn extends s.PureComponent{state={};static getDerivedStateFromProps({type:e,value:t},{lastValue:n}){try{return{lastValue:n||un(e),value:Array.isArray(t)?t.map(e=>(0,z.ch)(e)):(0,z.ch)(t)||void 0}}catch{return null}}render(){const{className:e="",defaultValue:t,hideAddress:n=!1,isDisabled:s=!1,isError:i,isMultiple:r,label:o,labelExtra:l,options:c,optionsAll:d,placeholder:u,type:m=sn,withEllipsis:h,withLabel:p}=this.props;if(!(c&&0!==c.length||d&&0!==Object.keys(d[m]).length||s||["allPlus"].includes(m)))return(0,a.jsx)(Xt,{className:e,label:o,children:"No accounts are available for selection."});const{lastValue:g,value:f}=this.state,b=this.getLastOptionValue(),A=on(s||t&&"0x"!==t&&(this.hasValue(t)||"allPlus"===m)?t:this.hasValue(g)?g:b?.value),x=c?hn(c.map(e=>nn(e)).filter(e=>!!e)):s&&A?[cn(A)].filter(e=>!!e):A?this.addActual(A):this.getFiltered(),v=r||!(0,Ut.b)(f)?void 0:A;return(0,a.jsx)(gn,{className:`${e} ui--InputAddress ${n?"hideAddress":""}`,defaultValue:v,isDisabled:s,isError:i,isMultiple:r,label:o,labelExtra:l,onChange:r?this.onChangeMulti:this.onChange,onSearch:this.onSearch,options:x,placeholder:u,renderLabel:r?this.renderLabel:void 0,value:r&&!f?rn:f,withEllipsis:h,withLabel:p})}addActual(e){const t=this.getFiltered();return this.hasValue(e)?t:t.concat(...[cn(e)].filter(e=>!!e))}renderLabel=({value:e})=>{if(e)return(0,z.si)(e)};getLastOptionValue(){const e=this.getFiltered();return e.length?e[e.length-1]:void 0}hasValue(e){const t=e?.toString();return this.getFiltered().some(({value:e})=>e===t)}getFiltered(){const{filter:e,optionsAll:t,type:n=sn,withExclude:a=!1}=this.props;return t?hn(t[n]).filter(({value:t})=>!e||!!t&&(a?!e.includes(t):e.includes(t))):[]}onChange=e=>{const{filter:t,onChange:n,type:a}=this.props;!t&&mn(a,e),n&&n(e&&(this.hasValue(e)||"allPlus"===a&&(0,Qt.P)(e))?ln(e):null)};onChangeMulti=e=>{const{onChangeMulti:t}=this.props;t&&t(e.map(ln).filter(e=>!!e))};onSearch=(e,t)=>{const{isInput:n=!0}=this.props,a=t.trim(),s=a.toLowerCase(),i=e.filter(e=>!!e.value&&"string"==typeof e.name&&(e.name.toLowerCase?.().includes(s)||e.value.toString().toLowerCase().includes(s)));if(n&&0===i.length){const e=ln(a);if(e){const t=qt.AC.getAccount(e);if(t)i.push({key:t.address,name:t.meta.name,value:t.address});else{const t=qt.AC.saveRecent(e.toString()).option;i.push({key:t.key,name:t.name,value:t.value||void 0})}}}return i.filter((e,t)=>{const n=t===i.length-1,a=i[t+1],s=a?.value;return!((0,Ht.k)(e.value)||(0,Ut.b)(e.value))||!n&&!!s})}}const gn=(0,m.I)(Pt.A)`
  .ui.dropdown .text {
    width: 100%;
  }

  .ui.disabled.search {
    pointer-events: all;
  }

  .ui.search.selection.dropdown {
    > .text > .ui--KeyPair {
      .ui--IdentityIcon {
        left: -2.75rem;
        top: -1.05rem;

        > div,
        img,
        svg {
          height: 32px !important;
          width: 32px !important;
        }
      }

      .name {
        margin-left: 0;

        > .ui--AccountName {
          height: auto;
        }
      }
    }

    > .menu > div.item > .ui--KeyPair > .name  > .ui--AccountName {
      height: auto;
    }
  }

  &.hideAddress .ui.search.selection.dropdown > .text > .ui--KeyPair .address {
    flex: 0;
    max-width: 0;
  }
`,fn=(0,S.C9)(pn,(0,S.mq)(qt.AC.keyringOption.optionsSubject,{propName:"optionsAll",transform:e=>Object.entries(e).reduce((e,[t,n])=>(e[t]=n.map(e=>null===e.value?function(e){return(0,a.jsx)(Pt.A.Header,{content:e.name},e.key||e.name)}(e):nn(e)).filter(e=>!!e),e),{})}));fn.createOption=nn,fn.setLastValue=mn;const bn=fn,An=m.I.article`
  .ui--Icon {
    color: rgba(255, 12, 12, 1);
    margin-right: 0.5rem;
  }
`,xn=s.memo(function({children:e,className:t="",content:n}){return(0,a.jsxs)(An,{className:`${t} mark error`,children:[(0,a.jsx)(b.A,{icon:"exclamation-triangle"}),n,e]})});var vn=n(64767);function wn(e="<unknown>"){return(0,a.jsx)(a.Fragment,{children:e.split("\n").map((e,t)=>(0,a.jsx)("div",{children:e},t))})}class yn extends s.Component{state={error:null,prevTrigger:null};static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps({trigger:e},{prevTrigger:t}){const n=JSON.stringify({trigger:e});return t!==n?{error:null,prevTrigger:n}:null}componentDidCatch(e){const{doThrow:t,onError:n}=this.props;if(n&&n(),t)throw e}render(){const{children:e,error:t,t:n}=this.props,{error:s}=this.state,i=t||s;return i?(0,a.jsxs)("article",{className:"error extraMargin",children:[(0,a.jsx)("p",{children:n("Uncaught error. Something went wrong with the query and rendering of this component. Please supply all the details below when logging an issue, it may help in tracing the cause.")}),(0,a.jsx)("p",{children:i.message}),wn(i.stack)]}):e}}const kn=(0,h.A)(yn),jn=m.I.div`
  background-color: var(--bg-input);
  border-radius: 0 0 4px 4px;

  .ui--Button-Group {
    margin: 1rem 1rem;
  }
`,Cn=s.memo(function({children:e,className:t=""}){return(0,a.jsx)(jn,{className:`${t} ui--Modal-Actions`,children:(0,a.jsx)(j.Group,{children:e})})}),Nn=m.I.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  &.centerAlign > div.ui--Modal-Columns-content {
    text-align: center;
  }

  &.rightAlign > div.ui--Modal-Columns-content {
    text-align: right;
  }

  &+& {
    margin-top: 0.25rem;
  }

  > div {
    padding: 0.25em 0;

    &:nth-child(1) {
      flex: 100%;
      max-width: 100%;
    }

    &:nth-child(2) {
      display: none;
      flex: 0%;
    }

    @media only screen and (min-width: 1024px) {
      &:nth-child(1),
      &:only-child {
        flex: 0 65%;
        max-width: 65%;
      }

      &:nth-child(2) {
        box-sizing: border-box;
        display: block;
        flex: 0 34%;
        font-size: var(--font-size-small);
        opacity: 0.75;
        padding: 0.25rem 0 0.25rem 0.5rem;
      }
    }
  }
`,En=s.memo(function({align:e="left",children:t,className:n="",hint:s}){return(0,a.jsxs)(Nn,{className:`${n} ui--Modal-Columns ${e}Align`,children:[(0,a.jsx)("div",{className:"ui--Modal-Columns-content",children:t}),s&&(0,a.jsx)("div",{className:"ui--Modal-Columns-hint",children:s})]})}),Sn=m.I.div`
  padding: 1.5rem;
`,In=s.memo(function({children:e,className:t=""}){return(0,a.jsx)(Sn,{className:`${t} ui--Modal-Content`,children:e})}),Bn=m.I.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.5rem 0;
`,Fn=s.memo(function({className:e="",header:t,onClose:n}){return(0,a.jsxs)(Bn,{className:`${e} ui--Modal-Header`,children:[t&&(0,a.jsx)("h1",{children:t}),(0,a.jsx)(j,{dataTestId:"close-modal",icon:"times",onClick:n})]})}),Tn=vn.DU`
  body {
    overflow: hidden;
  }
`,Dn=m.I.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 1000;
  overflow-y: auto;

  .ui--Modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(96, 96, 96, 0.5);
  }

  .ui--Modal__body {
    margin-top: 30px;
    background: var(--bg-page);
    border-radius: 4px;
    box-shadow: none;

    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    max-width: 900px;
    width: calc(100% - 16px);

    color: var(--color-text);
    font: var(--font-sans);
  }

  &.smallSize .ui--Modal__body {
    max-width: 720px;
  }

  &.largeSize .ui--Modal__body {
    max-width: 1080px;
  }
`,Ln=s.memo(function({children:e,className:t="",header:n,onClose:i,size:r="medium",testId:o="modal"}){const{themeClassName:l}=(0,gt.D)(),c=(0,s.useCallback)(e=>{"Escape"!==e.key&&27!==e.keyCode||i()},[i]);return(0,s.useEffect)(()=>(window.addEventListener("keydown",c,!0),()=>{window.removeEventListener("keydown",c,!0)}),[c]),(0,bt.createPortal)((0,a.jsxs)(Dn,{className:`${t} ui--Modal ${r}Size ${l} `,"data-testid":o,children:[(0,a.jsx)(Tn,{}),(0,a.jsx)("div",{className:"ui--Modal__overlay",onClick:i}),(0,a.jsxs)("div",{className:"ui--Modal__body",children:[(0,a.jsx)(Fn,{header:n,onClose:i}),(0,a.jsx)(kn,{children:e})]})]}),document.body)});Ln.Actions=Cn,Ln.Columns=En,Ln.Content=In;const Mn=Ln,Pn=[{text:"Unknown",value:0},{text:"Fee paid",value:1},{text:"Reasonable",value:2},{text:"Known good",value:3},{text:"Out of date",value:4},{text:"Low quality",value:5}],Vn={transform:e=>{const t=e.isSome?e.unwrap():null;return t?Array.isArray(t)?t[0].info.hash.toHex():t.info.hash.toHex():null}},zn=s.memo(function({address:e,registrars:t,toggleJudgement:n}){const{t:i}=(0,h.B)(),{apiIdentity:r,enableIdentity:o}=(0,u.g)(),l=(0,K.Gc)(r.query.identity.identityOf,[e],Vn),[c]=(0,s.useState)(()=>t.map(({address:e})=>e)),[d,m]=(0,s.useState)(null),[p,g]=(0,s.useState)(2),[f,b]=(0,s.useState)(-1);return(0,s.useEffect)(()=>{const e=t.find(({address:e})=>d===e);b(e?e.index:-1)},[d,t]),(0,a.jsxs)(Mn,{header:i("Provide judgement"),onClose:n,size:"small",children:[(0,a.jsxs)(Mn.Content,{children:[(0,a.jsx)(bn,{filter:c,label:i("registrar account"),onChange:m,type:"account"}),(0,a.jsx)(Vt.Ay,{isDisabled:!0,label:i("registrar index"),value:-1===f?i("invalid/unknown registrar account"):f.toString()}),(0,a.jsx)(Pt.A,{label:i("judgement"),onChange:g,options:Pn,value:p}),l?(0,a.jsx)(Vt.Ay,{defaultValue:l,isDisabled:!0,label:i("identity hash")}):null===l?(0,a.jsx)(xn,{content:i("No identity associated with account")}):(0,a.jsx)(x,{noLabel:!0})]}),(0,a.jsx)(Mn.Actions,{children:(0,a.jsx)(ee,{accountId:d,icon:"check",isDisabled:!o||!l||-1===f,label:i("Judge"),onStart:n,params:4===r.tx.identity.provideJudgement.meta.args.length?[f,e,p,l]:[f,e,p],tx:r.tx.identity.provideJudgement})})]})}),Rn=s.memo(function(){return(0,a.jsxs)("svg",{fill:"none",height:"40",viewBox:"0 0 40 40",width:"40",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsx)("circle",{cx:"20",cy:"20",fill:"url(#pattern0)",r:"20"}),(0,a.jsxs)("defs",{children:[(0,a.jsx)("pattern",{height:"1",id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",children:(0,a.jsx)("use",{transform:"scale(0.00277778)",xlinkHref:"#image0"})}),(0,a.jsx)("image",{height:"360",id:"image0",width:"360",xlinkHref:"data:image/png;base64,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"})]})]})}),qn=s.memo(function({address:e,identity:t}){const{t:n}=(0,h.B)(),{apiIdentity:i}=(0,u.g)(),{isRegistrar:r,registrars:o}=ke(),[l,c]=(0,Q.e)(),d=(0,je.s)(e),m=(0,s.useMemo)(()=>d?.map(e=>(0,a.jsx)(He,{className:"subs",isPadded:!1,value:e},e.toString())),[d]);return t&&t.isExistent&&i.query.identity?.identityOf?(0,a.jsxs)("section",{className:"withDivider","data-testid":"identity-section",children:[(0,a.jsxs)("div",{className:"ui--AddressMenu-section ui--AddressMenu-identity",children:[(0,a.jsx)("div",{className:"ui--AddressMenu-sectionHeader",children:n("identity")}),(0,a.jsxs)("div",{children:[(0,a.jsx)(Oe,{icon:(0,a.jsx)(Rn,{}),subtitle:t.legal,title:t.display}),(0,a.jsx)(Mt,{address:e}),(0,a.jsxs)("div",{className:"ui--AddressMenu-identityTable",children:[t.parent&&(0,a.jsxs)("div",{className:"tr parent",children:[(0,a.jsx)("div",{className:"th",children:n("parent")}),(0,a.jsx)("div",{className:"td",children:(0,a.jsx)(He,{className:"parent",isPadded:!1,value:t.parent})})]}),t.email&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("email")}),(0,a.jsx)("div",{className:"td",children:(0,Ne.qv)(t.email)||!t.isKnownGood?t.email:(0,a.jsx)("a",{href:`mailto:${t.email}`,rel:"noopener noreferrer",target:"_blank",children:t.email})})]}),t.web&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("website")}),(0,a.jsx)("div",{className:"td",children:(0,Ne.qv)(t.web)||!t.isKnownGood?t.web:(0,a.jsx)("a",{href:t.web.replace(/^(https?:\/\/)?/g,"https://"),rel:"noopener noreferrer",target:"_blank",children:t.web})})]}),t.twitter&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("twitter")}),(0,a.jsx)("div",{className:"td",children:(0,Ne.qv)(t.twitter)||!t.isKnownGood?t.twitter:(0,a.jsx)("a",{href:t.twitter.startsWith("https://twitter.com/")?t.twitter:`https://twitter.com/${t.twitter}`,rel:"noopener noreferrer",target:"_blank",children:t.twitter})})]}),t.other&&Ce.Gh in t.other&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("discord")}),(0,a.jsx)("div",{className:"td",children:t.other[Ce.Gh]})]}),t.github&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("github")}),(0,a.jsx)("div",{className:"td",children:t.github})]}),t.matrix&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("matrix")}),(0,a.jsx)("div",{className:"td",children:t.matrix})]}),t.discord&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("discord")}),(0,a.jsx)("div",{className:"td",children:t.discord})]}),t.riot&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("riot")}),(0,a.jsx)("div",{className:"td",children:t.riot})]}),!!d?.length&&(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th top",children:n("subs")}),(0,a.jsx)("div",{className:"td","data-testid":"subs",children:d.length>4?(0,a.jsx)(W,{summary:d.length,children:m}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"subs-number",children:d.length}),m]})})]})]})]})]}),r&&(0,a.jsx)("div",{className:"ui--AddressMenu-section",children:(0,a.jsx)("div",{className:"ui--AddressMenu-actions",children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(Ge,{icon:"address-card",label:n("Add identity judgment"),onClick:c})})})})}),l&&r&&(0,a.jsx)(zn,{address:e,registrars:o,toggleJudgement:c},"modal-judgement")]}):null}),$n=s.memo(function({isMultisig:e,meta:t}){const{t:n}=(0,h.B)();if(!e||!t)return null;const{threshold:s,who:i}=t;return(0,a.jsxs)("section",{className:"ui--AddressMenu-multisig withDivider",children:[(0,a.jsx)("div",{className:"ui--AddressMenu-sectionHeader",children:n("multisig")}),(0,a.jsxs)("div",{className:"ui--AddressMenu-multisigTable",children:[(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th",children:n("threshold")}),(0,a.jsxs)("div",{className:"td",children:[s,"/",i?.length]})]}),(0,a.jsxs)("div",{className:"tr",children:[(0,a.jsx)("div",{className:"th signatories",children:n("signatories")}),(0,a.jsx)("div",{className:"td",children:i?.map(e=>(0,a.jsx)(He,{value:e},e))})]})]})]})});var Un=n(72272),Hn=n(22479),Qn=n(44366),On=n(58797),Wn=n(95675);const Gn=m.I.article`
  .ui--Icon {
    color: rgba(255, 196, 12, 1);
    margin-right: 0.5rem;
  }
`,Yn=s.memo(function({children:e,className:t="",content:n,withIcon:s=!0}){return(0,a.jsxs)(Gn,{className:`${t} mark warning`,children:[s&&(0,a.jsx)(b.A,{icon:"exclamation-triangle"}),n,e]})}),Kn=m.I.div`
  > label {
    display: inline-block;
    margin: 0 0.5rem !important;
  }

  > label,
  > div {
    vertical-align: middle;
  }

  .ui--Toggle-Slider {
    background: var(--bg-toggle);
    border-radius: 1.5rem;
    display: inline-block;
    height: 1.5rem;
    position: relative;
    width: 3rem;

    &::before {
      background: var(--bg-table);
      border: 0.125rem solid var(--bg-toggle);
      border-radius: 50%;
      content: "";
      height: 1.5rem;
      left: 0;
      position: absolute;
      top: 0;
      width: 1.5rem;
    }
  }

  &:not(.isDisabled) {
    cursor: pointer;

    > label {
      cursor: pointer;
    }
  }

  &.isChecked {
    &:not(.isRadio) {
      .ui--Toggle-Slider:before {
        transform: translateX(1.5rem);
      }
    }

    &.isRadio {
      .ui--Toggle-Slider:before {
        border-width: 0.5rem;
      }
    }
  }

  &.isRadio {
    .ui--Toggle-Slider {
      width: 1.5rem;
    }
  }
`,Jn=s.memo(function({className:e="",isDisabled:t,isRadio:n,label:i,onChange:r,preventDefault:o,value:l}){const c=(0,s.useCallback)(e=>{t||(o&&(e.preventDefault(),e.stopPropagation()),r&&r(!l))},[t,r,o,l]);return(0,a.jsxs)(Kn,{className:`${e} ui--Toggle ${l?"isChecked":""} ${t?"isDisabled":""} ${n?"isRadio":""}`,onClick:c,children:[i&&(0,a.jsx)("label",{children:i}),(0,a.jsx)("div",{className:"ui--Toggle-Slider "+(n?"highlight--before-border":"")})]})});var Zn=n(91693);const Xn=(0,m.I)(Mn)`
  .balance {
    margin-bottom: 0.5rem;
    text-align: right;
    padding-right: 1rem;

    .label {
      opacity: 0.7;
    }
  }

  label.with-help {
    flex-basis: 10rem;
  }

  .typeToggle {
    text-align: right;
  }

  .typeToggle+.typeToggle {
    margin-top: 0.375rem;
  }
`,_n=s.memo(function({className:e="",onClose:t,recipientId:n,senderId:i}){const{t:r}=(0,h.B)(),{api:o}=(0,u.g)(),[l,c]=(0,s.useState)(L.Yz),[d]=(0,s.useState)(!0),[m,p]=(0,s.useState)(!0),[g,f]=(0,s.useState)(!1),[b,A]=(0,s.useState)(),[[x,v],w]=(0,s.useState)([null,!1]),[y,k]=(0,s.useState)(null),[j,C]=(0,s.useState)(null),[[,N],E]=(0,s.useState)([null,null]),S=(0,K.Gc)(o.derive.balances?.all,[i||j]),I=(0,K.Gc)(o.query.system.account,[i||j]);(0,s.useEffect)(()=>{const e=i||j,t=n||y;e&&A((0,Zn.y)(e)),S&&S.accountId?.eq(e)&&e&&t&&o.call.transactionPaymentApi&&o.tx.balances?(0,On.d)(async()=>{try{const n=(o.tx.balances.transferAllowDeath||o.tx.balances.transfer)(t,S.transferable||S.availableBalance),{partialFee:a}=await n.paymentInfo(e),s=a.muln(110).div(L.cM),i=(S.transferable||S.availableBalance).sub(s);w(o.consts.balances&&i.gt(o.consts.balances.existentialDeposit)?[i,!1]:[null,!0])}catch(e){console.error(e)}}):w([null,!1])},[o,S,n,i,y,j]),(0,s.useEffect)(()=>{(async function(e,t){return[null,t?await(0,Hn.l_)(t):null]})(0,n||y).then(E).catch(console.error)},[n,i,y,j]);const B=!I||(function(e){return!!e.refcount}(I)?I.refcount.isZero():I.consumers.isZero()),F=!m&&S&&S.accountId?.eq(i||j)&&x&&B;return(0,a.jsxs)(Xn,{className:"app--accounts-Modal",header:r("Send funds"),onClose:t,size:"large",children:[(0,a.jsx)(Mn.Content,{children:(0,a.jsxs)("div",{className:e,children:[(0,a.jsx)(Mn.Columns,{hint:r("The transferred balance will be subtracted (along with fees) from the sender account."),children:(0,a.jsx)(bn,{defaultValue:i,isDisabled:!!i,label:r("send from account"),labelExtra:(0,a.jsx)(Qn.A,{label:r("transferable"),params:i||j}),onChange:C,type:"account"})}),(0,a.jsxs)(Mn.Columns,{hint:r("The beneficiary will have access to the transferred fees when the transaction is included in a block."),children:[(0,a.jsx)(bn,{defaultValue:n,isDisabled:!!n,label:r("send to address"),labelExtra:(0,a.jsx)(Qn.A,{label:r("transferable"),params:n||y}),onChange:k,type:"allPlus"}),N&&(0,a.jsx)(xn,{content:r("The recipient is associated with a known phishing site on {{url}}",{replace:{url:N}})})]}),(0,a.jsx)(Mn.Columns,{hint:r("If the recipient account is new, the balance needs to be more than the existential deposit. Likewise if the sending account balance drops below the same value, the account will be removed from the state."),children:F&&g?(0,a.jsx)(Wn.A,{autoFocus:!0,defaultValue:x,isDisabled:!0,label:r("transferable minus fees")},x?.toString()):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Wn.A,{autoFocus:!0,isError:!d,isZeroable:!0,label:r("amount"),maxValue:x,onChange:c}),(0,a.jsx)(Wn.A,{defaultValue:o.consts.balances?.existentialDeposit,isDisabled:!0,label:r("existential deposit")})]})}),(0,a.jsxs)(Mn.Columns,{hint:r("With the keep-alive option set, the account is protected against removal due to low balances."),children:[(0,X.T)(o.tx.balances?.transferKeepAlive)&&(0,a.jsx)(Jn,{className:"typeToggle",label:r(m?"Transfer with account keep-alive checks":"Normal transfer without keep-alive checks"),onChange:p,value:m}),F&&(0,a.jsx)(Jn,{className:"typeToggle",label:r("Transfer the full account balance, reap the sender"),onChange:f,value:g}),b&&b.isHardware&&(0,a.jsx)(Yn,{content:r(`You are using the Ledger ${Ie.W.ledgerApp.toUpperCase()} App. If you would like to switch it, please go the "manage ledger app" in the settings.`)}),!m&&!B&&(0,a.jsx)(Yn,{content:r("There is an existing reference count on the sender account. As such the account cannot be reaped from the state.")}),v&&(0,a.jsx)(Yn,{content:r("The transaction, after application of the transfer fees, will drop the available balance below the existential deposit. As such the transfer will fail. The account needs more free funds to cover the transaction fees.")})]})]})}),(0,a.jsx)(Mn.Actions,{children:(0,a.jsx)(ee,{accountId:i||j,icon:"paper-plane",isDisabled:!((g||d&&l)&&(n||y)&&!N),label:r("Make Transfer"),onStart:t,params:F&&g?(0,X.T)(o.tx.balances?.transferAll)?[n||y,!1]:[n||y,x]:[n||y,l],tx:F&&g&&(0,X.T)(o.tx.balances?.transferAll)?o.tx.balances?.transferAll:m?o.tx.balances?.transferKeepAlive:o.tx.balances?.transferAllowDeath||o.tx.balances?.transfer})})]})}),ea=m.I.div`
  width: 100%;

  .ui--Button-Group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 0;
  }
`,ta=s.memo(function({className:e="",flags:t,isEditing:n,isEditingName:i,onCancel:r,onForgetAddress:o,onSaveName:l,onSaveTags:c,onUpdateName:d,recipientId:m,toggleIsEditingName:p,toggleIsEditingTags:g}){const{t:f}=(0,h.B)(),[b,A]=(0,Q.e)(),x=(0,u.g)(),v=(0,s.useCallback)(()=>{o(),d&&d()},[o,d]),w=(0,s.useCallback)(()=>{t.isEditable&&p(),g()},[t.isEditable,p,g]),y=(0,s.useCallback)(()=>{l(),d&&d()},[l,d]),k=(0,s.useCallback)(()=>{i&&(t.isInContacts||t.isOwned)&&(y(),p())},[i,t.isInContacts,t.isOwned,y,p]),C=(0,s.useCallback)(()=>{n&&(k(),c()),w()},[n,w,k,c]);return(0,a.jsxs)(ea,{className:`${e} ui--AddressMenu-buttons`,children:[n?(0,a.jsxs)(j.Group,{children:[(0,a.jsx)(j,{icon:"times",label:f("Cancel"),onClick:r}),(0,a.jsx)(j,{icon:"save",label:f("Save"),onClick:C})]}):(0,a.jsxs)(j.Group,{children:[((0,X.T)(x.api.tx.balances?.transferAllowDeath)||(0,X.T)(x.api.tx.balances?.transfer))&&(0,a.jsx)(j,{icon:"paper-plane",isDisabled:n,label:f("Send"),onClick:A}),!t.isOwned&&!t.isInContacts&&(0,a.jsx)(j,{icon:"plus",isDisabled:n,label:f("Save"),onClick:y}),!t.isOwned&&t.isInContacts&&(0,a.jsx)(j,{icon:"ban",isDisabled:n,label:f("Remove"),onClick:v}),(0,a.jsx)(j,{icon:"edit",isDisabled:!t.isEditable,label:f("Edit"),onClick:C})]}),b&&(0,a.jsx)(_n,{onClose:A,recipientId:m},"modal-transfer")]})}),na=s.memo(function({accountIndex:e,defaultValue:t,editingName:n,flags:s,onChange:i,value:r}){const{t:l}=(0,h.B)(),[c,d]=(0,Q.e)(),u=()=>{};return(0,a.jsxs)("div",{className:"ui--AddressSection",children:[(0,a.jsx)(Te,{size:80,value:r}),(0,a.jsxs)("div",{className:"ui--AddressSection__AddressColumn",children:[(0,a.jsx)(o.Ay,{override:n?(0,a.jsx)(Vt.Ay,{className:"name--input",defaultValue:t,label:"name-input",onChange:i,withLabel:!1}):s.isEditable?t.toUpperCase()||l("<unknown>"):void 0,value:r,withSidebar:!1}),(0,a.jsx)("div",{className:"ui--AddressMenu-addr",children:r}),e&&(0,a.jsxs)("div",{className:"ui--AddressMenu-index",children:[(0,a.jsxs)("label",{children:[l("index"),":"]})," ",e]})]}),(0,a.jsx)("div",{className:"ui--AddressSection__CopyColumn",children:(0,a.jsx)("div",{className:"ui--AddressMenu-copyaddr",children:(0,a.jsx)(Wt(),{text:r,children:(0,a.jsx)("span",{children:(0,a.jsx)(j.Group,{children:(0,a.jsx)(j,{icon:c?"check":"copy",label:l(c?"Copied":"Copy"),onClick:c?u:d,onMouseLeave:c?d:u})})})})})})]})}),aa=(0,m.I)(tt.A)`
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0.5833em 1.25em 0.5833em 1.5em;
  font-size: var(--font-size-tiny);
  line-height: 1;
  color: #fff !important;

  &.darkTheme {
    :after {
      background-color: var(--bg-tabs);
    }
  }

  &:after {
    background-color: #fff;
    border-radius: 500rem;
    content: '';
    left: -0.25em;
    margin-top: -0.25em;
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    top: 50%;
  }

  &:before {
    border-radius: 0.2rem 0 0.1rem 0;
    background-color: inherit;
    background-image: none;
    content: '';
    right: 100%;
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    transform: translateY(-50%) translateX(50%) rotate(-45deg);
    top: 50%;
    transition: none;
  }
`,sa=s.memo(function({className:e="",color:t,label:n}){return(0,a.jsx)(aa,{className:`${e} ${"theme"===t?" highlight--color-bg highlight--bg":""}`,color:t,label:n,size:"tiny"})}),ia=m.I.div`
  .ui--Tag {
    margin: 0.2rem 1rem 0.2rem 0.571rem;
  }
`,ra=s.memo(function({className:e="",flags:{isCouncil:t,isDevelopment:n,isExternal:s,isInjected:i,isMultisig:r,isNominator:o,isProxied:l,isSociety:c,isSudo:d,isTechCommittee:u,isValidator:m}}){const{t:p}=(0,h.B)(),g=t||n||s||i||r||l||c||d||u||m||o;return g?(0,a.jsxs)(ia,{className:`${e} ui--AddressMenu-flags`,children:[g&&(0,a.jsx)("h5",{children:p("Flags")}),(0,a.jsxs)("div",{children:[m&&(0,a.jsx)(sa,{color:"theme",label:p("Validator")}),o&&(0,a.jsx)(sa,{color:"theme",label:p("Nominator")}),s&&(r?(0,a.jsx)(sa,{color:"green",label:p("Multisig")}):l?(0,a.jsx)(sa,{color:"grey",label:p("Proxied")}):(0,a.jsx)(sa,{color:"grey",label:p("External")})),i&&(0,a.jsx)(sa,{color:"grey",label:p("Injected")}),n&&(0,a.jsx)(sa,{color:"grey",label:p("Test account")}),t&&(0,a.jsx)(sa,{color:"blue",label:p("Council")}),c&&(0,a.jsx)(sa,{color:"green",label:p("Society")}),u&&(0,a.jsx)(sa,{color:"orange",label:p("Technical committee")}),d&&(0,a.jsx)(sa,{color:"pink",label:p("Sudo key")})]})]}):null}),oa=s.memo(function({accountIndex:e,address:t,isBeingEdited:n,onUpdateName:i,sidebarRef:r}){const{flags:o,isEditing:l,isEditingName:d,isEditingTags:u,name:m,onForgetAddress:h,onSaveName:p,onSaveTags:g,setIsEditingName:f,setIsEditingTags:b,setName:A,setTags:x,tags:v,toggleIsEditingName:w,toggleIsEditingTags:y}=(0,c.T)(t),k=(0,s.useMemo)(()=>[r],[r]);(0,s.useEffect)(()=>{n(l())},[n,l]);const j=(0,s.useCallback)(()=>{if(l())try{const e=qt.AC.getAccount(t)||qt.AC.getAddress(t);A(e?.meta.name||""),x(e?.meta.tags?e.meta.tags.sort():[]),f(!1),b(!1)}catch{}},[l,A,x,f,b,t]);return ft(k,j),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(na,{accountIndex:e,defaultValue:m,editingName:d,flags:o,onChange:A,value:t}),(0,a.jsx)("div",{className:"ui--AddressMenu-tags","data-testid":"sidebar-tags",children:(0,a.jsx)(Un.A,{isEditable:!0,isEditing:u,onChange:x,value:v,withEditButton:!1,withTitle:!0})}),(0,a.jsx)(ra,{flags:o}),(0,a.jsx)(ta,{flags:o,isEditing:l(),isEditingName:d,onCancel:j,onForgetAddress:h,onSaveName:p,onSaveTags:g,onUpdateName:i,recipientId:t,toggleIsEditingName:w,toggleIsEditingTags:y})]})}),la=(0,m.I)(N)`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-sidebar);
  max-width: 30.42rem;
  min-width: 30.42rem;
  overflow-y: hidden;
  padding: 0 0 3.286rem;

  input {
    width: auto !important;
  }

  .ui--AddressMenu-header {
    align-items: center;
    background: var(--bg-tabs);
    border-bottom: 1px solid var(--border-table);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.35rem 1rem 1rem 1rem;
  }

  .ui--AddressSection {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;

    .ui--AddressSection__AddressColumn {
      flex: 1;
      margin-left: 1rem;

      .ui--AccountName {
        max-width: 21.5rem;
        overflow: hidden;
        white-space: normal;
      }
    }

    .ui--AddressSection__CopyColumn {
      margin-left: 1rem;

      .ui--AccountName {
        max-width: 10rem;
        overflow: hidden;
      }
    }
  }

  .ui--AddressMenu-addr,
  .ui--AddressMenu-index {
    text-align: left;
    font-size: var(--font-size-small);
  }

  .ui--AddressMenu-addr {
    word-break: break-all;
    width: 24ch;
    margin: 0.571rem 0;
    color: var(--color-label);
  }

  .ui--AddressMenu-copyaddr,
  .ui--AddressMenu-index {
    text-align: left;
    font-size: var(--font-size-small);
  }

  .ui--AddressMenu-copyaaddr {
    word-break: break-all;
    width: 12ch;
    margin: 0.371rem 0;
    color: var(--color-label);
  }


  .ui--AddressMenu-index {
    display: flex;
    flex-direction: row;

    label {
      font-size: var(--font-size-small);
      margin-right: 0.4rem;
      text-transform: capitalize;
    }
  }

  section {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    .ui--AddressMenu-sectionHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: capitalize;

      margin-bottom: 0.57rem;
      width: 100%;

      color: var(--color-text);
      font-size: 1.143rem;
    }

    &.withDivider {
      padding-top: 1rem;

      ::before {
        position: absolute;
        top: 0;
        left: 0;

        content: '';
        width: 100%;
        height: 1px;
        background-color: var(--border-table);
      }
    }
  }

  .ui--AddressMenu-identity,
  .ui--AddressMenu-multisig {
    .ui--AddressMenu-identityTable,
    .ui--AddressMenu-multisigTable {
      font-size: var(--font-size-small);
      margin-top: 0.6rem;

      .tr {
        padding: 0.25rem 0;
        display: inline-flex;
        align-items: center;
        width: 100%;

        .th {
          text-transform: uppercase;
          color: var(--color-label);
          font-weight: var(--font-weight-normal);
          text-align: left;
          flex-basis: 25%;
          font-size: var(--font-size-tiny);

          &.top {
            align-self: flex-start;
          }
        }

        .td {
          flex: 1;
          overflow: hidden;
          padding-left: 0.6rem;
          text-overflow: ellipsis;
        }
      }

      .ui--AddressMini, .subs-number {
        margin-bottom: 0.4rem;
        padding: 0;
      }

      .subs-number {
        font-size: var(--font-size-base);
        margin-bottom: 0.714rem;
      }
    }

    .parent {
      padding: 0 !important;
    }
  }

  && .column {
    align-items: center;

    .ui--FormatBalance:first-of-type {
      margin-bottom: 0.4rem;
    }

    .ui--FormatBalance {
      line-height: 1rem;
    }
  }

  .ui--AddressMenu-buttons {
    .ui--Button-Group {
      margin-bottom: 0;
    }
  }

  .ui--AddressMenu-tags,
  .ui--AddressMenu-flags {
    margin: 0.75rem 0 0;
    width: 100%;
  }

  .ui--AddressMenu-identityIcon {
    background: ${E.I5}66;
  }

  .ui--AddressMenu-actions {
    ul {
      list-style-type: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 1rem;

      li {
        margin: 0.2rem 0;
      }
    }
  }

  .inline-icon {
    cursor: pointer;
    margin: 0 0 0 0.5rem;
    color: ${E.I5};
  }

  .name--input {
    .ui.input {
      margin: 0 !important;

      > input {
      }
    }
  }

  &.inEditMode {
    .ui--AddressMenu-flags {
      opacity: 60%;
    }
  }

  .ui--AddressMenu-multisig .th.signatories {
    align-self: flex-start;
  }

  .ui--ScrollSection {
    padding: 1rem;
    overflow: auto;
  }

  .ui--LinkSection {
    border-top: 1px solid var(--border-table);
    padding: 0.5rem 0 0.571rem;
    width: 100%;
    position: absolute;
    bottom: 0;

    span {
      margin: 0 0.5rem;
    }
  }
`,ca=s.memo(function({address:e,className:t="",dataTestId:n,onClose:i,onUpdateName:r}){const[o,l]=(0,s.useState)(!1),{accountIndex:d,flags:u,identity:m,meta:h}=(0,c.T)(e),p=(0,s.useRef)(null);return(0,a.jsxs)(la,{className:`${t}${o?" inEditMode":""}`,dataTestId:n,onClose:i,position:"right",sidebarRef:p,children:[(0,a.jsx)("div",{className:"ui--AddressMenu-header","data-testid":"sidebar-address-menu",children:(0,a.jsx)(oa,{accountIndex:d,address:e,isBeingEdited:l,onUpdateName:r,sidebarRef:p})}),(0,a.jsxs)("div",{className:"ui--ScrollSection",children:[(0,a.jsx)(we,{address:e}),(0,a.jsx)(qn,{address:e,identity:m}),(0,a.jsx)($n,{isMultisig:u.isMultisig,meta:h})]}),(0,a.jsx)("section",{className:"ui--LinkSection",children:(0,a.jsx)(f,{data:e,isSidebar:!0,type:"address"})})]})}),da=[null,null],ua=s.memo(function({children:e}){const[[t,n],i]=(0,s.useState)(da),r=(0,s.useCallback)(()=>i([null,null]),[]);return(0,a.jsxs)(l.P.Provider,{value:i,children:[e,t&&(0,a.jsx)(ca,{address:t,dataTestId:"account-sidebar",onClose:r,onUpdateName:n})]})});var ma=n(85199);const ha="5".padEnd(48,"x"),pa=(0,m.I)(ma.A)`
  button.u.ui--Icon.editButton {
    padding: 0 .3em .3em .3em;
    color: #2e86ab;
    background: none;
    /*trick to let the button in the flow but keep the content centered regardless*/
    margin-left: -2em;
    position: relative;
    right: -2.3em;
    z-index: 1;
  }

  .editSpan {
    white-space: nowrap;

    &:before {
      content: '';
    }
  }

  .ui--AddressRow-balances {
    display: flex;
    .column {
      display: block;

      label,
      .result {
        display: inline-block;
        vertical-align: middle;
      }
    }

    > span {
      text-align: left;
    }
  }

  .ui--AddressRow-placeholder {
    opacity: var(--opacity-light);
  }
`,ga=s.memo(function({buttons:e,children:t,className:n,defaultName:s,fullLength:i=!1,isContract:r=!1,isDisabled:o,isEditableName:l,isInline:d,isValid:u,overlay:m,value:h,withTags:p=!1}){const{accountIndex:g,isNull:f,name:b,onSaveName:A,onSaveTags:x,setName:v,setTags:w,tags:y}=(0,c.T)(h?h.toString():null,r),k=!f&&(u||h||g),j=h?Te:Se.Ay,C=h&&k?h:ha;return(0,a.jsxs)(pa,{address:C,buttons:e,className:n,defaultName:s,icon:(0,a.jsx)(j,{size:32,value:h?h.toString():null}),isDisabled:o,isEditableName:l,isEditableTags:!0,isInline:d,isShortAddr:!i,name:b,onChangeName:v,onChangeTags:w,onSaveName:A,onSaveTags:x,tags:p?y:void 0,children:[t,m]})}),fa=m.I.div`
  align-items: flex-start;
  border: 1px solid transparent; /* #eee */
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 0.125rem;
  padding: 0.125rem 0.25rem;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;

  .ui--AddressToggle-address {
    filter: grayscale(100%);
    opacity: var(--opacity-light);
  }

  &:hover {
    border-color: #ccc;
  }

  &.isHidden {
    display: none;
  }

  &.isDragging {
    background: white;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.15);
  }

  .ui--AddressToggle-address,
  .ui--AddressToggle-toggle {
    flex: 1;
    padding: 0;
  }

  .ui--AddressToggle-toggle {
    margin-top: 0.1rem;
    text-align: right;
  }

  &.isAye {
    .ui--AddressToggle-address {
      filter: none;
      opacity: 1;
    }
  }
`,ba=s.memo(function({address:e,className:t="",filter:n,isHidden:i,noToggle:o,onChange:l,value:c}){const{apiIdentity:d}=(0,u.g)(),m=(0,r.q)(e),h=(0,s.useMemo)(()=>!m||(0,z.j)(d,e,m,n,!1),[e,n,m,d]),p=(0,s.useCallback)(()=>l&&l(!c),[l,c]);return(0,a.jsxs)(fa,{className:`${t} ui--AddressToggle ${c||o?"isAye":"isNay"} ${i||!h?"isHidden":""}`,onClick:p,children:[(0,a.jsx)(He,{className:"ui--AddressToggle-address",value:e,withSidebar:!1}),!o&&(0,a.jsx)("div",{className:"ui--AddressToggle-toggle",children:(0,a.jsx)(Jn,{label:"",value:c})})]})}),Aa=s.memo(function({className:e="",label:t,params:n}){return n?(0,a.jsx)(Qn.A,{className:`${e} ui--Available`,label:t,params:n}):null});var xa=n(52662);const va=s.memo(function(){const{t:e}=(0,h.B)(),{api:t}=(0,u.g)();return(0,X.T)(t.tx.utility.batchAll)?null:(0,a.jsx)(Yn,{content:e("This chain does not yet support atomic batch operations. This means that if the transaction gets executed and one of the operations do fail (due to invalid data or lack of available funds) some of the changes made may not be applied.")})});s.memo(function({className:e="",isDisabled:t,label:n,onClick:s,tabIndex:i}){const{t:r}=(0,h.B)();return(0,a.jsx)(j,{className:e,icon:"times",isDisabled:t,label:n||r("Cancel"),onClick:s,tabIndex:i})});const wa=m.I.article`
  position: relative;
  flex: 1 1;
  min-width: 24%;
  justify-content: space-around;

  label {
    opacity: 0.42;
  }

  i.help.circle.icon,
  .ui.button.mini,
  .ui.button.tiny,
  .addTags {
    visibility: hidden;
  }

  .ui--AddressSummary-buttons {
    text-align: right;
    margin-bottom: 2em;

    button {
      margin-left: 0.2em;
    }
  }

  &:hover {
    i.help.circle.icon,
    .ui.button.mini,
    .ui.button.tiny,
    .addTags {
      visibility: visible;
    }

    label {
      opacity: 1;
    }
  }

  &.error {
    background: rgba(255, 0, 0, 0.05);

    &, h1, h2, h3, h4, h5, h6, p {
      color: rgba(156, 0, 0) !important;
    }
  }

  &.success {
    border: 1px solid rgb(168, 255, 136);
    background: rgba(0, 255, 0, 0.05);

    &, h1, h2, h3, h4, h5, h6, p {
      color: rgba(34, 125, 0) !important;
    }
  }

  &.withBottomMargin {
    margin-bottom: 1.5rem;
  }
`,ya=s.memo(function({children:e,className:t="",isError:n,isSuccess:s,withBottomMargin:i}){return(0,a.jsx)(wa,{className:`${t} ui--Card ${n&&!s?"error":""} ${!n&&s?"success":""} ${i?"withBottomMargin":""}`,children:e})});var ka=n(665);const ja=s.memo(function({angle:e,type:t}){return(0,a.jsx)("div",{className:`clip ${t}`,children:(0,a.jsx)("div",{className:"highlight--bg",style:{transform:`rotate(${e}deg)`}})})}),Ca="3.5rem",Na=m.I.div`
  border-radius: 100%;
  clip-path: circle(50%);
  height: ${Ca};
  position: relative;
  width: ${Ca};

  &.isDisabled {
    filter: grayscale(100%);
    opacity: 0.25;
  }

  .background,
  .clip {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .background {
    opacity: 0.125;
  }

  .inner {
    align-items: center;
    background: var(--bg-inverse);
    border-radius: 100%;
    bottom: 0.375rem;
    color: var(--color-summary);
    display: flex;
    justify-content: center;
    left: 0.375rem;
    position: absolute;
    right: 0.375rem;
    top: 0.375rem;

    div {
      font-size: var(--font-size-small);
      line-height: 1;
    }
  }

  .clip {
    div {
      border-radius: 100%;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      transform: rotate(0);
      top: 0;
      zoom: 1;
    }
  }

  .clip.first {
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);

    div {
      clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
    }
  }

  .clip.second {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);

    div {
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    }
  }
`,Ea=s.memo(function({className:e="",isBlurred:t,isDisabled:n,total:s,value:i}){const r=(0,ka.A)(s||0),o=r.gtn(0)?(0,ka.A)(i||0).muln(36e3).div(r).toNumber()/100:0;if(o<0)return null;const l=360===o?360:o%360;return(0,a.jsxs)(Na,{className:`${e} ui--Progress ${n?"isDisabled":""} ${t?"--tmp":""}`,children:[(0,a.jsx)("div",{className:"background highlight--bg"}),(0,a.jsx)(ja,{angle:l<=180?l.toFixed(1):"180",type:"first"}),(0,a.jsx)(ja,{angle:l<=180?"0":(l-180).toFixed(1),type:"second"}),(0,a.jsx)("div",{className:"inner",children:(0,a.jsxs)("div",{children:[Math.floor(100*o/360),"%"]})})]})}),Sa=m.I.article`
  align-items: center;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--color-summary);
  display: flex;
  flex: 0 1 auto;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 0 1.5rem;

  .ui--FormatBalance .balance-postfix {
    opacity: 1;
  }

  .ui--Progress {
    margin: 0.5rem 0.125rem 0.125rem 0.75rem;
  }

  > .ui--Labelled {
    font-size: var(--font-size-h1);
    font-weight: var(--font-weight-header);
    position: relative;
    line-height: 1;
    text-align: right;

    > .ui--Labelled-content {
      color: var(--color-header);
    }

    > * {
      margin: 0.25rem 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .isSecondary {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-normal);

      .timer {
        min-width: 8rem;
      }
    }
  }

  @media(max-width: 767px) {
    min-height: 4.8rem;
    padding: 0.25 0.4em;

    > div {
      font-size: 1.4rem;
    }
  }
`,Ia=s.memo(function({apiOverride:e,children:t,className:n="",label:s,progress:i}){const r=i?.value,o=i?.total,l=i&&!(0,Ut.b)(r)&&!(0,Ut.b)(o)&&r.gten(0)&&o.gtn(0)?r.gt(o)?`>${i.isPercent?"100":(0,M.Z)(o)}`:i.isPercent?r.mul(L.cM).div(o).toString():(0,M.Z)(r):void 0;if(i&&(0,Ut.b)(l))return null;const c=i&&i.withTime&&!(0,Ut.b)(i.total),d=(s??"").toString();return(0,a.jsxs)(Sa,{className:n,"data-testid":`card-summary:${d}`,children:[(0,a.jsxs)(Zt.A,{isSmall:!0,label:s,children:[t,i&&!i.hideValue&&(0,a.jsxs)(a.Fragment,{children:[c&&!t&&(0,a.jsx)(T.A,{api:e,className:i.isBlurred?"--tmp":"",value:i.total}),(0,a.jsx)("div",{className:c?"isSecondary":"isPrimary",children:!l||(0,Ut.b)(i.total)?"-":c&&!i.isPercent&&i.value?(0,a.jsx)(T.A,{api:e,className:(i.isBlurred?"--tmp":"")+" timer",value:i.total.sub(i.value)}):`${l}${i.isPercent?"":"/"}${i.isPercent?"%":(0,M.Z)(i.total)}`})]})]}),i&&!i.hideGraph&&(0,a.jsx)(Ea,{...i})]})});var Ba=n(19475),Fa=n(43826);const Ta=(0,m.I)(Jn)`
  text-align: right;
`,Da=s.memo(function({className:e="",genesisHash:t,isDisabled:n,onChange:i}){const{t:r}=(0,h.B)(),{api:o,isDevelopment:l}=(0,u.g)(),c=(0,s.useMemo)(()=>function(e,t){return!!t&&(Object.values(Fa.B).find(t=>t.includes(e))||[e]).includes(t)}(o.genesisHash.toHex(),t),[o,t]),d=(0,s.useCallback)(e=>i(e?o.genesisHash.toHex():null),[o,i]);return l?null:(0,a.jsx)(Ta,{className:e,isDisabled:n,label:r("only this network"),onChange:d,preventDefault:!0,value:c})});var La=n(54004),Ma=n(44085),Pa=n(85338),Va=n(12096);const za=m.I.div`
  position: relative;
  display: inline-block;
  padding: 1em 1em 0;
  height: 15vw;
  width: 15vw;
`,Ra=s.memo(function({children:e,className:t=""}){return(0,a.jsx)(za,{className:`${t} ui--Chart`,children:e})}),qa=s.memo(function({className:e="",size:t=100,values:n}){const s={colorHover:[],colorNormal:[],data:[],labels:[]};return n.forEach(({colors:[e="#00f",t],label:n,value:a})=>{s.colorNormal.push(e),s.colorHover.push(t||e),s.data.push((0,ka.A)(a).toNumber()),s.labels.push(n)}),(0,a.jsx)(Ra,{className:`${e} ui--Chart-Doughnut`,children:(0,a.jsx)(Va.nu,{data:{datasets:[{backgroundColor:s.colorNormal,data:s.data,hoverBackgroundColor:s.colorHover}],labels:s.labels},height:t,width:t})})});var $a=n(44734),Ua=n(27037);function Ha(e){return Ua.c(e).alpha(.65).rgbString()}const Qa=s.memo(function({aspectRatio:e=8,className:t="",max:n=100,showLabels:i=!1,values:r}){const[{chartData:o,chartOptions:l,jsonValues:c},d]=(0,s.useState)({});return(0,s.useEffect)(()=>{const t=JSON.stringify(r);t!==c&&d(function(e,t,n,a,s){return{chartData:t.reduce((e,{colors:[t="#00f",n],label:a,value:s})=>{const i=e.datasets[0];return i.backgroundColor.push(Ha(t)),i.hoverBackgroundColor.push(Ha(n||t)),i.data.push((0,$a.E)(s)?s:(0,ka.A)(s).toNumber()),e.labels.push(a),e},{datasets:[{backgroundColor:[],data:[],hoverBackgroundColor:[]}],labels:[]}),chartOptions:{aspectRatio:e,plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>t[e.dataIndex].tooltip||t[e.dataIndex].label}}},scales:{x:s?{beginAtZero:!0,max:a}:{display:!1}}},jsonValues:n}}(e,r,t,n,i))},[e,c,n,i,r]),o?(0,a.jsx)("div",{className:`${t} ui--Chart-HorizBar`,children:(0,a.jsx)(Va.yP,{data:o,height:null,options:l,width:null})}):null});var Oa=n(93302),Wa=n(16880);const Ga=["#ff8c00","#008c8c","#8c008c"],Ya={animation:{duration:0},elements:{point:{hoverRadius:6,radius:0}},hover:{intersect:!1},interaction:{intersect:!1,mode:"index"},plugins:{crosshair:{line:{color:"#ff8c00",dashPattern:[5,5],width:2},snap:{enabled:!0},sync:{enabled:!0},zoom:{enabled:!1}},legend:{display:!1},tooltip:{intersect:!1}},scales:{x:{ticks:{maxRotation:60,minRotation:60}}}},Ka=m.I.div`
  h1.ui--Chart-Header {
    margin-bottom: 0.25rem;
    margin-top: 1rem;
    padding-left: 0.25rem;
  }
`,Ja=s.memo(function({className:e="",colors:t,labels:n,legends:i,options:r,title:o,values:l}){const c=(0,s.useMemo)(()=>function(e={}){return(0,Oa.b)({},Ya,e,{plugins:(0,Oa.b)({},Ya.plugins,e.plugins,{annotation:(0,Oa.b)({},Ya.plugins?.annotation,e.plugins?.annotation),crosshair:(0,Oa.b)({},Ya.plugins?.crosshair,e.plugins?.crosshair),tooltip:(0,Oa.b)({},Ya.plugins?.tooltip,e.plugins?.tooltip)}),scales:(0,Oa.b)({},Ya.scales,e.scales,{x:(0,Oa.b)({},Ya.scales?.x,e.scales?.x),y:(0,Oa.b)({},Ya.scales?.y,e.scales?.y)})})}(r),[r]),d=(0,s.useMemo)(()=>function(e=[],t,n,a){return a.reduce((n,a,s)=>{const i=e[s]||Ha(Ga[s]),r=a.map(e=>(0,Wa.f)(e)?e.toNumber():e);return n.datasets.push({backgroundColor:i,borderColor:i,cubicInterpolationMode:"default",data:r,fill:!1,hoverBackgroundColor:i,label:t[s],lineTension:.25}),n},{datasets:[],labels:n})}(t,i,n,l),[t,n,i,l]);return(0,a.jsxs)(Ka,{className:`${e} ui--Chart-Line`,children:[o&&(0,a.jsx)("h1",{className:"ui--Chart-Header",children:o}),(0,a.jsx)(kn,{children:(0,a.jsx)(Va.N1,{data:d,options:c})})]})});La.t1.register(La.PP,La.kc,La.No,La.FN,La.hE,La.m_,Ma.A,function(e){const t=e.afterDraw;return t&&(e.afterDraw=function(e,n){e.crosshair&&t.call(this,e,n)}),e}(Pa.Ay));const Za={Doughnut:qa,HorizBar:Qa,Line:Ja},Xa=m.I.div`
  display: inline-block;
  cursor: pointer;

  &.isDisabled {
    opacity: 0.5;
  }

  &:not(.isDisabled) {
    cursor: pointer;
  }

  > label {
    color: var(--color-text);
    display: inline-block;
    margin: 0 0.5rem;
    opacity: 1;
    cursor: pointer;
    user-select: none;
  }

  > label,
  > .ui--Icon {
    vertical-align: middle;
  }

  .ui--Icon {
    border: 1px solid var(--color-checkbox);
    border-radius: 0.125rem;
  }
`,_a=s.memo(function({className:e="",isDisabled:t,label:n,onChange:i,value:r}){const o=(0,s.useCallback)(()=>{!t&&i&&i(!r)},[t,i,r]);return(0,a.jsxs)(Xa,{className:`${e} ui--Checkbox ${t?"isDisabled":""}`,onClick:o,children:[(0,a.jsx)(b.A,{color:r?"normal":"transparent",icon:"check"}),n&&(0,a.jsx)("label",{children:n})]})}),es="750px",ts="550px",ns="\n  display: flex;\n  flex-wrap: wrap;\n\n  &.is50 {\n    > .ui--Column {\n      max-width: 50%;\n      min-width: 50%;\n    }\n  }\n\n  &.is60 {\n    > .ui--Column:first-child {\n      max-width: 60%;\n      min-width: 60%;\n    }\n\n    > .ui--Column:last-child {\n      max-width: 40%;\n      min-width: 40%;\n    }\n  }\n\n  &.is100 {\n    > .ui--Column {\n      max-width: 100%;\n      min-width: 100%;\n    }\n  }\n",as=m.I.div`
  &.isReverse {
    flex-direction: row-reverse;
  }

  &.defaultSize {
    @media only screen and (min-width: ${"1025px"}) {
      ${ns}
    }

    &.isPadded > .ui--Column {
      padding: 0 0.75rem;
    }
  }

  &.smallSize {
    @media only screen and (min-width: ${es}) {
      ${ns}
    }

    &isPadded > .ui--Column {
      padding: 0 0.5rem;
    }
  }

  &.tinySize {
    @media only screen and (min-width: ${ts}) {
      ${ns}
    }

    &.isPadded > .ui--Column {
      padding: 0 0.25rem;
    }
  }

  &.defaultSize, &.smallSize {
    @media only screen and (max-width: ${es}) {
      &.isPadded > .ui--Column {
        padding: 0 0.5rem;
      }
    }
  }

  &.defaultSize, &.smallSize, &.tinySize {
    @media only screen and (max-width: ${ts}) {
      &.isPadded > .ui--Column {
        padding: 0 0.25rem;
      }
    }
  }

  > .ui--Column {
    box-sizing: border-box;
    max-width: 100%;
    flex: 1 1;
    margin: 0;
    width: 100%;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`,ss=s.memo(function({children:e,className:t="",is60:n,is100:s,isPadded:i=!0,isReverse:r,size:o="default"}){return(0,a.jsx)(as,{className:`${t} ui--Columar ${s?"is100":n?"is60":"is50"} ${i?"isPadded":""} ${r?"isReverse":""} ${o}Size`,children:e})});ss.Column=function({children:e,className:t=""}){return(0,a.jsx)("div",{className:`${t} ui--Column`,children:e})};const is=ss;var rs=n(47608),os=(n(96451),n(72251));const ls=m.I.div`
  .codeflask {
    border: 1px solid var(--border-input);
    background: transparent;
  }

  &.invalid {
    .codeflask {
      background-color: #fff6f6;
      border-color: #e0b4b4;
    }
  }
`,cs=s.memo(function({className:e="",code:t,isValid:n,onEdit:i}){const[r]=(0,s.useState)(()=>`flask-${Date.now()}`),o=(0,s.useRef)(null);return(0,s.useEffect)(()=>{const e=new os.A(`#${r}`,{language:"js",lineNumbers:!0});e.updateCode(t),e.editorRoot.addEventListener("keydown",()=>{e.onUpdate(i)}),o.current=e},[]),(0,s.useEffect)(()=>{o.current&&o.current.updateCode(t)},[t]),(0,a.jsx)(ls,{className:`${e} ui-Editor ${!1===n?"invalid":""}`,id:r})}),ds=m.I.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  border: 1px solid var(--border-table);
  border-radius: 4px;
  cursor: pointer;
`,us=s.memo(function({className:e="",expanded:t,onClick:n}){return(0,a.jsx)(ds,{className:`${e} ui--ExpandButton`,"data-testid":"row-toggle",onClick:n,children:(0,a.jsx)(b.A,{icon:t?"caret-up":"caret-down"})})});var ms=n(39573);const hs=(0,ye.F)("useWindowColumns",function(e=3){const t=Ct();return(0,ms.d)(e>=3&&t.width>=1500?3:e>=2&&t.width>=1050?2:1)}),ps=s.memo(function({children:e,className:t="",colSpan:n,label:s,labelPost:i,rowSpan:r,value:o,withLoading:l}){return(0,a.jsxs)("td",{className:`${t} ui--Table-Column-Balance number`,colSpan:n,rowSpan:r,children:[o?(0,a.jsx)(F.A,{label:s,labelPost:i,value:o}):l&&(0,a.jsx)(F.A,{className:"--tmp",value:1}),e]})}),gs=m.I.td`
  && {
    box-sizing: content-box;
    cursor: pointer;
    min-width: 1.7rem;
    padding-left: 0;
    text-align: left;
    width: 1.7rem;

    > div {
      align-items: center;
      border: 1px solid var(--border-table);
      border-radius: 4px;
      box-sizing: border-box;
      display: inline-flex;
      height: 1.7rem;
      justify-content: center;
      width: 1.7rem;
    }
  }
`,fs=s.memo(function({className:e="",colSpan:t,isExpanded:n,rowSpan:s,toggle:i}){return(0,a.jsx)(gs,{className:`${e} ui--Table-Column-Expand`,colSpan:t,onClick:i,rowSpan:s,children:(0,a.jsx)("div",{children:(0,a.jsx)(b.A,{icon:n?"caret-up":"caret-down"})})})}),bs=m.I.td`
  && {
    box-sizing: content-box;
    cursor: pointer;
    min-width: 1rem;
    padding-right: 0.35rem;
    text-align: right;
    width: 1rem;
  }
`,As=s.memo(function({address:e,className:t="",colSpan:n,isFavorite:i,rowSpan:r,toggle:o}){const l=(0,s.useCallback)(()=>o(e),[e,o]);return(0,a.jsx)(bs,{className:`${t} ui--Table-Column-Favorite`,colSpan:n,onClick:l,rowSpan:r,children:(0,a.jsx)(b.A,{color:i?"orange":"gray",icon:"star"})})}),xs=`${7.15.toFixed(3)}ch`,vs=m.I.td`
  && {
    box-sizing: content-box;
    min-width: ${xs};
    text-align: right;
    white-space: nowrap;
    width: ${xs};
`,ws=s.memo(function({children:e,className:t="",colSpan:n,rowSpan:s,value:i}){return(0,a.jsxs)(vs,{className:`${t} ui--Table-Column-Id`,colSpan:n,rowSpan:s,children:[(0,a.jsx)("h2",{className:"--digits",children:(0,M.Z)(i)}),e]})}),ys=s.memo(function({children:e,className:t=""}){return(0,a.jsx)("td",{className:`${t} ui--Table-Column`,children:e})});ys.Balance=ps,ys.Expand=fs,ys.Favorite=As,ys.Id=ws;const ks=ys,js=s.memo(function({children:e,className:t=""}){return(0,a.jsx)("tr",{className:`${t} ui--Table-Row`,children:e})}),Cs=s.memo(function({children:e,className:t="",empty:n,emptySpinner:s,isEmpty:i,noBodyTag:r}){const o=`${t} ui--Table-Body`;return i?(0,a.jsx)("tbody",{className:o,children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:100,children:(0,Gt.K)(n)?(0,a.jsx)("div",{className:"empty",children:n}):n||(0,a.jsx)(x,{label:s})})})}):r?(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsx)("tbody",{className:o,children:e})}),Ns=m.I.tfoot`
  td {
    color: var(--color-table-foot);
    font: var(--font-sans);
    font-weight: var(--font-weight-normal);
    padding: 0.75rem 1rem 0.25rem;
    text-align: right;
    vertical-align: baseline;
    white-space: nowrap;
  }

  tr {
    background: var(--bg-page);
  }
`,Es=s.memo(function({className:e="",footer:t,isEmpty:n}){return!t||n?null:(0,a.jsx)(Ns,{className:`${e} ui--Table-Foot`,children:t})}),Ss=m.I.thead`
  z-index: 1;

  th {
    background: var(--bg-table);
    font: var(--font-sans);
    font-weight: var(--font-weight-normal);
    padding: 0.375rem 1rem;
    text-align: right;
    vertical-align: middle;
    white-space: nowrap;

    h1 {
      display: table-cell;
      vertical-align: middle;

      .sub {
        display: inline-block;
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-normal);
        opacity: var(--opacity-light);
        padding-left: 1.5rem;
        text-overflow: ellipsis;
        vertical-align: middle;
      }
    }

    > label {
      margin: 0 !important;
    }

    &.address {
      padding-left: 3rem;
      text-align: left;
    }

    &.badge {
      padding: 0;
    }

    &.expand,
    &.number {
      text-align: right;
    }

    &.isClickable {
      cursor: pointer;
    }

    &.mini {
      padding: 0 !important;
    }

    &.no-pad-left {
      padding-left: 0.125rem;
    }

    &.no-pad-right {
      padding-right: 0.125rem;
    }

    &.start {
      text-align: left;
    }

    &.balances {
      text-align: right;
      padding-right: 2.25rem;
    }
  }

  tr {
    text-transform: lowercase;

    &.filter {
      .ui.input,
      .ui.selection.dropdown {
        background: transparent;

        &:first-child {
          margin-top: 0;
        }
      }

      th {
        padding: 0;
      }
    }

    &:not(.filter) {
      th {
        color: var(--color-table-head);
      }
    }
  }
`,Is=s.memo(function({children:e,className:t="",filter:n,header:s,isEmpty:i}){return s?.length?(0,a.jsxs)(Ss,{className:`${t} ui--Table-Head`,children:[n&&(0,a.jsx)("tr",{className:"filter",children:(0,a.jsx)("th",{colSpan:100,children:n})}),(0,a.jsx)("tr",{children:s.filter(e=>!!e).map(([e,t="default",n=1,s],r)=>(0,a.jsx)("th",{className:t,colSpan:n,onClick:s,children:0===r?(0,a.jsx)("h1",{children:e}):!i&&e&&(0,a.jsx)("label",{children:e})},r))}),e]}):null}),Bs={2:[0,1],3:[0,1,2]},Fs="0.125rem solid var(--bg-page)",Ts="0.25rem solid var(--bg-page)",Ds="0.5rem",Ls=m.I.div`
  max-width: 100%;
  width: 100%;

  .ui--Table-Split {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 1.5rem;

    > .ui--Table-Split-3 {
      max-width: 33.3%;
      min-width: 33.3%;
    }

    > .ui--Table-Split-2 {
      max-width: 50%;
      min-width: 50%;
    }
  }

  table {
    *border-collapse: collapse;
    border-spacing: 0;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 1;

    &.isFixed {
      table-layout: fixed;
    }

    &:not(.isInline):not(.noMargin) {
      margin-bottom: 1.5rem;
    }

    &.isInline {
      tbody tr td {
        border-top-width: 1px;
        padding: 0.25rem 0.75rem;
      }
    }

    tr {
      max-width: 100%;
      width: 100%;

      td,
      &:not(.filter) th {
        &:first-child {
          padding-left: 1.5rem;
        }

        &:last-child {
          padding-right: 0.75rem;
        }

        &.all {
          width: 100%;

          &:not(.overflow) {
            word-break: break-word;
          }

          summary {
            white-space: normal;
          }
        }
      }
    }
  }

  tbody, thead {
    position: relative;
    width: 100%;

    tr {
      width: 100%;
    }
  }

  tbody {
    position: relative;

    td {
      background: var(--bg-table);
      padding: 0.5rem 1rem;
      text-align: left;
      vertical-align: middle;

      > article.mark {
        margin-left: 0rem;
      }

      &:first-child {
        border-left: ${Fs};
      }

      &:last-child {
        border-right: ${Fs};
      }

      label {
        display: block !important;
        white-space: nowrap;
      }

      div.empty {
        opacity: var(--opacity-light);
        padding: 0.25rem;
      }

      .ui--Spinner {
        margin: 0 auto;

        .text {
          margin-bottom: 0;
        }
      }

      &.actions {
        padding-left: 0.35rem;
        width: 1%;

        > div {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          justify-content: flex-end;

          & > * + * {
            margin-left: 0.35rem;
          }

          .ui--Button {
            white-space: nowrap;
          }
        }

        &:not(:last-child) {
          padding-right: 0;
        }
      }

      &.address {
        max-width: 0;
        min-width: 15rem;
        overflow-x: hidden;
      }

      &.badge {
        padding: 0.5rem;
      }

      &.balance {
        min-width: 20rem;
        padding: 0.5rem 0 0.75rem;
      }

      &.button {
        padding: 0.25rem 0.35rem 0.5rem;
        text-align: right;
        white-space: nowrap;

        > * {
          vertical-align: middle;
        }

        .ui--Toggle {
          display: inline-block;
          white-space: nowrap;

          label {
            display: inline-block !important;
          }
        }
      }

      &.chart {
        padding: 0;
      }

      &.expand {
        &:not(.left) {
          text-align: right;
        }

        .ui--Expander + .ui--Expander {
          margin-top: 0.375rem;
        }
      }

      &.hash {
        // we actually want to use 10ch here, however in the
        // block expand page gives different sizes to the hashes
        min-width: 7.5rem;
        white-space: nowrap;

        > .shortHash {
          max-width: var(--width-shorthash);
          min-width: 3em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: var(--width-shorthash);
        }
      }

      &.links {
        padding: 0.5rem 0.75rem;
        text-align: center;
        width: 0;
      }

      &.no-pad-left {
        padding-left: 0.125rem;
      }

      &.no-pad-right {
        padding-right: 0.125rem;
      }

      &.no-pad-top {
        padding-top: 0.125rem;
      }

      &.no-pad {
        padding: 0;
      }

      &.number {
        font-variant-numeric: tabular-nums;
        text-align: right;
      }

      &.relative {
        position: relative;

        .absolute {
          position: absolute;
          right: 0.5rem;
          // this seems aligned with expander (when zoomed in)
          top: 0.72rem;
          white-space: nowrap;
        }
      }

      &.overflow {
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: none;
      }

      &.start {
        text-align: left;
      }

      &.together {
        white-space: nowrap;
      }

      &.top {
        vertical-align: top;
      }

      &.columar {
        vertical-align: top;

        .ui--Columar .ui--Column {
          margin: 1rem 0 0.75rem 0;
          padding: 0;

          * + h5 {
            margin-top: 1rem;
          }

          .ui--Chart-Line {
            padding: 0 0.5rem;
          }
        }
      }

      &.middle {
        text-align: center;
      }

      &.mini {
        padding: 0 !important;
        width: fit-content;
        white-space: normal;

        > div {
          margin-right: 0.75rem;
          max-width: 3.8rem;
          min-width: 3.8rem;
        }
      }

      &.upper {
        text-transform: uppercase;
      }

      .ui--Button-Group .ui--Button:not(.isToplevel) {
        margin: 0;
      }
    }

    tr {
      &:not(.isExpanded) {
        td {
          border-top: ${Ts};

          &:first-child {
            border-top-left-radius: ${Ds};
            border-bottom-left-radius: ${Ds};
          }

          &:last-child {
            border-top-right-radius: ${Ds};
            border-bottom-right-radius: ${Ds};
          }
        }
      }

      &.isExpanded {
        &.isFirst {
          td {
            border-top: ${Ts};

            &:first-child {
              border-top-left-radius: ${Ds};
            }

            &:last-child {
              border-top-right-radius: ${Ds};
            }
          }
        }

        &.isLast {
          td {
            &:first-child {
              border-bottom-left-radius: ${Ds};
            }

            &:last-child {
              border-bottom-right-radius: ${Ds};
            }
          }
        }
      }

      &.packedBottom {
        td {
          padding-bottom: 0;
        }
      }

      &.packedTop {
        td {
          padding-top: 0;
        }
      }

      &.packedAll {
        td {
          padding-bottom: 0;
          padding-top: 0;
        }
      }

      &.transparent {
        background: transparent;
      }

      &.isCollapsed {
        display: none;
      }

      .ui--Button-Group {
        margin: 0;
      }

      .ui--Button:not(.isIcon):not(:hover) {
        background: transparent !important;
        box-shadow: none !important;
      }

      .ui.toggle.checkbox input:checked ~ .box:before,
      .ui.toggle.checkbox input:checked ~ label:before {
        background-color: #eee !important;
      }
    }
  }

  thead {
    tr {
      &:first-child {
        th {
          border-top: ${Ts};

          &:first-child {
            border-top-left-radius: ${Ds};
          }

          &:last-child {
            border-top-right-radius: ${Ds};
          }
        }
      }

      &:last-child {
        th {
          padding-top: 1rem;

          &:first-child {
            border-bottom-left-radius: ${Ds};
          }

          &:last-child {
            border-bottom-right-radius: ${Ds};
          }
        }
      }

      th {
        &:first-child {
          border-left: ${Fs};
        }

        &:last-child {
          border-right: ${Fs};
        }
      }
    }
  }
`,Ms=s.memo(function({children:e,className:t="",empty:n,emptySpinner:s,filter:i,footer:r,header:o,headerChildren:l,isFixed:c,isInline:d,isSplit:u,legend:m,maxColumns:h,noBodyTag:p}){const g=hs(h),f=Array.isArray(e),b=!e||f&&0===e.length,A=(0,a.jsx)(Is,{filter:i,header:o,isEmpty:b,children:l});return u&&f&&!b&&1!==g?(0,a.jsxs)(Ls,{className:`${t} ui--Table isSplit`,children:[m,(0,a.jsx)("table",{className:"noMargin",children:A}),(0,a.jsx)("div",{className:"ui--Table-Split",children:Bs[g].map(t=>(0,a.jsx)("div",{className:`ui--Table-Split-${g}`,children:(0,a.jsx)("table",{className:"noMargin",children:(0,a.jsx)("tbody",{className:"ui--Table-Body",children:e.filter((e,n)=>n%g===t)})})},t))})]}):(0,a.jsxs)(Ls,{className:`${t} ui--Table`,children:[m,(0,a.jsxs)("table",{className:`${c&&!b?"isFixed":"isNotFixed"} ${d?"isInline":""}`,children:[A,(0,a.jsx)(Cs,{empty:n,emptySpinner:s,isEmpty:b,noBodyTag:p,children:e}),(0,a.jsx)(Es,{footer:r,isEmpty:b})]})]})});Ms.Column=ks,Ms.Row=js;const Ps=Ms;function Vs(e,t){return(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:e})},t)}const zs=(0,m.I)(W)`
  .tableContainer {
    overflow-y: scroll;
    display: block;
    margin: 0 0 0 auto;
    max-height: 13.75rem;
    max-width: 25rem;
    overflow-x: hidden;
  }
`,Rs=s.memo(function({children:e,className:t,empty:n,renderChildren:i,summary:r}){const o=(0,s.useMemo)(()=>!(!i&&!e),[e,i]),l=(0,s.useCallback)(()=>(i||e)&&(0,a.jsx)("div",{className:"tableContainer",children:(0,a.jsx)(Ps,{empty:n,isInline:!0,children:i?i()?.map(Vs):Array.isArray(e)?e.map(Vs):(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:e})})})}),[e,n,i]);return(0,a.jsx)(zs,{className:t,renderChildren:o?l:void 0,summary:r})}),qs=m.I.div`
  width: 29.5rem;

  .ui--Input {
    margin: 0;
    height: 3.893rem;
  }
`,$s=s.memo(function({className:e="",filterOn:t,label:n,setFilter:s}){return(0,a.jsx)(qs,{className:e,children:(0,a.jsx)(Vt.Ay,{autoFocus:!0,isFull:!0,label:n,onChange:s,value:t})})}),Us=m.I.div`
  display: none;
  right: calc(50% - var(--width-half) + 1.5rem);

  .ui--Labelled label {
    display: none;
  }

  && .ui--Input {
    margin: 0.29rem 0;
  }

  @media only screen and (min-width: 1150px) {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;

    > div {
      max-width: 35rem !important;
    }

    .ui--Labelled label {
      display: flex;
    }

    .ui.selection.dropdown {
      white-space: nowrap;
    }
  }

  /* hardcoded: var(--width-full) doesn't work in media */
  @media only screen and (max-width: 1750px) {
    right: 1.5rem;
  }
`,Hs=s.memo(function({children:e,className:t}){return(0,a.jsx)(Us,{className:t,children:e})});function Qs(e,t){switch(e){case"account":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:t("You are about to remove this account from your list of available accounts. Once completed, should you need to access it again, you will have to re-create the account either via seed or via a backup file.")}),(0,a.jsx)("p",{children:t("This operation does not remove the history of the account from the chain, nor any associated funds from the account. The forget operation only limits your access to the account on this browser.")})]});case"address":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:t("You are about to remove this address from your address book. Once completed, should you need to access it again, you will have to re-add the address.")}),(0,a.jsx)("p",{children:t("This operation does not remove the history of the account from the chain, nor any associated funds from the account. The forget operation only limits your access to the address on this browser.")})]});case"contract":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:t("You are about to remove this contract from your list of available contracts. Once completed, should you need to access it again, you will have to manually add the contract's address in the Instantiate tab.")}),(0,a.jsx)("p",{children:t("This operation does not remove the history of the contract from the chain, nor any associated funds from its account. The forget operation only limits your access to the contract on this browser.")})]});default:return null}}function Os(e,t){switch(e){case"account":return t("Confirm account removal");case"address":return t("Confirm address removal");case"contract":return t("Confirm contract removal");case"code":return t("Confirm code removal")}}function Ws(e,t){const{address:n,mode:s="account"}=e;switch(s){case"account":case"address":case"contract":return(0,a.jsx)(ga,{isInline:!0,value:n||"",children:Qs(s,t)});default:return null}}const Gs=s.memo(function(e){const{t}=(0,h.B)(),{children:n,mode:s="account",onClose:i,onForget:r}=e;return(0,a.jsxs)(Mn,{className:"app--accounts-Modal",header:Os(s,t),onClose:i,children:[(0,a.jsx)(Mn.Content,{children:n||Ws(e,t)}),(0,a.jsx)(Mn.Actions,{children:(0,a.jsx)(j,{icon:"trash",label:t("Forget"),onClick:r})})]})});var Ys=n(47025);const Ks=[n(70801).A],Js=m.I.div`
  .help-button {
    color: var(--color-text);
    cursor: pointer;
    font-size: 2rem;
    padding: 0.35rem 1.5rem 0 0;
  }

  > .help-button {
    position: absolute;
    right: 0rem;
    top: 0rem;
    z-index: 10;
  }

  .help-slideout {
    background: var(--bg-page);
    box-shadow: -6px 0px 20px 0px rgba(0, 0, 0, 0.3);
    bottom: 0;
    max-width: 50rem;
    overflow-y: scroll;
    position: fixed;
    right: -50rem;
    top: 0;
    transition-duration: .5s;
    transition-property: all;
    z-index: 225; /* 5 more than menubar */

    .help-button {
      text-align: right;
    }

    .help-content {
      padding: 1rem 1.5rem 5rem;
    }

    &.open {
      right: 0;
    }
  }
`;s.memo(function({className:e="",md:t}){const[n,s]=(0,Q.e)();return(0,a.jsxs)(Js,{className:`${e} ui--HelpOverlay`,children:[(0,a.jsx)("div",{className:"help-button",children:(0,a.jsx)(b.A,{icon:"question-circle",onClick:s})}),(0,a.jsxs)("div",{className:"help-slideout "+(n?"open":"closed"),children:[(0,a.jsx)("div",{className:"help-button",children:(0,a.jsx)(b.A,{icon:"times",onClick:s})}),(0,a.jsx)(Ys.oz,{className:"help-content",rehypePlugins:Ks,children:t})]})]})});const Zs=(0,m.I)(Zt.A)`
  background: white;
  border-radius: 0 0 0.25rem 0.25rem;
  margin: -0.5rem 0 0.25rem;
  padding: 1.25rem 1.5rem 1rem;

  &.error {
    background: #db2828;
    color: #eee;
  }

  &.warning {
    background: #ffffe0;
  }

  > ul {
    margin: 0;
    padding: 0;
  }
`,Xs=s.memo(function({children:e,className:t="",type:n="info"}){return(0,a.jsx)(Zs,{children:(0,a.jsx)("div",{className:`${t} ${n}`,children:e})})});var _s=n(88274);const ei=s.memo(function({address:e,filter:t,isHidden:n,onSelect:i}){const r=(0,s.useCallback)(()=>i(e),[e,i]);return n?null:(0,a.jsx)(ba,{address:e,filter:t,noToggle:!0,onChange:r})}),ti=s.memo(function({address:e,filter:t,isHidden:n,onDeselect:i}){const r=(0,s.useCallback)(()=>i(e),[e,i]);return n?null:(0,a.jsx)(ba,{address:e,filter:t,noToggle:!0,onChange:r})}),ni=m.I.div`
  border-top-width: 0px;
  margin-left: 2rem;
  width: calc(100% - 2rem);

  .ui--InputAddressMulti-Input {
    .ui.input {
      margin-bottom: 0.25rem;
      opacity: 1 !important;
    }
  }

  .ui--InputAddressMulti-columns {
    display: inline-flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;

    .ui--InputAddressMulti-column {
      display: flex;
      flex-direction: column;
      min-height: 15rem;
      max-height: 15rem;
      width: 50%;
      padding: 0.25rem 0.5rem;

      .ui--InputAddressMulti-items {
        padding: 0.5rem 0;
        background: var(--bg-input);
        border: 1px solid var(--border-input);
        border-radius: 0.286rem 0.286rem;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;

        .ui--Spinner {
          margin-top: 2rem;
        }

        .ui--AddressToggle {
          padding-left: 0.75rem;
        }

        .ui--AddressMini-address {
          min-width: auto;
          max-width: 100%;
        }

        .ui--AddressMini-info {
          max-width: 100%;
        }
      }
    }
  }
`,ai=s.memo(function({available:e,availableLabel:t,className:n="",defaultValue:i,maxCount:r,onChange:o,valueLabel:l}){const{t:c}=(0,h.B)(),[d,u]=(0,s.useState)(""),[m,p]=(0,s.useState)([]),g=(0,ms.d)(d),f=(0,_s.O)();(0,s.useEffect)(()=>{i&&p(i)},[i]),(0,s.useEffect)(()=>{m&&o(m)},[o,m]);const b=(0,s.useCallback)(e=>p(t=>function(e,t,n){return!e.includes(t)&&e.length<n?e.concat(t):e}(t,e,r)),[r]),A=(0,s.useCallback)(e=>p(t=>function(e,t){return e.includes(t)?e.filter(e=>e!==t):e}(t,e)),[]);return(0,a.jsxs)(ni,{className:`${n} ui--InputAddressMulti`,children:[(0,a.jsx)(Vt.Ay,{autoFocus:!0,className:"ui--InputAddressMulti-Input",isSmall:!0,onChange:u,placeholder:c("filter by name, address, or account index"),value:d,withLabel:!1}),(0,a.jsxs)("div",{className:"ui--InputAddressMulti-columns",children:[(0,a.jsxs)("div",{className:"ui--InputAddressMulti-column",children:[(0,a.jsx)("label",{children:l}),(0,a.jsx)("div",{className:"ui--InputAddressMulti-items",children:m.map(e=>(0,a.jsx)(ti,{address:e,onDeselect:A},e))})]}),(0,a.jsxs)("div",{className:"ui--InputAddressMulti-column",children:[(0,a.jsx)("label",{children:t}),(0,a.jsx)("div",{className:"ui--InputAddressMulti-items",children:f?e.map(e=>(0,a.jsx)(ei,{address:e,filter:g,isHidden:m?.includes(e),onSelect:b},e)):(0,a.jsx)(x,{})})]})]})]})}),si=m.I.div`
  position: relative;

  .ui--InputAddressSimpleIcon {
    background: #eee;
    border: 1px solid #888;
    border-radius: 50%;
    left: 0.75rem;
    position: absolute;
    top: 1rem;
  }
`,ii=s.memo(function({autoFocus:e,bytesLength:t,children:n,className:i="",defaultValue:r,forceIconType:o,isDisabled:l,isError:c,isFull:d,label:u,noConvert:m,onChange:h,onEnter:p,onEscape:g,placeholder:f}){const[b,A]=(0,s.useState)(r||null),x=(0,s.useCallback)(e=>{const n=(0,z.ch)(e,void 0,t)||null,a=m?n?e:null:n;A(a),h&&h(a)},[t,m,h]);return(0,a.jsxs)(si,{className:`${i} ui--InputAddressSimple`,children:[(0,a.jsx)(Vt.Ay,{autoFocus:e,defaultValue:r,isDisabled:l,isError:c||!b,isFull:d,label:u,onChange:x,onEnter:p,onEscape:g,placeholder:f,children:n}),(0,a.jsx)(Te,{className:"ui--InputAddressSimpleIcon",forceIconType:o,size:32,value:b})]})}),ri=m.I.div`
  .ui--DropdownLinked-Items {
    .text {
      box-sizing: border-box;
      display: flex !important;
      flex-wrap: nowrap;
      justify-content: space-between;
      overflow: hidden;
      position: relative;
      width: 100%;
      white-space: nowrap;
    }

    > .text {
      padding-left: 1em;
    }
  }

  .ui--DropdownLinked-Item-text,
  .ui--DropdownLinked-Item-call {
    display: inline-block;
  }

  .ui--DropdownLinked-Item-call {
    flex: 1 0;
    margin-right: 1rem;
    text-align: left;
    text-overflow: ellipsis;
  }

  .ui--DropdownLinked-Item-text {
    flex: 1;
    font-size: var(--font-size-small);
    opacity: var(--opacity-light);
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
  }

  > .ui--Labelled > label {
    text-transform: none;
  }
`,oi=s.memo(function({children:e,className:t="",label:n,withLabel:s}){return(0,a.jsx)(ri,{className:t,children:(0,a.jsx)(Zt.A,{label:n,withLabel:s,children:(0,a.jsx)("div",{className:"ui--DropdownLinked ui--row",children:e})})})});function li(e,t){if(!t)return[];const n=e[t];return n&&0!==Object.keys(e[t]).length?Object.keys(e[t]).filter(e=>!e.startsWith("$")).sort().map(e=>n[e]).map(({description:e,method:n,params:s})=>{const i=s.map(({name:e})=>e).join(", ");return{className:"ui--DropdownLinked-Item",key:`${t}_${n}`,text:[(0,a.jsxs)("div",{className:"ui--DropdownLinked-Item-call",children:[n,"(",i,")"]},`${t}_${n}:call`),(0,a.jsx)("div",{className:"ui--DropdownLinked-Item-text",children:e||n},`${t}_${n}:text`)],value:n}}):[]}const ci=s.memo(function({className:e="",defs:t,isError:n,onChange:i,options:r,value:o}){const l=(0,s.useCallback)(e=>t[o.section][e],[t,o]);return r.length?(0,a.jsx)(Pt.A,{className:`${e} ui--DropdownLinked-Items`,isError:n,onChange:i,onSearch:z.As,options:r,transform:l,value:o.method,withLabel:!1}):null}),di=s.memo(function({className:e="",defaultValue:t,isError:n,onChange:s,options:i,value:r}){return(0,a.jsx)(Pt.A,{className:`${e} ui--DropdownLinked-Sections`,defaultValue:t,isError:n,onChange:s,onSearch:z.As,options:i,value:r.section,withLabel:!1})});function ui(e){return Object.entries(e).sort(([e],[t])=>e.localeCompare(t))}const mi=(0,ye.F)("useRuntime",function(){const{api:e}=(0,u.g)();return(0,s.useMemo)(()=>function(e){const t={};let n=null;const a=ui(e.call);for(let e=0,s=a.length;e<s;e++){const[s,i]=a[e],r=ui(i);for(let e=0,a=r.length;e<a;e++){const[a,{meta:i}]=r[e];i&&(t[s]||(t[s]={},null===n&&(n=i)),t[s][a]=i)}}return[t,n]}(e),[e])}),hi=s.memo(function({className:e,label:t,onChange:n,withLabel:i}){const[r,o]=mi(),[l]=(0,s.useState)(()=>{return e=r,Object.keys(e).filter(e=>!e.startsWith("$")).sort().filter(t=>0!==Object.keys(e[t]).length).map(e=>({text:e,value:e}));var e}),[c,d]=(0,s.useState)(()=>li(r,o?.section)),[u,m]=(0,s.useState)(()=>o);(0,s.useEffect)(()=>{u&&n&&n(u)},[n,u]);const h=(0,s.useCallback)(e=>{u!==e&&m(()=>e)},[u]),p=(0,s.useCallback)(e=>{if(u&&e!==u.section){const t=li(r,e);d(t),h(r[e][t[0].value])}},[h,r,u]);return u?(0,a.jsxs)(oi,{className:e,label:t,withLabel:i,children:[(0,a.jsx)(di,{className:"small",onChange:p,options:l,value:u}),(0,a.jsx)(ci,{className:"large",defs:r,onChange:h,options:c,value:u})]}):null});var pi=n(96620);function gi(e,t){const n=e.consts[t];return n&&0!==Object.keys(n).length?Object.keys(n).filter(e=>!e.startsWith("$")).sort().map(s=>{const i=n[s];return{className:"ui--DropdownLinked-Item",key:`${t}_${s}`,text:[(0,a.jsxs)("div",{className:"ui--DropdownLinked-Item-call",children:[s,": ",(0,pi.m)(e.registry.lookup,i.meta.type)]},`${t}_${s}:call`),(0,a.jsx)("div",{className:"ui--DropdownLinked-Item-text",children:(i.meta.docs[0]||i.meta.name).toString()},`${t}_${s}:text`)],value:s}}):[]}function fi({value:e}){return t=>({method:t,section:e.section})}const bi=s.memo(function(e){const{className:t="",isError:n,onChange:s,options:i,value:r}=e;return i.length?(0,a.jsx)(Pt.A,{className:`${t} ui--DropdownLinked-Items`,isError:n,onChange:s,onSearch:z.As,options:i,transform:fi(e),value:r.method,withLabel:!1}):null}),Ai=s.memo(function({className:e="",defaultValue:t,isError:n,onChange:s,options:i,value:{section:r}}){return(0,a.jsx)(Pt.A,{className:`${e} ui--DropdownLinked-Sections`,defaultValue:t,isError:n,onChange:s,onSearch:z.As,options:i,value:r,withLabel:!1})}),xi=s.memo(function({className:e="",defaultValue:t,label:n,onChange:i,withLabel:r}){const{api:o}=(0,u.g)(),[l,c]=(0,s.useState)(()=>gi(o,t.section)),[d]=(0,s.useState)(()=>function(e){return Object.keys(e.consts).filter(e=>!e.startsWith("$")).sort().filter(t=>Object.keys(e.consts[t]).length).map(e=>({text:e,value:e}))}(o)),[m,h]=(0,s.useState)(()=>function(e,{method:t,section:n}){const a=Object.keys(e.consts)[0],s=Object.keys(e.consts[a])[0],i=e.consts[n]?.[t]?{method:t,section:n}:{method:s,section:a};return{...i,meta:e.consts[i.section][i.method].meta}}(o,t)),p=(0,s.useCallback)(e=>{if(m.section!==e.section||m.method!==e.method){const{method:t,section:n}=e,a={meta:o.consts[n][t].meta,method:t,section:n};h(a),i&&i(a)}},[o,i,m]),g=(0,s.useCallback)(e=>{if(e!==m.section){const t=gi(o,e);c(t),p({method:t[0].value,section:e})}},[p,o,m]);return(0,a.jsxs)(oi,{className:e,label:n,withLabel:r,children:[(0,a.jsx)(Ai,{className:"small",onChange:g,options:d,value:m}),(0,a.jsx)(bi,{className:"large",onChange:p,options:l,value:m})]})});function vi(e,t,n){const s=e.tx[t],i=!n||n(t);return s&&0!==Object.keys(s).length&&i?Object.keys(s).filter(e=>!e.startsWith("$")&&(!n||n(t,e))).sort().map(e=>{const n=s[e],i=n.meta.args.map(e=>e.name.toString()).join(", ");return{className:"ui--DropdownLinked-Item",key:`${t}_${e}`,text:[(0,a.jsxs)("div",{className:"ui--DropdownLinked-Item-call",children:[e,"(",i,")"]},`${t}_${e}:call`),(0,a.jsx)("div",{className:"ui--DropdownLinked-Item-text",children:(n.meta.docs[0]||e).toString()},`${t}_${e}:text`)],value:e}}):[]}const wi=s.memo(function({api:e,className:t="",defaultValue:n,isDisabled:i,isError:r,onChange:o,options:l,value:c}){const d=(0,s.useCallback)(t=>e.tx[c.section][t],[e,c]);return l.length?(0,a.jsx)(Pt.A,{className:`${t} ui--DropdownLinked-Items`,defaultValue:n,isDisabled:i,isError:r,onChange:o,onSearch:z.As,options:l,transform:d,value:c.method,withLabel:!1}):null}),yi=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:s,onChange:i,options:r,value:o}){return(0,a.jsx)(Pt.A,{className:`${e} ui--DropdownLinked-Sections`,defaultValue:t,isDisabled:n,isError:s,onChange:i,onSearch:z.As,options:r,value:o.section,withLabel:!1})}),ki=s.memo(function({className:e="",defaultValue:t,filter:n,isDisabled:i,label:r,onChange:o,withLabel:l}){const{api:c}=(0,u.g)(),[d,m]=(0,s.useState)(()=>vi(c,t.section,n)),[h]=(0,s.useState)(()=>function(e,t){return Object.keys(e.tx).filter(e=>!e.startsWith("$")&&(!t||t(e))).sort().filter(t=>Object.keys(e.tx[t]).length).map(e=>({text:e,value:e}))}(c,n)),[p,g]=(0,s.useState)(()=>t),[{defaultMethod:f,defaultSection:b}]=(0,s.useState)(()=>({defaultMethod:t.method,defaultSection:t.section})),A=(0,s.useCallback)(e=>{p!==e&&(g(()=>e),o&&o(e))},[o,p]),x=(0,s.useCallback)(e=>{if(e!==p.section){const t=vi(c,e,n);m(t),A(c.tx[e][t[0].value])}},[A,c,n,p]);return(0,a.jsxs)(oi,{className:e,label:r,withLabel:l,children:[(0,a.jsx)(yi,{className:"small",defaultValue:b,isDisabled:i,onChange:i?void 0:x,options:h,value:p}),(0,a.jsx)(wi,{api:c,className:"large",defaultValue:f,isDisabled:i,onChange:i?void 0:A,options:d,value:p})]})});var ji=n(12211),Ci=n(73108),Ni=n(59540);const Ei="0".charCodeAt(0),Si="x".charCodeAt(0),Ii=()=>{},Bi=m.I.div`
  background: var(--bg-input);
  border: 1px solid var(--border-input);
  border-radius: 0.28571429rem;
  font-size: var(--font-size-base);
  margin: 0.25rem 0;
  padding: 0.67857143em 1em;
  width: 100% !important;

  &.error {
    background: var(--bg-input-error);
    border-color: #e0b4b4;
  }

  &:hover {
    cursor: pointer;
  }
`,Fi=s.memo(function({accept:e,className:t="",clearContent:n,isDisabled:i,isError:r=!1,isFull:o,label:l,labelExtra:c,onChange:d,placeholder:u,withEllipsis:m,withLabel:p}){const{t:g}=(0,h.B)(),f=(0,s.createRef)(),[b,A]=(0,s.useState)(),x=(0,s.useCallback)(e=>{e.forEach(e=>{const t=new FileReader;t.onabort=Ii,t.onerror=Ii,t.onload=({target:t})=>{if(t?.result){const n=e.name,a=function(e){const t=new Uint8Array(e);if(t[0]===Ei&&t[1]===Si){let e=(0,Ci.F)(t);for(;e.endsWith("\n");)e=e.substring(0,e.length-1);if((0,Ne.qv)(e))return(0,Ni.V)(e)}return t}(t.result);d&&d(a,n),f&&A({name:n,size:a.length})}},t.readAsArrayBuffer(e)})},[f,d]),{getInputProps:v,getRootProps:w}=(0,ji.VB)({accept:e?.reduce((e,t)=>({...e,[t]:[]}),{}),disabled:i,onDrop:x}),y=(0,a.jsxs)(Bi,{...w({className:`${t} ui--InputFile ${r?"error":""}`}),children:[(0,a.jsx)("input",{...v()}),(0,a.jsx)("em",{className:"label",children:!b||n?u||g("click to select or drag and drop the file here"):u||g("{{name}} ({{size}} bytes)",{replace:{name:b.name,size:(0,M.Z)(b.size)}})})]});return l?(0,a.jsx)(Zt.A,{isFull:o,label:l,labelExtra:c,withEllipsis:m,withLabel:p,children:y}):y});var Ti=n(11172);function Di(e,t,n){const s=t[n];return s&&0!==Object.keys(e.rpc[n]).length?Object.keys(e.rpc[n]).filter(e=>!e.startsWith("$")).sort().map(e=>s[e]).filter(e=>!!e).filter(({isSubscription:e})=>!e).map(({description:e,method:t,params:s})=>{const i=s.map(({name:e})=>e).join(", ");return{className:"ui--DropdownLinked-Item",key:`${n}_${t}`,text:[(0,a.jsxs)("div",{className:"ui--DropdownLinked-Item-call",children:[t,"(",i,")"]},`${n}_${t}:call`),(0,a.jsx)("div",{className:"ui--DropdownLinked-Item-text",children:e||t},`${n}_${t}:text`)],value:t}}):[]}var Li=n(28414),Mi=n(20091);const Pi=(0,ye.F)("useRpcs",function(){const{api:e}=(0,u.g)();return(0,s.useMemo)(()=>function(e,t,{specName:n}){return Object.entries((0,Mi.V3)(e,t,n)).reduce((e,[t,n])=>(e[t]??=function(e,t){return Object.entries(t).reduce((t,[n,a])=>(t[n]={isSubscription:!1,jsonrpc:`${e}_${n}`,method:n,section:e,...a},t),{})}(t,n),e),{...Li.A})}(e.registry,e.runtimeChain,e.runtimeVersion),[e])}),Vi=s.memo(function({className:e="",isError:t,onChange:n,options:i,value:r}){const o=Pi(),l=(0,s.useCallback)(e=>o[r.section][e],[o,r]);return i.length?(0,a.jsx)(Pt.A,{className:`${e} ui--DropdownLinked-Items`,isError:t,onChange:n,onSearch:z.As,options:i,transform:l,value:r.method,withLabel:!1}):null}),zi=s.memo(function({className:e="",defaultValue:t,isError:n,onChange:s,options:i,value:r}){return(0,a.jsx)(Pt.A,{className:`${e} ui--DropdownLinked-Sections`,defaultValue:t,isError:n,onChange:s,onSearch:z.As,options:i,value:r.section,withLabel:!1})}),Ri=s.memo(function({className:e="",defaultValue:t,label:n,onChange:i,withLabel:r}){const{api:o}=(0,u.g)(),l=Pi(),[c,d]=(0,s.useState)(()=>Di(o,l,t.section)),[m]=(0,s.useState)(()=>function(e){return Object.keys(e.rpc).filter(e=>!e.startsWith("$")).sort().filter(t=>0!==Object.keys(e.rpc[t]).length).map(e=>({text:e,value:e}))}(o)),[h,p]=(0,s.useState)(()=>t);(0,s.useEffect)(()=>{i&&i(h)},[i,h]);const g=(0,s.useCallback)(e=>{h!==e&&p(()=>e)},[h]),f=(0,s.useCallback)(e=>{if(e!==h.section){const t=Di(o,l,e);d(t),g(l[e][t[0].value])}},[g,o,l,h]);return(0,a.jsxs)(oi,{className:e,label:n,withLabel:r,children:[(0,a.jsx)(zi,{className:"small",onChange:f,options:m,value:h}),(0,a.jsx)(Vi,{className:"large",onChange:g,options:c,value:h})]})});var qi=n(94250);function $i(e,t){const n=e.query[t];return n&&0!==Object.keys(n).length?Object.keys(n).filter(e=>!e.startsWith("$")).sort().map(s=>{const{meta:{docs:i,modifier:r,name:o,type:l}}=n[s],c=(0,qi.f)(e.registry,l,r.isOptional);let d="";if(l.isMap){const{hashers:t,key:n}=l.asMap;if(1===t.length)d=(0,pi.m)(e.registry.lookup,n);else{const t=e.registry.lookup.getSiType(n).def;d=t.isTuple?t.asTuple.map(t=>(0,pi.m)(e.registry.lookup,t)).join(", "):t.asHistoricMetaCompat.toString()}}return{className:"ui--DropdownLinked-Item",key:`${t}_${s}`,text:[(0,a.jsxs)("div",{className:"ui--DropdownLinked-Item-call",children:[s,"(",d,"): ",c]},`${t}_${s}:call`),(0,a.jsx)("div",{className:"ui--DropdownLinked-Item-text",children:(i[0]||o).toString()},`${t}_${s}:text`)],value:s}}):[]}function Ui(e,{value:t}){return function(n){return e.query[t.creator.section]?e.query[t.creator.section][n]:t}}const Hi=s.memo(function(e){const{api:t}=(0,u.g)(),{className:n="",isError:s,onChange:i,options:r,value:o}=e;return r.length?(0,a.jsx)(Pt.A,{className:`${n} ui--DropdownLinked-Items`,isError:s,onChange:i,onSearch:z.As,options:r,transform:Ui(t,e),value:o.creator.method,withLabel:!1}):null}),Qi=s.memo(function({className:e="",defaultValue:t,isError:n,onChange:s,options:i,value:{creator:{section:r}}}){return(0,a.jsx)(Pt.A,{className:`${e} ui--DropdownLinked-Sections`,defaultValue:t,isError:n,onChange:s,onSearch:z.As,options:i,value:r,withLabel:!1})}),Oi=s.memo(function({className:e="",defaultValue:t,label:n,onChange:i,withLabel:r}){const{api:o}=(0,u.g)(),[l,c]=(0,s.useState)(()=>$i(o,t.creator.section)),[d]=(0,s.useState)(()=>function(e){return Object.keys(e.query).filter(e=>!e.startsWith("$")).sort().filter(t=>Object.keys(e.query[t]).length).map(e=>({text:e,value:e}))}(o)),[m,h]=(0,s.useState)(()=>t),p=(0,s.useCallback)(e=>{m!==e&&(h(()=>e),i&&i(e))},[i,m]),g=(0,s.useCallback)(e=>{if(e!==m.creator.section){const t=$i(o,e);c(t),p(o.query[e][t[0].value])}},[p,o,m]);return(0,a.jsxs)(oi,{className:e,label:n,withLabel:r,children:[(0,a.jsx)(Qi,{className:"small",onChange:g,options:d,value:m}),(0,a.jsx)(Hi,{className:"large",onChange:p,options:l,value:m},m.creator.section)]})});n(15308);var Wi=n(3236),Gi=n(23100);const Yi=["application/wasm"],Ki=s.memo(function({onChange:e,...t}){const n=(0,s.useCallback)((t,n)=>{const a=(0,Wi.H)(t);e((0,Gi.h)(t),a,n)},[e]);return(0,a.jsx)(Fi,{...t,accept:Yi,onChange:n})});var Ji=n(92100);const Zi=(0,m.I)(Zt.A)`
  .ui.selection.dropdown.ui--output.isDisabled {
    background: transparent;
    border-style: dashed;
    opacity: 1;
  }

  pre {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Xi=s.memo(function({children:e,className:t="",isDisabled:n,isError:s,isFull:i,isHidden:r,isMonospace:o,isSmall:l,isTrimmed:c,label:d,labelExtra:u,value:m,withCopy:h=!1,withLabel:p}){return(0,a.jsxs)(Zi,{className:`${t} ui--Output`,isFull:i,isHidden:r,isSmall:l,label:d,labelExtra:u,withLabel:p,children:[(0,a.jsxs)("div",{className:`ui--output ui dropdown selection ${s?" error":""}${o?" monospace":""}${n?"isDisabled":""}`,children:[c&&(0,Gt.K)(m)&&m.length>512?`${m.slice(0,256)}…${m.slice(-256)}`:m,e]}),h&&(0,a.jsx)(Jt,{value:m})]})});function _i({inner:e=[],name:t="",outer:n=[]},a=[]){if(n.length){const e=new Array(n.length);for(let t=0;t<n.length;t++)e[t]=(0,Ji.X)(n[t],void 0,!1);a.push({name:t,value:e.join(" ")})}for(let t=0,n=e.length;t<n;t++)_i(e[t],a);return a}const er=(0,m.I)(Xi)`
  table {
    width: 100%;

    tbody {
      width: 100%;

      tr {
        width: 100%;

        td {
          vertical-align: top;
        }

        td:first-child {
          text-align: right;
          vertical-align: middle;
          white-space: nowrap;

          label {
            padding: 0 0.5rem 0 1.25rem;
          }
        }

        &:not(.isLink) td:last-child {
          font: var(--font-mono);
          width: 100%;
        }

        &.isLink td {
          &:last-child {
            max-width: 0;
          }

          a {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
`,tr=s.memo(function({className:e,hex:t,inspect:n,label:i}){const{t:r}=(0,h.B)(),{createLink:o}=(0,u.g)(),l=(0,s.useMemo)(()=>n&&_i(n),[n]),[c,d]=(0,s.useMemo)(()=>{if(t){const e=`/extrinsics/decode/${t}`;return[o(e),`#${e}`]}return[null,null]},[o,t]);return l?(0,a.jsx)(er,{className:e,isDisabled:!0,label:i,children:(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[l.map(({name:e,value:t},n)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("label",{children:e})}),(0,a.jsx)("td",{children:t})]},n)),c&&(0,a.jsxs)("tr",{className:"isLink",children:[(0,a.jsx)("td",{children:(0,a.jsx)("label",{children:r("link")})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:c,rel:"noreferrer",target:"_blank",children:d})})]},"hex")]})})}):null});let nr=0;const ar=m.I.div`
  cursor: help;
  display: inline-block;
  line-height: 1rem;
  margin: 0 0 0 0.25rem;
`,sr=s.memo(function({className:e="",help:t,icon:n="question-circle"}){const[i]=(0,s.useState)(()=>"label-help-"+ ++nr);return(0,a.jsxs)(ar,{className:`${e} ui--LabelHelp`,tabIndex:-1,children:[(0,a.jsx)(b.A,{icon:n,tooltip:i}),(0,a.jsx)(q.A,{text:t,trigger:i})]})}),ir=s.memo(function({children:e,isActive:t=!0}){const[n,i]=(0,s.useState)(()=>new Array(e.length).fill(!1));return(0,s.useEffect)(()=>{if(t){const e=n.findIndex(e=>!e);-1!==e&&(0,On.d)(()=>i(n.map((t,n)=>n===e||t)))}},[t,n]),(0,a.jsx)(a.Fragment,{children:t?n.map((t,n)=>t&&e[n]):(0,a.jsx)(x,{})})}),rr=s.memo(function({children:e,className:t="",label:n,params:s}){const{api:i}=(0,u.g)(),r=(0,K.Gc)(i.derive.balances?.all,[s]);return(0,a.jsxs)("div",{className:t,children:[n||"",(0,M.Z)(r?.accountNonce),e]})});s.memo(function({className:e="",label:t,params:n}){return n?(0,a.jsx)(rr,{className:`${e} ui--Nonce`,label:t,params:n.toString()}):null});var or=n(1989);const lr=s.memo(function({autoFocus:e,children:t,className:n="",defaultValue:s,isDisabled:i,isError:r,isFull:o,label:l,labelExtra:c,name:d,onChange:u,onEnter:m,onEscape:h,tabIndex:p,value:g,withLabel:f}){return(0,a.jsx)(Vt.Ay,{autoFocus:e,className:`${n} ui--Password`,defaultValue:s,isDisabled:i,isError:r,isFull:o,label:l,labelExtra:c,name:d,onChange:u,onEnter:m,onEscape:h,tabIndex:p,type:"password",value:g,withLabel:f,children:t})});var cr=n(40382),dr=n.n(cr);dr().config({allowPassphrases:!0,maxLength:128,minLength:8,minPhraseLength:20});const ur=m.I.div`
  align-items: center;
  margin-top: 0.5rem;
  margin-left: 2rem;
  font-size: var(--font-size-base);
  text-transform: uppercase;
  color: var(--color-label);

  .ui--Strength-bar {
    position: relative;
    height: 0.6rem;
    width: 100%;
    margin: 0 10px;
    border: 1px solid #DFDFDF;
    border-radius: 0.15rem;
    background: #ECECEC;
  }

  .ui--Strength-bar-highlighted {
    position: absolute;
    top: -0.07rem;
    height: 0.6rem;
    width: 100%;
    border-radius: 0.15rem;
    background: linear-gradient(90.43deg, #FF8B00 0%, #FFBB50 112.75%);
  }
`,mr=s.memo(function({className:e="",value:t}){const{t:n}=(0,h.B)(),s={width:100*function(e){const t=dr().test(e),n=Math.max(0,t.passedTests.length-t.failedTests.length);return t.isPassphrase?7:n}(t)/7+"%"};return(0,a.jsxs)(ur,{className:e,style:{display:t?"flex":"none"},children:[n("weak"),(0,a.jsx)("div",{className:"ui--Strength-bar",children:(0,a.jsx)("div",{className:"ui--Strength-bar-highlighted",style:s})}),n("strong")]})}),hr=m.I.div`
  width: 100%;
  .progress-container {
    display: flex;
    height: 1rem;
    background-color: #e0e0e0;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
  }

  .progress-segment {
    position: relative;
    background-color: transparent;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .progress-bar {
    background-color: ${({$color:e})=>e};
    height: 100%;
    transition: width 0.3s ease;
  }

  .marker {
    position: absolute;
    left: 0;
    top: -0.5rem;
    width: 2px;
    height: 1.5rem;
    background-color: #FFFFFF;
  }

  .labels {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  .label {
    text-align: center;
    font-size: 0.875rem;
  }
`,pr=s.memo(function({color:e,sections:t}){const n=t?.reduce((e,t)=>e+t.total,0);return(0,a.jsxs)(hr,{$color:e,children:[(0,a.jsx)("div",{className:"progress-container",children:t?.map((e,t)=>{const s=e.total/n*100,i=e.value/e.total*100;return(0,a.jsxs)("div",{className:"progress-segment",style:{width:`${s}%`},children:[(0,a.jsx)("div",{className:"progress-bar",style:{width:`${i}%`}}),(0,a.jsx)("div",{className:"marker"})]},t)})}),(0,a.jsx)("div",{className:"labels",children:t.map((e,n)=>(0,a.jsx)("div",{className:"label",style:{width:100/t.length+"%"},children:e.label},n))})]})}),gr=m.I.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: 0.5rem;

  && .ui--Labelled.ui--Dropdown {
    padding: 0;

    label {
      left: 1.55rem;
      z-index: 115;
    }

    .ui.selection.dropdown {
      min-width: 7.857rem;
      z-index: 110;

      border-width: 1px 0 1px 1px;
      border-style: solid;
      border-color: var(--border-input);
      border-radius: 4px 0 0 4px;

      &.active {
        position: absolute;
        min-width: 10.714rem;

        z-index: 120;

        border-width: 1px;
        border-radius: 4px;
        top: 0;
        left: 0;
      }

      .visible.menu {
        border-color: var(--border-input);
      }
    }
  }

  button {
    margin: 0.25rem 0;
    position: relative;
    width: 2.857rem;
    height: 3.893rem;

    background-color: var(--bg-input);
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: var(--border-input);
    border-radius: 0 4px 4px 0;

    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }

    .arrow {
      &:first-child {
        margin-bottom: -20%;
      }

      &:last-child {
        margin-top: -20%;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 7.857rem;
    top: 10%;

    width: 1px;
    height: 80%;

    background-color: var(--border-input);
    z-index: 99;
  }

  button:hover,
  .ui--Labelled.ui--Dropdown:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      width: 1px;
      z-index: 100;
    }
  }

  button:hover::after {
    left: 0;
  }

  .ui--Labelled.ui--Dropdown:hover::after {
    left: 7.857rem;
  }
`,fr=s.memo(function({className:e="",defaultValue:t,label:n,onChange:s,onClick:i,options:r,sortDirection:o}){return(0,a.jsxs)(gr,{className:`${e} ui--Sort`,children:[(0,a.jsx)(Pt.A,{defaultValue:t,label:n,onChange:s,options:r}),(0,a.jsxs)("button",{onClick:i,children:[(0,a.jsx)(b.A,{className:"arrow up"+("ascending"===o?" isActive":""),color:"gray",icon:"sort-up"}),(0,a.jsx)(b.A,{className:"arrow down"+("descending"===o?" isActive":""),color:"gray",icon:"sort-down"})]})]})}),br=s.memo(function({className:e="",stakingInfo:t}){const n=t?.stakingLedger?.active?.unwrap();return n?.gtn(0)?(0,a.jsx)(F.A,{className:e,value:n}):null});var Ar=n(38489);function xr(e){switch(e){case"error":return"ban";case"event":case"eventWarn":return"assistive-listening-systems";case"received":return"telegram-plane";default:return"check"}}function vr({account:e,action:t,id:n,message:s,removeItem:i,status:r}){return(0,a.jsx)("div",{className:`item ${r}`,children:(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(b.A,{icon:"times",onClick:i}),(0,a.jsx)("div",{className:"short",children:(0,a.jsx)(b.A,{icon:xr(r)})}),(0,a.jsxs)("div",{className:"desc",children:[(0,a.jsx)("div",{className:"header",children:Array.isArray(t)?t.map((e,t)=>(0,a.jsx)("div",{children:e},t)):t}),e&&(0,a.jsx)(He,{value:e}),(0,a.jsx)("div",{className:"status",children:s})]})]})})},n)}function wr({error:e,extrinsic:t,id:n,removeItem:s,rpc:i,status:r}){let{method:o,section:l}=i;if(t){const e=t.registry.findMetaCall(t.callIndex);"unknown"!==e.section&&(o=e.method,l=e.section)}const c=function(e){switch(e){case"cancelled":return"ban";case"completed":case"inblock":case"finalized":case"sent":return"check";case"dropped":case"invalid":case"usurped":return"arrow-down";case"error":case"finalitytimeout":return"exclamation-triangle";case"queued":return"random";default:return"spinner"}}(r);return(0,a.jsx)("div",{className:`item ${r}`,children:(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsxs)("div",{className:"container",children:[Ar.l.includes(r)&&(0,a.jsx)(b.A,{icon:"times",onClick:s}),(0,a.jsx)("div",{className:"short",children:"spinner"===c?(0,a.jsx)(x,{variant:"push"}):(0,a.jsx)(b.A,{icon:c})}),(0,a.jsxs)("div",{className:"desc",children:[(0,a.jsxs)("div",{className:"header",children:[l,".",o]}),(0,a.jsx)("div",{className:"status",children:e?e.message||e.toString():r})]})]})})},n)}const yr=m.I.div`
  display: inline-block;
  overflow: hidden;
  position: fixed;
  right: 0.75rem;
  top: 0.75rem;
  transition-property: width;
  transition-duration: 0.75s;
  width: 4.5rem;
  z-index: 1001;

  &:hover {
    transform: scale(1);
    width: 23rem;

    .item .desc {
      display: block;
    }
  }

  .item {
    display: block;

    .desc {
      display: none;
    }

    > .wrapper > .container {
      align-items: top;
      background: #00688b;
      border-radius: 0.25rem;
      color: white;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.25rem;
      padding: 0 0.5rem;
      vertical-align: middle;
      position: relative;

      .desc {
        flex: 1;
        overflow: hidden;
        padding: 0.75rem 1rem 0.5rem;
        width: 19rem;

        .status {
          font-weight: var(--font-weight-normal);
        }

        .ui--AddressMini {
          .ui--AddressMini-address {
            min-width: 0;
            text-align: left;
          }
        }
      }

      .header {
        opacity: 0.66;
      }

      .short {
        font-size: 2.5rem;
        min-width: 3rem;
        opacity:  0.75;
        padding: 0.5rem 0 0.5rem 0.5rem;

        .ui--Icon {
          color: white !important;
          line-height: 1;
        }

        .ui--Spinner {
          display: inline-block;
          height: 1em;
          line-height: 1;
          vertical-align: -0.125em;

          img {
            height: 1em;
            width: 1em;
          }
        }
      }

      .padded {
        padding: 0.25rem 0 0 0 !important;
      }

      .ui--Icon.isClickable {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;
      }
    }

    &.cancelled > .wrapper > .container {
      background: #cd9b1d
    }

    &.event > .wrapper > .container {
      background: teal;
    }

    &.eventWarn > .wrapper > .container {
      background: darkorange;
    }

    &.completed,
    &.finalized,
    &.inblock,
    &.sent,
    &.success {
      & > .wrapper > .container {
        background: green;
      }
    }

    &.dropped,
    &.error,
    &.finalitytimeout,
    &.invalid,
    &.usurped {
      & > .wrapper > .container {
        background: red;
      }
    }
  }
`,kr=s.memo(function({className:e=""}){const{stqueue:t,txqueue:n}=(0,Z.x)(),[i,r]=(0,s.useState)([]),[o,l]=(0,s.useState)([]);return(0,s.useEffect)(()=>{r(function(e){return(e||[]).filter(({isCompleted:e})=>!e)}(t))},[t]),(0,s.useEffect)(()=>{l(function(e){return(e||[]).filter(({status:e})=>!["completed","incomplete"].includes(e))}(n))},[n]),i.length||o.length?(0,a.jsxs)(yr,{className:`${e} ui--Status`,children:[o.map(wr),i.map(vr)]}):null}),jr=m.I.div`
  align-items: stretch;
  border-radius: 0.25rem;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  margin: 1.5rem 0;

  > section {
    display: flex;
    flex: 0 1 auto;
    text-align: left;
  }

  details & {
    display: block;
    margin: 0.5rem 0.25rem;
    opacity: 0.75;
    outline: none;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;

    + div {
      margin-top: 0.75rem;
    }
  }

  &.isSmall {
    margin-bottom: 0;
  }

  .ui.label {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,Cr=s.memo(function({children:e,className:t="",isSmall:n}){return(0,a.jsx)(jr,{className:`${t}${n?" isSmall":""}`,children:e})});var Nr=n(18690),Er=n(29133);const Sr=m.I.div`
  margin: 0 2.5rem 0 1.5rem;
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-base);
  line-height: 1.57rem;
  min-width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--color-text);

  .ui--Icon {
    margin-right: 0.85rem;
    max-width: 1rem;
    max-height: 1rem;
  }

  @media only screen and (max-width: 900px) {
    margin: 0 1.5rem;
  }
`,Ir=s.memo(function({className:e="",icon:t,text:n}){return(0,a.jsxs)(Sr,{className:`${e} active-tab`,children:[(0,a.jsx)(b.A,{icon:t}),(0,a.jsx)("span",{children:n})]})});var Br=n(73657);const Fr=(0,m.I)(Br.k2)`
  align-items: center;
  display: flex;
  color: #8B8B8B;
  height: 100%;
  padding: 0 1.5rem;
  position: relative;

  &:hover {
    color: #8B8B8B;

    .tabLinkText::after {
      background-color: #8B8B8B;
    }
  }

  &.active, &:hover {
    .tabLinkText::after {
      content: '';
      position: absolute;
      width: 3.14rem;
      height: 2px;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &.active {
    color: var(--color-text) !important;
    font-weight: var(--font-weight-normal);

    &:hover {
      cursor: default;
    }
  }

  .tabLinkText {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .tabCounter {
    margin: -1rem 0 -1rem 0.75rem;
  }

  .tabIcon {
    margin-left: 0.75rem;
  }
`,Tr=s.memo(function({basePath:e,className:t="",count:n,hasParams:s,index:i,isExact:r,isRoot:o,name:l,text:c}){const d=o?e:`${e}/${l}`,u=r||!s||0===i;return(0,a.jsxs)(Fr,{className:`${t} ui--Tab`,end:u,to:d,children:[(0,a.jsx)("div",{className:"tabLinkText",children:c}),!!n&&(0,a.jsx)(xa.A,{className:"tabCounter",color:"counter",info:n})]})}),Dr=m.I.div`
  height: 100%;
  width: auto;
`,Lr=s.memo(function({className:e=""}){return(0,a.jsx)(Dr,{className:e,children:(0,a.jsx)("svg",{fill:"none",height:"47",viewBox:"0 0 17 65",width:"17",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{className:"highlight--stroke",d:"M1 1L16 32.5L1 64",stroke:"#D1D1D1"})})})}),Mr=m.I.header`
  background: var(--bg-tabs);
  border-bottom: 1px solid var(--border-tabs);
  text-align: left;
  z-index: 1;

  & .tabs-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    max-width: var(--width-full);
    padding: 0 1.5rem 0 0;
    height: 3.286rem;
  }

  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }

  .ui--TabsList {
    display: flex;
    height: 100%;
    list-style: none;
    margin: 0 1.4rem;
    padding: 0;
    white-space: nowrap;

    @media only screen and (max-width: 900px) {
      margin: 0 2.72rem 0 2.35rem;
    }
  }
`,Pr=s.memo(function({basePath:e,className:t="",hidden:n,items:i}){const r=(0,Nr.zy)(),{icon:o,text:l}=s.useContext(Er.I),c=(0,s.useMemo)(()=>i.filter(e=>!(!e||n&&n.includes(e.name))),[n,i]);return(0,s.useEffect)(()=>function(e,t,n,a){if(t.pathname!==e){const[,,s]=t.pathname.split("/"),i=n.find(e=>e&&e.alias===s);i?window.location.hash=i.isRoot?e:`${e}/${i.name}`:!a||!a.includes(s)&&n.some(e=>e&&!e.isRoot&&e.name===s)||(window.location.hash=e)}}(e,r,i,n),[e,n,i,r]),(0,a.jsx)(Mr,{className:`${t} ui--Tabs`,children:(0,a.jsxs)("div",{className:"tabs-container",children:[l&&o&&(0,a.jsx)(Ir,{icon:o,text:l}),(0,a.jsx)(Lr,{}),(0,a.jsx)("ul",{className:"ui--TabsList",children:c.map((t,n)=>(0,a.jsx)("li",{className:t.isHidden?"--hidden":"",children:(0,s.createElement)(Tr,{...t,basePath:e,index:n,key:t.name})},n))})]})})}),Vr=(0,m.I)(Zt.A)`
  .TextAreaWithDropdown {
    display: flex;
    textarea {
      border-radius: 0.25rem 0 0 0.25rem;
      border: 1px solid #DDE1EB;
      border-right: none;
      background: var(--bg-input);
      box-sizing: border-box;
      color: var(--color-text);
      display: block;
      outline: none;
      padding: 1.75rem 3rem 0.75rem 1.5rem;
      resize: none;
      width: 100%;

      &:read-only {
        background: var(--bg-inverse);
        box-shadow: none;
        outline: none;

        ~ .ui.buttons > .ui.selection.dropdown {
          background: var(--bg-inverse);
        }
      }

      &.ui-textArea-withError {
        background: var(--bg-input-error);
        color: var(--color-error);
      }
    }

    & > .ui.buttons > .ui.button.floating.selection.dropdown {
      border: 1px solid #DDE1EB;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      & > .dropdown.icon {
        top: 2rem;
      }
    }
  }
`,zr=s.memo(function({children:e,className:t,isError:n,isReadOnly:i,label:r,onChange:o,seed:l,withLabel:c}){const d=(0,s.useCallback)(({target:{value:e}})=>{o&&o(e)},[o]);return(0,a.jsx)(Vr,{className:t,label:r,withLabel:c,children:(0,a.jsxs)("div",{className:"TextAreaWithDropdown",children:[(0,a.jsx)("textarea",{autoCapitalize:"off",autoCorrect:"off",autoFocus:!1,className:n?"ui-textArea-withError":"",onChange:d,readOnly:i,rows:2,spellCheck:!1,value:l}),e]})})}),Rr=s.memo(function({index:e,isDisabled:t,isSelected:n,onChange:i,text:r,value:o}){const l=(0,s.useCallback)(()=>{!t&&i(e,o)},[t,e,i,o]);return(0,a.jsx)(j,{icon:n?"check":"circle",isBasic:!0,isDisabled:t,isSelected:n,label:r,onClick:l},r)}),qr=m.I.div`
  display: inline-block;
  margin-right: 1.5rem;

  .ui--Button {
    margin: 0;

    &:not(:first-child) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    &:not(:last-child) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    .ui--Icon {
      width: 1em;
    }
  }
`,$r=s.memo(function({className:e="",onChange:t,options:n,value:i}){const r=(0,s.useMemo)(()=>n.filter(e=>!!e),[n]);return r.length&&r[0].value?(0,a.jsx)(qr,{className:`${e} ui--ToggleGroup`,children:r.map(({isDisabled:e,text:n,value:s},r)=>(0,a.jsx)(Rr,{index:r,isDisabled:e,isSelected:i===r,onChange:t,text:n,value:s},r))}):null}),Ur=m.I.div`
  display: flex;
  align-items: center;
`,Hr=m.I.div`
  position: relative;
`,Qr=m.I.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`,Or=m.I.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,Wr=m.I.div`
  width: 20px;
  height: 20px;
  background-color: ${e=>e.color};
  margin-right: 10px;
`,Gr=s.memo(function({data:e}){const t=2*Math.PI*50,n=e.reduce((e,t)=>e+t.value,0);let s=0;return n?(0,a.jsxs)(Ur,{children:[(0,a.jsx)(Hr,{children:(0,a.jsxs)("svg",{height:100,viewBox:"0 0 100 100",width:100,children:[(0,a.jsx)("circle",{cx:50,cy:50,fill:"none",r:42.5,stroke:"#f0f0f0",strokeWidth:15}),e.map((e,i)=>{const r=e.value/n*100,o=r/100*t,l=s/100*t;return s+=r,(0,a.jsx)("circle",{cx:50,cy:50,fill:"none",r:42.5,stroke:e.color,strokeDasharray:`${o} ${t-o}`,strokeDashoffset:-l,strokeWidth:15,transform:"rotate(-90 50 50)",children:(0,a.jsx)("title",{children:`${e.label}: ${r.toFixed(2)}%`})},i)})]})}),(0,a.jsx)(Qr,{children:e.map((e,t)=>(0,a.jsxs)(Or,{children:[(0,a.jsx)(Wr,{color:e.color}),(0,a.jsx)("span",{children:`${e.label}: ${(e.value/n*100).toFixed(2)}%`})]},t))})]}):(0,a.jsx)(a.Fragment,{})}),Yr=s.memo(function({className:e="",filter:t,onChange:n}){const{t:s}=(0,h.B)();return(0,a.jsx)(bn,{className:e,filter:t,label:s("vote with account"),onChange:n,type:"account",withLabel:!0})}),Kr=s.memo(function({children:e,className:t="",isReferenda:n,label:s,params:i}){const{api:r}=(0,u.g)(),o=(0,K.Gc)(r.derive.balances?.all,[i]);return(0,a.jsx)(F.A,{className:t,label:s,value:n&&r.query.convictionVoting&&o?o.votingBalance.add(o.reservedBalance):o?.votingBalance,children:e})}),Jr=["pyconvot","democrac","phrelect"],Zr=s.memo(function({accountId:e,autoFocus:t,isReferenda:n,label:i,noDefault:r,onChange:o}){const{t:l}=(0,h.B)(),{api:c}=(0,u.g)(),d=(0,K.Gc)(c.derive.balances?.all,[e]),[{defaultValue:m,maxValue:p,selectedId:g,value:f},b]=(0,s.useState)({defaultValue:L.Yz,maxValue:L.Yz,value:L.Yz});(0,s.useEffect)(()=>{d&&d.accountId.eq(e)&&b(t=>t.selectedId!==e?function(e,t,n,a,s,i){const r=a.lockedBreakdown.sort((e,t)=>t.amount.cmp(e.amount)).sort((e,t)=>{if(!e.id.eq(t.id))for(let n=0,a=Jr.length;n<a;n++){const a=Jr[n];if(e.id.eq(a))return-1;if(t.id.eq(a))return 1}return 0}).map(({amount:e})=>e),o=i&&e.query.convictionVoting?a.votingBalance.add(a.reservedBalance):a.votingBalance;let l=r[0]||a.lockedBalance;if(n)l=L.Yz;else if(l.isZero()){let e=o.sub(s);for(let t=0;t<3;t++)e.gt(s)&&(l=e,e=e.sub(s))}return{defaultValue:l,maxValue:o,selectedId:t,value:l}}(c,e,r,d,c.consts.balances.existentialDeposit,!!n):t)},[d,e,c,n,r]),(0,s.useEffect)(()=>{o(f)},[o,f]);const A=(0,s.useCallback)(t=>b(n=>n.selectedId===e&&t&&!t.eq(n.value)?{...n,value:t}:n),[e]),x=e!==g;return(0,a.jsx)(Wn.A,{autoFocus:t,defaultValue:x?void 0:m,isDisabled:x,isZeroable:!0,label:i||l("vote value"),labelExtra:(0,a.jsx)(Kr,{isReferenda:n,label:(0,a.jsx)("label",{children:l("voting balance")}),params:e}),maxValue:p,onChange:A})});var Xr=n(86566)},1621(e,t,n){n.d(t,{default:()=>s});var a=n(63002);function s(...e){return t=>e.reverse().reduce((e,t)=>Array.isArray(t)?(0,a.default)(...t)(e):(0,a.default)(t)(e),t)}},1713(e,t,n){},1810(e,t,n){n.d(t,{E:()=>c});var a=n(14041),s=n(55155),i=n(79129),r=n(13158),o=n(50072);const l={transform:e=>e.map(({args:[e]})=>e)},c=(0,s.F)("useWorkloadInfos",function(e,t){const n=(0,r.S)(t&&e?.query.broker.workload,[],l),s=(0,i.Gc)(t&&e?.query.broker.workload.multi,[n],{withParams:!0}),[c,d]=(0,a.useState)();return(0,a.useEffect)(()=>{if(!s?.[0]?.[0])return;const e=s[0][0];var t;d((t=e.map((e,t)=>function(e,t){const n=(0,o.TK)(e[0]?.mask),a=e[0].assignment;return{core:t,info:{isPool:a.isPool,isTask:a.isTask,mask:n,maskBits:n.length,task:a.isTask?a.asTask.toString():a.isPool?"Pool":"Idle"}}}(s[1][t],e.toNumber())))?(Array.isArray(t)?t:[t]).sort((e,t)=>e.core-t.core):[])},[s]),c})},1989(e,t,n){n.d(t,{A:()=>m,X:()=>a});var a,s=n(31085),i=n(14041),r=n(92759),o=n(25232),l=n(19475),c=n(25768),d=n(9106);!function(e){e.PJS="pjs",e.HOME="home",e.SUBSCAN="subscan"}(a||(a={}));const u=d.I.div`
  vertical-align: middle;
  white-space: nowrap;

  a.chainAlign {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    max-width: 10em;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
  }
`,m=i.memo(function({className:e,id:t,showLogo:n=!0,type:d=a.PJS}){const m=(0,o.eu)(t),h=(0,i.useMemo)(()=>m.filter(({isDisabled:e,isUnreachable:t})=>!e&&!t),[m]);if(!m.length)return null;const{homepage:p,text:g,ui:f,value:b}=h.length?h[h.length-1]:m[0],A=g&&"string"==typeof g&&r.E.chains[g]&&r.E.create(r.E.chains[g],"","").toString();return(0,s.jsxs)(u,{className:e,children:[n&&(0,s.jsx)(l.A,{isInline:!0,logo:f.logo||"empty",withoutHl:!0}),h.length?(0,s.jsxs)(s.Fragment,{children:[d===a.SUBSCAN&&!!A&&(0,s.jsx)("a",{href:A,rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)("img",{alt:"Subscan",height:"20",src:r.E.ui.logo})}),d===a.HOME&&p&&(0,s.jsx)("a",{href:p,rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)(c.A,{className:"parent-icon",icon:"house"})}),d===a.PJS&&(0,s.jsx)("a",{className:"chainAlign",href:`${window.location.origin}${window.location.pathname}?rpc=${encodeURIComponent(b)}`,children:"string"==typeof g?g:g?.toString()})]}):d===a.PJS?"string"==typeof g?g:g?.toString():null]})})},2385(e,t,n){n.d(t,{default:()=>d});var a=n(31085),s=n(14041),i=n(45118),r=n(70672),o=n(18045),l=n(5745),c=n(2926);function d(e,{callOnResult:t,propName:n="value",transform:d=l.default}={}){return(l,u={},m)=>{class h extends s.Component{isActive=!0;state={callResult:void 0,callUpdated:!1,callUpdatedAt:0,subscriptions:[]};componentDidMount(){this.setState({subscriptions:[e.pipe((0,o.T)(d),(0,r.W)(()=>(0,i.of)(void 0))).subscribe(e=>this.triggerUpdate(this.props,e)),(0,c.xU)(this)]})}componentWillUnmount(){this.isActive=!1,this.state.subscriptions.forEach(e=>e.unsubscribe())}triggerUpdate=(e,n)=>{try{if(!this.isActive||(0,c.n4)(n,this.state.callResult))return;(0,c.l$)(n,t,e.callOnResult||u.callOnResult),this.setState({callResult:n,callUpdated:!0,callUpdatedAt:Date.now()})}catch(e){console.error(this.props,e)}};render(){const{children:e}=this.props,{callResult:t,callUpdated:s,callUpdatedAt:i}=this.state,r={...u,...this.props,callUpdated:s,callUpdatedAt:i,[n]:t};return(0,a.jsxs)(l,{...r,children:[m?.(t),e]})}}return h}}},2393(e,t,n){n.d(t,{A:()=>a});class a{static abbr="Unit";static setAbbr(e=a.abbr){a.abbr=e}}},2899(e,t,n){n.d(t,{A:()=>y});var a=n(31085),s=n(14041),i=n(1445),r=n(98893),o=n(39139),l=n(93302),c=n(60750),d=n(61020),u=n(76733),m=n(94547);const h=s.memo(function({className:e="",defaultArgs:t,defaultValue:n,isDisabled:i,isError:r,isPrivate:o,label:l,onChange:c,onEnter:d,onEscape:u,withLabel:m}){const h=(0,s.useCallback)(e=>c&&c({isValid:!!e,value:e}),[c]);return(0,a.jsx)(y,{className:e,defaultArgs:t,defaultValue:n,isDisabled:i,isError:r,isPrivate:o,label:l,onChange:h,onEnter:d,onEscape:u,withLabel:m})});function p(e){return e.map(e=>({isValid:!0,value:e}))}function g(e,t,n){try{return n?.value?(a=n.value,(0,u.K)(a.section)&&(0,u.K)(a.method)?{initialArgs:p(n.value.args),initialValue:e.tx[n.value.section][n.value.method]}:function(e){return(0,m.G)(e.method)&&(0,u.K)(e.method.section)&&(0,u.K)(e.method.method)}(n.value)?{initialArgs:p(n.value.method.args),initialValue:e.tx[n.value.method.section][n.value.method.method]}:{initialValue:n.value}):{initialValue:t}}catch{return{initialValue:t}}var a}const f=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:i,label:r,onChange:o,onEnter:l,onEscape:c,withLabel:u}){const{api:m,apiDefaultTx:p}=(0,d.g)(),[{initialArgs:f,initialValue:b}]=(0,s.useState)(()=>g(m,p,t));return(0,a.jsx)(h,{className:e,defaultArgs:f,defaultValue:b,isDisabled:n,isError:i,isPrivate:!1,label:r,onChange:o,onEnter:l,onEscape:c,withLabel:u})}),b={Call:f,OpaqueCall:s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:i,label:r,onChange:o,onEnter:l,onEscape:c,withLabel:u}){const{api:m,apiDefaultTxSudo:p}=(0,d.g)(),[{initialArgs:f,initialValue:b}]=(0,s.useState)(()=>g(m,p,t)),A=(0,s.useCallback)(({isValid:e,value:t})=>{let n=null;e&&t&&(n=t.method.toHex()),o&&o({isValid:e,value:n})},[o]);return(0,a.jsx)(h,{className:e,defaultArgs:f,defaultValue:b,isDisabled:n,isError:i,isPrivate:!0,label:r,onChange:A,onEnter:l,onEscape:c,withLabel:u})}),Proposal:s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:i,label:r,onChange:o,onEnter:l,onEscape:c,withLabel:u}){const{api:m,apiDefaultTxSudo:p}=(0,d.g)(),[{initialArgs:f,initialValue:b}]=(0,s.useState)(()=>g(m,p,t)),A=(0,s.useCallback)(({isValid:e,value:t})=>{let n=null;e&&t&&(n=m.createType("Proposal",t)),o&&o({isValid:e,value:n})},[m,o]);return(0,a.jsx)(h,{className:e,defaultArgs:f,defaultValue:b,isDisabled:n,isError:i,isPrivate:!0,label:r,onChange:A,onEnter:l,onEscape:c,withLabel:u})}),RuntimeCall:f};var A=n(57226);const x=(0,l.b)({},b,A.f9);function v({meta:e}){return e.args.map(({name:e,type:t,typeName:n})=>({name:e.toString(),type:{...(0,o.c)(t.toString()),...n.isSome?{typeName:n.unwrap().toString()}:{}}}))}function w(e,t=[]){return{extrinsic:{fn:e,params:v(e)},values:t}}const y=s.memo(function({defaultArgs:e,defaultValue:t,filter:n,isDisabled:o,isError:l,isPrivate:d,label:u,onChange:m,onEnter:h,onError:p,onEscape:g,withLabel:f}){const[{extrinsic:v,values:y},k]=(0,s.useState)(()=>w(t,e));(0,s.useEffect)(()=>{const e=function(e,t){return t.reduce((e,t)=>e&&!(0,c.b)(t)&&!(0,c.b)(t.value)&&t.isValid,e.length===t.length)}(v.params,y);let t;if(e)try{t=v.fn(...y.map(({value:e})=>e))}catch(e){p&&p(e)}else p&&p(null);m(t)},[v,m,p,y]);const j=(0,s.useMemo)(()=>A.sj.includes(`${v.fn.section}.${v.fn.method}`)?x:b,[v]),C=(0,s.useCallback)(e=>k(t=>e.section===t.extrinsic.fn.section&&e.method===t.extrinsic.fn.method?t:w(e)),[]),N=(0,s.useCallback)(e=>k(({extrinsic:t})=>({extrinsic:t,values:e})),[]),{fn:{method:E,section:S},params:I}=v;return(0,a.jsxs)("div",{className:"extrinsics--Extrinsic",children:[(0,a.jsx)(i.CI,{defaultValue:t,filter:n,isDisabled:o,isError:l,isPrivate:d,label:u,onChange:C,withLabel:f}),(0,a.jsx)(r.Ay,{onChange:N,onEnter:h,onEscape:g,overrides:j,params:I,values:y},`${S}.${E}:params`)]})})},2926(e,t,n){n.d(t,{l$:()=>r.l,n4:()=>i.n,uc:()=>a.u,xU:()=>s.x});var a=n(10461),s=(n(1713),n(24732)),i=n(16898),r=n(44362)},3789(e,t,n){n.d(t,{N:()=>l});var a=n(14041),s=n(55155),i=n(79129),r=n(13158);const o={transform:e=>e.map(({args:[e]})=>e)},l=(0,s.F)("useRegions",function(e){const t=(0,r.S)(e?.query?.broker.regions,[],o),n=(0,i.Gc)(e?.query?.broker.regions.multi,[t],{withParams:!0}),[s,l]=(0,a.useState)();return(0,a.useEffect)(()=>{n&&n[0][0].length>0&&l(n[0][0].map((e,t)=>{return a=e.core.toNumber(),s=e.begin.toNumber(),i=n[1][t].unwrap().end.toNumber(),r=n[1][t].unwrap().owner.toString(),o=n[1][t].unwrap().paid.toString(),{core:a,end:i,mask:e.mask.toHex(),owner:r,paid:o,start:s};var a,s,i,r,o}))},[n]),s})},5668(e,t,n){n.d(t,{e:()=>u});var a=n(14041),s=n(95927),i=n.n(s),r=n(51524),o=n(55155),l=n(61020),c=n(79129),d=n(22067);const u=(0,o.F)("useAvailableSlashes",function(e){const{api:t}=(0,l.g)(),n=(0,a.useMemo)(()=>e??t,[e,t]),s=(0,c.Gc)(n.derive.session?.indexes),o=(0,c.Gc)(n.query.staking?.earliestUnappliedSlash),u=(0,d.T)(),[m,h]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let e;const[t,a]=n.query.staking?.earliestUnappliedSlash?[o?.unwrapOr(null),r.Yz]:[s?.activeEra,r.Uu.add(n.consts.staking?.slashDeferDuration||r.cM)];if(u.current&&s&&t){const o=[],l=s.activeEra.add(a);let c=new(i())(t);for(;c.lte(l);)o.push(c),c=c.add(r.Uu);o.length&&(async()=>{e=await n.query.staking.unappliedSlashes.multi(o,e=>{u.current&&h(e.map((e,n)=>[t.addn(n),e]).filter(([,e])=>e.length))})})().catch(console.error)}return()=>{e&&e()}},[n,o,s,u]),m})},5745(e,t,n){function a(e,t){return e}n.d(t,{default:()=>a})},6767(e,t,n){n.d(t,{P:()=>c,j:()=>l});var a=n(14041),s=n(55155),i=n(97186),r=n(61020),o=n(79129);const l=(0,s.F)("useOwnStashes",function(e,t){const{allAccounts:n}=(0,i.o)(),{api:s}=(0,r.g)(),l=(0,a.useMemo)(()=>t??s,[t,s]),c=(0,a.useMemo)(()=>n.concat(e||[]),[n,e]),d=(0,o.Gc)(0!==c.length&&l.query.staking?.bonded.multi,[c]),u=(0,o.Gc)(0!==c.length&&l.query.staking?.ledger.multi,[c]);return(0,a.useMemo)(()=>c.length?d&&u?function(e,t,n){const a=[];return t.forEach((t,n)=>{t.isSome&&a.push([e[n],!0])}),n.forEach(e=>{if(e.isSome){const t=e.unwrap().stash.toString();!a.some(([e])=>e===t)&&a.push([t,!1])}}),a}(c,d,u):void 0:[],[c,d,u])}),c=(0,s.F)("useOwnStashIds",function(e){const t=l(e);return(0,a.useMemo)(()=>t?t.map(([e])=>e):void 0,[t])})},6943(e,t,n){n.d(t,{B:()=>s});var a=n(37140);function s(){return(0,a.Bd)("react-query")}},7135(e,t,n){n.d(t,{Ay:()=>u,Xc:()=>c});var a=n(31085),s=n(14041),i=n(23446),r=n(6404),o=n(60750),l=n(43194);const c=["Alt","Meta","Control"];let d=0;const u=s.memo(function({autoFocus:e=!1,children:t,className:n,defaultValue:c,icon:u,inputClassName:m,isAction:h=!1,isDisabled:p=!1,isDisabledError:g=!1,isEditable:f=!1,isError:b=!1,isFull:A=!1,isHidden:x=!1,isInPlaceEditor:v=!1,isLoading:w=!1,isReadOnly:y=!1,isWarning:k=!1,label:j,labelExtra:C,max:N,maxLength:E,min:S,name:I,onBlur:B,onChange:F,onEnter:T,onEscape:D,onKeyDown:L,onKeyUp:M,onPaste:P,placeholder:V,tabIndex:z,type:R="text",value:q,withEllipsis:$,withLabel:U}){const[H]=(0,s.useState)(()=>`in_${d++}_at_${Date.now()}`),[Q]=(0,s.useState)(()=>c);(0,s.useEffect)(()=>{Q&&F&&F(Q)},[Q,F]);const O=(0,s.useCallback)(()=>B&&B(),[B]),W=(0,s.useCallback)(({target:e})=>F&&F(e.value),[F]),G=(0,s.useCallback)(e=>L&&L(e),[L]),Y=(0,s.useCallback)(e=>{M&&M(e),!T||"Enter"!==e.key&&13!==e.keyCode||(e.target.blur(),(0,r.T)(T)&&T()),!D||"Escape"!==e.key&&27!==e.keyCode||(e.target.blur(),D())},[T,D,M]),K=(0,s.useCallback)(e=>P&&P(e),[P]);return(0,a.jsx)(l.A,{className:n,isFull:A,label:j,labelExtra:C,withEllipsis:$,withLabel:U,children:(0,a.jsxs)(i.A,{action:h,autoFocus:e,className:[f?"ui--Input edit icon":"ui--Input",v?"inPlaceEditor":"",w?"--tmp":"",m||"",k&&!b?"isWarning":""].join(" "),defaultValue:(0,o.b)(q)?c||"":void 0,disabled:p||w,error:!p&&b||g,hidden:x,iconPosition:(0,o.b)(u)?void 0:"left",id:I,max:N,maxLength:E,min:S,name:I||H,onBlur:O,onChange:W,onKeyDown:G,onKeyUp:Y,placeholder:V,readOnly:y,tabIndex:z,type:R,value:q,children:[(0,a.jsx)("input",{autoCapitalize:"off",autoComplete:"password"===R?"new-password":"off",autoCorrect:"off","data-testid":j,onPaste:K,spellCheck:!1,style:{pointerEvents:"auto"}}),f&&(0,a.jsx)("i",{className:"edit icon"}),u,t]})})})},7643(e,t,n){n.d(t,{A:()=>h});var a=n(31085),s=n(14041),i=n(1445),r=n(98893),o=n(33168),l=n(39139),c=n(35198),d=n(57226),u=n(27721);const m=i.I4.div`
  .ui--Labelled.hash .ui--Static {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: unset;
    word-wrap: unset;
    white-space: nowrap;
  }

  .ui--Call--toplevel {
    margin-top: 0;

    .ui--Labelled {
      &:last-child > .ui--Labelled-content > .ui--Static {
        margin-bottom: 0;
      }

      > .ui--Labelled-content > .ui--Static {
        background: var(--bg-static-extra);
      }

      + .ui--Labelled > .ui--Labelled-content > .ui--Static {
        margin-top: 0;
      }
    }
  }

  > .ui--Params {
    margin-top: -0.25rem;
  }
`,h=s.memo(function({callName:e,children:t,className:n="",labelHash:h,labelSignature:p,mortality:g,onError:f,tip:b,value:A,withBorder:x,withExpander:v,withHash:w,withSignature:y}){const{t:k}=(0,u.B)(),[{hash:j,overrides:C,params:N,signature:E,signatureType:S,values:I},B]=(0,s.useState)({hash:null,params:[],signature:null,signatureType:null,values:[]});return(0,s.useEffect)(()=>{B(function(e,t,n,a){const s=a&&d.sj.includes(a)?d.f9:void 0,i=e?.meta.args.map(({name:e,type:t})=>({name:e.toString(),type:(0,l.c)(t.toString())})),r=e?.args.map(e=>({isValid:!0,value:e})),o=t?e?.hash.toHex():null;let u=null,m=null;if(n&&function(e){return!!e.signature}(e)&&e.isSigned){const t=function(e){return e._raw?.signature?.multiSignature}(e);u=e.signature.toHex(),m=t instanceof c.g?t.type:null}return{hash:o,overrides:s,params:i,signature:u,signatureType:m,values:r}}(A,w,y,e))},[e,A,w,y]),(0,a.jsx)(m,{className:`${n} ui--Call`,children:(0,a.jsxs)(r.Ay,{isDisabled:!0,onError:f,overrides:C,params:N,registry:A?.registry,values:I,withBorder:x,withExpander:v,children:[t,(0,a.jsxs)("div",{className:"ui--Call--toplevel",children:[j&&(0,a.jsx)(i.jC,{className:"hash",label:h||k("extrinsic hash"),value:j,withCopy:!0}),E&&(0,a.jsx)(i.jC,{className:"hash",label:p||k("signature {{type}}",{replace:{type:S?`(${S})`:""}}),value:E,withCopy:!0}),g&&(0,a.jsx)(i.jC,{className:"mortality",label:k("lifetime"),value:g}),b?.gtn(0)&&(0,a.jsx)(i.jC,{className:"tip",label:k("tip"),value:(0,a.jsx)(o.A,{value:b})})]})]})})})},7851(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(61020),r=n(79129),o=n(21327);const l=s.memo(function({children:e,className:t="",label:n}){const{api:s}=(0,i.g)(),l=(0,r.Gc)(s.derive.chain.bestNumberFinalized);return(0,a.jsxs)("div",{className:`${t} ${l?"":"--tmp"}`,children:[n||"",(0,a.jsx)("span",{className:"--digits",children:(0,o.Z)(l||1234)}),e]})})},7970(e,t,n){n.d(t,{P:()=>a});const a=n(14041).createContext(void 0)},8460(e,t,n){n.d(t,{c:()=>o});var a=n(14041),s=n(70020),i=n.n(s),r=n(45414);function o(e,t){const[n,s]=(0,a.useState)(()=>function(e,t){const n=i().get(`flags:${e}`,{});return Object.keys(t).reduce((e,t)=>((0,r.L)(n[t])&&(e[t]=n[t]),e),{...t})}(e,t)),[o]=(0,a.useState)(()=>function(e,t){return Object.keys(e).reduce((e,n)=>(e[n]=(e=>n=>t(t=>({...t,[e]:n})))(n),e),{})}(t,s));return(0,a.useEffect)(()=>{i().set(`flags:${e}`,n)},[n,e]),[n,o]}},8525(e,t,n){n.d(t,{L:()=>r});var a=n(14041),s=n(61020),i=n(6404);const r=(0,n(55155).F)("useCollectiveInstance",function(e,t){const{api:n}=(0,s.g)();return(0,a.useMemo)(()=>{const a=t||0,s=n.registry.getModuleInstances(n.runtimeVersion.specName.toString(),e),r=s&&a<s.length?s[a]:e;return n.tx[r]&&(0,i.T)(n.tx[r].close)?r:null},[n,t,e])})},8575(e,t,n){n.d(t,{L:()=>v});var a=n(14041),s=n(42815),i=n(30788),r=n(33687),o=n(65660),l=n(49723),c=n(11243),d=n(55155),u=n(61020);const m={hasLedgerChain:!1,hasWebUsb:!1,isLedgerCapable:!1,isLedgerEnabled:!1},h=!!window.USB,p=Object.keys(r.A).filter(e=>o.V[e]),g=p.reduce((e,t)=>[...e,...r.A[t]],[]);let f,b=null,A=null;function x(e){const t=g.includes(e.genesisHash.toHex()),n=h&&t;return{hasLedgerChain:t,hasWebUsb:h,isLedgerCapable:n,isLedgerEnabled:n&&"none"!==l.W.ledgerConn}}const v=(0,d.F)("useLedger",function(){const{api:e,isApiReady:t}=(0,u.g)(),n=(0,a.useCallback)(()=>function(e){const t=l.W.get().ledgerConn,n=l.W.get().ledgerApp;if(!b||A!==t||n!==f){const a=e.genesisHash.toHex(),l=p.find(e=>r.A[e].includes(a));(0,c.vA)(l,`Unable to find a known Ledger config for genesisHash ${a}`),b="generic"===n?new i.B(t,l,o.V.pezkuwi):"migration"===n?new i.B(t,l,o.V[l]):"chainSpecific"===n?new s.O(t,l):new i.B(t,l,o.V.pezkuwi),A=t,f=n}return b}(e),[e]);return(0,a.useMemo)(()=>({...t?x(e):m,getLedger:n}),[e,n,t])})},8698(e,t,n){n.d(t,{e:()=>l});var a=n(14041),s=n(55155),i=n(61020),r=n(79129),o=n(69956);const l=(0,s.F)("useVesting",function(e){const{api:t}=(0,i.g)(),{ahApi:n,isRelayChain:s}=(0,o.Y)(),l=s&&n?n:t,c=(0,r.Gc)(l.derive.balances?.all,[e]);return(0,a.useMemo)(()=>{if(c)return{isVesting:c.isVesting,vestedBalance:c.vestedBalance,vestedClaimable:c.vestedClaimable,vesting:c.vesting,vestingLocked:c.vestingLocked,vestingTotal:c.vestingTotal}},[c])})},9106(e,t,n){n.d(t,{I:()=>a.I4});var a=n(64767)},10005(e,t,n){n.d(t,{KK:()=>a.KK,fI:()=>a.fI,gB:()=>s.g,sH:()=>a.sH});var a=n(43910),s=(n(27900),n(35038))},10370(e,t,n){n.d(t,{d:()=>a});const a=["astar","laos"]},10461(e,t,n){n.d(t,{u:()=>s});var a=n(39907);function s(){return a?.versions?.electron||"renderer"===window?.process?.type||navigator?.userAgent?.indexOf("Electron")>=0?"app":"web"}},10551(e,t,n){n.d(t,{v:()=>l,H:()=>c});var a=n(31085),s=n(14041),i=n(61020),r=n(22067);const o=[],l=s.createContext(o);function c({children:e}){const{api:t}=(0,i.g)(),n=(0,s.useCallback)(e=>function(e,t){return 0===t.length?[e]:60===t.length?t.concat(e).slice(-60):t.concat(e)}(function(...e){const t={active:{requests:0,subscriptions:0},total:{bytesRecv:0,bytesSent:0,cached:0,errors:0,requests:0,subscriptions:0,timeout:0}};for(let n=0,a=e.length;n<a;n++){const a=e[n].stats;a&&(t.active.requests+=a.active.requests,t.active.subscriptions+=a.active.subscriptions,t.total.bytesRecv+=a.total.bytesRecv,t.total.bytesSent+=a.total.bytesSent,t.total.cached+=a.total.cached,t.total.errors+=a.total.errors,t.total.requests+=a.total.requests,t.total.subscriptions+=a.total.subscriptions,t.total.timeout+=a.total.timeout)}return{stats:t,when:Date.now()}}(t),e),[t]),c=function(e,t){const[n,a]=(0,s.useState)(t),i=(0,s.useRef)(null),o=(0,r.T)();return(0,s.useEffect)(()=>(function t(){if(i.current=null,o.current){try{a(e)}catch(e){console.error(e)}i.current=setTimeout(t,5e3)}}(),()=>{i.current&&clearTimeout(i.current)}),[]),n}(n,o);return(0,a.jsx)(l.Provider,{value:c,children:e})}},10665(e,t,n){function a(e,...t){return t.reverse().reduce((e,t)=>t(e),e)}n.d(t,{default:()=>a})},11172(e,t,n){n.d(t,{A:()=>y});var a=n(31085),s=n(14041),i=n(61020),r=n(95927),o=n.n(r),l=n(848),c=n(16880),d=n(51524),u=n(60750),m=n(2393),h=n(7135),p=n(9106),g=n(80087);function f(e){return d.u_.pow(new(o())(e||32)).isub(d.Uu)}function b(e,t){return new RegExp(e?`^${t?"-?":""}(0|[1-9]\\d*)(\\.\\d*)?$`:`^${t?"-?":""}(0|[1-9]\\d*)$`)}function A(e,t,n,a,s){return!(!n&&e.lt(d.Yz)||e.gt(f(t))||!a&&e.isZero()||e.bitLength()>(t||32)||s&&s.gtn(0)&&e.gt(s))}function x(e,t,n,a,s,i,r,c){const[m,h,p]=function(e,t){if(!e)return[d.Yz,0,0];const n=(0,u.b)(t)?l.Q.getDefaults().decimals:t;return[new(o())(n+e.power),n,e.power]}(n,c),g=t.match(/^(\d+)\.(\d+)$/);let f;if(g){p-g[2].length<-h&&(f=new(o())(-1));const n=new(o())(t.replace(/\.\d*$/,"")),a=t.replace(/^\d+\./,"").substring(0,e.registry.chainDecimals[0]),s=new(o())(a);f=n.mul(d.Xx.pow(m)).add(s.mul(d.Xx.pow(new(o())(h+p-a.length))))}else f=new(o())(t.replace(/[^\d]/g,"")).mul(d.Xx.pow(m)).muln(s&&t.startsWith("-")?-1:1);return[f,A(f,a,s,i,r)]}function v(e,t,n,a,s,i,r,o){return[t,...x(e,t,n,a,s,i,r,o)]}const w=(0,p.I)(h.Ay)`
  .siUnit {
    bottom: 0.85rem;
    color: var(--color-label);
    font-size: var(--font-size-tiny);
    font-weight: var(--font-weight-label);
    position: absolute;
    font-weight: var(--font-weight-bold);
    right: 1.25rem;
  }
`,y=s.memo(function({autoFocus:e,bitLength:t=32,children:n,className:r="",defaultValue:p,isDecimal:A,isDisabled:x,isError:y=!1,isFull:k,isLoading:j,isSi:C,isSigned:N=!1,isWarning:E,isZeroable:S=!0,label:I,labelExtra:B,maxLength:F,maxValue:T,onChange:D,onEnter:L,onEscape:M,placeholder:P,siDecimals:V,siDefault:z,siSymbol:R,value:q}){const{t:$}=(0,g.B)(),{api:U}=(0,i.g)(),[H]=(0,s.useState)(()=>C?z||l.Q.findSi("-"):null),[[Q,O,W],G]=(0,s.useState)(()=>function(e,t=d.Yz,n,a,s,i,r,m){return(0,c.f)(t)?function(e,t,n,a,s){const i=(0,u.b)(s)?l.Q.getDefaults().decimals:s;return[t?e.div(d.Xx.pow(new(o())(i+t.power))).toString():e.toString(),e,!(!a&&!n)||e.gt(d.Yz)]}(t,n,s,i,m):v(e,t,n,a,s,i,r,m)}(U,q||p,H,t,N,S,T,V)),[Y,K]=(0,s.useState)(!1);(0,s.useEffect)(()=>{D&&D(W?O:void 0)},[W,D,O]);const J=(0,s.useCallback)((e,n)=>G(v(U,e,n,t,N,S,T,V)),[U,t,N,S,T,V]),Z=(0,s.useCallback)(e=>J(e,H),[J,H]);(0,s.useEffect)(()=>{p&&Z(p.toString())},[Z,p]);const X=(0,s.useCallback)(e=>{if(h.Xc.includes(e.key))K(!0);else if(1===e.key.length&&!Y){const{selectionEnd:t,selectionStart:n,value:a}=e.target,s=`${a.substring(0,n||0)}${e.key}${a.substring(t||0)}`;b(A||!!H,N).test(s)||e.preventDefault()}},[A,Y,N,H]),_=(0,s.useCallback)(e=>{h.Xc.includes(e.key)&&K(!1)},[]),ee=(0,s.useCallback)(e=>{const{value:t}=e.target;b(A||!!H,N).test(t)||e.preventDefault()},[A,N,H]),te=f(t).toString().length;return(0,a.jsxs)(w,{autoFocus:e,className:`${r} ui--InputNumber ${x?"isDisabled":""}`,isDisabled:x,isError:!W||y,isFull:k,isLoading:j,isWarning:E,label:I,labelExtra:B,maxLength:F||te,onChange:Z,onEnter:L,onEscape:M,onKeyDown:X,onKeyUp:_,onPaste:ee,placeholder:P||$(N?"Valid number":"Positive number"),type:"text",value:Q,children:[H&&(0,a.jsx)("div",{className:"siUnit",children:R||m.A.abbr}),n]})})},11554(e,t,n){n.d(t,{y:()=>u});var a=n(14041),s=n(55155),i=n(61020),r=n(79129),o=n(22067),l=n(69647);const c={blockHash:"",events:[]},d=()=>!0,u=(0,s.F)("useEventTrigger",function(e,t=d){const{api:n}=(0,i.g)(),[s,u]=(0,a.useState)(()=>c),m=(0,l.hz)(e),h=(0,o.T)(),p=(0,r.Gc)(n.query.system.events);return(0,a.useEffect)(()=>{if(h.current&&p){const e=p.filter(e=>e.event&&m.some(t=>t&&t.is(e.event))&&t(e));e.length&&u({blockHash:p.createdAtHash?.toHex()||"",events:e})}},[p,t,m,h]),s})},11683(e,t,n){n.d(t,{A:()=>h});var a=n(31085),s=n(14041),i=n(9106),r=n(665);const o=new Map;let l=Date.now(),c=0;function d(e,t="s",n=!1){const[s,i]=e.toFixed(1).split(".");return n?(0,a.jsxs)(a.Fragment,{children:[s,".",i," ",(0,a.jsx)("span",{className:"timeUnit",children:t})]}):(0,a.jsxs)(a.Fragment,{children:[s," ",(0,a.jsx)("span",{className:"timeUnit",children:t})]})}function u(e=0,t=0){const n=(t&&t.getTime?t.getTime():(0,r.A)(t).toNumber())||0;if(!e||!n)return d(0,"s",!0);const a=Math.max(Math.abs(e-n),0)/1e3;return a<60?d(a,"s",a<15):a<3600?d(a/60,"min"):d(a/3600,"hr")}!function e(){l=Date.now();for(const e of o.values())e(l);setTimeout(e,100)}();const m=i.I.div`
  .timeUnit {
    font-size: var(--font-percent-tiny);
  }
`,h=s.memo(function({children:e,className:t="",value:n}){const[i,r]=(0,s.useState)(l);return(0,s.useEffect)(()=>{const e=c++;return o.set(e,r),()=>{o.delete(e)}},[]),(0,a.jsxs)(m,{className:`${t} ui--Elapsed --digits`,children:[u(i,n),e]})})},11773(e,t,n){n.d(t,{l:()=>s});var a=n(14041);const s=(0,n(55155).F)("useStepper",function(){const[e,t]=(0,a.useState)(1),n=(0,a.useCallback)(()=>t(e=>e+1),[]),s=(0,a.useCallback)(()=>t(e=>e-1),[]);return(0,a.useMemo)(()=>[e,n,s,t],[e,n,s,t])})},11832(e,t,n){n.d(t,{A:()=>nt});var a=n(31085),s=n(14041),i=n(39139),r=n(59385),o=n(60750),l=n(54190),c=n(16880),d=n(1445),u=n(770),m=n(22679),h=n(35198),p=n(94547),g=n(98893);function f(e,t){return(0,i.c)(e.createType(t.type).toRawType()).sub}const b=s.memo(function(e){const{className:t="",defaultValue:n,isDisabled:i,isError:r,label:o,onChange:l,overrides:c,registry:u,type:b,withLabel:A}=e,[{options:x,subTypes:v}]=(0,s.useState)(()=>function(e,t){const n=f(e,t).filter(({name:e})=>!!e&&!e.startsWith("__Unused"));return{options:n.map(({name:e})=>({text:e,value:e})),subTypes:n}}(u,b)),[w,y]=(0,s.useState)(()=>function(e,t,n,a){const s=f(e,t);return n.value instanceof h.g?[{name:n.value.type,type:s[n.value.index]}]:[{name:a[0].name,type:a[0]}]}(u,b,n,v)),[{initialEnum:k,initialParams:j},C]=(0,s.useState)(()=>function(e,t){if(e?.value){if(e.value instanceof h.g)return{initialEnum:e.value.type,initialParams:[{isValid:!0,value:e.value.inner}]};if((0,p.G)(e.value)){const[n,a]=Object.entries(e.value)[0];if(t.some(({value:e})=>e===n))return{initialEnum:n,initialParams:[{isValid:!0,value:a}]}}}return{initialEnum:t[0]?.value,initialParams:void 0}}(n,x)),N=(0,s.useCallback)(e=>{if(i)return;const t=v.find(({name:t})=>t===e)||null;y(t?[{name:t.name,type:t}]:null),t&&C(e=>t.name===e.initialEnum?e:{initialEnum:e.initialEnum,initialParams:null})},[i,v]),E=(0,s.useCallback)(([{isValid:e,value:t}])=>{i||w&&l&&l({isValid:e,value:{[w[0].name||"unknown"]:t}})},[w,i,l]);return(0,a.jsxs)(m.A,{className:t,children:[(0,a.jsx)(d.ms,{className:"full",defaultValue:k,isDisabled:i,isError:r,label:o,onChange:N,options:x,withEllipsis:!0,withLabel:A}),w&&(0,a.jsx)(g.Ay,{isDisabled:i,isError:r,onChange:E,overrides:c,params:w,registry:u,values:j})]})});function A(e){if(e)try{return u.AC.decodeAddress(e),!0}catch(e){console.error(e)}return!1}const x=s.memo(function(e){const{className:t="",defaultValue:{value:n},isDisabled:i,isError:r,label:o,onChange:l,type:c,withLabel:u}=e,[h]=(0,s.useState)(()=>n?.toString()),p=(0,s.useCallback)(e=>l&&l({isValid:A(e),value:e}),[l]);return"MultiAddress"!==c.type||i&&n&&"Id"===n.type?(0,a.jsx)(m.A,{className:t,children:(0,a.jsx)(d.B4,{className:"full",defaultValue:h,isDisabled:i,isError:r,isInput:!0,label:o,onChange:p,placeholder:"5GLFK...",type:"allPlus",withEllipsis:!0,withLabel:u})}):(0,a.jsx)(b,{...e})});var v=n(21327),w=n(665);const y=s.memo(function({className:e="",defaultValue:{value:t},isDisabled:n,isError:i,label:r,onChange:l,onEnter:c,registry:u,type:h,withLabel:p}){const g=(0,s.useMemo)(()=>/^i\d*$/.test(h.type),[h]),f=(0,s.useMemo)(()=>n?t instanceof u.createClass("AccountIndex")?t.toString():(0,v.Z)(t):(0,w.A)(t||0).toString(),[n,u,t]),b=(0,s.useMemo)(()=>function(e,{type:t}){try{return e.createType(t).bitLength()}catch{return 32}}(u,h),[u,h]),A=(0,s.useCallback)(e=>l&&l({isValid:!(0,o.b)(e),value:e}),[l]);return(0,a.jsx)(m.A,{className:e,children:n?(0,a.jsx)(d.pd,{className:"full",defaultValue:f,isDisabled:!0,label:r,withEllipsis:!0,withLabel:p}):(0,a.jsx)(d.YI,{bitLength:b,className:"full",defaultValue:f,isError:i,isSigned:g,isZeroable:!0,label:r,onChange:A,onEnter:c,withLabel:p})})});var k=n(45691),j=n(19287),C=n(90258);function N(e,t){if(e)try{return t?(0,j.q)(e):(0,C.j)(e)}catch(e){console.error(e)}return!1}const E=s.memo(function(e){const{bytesLength:t,className:n="",defaultValue:{value:i},isDisabled:r,isError:o,label:l,onChange:c}=e,[u]=(0,s.useState)(()=>i?.toString()),h=(0,s.useCallback)(e=>c&&c({isValid:N(e,20===t),value:e}),[t,c]);return(0,a.jsx)(m.A,{className:n,children:(0,a.jsx)(d.J9,{bytesLength:t,className:"full",defaultValue:u,forceIconType:20===t?"ethereum":"bizinikiwi",isDisabled:r,isError:o,label:l,noConvert:!0,onChange:h,placeholder:20===t?"0x1...":"5..."})})}),S=s.memo(function(e){return(0,a.jsx)(E,{...e,bytesLength:20})}),I=s.memo(function(e){return(0,a.jsx)(E,{...e,bytesLength:32})});var B=n(45414),F=n(27721);const T=s.memo(function({className:e="",defaultValue:{value:t},isDisabled:n,isError:i,label:r,onChange:o,withLabel:l}){const{t:c}=(0,F.B)(),[u]=(0,s.useState)(t instanceof Boolean?t.valueOf():!!(0,B.L)(t)&&t),h=(0,s.useRef)([{text:c("No"),value:!1},{text:c("Yes"),value:!0}]),p=(0,s.useCallback)(e=>o&&o({isValid:!0,value:e}),[o]);return(0,a.jsx)(m.A,{className:e,children:(0,a.jsx)(d.ms,{className:"full",defaultValue:u,isDisabled:n,isError:i,label:r,onChange:p,options:h.current,withEllipsis:!0,withLabel:l})})});var D=n(10971),L=n(33308),M=n(69912);const P=s.memo(function({children:e,className:t="",isOuter:n,label:s,labelExtra:i,size:r="full",withLabel:o}){return(0,a.jsxs)(m.A,{className:t,children:[(0,a.jsx)(d.ks,{className:r,isOuter:!0,label:s,labelExtra:i,withEllipsis:!0,withLabel:o,children:!n&&e}),n&&e]})});const V=(0,n(55155).F)("useParamDefs",function(e,t){return(0,s.useMemo)(()=>function(e,t){const n=function(e,t){try{return(0,i.c)(e.createType(t.type).toRawType())}catch{return t}}(e,t);return n.sub?(Array.isArray(n.sub)?n.sub:[n.sub]).map(e=>({length:n.length,name:e.name,type:e})):[]}(e,t),[e,t])});function z([{name:e,type:t}],n){return{name:`${n}: ${e||t.type}`,type:t}}function R(e,t,n){if(t.length===n)return t;const a=[];for(let t=0;t<n;t++)a.push(z(e,t));return a}const q=s.memo(function({className:e="",defaultValue:t,isDisabled:n=!1,label:i,onChange:r,overrides:l,registry:c,type:u,withLabel:m}){const{t:h}=(0,F.B)(),p=function([e,t]){return[{name:"(Key, Value)",type:{info:17,sub:[e.type,t.type],type:`(${e.type.type}, ${t.type.type})`}}]}(V(c,u)),[f,b]=(0,s.useState)(()=>function({isValid:e,value:t}){return e&&(0,L.Z)(t)&&t instanceof D.F?[...t.entries()].map(([e,t])=>({isValid:!0,value:[{isValid:!0,value:e},{isValid:!0,value:t}]})):[]}(t)),[A,x]=(0,s.useState)(()=>f.length),[v,w]=(0,s.useState)(()=>R(p,[],A));(0,s.useEffect)(()=>{p.length&&w(e=>R(p,e,n?f.length:A))},[A,f,n,p]),(0,s.useEffect)(()=>{!n&&p.length&&b(e=>{if(e.length===A)return e;for(;e.length<A;){const t=(0,M.A)(c,p[0].type);e.push({isValid:!(0,o.b)(t),value:t})}return e.slice(0,A)})},[A,t,p,n,c]),(0,s.useEffect)(()=>{const e=new Map;let t=!0;for(const n of f){const[a,s]=n.value;e.has(a)&&(t=!1,console.error("BTreeMap: Duplicate key ",a)),e.set(a,s),t=t&&n.isValid}r&&r({isValid:t,value:e})},[f,r]);const y=(0,s.useCallback)(()=>x(e=>e+1),[]),k=(0,s.useCallback)(()=>x(e=>e-1),[]);return(0,a.jsxs)(P,{className:e,isOuter:!0,label:i,withLabel:m,children:[!n&&(0,a.jsxs)("div",{className:"ui--Param-BTreeMap-buttons",children:[(0,a.jsx)(d.$n,{icon:"plus",label:h("Add item"),onClick:y}),(0,a.jsx)(d.$n,{icon:"minus",isDisabled:0===f.length,label:h("Remove item"),onClick:k})]}),(0,a.jsx)(g.Ay,{isDisabled:n,onChange:b,overrides:l,params:v,registry:c,values:f})]})});var $=n(23100),U=n(54143),H=n(59540),Q=n(79876),O=n(92649),W=n(6409),G=n(73108),Y=n(92100),K=n(76506);const J=()=>!0;function Z(e){if("0x"===e)return[!0,!1,new Uint8Array([])];if(e.startsWith("0x"))try{return[!0,!1,(0,U.qv)(e)?(0,H.V)(e):(0,Q.j)(e)]}catch{return[!1,!1,new Uint8Array([])]}try{return[!0,!0,(0,K.F)(e)]}catch{}return(0,O.E)(e)?[!0,!1,(0,Q.j)(e)]:["0x"===e,!1,new Uint8Array([])]}const X=(0,d.I4)(m.A)`
  .ui--InputAddressSimpleIcon {
    background: #eee;
    border: 1px solid #888;
    border-radius: 50%;
    left: -16px;
    position: absolute;
    top: 8px;
  }
`,_=s.memo(function({asHex:e,children:t,className:n="",defaultValue:{value:i},isDisabled:r,isError:o,label:l,labelExtra:c,length:u=-1,onChange:m,onEnter:h,onEscape:p,size:g="full",validate:f=J,withCopy:b,withLabel:A,withLength:x}){const{t:v}=(0,F.B)(),[w]=(0,s.useState)(()=>{if(i){const e=(0,W.e)(i);return(0,O.E)(e)?(0,G.F)(e):(0,Y.X)(e)}}),[{isAddress:y,isValid:k,lastValue:j},C]=(0,s.useState)(()=>({isAddress:!1,isValid:(0,U.qv)(w)||(0,O.E)(w)})),N=(0,s.useCallback)(t=>{let[n,a,s]=Z(t);n=n&&f(s)&&(-1!==u?s.length===u:0!==s.length||"0x"===t),x&&n&&(s=(0,$.h)(s)),m&&m({isValid:n,value:e?(0,Y.X)(s):s}),C({isAddress:a,isValid:n,lastValue:s})},[e,u,m,f,x]);return(0,a.jsx)(X,{className:n,children:(0,a.jsxs)(d.pd,{className:g,defaultValue:w,isAction:!!t,isDisabled:r,isError:o||!k,label:l,labelExtra:c,onChange:N,onEnter:h,onEscape:p,placeholder:v("0x prefixed hex, e.g. 0x1234 or ascii data"),type:"text",withEllipsis:!0,withLabel:A,children:[t,b&&(0,a.jsx)(d.i8,{value:w}),y&&(0,a.jsx)(d._x,{className:"ui--InputAddressSimpleIcon",size:32,value:j})]})})}),ee=s.memo(function({className:e="",isDisabled:t,isError:n=!1,label:s,labelExtra:i,onChange:r,placeholder:o,withLabel:l}){return(0,a.jsx)(m.A,{className:e,children:(0,a.jsx)(d.bT,{isDisabled:t,isError:n,label:s,labelExtra:i,onChange:r,placeholder:o,withEllipsis:!0,withLabel:l})})}),te=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:i,label:r,name:o,onChange:l,onEnter:c,onEscape:u,type:m,withLabel:h,withLength:p=!0}){const{t:g}=(0,F.B)(),[f,b]=(0,s.useState)(!1),[A,x]=(0,s.useState)(!1),v=(0,s.useCallback)(e=>{const t=0!==e.length;l&&l({isValid:t,value:(0,$.h)(e)}),b(t)},[l]),w=!n&&(0,a.jsx)(d.lM,{label:g("file upload"),onChange:x,value:A});return(0,a.jsx)("div",{className:`${e} --relative`,children:!n&&A?(0,a.jsx)(ee,{isDisabled:n,isError:i||!f,label:r,labelExtra:w,onChange:v,withLabel:h}):(0,a.jsx)(_,{defaultValue:t,isDisabled:n,isError:i,label:r,labelExtra:w,length:-1,name:o,onChange:l,onEnter:c,onEscape:u,type:m,withLabel:h,withLength:p})})});var ne=n(7643),ae=n(43892);const se=(0,d.I4)(m.A)`
  pre {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ui--Static {
    margin-bottom: 0 !important;
  }
`,ie=s.memo(function({asHex:e,children:t,childrenPre:n,className:i="",defaultValue:r,isOptional:o,label:l}){const{t:c}=(0,F.B)(),u=(0,s.useMemo)(()=>!!r?.value&&(e?r.value.toHex():(0,ae.T)(r.value.toHuman?r.value.toHuman():r.value)),[e,r]);return(0,a.jsxs)(se,{className:i,children:[n,(0,a.jsx)(d.jC,{className:"full",label:l,value:(0,a.jsx)("pre",{children:u||(o?(0,a.jsx)(a.Fragment,{children:" "}):c("<empty>"))})}),t]})}),re=s.memo(function(e){const{className:t="",defaultValue:n,isDisabled:s,isError:i,label:r,name:o,onChange:l,onEnter:c,onEscape:d,type:u}=e;return s?(0,a.jsx)(ie,{...e}):(0,a.jsx)(_,{asHex:!0,className:t,defaultValue:n,isDisabled:s,isError:i,label:r,length:-1,name:o,onChange:l,onEnter:c,onEscape:d,type:u})}),oe=s.memo(function(e){const{t}=(0,F.B)(),{className:n="",defaultValue:{value:s},isDisabled:i,label:r,withLabel:o}=e;if(!i)return(0,a.jsx)(re,{...e});const l=s,{method:c,section:u}=l.registry.findMetaCall(l.callIndex),h=`${u}.${c}`;return(0,a.jsxs)(m.A,{children:[(0,a.jsx)(d.jC,{className:`${n} full`,label:r,withLabel:o,children:h}),(0,a.jsx)(ne.A,{callName:h,labelHash:t("call hash / {{section}}.{{method}}",{replace:{method:c,section:u}}),value:l,withHash:!0})]})});var le=n(94135),ce=n(96328);const de=s.memo(function(e){const t=V(e.registry,e.type),{className:n="",defaultValue:i,isDisabled:r,label:o,onChange:l,overrides:c,withLabel:d}=e,[u]=(0,s.useState)(()=>function({isValid:e,value:t}){return e&&(0,L.Z)(t)&&t instanceof ce._?t.toArray().map(e=>({isValid:!0,value:e})):void 0}(i)),m=(0,s.useCallback)(e=>{r||l&&l({isValid:e.reduce((e,{isValid:t})=>e&&t,!0),value:t.reduce((t,{name:n},a)=>(t[n||"unknown"]=e[a].value,t),{})})},[r,t,l]);return(0,a.jsxs)("div",{className:"ui--Params-Struct",children:[(0,a.jsx)(P,{className:n,label:o,withLabel:d}),(0,a.jsx)(g.Ay,{isDisabled:r,onChange:m,overrides:c,params:t,registry:e.registry,values:u})]})}),ue=s.memo(function(e){const{className:t="",defaultValue:n,isDisabled:i,isError:r,label:o,onChange:l,withLabel:c}=e,[u,h]=(0,s.useState)(!1),[p]=(0,s.useState)(()=>i&&n&&(0,L.Z)(n.value)?(0,le.c)(n.value):null),[g]=(0,s.useState)(()=>i||!n||(0,L.Z)(n.value)),f=(0,s.useCallback)(e=>{const t=(0,le.L)(e),n=!!t;l&&l({isValid:n,value:t}),h(n)},[l]);return p?(0,a.jsx)(ie,{...e,children:(0,a.jsx)(d.pd,{className:"full",isDisabled:!0,label:"ipfs",type:"text",value:p,withLabel:c})}):g?(0,a.jsx)(de,{...e}):(0,a.jsx)(m.A,{className:t,children:(0,a.jsx)(d.pd,{className:"full",isDisabled:i,isError:r||!u,label:o,onChange:f,placeholder:"IPFS compatible CID",type:"text",withLabel:c})})});var me=n(3236);const he=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:i,label:r,onChange:o,onEnter:l,onEscape:c,registry:d,type:u,withLabel:m}){const[h,p]=(0,s.useState)(!1),g=(0,s.useCallback)(e=>{const t=(0,me.H)(e);o&&o({isValid:t,value:e}),p(t)},[o]);return n?(0,a.jsx)(te,{className:e,defaultValue:t,isError:i||!h,label:r,onEnter:l,onEscape:c,registry:d,type:u,withLabel:m}):(0,a.jsx)(ee,{className:e,defaultValue:t,isError:i||!h,label:r,onChange:g,withLabel:m})}),pe=s.memo(function(e){const{t}=(0,F.B)(),[{details:n,type:i},r]=(0,s.useState)({});return(0,s.useEffect)(()=>{const{value:t}=e.defaultValue||{};if(function(e){return!(!e||!e.isModule&&!e.isToken)}(t))if(t.isModule)try{const e=t.asModule,{docs:n,name:a,section:s}=e.registry.findMetaError(e);return r({details:n.join(", "),type:`${s}.${a}`})}catch(e){console.error(e)}else if(t.isToken)return r({details:t.asToken.type,type:t.type});r({details:null})},[e.defaultValue]),e.isDisabled&&n?(0,a.jsxs)(ie,{...e,children:[(0,a.jsx)(d.pd,{className:"full",isDisabled:!0,label:t("type"),value:i}),n&&(0,a.jsx)(d.pd,{className:"full",isDisabled:!0,label:t("details"),value:n})]}):(0,a.jsx)(re,{...e})}),ge=s.memo(function(e){const{defaultValue:t,isDisabled:n,label:i}=e,r=(0,s.useMemo)(()=>{return t&&(e=t.value)&&e.isErr?{isValid:!0,value:t.value.asErr}:null;var e},[t]);return n?r?(0,a.jsx)(pe,{...e,childrenPre:(0,a.jsx)(d.pd,{className:"full",isDisabled:!0,label:i,value:"Err"}),defaultValue:r,label:"DispatchError"}):(0,a.jsx)(ie,{...e,defaultValue:{isValid:!0,value:"Ok"}}):(0,a.jsx)(re,{...e})}),fe=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:s,label:i,name:r,onChange:o,onEnter:l,onEscape:c,type:d,withLabel:u}){return(0,a.jsx)(_,{asHex:!0,className:e,defaultValue:t,isDisabled:n,isError:s,label:i,length:20,name:r,onChange:o,onEnter:l,onEscape:c,type:d,withCopy:n,withLabel:u})}),be=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:i,label:r,name:o,onChange:l,onEnter:c,onEscape:u,registry:m,type:h,withLabel:p}){const{t:g}=(0,F.B)(),[f,b]=(0,s.useState)(!1),[A,x]=(0,s.useState)(null),v=(0,s.useCallback)(e=>{const t=m.hash(e);x((0,Y.X)(t)),l&&l({isValid:!0,value:t})},[l,m]),w=(0,s.useCallback)(e=>{x(null),b(e)},[b,x]),y=!n&&(0,a.jsx)(d.lM,{label:g("hash a file"),onChange:w,value:f});return(0,a.jsx)("div",{className:e,children:!n&&f?(0,a.jsx)(ee,{isDisabled:n,isError:i,label:r,labelExtra:y,onChange:v,placeholder:A||void 0,withLabel:p}):(0,a.jsx)(_,{asHex:!0,defaultValue:t,isDisabled:n,isError:i,label:r,labelExtra:y,length:32,name:o,onChange:l,onEnter:c,onEscape:u,type:h,withCopy:n,withLabel:p})})}),Ae=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:s,label:i,name:r,onChange:o,onEnter:l,onEscape:c,type:d,withLabel:u}){return(0,a.jsx)(_,{asHex:!0,className:e,defaultValue:t,isDisabled:n,isError:s,label:i,length:64,name:r,onChange:o,onEnter:l,onEscape:c,type:d,withCopy:n,withLabel:u})});var xe=n(83448);function ve(e,t=!1){let n,a=!1;try{n=(0,H.V)(e.toString()),a=t||0!==n.length}catch{n=new Uint8Array([])}return{isValid:a,u8a:(0,$.h)(n)}}const we=s.memo(function({className:e="",isDisabled:t,label:n,onChange:i,onEnter:r,withLabel:o}){const[,l]=(0,s.useState)(!1),[c,u]=(0,s.useState)(()=>({isValid:!1,u8a:new Uint8Array([])})),[h,p]=(0,s.useState)(()=>({isValid:!1,u8a:new Uint8Array([])}));(0,s.useEffect)(()=>{const e=c.isValid&&h.isValid;i&&i({isValid:e,value:(0,xe.z)(c.u8a,h.u8a)}),l(e)},[c,i,h]);const g=(0,s.useCallback)(e=>u(ve(e)),[]),f=(0,s.useCallback)(e=>p(ve(e,!0)),[]);return(0,a.jsxs)(m.A,{className:e,children:[(0,a.jsx)(d.pd,{className:"medium",isDisabled:t,isError:!c.isValid,label:n,onChange:g,placeholder:"0x...",type:"text",withLabel:o}),(0,a.jsx)(d.pd,{className:"medium",isDisabled:t,isError:!h.isValid,onChange:f,onEnter:r,placeholder:"0x...",type:"text",withLabel:o})]})});var ye=n(11243);const ke={info:0,type:"Bytes"},je=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:i,label:r,onChange:o,onEnter:l,onEscape:c,registry:d,withLabel:u}){const{t:m}=(0,F.B)(),[h,p]=(0,s.useState)(m("click to select or drag and drop JSON key/value (hex-encoded) file")),g=(0,s.useCallback)(e=>{let t={isValid:!1,value:[]};try{t=function(e){const t=JSON.parse((0,G.F)(e)),n=Object.keys(t);let a=0!==n.length;const s=n.map(e=>{const n=t[e];(0,ye.vA)((0,U.qv)(e)&&(0,U.qv)(n),`Non-hex key/value pair found in ${e.toString()} => ${n.toString()}`);const s=ve(e),i=ve(n,!0);return a=a&&s.isValid&&i.isValid,[s.u8a,i.u8a]});return{isValid:a,value:s}}(e),p(m("{{count}} key/value pairs encoded for submission",{replace:{count:t.value.length}}))}catch(e){console.error("Error converting json k/v",e),p(m("click to select or drag and drop JSON key/value (hex-encoded) file"))}o&&o(t)},[o,m]);if(n){const n=t.value;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P,{className:e,label:r,children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"ui--Params",children:n.map(([e,t])=>{const n=(0,Y.X)(e.toU8a(!0));return(0,a.jsx)(te,{defaultValue:{value:t},isDisabled:!0,label:n,name:n,onEnter:l,onEscape:c,registry:d,type:ke},n)})})]})}return(0,a.jsx)(ee,{className:e,isDisabled:n,isError:i,label:r,onChange:g,placeholder:h,withLabel:u})}),Ce=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:i,label:r,onChange:o,onEnter:l,onEscape:c,registry:u,type:m,withLabel:h}){const p=(0,s.useCallback)(e=>o&&o(e),[o]);return n?(0,a.jsx)(d.jC,{className:e,defaultValue:t?.value?t.value.toString():"",isError:i,label:r,withLabel:h}):(0,a.jsx)(y,{className:e,defaultValue:t,isDisabled:n,isError:i,label:r,onChange:p,onEnter:l,onEscape:c,registry:u,type:m,withLabel:h})}),Ne=s.memo(function({onChange:e}){return(0,s.useEffect)(()=>{e&&e({isValid:!0,value:null})},[e]),null}),Ee=s.memo(function(e){if(!e.isDisabled)return(0,a.jsx)(re,{...e});const t=e.registry.createType("Call",e.defaultValue.value.toHex());return(0,a.jsx)(oe,{...e,defaultValue:{isValid:!0,value:t}})});var Se=n(68050),Ie=n(33482),Be=n(81899);function Fe([{name:e,type:t}],n){return{name:`${n}: ${e||t.type}`,type:t}}function Te(e,t,n){if(t.length===n)return t;const a=[];for(let t=0;t<n;t++)a.push(Fe(e,t));return a}function De({value:e}){return e instanceof Set&&(e=[...e.values()]),Array.isArray(e)?e.map(e=>(0,o.b)(e)||(0,o.b)(e.isValid)?{isValid:!(0,o.b)(e),value:e}:e):[]}const Le=s.memo(function({className:e="",defaultValue:t,isDisabled:n=!1,label:i,onChange:r,overrides:l,registry:c,type:u,withLabel:m}){const{t:h}=(0,F.B)(),p=V(c,u),[f,b]=(0,s.useState)(()=>De(t)),[A,x]=(0,s.useState)(()=>f.length),[v,w]=(0,s.useState)(()=>Te(p,[],A));(0,s.useEffect)(()=>{p.length&&w(e=>Te(p,e,n?f.length:A))},[A,f,n,p]),(0,s.useEffect)(()=>{!n&&p.length&&b(e=>{if(e.length===A)return e;for(;e.length<A;){const t=(0,M.A)(c,p[0].type);e.push({isValid:!(0,o.b)(t),value:t})}return e.slice(0,A)})},[A,t,p,n,c]),(0,s.useEffect)(()=>{r&&r({isValid:f.reduce((e,{isValid:t})=>e&&t,!0),value:f.map(({value:e})=>e)})},[f,r]);const y=(0,s.useCallback)(()=>x(e=>e+1),[]),k=(0,s.useCallback)(()=>x(e=>e-1),[]);return(0,a.jsxs)(P,{className:e,isOuter:!0,label:i,withLabel:m,children:[!n&&(0,a.jsxs)("div",{className:"ui--Param-Vector-buttons",children:[(0,a.jsx)(d.$n,{icon:"plus",label:h("Add item"),onClick:y}),(0,a.jsx)(d.$n,{icon:"minus",isDisabled:0===f.length,label:h("Remove item"),onClick:k})]}),(0,a.jsx)(g.Ay,{isDisabled:n,onChange:b,overrides:l,params:v,registry:c,values:f})]})}),Me={isValid:!0,value:void 0},Pe=new Uint8Array([1]),Ve=s.memo(function({className:e="",defaultValue:t,isDisabled:n,label:i,onChange:r,onEnter:o,onEscape:l,registry:c,type:u,withLabel:m}){const{t:h}=(0,F.B)(),p=V(c,u),[g]=(0,s.useState)(()=>Te(p,[],p[0].length||1)),{sub:f,withOptionActive:b}=u,[A,x]=(0,s.useState)(()=>b||!!(t&&t.value instanceof Se.c&&t.value.isSome)||!1),[v]=(0,s.useState)(()=>A||n?t&&(t.value instanceof Se.c&&t.value.isSome?{isValid:t.isValid,value:t.value.unwrap()}:Me):Me);(0,s.useEffect)(()=>{!A&&r&&r({isValid:!0,value:null})},[A,r]);const w=(0,s.useCallback)(e=>r&&r(e.isValid&&(0,Ie.b)(e.value)&&!b&&A?{isValid:!0,value:(0,xe.z)(Pe,e.value)}:e),[A,r,b]);return(0,a.jsxs)("div",{className:`${e} --relative`,children:[(0,a.jsx)(P,{className:"--relative",label:i,labelExtra:!n&&(0,a.jsx)(d.lM,{label:h("include option"),onChange:x,value:A}),withLabel:m}),(0,a.jsx)(Be.A,{children:(0,a.jsx)("div",{className:"ui--Params-Content",children:A?(0,a.jsx)(tt,{defaultValue:v,isDisabled:n||!A,isOptional:!A&&!n,onChange:w,onEnter:o,onEscape:l,registry:c,type:f??g.at(0)?.type}):(0,a.jsx)(ie,{defaultValue:Me,isOptional:!0,label:"None"})})})]})}),ze=s.memo(function({className:e="",defaultValue:{value:t},isDisabled:n,isError:i,label:r,onChange:o,onEnter:l,onEscape:c,withLabel:u}){const[h,p]=(0,s.useState)(!1),g=(0,s.useCallback)(e=>{const t=0!==e.length;o&&o({isValid:t,value:e}),p(t)},[o]),f=t?t.toHex?t.toHex():t:"";return(0,a.jsx)(m.A,{className:e,children:(0,a.jsx)(d.pd,{className:"full",defaultValue:f,isDisabled:n,isError:i||!h,label:r,onChange:g,onEnter:l,onEscape:c,placeholder:"Hex data",type:"text",withLabel:u})})}),Re=s.memo(function({className:e="",defaultValue:{value:t},isDisabled:n,isError:i,label:r,onChange:o,onEnter:l,onEscape:c,withLabel:u}){const[h,p]=(0,s.useState)(!1),g=(0,s.useCallback)(e=>{const t=0!==e.length;o&&o({isValid:t,value:e}),p(t)},[o]),f=(t||"").toString();return(0,a.jsx)(m.A,{className:e,children:(0,a.jsx)(d.pd,{className:"full",defaultValue:f,isDisabled:n,isError:i||!h,label:r,onChange:g,onEnter:l,onEscape:c,placeholder:"<any string>",type:"text",withLabel:u})})});var qe=n(30905);const $e=s.memo(function(e){const{className:t="",defaultValue:n,isDisabled:i,label:r,onChange:o,overrides:l,registry:c,type:d,withLabel:u}=e,m=V(c,d),[h]=(0,s.useState)(()=>function({value:e}){return e instanceof qe.r?e.map(e=>({isValid:!0,value:e})):e}(n)),p=(0,s.useCallback)(e=>{i||o&&o({isValid:e.reduce((e,{isValid:t})=>e&&t,!0),value:e.map(({value:e})=>e)})},[i,o]);return(0,a.jsxs)("div",{className:"ui--Params-Tuple",children:[(0,a.jsx)(P,{className:t,label:r,withLabel:u}),(0,a.jsx)(g.Ay,{isDisabled:i,onChange:p,overrides:l,params:m,registry:c,values:h})]})});var Ue=n(32091);const He=s.memo(function({className:e="",defaultValue:t,isDisabled:n=!1,label:i,onChange:r,overrides:l,registry:c,type:d,withLabel:u}){const m=V(c,d),[h]=(0,s.useState)(()=>Te(m,[],m[0].length||1)),[p,f]=(0,s.useState)(()=>function(e){return e.value instanceof Ue.B?e.value.map(e=>({isValid:!0,value:e})):De(e)}(t));return(0,s.useEffect)(()=>{!n&&m.length&&f(e=>{const t=m[0].length||1;if(e.length===t)return e;for(;e.length<t;){const t=(0,M.A)(c,m[0].type);e.push({isValid:!(0,o.b)(t),value:t})}return e.slice(0,t)})},[m,n,c]),(0,s.useEffect)(()=>{r&&r({isValid:p.reduce((e,{isValid:t})=>e&&t,!0),value:p.map(({value:e})=>e)})},[p,r]),(0,a.jsx)(P,{className:e,isOuter:!0,label:i,withLabel:u,children:(0,a.jsx)(g.Ay,{isDisabled:n,onChange:f,overrides:l,params:h,registry:c,values:p})})});var Qe=n(88114),Oe=n(44734);const We=s.memo(function({className:e="",defaultValue:{value:t},isDisabled:n,isError:i,onChange:r,withLabel:o}){const{t:l}=(0,F.B)(),{aye:u,conviction:h}=(0,s.useMemo)(()=>({aye:t instanceof Qe.u?t.isAye:(0,c.f)(t)?!!(128&t.toNumber()):(0,Oe.E)(t)?!!(128&t):"object"!=typeof t||null===t||!("aye"in t)||!!t.aye,conviction:t instanceof Qe.u?t.conviction.index:"object"==typeof t&&null!==t&&"conviction"in t?Number(t.conviction):0}),[t]),p=(0,s.useCallback)(e=>{r?.({isValid:!0,value:{aye:e,conviction:h}})},[h,r]),g=(0,s.useCallback)(e=>{r?.({isValid:!0,value:{aye:u,conviction:e}})},[u,r]),f=(0,s.useRef)([{text:l("Nay"),value:!1},{text:l("Aye"),value:!0}]),b=(0,s.useRef)([{text:l("None"),value:0},{text:l("Locked1x"),value:1},{text:l("Locked2x"),value:2},{text:l("Locked3x"),value:3},{text:l("Locked4x"),value:4},{text:l("Locked5x"),value:5},{text:l("Locked6x"),value:6}]);return(0,a.jsxs)(m.A,{className:e,children:[(0,a.jsx)(d.ms,{className:"full",defaultValue:u,isDisabled:n,isError:i,label:l("aye: bool"),onChange:p,options:f.current,withLabel:o}),(0,a.jsx)(d.ms,{className:"full",defaultValue:h,isDisabled:n,isError:i,label:l("conviction: Conviction"),onChange:g,options:b.current,withLabel:o})]})});var Ge=n(6404);const Ye=[{text:"Super majority approval",value:0},{text:"Super majority rejection",value:1},{text:"Simple majority",value:2}];Ye.reduce((e,{text:t,value:n})=>(e[n]=t,e),{});const Ke=s.memo(function({className:e="",defaultValue:{value:t},isDisabled:n,isError:i,label:r,onChange:o,withLabel:l}){const c=(0,s.useCallback)(e=>o&&o({isValid:!0,value:e}),[o]),u=(0,s.useMemo)(()=>(0,Ge.T)(t.toNumber)?t.toNumber():(0,w.A)(t).toNumber(),[t]);return(0,a.jsx)(m.A,{className:e,children:(0,a.jsx)(d.ms,{className:"full",defaultValue:u,isDisabled:n,isError:i,label:r,onChange:c,options:Ye,withLabel:l})})}),Je=["AccountId","AccountId20","AccountId32","AccountIndex","Address","Balance","BalanceOf","Vec<KeyValue>"],Ze=["DispatchError","SpRuntimeDispatchError"],Xe=[{c:x,t:["AccountId","Address","LookupSource","MultiAddress"]},{c:y,t:["AccountIndex","i8","i16","i32","i64","i128","u8","u16","u32","u64","u128","u256"]},{c:k.A,t:["Amount","Balance","BalanceOf"]},{c:T,t:["bool"]},{c:te,t:["Bytes","Vec<u8>"]},{c:oe,t:["Call","Proposal","RuntimeCall"]},{c:ue,t:["PezpalletAllianceCid"]},{c:he,t:["Code"]},{c:pe,t:Ze},{c:ge,t:["DispatchResult","Result<Null, SpRuntimeDispatchError>"]},{c:ze,t:["Raw","RuntimeSessionKeys","Keys"]},{c:b,t:["Enum"]},{c:be,t:["Hash","H256"]},{c:fe,t:["H160"]},{c:Ae,t:["H512"]},{c:we,t:["KeyValue"]},{c:je,t:["Vec<KeyValue>"]},{c:Ce,t:["Moment","MomentOf"]},{c:Ne,t:["Null"]},{c:Ee,t:["OpaqueCall"]},{c:Ve,t:["Option"]},{c:Re,t:["String","Text"]},{c:de,t:["Struct"]},{c:$e,t:["Tuple"]},{c:q,t:["BTreeMap"]},{c:Le,t:["Vec","BTreeSet"]},{c:He,t:["VecFixed"]},{c:We,t:["Vote"]},{c:Ke,t:["VoteThreshold"]},{c:re,t:["Unknown"]}].reduce((e,{c:t,t:n})=>(n.forEach(n=>{e[n]=t}),e),{}),_e=[];function et({displayName:e,info:t,lookupName:n,sub:a,type:s}){if(e&&Je.includes(e))return e;if(s.endsWith("RuntimeSessionKeys"))return"RuntimeSessionKeys";const i=n||s;switch(t){case l.K.Compact:return a.type;case l.K.Option:return"Option";case l.K.Enum:return"Enum";case l.K.Result:{const[,e]=a;return Ze.includes(e.lookupName||e.type)?"DispatchResult":i}case l.K.Struct:return"Struct";case l.K.BTreeSet:return"BTreeSet";case l.K.BTreeMap:return"BTreeMap";case l.K.Tuple:return Xe[s]===x?s:"Tuple";case l.K.Vec:return"Vec<u8>"===s?"Bytes":["Vec<KeyValue>"].includes(s)?"Vec<KeyValue>":"Vec";case l.K.VecFixed:return"u8"===a.type?s:"VecFixed";default:return i}}const tt=s.memo(function({className:e="",defaultValue:t,isDisabled:n,isError:d,isOptional:u,name:m,onChange:h,onEnter:p,onEscape:g,overrides:f,registry:b,type:A,withLength:x=!0}){const v=(0,s.useMemo)(()=>function(e,t,n={}){if(["AccountId20","AccountId32"].includes(t.type)){const n=`AccountId${e.createType("AccountId").length}`;if(t.type!==n)return"AccountId20"===t.type?S:I}const a=e=>e?n[e]||Xe[e]:null,s=et(t);let r=a(t.lookupName)||a(t.type)||a(s);if(!r){try{const t=e.createType(s),n=(0,i.c)(t.toRawType());if(r=a(n.lookupName||n.type)||a(et(n)),r)return r;if((0,c.f)(t))return y}catch(e){console.error(`params: findComponent: ${e.message}`)}_e.includes(s)||(_e.push(s),console.info(`params: findComponent: No pre-defined component for type ${s} from ${l.K[t.info]}: ${JSON.stringify(t)}`))}return r||re}(b,A,f),[b,A,f]),w=(0,s.useMemo)(()=>{const e=(0,r.U6)(b,b.isLookupType(A.lookupName||A.type)?(0,i.c)(b.createType(A.type).toRawType()):A).replace(/"/g,"").replace(/\\/g,"").replace(/:Null/g,"").replace(/:/g,": ").replace(/,/g,", ").replace(/^{_alias: {.*}, /,"{");return`${(0,o.b)(m)?"":`${m}: `}${e}${A.typeName&&!e.includes(A.typeName)?` (${A.typeName})`:""}`},[m,b,A]);return v?u?(0,a.jsx)(ie,{defaultValue:t,isOptional:!0,label:"None"}):(0,a.jsx)(v,{className:`${e} ui--Param`,defaultValue:t,isDisabled:n,isError:d,label:w,name:m,onChange:h,onEnter:p,onEscape:g,overrides:f,registry:b,type:A,withLength:x},`${m||"unknown"}:${w}`):null}),nt=s.memo(function({defaultValue:e,index:t,isDisabled:n,isError:i,name:r,onChange:o,onEnter:l,onEscape:c,overrides:d,registry:u,type:m,withLength:h=!0}){const p=(0,s.useCallback)(e=>o(t,e),[t,o]);return(0,a.jsx)("div",{className:"ui--Param-composite",children:(0,a.jsx)(tt,{defaultValue:e,isDisabled:n,isError:i,name:r,onChange:p,onEnter:l,onEscape:c,overrides:d,registry:u,type:m,withLength:h},`input:${t}`)})})},12387(e,t,n){n.d(t,{A:()=>d});var a=n(31085),s=n(14041),i=n(85121),r=n(9106),o=n(16902);let l=0;const c=r.I.div`
  border-radius: 0.25rem;
  color: #fff;
  display: inline-block;
  font-size: var(--font-size-tiny);
  font-weight: var(--font-weight-normal);
  line-height: 1rem;
  margin: 0 0.125rem;
  opacity: 0.85;
  padding: 0.25em 0.75em;
  position: relative;
  white-space: nowrap;
  z-index: 1;

  &.tinySize {
    font-size: var(--font-size-tiny);
  }

  &.blackColor {
    background: #000;
  }

  &.blueColor {
    background: #2185d0;
  }

  &.greenColor {
    background: #21ba45;
  }

  &.greyColor {
    background: #767676;
  }

  &.lightgreyColor {
    background: #b6b6b6;
    opacity: 0.7;
  }

  &.orangeColor {
    background: #f2711c;
  }

  &.pinkColor {
    background: #e03997;
  }

  &.purpleColor {
    background: #a45ee5;
  }

  &.redColor {
    background: #db2828;
  }

  &.yellowColor {
    background: darkgoldenrod;
  }

  &.themeColor.darkTheme {
    background-color: rgba(255,255,255,0.08);
  }
`,d=s.memo(function({className:e="",color:t="theme",hover:n,label:r,size:d="small"}){const{theme:u}=(0,i.D)(),[m]=(0,s.useState)(()=>`tag-hover-${Date.now()}-${l++}`);return(0,a.jsxs)(c,{className:`${e} ui--Tag ${t}Color ${d}Size ${u}Theme`,color:t||"grey","data-for":n&&m,"data-tip":!!n,children:[r,n&&(0,a.jsx)(o.A,{text:n,trigger:m})]})})},13158(e,t,n){n.d(t,{S:()=>i});var a=n(14041),s=n(29220);function i(e,t,{transform:n}={},i){const[r,o]=(0,a.useState)(),l=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(e&&t){const a=(0,s.A)({at:i,params:t});a!==l.current&&(l.current=a,(i&&"0"!==i?e.keysAt(i,...t):e.keys(...t)).then(e=>o(n?n(e):e)).catch(console.error))}},[i,e,t,n]),r}},13648(e,t,n){n.d(t,{y:()=>p});var a=n(14041),s=n(95927),i=n.n(s),r=n(41206),o=n(51524),l=n(55155),c=n(61020),d=n(25066),u=n(79129);const m=o.EX.div(o.u_),h=new(i())(6e3),p=(0,l.F)("useBlockInterval",function(e){const{api:t}=(0,c.g)(),n=e||t,s=(0,u.Gc)(n.call.auraApi?.slotDuration&&n.call.auraApi.slotDuration,[]),i=(0,u.Gc)(n.call.babeApi?.configuration&&n.call.babeApi.configuration,[],{transform:e=>e?.slotDuration});return(0,a.useMemo)(()=>(s||i)??function(e){return(0,r.J)(d.j,e.consts.babe?.expectedBlockTime||e.consts.difficulty?.targetBlockTime||e.consts.subspace?.expectedBlockTime||(e.consts.timestamp?.minimumPeriod.gte(m)?e.consts.timestamp.minimumPeriod.mul(o.u_):e.query.teyrchainSystem?e.consts.aura?.slotDuration??h.mul(o.u_):h))}(n),[s,i,n])})},15308(e,t,n){n.d(t,{A:()=>g});var a=n(31085),s=n(14041),i=n(70020),r=n.n(i),o=n(85121),l=n(41340),c=n(9106);function d(e){return{key:e,text:e,value:e}}const u=(r().get("tags")||["Default"]).sort(),m=u.map(d);function h(e){u.push(e),m.push(d(e)),function(e){r().set("tags",e.sort())}(u)}const p=(0,c.I)(l.A)`
  && .ui.label {
    border: none;
    border-radius: 0.25rem;
    box-shadow: none;
    color: #fff;
    display: inline-block;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    line-height: 1.143rem;
    margin: 0.125rem 0.125rem;
    padding: 0.571em 0.857em;
    position: relative;
    white-space: nowrap;
    z-index: 1;

    .delete.icon::before {
      content: '\u2715';
    }
  }

  &&.darkTheme .ui.label {
    background-color: rgba(255, 255, 255, 0.08);
  }
`,g=s.memo(function({allowAdd:e=!0,className:t="",defaultValue:n,isDisabled:s,isError:i,label:r,onBlur:l,onChange:c,onClose:d,placeholder:u,searchInput:g,value:f,withLabel:b}){const{theme:A}=(0,o.D)();return(0,a.jsx)(p,{allowAdd:e&&!s,className:`${t} ui--InputTags ${A}Theme`,defaultValue:n,isDisabled:s,isError:i,isMultiple:!0,label:r,onAdd:h,onBlur:l,onChange:c,onClose:d,options:m,placeholder:u,searchInput:g,value:f,withLabel:b})})},15567(e,t,n){n.d(t,{Q:()=>i});var a=n(2926);const s=e=>t=>(0,a.uc)()===e?t:()=>null,i=s("web");s("app")},15816(e,t,n){n.d(t,{s:()=>i});var a=n(14041),s=n(76385);const i=(0,n(55155).F)("useBlockEvents",function(){return(0,a.useContext)(s.M)})},16006(e,t,n){n.d(t,{w:()=>d});var a=n(14041),s=n(13122),i=n(51524),r=n(55155),o=n(61020),l=n(79129);const c={idealInterest:0,idealStake:0,inflation:0,stakedFraction:0,stakedReturn:0},d=(0,r.F)("useInflation",function(e){const{api:t}=(0,o.g)(),n=(0,l.Gc)(t.query.balances?.totalIssuance),r=(0,l.Gc)(t.query.auctions?.auctionCounter),[d,u]=(0,a.useState)(c);return(0,a.useEffect)(()=>{const a=t.query.auctions?r:i.Yz;a&&n&&e&&u(function(e,t,n,a){const{auctionAdjust:r,auctionMax:o,falloff:l,maxInflation:c,minInflation:d,stakeTarget:u}=(0,s.V)(e),m=t.isZero()||n.isZero()?0:t.mul(i.i5).div(n).toNumber()/i.i5.toNumber(),h=u-Math.min(o,a.toNumber())*r,p=0===h?0:c/h,g=100*(d+(m<=h?m*(p-d/h):(c-d)*Math.pow(2,(h-m)/l)));return{idealInterest:p,idealStake:h,inflation:g,stakedFraction:m,stakedReturn:m?g/m:0}}(t,e,n,a))},[t,r,n,e]),d})},16043(e,t,n){n.d(t,{r:()=>c});var a=n(14041),s=n(6404),i=n(61020),r=n(11554),o=n(69647);function l(e=[],{added:t=[],removed:n=[]}){if(!t.length&&!n.length)return e;const a={};[e,t].forEach(e=>e.forEach(e=>{a[e.toHex()]=e})),n.forEach(e=>{delete a[e.toHex()]});const i=Object.entries(a).sort((e,t)=>(0,s.T)(e[1].cmp)?e[1].cmp(t[1]):e[0].localeCompare(t[0])).map(([,e])=>e);return i.length!==e.length||i.find((t,n)=>!t.eq(e[n]))?i:e}function c(e,t,n,s){const{api:c}=(0,i.g)(),[d,u]=(0,a.useState)(),m=(0,o.hz)(e),{blockHash:h,events:p}=(0,r.y)(m);return(0,a.useEffect)(()=>{n&&u(e=>l(e,{added:n}))},[n]),(0,a.useEffect)(()=>{h&&u(e=>l(e,t(p,c,s)))},[s,c,h,p,t]),d}},16898(e,t,n){function a(e,t){return t?t.$$typeof?"":Array.isArray(t)?t.map(e=>a(0,e)):t:t}function s(e,t){return JSON.stringify({test:e},a)===JSON.stringify({test:t},a)}n.d(t,{n:()=>s})},16902(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(43144),r=n(21023);const o=(0,n(9106).I)(r.A)`
  .tooltipSpacer {
    padding-bottom: 0.1rem;
  }

  > div {
    overflow: hidden;
  }

  &.ui--Tooltip {
    z-index: 1002;
    word-break: break-word;       /* Fallback for older browsers */
    overflow-wrap: break-word;    /* Modern standard */
    hyphens: auto;                /* Enables automatic hyphenation */
  }

  table {
    border: 0;
    overflow: hidden;
    width: 100%;

    td {
      text-align: left;
    }

    td:first-child {
      opacity: 0.75;
      padding-right: 0.25rem;
      text-align: right;
      white-space: nowrap;
    }
  }

  div+table,
  table+div {
    margin-top: 0.75rem;
  }

  > div+div {
    margin-top: 0.5rem;
  }

  &.address div {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .faded {
    margin-top: 0;
    opacity: 0.75 !important;
    font-size: var(--font-size-tiny) !important;

    .faded {
      font-size: 1em !important;
    }
  }

  .faded+.faded {
    margin-top: 0;
  }

  .row+.row {
    margin-top: 0.5rem;
  }
`,l=s.memo(function({children:e,className:t="",isClickable:n=!1,place:r,text:l,trigger:c}){const[d]=(0,s.useState)("undefined"==typeof document?{}:document.createElement("div"));return(0,s.useEffect)(()=>{const e="undefined"==typeof document?null:document.getElementById("tooltips");return e?.appendChild(d),()=>{e?.removeChild(d)}},[d]),(0,i.createPortal)((0,a.jsx)(o,{className:`${t} ui--Tooltip`,clickable:n,effect:"solid",id:c,place:r,children:(0,a.jsxs)("div",{className:"tooltipSpacer",children:[l,e]})}),d)})},18670(e,t,n){n.d(t,{C:()=>s});var a=n(14041);const s=(0,n(55155).F)("useAccountId",function(e=null,t){const[n,s]=(0,a.useState)(e),i=(0,a.useCallback)((e=null)=>{s(e),t&&t(e)},[t]);return[n,i]})},19348(e,t,n){n.d(t,{e:()=>f});var a=n(14041),s=n(41206),i=n(665),r=n(51524),o=n(71647),l=n(6404),c=n(58797),d=n(55155),u=n(97186),m=n(61020),h=n(27010);function p(e){return{proofSize:e.proofSize?(0,i.A)((0,o.i)(e.proofSize)?e.proofSize.unwrap():e.proofSize):r.Yz,refTime:(0,i.A)((0,o.i)(e.refTime)?e.refTime.unwrap():e.refTime)}}function g(e,t){const n=p(e),a=p(t);return{proofSize:(0,s.N)(r.Yz,n.proofSize.sub(a.proofSize)),refTime:(0,s.N)(r.Yz,n.refTime.sub(a.refTime))}}const f=(0,d.F)("useTxBatch",function(e,t){const{api:n}=(0,m.g)(),{allAccounts:i}=(0,u.o)(),[o,d]=(0,a.useState)(()=>Math.floor(t?.max||4)),f=(0,a.useMemo)(()=>function(e){return{baseExtrinsic:e.consts.system.blockWeights?p((0,h.iO)(e.consts.system.blockWeights.perClass.normal.baseExtrinsic).v2Weight):null,maxBlock:p((0,h.iO)(e.consts.system.blockWeights?e.consts.system.blockWeights.maxBlock:e.consts.system.maximumBlockWeight).v2Weight),maxExtrinsic:e.consts.system.blockWeights&&e.consts.system.blockWeights.perClass.normal.maxExtrinsic.isSome?p((0,h.iO)(e.consts.system.blockWeights.perClass.normal.maxExtrinsic.unwrap()).v2Weight):null}}(n),[n]);return(0,a.useEffect)(()=>{e&&e.length&&i[0]&&e[0].hasPaymentInfo&&(0,c.d)(async()=>{try{const t=await e[0].paymentInfo(i[0]),n=(0,h.iO)(t.weight);d(e=>n.v1Weight.isZero()?e:function({v1Weight:e,v2Weight:t},{baseExtrinsic:n,maxBlock:a,maxExtrinsic:i}){let o=0;return n&&i&&(o=Math.floor(.85*function(e,t){const n=p(e),a=p(t),i={proofSize:a.proofSize.isZero()?r.Yz:(0,s.N)(r.Yz,n.proofSize.mul(r.cM).div(a.proofSize)),refTime:a.refTime.isZero()?r.Yz:(0,s.N)(r.Yz,n.refTime.mul(r.cM).div(a.refTime))};return(i.proofSize.isZero()?i.refTime.toNumber():(0,s.J)(i.proofSize,i.refTime).toNumber())/100}(g(i,n),g(t,n)))),o||Math.floor(a.refTime.muln(64).div(e).toNumber()/100)}(n,f))}catch(e){console.error(e)}})},[i,n,f,t,e]),(0,a.useMemo)(()=>e&&e.length?function(e,t,n,a="default"){return 1!==n&&(0,l.T)(e.tx.utility?.batch)?t.reduce((e,t)=>{const a=e[e.length-1];return a.length>=n?e.push([t]):a.push(t),e},[[]]).map(t=>1===t.length?t[0]:"all"===a&&(0,l.T)(e.tx.utility.batchAll)?e.tx.utility.batchAll(t):"force"===a&&(0,l.T)(e.tx.utility.forceBatch)?e.tx.utility.forceBatch(t):e.tx.utility.batch(t)):t}(n,e,o,t?.type):null,[n,o,t,e])})},19444(e,t,n){n.d(t,{a:()=>o});var a=n(14041),s=n(55155),i=n(79129),r=n(50072);const o=(0,s.F)("useBrokerReservations",function(e,t){const n=(0,i.Gc)(t&&e?.query.broker.reservations),[s,o]=(0,a.useState)();return(0,a.useEffect)(()=>{n&&o(n.map(e=>({mask:(0,r.TK)(e[0]?.mask),maskBits:(0,r.TK)(e[0]?.mask)?.length??0,task:e[0]?.assignment?.isTask?e[0]?.assignment?.asTask.toString():e[0]?.assignment?.isPool?"Pool":""})))},[n]),s})},19475(e,t,n){n.d(t,{A:()=>p});var a=n(31085),s=n(14041),i=n(97783),r=n(40873),o=n(61020),l=n(25768),c=n(9106);const d=(0,i.Xi)(()=>""),u="\n  background: white;\n  border-radius: 50%;\n  box-sizing: border-box;\n  color: #333;\n\n  &.isInline {\n    display: inline-block;\n    height: 24px;\n    margin-right: 0.75rem;\n    vertical-align: middle;\n    width: 24px;\n  }\n",m=(0,c.I)(l.A)`${u}`,h=c.I.img`${u}`,p=s.memo(function({className:e="",isInline:t,logo:n,onClick:i,withoutHl:l}){const{apiEndpoint:c}=(0,o.g)(),[u,p,g]=(0,s.useMemo)(()=>{const e=d.find(e=>e.info===n),t=e?.ui.logo||n||c?.ui.logo,a=t||r.P,[s,i]=a&&"empty"!==a&&(a.startsWith("data:")||a.startsWith("fa;"))?a.startsWith("fa;")?[!0,a.substring(3)]:[!1,a]:[!1,r.P];return[!t||"empty"===n,i,s]},[c,n]),f=`${e} ui--ChainImg ${u&&!l?"highlight--bg":""} ${t?"isInline":""}`;return g?(0,a.jsx)(m,{className:f,icon:p}):(0,a.jsx)(h,{alt:"chain logo",className:f,onClick:i,src:p})})},19830(e,t,n){n.d(t,{C:()=>o,t:()=>r});var a=n(82036),s=n(48362),i=n(10370);const r=Object.entries({dicle:s.d,pezkuwi:i.d}).reduce((e,[t,n])=>(e[t]=n.reduce((e,n)=>(e[n]=`./light/${t}/${n}.json`,e),{}),e),{}),o={dicle:a.WellKnownChain.ksmcc3,pezkuwi:a.WellKnownChain.pezkuwi,pezkuwichain:a.WellKnownChain.pezkuwichain_v2_2,zagros:a.WellKnownChain.zagros2}},22067(e,t,n){n.d(t,{T:()=>s});var a=n(14041);const s=(0,n(55155).F)("useIsMountedRef",function(){const e=(0,a.useRef)(!1);return(0,a.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e})},22462(e,t,n){n.d(t,{A:()=>r});var a=n(31085),s=n(14041),i=n(11683);const r=s.memo(function({children:e,className:t="",label:n,value:r}){const o=Date.now(),[l,c]=(0,s.useMemo)(()=>[r||o,!(!r&&!o)],[o,r]);return(0,a.jsxs)("div",{className:`${t} ${c?"":"--tmp"}`,children:[n||"",(0,a.jsx)(i.A,{value:c?l:Date.now()}),e]})})},22679(e,t,n){n.d(t,{A:()=>s});var a=n(31085);const s=n(14041).memo(function({children:e,className:t=""}){return(0,a.jsx)("div",{className:`${t} ui--row --relative`,children:e})})},23780(e,t,n){n.d(t,{I:()=>s});var a=n(14041);const s=(0,n(55155).F)("useIpfsLink",function(e){return(0,a.useMemo)(()=>e?{ipfsHash:e,ipfsShort:`${e.substring(0,4)}…${e.slice(-4)}`,ipfsUrl:`https://ipfs.io/ipfs/${e}`}:null,[e])})},24067(e,t,n){n.d(t,{r:()=>d});var a=n(14041),s=n(55155),i=n(97186),r=n(61020),o=n(79129);const l={transform:e=>e.map(e=>e.toString())},c={transform:e=>e?.toString()||null},d=(0,s.F)("useCollectiveMembers",function(e){const{api:t}=(0,r.g)(),{allAccounts:n}=(0,i.o)(),s=(0,o.Gc)(t.derive[e]?.members,[],l),d=(0,o.Gc)(t.derive[e]?.prime,[],c);return(0,a.useMemo)(()=>({isMember:(s||[]).some(e=>n.includes(e)),members:s||[],prime:d}),[n,s,d])})},24474(e,t,n){n.d(t,{S:()=>c});var a=n(14041),s=n(89026),i=n(55155),r=n(42791),o=n(22067),l=n(25232);const c=(0,i.F)("useParaApi",function(e){const t=(0,o.T)(),n=(0,l.eu)(e),[i,c]=(0,a.useState)(()=>({api:null,endpoints:n,urls:[]})),d=(0,r.r)(i.urls);return(0,a.useEffect)(()=>{t.current&&c({api:null,endpoints:n,urls:(0,s.Z)(n.filter(({isDisabled:e,isUnreachable:t})=>!e&&!t).map(({value:e})=>e))})},[n,t]),(0,a.useEffect)(()=>{t.current&&c(({endpoints:e,urls:t})=>({api:d,endpoints:e,urls:t}))},[d,t]),i})},24732(e,t,n){n.d(t,{x:()=>s});const a=(0,n(28806).Y)(500);function s(e){return a.subscribe(()=>{const t=Date.now()-(e.state.callUpdatedAt||0)<=1500;t!==e.state.callUpdated&&e.setState({callUpdated:t})})}},25066(e,t,n){n.d(t,{a:()=>d,j:()=>c});var a=n(14041),s=n(95927),i=n.n(s),r=n(665),o=n(55155),l=n(13648);const c=new(i())(864e5),d=(0,o.F)("useBlocksPerDays",function(e=1){const t=(0,l.y)();return(0,a.useMemo)(()=>c.mul((0,r.A)(e)).div(t),[t,e])})},25232(e,t,n){n.d(t,{DF:()=>d,_f:()=>m,eu:()=>u});var a=n(14041),s=n(97783),i=n(665),r=n(55155),o=n(61020);const l=(0,s.Xi)((e,t)=>t?.toString()||e);function c(e,t){const n=(0,i.A)(t).toNumber();return e.filter(({paraId:e})=>e===n)}const d=(0,r.F)("useRelayEndpoints",function(){const{api:e}=(0,o.g)();return(0,a.useMemo)(()=>{return t=e.genesisHash.toHex(),l.filter(({genesisHashRelay:e})=>t===e);var t},[e])}),u=(0,r.F)("useParaEndpoints",function(e){const t=d();return(0,a.useMemo)(()=>c(t,e),[t,e])}),m=(0,r.F)("useIsParasLinked",function(e){const t=d();return(0,a.useMemo)(()=>e?e.reduce((e,n)=>({...e,[n.toString()]:0!==c(t,n).length}),{}):{},[t,e])})},25768(e,t,n){n.d(t,{A:()=>d});var a=n(31085),s=n(3564),i=n(49475),r=n(24221),o=n(14041),l=n(9106);s.Yv.add(i.X7I);const c=(0,l.I)(r.g)`
  outline: none;

  &.isClickable {
    cursor: pointer;
  }

  &.isPadded {
    margin: 0 0.25rem;
  }

  &.grayColor {
    opacity: 0.25;
  }

  &.greenColor {
    color: green;
  }

  &.orangeColor {
    color: darkorange;
  }

  &.redColor {
    color: darkred;
  }

  &.transparentColor {
    color: transparent;
  }

  &.whiteColor {
    color: white;
  }

  &.darkGrayColor {
    color: #8B8B8B;
  }
`,d=o.memo(function({className:e="",color:t="normal",icon:n,isPadded:s,isSpinning:i,onClick:r,size:o="1x",tooltip:l}){const d={"data-testid":n,...l?{"data-for":l,"data-tip":!0}:{}};return(0,a.jsx)(c,{...d,className:`${e} ui--Icon ${t}Color${r?" isClickable":""}${s?" isPadded":""}`,icon:n,onClick:r,size:o,spin:i,tabIndex:-1})})},26101(e,t,n){n.d(t,{$:()=>r});var a=n(14041),s=n(55155),i=n(79129);const r=(0,s.F)("useBrokerConfig",function(e,t){const n=(0,i.Gc)(t&&e?.query.broker.configuration),[s,r]=(0,a.useState)();return(0,a.useEffect)(()=>{n&&n.isSome&&n.toJSON()&&r(function(e){const t=e.unwrap();return{advanceNotice:t.advanceNotice?.toNumber(),contributionTimeout:t.contributionTimeout?.toNumber(),idealBulkProportion:t.idealBulkProportion,interludeLength:t.interludeLength?.toNumber(),leadinLength:t.leadinLength?.toNumber(),limitCoresOffered:t.limitCoresOffered?.isSome?t.limitCoresOffered?.unwrap().toNumber():0,regionLength:t.regionLength?.toNumber(),renewalBump:t.renewalBump}}(n))},[n]),s})},26577(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(61020),r=n(79129),o=n(33168);const l=s.memo(function({children:e,className:t="",label:n,params:s}){const{api:l}=(0,i.g)(),c=(0,r.Gc)(l.derive.balances?.all,[s]);return(0,a.jsx)(o.A,{className:t,label:n,value:c?.freeBalance,children:e})})},26689(e,t,n){n.d(t,{A:()=>g,q:()=>c});var a=n(64767);const s=["2000","1900","1800","1700","1600","1500","1400","1300","1200","1100","1000","900","800","700","600","500","400"].map(e=>`\n  .media--${e} {\n    @media only screen and (max-width: ${e}px) {\n      display: none !important;\n    }\n  }\n\n  .media--${e}-noPad {\n    @media only screen and (max-width: ${e}px) {\n      min-width: 0 !important;\n      padding: 0 !important;\n    }\n  }\n`).join("");var i=n(71889);const r=160,o=[.2126,.7152,.0722],l=[0,2,4],c="#f19135";function d(e){return e||c}function u(e){const t=d(e).replace("#","").toLowerCase();return l.reduce((e,n,a)=>e+parseInt(t.substring(n,n+2),16)*o[a],0)}function m(e){return u(e)>r?"rgba(45, 43, 41, 0.875)":"rgba(255, 253, 251, 0.875)"}function h(e){const t=u(e);return t<16?"rgba(255, 255, 255, 0.15)":t<r?"rgba(0, 0, 0, 0.15)":"rgba(255, 255, 255, 0.15)"}function p(e,t){const n=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return t?`rgba(${n}, ${a}, ${s}, ${t})`:`rgb(${n}, ${a}, ${s})`}const g=(0,a.DU)(({uiHighlight:e})=>`\n  /* Dark theme CSS variables */\n  html[data-theme="dark"],\n  [data-theme="dark"] {\n    --bg-page: #26272c !important;\n    --bg-table: #3b3d3f !important;\n    --bg-input: #38393f !important;\n    --bg-menu: #26272c !important;\n    --bg-tabs: #38393f !important;\n    --bg-sidebar: #1a1b20 !important;\n    --color-text: rgba(244, 242, 240, 0.8) !important;\n    --border-table: #343536 !important;\n  }\n\n  /* Light theme CSS variables */\n  html[data-theme="light"],\n  [data-theme="light"] {\n    --bg-page: #f5f3f1 !important;\n    --bg-table: #ffffff !important;\n    --bg-input: #ffffff !important;\n    --bg-menu: #ffffff !important;\n    --bg-tabs: #ffffff !important;\n    --bg-sidebar: #fafafa !important;\n    --color-text: rgba(78, 78, 78, 0.8) !important;\n    --border-table: #efedeb !important;\n  }\n\n  .highlight--all {\n    background: ${d(e)} !important;\n    border-color: ${d(e)} !important;\n    color: ${d(e)} !important;\n  }\n\n  .highlight--before:before {\n    background: ${d(e)} !important;\n  }\n\n  .highlight--before-border:before {\n    border-color: ${d(e)} !important;\n  }\n\n  .highlight--bg {\n    background: ${d(e)} !important;\n  }\n\n  .highlight--bg-contrast {\n    background: ${m(e)};\n  }\n\n  .ui--MenuItem.isActive .ui--Badge {\n    background: ${d(e)};\n    color: ${m(e)} !important;\n  }\n\n  .ui--MenuItem {\n    & .ui--Badge {\n      color: ${u(e)<r?"#fff":"#424242"};\n    }\n\n    &:hover:not(.isActive) .ui--Badge {\n      background: ${u(e)<r?"rgba(255, 255, 255, 0.8)":"#4D4D4D"};\n      color: ${u(e)>r?"#fff":"#424242"};\n    }\n  }\n\n  .ui--Tab .ui--Badge {\n    background: ${d(e)};\n    color: ${u(e)<r?"#fff":"#424242"};\n  }\n\n  .highlight--bg-faint,\n  .highlight--bg-light {\n    background: var(--bg-table);\n    position: relative;\n\n    &:before {\n      background: ${d(e)};\n      bottom: 0;\n      content: ' ';\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n      z-index: -1;\n    }\n  }\n\n  .highlight--bg-faint:before {\n    opacity: 0.025;\n  }\n\n  .highlight--bg-light:before {\n    opacity: 0.2;\n  }\n\n  .highlight--border {\n    border-color: ${d(e)} !important;\n  }\n\n  .highlight--color {\n    color: ${d(e)} !important;\n  }\n\n  .highlight--color-contrast {\n    color: ${m(e)};\n  }\n\n  .highlight--fill {\n    fill: ${d(e)} !important;\n  }\n\n  .highlight--gradient {\n    background: linear-gradient(90deg, ${e||c}, transparent);\n  }\n\n  .ui--MenuItem.topLevel:hover,\n  .ui--MenuItem.isActive.topLevel:hover {\n    color: ${m(e)};\n\n    a {\n      background-color: ${h(e)};\n    }\n  }\n\n  .menuItems li:hover .groupHdr {\n    background: ${h(e)};\n    color: ${m(e)};\n  }\n\n  .groupMenu {\n    background: ${d(e)} !important;\n\n    &::before {\n      background: ${h(e)};\n      color:  ${m(e)};\n    }\n    li {\n      color:  ${m(e)};\n    }\n  }\n\n  .highlight--hover-bg:hover {\n    background: ${d(e)} !important;\n  }\n\n  .highlight--hover-color:hover {\n    color: ${d(e)} !important;\n  }\n\n  .highlight--icon {\n    .ui--Icon {\n      color: ${d(e)} !important;\n    }\n  }\n\n  .highlight--shadow {\n    box-shadow: 0 0 1px ${d(e)} !important;\n  }\n\n  .highlight--stroke {\n    stroke: ${d(e)} !important;\n  }\n\n  .ui--Button {\n    &:not(.isDisabled):not(.isIcon):not(.isBasic),\n    &.withoutLink:not(.isDisabled) {\n      .ui--Icon {\n        background: ${d(e)};\n        color: ${m(e)};\n      }\n    }\n\n    &.isBasic:not(.isDisabled):not(.isIcon):not(.isSelected) {\n      &:not(.isReadOnly) {\n        box-shadow: 0 0 1px ${d(e)};\n      }\n\n      .ui--Icon {\n        color: ${d(e)};\n      }\n    }\n\n    &.isSelected {\n      box-shadow: 0 0 1px ${d(e)};\n    }\n\n    &:hover:not(.isDisabled):not(.isReadOnly),\n    &.isSelected {\n      background: ${d(e)};\n      color: ${m(e)};\n      text-shadow: none;\n\n      &:not(.isIcon),\n      &.withoutLink {\n        .ui--Icon {\n          color: inherit;\n        }\n      }\n    }\n  }\n\n  .ui--Table td .ui--Button {\n    &:not(.isDisabled):not(.isIcon):not(.isToplevel),\n    &.withoutLink:not(.isDisabled) {\n      &:hover {\n        .ui--Icon {\n          color: ${m(e)};\n        }\n      }\n\n      .ui--Icon {\n        background: transparent;\n        color: inherit;\n        color: ${d(e)};\n      }\n    }\n  }\n\n  .ui--Popup .ui--Button.isOpen:not(.isDisabled):not(.isReadOnly) {\n    background: ${d(e)} !important;\n    color: ${m(e)} !important;\n\n    .ui--Icon {\n      background: transparent !important;\n      color: ${m(e)} !important;\n    }\n  }\n\n\n  .ui--Menu {\n    .ui--Menu__Item:hover {\n       background: ${p(d(e),".1")};\n    }\n\n    .ui--Toggle.isChecked .ui--Toggle-Slider {\n      background: ${d(e)};\n\n      &::before {\n        border-color: ${d(e)};\n      }\n    }\n  }\n\n  .ui--Sort {\n    .ui--Labelled.ui--Dropdown:hover {\n     .ui.selection.dropdown {\n        border-color: ${d(e)};\n\n       .visible.menu {\n         border: 1px solid ${d(e)};\n        }\n      }\n    }\n\n    button:hover {\n      border-color: ${d(e)};\n    }\n\n    button:hover,\n    .ui--Labelled.ui--Dropdown:hover {\n      &::after {\n        background-color:  ${d(e)};\n      }\n    }\n\n    .arrow.isActive {\n      color:  ${d(e)};\n      opacity: 1;\n    }\n  }\n\n  .theme--dark,\n  .theme--light {\n    .ui--Tabs .active .tabLinkText::after {\n      background: ${d(e)};\n    }\n\n    .ui.primary.button,\n    .ui.buttons .primary.button {\n      background: ${d(e)};\n\n      &.active,\n      &:active,\n      &:focus,\n      &:hover {\n        background-color: ${d(e)};\n      }\n    }\n\n    .ui--Toggle.isChecked {\n      &:not(.isRadio) {\n        .ui--Toggle-Slider {\n          background: ${d(e)} !important;\n\n          &:before {\n            border-color: ${d(e)} !important;\n          }\n        }\n      }\n    }\n  }\n\n  .ui--ExpandButton:hover {\n    border-color: ${d(e)} !important;\n\n    .ui--Icon {\n      color: ${d(e)} !important;\n    }\n  }\n\n  .ui--Tag.themeColor.lightTheme,\n  .ui--InputTags.lightTheme .ui.label {\n    background: ${p(d(e),"0.08")};\n    color: ${u(e)>r?"#424242":d(e)};\n  }\n\n  .ui--Tag.themeColor.darkTheme,\n  .ui--InputTags.darkTheme .ui.label {\n    color: ${u(e)>r?d(e):"#fff"};\n  }\n\n  #root {\n    background: var(--bg-page);\n    color: var(--color-text);\n    font: var(--font-sans);\n    font-weight: var(--font-weight-normal);\n    height: 100%;\n  }\n\n  a {\n    cursor: pointer;\n  }\n\n  article {\n    background: var(--bg-table);\n    border: 1px solid #f2f2f2;\n    border-radius: 0.25rem;\n    box-sizing: border-box;\n    margin: 0.25rem;\n    padding: 1.25rem;\n    position: relative;\n    text-align: left;\n\n    > ul {\n      margin: 0;\n      padding: 0;\n    }\n\n    &.error,\n    &.warning {\n      border-left-width: 0.25rem;\n      font-size: var(--font-size-small);\n      line-height: 1.5;\n      margin-left: 2.25rem;\n      padding: 0.75rem 1rem;\n      position: relative;\n      z-index: 5;\n\n      &:before {\n        border-radius: 0.25rem;\n        bottom: 0;\n        content: ' ';\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        z-index: -1;\n      }\n    }\n\n    &.mark {\n      margin: 0.5rem 0 0.5rem 2.25rem;\n      padding: 0.5rem 1rem !important;\n    }\n\n    &.nomargin {\n      margin-left: 0;\n    }\n\n    &.extraMargin {\n      margin: 2rem auto;\n    }\n\n    &.centered {\n      margin: 1.5rem auto;\n      max-width: 75rem;\n\n      &+.ui--Button-Group {\n        margin-top: 2rem;\n      }\n    }\n\n    &.error {\n      &:before {\n        background: rgba(255, 12, 12, 0.05);\n      }\n\n      border-color: rgba(255, 12, 12, 1);\n    }\n\n    &.padded {\n      padding: 0.75rem 1rem;\n\n      > div {\n        margin: 0.25rem;\n      }\n    }\n\n    &.warning {\n      &:before {\n        background: rgba(255, 196, 12, 0.05);\n      }\n\n      border-color: rgba(255, 196, 12, 1);\n    }\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font: var(--font-sans);\n  }\n\n  br {\n    line-height: 1.5rem;\n  }\n\n  details {\n    cursor: pointer;\n\n    &[open] > summary {\n      white-space: normal;\n\n      br, br + * {\n        display: block;\n      }\n    }\n\n    > summary {\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      outline: none;\n\n      br, br + * {\n        display: none;\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5 {\n    color: var(--color-header);\n    font: var(--font-sans);\n    font-weight: var(--font-weight-header);\n    margin-bottom: 0.25rem;\n  }\n\n\n  h1 {\n    font-size: var(--font-size-h1);\n    text-transform: lowercase;\n\n    em {\n      font-style: normal;\n      text-transform: none;\n    }\n  }\n\n  h2 {\n    font-size: var(--font-size-h2);\n  }\n\n  h3 {\n    font-size: var(--font-size-h3);\n  }\n\n  h4 {\n    font-size: var(--font-size-h4);\n  }\n\n  header {\n    margin-bottom: 1.5rem;\n    text-align: center;\n\n    > article {\n      background: transparent;\n    }\n  }\n\n  html {\n    height: 100%;\n  }\n\n  label {\n    box-sizing: border-box;\n    display: block;\n    font: var(--font-sans);\n  }\n\n  // we treat h5 and label as equivalents\n  label, h5 {\n    color: var(--color-label);\n    font-size: var(--font-size-label);\n    font-style: normal;\n    font-weight: var(--font-weight-label);\n    line-height: 1rem;\n    margin-bottom: 0.25rem !important;\n    text-transform: var(--text-transform-label);\n    vertical-align: middle;\n  }\n\n  button {\n    font-size: var(--font-size-small);\n    font-weight: var(--font-weight-normal);\n  }\n\n  main {\n    > section {\n      margin-bottom: 2em;\n    }\n  }\n\n  /* Add our overrides */\n  \n  .ui.hidden.divider {\n    margin: 0.5rem 0;\n  }\n\n  .ui.dropdown {\n    display: block;\n    min-width: 0;\n    width: 100%;\n  }\n\n  .ui.dropdown,\n  .ui.input {\n    margin: 0.25rem 0;\n  }\n\n  .ui.selection.dropdown,\n  .ui.input > input,\n  .ui.selection.dropdown > input {\n    background: var(--bg-input);\n    border-color: var(--border-input);\n    color: var(--color-text);\n    font: var(--font-sans);\n    font-size: var(--font-size-base);\n\n    &:focus {\n      background: var(--bg-input);\n      color: var(--color-text);\n    }\n  }\n\n  .ui.action.input > .buttons {\n    position: relative;\n  }\n\n  .ui.dropdown {\n    &.disabled {\n      background: transparent;\n      border-style: dashed;\n      opacity: 1;\n\n      .dropdown.icon {\n        opacity: 0;\n      }\n    }\n\n    &.selection.visible {\n      background: var(--bg-input);\n      color: var(--color-text);\n    }\n\n    .menu {\n      background: var(--bg-input);\n      color: var(--color-text);\n\n      > .item {\n        border-color: transparent !important;\n        color: var(--color-text) !important;\n\n        &.header.disabled {\n          margin: 1em 0 0 0;\n          opacity: 1;\n\n          &:hover,\n          &.selected {\n            background: var(--bg-input);\n          }\n        }\n      }\n    }\n\n    > .text {\n      min-height: 1em;\n\n      &:not(.default) {\n        color: var(--color-text) !important;\n      }\n    }\n  }\n\n  .ui.input {\n    width: 100%;\n\n    &.disabled:not(.retain-appearance) {\n      opacity: 1;\n\n      input {\n        background: transparent;\n        border-style: dashed;\n      }\n\n      .ui.buttons {\n        .ui.button {\n          background: transparent;\n        }\n\n        &.primary .ui.button {\n          background-color: #666;\n          border-color: transparent;\n          color: #f9f8f7;\n          opacity: 0.5;\n\n          .dropdown.icon {\n            opacity: 0;\n          }\n        }\n      }\n    }\n\n    &.error input {\n      background-color: var(--bg-input-error);\n      border-color: #e0b4b4;\n    }\n\n    > input {\n      width: 0;\n    }\n  }\n\n  .ui.label {\n    background: transparent;\n    font-weight: var(--font-weight-normal);\n    position: relative;\n    z-index: 1;\n  }\n\n  .ui.page.modals.transition.visible {\n    display: flex !important;\n  }\n\n  .ui.secondary.vertical.menu > .item {\n    margin: 0;\n  }\n\n  .ui[class*="left icon"].input.left.icon > input {\n    padding-left: 4rem !important;\n  }\n\n  .ui[class*="left icon"].input.left.icon > .ui--Icon.big {\n    left: -7px;\n    opacity: 1;\n  }\n\n  /* modals aligned to top, not center */\n  .ui.dimmer {\n    background-color: rgba(96, 96, 96, 0.5);\n    justify-content: flex-start;\n  }\n\n  /* remove the default white background, settings app has it as part of Tab */\n  .ui.segment {\n    background: transparent;\n  }\n\n  ${i.Ay}\n  \n  .ui--grid,\n  .ui--row {\n    width: 100%;\n  }\n\n  .ui--grid,\n  .ui--row {\n    align-items: stretch;\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: flex-start;\n    text-align: left;\n    min-width: 0;\n  }\n\n  .ui--grid > div,\n  .ui--row > div {\n    box-sizing: border-box;\n    min-width: 0;\n  }\n\n  .ui--grid > div:not(.grow):not(.shrink),\n  .ui--row > div:not(.grow):not(.shrink) {\n    width: 100%;\n  }\n\n  .ui--grid > div:not(.shrink),\n  .ui--grid > div.full,\n  .ui--row > div.full {\n    flex: 0 100%;\n  }\n\n  .ui--grid > div.shrink,\n  .ui--row > div.shrink {\n    flex: 0 1 auto;\n  }\n\n  .ui--grid > div.grow,\n  .ui--row > div.grow {\n    flex: 1 1 auto;\n  }\n\n  .ui--grid > div.large,\n  .ui--row > div.large {\n    flex: 0 75%;\n  }\n\n  .ui--grid > div.medium,\n  .ui--row > div.medium {\n    flex: 0 50%;\n  }\n\n  .ui--grid > div.small,\n  .ui--row > div.small {\n    flex: 0 25%;\n  }\n\n  .ui--grid > div.sixty6,\n  .ui--row > div.sixty6 {\n    flex: 0 66.66%;\n  }\n\n  .ui--grid > div.thirty3,\n  .ui--row > div.thirty3 {\n    flex: 0 33.33%;\n  }\n\n  ${s}\n  \n  .ui--output {\n    background: var(--bg-input);\n    border-radius: 4px;\n    border: 1px dashed #eee;\n    box-sizing: border-box;\n    line-height: 1rem;\n    max-height: 25rem;\n    overflow-y: auto;\n    padding: 0.75rem 1rem;\n    position: relative;\n    word-break: break-all;\n\n    &.error {\n      background: var(--bg-input-error);\n      border-color: #e0b4b4;\n    }\n\n    &.monospace {\n      font-family: monospace;\n    }\n  }\n\n  header .ui--Button-Group {\n    text-align: center;\n  }\n\n  .ui.input .ui--Button-Group {\n    margin: 0;\n  }\n\n  button.u.ui--Icon.icon-button {\n    padding-top: 0;\n    padding-right: 0;\n    padding-bottom: 0.3em;\n    padding-left: 0.3em;\n    color: #2e86ab !important;\n    background: none !important;\n  }\n\n  button.ui--Button {\n    font: var(--font-sans);\n  }\n\n  .editable {\n    cursor: pointer;\n  }\n\n  .ui--DropdownLinked.ui--row {\n    .small .ui.selection.dropdown {\n      border-right: none;\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n      min-width: 5rem;\n    }\n\n    .large .ui.selection.dropdown {\n      border-left: none;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n    }\n  }\n\n  .ui--Identicon-React-Base {\n    border: 1px solid var(--border-identicon);\n    border-radius: 50%;\n    display: inline-block;\n    overflow: hidden;\n\n    svg circle:first-child {\n      fill: var(--bg-identicon-circle);\n    }\n  }\n\n  .ui--Input {\n    &.disabled {\n      overflow: hidden;\n\n      input {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n    }\n\n    &.inPlaceEditor {\n      margin: 0 !important;\n\n      input {\n        padding: 0 !important;\n        background: rgba(230, 230, 230, 0.8) !important;\n        border: 0 !important;\n        border-radius: 0 !important;\n        box-shadow: 0 3px 3px rgba(0,0,0,.2);\n      }\n    }\n\n    &.isWarning.ui.input {\n      > input,\n      input:focus {\n        background: #ffffe0;\n        border-color: #eeeeae;\n      }\n    }\n\n    .ui--SiDropdown {\n      width: 6rem;\n      text-align: center;\n    }\n  }\n\n  .ui--Static {\n    min-width: 2rem; /* adjust width from normal dropdown sizing */\n    overflow: hidden;\n    word-break: break-all;\n  }\n\n  .ui--Tooltip {\n    text-align: center;\n    z-index: 1002;\n    max-width: 300px;\n\n\n    &.accounts-badge {\n      background-color: var(--bg-menu) !important;\n      color: var(--color-text) !important;\n      box-shadow: 0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%);\n      z-index: 999;\n\n      &.place-top::after {\n        border-top-color: var(--bg-menu) !important;\n      }\n\n      &.place-right::after {\n        border-right-color: var(--bg-menu) !important;\n      }\n\n    a {\n      color: #3BBEFF;\n\n      &.purpleColor {\n        color: #E6007A;\n      }\n    }\n  }\n\n`)},27010(e,t,n){n.d(t,{fY:()=>u,iO:()=>h,wj:()=>p});var a=n(14041),s=n(93302),i=n(51524),r=n(6404),o=n(58797),l=n(55155),c=n(61020),d=n(22067);const u="0x9876543210abcdef9876543210abcdef9876543210abcdef9876543210abcdef",m={encodedCallLength:0,v1Weight:i.Yz,v2Weight:{refTime:i.Yz},weight:i.Yz};function h(e){if(!e){const e=i.Yz;return{v1Weight:e,v2Weight:{proofSize:i.Yz,refTime:e}}}if(e.proofSize)return{v1Weight:e.refTime.toBn(),v2Weight:e};if(e.refTime){const t=e.refTime.toBn();return{v1Weight:t,v2Weight:{proofSize:i.Yz,refTime:t}}}const t=e.toBn();return{v1Weight:t,v2Weight:{proofSize:i.Yz,refTime:t}}}const p=(0,l.F)("useWeight",function(e){const{api:t}=(0,c.g)(),n=(0,d.T)(),[i,l]=(0,a.useState)(()=>(0,s.b)({isWeightV2:!(0,r.T)(t.registry.createType("Weight").toBn)},m));return(0,a.useEffect)(()=>{e&&t.call.transactionPaymentApi?(0,o.d)(async()=>{try{const{v1Weight:a,v2Weight:i}=h((await t.tx(e).paymentInfo(u)).weight);n.current&&l(t=>(0,s.b)({},t,{encodedCallLength:e.encodedLength,v1Weight:a,v2Weight:i,weight:t.isWeightV2?i:a}))}catch(e){console.error(e)}}):l(e=>(0,s.b)({},e,m))},[t,e,n]),i})},27539(e,t,n){n.d(t,{A:()=>d});var a=n(31085),s=n(14041),i=n(1445),r=n(74809),o=n(98893),l=n(57226),c=n(27721);const d=s.memo(function({children:e,className:t="",eventName:n,value:d,withExpander:u}){const{t:m}=(0,c.B)(),h=d.data.names,p=d.typeDef.map((e,t)=>({name:h?.[t]||void 0,type:e})),g=d.data.map(e=>({isValid:!0,value:e})),f=(0,s.useMemo)(()=>n&&l.W3.includes(n)?l.Tu:void 0,[n]),b=(0,s.useMemo)(()=>{if("contracts"===d.section&&"ContractExecution"===d.method&&2===d.data.length){const[e,t]=d.data;try{const n=(0,r.fJ)(e.toString());if(n){const e=n.decodeEvent(t);return{...e,values:e.args.map(e=>({isValid:!0,value:e}))}}}catch(e){console.error(e)}}return null},[d]);return(0,a.jsxs)("div",{className:`${t} ui--Event`,children:[e,(0,a.jsx)(o.Ay,{isDisabled:!0,overrides:f,params:p,registry:d.registry,values:g,withExpander:u,children:b&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.pd,{isDisabled:!0,label:m("contract event"),value:b.event.identifier}),(0,a.jsx)(o.Ay,{isDisabled:!0,params:b.event.args,registry:d.registry,values:b.values})]})})]})})},27721(e,t,n){n.d(t,{A:()=>i,B:()=>s});var a=n(37140);function s(){return(0,a.Bd)("react-params")}function i(e){return(0,a.CI)(["react-params"])(e)}},27900(e,t,n){n.d(t,{C9:()=>i.default,EZ:()=>a.default,QR:()=>o.Q,mq:()=>r.default,up:()=>s.default}),n(49788),n(63002);var a=n(40833),s=n(1621),i=n(10665),r=n(2385),o=n(15567)},28138(e,t,n){n.d(t,{e:()=>r});var a=n(14041),s=n(55155),i=n(22067);const r=(0,s.F)("useToggle",function(e=!1,t){const n=(0,i.T)(),[s,r]=(0,a.useState)(e),o=(0,a.useCallback)(()=>{n.current&&r(e=>!e)},[n]),l=(0,a.useCallback)(e=>{n.current&&r(e)},[n]);return(0,a.useEffect)(()=>t&&t(s),[s,t]),(0,a.useMemo)(()=>[s,o,l],[s,o,l])})},29133(e,t,n){n.d(t,{I:()=>a});const a=n(14041).createContext({})},30520(e,t,n){n.d(t,{y:()=>r});var a=n(55155),s=n(61020),i=n(79129);const r=(0,a.F)("useBalancesAll",function(e){const{api:t}=(0,s.g)();return(0,i.Gc)(t.derive.balances?.all,[e])})},31706(e,t,n){n.d(t,{q:()=>r});var a=n(55155),s=n(61020),i=n(79129);const r=(0,a.F)("useDeriveAccountInfo",function(e){const{apiIdentity:t}=(0,s.g)();return(0,i.Gc)(t?.derive.accounts.info,[e])})},31948(e,t,n){n.d(t,{C:()=>i});var a=n(14041),s=n(29220);function i(e,t,{transform:n}={},i){const[r,o]=(0,a.useState)(),l=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(e&&t){const a=(0,s.A)({at:i,params:t});a!==l.current&&(l.current=a,(i&&"0"!==i?e.entriesAt(i,...t):e.entries(...t)).then(e=>o(n?n(e):e)).catch(console.error))}},[i,e,t,n]),r}},32123(e,t,n){n.d(t,{N:()=>c});var a=n(14041),s=n(6404),i=n(55155),r=n(61020),o=n(40941);const l={hasFailed:!1,hasPassed:!1,isCloseable:!1,isVoteable:!1,remainingBlocks:null},c=(0,i.F)("useVotingStatus",function(e,t,n){const{api:i}=(0,r.g)(),c=(0,o.x)();return(0,a.useMemo)(()=>c&&e?function(e,t,n,a,i){const[r]=e.registry.getModuleInstances(e.runtimeVersion.specName.toString(),i)||[i],o=(0,s.T)(e.tx[r]?.close)?r:null;if(!n.end||!o)return{hasFailed:!1,hasPassed:!1,isCloseable:!1,isVoteable:!0,remainingBlocks:null};const l=t.gte(n.end),c=n.threshold.lten(n.ayes.length),d=n.threshold.gtn(Math.abs(a-n.nays.length));return{hasFailed:d,hasPassed:c,isCloseable:4===e.tx[o].close.meta.args.length?l||c||d:l,isVoteable:!l,remainingBlocks:l?null:n.end.sub(t)}}(i,c,e,t,n):l,[i,c,t,n,e])})},33168(e,t,n){n.d(t,{A:()=>p});var a=n(31085),s=n(14041),i=n(9106),r=n(61020),o=n(848),l=n(76733),c=n(6943);function d(e,t,n,s="",i=!1,r){return r?(0,a.jsxs)(a.Fragment,{children:[`${e}${i?"":"."}`,!i&&(0,a.jsx)("span",{className:"ui--FormatBalance-postfix",children:`${t||""}`.slice(-4)}),(0,a.jsxs)("span",{className:"ui--FormatBalance-unit",children:[" ",r]}),s]}):(0,a.jsxs)(a.Fragment,{children:[`${e}${i?"":"."}`,!i&&(0,a.jsx)("span",{className:"ui--FormatBalance-postfix",children:`0000${t||""}`.slice(-4)}),(0,a.jsxs)("span",{className:"ui--FormatBalance-unit",children:[" ",n]}),s]})}function u(e,t,n){const[a,s]=e.split("."),[i,r]=s.split(" ");return d(a,i,r,t,n)}function m(e,[t,n],s=!0,i,r,l,c){const[u,m,h]=(0,o.Q)(e,{decimals:t,forceUnit:"-",withSi:!1}).split("."),p=r||i&&u.length>=4,g=s?n:"";if(u.length>7){const[n,s]=(0,o.Q)(e,{decimals:t,withUnit:!1}).split("."),i=s.substring(0,4),r=s.substring(4);return(0,a.jsxs)(a.Fragment,{children:[n,".",(0,a.jsx)("span",{className:"ui--FormatBalance-postfix",children:i}),(0,a.jsxs)("span",{className:"ui--FormatBalance-unit",children:[r,r?g:` ${g}`]}),l||""]})}return c?d(u,m,g,l,p,h):d(u,m,g,l,p)}const h=i.I.span`
  vertical-align: baseline;
  white-space: nowrap;

  * {
    vertical-align: baseline !important;
  }

  > label,
  > .label {
    display: inline-block;
    margin-right: 0.25rem;
    vertical-align: baseline;
  }

  .ui--FormatBalance-unit {
    font-size: var(--font-percent-tiny);
  }

  .ui--FormatBalance-value {
    text-align: right;

    > .ui--FormatBalance-postfix {
      font-weight: lighter;
      vertical-align: baseline;
    }
  }

  > .ui--Button {
    margin-left: 0.25rem;
  }

  .ui--Icon {
    margin-bottom: -0.25rem;
    margin-top: 0.25rem;
  }

  .ui--Icon+.ui--FormatBalance-value {
    margin-left: 0.375rem;
  }
`,p=s.memo(function({children:e,className:t="",format:n,formatIndex:i,isShort:o,label:d,labelPost:p,useTicker:g,value:f,valueFormatted:b,withCurrency:A,withSi:x}){const{t:v}=(0,c.B)(),{api:w}=(0,r.g)(),y=(0,s.useMemo)(()=>n||function(e,t=0){const n=e.chainDecimals,a=e.chainTokens;return[t<n.length?n[t]:n[0],t<a.length?a[t]:a[1]]}(w.registry,i),[w,n,i]);return(0,a.jsxs)(h,{className:`${t} ui--FormatBalance`,children:[d?(0,a.jsxs)(a.Fragment,{children:[d," "]}):"",(0,a.jsx)("span",{className:"ui--FormatBalance-value --digits","data-testid":"balance-summary",children:b?u(b,p,o):f?"all"===f?(0,a.jsxs)(a.Fragment,{children:[v("everything"),p||""]}):m(f,y,A,x,o,p,g):(0,l.K)(p)?`-${p.toString()}`:p}),e]})})},35038(e,t,n){n.d(t,{g:()=>a});const a={api:void 0,registry:new(n(95620).O)}},35256(e,t,n){n.d(t,{O:()=>r});var a=n(14041),s=n(55155),i=n(79129);const r=(0,s.F)("useBrokerLeases",function(e,t){const n=(0,i.Gc)(t&&e?.query?.broker?.leases),[s,r]=(0,a.useState)();return(0,a.useEffect)(()=>{n&&r(n.map((e,t)=>({core:t,task:e.task.toString(),until:e.until.toNumber()})))},[n]),s})},36109(e,t,n){n.d(t,{X:()=>r});var a=n(55155),s=n(61020),i=n(79129);const r=(0,a.F)("useStakingInfo",function(e){const{api:t}=(0,s.g)();return(0,i.Gc)(t.derive.staking?.account,[e])})},36922(e,t,n){n.d(t,{I:()=>a});const a=e=>{if(e.values)for(const t of e.values())if(!t.isEmpty)return!1;return!0}},37038(e,t,n){n.d(t,{q:()=>p});var a=n(14041),s=n(83448),i=n(92100),r=n(36922),o=n(55155),l=n(97186),c=n(61020),d=n(22067),u=n(6767);function m(e){return e?e.toString():null}const h={withClaimedRewardsEras:!0,withDestination:!0,withLedger:!0,withNominations:!0,withPrefs:!0},p=(0,o.F)("useOwnStashInfos",function(e){const{api:t}=(0,c.g)(),n=(0,a.useMemo)(()=>e??t,[e,t]),{allAccounts:o}=(0,l.o)(),p=(0,d.T)(),g=(0,u.j)(void 0,n),[f,b]=(0,a.useState)();return(0,a.useEffect)(()=>{let e;if(g)if(g.length){const t=g.map(([e])=>e),a=[[n.derive.staking.accounts,t,h],[n.query.staking.validators.multi,t]];n.combineLatest(a,([e,t])=>{p.current&&g.length===e.length&&g.length===t.length&&b(g.reduce((n,[a,s],i)=>({...n,[a]:[s,e[i],t[i]]}),{}))}).then(t=>{e=t}).catch(console.error)}else p.current&&b({});return()=>{e&&e()}},[n,p,g]),(0,a.useMemo)(()=>g&&f&&g.length===Object.keys(f).length?g.filter(([e])=>f[e]).map(([e])=>function(e,t,[n,{claimedRewardsEras:a,controllerId:o,exposureMeta:l,exposurePaged:c,nextSessionIds:d,nominators:u,rewardDestination:h,sessionIds:p,stakingLedger:g,validatorPrefs:f},b]){const A=!!u?.length,x=!(Array.isArray(b)?(0,r.I)(b[1]):(0,r.I)(b)),v=d instanceof Map?[...d.values()]:d,w=(0,s.z)(...v.map(e=>e.toU8a())),y=p instanceof Map?[...p.values()]:p,k=(0,s.z)(...y.map(e=>e.toU8a())),j=m(o);return{claimedRewardsEras:a,controllerId:j,destination:h,exposureMeta:l,exposurePaged:c,hexSessionIdNext:(0,i.X)(w,48),hexSessionIdQueue:(0,i.X)(k.length?k:w,48),isLoading:!1,isOwnController:t.includes(j||""),isOwnStash:n,isStashNominating:A,isStashValidating:x,nominating:u?.map(m),sessionIds:(v.length?v:y).map(m),stakingLedger:g,stashId:e,validatorPrefs:f}}(e,o,f[e])):void 0,[o,g,f])})},38489(e,t,n){n.d(t,{l:()=>a});const a=["finalitytimeout","finalized","inblock","usurped","dropped","invalid","cancelled","error","sent"]},38994(e,t,n){n.d(t,{J:()=>h,n:()=>A});var a=n(31085),s=n(14041),i=n(59359),r=n(18045),o=n(770),l=n(92100),c=n(76506),d=n(61020);const u=()=>!1,m={accounts:{allAccounts:[],allAccountsHex:[],areAccountsLoaded:!1,hasAccounts:!1,isAccount:u},addresses:{allAddresses:[],allAddressesHex:[],areAddressesLoaded:!1,hasAddresses:!1,isAddress:u}},h=s.createContext(m);function p(e,t,n=[]){const a=e?20:32;return t.reduce((e,t)=>{if(!e.includes(t)&&!n.includes(t))try{(0,c.F)(t).length>=a?e.push(t):console.warn(`Not adding address ${t}, not in correct format for chain (requires publickey from address)`)}catch{console.error(t,a)}return e},[])}function g(e){return e.map(e=>{try{return(0,l.X)((0,c.F)(e))}catch(t){return console.error(`Unable to convert address ${e} to hex`,t.message),null}}).filter(e=>!!e)}function f(e){return t=>!!t&&e.includes(t.toString())}function b(e,t={},n){const a=p(e,Object.keys(t),n);return{allAddresses:a,allAddressesHex:g(a),areAddressesLoaded:!0,hasAddresses:0!==a.length,isAddress:f(a)}}function A({children:e}){const{isApiReady:t,isEthereum:n}=(0,d.g)(),[l,c]=(0,s.useState)(m);return(0,s.useEffect)(()=>{let e=null;return t&&(e=(0,i.z)([o.AC.accounts.subject.pipe((0,r.T)(e=>function(e,t={}){const n=p(e,Object.keys(t));return{allAccounts:n,allAccountsHex:g(n),areAccountsLoaded:!0,hasAccounts:0!==n.length,isAccount:f(n)}}(n,e))),o.AC.addresses.subject]).pipe((0,r.T)(([e,t])=>({accounts:e,addresses:b(n,t,e.allAccounts)}))).subscribe(e=>c(e))),()=>{e&&e.unsubscribe()}},[t,n]),(0,a.jsx)(h.Provider,{value:l,children:e})}},39444(e,t,n){n.d(t,{Y:()=>d});var a=n(55155),s=n(61020),i=n(16043),r=n(13158);const o=[],l={transform:e=>e.map(({args:[e]})=>e).filter(e=>void 0!==e)};function c(e){const t=[],n=[];return e.forEach(({event:{data:[e],method:a}})=>{"Created"===a||"ForceCreated"===a?t.push(e):n.push(e)}),{added:t,removed:n}}const d=(0,a.F)("useAssetIds",function(){const{api:e}=(0,s.g)(),t=(0,r.S)(e.query.assets?.asset,o,l)||[];return(0,i.r)([e.events.assets?.Created,e.events.assets?.Destroyed,e.events.assets?.ForceCreated],c,t)})},39573(e,t,n){n.d(t,{d:()=>i});var a=n(14041),s=n(22067);function i(e,t=250){const n=(0,s.T)(),[i,r]=(0,a.useState)(e);return(0,a.useEffect)(()=>{const a=setTimeout(()=>{n.current&&r(e)},t);return()=>{clearTimeout(a)}},[t,e,n]),i}},40043(e,t,n){n.d(t,{B:()=>r});var a=n(97186),s=n(61020),i=n(79129);const r=(0,n(55155).F)("useDelegations",function(){const{api:e}=(0,s.g)(),{allAccounts:t}=(0,a.o)();return(0,i.Gc)(e.query.democracy?.votingOf?.multi,[t])})},40349(e,t,n){n.d(t,{j:()=>i});var a=n(14041),s=n(38994);const i=(0,n(55155).F)("useKeyring",function(){return(0,a.useContext)(s.J)})},40833(e,t,n){n.d(t,{default:()=>i});var a=n(31085),s=(n(14041),n(63002));function i(e,t={}){return(n,i={})=>(0,s.default)(e,{...t,propName:"callResult"})(function({callResult:e,callUpdated:t,children:s,className:r=i.className,label:o=""}){return(0,a.jsxs)("div",{...i,className:[r||"",t?"rx--updated":void 0].join(" "),children:[o,n(e),s]})})}},40941(e,t,n){n.d(t,{m:()=>l,x:()=>o});var a=n(55155),s=n(61020),i=n(79129),r=n(69956);const o=(0,a.F)("useBestNumber",function(){const{api:e}=(0,s.g)();return(0,i.Gc)(e.derive.chain.bestNumber)}),l=(0,a.F)("useBestNumberRelay",function(){const{api:e}=(0,s.g)(),{isStakingAsync:t,rcApi:n}=(0,r.Y)();return(0,i.Gc)((t?n:e)?.derive.chain.bestNumber)})},41340(e,t,n){n.d(t,{A:()=>u});var a=n(31085),s=n(14041),i=n(78708),r=n(73572),o=n(60750),l=n(43194);const c=(0,n(9106).I)(l.A)`
  .ui--Dropdown-item {
    position: relative;
    white-space: nowrap;

    .ui--Dropdown-icon,
    .ui--Dropdown-name {
      display: inline-block;
    }

    .ui--Dropdown-icon {
      height: 32px;
      left: 0;
      position: absolute;
      top: -9px;
      width: 32px;

      &.opaque {
        opacity: var(--opacity-light);
      }
    }

    .ui--Dropdown-name {
      margin-left: 3rem;
    }
  }

  .ui.selection.dropdown {
    > .text > .ui--Dropdown-item {
      .ui--Dropdown-icon {
        left: -2.6rem;
        top: -1.15rem;
        opacity: 1;
      }

      .ui--Dropdown-name {
        margin-left: 0;
      }
    }
  }
`,d=s.memo(function({allowAdd:e=!1,children:t,className:n="",defaultValue:l,dropdownClassName:d,isButton:u,isDisabled:m,isError:h,isFull:p,isMultiple:g,label:f,labelExtra:b,onAdd:A,onBlur:x,onChange:v,onClose:w,onSearch:y,options:k,placeholder:j,renderLabel:C,searchInput:N,tabIndex:E,transform:S,value:I,withEllipsis:B,withLabel:F}){const T=(0,s.useRef)(""),[D,L]=(0,s.useState)(),M=(0,s.useCallback)(e=>{const t=JSON.stringify({v:e});T.current!==t&&(T.current=t,L(e),v&&v(S?S(e):e))},[v,S]);(0,s.useEffect)(()=>{M((0,o.b)(I)?l:I)},[M,l,I]);const P=(0,s.useCallback)((e,{value:t})=>A&&A(t),[A]),V=(0,s.useCallback)((e,{value:t})=>M(t),[M]),z=(0,a.jsx)(i.A,{allowAdditions:e,button:u,className:d,compact:u,disabled:m,error:h,floating:u,multiple:g,onAddItem:P,onBlur:x,onChange:V,onClose:w,options:k,placeholder:j,renderLabel:C,search:y||e,searchInput:N,selection:!0,tabIndex:E,value:D});return u?(0,a.jsxs)(r.A.Group,{children:[z,t]}):(0,a.jsxs)(c,{className:`${n} ui--Dropdown`,isFull:p,label:f,labelExtra:b,withEllipsis:B,withLabel:F,children:[z,t]})});d.Header=i.A.Header;const u=d},41358(e,t,n){n.d(t,{W:()=>r});var a=n(14041),s=n(60750);const i=()=>!0;function r(e,t=i){const[n,r]=(0,a.useState)(e),o=(0,a.useMemo)(()=>!!n&&t(n),[t,n]),l=(0,a.useCallback)(e=>!(0,s.b)(e)&&r(e),[]);return[n,o,l]}},42791(e,t,n){n.d(t,{r:()=>g});var a=n(14041),s=n(34985),i=n(70248),r=n(63013),o=n(97783),l=n(49723),c=n(89026),d=n(76733),u=n(55155),m=n(22067);const h=(0,o.Xi)();function p(e){return e?.disconnect().catch(console.error),null}const g=(0,u.F)("useApiUrl",function(e){const t=(0,a.useRef)(null),n=(0,m.T)(),[o,u]=(0,a.useState)(null),g=(0,a.useMemo)(()=>{const e=new Map;for(const t of h){const n=t.textBy;"string"==typeof n&&n.length>0&&"Placeholder"!==n&&e.set(t.value,n)}return e},[]),f=(0,a.useMemo)(()=>{let t=e?(0,d.K)(e)?[e]:(0,c.Z)(e.filter(e=>!e.startsWith("light://"))):[];const n=l.W.apiUrl,a=g.get(n);if(g.has(n)){const e=t.findIndex(e=>g.get(e)===a);if(e>-1){const[n]=t.splice(e,1);t=[n,...t]}}return t},[g,e]);return(0,a.useEffect)(()=>()=>{t.current=p(t.current)},[]),(0,a.useEffect)(()=>{u(null),t.current=p(t.current),f.length&&s.G.create({provider:t.current=new i.E(f),typesBundle:r.a5}).then(e=>n.current&&u(e)).catch(console.error)},[n,t,f]),o})},43056(e,t,n){n.d(t,{A:()=>a});const a={}},43194(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(9106);const r=(0,a.jsx)("div",{children:" "}),o=i.I.div`
  &.ui--Labelled {
    display: block;
    position: relative;

    label {
      padding-right: 1rem;
    }

    .ui--CopyButton {
      position: absolute;
      top: 0.9rem;
      right: 0.5rem;
    }

    .withEllipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &.isSmall {
      display: block;

      > label {
        margin: 0;
        min-width: 0;
        padding-right: 0;
      }
    }

    &:not(.isSmall) {
      padding-left: 2rem;

      &:not(.isOuter) {
        > label,
        .labelExtra {
          position: absolute;
          text-align: left;
          top: 0.75rem;
          z-index: 1;
        }

        > label {
          left: 3.55rem;
          right: 0;
          text-align: left;
        }
      }

      &.isFull {
        padding-left: 0;

        > label {
          left: 1.55rem;
        }
      }

      &.isOuter {
        margin: 0.25rem 0;

        .labelExtra {
          top: -0.125rem;
          // right: 0;
        }
      }

      .labelExtra {
        color: var(--color-label);
        font-size: var(--font-size-label);
        font-weight: var(--font-weight-label);
        position: absolute;
        right: 1.25rem;
        text-align: right;
        text-transform: var(--text-transform-label);
        top: 0.75rem;
        z-index: 1;

        > .ui--Toggle > label {
          padding-right: 0 !important;
        }
      }

      > .ui--Labelled-content {
        box-sizing: border-box;
        flex: 1 1;
        min-width: 0;

        > .--tmp {
          // existing is a bit too much
          opacity: 0.15;
        }

        .ui.selection.dropdown {
          &:not(.floating) {
            padding-left: 1.45rem;
            padding-top: 1.75rem;
          }

          &.floating {
            > .dropdown.icon {
              top: 1.25rem;
            }

            .text {
              line-height: 1;
              padding: 0.47rem 0
            }
          }

          &.search:not(.multiple) > input.search {
            padding-left: 1.45rem;
            padding-top: 1.75rem;
          }

          > .delete.icon,
          > .dropdown.icon,
          > .search.icon {
            top: 1.75rem;
          }
        }

        .ui--InputFile,
        .ui.input > input,
        .ui--output {
          padding-left: 1.45rem;
          padding-top: 1.75rem;
        }

        .ui--Messages {
          padding-bottom: 2rem;
          padding-left: 1.45rem;
          padding-top: 2rem;
        }
      }
    }
  }
`,l=s.memo(function({children:e,className:t="",isFull:n,isHidden:s,isOuter:i,isSmall:l,label:c=r,labelExtra:d,withEllipsis:u,withLabel:m=!0}){return s?null:m?(0,a.jsxs)(o,{className:`${t} ui--Labelled ${l?"isSmall":""} ${n?"isFull":""} ${i?"isOuter":""}`,children:[(0,a.jsx)("label",{children:u?(0,a.jsx)("div",{className:"withEllipsis",children:c}):c}),d&&(0,a.jsx)("div",{className:"labelExtra",children:d}),(0,a.jsx)("div",{className:"ui--Labelled-content",children:e})]}):(0,a.jsx)("div",{className:t,children:e})})},43892(e,t,n){n.d(t,{A:()=>g,T:()=>p});var a=n(31085),s=(n(14041),n(1445)),i=n(26679),r=n(68050),o=n(92100),l=n(6404),c=n(63181),d=n(29220),u=n(60750);function m({className:e="",key:t},...n){return{cName:`${e} ui--Param-text`,key:t,values:n}}function h(e){return(0,l.T)(e.toHuman)?e.toHuman():Array.isArray(e)?e.map(e=>h(e)):e.toString()}function p(e){return(0,d.A)(e,2).replace(/,\n/g,"\n").replace(/"/g,"").replace(/\\/g,"").replace(/\],\[/g,"],\n[")}function g(e,t){if((0,c.k)(t)||(0,u.b)(t)){const{cName:e,key:t,values:n}=m({},"<unknown>");return(0,a.jsx)("div",{className:e,children:n},t)}const n=["Bytes","Raw","Option<Keys>","Keys"].includes(e)&&(0,l.T)(t.toU8a)?(0,o.X)(t.toU8a(!0)):"Vec<(ValidatorId,Keys)>"===e?p((d=t,JSON.stringify(d.map(([e,t])=>[e.toString(),t.toHex()])))):t instanceof i.d?t.isEmpty?"<empty>":t.toString():t instanceof r.c&&t.isNone?"<none>":p(h(t));var d;const{cName:g,key:f,values:b}=m({},n);return(0,a.jsxs)("div",{className:g,children:[b,(0,a.jsx)(s.i8,{value:n})]},f)}},43910(e,t,n){n.d(t,{sH:()=>Y,fI:()=>U,KK:()=>H});var a=n(31085),s=n(11757),i=n(82036),r=n(14041),o=n(70020),l=n.n(o),c=n(19699),d=n(70248),u=n(34985),m=n(34060),h=n(87194),p=n(23639),g=n(63013),f=n(41042),b=n(2393),A=n(51999),x=n(97783),v=n(55155);const w=(0,x.Xi)((e,t)=>t?.toString()||e),y=(0,v.F)("useEndpoint",function(e){return(0,r.useMemo)(()=>function(e){return w.find(({value:t})=>t===e)||null}(e),[e])});var k=n(76733);const j=(0,x.Xi)((e,t)=>t?.toString()||e),C=(0,v.F)("usePeopleEndpoint",function(e){return(0,r.useMemo)(()=>{return t=e,j.find(({info:e,isPeople:n})=>n&&(0,k.K)(e)&&(0,k.K)(t)&&e.toLowerCase().includes(t.toLowerCase()))||null;var t},[e])}),N=(0,x.Xi)((e,t)=>t?.toString()||e),E=(0,v.F)("useCoretimeEndpoint",function(e){return(0,r.useMemo)(()=>{return t=e,N.find(({info:e})=>(0,k.K)(e)&&(0,k.K)(t)&&e.toLowerCase().includes("coretime")&&e.toLowerCase().includes(t.toLowerCase()))||null;var t},[e])});var S=n(42791),I=n(99677);class B{#e;#t;#n;constructor(e,t,n){this.#e=t,this.#t=n,this.#n=e}async signPayload(e){return new Promise((t,n)=>{this.#e(this.#n,e,(e,a)=>{a?t(a):n(new Error("Unable to sign"))})})}update(e,t){t instanceof this.#n.createClass("Hash")?this.#t(e,"sent",t.toHex()):this.#t(e,t.status.type.toLowerCase(),t)}}var F=n(770),T=n(49723),D=n(93302),L=n(848),M=n(52831),P=n(29220),V=n(44734),z=n(17802),R=n(19830),q=n(35038),$=n(815);const U=q.g.registry.createType("u32",12),H=q.g.registry.createType("u32",z.N.prefix),Q=["Aux1","Aux2","Aux3","Aux4","Aux5","Aux6","Aux7","Aux8","Aux9"],O=[],W={hasInjectedAccounts:!1,isApiReady:!1};async function G(e){try{return await e,(await(0,f.OZ)()).map(({address:e,meta:t,type:n},a)=>({address:e,meta:(0,D.b)({},t,{name:`${t.name||"unknown"} (${"pezkuwi-js"===t.source?"extension":t.source})`,whenCreated:a}),type:n||"sr25519"}))}catch(e){return console.error("web3Accounts",e),[]}}function Y({apiUrl:e,beforeApiInit:t,children:o,isElectron:x,store:v}){const{queuePayload:w,queueSetTxStatus:k}=(0,A.x)(),[j,N]=(0,r.useState)(W),[z,Y]=(0,r.useState)(!1),[K,J]=(0,r.useState)(!1),[Z,X]=(0,r.useState)(null),[_,ee]=(0,r.useState)(),te=(0,r.useMemo)(()=>l().get("localFork")===e,[e]),ne=y(e),ae=C(ne?.relayName||ne?.info),se=E(ne?.relayName||ne?.info),ie=(0,r.useMemo)(()=>ne?.valueRelay&&(0,V.E)(ne.paraId)&&ne.paraId<2e3?ne.valueRelay:null,[ne]),re=(0,r.useMemo)(()=>ae?.isPeople&&!ne?.isPeople&&ae?.providers&&ne?.isPeopleForIdentity?ae.providers:null,[ne,ae]),oe=(0,r.useMemo)(()=>se?.providers?se.providers:null,[se]),le=(0,S.r)(ie),ce=(0,S.r)(oe),de=(0,S.r)(re),ue=(0,r.useMemo)(()=>function(e,t){return(n,a)=>`${t?"https://pezkuwi.js.org/apps/":`${window.location.origin}${window.location.pathname}`}?rpc=${encodeURIComponent(a||e)}#${n}`}(e,x),[e,x]),me=ne?.isPeople||(0,V.E)(ne?.paraId)&&ne?.paraId>=2e3&&!ne?.isPeopleForIdentity||"boolean"==typeof ne?.isPeopleForIdentity&&!ne?.isPeopleForIdentity,he=(0,r.useMemo)(()=>(0,D.b)({},j,{api:q.g.api,apiCoretime:ce,apiEndpoint:ne,apiError:Z,apiIdentity:ne?.isPeopleForIdentity&&de||q.g.api,apiRelay:le,apiSystemPeople:de,apiUrl:e,createLink:ue,enableIdentity:me,extensions:_,isApiConnected:z,isApiInitialized:K,isElectron:x,isLocalFork:te,isWaitingInjected:!_}),[Z,ue,_,z,K,x,te,j,ne,ce,le,e,de,me]);return(0,r.useEffect)(()=>{const t=e=>{console.error(e),X(e.message)};(async function(e,t,a,r){const o=function(){const e=(0,$.z)()||l().get("types",{}),t=Object.keys(e);return t.length&&console.log("Injected types:",t.join(", ")),e}(),m=e.startsWith("light://");let h,p,f=null,b=!1;if(a)try{p=await s.$h.fromEndpoint(e),f=p.chain,await(0,s.cT)(f,{System:{Account:[[["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"],{data:{free:5e15},providers:1}]]}}),b=!0}catch(e){throw l().set("localFork",""),r(new Error("Local fork failed, please refresh to switch back to default API provider. This is likely due to chain not supported by chopsticks.\n      Please consider to send an issue to https://github.com/AcalaNetwork/chopsticks.")),e}try{h=m?await async function(e){const[t,a,s]=e.split("/");if("bizinikiwi-connect"!==t)throw new Error(`Cannot connect to non bizinikiwi-connect protocol ${e}`);if(!R.C[a]||s&&!R.t[a]?.[s])throw new Error(`Unable to construct light chain ${e}`);const r=new c.w(i,R.C[a]);if(!s)return r;const o=await n(59621)(`${R.t[a][s]}`);return new c.w(i,JSON.stringify(o.default),r)}(e.replace("light://","")):a&&b?p:new d.E(e),q.g.api=new u.G({provider:h,registry:q.g.registry,signer:t,types:o,typesBundle:g.a5}),m&&await(h?.connect())}catch(e){r(e)}return{fork:f,types:o}})(e,new B(q.g.registry,w,k),te,t).then(({fork:e,types:n})=>{q.g.api.on("connected",()=>Y(!0)),q.g.api.on("disconnected",()=>Y(!1)),q.g.api.on("error",t),q.g.api.on("ready",()=>{const a=(0,f.jP)("pezkuwichain/pezkuwi-apps");a.then(ee).catch(console.error);const s=!!location.href.includes("keyring-type=ethereum");(async function(e,t,n,a,s,i,r=!1){q.g.registry.register(i);const{injectedAccounts:o,properties:l,systemChain:c,systemChainType:d,systemName:u,systemVersion:g}=await async function(e,t){const[n,a,s,i,r]=await Promise.all([e.rpc.system.chain(),e.rpc.system.chainType?e.rpc.system.chainType():Promise.resolve(q.g.registry.createType("ChainType","Live")),e.rpc.system.name(),e.rpc.system.version(),G(t)]);return{injectedAccounts:r.filter(({meta:{source:e}})=>!O.includes(e)),properties:q.g.registry.createType("ChainProperties",{isEthereum:e.registry.chainIsEthereum,ss58Format:e.registry.chainSS58,tokenDecimals:e.registry.chainDecimals,tokenSymbol:e.registry.chainTokens}),systemChain:(n||"<unknown>").toString(),systemChainType:a,systemName:s.toString(),systemVersion:i.toString()}}(e,a),f=l.ss58Format.unwrapOr(H).toNumber(),A=-1===T.W.prefix?f:T.W.prefix,x=l.tokenSymbol.unwrapOr([L.Q.getDefaults().unit,...Q]),v=l.tokenDecimals.unwrapOr([U]),w=l.isEthereum.isTrue||p.O.includes(e.runtimeVersion.specName.toString())||r,y=d.isDevelopment||d.isLocal||(0,M._)(c);console.log(`chain: ${c} (${d.toString()}), ${(0,P.A)(l)}`),q.g.registry.setChainProperties(q.g.registry.createType("ChainProperties",{isEthereum:w,ss58Format:A,tokenDecimals:v,tokenSymbol:x})),L.Q.setDefaults({decimals:v.map(e=>e.toNumber()),unit:x[0].toString()}),b.A.setAbbr(x[0].toString()),function(){try{return!!F.AC.keyring}catch{return!1}}()||F.AC.loadAll({genesisHash:e.genesisHash,genesisHashAdd:!w&&t&&(0,V.E)(t.paraId)&&t.paraId<2e3&&t.genesisHashRelay?[t.genesisHashRelay]:[],isDevelopment:y,ss58Format:A,store:s,type:w?"ethereum":"ed25519"},w?o.map(e=>{const t={...e};return t.type="ethereum",t}):o);const k=Object.keys(e.tx)[0],j=Object.keys(e.tx[k])[0],C=e.tx[k][j],N=e.tx.system?.setCode||C;return(0,m.G)(e.genesisHash.toHex(),h.S),{apiDefaultTx:C,apiDefaultTxSudo:N,chainSS58:f,fork:n,hasInjectedAccounts:0!==o.length,isApiReady:!0,isDevelopment:y,isEthereum:w,specName:e.runtimeVersion.specName.toString(),specVersion:e.runtimeVersion.specVersion.toString(),systemChain:c,systemName:u,systemVersion:g}})(q.g.api,ne,e,a,v,n,s).then(N).catch(t)}),te&&(l().set("localFork",""),q.g.api.connect().catch(t)),J(!0)}).catch(t)},[ne,e,w,k,v,te]),he.isApiInitialized?(0,a.jsx)(I.E.Provider,{value:he,children:o}):(0,a.jsx)(a.Fragment,{children:t})}},44362(e,t,n){n.d(t,{l:()=>i});var a=n(6404),s=n(36413);function i(e,...t){t?.length&&t.forEach(t=>{(0,s.A)(t)?t.next(e):(0,a.T)(t)&&t(e)})}},44366(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(61020),r=n(79129),o=n(33168);const l=s.memo(function({children:e,className:t="",label:n,params:s}){const{api:l}=(0,i.g)(),c=(0,r.Gc)(l.derive.balances?.all,[s]);return(0,a.jsx)(o.A,{className:t,label:n,value:c?.transferable||c?.availableBalance,children:e})})},44377(e,t,n){n.d(t,{n:()=>m});var a=n(14041),s=n(97783),i=n(44734),r=n(55155),o=n(61020),l=n(79129);const c={allowTeleport:!1,destinations:[],oneWay:[]},d=(0,s.Xi)((e,t)=>t?.toString()||e).filter(e=>!!e.teleport);function u(e,t){return d.filter(n=>(n.genesisHashRelay===e||n.genesisHash===e)&&t(n)).reduce((e,t)=>(e.some(({genesisHash:e,paraId:n})=>n===t.paraId||e&&e===t.genesisHash)||e.push(t),e),[]).sort((e,t)=>e.isRelay===t.isRelay?0:e.isRelay?-1:1)}const m=(0,r.F)("useTeleport",function(){const{api:e,apiUrl:t,isApiReady:n}=(0,o.g)(),s=(0,l.Gc)(n&&e.query.teyrchainInfo?.teyrchainId),[r,m]=(0,a.useState)(()=>({...c}));return(0,a.useEffect)(()=>{if(n){const t=e.genesisHash.toHex(),n=d.find(({genesisHash:e})=>e===t);if(n){const e=u(t,({paraId:e})=>(0,i.E)(e)&&n.teleport.includes(e)),a=u(t,({paraId:e,teleport:t})=>(0,i.E)(e)&&!t.includes(-1)).map(({paraId:e})=>e||-1);m({allowTeleport:0!==e.length,destinations:e,isRelayTeleport:!0,oneWay:a})}}},[e,n]),(0,a.useEffect)(()=>{if(s){const e=d.find(({value:e})=>e===t);if(e?.genesisHashRelay){const t=u(e.genesisHashRelay,({paraId:t})=>e.teleport.includes((0,i.E)(t)?t:-1)),n=u(e.genesisHashRelay,({paraId:e,teleport:t})=>!t.includes((0,i.E)(e)?e:-1)).map(({paraId:e})=>e||-1);m({allowTeleport:0!==t.length,destinations:t,isParaTeleport:!0,oneWay:n})}}},[t,s]),r})},45691(e,t,n){n.d(t,{A:()=>c});var a=n(31085),s=n(14041),i=n(95675),r=n(95927),o=n.n(r),l=n(22679);const c=s.memo(function({className:e="",defaultValue:{value:t},isDisabled:n,isError:r,label:c,onChange:d,onEnter:u,onEscape:m,withLabel:h}){const[p,g]=(0,s.useState)(!1),[f]=(0,s.useState)(()=>new(o())((t||"0").toString()).toString(10)),b=(0,s.useCallback)(e=>{const t=!r&&!!e;d&&d({isValid:t,value:e}),g(t)},[r,d]);return(0,a.jsx)(l.A,{className:e,children:(0,a.jsx)(i.A,{className:"full",defaultValue:f,isDisabled:n,isError:r||!p,label:c,onChange:b,onEnter:u,onEscape:m,withEllipsis:!0,withLabel:h})})})},47608(e,t,n){n.d(t,{A:()=>h,E:()=>m});var a=n(31085),s=n(14041),i=n(13648),r=n(66707),o=n(95927),l=n.n(o),c=n(51524),d=n(41340),u=n(80087);const m=[1,2,4,8,16,32].map((e,t)=>[t+1,e,new(l())(e)]),h=s.memo(function({className:e="",label:t,onChange:n,value:o,voteLockingPeriod:l}){const{t:h}=(0,u.B)(),p=(0,i.y)(),g=(0,s.useRef)(function(e,t,n){return[{text:n("0.1x voting balance, no lockup period"),value:0},...m.map(([a,s,i])=>({text:n("{{value}}x voting balance, locked for {{duration}}x duration{{period}}",{replace:{duration:s,period:t&&t.gt(c.Yz)?` (${(0,r.U)(e,i.mul(t),n)[1]})`:"",value:a}}),value:a}))]}(p,l,h));return(0,a.jsx)(d.A,{className:e,label:t,onChange:n,options:g.current,value:o})})},48204(e,t,n){n.d(t,{U:()=>l});var a=n(55155),s=n(97186),i=n(61020),r=n(79129);const o={transform:(e,t)=>3===t.tx.proxy.addProxy.meta.args.length?e:e.map(([e,n])=>[e.map(([e,n])=>t.createType("ProxyDefinition",{delegate:e,proxyType:n})),n])},l=(0,a.F)("useProxies",function(){const{api:e}=(0,i.g)(),{allAccounts:t}=(0,s.o)();return(0,r.Gc)(e.query.proxy?.proxies.multi,[t],o)})},48362(e,t,n){n.d(t,{d:()=>a});const a=["gm","shiden","tinkernet"]},48463(e,t,n){n.d(t,{Ay:()=>we});var a=n(31085),s=n(14041),i=n(1445),r=n(61020),o=n(51999),l=n(11243),c=n(6404),d=n(8781),u=n(37140);function m(){return(0,u.Bd)("react-signer")}var h=n(41042),p=n(8575),g=n(28138),f=n(770),b=n(49723),A=n(58797),x=n(72102),v=n(99614),w=n(92100),y=n(93302),k=n(1048).Buffer;let j=0;class C{#a;#s;#i;#n;#r;constructor(e,t,n,a){this.#a=n,this.#s=a,this.#i=t,this.#n=e.registry,this.#r=e}async getMetadataProof(e){const t=await this.#r.call.metadata.metadataAtVersion(15),{specName:n,specVersion:a}=this.#r.runtimeVersion,s=(0,v.S)(t.toHex(),{base58Prefix:this.#r.consts.system.ss58Prefix.toNumber(),decimals:this.#r.registry.chainDecimals[0],specName:n.toString(),specVersion:a.toNumber(),tokenSymbol:this.#r.registry.chainTokens[0]}),i=(0,w.X)(s.digest()),r=(0,y.b)({},e,{metadataHash:i,mode:1}),o=this.#n.createType("ExtrinsicPayload",r);return{raw:o,txMetadata:s.getProofForExtrinsicPayload((0,w.X)(o.toU8a(!0)))}}async signPayload(e){const t=b.W.get().ledgerApp;if("migration"===t||"generic"===t){const{address:t}=await this.#i().getAddress(this.#r.consts.system.ss58Prefix.toNumber(),!1,this.#a,this.#s),{raw:n,txMetadata:a}=await this.getMetadataProof(e),s=k.from(a),{signature:i}=await this.#i().signWithMetadata(n.toU8a(!0),this.#a,this.#s,{metadata:s}),r=this.#n.createType("Extrinsic",{method:n.method},{version:4});return r.addSignature(t,i,n.toHex()),{id:++j,signature:i,signedTransaction:r.toHex()}}{const t=this.#n.createType("ExtrinsicPayload",e,{version:e.version}),{signature:n}=await this.#i().sign(t.toU8a(!0),this.#a,this.#s);return{id:++j,signature:n}}}}const N=()=>{},E={accountOffset:0,addressOffset:0,isHardware:!1,isLocal:!1,isMultisig:!1,isProxied:!1,isQr:!1,isUnlockable:!1,threshold:0,who:[]},S={};function I(e){if(!e)return E;let t;try{t=f.AC.decodeAddress(e)}catch(e){return console.error(e),E}const n=f.AC.getPair(t),{isExternal:a,isHardware:s,isInjected:i,isLocal:r,isMultisig:o,isProxied:l}=n.meta,c=!a&&!s&&!i;if(c){const e=S[n.address];e&&Date.now()>e&&!n.isLocked&&(n.lock(),S[n.address]=0)}return{accountOffset:n.meta.accountOffset||0,addressOffset:n.meta.addressOffset||0,hardwareType:n.meta.hardwareType,isHardware:!!s,isLocal:!!r,isMultisig:!!o,isProxied:!!l,isQr:!(!a||o||l||s||i||r),isUnlockable:c&&n.isLocked,threshold:n.meta.threshold||0,who:(n.meta.who||[]).map(B)}}function B(e){return f.AC.encodeAddress(f.AC.decodeAddress(e))}function F(e,t,{id:n,txFailedCb:a=N,txSuccessCb:s=N,txUpdateCb:i=N},r){return o=>{if(!o?.status)return;const l=o.status.type.toLowerCase();console.log(`${e}: status :: ${JSON.stringify(o)}`),t(n,l,o),i(o),o.status.isFinalized||o.status.isInBlock?o.events.filter(({event:{section:e}})=>"system"===e).forEach(({event:{method:e}})=>{"ExtrinsicFailed"===e?a(o):"ExtrinsicSuccess"===e&&s(o)}):o.isError&&a(o),o.isCompleted&&r()}}let T=0;class D{#o;#n;constructor(e,t){this.#o=t,this.#n=e}async signPayload(e){return new Promise(t=>{const n=this.#n.createType("ExtrinsicPayload",e,{version:e.version}).sign(this.#o);var a;a=this.#o,Date.now()>(S[a.address]||0)&&!a.isLocked&&a.lock(),t((0,y.b)({id:++T},n))})}}var L=n(9799);class M{#n;#l;constructor(e,t){this.#n=e,this.#l=t}async signPayload(e){return new Promise((t,n)=>{const a=e.method.length>5e3,s=this.#n.createType("ExtrinsicPayload",e,{version:e.version}),i=a?(0,L.q)(s.toU8a(!0)):s.toU8a();this.#l({isQrHashed:a,qrAddress:e.address,qrPayload:i,qrReject:n,qrResolve:t})})}}var P=n(97186),V=n(22067),z=n(51524);const R=(0,i.I4)(i.aF.Columns)`
  .errorLabel {
    margin-right: 1rem;
    color: #9f3a38 !important;
  }

  .ui--Toggle {
    bottom: 1.1rem;
  }
`,q=s.memo(function({address:e,className:t,error:n,onChange:r,onEnter:o,tabIndex:l}){const{t:c}=m(),[d,u]=(0,s.useState)(""),[h,p]=(0,s.useState)(!1),g=(0,s.useMemo)(()=>function(e){try{return f.AC.getPair(e)}catch{return null}}(e),[e]);return(0,s.useEffect)(()=>{r(d,h)},[r,h,d]),g&&g.isLocked&&!g.meta.isInjected?(0,a.jsx)(R,{className:t,hint:c("Unlock the sending account to allow signing of this transaction."),children:(0,a.jsx)(i._2,{autoFocus:!0,isError:!!n,label:c("unlock account with password"),labelExtra:(0,a.jsx)(i.lM,{label:c("unlock for {{expiry}} min",{replace:{expiry:15}}),onChange:p,value:h}),onChange:u,onEnter:o,tabIndex:l,value:d})}):null});function $(e){try{const{method:t,section:n}=e.registry.findMetaCall(e.callIndex);return{method:t,section:n}}catch{return{method:"unknown",section:"unknown"}}}function U(e,t,n,a=!1){const{method:s,section:i}=$(t),r=(t,s)=>!s.some(s=>!U(e,s,n,a).includes(t)),o=e=>"utility"===i&&(["batch","batchAll"].includes(s)&&r(e,t.args[0])||["asLimitedSub"].includes(s)&&r(e,[t.args[0]]));return n.filter(([n,r,l])=>{if(!e.includes(n)||!r.isZero())return!1;if(a)return!0;switch(l.toString()){case"Any":default:return!0;case"Governance":return o(n)||["convictionVoting","council","councilCollective","democracy","elections","electionsPhragmen","fellowshipCollective","fellowshipReferenda","phragmenElection","poll","referenda","society","technicalCommittee","tips","treasury","whitelist"].includes(i);case"IdentityJudgement":return o(n)||"identity"===i&&"provideJudgement"===s;case"NonTransfer":return!("balances"===i||"indices"===i&&"transfer"===s||"vesting"===i&&"vestedTransfer"===s);case"Staking":return o(n)||["fastUnstake","staking"].includes(i);case"SudoBalances":return o(n)||"sudo"===i&&"sudo"===s&&"balances"===$(t.args[0]).section}}).map(([e])=>e)}async function H(e,t,n,a){if((0,c.T)(e.query.proxy?.proxies)){const{isProxied:s}=I(n),[i]=await e.query.proxy.proxies(n),r=3===e.tx.proxy.addProxy.meta.args.length?i.map(({delay:e,delegate:t,proxyType:n})=>[t.toString(),e,n]):i.map(([e,t])=>[e.toString(),z.Yz,t]),o=U(t,a,r);if(o.length)return{address:n,isProxied:s,proxies:r,proxiesFilter:o}}return null}const Q=s.memo(function({currentItem:e,onChange:t,onEnter:n,passwordError:o,requestAddress:l}){const{t:d}=m(),{api:u}=(0,r.g)(),{allAccounts:h}=(0,P.o)(),p=(0,V.T)(),[g,f]=(0,s.useState)(null),[b,A]=(0,s.useState)(null),[x,v]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!0),[k,j]=(0,s.useState)(null),[C,N]=(0,s.useState)(null),[{isUnlockCached:E,signPassword:S},B]=(0,s.useState)(()=>({isUnlockCached:!1,signPassword:""})),[F,T]=(0,s.useMemo)(()=>{const e=k&&g||w&&C&&b||l;try{return[e,I(e)]}catch{return[e,{}]}},[g,b,w,k,C,l]),D=(0,s.useCallback)((e,t)=>B({isUnlockCached:t,signPassword:e}),[]);return(0,s.useEffect)(()=>{!C&&A(null)},[C]),(0,s.useEffect)(()=>{N(null),e.extrinsic&&H(u,h,l,e.extrinsic).then(e=>p.current&&N(e)).catch(console.error)},[h,u,e,p,l]),(0,s.useEffect)(()=>{j(null),e.extrinsic&&I(w&&C?b:l).isMultisig&&async function(e,t,n,a,s){const i=e.tx.multisig?"multisig":"utility";if((0,c.T)(e.query[i]?.multisigs)){const r=a?n:t,{threshold:o,who:l}=I(r),d=(0,c.T)(e.tx.proxy?.proxy),u=(r&&d?e.tx.proxy.proxy(t||"",null,s):s).method.hash,m=(await e.query[i].multisigs(r,u)).unwrapOr(null);return m?{address:r,isMultiCall:m.approvals.length+1>=o,who:l,whoFilter:l.filter(e=>!m.approvals.some(t=>t.eq(e)))}:{address:r,isMultiCall:!1,who:l,whoFilter:l}}return null}(u,l,b,!(!w||!C),e.extrinsic).then(e=>{p.current&&(j(e),v(e?.isMultiCall||!1))}).catch(console.error)},[b,u,e,p,l,w,C]),(0,s.useEffect)(()=>{t({isMultiCall:x,isUnlockCached:E,multiRoot:k?k.address:null,proxyRoot:C&&w?C.address:null,signAddress:F,signPassword:S})},[w,x,E,g,k,t,b,C,F,S]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.aF.Columns,{hint:d("The sending account that will be used to send this transaction. Any applicable fees will be paid by this account."),children:(0,a.jsx)(i.B4,{className:"full",defaultValue:l,isDisabled:!0,isInput:!0,label:d("sending from my account"),withLabel:!0})}),C&&w&&(0,a.jsx)(i.aF.Columns,{hint:d("The proxy is one of the allowed proxies on the account, as set and filtered by the transaction type."),children:(0,a.jsx)(i.B4,{filter:C.proxiesFilter,label:d("proxy account"),onChange:A,type:"account"})}),k&&(0,a.jsx)(i.aF.Columns,{hint:d("The signatory is one of the allowed accounts on the multisig, making a recorded approval for the transaction."),children:(0,a.jsx)(i.B4,{filter:k.whoFilter,label:d("multisig signatory"),onChange:f,type:"account"})}),F&&!e.isUnsigned&&T.isUnlockable&&(0,a.jsx)(q,{address:F,error:o,onChange:D,onEnter:n}),o&&(0,a.jsx)(i.aF.Columns,{children:(0,a.jsx)(i.o_,{content:o})}),C&&(0,a.jsx)(i.aF.Columns,{hint:d("This could either be an approval for the hash or with full call details. The call as last approval triggers execution."),children:(0,a.jsx)(i.lM,{className:"tipToggle",isDisabled:C.isProxied,label:d(w?"Use a proxy for this call":"Don't use a proxy for this call"),onChange:y,value:w})}),k&&(0,a.jsx)(i.aF.Columns,{hint:d("This could either be an approval for the hash or with full call details. The call as last approval triggers execution."),children:(0,a.jsx)(i.lM,{className:"tipToggle",label:d(x?"Multisig message with call (for final approval)":"Multisig approval with hash (non-final approval)"),onChange:v,value:x})})]})});var O=n(57295);const W=(0,n(55155).F)("usePayWithAsset",function(){return(0,s.useContext)(O.c)}),G=(e,t)=>{if(t?.id)return{interior:{X2:[{PalletInstance:e.registry.metadata.pallets.filter(e=>"Assets"===e.name.toString())[0].index.toString()},{GeneralIndex:t.id}]},parents:0}};var Y=n(95927),K=n.n(Y);const J=s.memo(({onChangeFeeAsset:e})=>{const{t}=m(),{api:n}=(0,r.g)(),[o,l]=(0,s.useState)("-1"),{assetOptions:c,isDisabled:d,onChange:u,selectedFeeAsset:h}=W(),p=(0,s.useMemo)(()=>n.registry.chainTokens[0],[n]),g=(0,s.useCallback)((e,t)=>e.filter(e=>{const{text:n,value:a}=e;return parseInt(t)===a||n.includes(t)}),[]),f=(0,s.useCallback)(e=>{u(e===p?new(K())(-1):new(K())(e),()=>l(e))},[p,u]);return(0,s.useEffect)(()=>{c.find(({value:e})=>e===o)||l(c.at(0)?.value??p)},[c,o,p]),(0,s.useEffect)(()=>{e(e=>({...e,assetId:G(n,h),feeAsset:h}))},[n,e,h]),(0,s.useEffect)(()=>()=>f(p),[p,f]),(0,a.jsx)(i.aF.Columns,{hint:t("By selecting this option, the transaction fee will be automatically deducted from the specified asset, ensuring a seamless and efficient payment process."),children:(0,a.jsx)(i.ms,{isDisabled:d,label:t("asset to pay the fee"),onChange:f,onSearch:g,options:c,value:o})})});var Z=n(54143);const X=(0,i.I4)(i.Yt)`
  .qrDisplay {
    margin: 0 auto;
    max-width: 30rem;

    img {
      border: 1px solid white;
    }
  }
`,_=s.memo(function({address:e,className:t,genesisHash:n,isHashed:r,onSignature:o,payload:l}){const{t:c}=m(),[d,u]=(0,s.useState)(null),h=(0,s.useCallback)(e=>{if((0,Z.qv)(e.signature))o(e);else{const t=e.signature;u(c('Non-signature, non-hex data received from QR. Data contains "{{sample}}" instead of a hex-only signature. Please present the correct signature generated from the QR presented for submission.',{replace:{sample:t.length>47?`${t.slice(0,24)}…${t.slice(-22)}`:t}}))}},[o,c]);return e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(X,{className:t,children:[(0,a.jsx)(i.Yt.Column,{children:(0,a.jsx)("div",{className:"qrDisplay",children:(0,a.jsx)(i.oQ,{address:e,cmd:r?1:2,genesisHash:n,payload:l})})}),(0,a.jsx)(i.Yt.Column,{children:(0,a.jsx)("div",{className:"qrDisplay",children:(0,a.jsx)(i.TA,{onScan:h})})})]}),d&&(0,a.jsx)(i.o_,{className:"nomargin",content:d})]}):(0,a.jsx)(i.y$,{label:c("Preparing QR for signing")})}),ee=s.memo(function({address:e,onChange:t,signedTx:n}){const{api:o}=(0,r.g)(),[l,c]=(0,s.useState)(()=>new(K())(64)),[d,u]=(0,s.useState)(z.Yz),[h,p]=(0,s.useState)(z.Yz),{t:g}=m();(0,s.useEffect)(()=>{e&&o.derive.balances.account(e).then(({accountNonce:e})=>{u(e),p(e)}).catch(console.error)},[e,o]),(0,s.useEffect)(()=>{t({era:l.toNumber(),nonce:d})},[l,d,t]);const f=(0,s.useCallback)((e=z.Yz)=>c(e),[]),b=(0,s.useCallback)((e=z.Yz)=>u(e),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.aF.Columns,{hint:g("Override any applicable values for the specific signed output. These will be used to construct and display the signed transaction."),children:[(0,a.jsx)(i.YI,{isDisabled:!!n,isZeroable:!0,label:g("Nonce"),labelExtra:g("Current account nonce: {{accountNonce}}",{replace:{accountNonce:h}}),onChange:b,value:d}),(0,a.jsx)(i.YI,{isDisabled:!!n,isZeroable:!0,label:g("Lifetime (# of blocks)"),labelExtra:g("Set to 0 to make transaction immortal"),onChange:f,value:l})]}),!!n&&(0,a.jsx)(i.aF.Columns,{hint:g("The actual fully constructed signed output. This can be used for submission via other channels."),children:(0,a.jsx)(i.k7,{isFull:!0,isTrimmed:!0,label:g("Signed transaction"),value:n,withCopy:!0})})]})}),te=s.memo(function({className:e,onChange:t}){const{t:n}=m(),[r,o]=(0,s.useState)(),[l,c]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{t(l?r:z.Yz)},[t,l,r]),(0,a.jsxs)(i.aF.Columns,{className:e,hint:n("Adding an optional tip to the transaction could allow for higher priority, especially when the chain is busy."),children:[(0,a.jsx)(i.lM,{className:"tipToggle",label:n(l?"Include an optional tip for faster processing":"Do not include a tip for the block author"),onChange:c,value:l}),l&&(0,a.jsx)(i.xg,{isZeroable:!0,label:n("Tip (optional)"),onChange:o})]})});var ne=n(72026),ae=n(79129),se=n(848);const ie=s.memo(function({accountId:e,className:t="",extrinsic:n,isHeader:o,signerOptions:l}){const{t:c}=m(),{api:d}=(0,r.g)(),[h,p]=(0,s.useState)(null),g=(0,ae.Gc)(d.derive.balances?.all,[e]),f=(0,V.T)();if((0,s.useEffect)(()=>{e&&n&&n.hasPaymentInfo&&(0,A.d)(async()=>{p(null);try{const t=await n.paymentInfo(e,l);if(l?.assetId){const e=new(K())((await d.call.assetConversionApi.quotePriceTokensForExactTokens(l?.assetId,{interior:"Here",parents:1},t.partialFee,!0)).toString());f.current&&p({...t,partialFee:e})}else f.current&&p(t)}catch(e){console.error(e)}})},[d,e,n,f,l]),!h||!n)return null;const b=d.consts.balances&&!(d.tx.balances?.transferAllowDeath?.is(n)||d.tx.balances?.transfer?.is(n))&&g?.accountId.eq(e)&&((g.transferable||g.availableBalance).lte(h.partialFee)||g.freeBalance.sub(h.partialFee).lte(d.consts.balances.existentialDeposit));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.c6,{className:t,isHeader:o,summary:(0,a.jsxs)(u.x6,{i18nKey:"feesForSubmission",children:["Fees of ",(0,a.jsxs)("span",{className:"highlight",children:[(0,se.Q)(h.partialFee,{decimals:l?.feeAsset?.metadata.decimals.toNumber()??d.registry.chainDecimals.at(0),withSiFull:!0}).split(" ").slice(0,-1).join(" ")," ",l?.feeAsset?.metadata.symbol.toHuman()?.toString()??d.registry.chainTokens.at(0)]})," will be applied to the submission"]})}),b&&(0,a.jsx)(i.WM,{content:c("The account does not have enough free funds (excluding locked/bonded/reserved) available to cover the transaction fees without dropping the balance below the account existential amount.")})]})}),re=(0,i.I4)(i.aF.Columns)`
  .paymentInfo {
    margin-top: 0.5rem;
  }
`,oe=s.memo(function({accountId:e,className:t,currentItem:{extrinsic:n,isUnsigned:s,payload:i},onError:r,signerOptions:o,tip:l}){const{t:c}=m();return n?(0,a.jsxs)(re,{className:t,hint:c("The details of the transaction including the type, the description (as available from the chain metadata) as well as any parameters and fee estimations (as available) for the specific type of call."),children:[(0,a.jsx)(ne.A,{isHeader:!0,onError:r,value:n}),!s&&!i&&(0,a.jsx)(ie,{accountId:e,className:"paymentInfo",extrinsic:n,isHeader:!0,signerOptions:o,tip:l})]}):null}),le=()=>{},ce={innerHash:null,innerTx:null};let de=0;async function ue(e,t,n){const a=await e.query.system.account(n),s={blockHash:e.genesisHash,genesisHash:e.genesisHash,nonce:a.nonce,runtimeVersion:e.runtimeVersion},i=new Uint8Array(64);i.fill(205),i.set([222,173,190,239]),t.signFake(n,s),t.signature.set(i)}async function me(e,t,{isMultiCall:n,multiRoot:a,proxyRoot:s,signAddress:i}){let r=t.extrinsic;if(s&&(r=e.tx.proxy.proxy(s,null,r)),a){const t=e.tx.multisig?"multisig":"utility",[s,{weight:o}]=await Promise.all([e.query[t].multisigs(a,r.method.hash),r.paymentInfo(a)]);console.log("multisig max weight=",o.toString());const{threshold:l,who:c}=I(a),d=c.filter(e=>e!==i);let u=null;s.isSome&&(u=s.unwrap().when),r=n?5===e.tx[t].asMulti.meta.args.length?e.tx[t].asMulti(l,d,u,r.method.toHex(),o):6===e.tx[t].asMulti.meta.args.length?e.tx[t].asMulti(l,d,u,r.method.toHex(),!1,o):e.tx[t].asMulti(l,d,u,r.method):5===e.tx[t].approveAsMulti.meta.args.length?e.tx[t].approveAsMulti(l,d,u,r.method.hash,o):e.tx[t].approveAsMulti(l,d,u,r.method.hash)}return r}async function he(e,t,n,a,s){const i=f.AC.getPair(t),{meta:{accountOffset:r,addressOffset:o,isExternal:c,isHardware:d,isInjected:u,isLocal:m,isProxied:p,source:g}}=i;if(d)return["signing",t,{...n,signer:new C(e,a,r||0,o||0)},!1];if(m)return["signing",t,{...n,signer:new D(e.registry,i)},!0];if(c&&!p)return["qr",t,{...n,signer:new M(e.registry,s)},!1];if(u){if(!g)throw new Error(`Unable to find injected source for ${t}`);const e=await(0,h.tV)(g);return(0,l.vA)(e,`Unable to find a signer for ${t}`),["signing",t,{...n,signer:e.signer},!1]}return(0,l.vA)((0,x.V)(t,i.address),`Unable to retrieve keypair for ${t}`),["signing",t,{...n,signer:new D(e.registry,i)},!1]}function pe(e){try{return I(e)}catch{return{}}}const ge=(0,i.I4)(i.aF.Content)`
  .tipToggle {
    width: 100%;
    text-align: right;
  }

  .ui--Checks {
    margin-top: 0.75rem;
  }
`,fe=s.memo(function({className:e,currentItem:t,isQueueSubmit:n,queueSize:l,requestAddress:c,setIsQueueSubmit:d}){const{t:u}=m(),{api:h}=(0,r.g)(),{getLedger:x}=(0,p.L)(),{queueSetTxStatus:v}=(0,o.x)(),[w,y]=(0,s.useState)(()=>pe(c)),[k,j]=(0,s.useState)(null),[{isQrHashed:C,qrAddress:N,qrPayload:E,qrResolve:I},B]=(0,s.useState)(()=>({isQrHashed:!1,qrAddress:"",qrPayload:new Uint8Array})),[T,D]=(0,s.useState)(!1),[L,M]=(0,g.e)(),[P,V]=(0,s.useState)(!0),[z,R]=(0,s.useState)(null),[q,$]=(0,s.useState)(()=>({isMultiCall:!1,isUnlockCached:!1,multiRoot:null,proxyRoot:null,signAddress:c,signPassword:""})),[U,H]=(0,s.useState)({}),[O,W]=(0,s.useState)(null),[{innerHash:G,innerTx:Y},K]=(0,s.useState)(ce),[Z,X]=(0,s.useState)(),[ne]=(0,s.useState)(n);(0,s.useEffect)(()=>{y(pe(q.signAddress)),R(null)},[q]),(0,s.useEffect)(()=>{const e=t.extrinsic&&(q.proxyRoot?h.tx.proxy.proxy(q.proxyRoot,null,t.extrinsic):t.extrinsic).method;K(e?{innerHash:e.hash.toHex(),innerTx:q.multiRoot?e.toHex():null}:ce)},[h,t,q]);const ae=(0,s.useCallback)(({signature:e})=>I&&I({id:++de,signature:e}),[I]),se=(0,s.useCallback)(async()=>{let e=null;if(q.signAddress)if(w.isUnlockable)e=function({isUnlockCached:e,signAddress:t,signPassword:n}){let a;try{if(!t)throw new Error("Invalid signAddress");a=f.AC.decodeAddress(t)}catch(e){return console.error(e),"unable to decode address"}const s=f.AC.getPair(a);try{s.decodePkcs8(n),e&&function(e){S[e.address]=Date.now()+9e5}(s)}catch(e){return console.error(e),e.message}return null}(q);else if(w.isHardware)try{const e=b.W.get().ledgerApp,t=x();if("migration"===e||"generic"===e){const{address:e}=await t.getAddress(h.consts.system.ss58Prefix.toNumber(),!1,w.accountOffset,w.addressOffset);console.log(`Signing with Ledger address ${e}`)}else{const{address:e}=await t.getAddress(!1,w.accountOffset,w.addressOffset);console.log(`Signing with Ledger address ${e}`)}}catch(t){console.error(t);const n=t.message;e=u("Unable to connect to the Ledger, ensure support is enabled in settings and no other app is using it. {{errorMessage}}",{replace:{errorMessage:n}})}return R(e),!e},[w,x,q,u,h.consts.system.ss58Prefix]),ie=(0,s.useCallback)((e,t,n)=>{if(n.signAddress&&t.payload){const{id:a,payload:s,signerCb:i=le}=t,r=f.AC.getPair(n.signAddress);i(a,{id:a,...h.createType("ExtrinsicPayload",s,{version:s.version}).sign(r)}),e(a,"completed")}},[h]),re=(0,s.useCallback)(async(e,t,n)=>{if(n.signAddress){const[a,[s,i,r,o]]=await Promise.all([me(h,t,n),he(h,n.signAddress,{nonce:-1,tip:Z,withSignedTransaction:!0,...U},x,B)]);e(t.id,s),await async function(e,t,n,a,s,i,r){t.txStartCb&&t.txStartCb();try{r?await ue(i,n,a):await n.signAsync(a,s),console.info("sending",n.toHex()),e(t.id,"sending");const o=await n.send(F("signAndSend",e,t,()=>{o()}))}catch(n){console.error("signAndSend: error:",n),e(t.id,"error",{},n),t.txFailedCb&&t.txFailedCb(n)}}(e,t,a,i,r,h,o)}},[h,x,U,Z]),fe=(0,s.useCallback)(async(e,t,n)=>{if(n.signAddress){const[a,[,s,i,r]]=await Promise.all([me(h,t,n),he(h,n.signAddress,{...U,tip:Z,withSignedTransaction:!0},x,B)]);W(await async function(e,{id:t,txFailedCb:n=le,txStartCb:a=le},s,i,r,o,l){a();try{return l?await ue(o,s,i):await s.signAsync(i,r),s.toJSON()}catch(a){console.error("signAsync: error:",a),e(t,"error",void 0,a),n(a)}return null}(e,t,a,s,i,h,r))}},[h,x,U,Z]),be=(0,s.useCallback)(()=>{D(!0),(0,A.d)(()=>{const e=e=>{console.error(e),D(!1),j(e)};se().then(n=>{n?P?t.payload?ie(v,t,q):re(v,t,q).catch(e):fe(v,t,q).catch(e):D(!1)}).catch(t=>{e(t)})})},[re,ie,fe,se,t,P,v,q]),Ae=(0,s.useMemo)(()=>w.isQr?u("Sign via Qr"):P?w.isLocal?u("Mock Sign and Submit"):u("Sign and Submit"):w.isLocal?u("Mock Sign (no submission)"):u("Sign (no submission)"),[w.isQr,w.isLocal,P,u]),xe=q.signAddress&&l>1&&P&&!(w.isHardware||w.isMultisig||w.isProxied||w.isQr||w.isUnlockable)&&!L;return!T&&xe&&ne?(D(!0),setTimeout(be,1e3),null):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ge,{className:e,children:(0,a.jsx)(i.tH,{error:k,onError:M,children:T&&w.isQr?(0,a.jsx)(_,{address:N,genesisHash:h.genesisHash,isHashed:C,onSignature:ae,payload:E}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(oe,{accountId:q.signAddress,currentItem:t,onError:M,signerOptions:U}),(0,a.jsx)(Q,{currentItem:t,onChange:$,onEnter:be,passwordError:z,requestAddress:c}),!t.payload&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(J,{onChangeFeeAsset:H}),(0,a.jsx)(te,{onChange:X})]}),!P&&(0,a.jsx)(ee,{address:q.signAddress,onChange:H,signedTx:O}),P&&!q.isMultiCall&&Y&&(0,a.jsx)(i.aF.Columns,{hint:u("The full call data that can be supplied to a final call to multi approvals"),children:(0,a.jsx)(i.k7,{isDisabled:!0,isTrimmed:!0,label:u("multisig call data"),value:Y,withCopy:!0})}),P&&G&&(0,a.jsx)(i.aF.Columns,{hint:u("The call hash as calculated for this transaction"),children:(0,a.jsx)(i.k7,{isDisabled:!0,isTrimmed:!0,label:u("call hash"),value:G,withCopy:!0})})]})})}),(0,a.jsxs)(i.aF.Actions,{children:[(0,a.jsx)(i.$n,{icon:w.isQr?"qrcode":"sign-in-alt",isBusy:T,isDisabled:!q.signAddress||L,label:Ae,onClick:be,tabIndex:2}),(0,a.jsxs)("div",{className:"signToggle",children:[!T&&(0,a.jsx)(i.lM,{isDisabled:!!t.payload,label:u(P?"Sign and Submit":"Sign (no submission)"),onChange:V,value:P}),xe&&(0,a.jsx)(i.lM,{label:n?u("Submit {{queueSize}} items",{replace:{queueSize:l}}):u("Submit individual"),onChange:d,value:n})]})]})]})}),be=s.memo(function({className:e,currentItem:t}){const{t:n}=m(),{queueSetTxStatus:r}=(0,o.x)(),[l,c]=(0,g.e)(),d=(0,s.useCallback)(async()=>{t.extrinsic&&await async function(e,t,n){t.txStartCb&&t.txStartCb();try{const a=await n.send(F("send",e,t,()=>{a()}))}catch(n){console.error("send: error:",n),e(t.id,"error",{},n),t.txFailedCb&&t.txFailedCb(null)}}(r,t,t.extrinsic)},[t,r]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.aF.Content,{className:e,children:(0,a.jsx)(i.tH,{onError:c,children:(0,a.jsx)(oe,{currentItem:t,onError:c})})}),(0,a.jsx)(i.aF.Actions,{children:(0,a.jsx)(i.$n,{icon:"sign-in-alt",isDisabled:l,label:n("Submit (no signature)"),onClick:d,tabIndex:2})})]})}),Ae=()=>{},xe=["queued","qr","signing"];const ve=(0,i.I4)(i.aF)`
  .signToggle {
    bottom: 1.5rem;
    left: 1.5rem;
    position: absolute;

    .ui--Toggle {
      display: inline-block;

      &+.ui--Toggle {
        margin-left: 1rem;
      }
    }
  }
`,we=s.memo(function({children:e,className:t=""}){const{api:n}=(0,r.g)(),{t:i}=m(),{queueSetTxStatus:u,txqueue:h}=(0,o.x)(),[p,g]=(0,s.useState)(!1),{currentItem:f,isRpc:b,isVisible:A,queueSize:x,requestAddress:v}=(0,s.useMemo)(()=>function(e){const t=e.filter(({status:e})=>xe.includes(e)),n=t[0]||null;let a=!1,s=!1;return n&&("queued"!==n.status||n.extrinsic||n.payload?"signing"!==n.status&&(s=!0):a=!0),{currentItem:n,isRpc:a,isVisible:s,queueSize:t.length,requestAddress:n?.accountId||null}}(h),[h]);(0,s.useEffect)(()=>{1===x&&g(!1)},[x]),(0,s.useEffect)(()=>{b&&f&&async function(e,t,{id:n,rpc:a,values:s=[]}){if(a){t(n,"sending");const{error:i,result:r,status:o}=await async function(e,{method:t,section:n},a){try{const s=e.rpc;(0,l.vA)((0,c.T)(s[n]?.[t]),`api.rpc.${n}.${t} does not exist`);const i=await s[n][t](...a);return console.log("submitRpc: result ::",(0,d.E)(i)),{result:i,status:"sent"}}catch(e){return console.error(e),{error:e,status:"error"}}}(e,a,s);t(n,o,r,i)}}(n,u,f).catch(console.error)},[n,b,f,u]);const w=(0,s.useCallback)(()=>{if(f){const{id:e,signerCb:t=Ae,txFailedCb:n=Ae}=f;u(e,"cancelled"),t(e,null),n(null)}},[f,u]);return(0,a.jsxs)(a.Fragment,{children:[e,f&&A&&(0,a.jsx)(ve,{className:t,header:(0,a.jsxs)(a.Fragment,{children:[i("Authorize transaction"),1===x?void 0:(0,a.jsxs)(a.Fragment,{children:[" 1/",x]})]}),onClose:w,size:"large",children:f.isUnsigned?(0,a.jsx)(be,{currentItem:f}):(0,a.jsx)(fe,{currentItem:f,isQueueSubmit:p,queueSize:x,requestAddress:v,setIsQueueSubmit:g})},f.id)]})})},49788(e,t,n){n.d(t,{default:()=>o});var a=n(31085),s=n(14041),i=n(99677),r=n(11243);function o(e,t={}){class n extends s.PureComponent{component=s.createRef();render(){return(0,a.jsx)(i.E.Consumer,{children:n=>((0,r.vA)(n?.api,"Application root must be wrapped inside 'react-api/Api' to provide API context"),(0,a.jsx)(e,{...t,...n,...this.props,ref:this.component}))})}}return n}},49919(e,t,n){n.d(t,{N:()=>r});var a=n(55155),s=n(41358);function i(e){return e&&e.length>0||!1}const r=(0,a.F)("useNonEmptyString",function(e=""){return(0,s.W)(e,i)})},50072(e,t,n){function a(e){if(!e)return[];const t=e.toHex().slice(2).split(""),n=[];return t.forEach(e=>{var t;(t=e,parseInt(t,16).toString(2)).split("").forEach(e=>n.push(e))}),n.filter(e=>"1"===e),n}n.d(t,{TK:()=>a})},50151(e,t,n){n.d(t,{A:()=>c});var a=n(31085),s=n(14041),i=n(61020),r=n(79129),o=n(51524),l=n(69832);const c=s.memo(function({children:e,className:t,isInline:n,label:c,value:d}){const{api:u}=(0,i.g)(),m=(0,r.Gc)(u.derive.session.progress),h=(0,s.useMemo)(()=>m&&d&&m.currentIndex.lt(d)?d.sub(m.currentIndex).imul(m.sessionLength).isub(m.sessionProgress):o.Yz,[m,d]);return(0,a.jsx)(l.A,{className:t,isInline:n,label:c,value:h,children:e})})},51311(e,t,n){n.d(t,{p:()=>i,z:()=>o});var a=n(14041),s=n(22067);function i(e){if(!e)return"";if(e.toLowerCase().startsWith("http"))return e;const t=e.match(/Qm[A-Za-z0-9]{44}(?![A-Za-z0-9])/);if(null!==t)return t[0];const n=e.match(/[a-z0-9]{59}(?![A-Za-z0-9])/);return null!==n?n[0]:""}const r=new Map;function o(e,t){const n=(0,s.T)(),[o,l]=(0,a.useState)(),c=(0,a.useMemo)(()=>{if(e)return e.map(e=>i(e)).filter(e=>!!e)},[e]);return(0,a.useEffect)(()=>{n.current&&c&&async function(e){const t=new Map,n=e.map(e=>{if(r.has(e))return t.set(e,r.get(e)),Promise.resolve();const n=e.startsWith("http")?e:`https://ipfs.io/ipfs/${e}`;return fetch(n).then(async n=>{const a=n.status>=200&&n.status<300?await n.text():null;r.set(e,a),t.set(e,a)})});return await Promise.allSettled(n),t}(c).then(e=>l(function(e,{transform:t}={}){if(!t)return e;for(const[n,a]of e.entries())e.set(n,t(a));return e}(e,t))).catch(()=>{})},[c,t,n]),o}},51999(e,t,n){n.d(t,{x:()=>i});var a=n(14041),s=n(99524);const i=(0,n(55155).F)("useQueue",function(){return(0,a.useContext)(s.z)})},52362(e,t,n){n.d(t,{n:()=>i});var a=n(14041),s=n(10551);const i=(0,n(55155).F)("useApiStats",function(){return(0,a.useContext)(s.v)})},52662(e,t,n){n.d(t,{A:()=>u});var a=n(31085),s=n(14041),i=n(85121),r=n(25768),o=n(9106),l=n(16902);let c=0;const d=o.I.div`
  border-radius: 16px;
  box-sizing: border-box;
  color: #eeedec;
  display: inline-block;
  font-size: var(--font-size-tiny);
  height: 20px;
  line-height: 20px;
  margin-right: 0.43rem;
  min-width: 20px;
  padding: 0 4px;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  width: 20px;

  &.isTooltip {
    cursor: help;
  }

  &.isBlock {
    display: block;
  }

  .ui--Icon {
    cursor: inherit;
    margin-top: 4px;
    vertical-align: top;
    width: 1em;
  }

  &.isClickable:not(.withAction) {
    cursor: pointer;
  }

  &.isSmall {
    font-size: 10px;
    height: 16px;
    line-height: 16px;
    min-width: 16px;
    padding: 0;
    width: 16px;

    .ui--Icon {
      margin-top: 3px;
    }
  }

  &.blueColor {
    background: steelblue;
  }

  &.counterColor {
    margin: 0 0.5rem;
    vertical-align: middle;
  }

  &.grayColor {
    background: #eeedec !important;
    color: #aaa9a8;
  }

  &.redColor {
    background: darkred;
  }

  &.greenColor {
    background: green;
  }

  &.orangeColor {
    background: darkorange;
  }

  &.purpleColor {
    background: indigo;
  }

  &.transparentColor {
    background: transparent;
    box-shadow: none;
  }

  &.whiteColor {
    background: rgba(255, 255, 255, 0.3);
  }

  &.recovery, &.warning, &.information, &.important {
    background-color: #FFFFFF;

    &.darkTheme {
      background-color: #212227;
    }
  }

  &.recovery {
    background-image: linear-gradient(0deg, rgba(17, 185, 74, 0.08), rgba(17, 185, 74, 0.08));
    color: #11B94A;
  }

  &.warning {
    background-image: linear-gradient(0deg, rgba(232, 111, 0, 0.08), rgba(232, 111, 0, 0.08));
    color: #FF7D01;
  }

  &.information {
    background-image: linear-gradient(0deg, rgba(226, 246, 255, 0.08), rgba(226, 246, 255, 0.08));
    color: #3BBEFF;

    &.lightTheme {
      background-color: rgba(226, 246, 255, 1);
    }
  }

  &.important {
    background: linear-gradient(0deg, rgba(230, 0, 122, 0.08), rgba(230, 0, 122, 0.08)), rgba(230, 0, 122, 0.01);
    color: #E6007A;
  }

  &.withAction.withIcon:not(.withInfo) {
    width: 34px;
    border-radius: 4px;
  }

  &.withInfo.withIcon:not(.withAction) {
    width: 34px;
    border-radius: 18px;
  }

  &.withAction.withIcon.withInfo {
    width: 44px;
    border-radius: 4px;
  }

  &.withInfo .ui--Icon:not(.action-icon) {
    margin-right: 4px;
  }

  .hoverContent {
    display: flex;
    flex-direction: column;
  }

  .action-icon {
    margin-left: 4px;
  }
`,u=s.memo(function({className:e="",color:t="normal",hover:n,hoverAction:o,icon:u,info:m,isBlock:h,isSmall:p,onClick:g}){const f=(u?`${u}-`:"")+"badge",{theme:b}=(0,i.D)(),[A]=(0,s.useState)(()=>`${f}-hover-${Date.now()}-${c++}`),x=n?{"data-for":A,"data-tip":!0}:{},v="highlight"===t,w=(0,s.useMemo)(()=>(0,a.jsxs)("div",{className:"hoverContent",children:[(0,a.jsx)("div",{children:n}),o&&(0,a.jsx)("a",{className:`${t}Color`,onClick:g,children:o})]}),[t,n,o,g]);return(0,a.jsxs)(d,{...x,className:`${e} ui--Badge ${n?"isTooltip":""} ${h?"isBlock":""} ${p?"isSmall":""} ${g?"isClickable":""} ${v?"highlight--bg":""} ${t}Color ${u?"withIcon":""} ${m?"withInfo":""} ${o?"withAction":""} ${b}Theme`,"data-testid":f,onClick:o?void 0:g,children:[(0,a.jsxs)("div",{className:v?"highlight--color-contrast":"",children:[u&&(0,a.jsx)(r.A,{icon:u}),m,o&&(0,a.jsx)(r.A,{className:"action-icon",icon:"chevron-right"})]}),n&&(0,a.jsx)(l.A,{className:"accounts-badge",isClickable:!!o,text:w,trigger:A})]})})},53630(e,t,n){n.d(t,{k:()=>h});var a=n(14041),s=n(51524),i=n(55155),r=n(61020),o=n(79129),l=n(11554),c=n(22067),d=n(6767);const u={filteredEras:[],validatorEras:[]},m={isLoadingRewards:!0,rewardCount:0},h=(0,i.F)("useOwnEraRewards",function(e,t,n){const{api:i}=(0,r.g)(),h=(0,c.T)(),p=(0,o.Gc)(i.derive.staking?.erasHistoric),[{filteredEras:g,validatorEras:f},b]=(0,a.useState)(u),[A,x]=(0,a.useState)(m),v=function(e,t,n,s){const{api:i}=(0,r.g)(),o=(0,d.P)(s),c=(0,l.y)([i.events.staking?.PayoutStarted,i.events.staking?.Rewarded]),[u,m]=(0,a.useState)(),h=(0,a.useCallback)(async()=>{if(!n?.length&&e.length&&o){t(e=>({...e,isLoadingRewards:!0}));const n=await(i.derive.staking?.stakerRewardsMultiEras(o,e));m([[o,e],n])}},[i.derive.staking,e,n?.length,t,o]);return(0,a.useEffect)(()=>{h().catch(console.error)},[h]),(0,a.useEffect)(()=>{c.blockHash&&h().catch(console.error)},[h,c.blockHash]),u}(g,x,t,n),w=(0,o.Gc)(!!f.length&&!!g.length&&i.derive.staking._erasPoints,[g,!1]),y=(0,o.Gc)(!!f.length&&!!g.length&&i.derive.staking._erasRewards,[g,!1]);return(0,a.useEffect)(()=>{x({allRewards:null,isLoadingRewards:!0,rewardCount:0})},[e,t]),(0,a.useEffect)(()=>{if(p&&e){const n=p.slice(-1*e),a=[];0===p.length?(x({allRewards:{},isLoadingRewards:!1,rewardCount:0}),b({filteredEras:n,validatorEras:a})):t?.length&&(t.forEach(({claimedRewardsEras:e,stakingLedger:t,stashId:s})=>{if(t){const i=n.filter(n=>!function(e,t){return(e.legacyClaimedRewards||e.claimedRewards||[]).concat(t?.toArray()||[])}(t,e).some(e=>n.eq(e)));i.length&&a.push({eras:i,stashId:s})}}),n.length&&!a.length&&x({allRewards:{},isLoadingRewards:!1,rewardCount:0})),b({filteredEras:n,validatorEras:a})}},[p,e,t]),(0,a.useEffect)(()=>{h.current&&v&&!t&&x(function([[e],t]){const n={};return e.forEach((e,a)=>{n[e]=t[a].filter(({eraReward:e})=>!e.isZero())}),{allRewards:n,isLoadingRewards:!1,rewardCount:Object.values(n).filter(e=>0!==e.length).length}}(v))},[h,t,v]),(0,a.useEffect)(()=>{h&&w&&y&&t&&x(function(e,t,n,a){const i={};return t.forEach(({eras:t,stashId:r})=>{t.forEach(t=>{const o=n.find(e=>e.era.eq(t)),l=a.find(e=>e.era.eq(t));if(o?.eraPoints.gt(s.Yz)&&o?.validators[r]&&l){const n=o.validators[r].mul(l.eraReward).div(o.eraPoints);if(!n.isZero()){const a=e.createType("Balance",n);i[r]||(i[r]=[]),i[r].push({era:t,eraReward:l.eraReward,isClaimed:!1,isEmpty:!1,isValidator:!0,nominating:[],validators:{[r]:{total:a,value:a}}})}}})}),{allRewards:i,isLoadingRewards:!1,rewardCount:Object.values(i).filter(e=>0!==e.length).length}}(i,f,w,y))},[i,w,y,h,t,f]),A})},53663(e,t,n){n.d(t,{Q:()=>N});var a=n(14041),s=n(61020),i=n(54789),r=n(35256),o=n(19444),l=n(58359),c=n(1810),d=n(57991),u=n(26101),m=n(3789),h=n(13158),p=n(79129),g=n(55155),f=n(95927),b=n.n(f);const A={transform:e=>e.map(({args:[e]})=>e)},x=(0,g.F)("useCoreDescriptor",function(e,t){const n=(0,h.S)(t&&e.query.coretimeAssignmentProvider.coreDescriptors,[],A),s=n?.map((e,t)=>t);s?.pop();const i=(0,p.Gc)(t&&e.query.coretimeAssignmentProvider.coreDescriptors.multi,[s],{withParams:!0}),[r,o]=(0,a.useState)();return(0,a.useEffect)(()=>{i&&o(i[0][0].map((e,t)=>function(e,t){const n=e?.currentWork.isSome?e.currentWork.unwrap():null,a=e?.queue.isSome?e.queue.unwrap():null,s=n?.assignments||[];return{core:t,info:{currentWork:{assignments:s?.map(e=>({isPool:e[0]?.isPool,isTask:e[0]?.isTask,ratio:e[1]?.ratio.toNumber(),remaining:e[1]?.remaining.toNumber(),task:e[0]?.isTask?e[0]?.asTask.toString():e[0]?.isPool?"Pool":"Idle"})),endHint:n?.endHint.isSome?n?.endHint?.unwrap().toBn():null,pos:n?.pos.toNumber()||0,step:n?.step.toNumber()||0},queue:{first:a?.first.toBn()||new(b())(0),last:a?.last.toBn()||new(b())(0)}}}}(i[1][t],e)))},[i]),r});var v=n(51524),w=n(86832),y=n(50072);const k={transform:e=>e.map(({args:[e]})=>e)},j=(0,g.F)("useBrokerPotentialRenewals",function(e,t){const n=(0,h.S)(t&&e?.query.broker.potentialRenewals,[],k),s=(0,p.Gc)(t&&e?.query.broker.potentialRenewals.multi,[n],{withParams:!0}),[i,r]=(0,a.useState)();return(0,a.useEffect)(()=>{if(!s)return;const e=s[0][0].map((e,t)=>function(e,t){const n=e.isSome?e.unwrap():null;let a=[],s="";if(!n)return;const i=n?.completion;if(i?.isComplete){const e=i?.asComplete[0];s=e.assignment.isTask?e?.assignment.asTask.toString():e?.assignment.isPool?"Pool":"Idle",a=(0,y.TK)(e.mask)}else i?.isPartial?(a=(0,y.TK)(i?.asPartial),s=""):a=[];return{completion:i?.type,core:t?.core.toNumber(),mask:a,maskBits:a?.length,price:n?.price.toBn()||v.Yz,task:s,when:t?.when.toNumber()}}(s[1][t],e));r(e.filter(e=>!!e))},[s]),i});var C=n(56780);const N=(0,g.F)("useCoretimeInformation",function(e,t){const{apiCoretime:n,isApiReady:h}=(0,s.g)(),[p,g]=(0,a.useState)([]),[f,A]=(0,a.useState)([]),[y,k]=(0,a.useState)(),N=(0,i.j)(n,h),E=(0,r.O)(n,h),S=(0,o.a)(n,h),I=(0,l.P)(n,h),B=(0,c.E)(n,h),F=(0,d.d)(n,h),T=(0,u.$)(n,h),D=j(n,h),L=(0,m.N)(n),M=(0,C.y)();(0,a.useEffect)(()=>{M?.coretime.blocksPerTimeslice&&k(new(b())(M.coretime.blocksPerTimeslice))},[M]);const P=x(e,t),V=(0,a.useMemo)(()=>P&&[...new Set(P?.map(e=>e.info.currentWork.assignments.map(e=>e.task)).flat().filter(e=>"Pool"!==e))],[P]),z=(0,a.useMemo)(()=>{if(!(I&&T&&N&&y))return!1;const e=new(b())(I?.regionBegin).sub(new(b())(T.regionLength)),t=y.gt(v.Yz)?new(b())(T?.interludeLength).div(y):v.Yz;return e.add(t).gte(new(b())(N?.lastCommittedTimeslice))},[N,I,T,y]),R=(0,a.useMemo)(()=>z&&T&&I?D?.filter(e=>e.when.toString()===I?.regionBegin.toString()):[],[D,I,T,z]),[q,$]=(0,a.useState)();return(0,a.useEffect)(()=>{if(V?.length&&!f.length){const e=V.map(e=>Number(e)),t=D?.map(e=>Number(e.task));if(t){const n=[...new Set(e.concat(t))];if(n?.length>e.length)return void A(n.sort((e,t)=>e-t))}A(e)}},[D,V,f]),(0,a.useEffect)(()=>{if(B?.length&&g(B),P?.length&&!B?.length){const e=P?.map(e=>({core:-1,info:e.info.currentWork.assignments.map(e=>({isPool:e.isPool,isTask:e.isTask,mask:[],maskBits:0,task:e.task}))}));g(e)}},[B,P]),(0,a.useEffect)(()=>{if(!p?.length||!S?.length||!M)return;const e={};f?.forEach(t=>{const n=t.toString(),a=E?.length?E?.find(e=>e.task===n):void 0,s=S?.find(e=>e.task===n),i=p?.filter(e=>e.info.task===n),r=i.map(e=>{const t=F?.filter(e=>e.info.task.toString()===n),i=((e,t,n)=>n?w.qk["On Demand"]:t?w.qk.Reservation:e?w.qk.Lease:w.qk["Bulk Coretime"])(a,s,e?.info.isPool??!1),r=R?.find(e=>e.task.toString()===n),o=i===w.qk["Bulk Coretime"]&&!!t?.length;let l=w.qe.None,c="";r&&(l=w.qe.Eligible),o&&(l=w.qe.Renewed,c=`Next cycle on core ${t[0].core}`);const d=l===w.qe.Renewed?I?.regionEnd:I?.regionBegin,u=a?.until||d;return{lastBlock:u?u*M?.relay.blocksPerTimeslice:0,renewal:r,renewalStatus:l,renewalStatusMessage:c,type:i,workload:e,workplan:t}});e[t.toString()]={id:t,lease:a,reservation:s,workTaskInfo:r}}),e&&T&&L&&I&&N&&M&&$({chainInfo:e,config:T,constants:M,region:L,salesInfo:I,status:N,taskIds:f})},[T,M,f,p,R,I,E,S,L,N,F]),q})},54789(e,t,n){n.d(t,{j:()=>r});var a=n(14041),s=n(55155),i=n(79129);const r=(0,s.F)("useBrokerStatus",function(e,t){const n=(0,i.Gc)(t&&e?.query.broker?.status),[s,r]=(0,a.useState)();return(0,a.useEffect)(()=>{if(n&&n.isSome){const e=n.unwrap();r({coreCount:e.coreCount?.toNumber(),lastCommittedTimeslice:e.lastCommittedTimeslice?.toNumber(),lastTimeslice:e.lastTimeslice?.toNumber(),privatePoolSize:e.privatePoolSize?.toNumber(),systemPoolSize:e.systemPoolSize?.toNumber()})}},[n]),s})},54975(e,t,n){n.d(t,{j:()=>u});var a=n(14041),s=n(55155),i=n(97186),r=n(61020),o=n(79129);const l={isAdminMe:!1,isFreezerMe:!1,isIssuerMe:!1,isOwnerMe:!1},c={withParams:!0};function d(e,t){const n=t.toString();return e.some(e=>e===n)}const u=(0,s.F)("useAssetInfos",function(e){const{api:t}=(0,r.g)(),{allAccounts:n}=(0,i.o)(),s=(0,a.useMemo)(()=>!!e?.length&&!!t.tx.assets?.setMetadata&&!!t.tx.assets?.transferKeepAlive,[t.tx.assets?.setMetadata,t.tx.assets?.transferKeepAlive,e?.length]),u=(0,o.Gc)(s&&t.query.assets.metadata.multi,[e],c),m=(0,o.Gc)(s&&t.query.assets.asset.multi,[e],c),[h,p]=(0,a.useState)();return(0,a.useEffect)(()=>{m&&u&&(m[0][0].length===u[0][0].length?p(m[0][0].map((e,t)=>function(e,t,n,a){const s=n.unwrapOr(null);return{...s?{isAdminMe:d(e,s.admin),isFreezerMe:d(e,s.freezer),isIssuerMe:d(e,s.issuer),isOwnerMe:d(e,s.owner)}:l,details:s,id:t,key:t.toString(),metadata:a.isEmpty?null:a}}(n,e,m[1][t],u[1][t]))):p(e=>e||[]))},[n,m,e,u]),h})},54979(e,t,n){n.d(t,{A:()=>d});var a=n(31085),s=n(14041),i=n(21327),r=n(76733),o=n(60750),l=n(27721),c=n(72026);const d=s.memo(function({className:e="",idNumber:t,proposal:n}){const{t:s}=(0,l.B)(),d=(0,r.K)(t)||(0,o.b)(t)?t:(0,i.Z)(t);return n?(0,a.jsx)("div",{className:`${e} ui--ProposedAction`,children:(0,a.jsx)(c.A,{isHeader:!0,labelHash:s("preimage"),stringId:d,value:n,withHash:!0})}):(0,a.jsx)("div",{className:`${e} ui--ProposedAction`,children:(0,a.jsxs)("div",{children:[d?`#${d}: `:"",s("No execution details available for this proposal")]})})})},55155(e,t,n){function a(e,t){return(...n)=>{try{return t(...n)}catch(t){throw new Error(`${e}:: ${t.message}:: ${t.stack||"<unknown>"}`)}}}n.d(t,{F:()=>a})},56482(e,t,n){n.d(t,{D:()=>r,N:()=>o});var a=n(31085),s=n(14041);function i(){return{height:window.innerHeight,width:window.innerWidth}}const r=s.createContext(i());function o({children:e}){const[t,n]=(0,s.useState)(()=>i());return(0,s.useEffect)(()=>{function e(){n(i())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,a.jsx)(r.Provider,{value:t,children:e})}},56780(e,t,n){n.d(t,{y:()=>c});var a=n(14041),s=n(61020),i=n(66707),r=n(95927),o=n.n(r),l=n(51524);const c=(0,n(55155).F)("useCoretimeConsts",function(){const{api:e,apiCoretime:t,isApiReady:n}=(0,s.g)(),[r,c]=(0,a.useState)(),[d]=(0,i.e)(l.Uu,e),u=t?.consts.aura?.slotDuration,m=t?.consts.broker?.timeslicePeriod;return(0,a.useEffect)(()=>{if(!(n&&d&&u&&m))return;const e=new(o())(u.toString()),t=new(o())(m),a=e.div(new(o())(d)),s=a.gtn(0)?t.div(a):l.Yz;c({coretime:{blocksPerTimeslice:s.toNumber(),blocktimeMs:e.toNumber()},relay:{blocksPerTimeslice:t.toNumber(),blocktimeMs:d}})},[n,d,u,m]),r})},57226(e,t,n){n.d(t,{Tu:()=>o,W3:()=>i,f9:()=>r,sj:()=>s});var a=n(45691);const s=["auctions.bid","balances.forceTransfer","balances.forceUnreserve","balances.setBalance","balances.transfer","balances.transferAllowDeath","balances.transferKeepAlive","bounties.proposeBounty","bounties.proposeCurator","childBounties.addChildBounty","childBounties.proposeCurator","claims.mintClaim","convictionVoting.delegate","convictionVoting.vote","crowdloan.contribute","crowdloan.create","crowdloan.edit","democracy.delegate","democracy.propose","democracy.vote","identity.requestJudgement","identity.setFee","nominationPools.bondExtra","nominationPools.create","nominationPools.createWithPoolId","nominationPools.join","nominationPools.unbond","phragmenElection.vote","society.bid","society.vouch","staking.bond","staking.bondExtra","staking.rebond","staking.unbond","tips.tip","tips.tipNew","treasury.proposeSpend","treasury.spendLocal","vesting.forceVestedTransfer","vesting.vestedTransfer"],i=["auctions.BidAccepted","auctions.ReserveConfiscated","auctions.Reserved","auctions.Unreserved","balances.Deposit","balances.DustLost","balances.Endowed","balances.Transfer","balances.Unreserved","balances.Withdraw","bounties.BountyClaimed","bounties.BountyRejected","claims.Claimed","convictionVoting.Voted","crowdloan.Contributed","crowdloan.Withdrew","democracy.Voted","nominationPools.Bonded","nominationPools.PaidOut","nominationPools.PoolSlashed","nominationPools.Unbonded","nominationPools.UnbondingPoolSlashed","referenda.DecisionDepositPlaced","referenda.DecisionDepositRefunded","referenda.DepositSlashed","referenda.SubmissionDepositRefunded","staking.Bonded","staking.Rewarded","staking.Unbonded","staking.Withdrawn","transactionPayment.TransactionFeePaid","treasury.Deposit"],r={"Compact<u128>":a.A,u128:a.A},o=r},57295(e,t,n){n.d(t,{M:()=>c,c:()=>l});var a=n(31085),s=n(14041),i=n(61020),r=n(39444),o=n(54975);const l=s.createContext({assetOptions:[],isDisabled:!0,onChange:()=>{},selectedFeeAsset:null});function c({children:e}){const{isApiReady:t}=(0,i.g)();return t?(0,a.jsx)(d,{children:e}):(0,a.jsx)(a.Fragment,{children:e})}function d({children:e}){const{api:t}=(0,i.g)(),n=(0,r.Y)(),c=(0,o.j)(n),[d,u]=(0,s.useState)(null),m=(0,s.useMemo)(()=>t.registry.chainTokens[0],[t]),h=(0,s.useMemo)(()=>c?.filter(e=>!(!e.details||!e.metadata||e.details.supply.isZero()||!e.details?.toJSON().isSufficient))||[],[c]),p=(0,s.useMemo)(()=>[{text:`${m} (Native)`,value:m},...h.map(({id:e,metadata:t})=>({text:`${t.name.toUtf8()} (${e.toString()})`,value:e.toString()}))],[h,m]),g=(0,s.useCallback)((e,t)=>{const n=h.find(t=>t.id.toString()===e.toString());u(n??null),t?.()},[h]),f=(0,s.useMemo)(()=>t.registry.signedExtensions.some(e=>"ChargeAssetTxPayment"===e)&&!!t.tx.assetConversion&&!!t.call.assetConversionApi&&h.length>0,[t.call.assetConversionApi,t.registry.signedExtensions,t.tx.assetConversion,h.length]),b=(0,s.useMemo)(()=>({assetOptions:p,isDisabled:!f,onChange:g,selectedFeeAsset:d}),[p,f,g,d]);return(0,a.jsx)(l.Provider,{value:b,children:e})}},57991(e,t,n){n.d(t,{d:()=>c});var a=n(14041),s=n(55155),i=n(79129),r=n(13158),o=n(50072);const l={transform:e=>e.map(({args:[e,t]})=>[e,t])},c=(0,s.F)("useWorkplanInfos",function(e,t){const n=(0,r.S)(t&&e?.query.broker.workplan,[],l),s=n?.map(e=>e[0]),c=(0,i.Gc)(t&&e?.query.broker.workplan.multi,[s],{withParams:!0}),[d,u]=(0,a.useState)();return(0,a.useEffect)(()=>{if(!c?.[1]||!c[0]?.[0])return;const e=c[0][0];var t;u((t=e.map((e,t)=>function(e,t,n){const a=(0,o.TK)(e[0]?.mask),s=e[0].assignment;return{core:t,info:{isPool:s.isPool,isTask:s.isTask,mask:a,maskBits:a.length,task:s.isTask?s.asTask.toString():s.isPool?"Pool":"Idle"},timeslice:n}}(c[1][t].unwrap(),e[1].toNumber(),e[0].toNumber())))?(Array.isArray(t)?t:[t]).sort((e,t)=>e.core-t.core):[])},[c]),d})},58359(e,t,n){n.d(t,{P:()=>l});var a=n(14041),s=n(55155),i=n(79129),r=n(95927),o=n.n(r);const l=(0,s.F)("useBrokerSalesInfo",function(e,t){const n=(0,i.Gc)(t&&e?.query.broker.saleInfo),[s,r]=(0,a.useState)();return(0,a.useEffect)(()=>{n&&n.isSome&&n.toJSON()&&r(function(e){const t=e.unwrap();return{coresOffered:t.coresOffered?.toNumber(),coresSold:t.coresSold?.toNumber(),endPrice:t.endPrice,firstCore:t.firstCore?.toNumber(),idealCoresSold:t.idealCoresSold?.toNumber(),leadinLength:t.leadinLength?.toNumber(),regionBegin:t.regionBegin?.toNumber(),regionEnd:t.regionEnd?.toNumber(),saleStart:t.saleStart?.toNumber(),selloutPrice:t.selloutPrice?.isSome?t.selloutPrice?.unwrap():new(o())(0)}}(n))},[n]),s})},58430(e,t,n){n.d(t,{T:()=>b});var a=n(14041),s=n(770),i=n(6404),r=n(54143),o=n(36922),l=n(55155),c=n(61020),d=n(79129),u=n(66899);const m=(0,l.F)("useDeriveAccountFlags",function(e){const t=(0,u.H)();return(0,d.Gc)(t?.derive.accounts.flags,[e])});var h=n(31706),p=n(40349),g=n(28138);const f={isCouncil:!1,isDevelopment:!1,isEditable:!1,isEthereum:!1,isExternal:!1,isFavorite:!1,isHardware:!1,isInContacts:!1,isInjected:!1,isMultisig:!1,isNominator:!1,isOwned:!1,isProxied:!1,isSociety:!1,isSudo:!1,isTechCommittee:!1,isValidator:!1},b=(0,l.F)("useAccountInfo",function(e,t=!1){const{api:n,apiIdentity:l,apiSystemPeople:u}=(0,c.g)(),{accounts:{isAccount:b},addresses:{isAddress:A}}=(0,p.j)(),x=(0,h.q)(e),v=m(e),w=(0,d.Gc)(n.query.staking?.nominators,[e]),y=(0,d.Gc)(n.query.staking?.validators,[e]),[k,j]=(0,a.useState)(void 0),[C,N]=(0,a.useState)([]),[E,S]=(0,a.useState)(""),[I,B]=(0,a.useState)(null),[F,T]=(0,a.useState)(),[D,L]=(0,a.useState)(f),[M,P]=(0,a.useState)(),[V,z,R]=(0,g.e)(),[q,$,U]=(0,g.e)();(0,a.useEffect)(()=>{y&&L(e=>({...e,isValidator:!(0,o.I)(y)}))},[y]),(0,a.useEffect)(()=>{w&&L(e=>({...e,isNominator:!(0,o.I)(w)}))},[w]),(0,a.useEffect)(()=>{v&&L(e=>({...e,...v}))},[v]),(0,a.useEffect)(()=>{const{accountIndex:e,identity:t,nickname:n}=x||{},a=e?.toString();let s;if(j(e=>e!==a?a:e),(0,i.T)(l.query.identity?.identityOf)?t?.display&&(s=t.display):n&&(s=n),S(s||""),t){const e=t.judgements.filter(([,e])=>!e.isFeePaid),n=e.some(([,e])=>e.isKnownGood);T({...t,isExistent:!!t.display,isKnownGood:n,judgements:e,waitCount:t.judgements.length-e.length})}else T(void 0)},[x,n,u,l]),(0,a.useEffect)(()=>{if(e)try{const t=s.AC.getAccount(e)||s.AC.getAddress(e),n=b(e),a=A(e);B(t?.meta.genesisHash||null),L(s=>({...s,isDevelopment:t?.meta.isTesting||!1,isEditable:!(F?.display||!(a||t?.meta.isMultisig||t&&!t.meta.isInjected))||!1,isEthereum:(0,r.qv)(e,160),isExternal:!!t?.meta.isExternal||!1,isHardware:!!t?.meta.isHardware||!1,isInContacts:a,isInjected:!!t?.meta.isInjected||!1,isMultisig:!!t?.meta.isMultisig||!1,isOwned:n,isProxied:!!t?.meta.isProxied||!1})),P(t?.meta),S(t?.meta.name||""),N(t?.meta.tags?.sort()||[])}catch{}},[F,b,A,e]);const H=(0,a.useCallback)(()=>{V&&z();const a={name:E,whenEdited:Date.now()};if(t)try{if(e){const t=s.AC.getAddress(e)?.meta;s.AC.saveContract(e,{...t,...a})}}catch(e){console.error(e)}else if(e)try{const t=s.AC.getPair(e);t&&s.AC.saveAccountMeta(t,a)}catch{s.AC.getAddress(e)?s.AC.saveAddress(e,a):s.AC.saveAddress(e,{genesisHash:n.genesisHash.toHex(),...a})}},[n,t,V,E,z,e]),Q=(0,a.useCallback)(()=>{const n={tags:C,whenEdited:Date.now()};if(t)try{if(e){const t=s.AC.getAddress(e)?.meta;e&&s.AC.saveContract(e,{...t,...n})}}catch(e){console.error(e)}else if(e)try{const t=s.AC.getPair(e);t&&s.AC.saveAccountMeta(t,n)}catch{s.AC.saveAddress(e,n)}},[t,C,e]),O=(0,a.useCallback)(()=>{V&&z(),q&&$();try{e&&s.AC.forgetAddress(e)}catch(e){console.error(e)}},[V,q,z,$,e]),W=(0,a.useCallback)(t=>{if(e){const n=s.AC.getPair(e);n&&s.AC.saveAccountMeta(n,{...n.meta,genesisHash:t}),B(t)}},[e]),G=(0,a.useCallback)(e=>N(e.sort()),[]),Y=(0,a.useCallback)(()=>V||q,[V,q]);return(0,a.useMemo)(()=>({accountIndex:k,flags:D,genesisHash:I,identity:F,isEditing:Y,isEditingName:V,isEditingTags:q,isNull:!e,meta:M,name:E,onForgetAddress:O,onSaveName:H,onSaveTags:Q,onSetGenesisHash:W,setIsEditingName:R,setIsEditingTags:U,setName:S,setTags:G,tags:C,toggleIsEditingName:z,toggleIsEditingTags:$}),[k,D,I,F,Y,V,q,M,E,O,H,Q,W,R,U,S,G,C,z,$,e])})},58792(e,t,n){n.d(t,{s:()=>r});var a=n(55155),s=n(61020),i=n(79129);const r=(0,a.F)("useSubidentities",function(e){const{apiIdentity:t}=(0,s.g)();return(0,i.Gc)(t.query.identity?.subsOf,[e])?.[1]})},59233(e,t,n){n.d(t,{$:()=>i});var a=n(14041),s=n(63736);const i=(0,n(55155).F)("useBlockAuthors",function(){return(0,a.useContext)(s.b)})},60078(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(61020),r=n(79129),o=n(21327);const l=s.memo(function({children:e,className:t="",isFinalized:n,label:s,withPound:l}){const{api:c,isApiReady:d}=(0,i.g)(),u=(0,r.Gc)(d&&(n?c.derive.chain.bestNumberFinalized:c.derive.chain.bestNumber));return(0,a.jsxs)("div",{className:`${t} ${u?"":"--tmp"}`,children:[s||"",l&&"#",(0,a.jsx)("span",{className:"--digits",children:(0,o.Z)(u||1234)}),e]})})},60353(e,t,n){n.d(t,{k:()=>i});var a=n(60750),s=n(69912);function i(e,t){const n=(0,s.A)(e,t.type);return{isValid:!(0,a.b)(n),value:n}}},60569(e,t,n){n.d(t,{h:()=>r});var a=n(14041),s=n(55155),i=n(28138);const r=(0,s.F)("useModal",function(e,t,n){const[s,,r]=(0,i.e)(e||!1),o=(0,a.useCallback)(()=>{r(!0),t&&t()},[t,r]);return{isOpen:s,onClose:(0,a.useCallback)(()=>{r(!1),n&&n()},[n,r]),onOpen:o}})},61020(e,t,n){n.d(t,{g:()=>i});var a=n(14041),s=n(99677);const i=(0,n(55155).F)("useApi",function(){return(0,a.useContext)(s.E)})},63002(e,t,n){n.d(t,{default:()=>g});var a=n(31085),s=n(14041),i=n(11243),r=n(63181),o=n(58797),l=n(60750),c=n(5745),d=n(2926),u=n(49788);const m=()=>{},h=()=>!1,p={};function g(e,{at:t,atProp:n,callOnResult:g,fallbacks:f,isMulti:b=!1,paramName:A,paramPick:x,paramValid:v=!1,params:w=[],propName:y,skipIf:k=h,transform:j=c.default,withIndicator:C=!1}={}){return c=>{class h extends s.Component{state={callResult:void 0,callUpdated:!1,callUpdatedAt:0};destroy;isActive=!1;propName;timerId=-1;constructor(t){super(t);const[,n,a]=e.split(".");this.propName=`${n}_${a}`}componentDidUpdate(e){const t=this.getParams(e),n=this.getParams(this.props);this.isActive&&!(0,d.n4)(n,t)&&this.subscribe(n).then(m).catch(m)}componentDidMount(){this.isActive=!0,C&&(this.timerId=window.setInterval(()=>{const e=Date.now()-(this.state.callUpdatedAt||0)<=1500;e!==this.state.callUpdated&&this.nextState({callUpdated:e})},500)),(0,o.d)(()=>{this.subscribe(this.getParams(this.props)).then(m).catch(m)})}componentWillUnmount(){this.isActive=!1,this.unsubscribe().then(m).catch(m),-1!==this.timerId&&clearInterval(this.timerId)}nextState(e){this.isActive&&this.setState(e)}getParams(e){const a=x?x(e):A?e[A]:void 0;return n&&(t=e[n]),!v&&A&&((0,l.b)(a)||(0,r.k)(a))?[!1,[]]:[!0,(0,l.b)(a)?w:w.concat(Array.isArray(a)&&!a.toU8a?a:[a])]}constructApiSection=e=>{const{api:n}=this.props,[a,s,r,...o]=e.split(".");return(0,i.vA)(a.length&&s.length&&r.length&&0===o.length,`Invalid API format, expected <area>.<section>.<method>, found ${e}`),(0,i.vA)(["consts","rpc","query","derive"].includes(a),`Unknown api.${a}, expected consts, rpc, query or derive`),(0,i.vA)(!t||"query"===a,"Only able to do an 'at' query on the api.query interface"),[n[a][s],a,s,r]};getApiMethod(t){if("subscribe"===e){const[e,...n]=t;return[e,n,"subscribe"]}const n=[e].concat(f||[]).map(this.constructApiSection),[a,s,o,c]=n.find(([e])=>!!e)||[{},n[0][1],n[0][2],n[0][3]];(0,i.vA)(a?.[c],`Unable to find api.${s}.${o}.${c}`);const d=a[c].meta;if("query"===s&&d?.type.isMap){const e=t[0];(0,i.vA)(!(0,l.b)(e)&&!(0,r.k)(e)||d.type.asMap.kind.isLinkedMap,`${d.name} expects one argument`)}return[a[c],t,c.startsWith("subscribe")?"subscribe":s]}async subscribe([a,s]){if(!a||k(this.props))return;const{api:r}=this.props;let o;await r.isReady;try{(0,i.vA)(t||!n,"Unable to perform query on non-existent at hash"),o=this.getApiMethod(s)}catch(t){p[t.message]||(console.warn(e,"::",t),p[t.message]=!0)}if(!o)return;const[l,c,d]=o,u=e=>this.triggerUpdate(this.props,e);await this.unsubscribe();try{["derive","subscribe"].includes(d)||"query"===d&&!t&&!n?this.destroy=b?await l.multi(c,u):await l(...c,u):u("consts"===d?l:t?await l.at(t,...c):await l(...c))}catch{}}async unsubscribe(){this.destroy&&(this.destroy(),this.destroy=void 0)}triggerUpdate(e,t){try{const n=(e.transform||j)(t);if(!this.isActive||(0,d.n4)(n,this.state.callResult))return;(0,d.l$)(n,g,e.callOnResult),this.nextState({callResult:n,callUpdated:!0,callUpdatedAt:Date.now()})}catch{}}render(){const{callResult:e,callUpdated:t,callUpdatedAt:n}=this.state,s={...this.props,callUpdated:t,callUpdatedAt:n};return(0,l.b)(e)||(s[y||this.propName]=e),(0,a.jsx)(c,{...s})}}return(0,u.default)(h)}}},63287(e,t,n){n.d(t,{h:()=>c});var a=n(14041),s=n(55155),i=n(97186),r=n(61020),o=n(79129);const l={transform:e=>e.toString()},c=(0,s.F)("useSudo",function(){const{api:e}=(0,r.g)(),{allAccounts:t,hasAccounts:n}=(0,i.o)(),s=(0,o.Gc)(n&&e.query.sudo?.key,void 0,l),[c,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{d(!!s&&!!t&&t.some(e=>e===s))},[t,s]),{allAccounts:t,hasSudoKey:c,sudoKey:s}})},63736(e,t,n){n.d(t,{T:()=>m,b:()=>u});var a=n(31085),s=n(14041),i=n(61020),r=n(79129),o=n(21327);const l={},c={},d={byAuthor:l,eraPoints:c,lastBlockAuthors:[],lastHeaders:[]},u=s.createContext(d);function m({children:e}){const{api:t,isApiReady:n}=(0,i.g)(),m=(0,r.Gc)(n&&t.derive.staking?.currentPoints),[h,p]=(0,s.useState)(d);return(0,s.useEffect)(()=>{t.isReady.then(()=>{let e=[],n=[],a="";t.derive.chain.subscribeNewHeads(async s=>{if(s?.number){const i=await(await t.at(s.hash)).query.timestamp.now(),r=Object.assign(s,{timestamp:i}),d=r.number.unwrap();let u="";r.author&&(u=r.author.toString());const m=(0,o.Z)(d);u&&(l[u]=m,m!==a?(a=m,n=[u]):n.push(u)),e=e.filter((e,t)=>t<75&&e.number.unwrap().lt(d)).reduce((e,t)=>(e.push(t),e),[r]).sort((e,t)=>t.number.unwrap().cmp(e.number.unwrap())),p({byAuthor:l,eraPoints:c,lastBlockAuthors:n.slice(),lastBlockNumber:a,lastHeader:r,lastHeaders:e})}}).catch(console.error)}).catch(console.error)},[]),(0,s.useEffect)(()=>{if(m){const e=[...m.individual.entries()].map(([e,t])=>[e.toString(),(0,o.Z)(t)]),t=Object.keys(c);t.length!==e.length&&t.forEach(e=>{delete c[e]}),e.forEach(([e,t])=>{c[e]=t})}},[m]),(0,a.jsx)(u.Provider,{value:h,children:e})}},66707(e,t,n){n.d(t,{U:()=>u,e:()=>m});var a=n(14041),s=n(41206),i=n(51524),r=n(48613),o=n(665),l=n(55155),c=n(37140),d=n(13648);function u(e,t,n){const a=(0,s.J)(i.Vk,e.mul(t)).toNumber(),o=(0,r.v)(Math.abs(a)),{days:l,hours:c,minutes:d,seconds:u}=o;return[e.toNumber(),`${a<0?"+":""}${[l?l>1?n("{{days}} days",{replace:{days:l}}):n("1 day"):null,c?c>1?n("{{hours}} hrs",{replace:{hours:c}}):n("1 hr"):null,d?d>1?n("{{minutes}} mins",{replace:{minutes:d}}):n("1 min"):null,u?u>1?n("{{seconds}} s",{replace:{seconds:u}}):n("1 s"):null].filter(e=>!!e).slice(0,2).join(" ")}`,o]}const m=(0,l.F)("useBlockTime",function(e=i.Uu,t){const{t:n}=(0,c.Bd)("react-hooks"),s=(0,d.y)(t);return(0,a.useMemo)(()=>u(s,(0,o.A)(e),n),[s,e,n])})},66827(e,t,n){n.d(t,{A:()=>r});var a=n(31085),s=n(14041),i=n(61020);const r=s.memo(function({children:e,className:t="",label:n}){const{systemVersion:s}=(0,i.g)(),r=s.split("-")[0];return(0,a.jsxs)("div",{className:t,children:[n||"",r,e]})})},66899(e,t,n){n.d(t,{H:()=>r});var a=n(14041),s=n(55155),i=n(61020);const r=(0,s.F)("useSystemApi",function(){const{api:e,apiRelay:t}=(0,i.g)();return(0,a.useMemo)(()=>t||e,[t,e])})},69496(e,t,n){n.d(t,{_:()=>i});var a=n(14041),s=n(38994);const i=(0,n(55155).F)("useAddresses",function(){return(0,a.useContext)(s.J).addresses})},69647(e,t,n){n.d(t,{hz:()=>o});var a=n(14041),s=n(29220);function i(e,t,n=-1){return n++,e!==t&&(!(n<2&&Array.isArray(e)&&Array.isArray(t)&&e.length===t.length)||e.some((e,a)=>i(e,t[a],n)))}function r(e,t){if(!e.current||i(e.current.value,t)){const n=(0,s.A)({value:t});e.current&&e.current.stringified===n||(e.current={stringified:n,value:t})}return e.current.value}function o(e){const t=(0,a.useRef)(null);return(0,a.useMemo)(()=>r(t,e),[t,e])}},69832(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(9106),r=n(66707);const o=i.I.div`
  &.isInline {
    display: inline-block;
  }

  span+span {
    padding-left: 0.25em;
  }

  span.timeUnits {
    font-size: var(--font-percent-tiny);
  }
`,l=s.memo(function({api:e,children:t,className:n="",isInline:s,label:i,value:l}){const[,c]=(0,r.e)(l,e);return!l||l.isZero()?null:(0,a.jsxs)(o,{className:`${n} ui--BlockToTime ${s?"isInline":""}`,children:[i||"",c.split(" ").map((e,t)=>(0,a.jsx)("span",{className:t%2?"timeUnits":void 0,children:e},t)),t]})})},69912(e,t,n){n.d(t,{A:()=>l});var a=n(39139),s=n(54190),i=n(16880),r=n(51524);const o=[];function l(e,t){if(t.info===s.K.Vec)return[l(e,t.sub)];if(t.info===s.K.Tuple)return Array.isArray(t.sub)?t.sub.map(t=>l(e,t)):[];if(t.info===s.K.Struct)return Array.isArray(t.sub)?t.sub.reduce((t,n)=>(t[n.name||"unknown"]=l(e,n),t),{}):{};if(t.info===s.K.Enum)return Array.isArray(t.sub)?{[t.sub[0].name||"unknown"]:l(e,t.sub[0])}:{};const n=[s.K.Compact,s.K.Option].includes(t.info)?t.sub.type:t.type;switch(n){case"AccountIndex":case"Balance":case"BalanceOf":case"BlockNumber":case"Compact":case"Gas":case"Index":case"Nonce":case"ParaId":case"PropIndex":case"ProposalIndex":case"ReferendumIndex":case"i8":case"i16":case"i32":case"i64":case"i128":case"u8":case"u16":case"u32":case"u64":case"u128":case"VoteIndex":case"Moment":return r.Yz;case"bool":return!1;case"Bytes":case"AccountId":case"AccountId20":case"AccountId32":case"AccountIdOf":case"Address":case"Call":case"CandidateReceipt":case"Digest":case"Header":case"KeyValue":case"LookupSource":case"MisbehaviorReport":case"Proposal":case"RuntimeCall":case"Signature":case"SessionKey":case"StorageKey":case"ValidatorId":return;case"String":case"Text":case"Raw":case"Keys":return"";case"Vote":return-1;case"VoteThreshold":return 0;case"BlockHash":case"CodeHash":case"Hash":case"H256":return e.createType("H256");case"H512":return e.createType("H512");case"H160":return e.createType("H160");case"Extrinsic":return e.createType("Raw");case"Null":return null;default:{let c=null;try{const t=e.createType(n),o=(0,a.c)(t.toRawType());if((0,i.f)(t))return r.Yz;if([s.K.Struct].includes(o.info))return;if([s.K.Enum,s.K.Tuple].includes(o.info))return l(e,o)}catch(e){c=e.message}return o.includes(n)||(o.push(n),c&&console.error(`params: initValue: ${c}`),console.info(`params: initValue: No default value for type ${n} from ${JSON.stringify(t)}, using defaults`)),"0x"}}}},69956(e,t,n){n.d(t,{Y:()=>i});var a=n(14041),s=n(77436);const i=(0,n(55155).F)("useStakingAsyncApis",function(){return(0,a.useContext)(s.aQ)})},70280(e,t,n){n.d(t,{A:()=>o});var a=n(31085),s=n(14041),i=n(61020),r=n(6943);const o=s.memo(function({children:e,className:t="",label:n}){const{t:s}=(0,r.B)(),{systemChain:o}=(0,i.g)();return(0,a.jsxs)("div",{className:t,children:[n||"",o||s("Unknown"),e]})})},71889(e,t,n){n.d(t,{Ay:()=>s,I5:()=>a});const a="#2e86ab",s=`\n  .theme--dark,\n  .theme--light {\n    a:not(.ui--Tab) {\n      color: ${a};\n\n      &:hover,\n      a:visited {\n        color: ${a};\n      }\n    }\n\n    .ui--Button {\n      &.isIcon:not(.isDisabled):not(.withoutLink):not(:hover) {\n        .ui--Icon {\n          color: ${a};\n        }\n      }\n    }\n\n    .ui.modal > .header:not(.ui) {\n      border-bottom-color: #767778;\n    }\n\n    .ui.negative.button,\n    .ui.buttons .negative.button {\n      background: #666 !important;\n    }\n  }\n`},72026(e,t,n){n.d(t,{A:()=>o});var a=n(31085),s=n(14041),i=n(1445),r=n(7643);const o=s.memo(function({children:e,className:t="",isExpanded:n,isHeader:o,labelHash:l,labelSignature:c,mortality:d,onError:u,stringId:m,tip:h,value:p,withBorder:g,withHash:f,withSignature:b}){const A=(0,s.useMemo)(()=>p?.callIndex?p.registry.findMetaCall(p.callIndex):null,[p]);if(!A||!p)return null;const{meta:x,method:v,section:w}=A,y=`${w}.${v}`;return(0,a.jsx)("div",{className:`${t} ui--CallExpander`,children:(0,a.jsxs)(i.c6,{isHeader:o,isLeft:!0,isOpen:n,summaryHead:(0,a.jsxs)(a.Fragment,{children:[m&&`#${m}: `,y]}),summaryMeta:x,children:[(0,a.jsx)(r.A,{callName:y,labelHash:l,labelSignature:c,mortality:d,onError:u,tip:h,value:p,withBorder:g,withExpander:!0,withHash:f,withSignature:b}),e]})})})},72272(e,t,n){n.d(t,{A:()=>u});var a=n(31085),s=n(14041),i=n(96451),r=n(15308),o=n(9106),l=n(12387),c=n(80087);const d=o.I.div`
  label {
    display: inline-block;
  }

  .ui--EditButton {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &.center {
      justify-content: center;
    }

    &.left {
      justify-content: left;
    }
  }

  .ui--Tag {
    margin: 0.1rem 0 0.1rem 0.571rem;
  }
`,u=s.memo(function({children:e,className:t="",isEditable:n,isEditing:o,onChange:u,onSave:m,onToggleIsEditing:h,value:p,withEditButton:g=!0,withTitle:f}){const{t:b}=(0,c.B)(),A=(0,s.useMemo)(()=>p.length?p.map(e=>(0,a.jsx)(l.A,{label:e},e)):(0,a.jsx)("div",{children:b("none")}),[b,p]),x=(0,s.useCallback)(()=>{m&&m(),h&&h()},[m,h]);return(0,a.jsxs)(d,{className:`${t} ui--Tags`,children:[f&&(0,a.jsx)("h5",{children:b("Tags")}),n&&o?(0,a.jsx)(r.A,{defaultValue:p,onBlur:x,onChange:u,onClose:x,openOnFocus:!0,searchInput:{autoFocus:!1},value:p,withLabel:!1}):n&&g?(0,a.jsx)(i.A,{className:0===p.length?"center":"left",onClick:h,children:A}):A,e]})})},73408(e,t,n){n.d(t,{a:()=>c,c:()=>d});var a=n(14041),s=n(55155);const i=["ipfs","ipns"],r=i.map(e=>`/${e}/`),o=".ipfs.localhost",l=".ipns.localhost";function c(){const[e]=window.location.href.split("#");return e.includes(o)?function(e){const[,,t]=e.split("/"),n=t.split(":")[0];return{ipfsHash:n.replace(o,""),ipfsPath:n,ipnsChain:null,ipnsDomain:null,isIpfs:!0,isIpns:!1}}(e):e.includes(l)?function(e){const[,,t]=e.split("/"),n=t.split(":")[0],a=n.replace(l,""),s=a.split(".");let i=null,r=null;return s.length>2?(i=s[0],r=s.slice(1).join(".")):r=a,{ipfsHash:null,ipfsPath:n,ipnsChain:i,ipnsDomain:r,isIpfs:!0,isIpns:!0}}(e):function(e){const t=r.some(t=>e.includes(t)),n=e.includes(r[1]),a=e.split("/"),s=a.indexOf(n?i[1]:i[0]);let o=null,l=null,c=null,d=null;if(-1!==s)if(l=a.slice(0,s+1).join("/"),n){const e=a[s+1],t=e.split(".");t.length>2?(c=t[0],d=t.slice(1).join(".")):d=e}else o=a[s+1];return{ipfsHash:o,ipfsPath:l,ipnsChain:c,ipnsDomain:d,isIpfs:t,isIpns:n}}(e)}const d=(0,s.F)("useIpfs",function(){const[e]=(0,a.useState)(()=>c());return e})},74809(e,t,n){n.d(t,{j:()=>i,As:()=>r,$:()=>o,y:()=>l.y,si:()=>c,fJ:()=>m,ch:()=>f});var a=n(770),s=n(6404);function i(e,t,n,i="",r=!1){let o=!1;const l=i.toLowerCase();if(l||r){if(n){const{accountId:t,accountIndex:a,identity:c,nickname:d}=n,u=!!t&&t.toString().includes(i)||!!a&&a.toString().includes(i);!r&&u?o=!0:(0,s.T)(e.query.identity?.identityOf)?o=!!c&&(!!c.display||!!c.displayParent)&&(u||!!c.display&&c.display.toLowerCase().includes(l)||!!c.displayParent&&c.displayParent.toLowerCase().includes(l)):d&&(o=d.toLowerCase().includes(l))}if(!o){const e=a.AC.getAddress(t);o=!!e?.meta?.name&&e.meta.name.toLowerCase().includes(l)}}else o=!0;return o}const r=(e,t)=>e.filter(e=>e.value?.toString().toLowerCase().includes(t.toLowerCase()));function o(e){try{const t=e?a.AC.getPair(e.toString()):null;if(t)return t.meta.isInjected?"injected":t.meta.isHardware?t.meta.hardwareType||"hardware":t.meta.isExternal?t.meta.isMultisig?"multisig":t.meta.isProxied?"proxied":t.meta.isLocal?"chopsticks":"qr":t.type}catch{}return"unknown"}var l=n(91693);function c(e,t=null,n){const a=(0,l.y)(e,t);return a.name?[!1,!1,a.name.toUpperCase()]:n?[!1,!0,n.toUpperCase()]:[!0,!1,e]}var d=n(51784),u=n(35038);function m(e){if(!e)return null;let t;const n=(0,l.y)(e,"contract");try{const e=n.contract&&JSON.parse(n.contract.abi);t=new d.l(e,u.g.api.registry.getChainProperties())}catch(e){console.error(e)}return t||null}var h=n(54143),p=n(59540),g=n(84645);function f(e,t=!1,n){if(e)try{const s=(0,h.qv)(e)?(0,p.V)(e):a.AC.decodeAddress(e);if(!t&&32!==s.length&&20!==s.length)throw new Error("AccountIndex values not allowed");if(n&&s.length!==n)throw new Error("Invalid key length");return 20===s.length?(0,g.w)(s):a.AC.encodeAddress(s)}catch{}}},76385(e,t,n){n.d(t,{I:()=>m,M:()=>u});var a=n(31085),s=n(14041),i=n(79876),r=n(29220),o=n(63513),l=n(61020),c=n(79129);const d={eventCount:0,events:[]},u=s.createContext(d);function m({children:e}){const{api:t,isApiReady:n}=(0,l.g)(),[m,h]=(0,s.useState)(d),p=(0,c.Gc)(n&&t.query.system.events),g=(0,s.useRef)({block:null,event:null});return(0,s.useEffect)(()=>{p&&async function(e,t,n,a){const s=n.map((e,t)=>({indexes:[t],record:e})).filter(({record:{event:{method:e,section:t}}})=>!("system"===t||["balances","treasury"].includes(t)&&["Deposit","UpdatedInactive","Withdraw"].includes(e)||["transactionPayment"].includes(t)&&["TransactionFeePaid"].includes(e)||["paraInclusion","parasInclusion","inclusion"].includes(t)&&["CandidateBacked","CandidateIncluded"].includes(e)||["relayChainInfo"].includes(t)&&["CurrentBlockNumbers"].includes(e))).reduce((e,t)=>{const n=e.find(({record:{event:{method:e,section:n}}})=>t.record.event.section===n&&t.record.event.method===e);return n?n.indexes.push(...t.indexes):e.push(t),e},[]).reverse(),l=(0,o.E)((0,i.j)((0,r.A)(s)));if(l!==t.event&&s.length){t.event=l;const i=await e.rpc.chain.getHeader(n.createdAtHash),r=i.number.unwrap(),o=i.hash.toHex();o!==t.block&&(t.block=o,a(({events:e})=>({eventCount:n.length,events:[...s.map(({indexes:e,record:t})=>({blockHash:o,blockNumber:r,indexes:e,key:`${r.toNumber()}-${o}-${e.join(".")}`,record:t})),...e.filter(e=>!e.blockNumber?.eq(r))].slice(0,75)})))}else a(({events:e})=>({eventCount:n.length,events:e}))}(t,g.current,p,h).catch(console.error)},[t,g,p,h]),(0,a.jsx)(u.Provider,{value:m,children:e})}},76791(e,t,n){n.d(t,{h:()=>m});var a=n(14041),s=n(95927),i=n.n(s),r=n(83448),o=n(51524),l=n(55155),c=n(61020),d=n(79129);const u=new Uint8Array(32),m=(0,l.F)("useTreasury",function(){const{api:e}=(0,c.g)(),[t,n]=(0,a.useState)(()=>({pendingBounties:o.Yz,pendingProposals:o.Yz,spendPeriod:e.consts.treasury?e.consts.treasury.spendPeriod:o.Yz,treasuryAccount:(0,r.z)("modl",e.consts.treasury&&e.consts.treasury.palletId?e.consts.treasury.palletId.toU8a(!0):"py/trsry",u).subarray(0,32)})),s=(0,d.Gc)(e.derive.bounties?.bounties),l=(0,d.Gc)(e.derive.treasury.proposals),m=(0,d.Gc)(e.derive.balances?.account,[t.treasuryAccount]);return(0,a.useEffect)(()=>{m&&e.consts.treasury&&n(({pendingBounties:t,pendingProposals:n,spendPeriod:a,treasuryAccount:s})=>({burn:m.freeBalance.gt(o.Yz)&&!e.consts.treasury.burn.isZero()?e.consts.treasury.burn.mul(m.freeBalance).div(o.i5):o.Yz,pendingBounties:t,pendingProposals:n,spendPeriod:a,treasuryAccount:s,value:m.freeBalance.gt(o.Yz)?m.freeBalance:void 0}))},[e,m]),(0,a.useEffect)(()=>{l&&n(e=>({...e,pendingProposals:l.approvals.reduce((e,{proposal:{value:t}})=>e.iadd(t),new(i())(0)),totalProposals:l.proposalCount.toNumber()}))},[l]),(0,a.useEffect)(()=>{s&&n(e=>({...e,pendingBounties:s.reduce((e,{bounty:{status:t,value:n}})=>e.iadd(t.isApproved?n:o.Yz),new(i())(0))}))},[s]),t})},77436(e,t,n){n.d(t,{aQ:()=>u,cF:()=>m,x4:()=>d});var a=n(31085),s=n(14041),i=n(34985),r=n(70248),o=n(97783),l=n(61020);const c=(0,o.Xi)((e,t)=>t?.toString()||e),d=async e=>{const t=await i.G.create({provider:new r.E(e)});return await t.isReadyOrError,t},u=s.createContext({ahEndPoints:[],isRelayChain:!1,isStakingAsync:!1,rcEndPoints:[]}),m=({children:e})=>{const{api:t,isApiReady:n}=(0,l.g)();return n&&(t.tx.stakingAhClient||t.tx.staking&&t.tx.stakingRcClient)?(0,a.jsx)(h,{children:e}):(0,a.jsx)(a.Fragment,{children:e})},h=({children:e})=>{const{api:t,apiEndpoint:n}=(0,l.g)(),[i,r]=(0,s.useState)(),[o,m]=(0,s.useState)(),h=(0,s.useMemo)(()=>!!t.tx.stakingAhClient,[t]),p=(0,s.useMemo)(()=>!!(t.tx.stakingAhClient||t.tx.staking&&t.tx.stakingRcClient),[t]),g=(0,s.useMemo)(()=>(h?n?.providers:n?.valueRelay)?.filter(e=>e.startsWith("wss://"))||[],[n,h]),f=(0,s.useMemo)(()=>h?c.find(({genesisHashRelay:e,paraId:n})=>1e3===n&&e===t.genesisHash.toHex())?.providers||[]:n?.providers?.filter(e=>e.startsWith("wss://"))||[],[t,n,h]);(0,s.useEffect)(()=>{if(h){const e=f.at(Math.floor(Math.random()*f.length));m(t),e&&d(e).then(r).catch(console.error)}else{const e=g.at(Math.floor(Math.random()*g.length));r(t),e&&d(e).then(m).catch(console.error)}},[f,t,h,g]);const b=(0,s.useMemo)(()=>({ahApi:i,ahEndPoints:f,isRelayChain:h,isStakingAsync:p,rcApi:o,rcEndPoints:g}),[i,f,h,p,o,g]);return(0,a.jsx)(u.Provider,{value:b,children:e})}},79129(e,t,n){n.d(t,{Gc:()=>h,H4:()=>u,al:()=>m,vx:()=>d});var a=n(14041),s=n(6404),i=n(63181),r=n(58797),o=n(60750),l=n(61020),c=n(22067);function d(e){return e}function u(e,t,n){console.error(t.current.error=new Error(`${t.current.type}(${function(e){return!!e&&!(0,o.b)(e.creator)}(n)?`${n.creator.section}.${n.creator.method}`:"..."}):: ${e.message}:: ${e.stack||"<unknown>"}`))}function m(e){e.current.isActive=!1,e.current.subscriber&&(e.current.subscriber.then(e=>(0,s.T)(e)&&e()).catch(t=>u(t,e)),e.current.subscriber=null)}function h(e,t,n){const{api:s}=(0,l.g)(),h=(0,c.T)(),p=(0,a.useRef)({error:null,fn:null,isActive:!1,serialized:null,subscriber:null,type:"useCall"}),[g,f]=(0,a.useState)(n?.defaultValue);return(0,a.useEffect)(()=>()=>m(p),[]),(0,a.useEffect)(()=>{if(h.current&&e){const[a,l]=function(e,t,{paramMap:n=d}={}){return[JSON.stringify({f:e?.name,p:t}),0!==t.length&&t.some(e=>(0,i.k)(e)||(0,o.b)(e))?null:n(t)]}(e,t||[],n);!l||e===p.current.fn&&a===p.current.serialized||(p.current.fn=e,p.current.serialized=a,function(e,t,n,a,s,i,{transform:l=d,withParams:c,withParamsTransform:h}={}){const p=s.filter(e=>!(0,o.b)(e));m(n),(0,r.d)(()=>{t.current&&(!a||function(e){return!!e.meta?.type?.isMap}(a)&&a.meta.type.asMap.hashers.length!==p.length?n.current.subscriber=null:(n.current.isActive=!0,n.current.subscriber=a(...s,r=>{if(t.current&&n.current.isActive)try{i(c?[s,l(r,e)]:l(h?[s,r]:r,e))}catch(e){u(e,n,a)}}).catch(e=>u(e,n,a))))})}(s,h,p,e,l,f,n))}},[s,e,n,h,t]),g}},80087(e,t,n){n.d(t,{A:()=>i,B:()=>s});var a=n(37140);function s(){return(0,a.Bd)("react-components")}function i(e){return(0,a.CI)(["react-components"])(e)}},81899(e,t,n){n.d(t,{A:()=>r});var a=n(31085),s=n(14041);const i=n(1445).I4.div`
  &.withBorder {
    padding-left: 2rem;

    .ui--Params-Content {
      border-left: 1px dashed var(--border-input);

      .ui--Params.withBorder {
        padding-left: 0;
      }
    }
  }

  &.withExpander {
    padding-left: 0.25rem;
  }

  &.withPadding {
    padding-left: 4rem;
  }

  .ui--Param-composite .ui--row,
  .ui--Param-composite .ui--row .ui--InputAddressSimple {
    & > .ui--Labelled > label {
      text-transform: none !important;
    }
  }

  .ui--row {
    flex-wrap: wrap;
  }

  .ui--Param-Address {
  }

  .ui--Params-Content {
    box-sizing: border-box;
    padding: 0;

    .ui--Params-Content {
      margin-left: 2rem;
    }
  }

  .ui--Param-text {
    display: inline-block;
    font-size: var(--font-size-base);
    line-height: 1.714rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ui--Param-text .icon {
    margin-right: 0.5rem !important;
  }

  .ui--Param-text * {
    vertical-align: middle;
  }

  .ui--Param-text.nowrap {
    white-space: nowrap;
  }

  .ui--Param-text.name {
    color: rgba(0, 0, 0, .6);
    font-style: italic;
  }

  .ui--Param-text + .ui--Param-text {
    margin-left: 0.5rem;
  }

  .ui--Param-Vector-buttons {
    text-align: right;
  }

  .ui--Param-BTreeMap-buttons {
    text-align: right;
  }

  .ui--Param-composite {
    position: relative;

    .ui--Param-overlay {
      position: absolute;
      top: 0.5rem;
      right: 3.5rem;
    }
  }
`,r=s.memo(function({children:e,className:t="",withBorder:n,withExpander:s,withPadding:r}){return(0,a.jsx)(i,{className:`${t} ui--Params ${n?"withBorder":""} ${r?"withPadding":""} ${s?"withExpander":""}`,children:e})})},85016(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(61020),r=n(79129),o=n(33168);const l=s.memo(function({children:e,className:t="",label:n}){const{api:s}=(0,i.g)(),l=(0,r.Gc)(s.query.balances?.totalIssuance);return(0,a.jsxs)("div",{className:t,children:[n||"",(0,a.jsx)(o.A,{className:l?"":"--tmp",value:l||1,withSi:!0}),e]})})},85121(e,t,n){n.d(t,{D:()=>i});var a=n(14041),s=n(64767);const i=(0,n(55155).F)("useTheme",function(){const e=(0,a.useContext)(s.Dx);return(0,a.useMemo)(()=>({theme:e?.theme||"light",themeClassName:`theme--${e?.theme||"light"}`}),[e])})},85199(e,t,n){n.d(t,{A:()=>u});var a=n(31085),s=n(14041),i=n(28138),r=n(96451),o=n(7135),l=n(9106),c=n(72272);const d=l.I.div`
  text-align: left;

  &.isDisabled {
    opacity: var(--opacity-light);

    .ui--IdentityIcon  {
      filter: grayscale(100%);
    }
  }

  &.isInline {
    display: flex;

    .ui--Row-accountId {
      white-space: nowrap;
    }
  }

  &.isInvalid {
    .ui--Row-accountId,
    .ui--Row-icon {
      filter: grayscale(100);
      opacity: var(--opacity-light);
    }
  }

  .ui--Row-base {
    display: flex;
    min-width: 16rem;
  }

  .ui--Row-buttons {
    position: relative;
    margin-right: -0.5rem;
    margin-top: -0.5rem;
    white-space: nowrap;
    height: 0rem;
    overflow: visible;

    button.ui.button:last-child {
      margin-right: 0;
    }
  }

  .ui--Row-children {
    display: block;
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .ui--Row-details {
    flex: 1;
    margin-right: 1rem;
    padding: 0.25rem 0 0;
    width: 100%;
    min-width: 0;

    .account-label{
      margin: -0.75rem 0 0 0
    }

    * {
      vertical-align: middle;
    }
  }

  .ui--Row-address,
  .ui--Row-accountIndex {
    padding: 0;
    margin-bottom: 0.25rem;

    &.shortAddr {
      min-width: var(--width-shortaddr);
      max-width: var(--width-shortaddr);
      opacity: var(--opacity-light);
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .ui--Row-name {
    display: flex;
    box-sizing: border-box;
    height: 1.5rem;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: inherit;
  }

  .ui--Row-icon {
    flex: 0;
    margin-right: 1em;
    position: relative;

    .ui--Row-icon-info {
      left: -0.5rem;
      position: absolute;
      top: -0.5rem;
    }
  }

  .ui--Row-name-input {
    input {
      height: 1em;
      text-transform: uppercase;
      margin-top: -0.3em;
    }
  }

  .ui--Row-tags {
    &.editable {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;

      .addTags {
        border: 1px #00000052 solid;
        border-radius: .5em;
        border-style: dashed;
        color: grey;
        font-size: var(--font-size-tiny);
        padding: .1em 0.3em 0.1em 0.3em;
        margin-top: .2em;
      }

      > div.label {
        margin-top:.3em
      }
    }
  }

  .ui--Row-tags-input {
    margin-bottom: -1.4em;
  }
`,u=s.memo(function({address:e,buttons:t,children:n,className:l="",defaultName:u,details:m,icon:h,iconInfo:p,isDisabled:g,isEditableName:f,isEditableTags:b,isInline:A,isShortAddr:x=!0,name:v,onChangeName:w,onChangeTags:y,onSaveName:k,onSaveTags:j,tags:C}){const[N,E]=(0,i.e)(),[S,I]=(0,i.e)(),B=(0,s.useCallback)(()=>{k&&k(),E()},[k,E]);return(0,a.jsxs)(d,{className:`${l} ui--Row ${g?"isDisabled":""} ${A?"isInline":""}`,children:[(0,a.jsxs)("div",{className:"ui--Row-base",children:[h&&(0,a.jsxs)("div",{className:"ui--Row-icon",children:[h,p&&(0,a.jsx)("div",{className:"ui--Row-icon-info",children:p})]}),(0,a.jsxs)("div",{className:"ui--Row-details",children:[(v||u)&&(f&&N?(0,a.jsx)(o.Ay,{autoFocus:!0,defaultValue:v||u,isInPlaceEditor:!0,onBlur:B,onChange:w,onEnter:!0,withLabel:!1}):(0,a.jsx)("div",{className:"ui--Row-name",children:f?(0,a.jsx)(r.A,{onClick:E,children:v||u}):v||u})),e&&(0,a.jsx)("div",{className:"ui--Row-address "+(x?"shortAddr":""),children:e.toString()}),m,C&&(0,a.jsx)(c.A,{className:"ui--Row-tags",isEditable:b,isEditing:S,onChange:y,onSave:j,onToggleIsEditing:I,value:C})]}),t&&(0,a.jsx)("div",{className:"ui--Row-buttons",children:t})]}),n&&(0,a.jsx)("div",{className:"ui--Row-children",children:n})]})})},86788(e,t,n){n.d(t,{S:()=>o});var a=n(55155),s=n(61020),i=n(79129);const r={transform:e=>e.hash.toHex()},o=(0,a.F)("useBestHash",function(){const{api:e}=(0,s.g)();return(0,i.Gc)(e.rpc.chain.subscribeNewHeads,void 0,r)})},86832(e,t,n){n.d(t,{Gh:()=>a,qe:()=>i,qk:()=>s});const a="Discord";var s;!function(e){e[e.Reservation=0]="Reservation",e[e.Lease=1]="Lease",e[e["Bulk Coretime"]=2]="Bulk Coretime",e[e["On Demand"]=3]="On Demand"}(s||(s={}));const i={Eligible:"eligible",None:"-",Renewed:"renewed"}},87497(e,t,n){n.d(t,{x:()=>c});var a=n(14041),s=n(58797),i=n(60750),r=n(61020),o=n(79129),l=n(22067);function c(e,t){const{api:n}=(0,r.g)(),c=(0,l.T)(),d=(0,a.useRef)({error:null,fn:null,isActive:!1,serialized:null,subscriber:null,type:"useCallMulti"}),[u,m]=(0,a.useState)(()=>(0,i.b)(t?.defaultValue)?[]:t?.defaultValue);return(0,a.useEffect)(()=>()=>(0,o.al)(d),[]),(0,a.useEffect)(()=>{if(c.current&&e){const a=JSON.stringify(e);a!==d.current.serialized&&(d.current.serialized=a,function(e,t,n,a,i,{transform:r=o.vx}={}){(0,o.al)(n),(0,s.d)(()=>{if(t.current){const s=a.map(e=>!(!e||Array.isArray(e)&&!e[0])),l=a.filter((e,t)=>s[t]);l.length?(n.current.isActive=!0,n.current.subscriber=e.queryMulti(l,l=>{if(t.current&&n.current.isActive){let t=-1;try{i(r(a.map((e,n)=>s[n]?l[++t]:void 0),e))}catch(e){(0,o.H4)(e,n)}}}).catch(e=>(0,o.H4)(e,n))):n.current.subscriber=null}})}(n,c,d,e,m,t))}},[n,e,t,c]),u}},88274(e,t,n){n.d(t,{O:()=>i});var a=n(14041),s=n(58797);const i=(0,n(55155).F)("useNextTick",function(){const[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(0,s.d)(()=>t(!0))},[]),e})},91516(e,t,n){n.d(t,{A:()=>u});var a=n(47304),s=n(50726),i=n(37140),r=n(49723),o=n(2866),l=n(43056);const c={},d=new s.A;d.addDetector({lookup:()=>{const e=r.W.i18nLang;return e===o.ti?void 0:e},name:"i18nLangDetector"}),a.Ay.use(d).use(i.r9).use(class{type="backend";static type="backend";async read(e,t,n){if(l.A[e])return n(null,l.A[e]);c[e]||(c[e]=this.createLoader(e));const[a,s]=await c[e];return n(a,s)}async createLoader(e){try{const t=await fetch(`locales/${e}/translation.json`,{});return t.ok?(l.A[e]=await t.json(),[null,l.A[e]]):[`i18n: failed loading ${e}`,t.status>=500&&t.status<600]}catch(e){return[e.message,!1]}}}).init({backend:{},debug:!1,detection:{order:["i18nLangDetector","navigator"]},fallbackLng:!1,interpolation:{escapeValue:!1,prefix:"{{",suffix:"}}"},keySeparator:!1,load:"languageOnly",ns:["apps","apps-config","apps-electron","apps-routing","app-accounts","app-claims","app-contracts","app-council","app-democracy","app-explorer","app-extrinsics","app-generic-asset","app-js","app-teyrchains","app-poll","app-rpc","app-settings","app-signing","app-society","app-staking","app-staking-async","app-staking-legacy","app-storage","app-sudo","app-tech-comm","app-treasury","react-api","react-components","react-hooks","react-params","react-query","react-signer","translation"],nsSeparator:!1,react:{useSuspense:!0},returnEmptyString:!1,returnNull:!1}).catch(e=>console.log("i18n: failure",e)),r.W.on("change",e=>{(e.i18nLang===o.ti?a.Ay.changeLanguage():a.Ay.changeLanguage(e.i18nLang)).catch(console.error)});const u=a.Ay},91693(e,t,n){n.d(t,{y:()=>s});var a=n(770);function s(e,t=null){let n;try{const s=a.AC.getAddress(e,t);n=s?.meta}catch{}return n||{}}},92165(e,t,n){n.d(t,{d:()=>s});var a=n(26865);const s=(e,t,n,s)=>{const{event:i,phase:r}=e,o=i.data.some(e=>s.some(t=>e.toString().includes(t)||e.toString().includes((0,a.i)(t))));let l=!1;if(r.isApplyExtrinsic){const e=t[r.asApplyExtrinsic.toNumber()];e?.signer&&(l=s.includes(e.signer.toString()))}const c=n&&s.includes(n.toString());return o||l||c}},94135(e,t,n){n.d(t,{L:()=>i,c:()=>r});var a=n(919),s=n(92100);function i(e){try{const{code:t,multihash:{code:n,digest:i},version:r}=a.TO.parse(e);return{codec:t,hash:{code:n,digest:(0,s.X)(i)},version:r}}catch(t){return console.error(`fromIpfsCid: ${t.message}::`,e),null}}function r(e){try{const{codec:t,hash_:{code:n,digest:s},version:i}=e,r=s.toU8a(!0),o=a.L8.encodingLength(n.toNumber()),l=a.L8.encodingLength(r.length),c=new Uint8Array(o+l+r.length);return a.L8.encodeTo(n.toNumber(),c,0),a.L8.encodeTo(r.length,c,o),c.set(r,o+l),a.TO.create(i.index,t.toNumber(),a.br.decode(c)).toString()}catch(t){return console.error(`toIpfsCid: ${t.message}::`,e.toHuman()),null}}},95675(e,t,n){n.d(t,{A:()=>m});var a=n(31085),s=n(14041),i=n(848),r=n(60750),o=n(2393),l=n(11172),c=n(9106),d=n(80087);const u=c.I.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;

  p {
    font-size: var(--font-size-tiny);
    font-weight: var(--font-weight-normal);
  }
`,m=s.memo(function({autoFocus:e,children:t,className:n="",defaultValue:c,isDisabled:m,isError:h,isFull:p,isLoading:g,isWarning:f,isZeroable:b,label:A,labelExtra:x,maxValue:v,onChange:w,onEnter:y,onEscape:k,placeholder:j,siDecimals:C,siSymbol:N,value:E,withEllipsis:S,withLabel:I,withMax:B}){const{t:F}=(0,d.B)(),{defaultValue:T,siDefault:D}=(0,s.useMemo)(()=>function(e,t=!1,n){if(!e)return{};const a=(0,i.Q)(e,{decimals:(0,r.b)(n)?i.Q.getDefaults().decimals:n,forceUnit:"-",withAll:!0,withSi:!1,withZero:!1});return{defaultValue:t?`${a}.`.split(".").slice(0,2).map((e,t)=>t?e.padEnd(4,"0"):e).join("."):a.replace(/,/g,""),siDefault:i.Q.findSi("-")}}(c,m,C),[c,m,C]),[L]=(0,s.useState)(()=>D||i.Q.findSi("-"));return(0,a.jsx)(l.A,{autoFocus:e,bitLength:128,className:`${n} ui--InputBalance`,defaultValue:T,isDisabled:m,isError:h,isFull:p,isLoading:g,isSi:!0,isWarning:f,isZeroable:b,label:A,labelExtra:(0,a.jsxs)(u,{children:[x,!!L&&(N||o.A.abbr)&&!m&&(0,a.jsx)("p",{children:F("(enter value in standard units)")})]}),maxValue:v,onChange:w,onEnter:y,onEscape:k,placeholder:j,siDecimals:C,siDefault:D,siSymbol:N,value:E,withEllipsis:S,withLabel:I,withMax:B,children:t})})},96348(e,t,n){n.d(t,{I2:()=>v,Pd:()=>b});var a=n(14041),s=n(55155),i=n(61020),r=n(79129),o=n(68050),l=n(95927),c=n.n(l),d=n(21327),u=n(93302),m=n(51524),h=n(92100),p=n(76733),g=n(33482);function f(e){if(e.query.preimage&&e.query.preimage.preimageFor&&e.query.preimage.preimageFor.creator.meta.type.isMap){const{type:t}=e.registry.lookup.getTypeDef(e.query.preimage.preimageFor.creator.meta.type.asMap.key);if("H256"===t)return"hash";if("(H256,u32)"===t)return"hashAndLen"}return"unknown"}function b(e,t){let n,a;if((0,p.K)(t))n=t;else if((0,g.b)(t))n=t.toHex();else{const s=t;s.isInline?(a=s.asInline.toU8a(!0),n=(0,h.X)(e.registry.hash(a))):t.isLegacy?n=t.asLegacy.hash_.toHex():t.isLookup?n=t.asLookup.hash_.toHex():console.error(`Unhandled PezframeSupportPreimagesBounded type ${t.type}`)}return{inlineData:a,paramsStatus:n&&[n],proposalHash:n,resultPreimageHash:n&&{count:0,isCompleted:!1,isHashParam:"hash"===f(e),proposalHash:n,proposalLength:a&&new(c())(a.length),status:null}}}function A(e,t,n){const a=(0,g.b)(n)?n:n.unwrapOr(null),s=e=>(0,u.b)({},t,{isCompleted:!0,...e});if(!a)return s({proposalWarning:"No preimage bytes found"});try{const t=e.tx(a.toString()),n=e.createType("Call",t.method);if(t.toHex()===a.toString())return s({proposal:n})}catch{}try{const n=e.registry.createType("Call",a),i=n.encodedLength;if(t.proposalLength){const e=t.proposalLength.toNumber();return s({proposal:n,proposalWarning:i!==e?`Decoded call length does not match on-chain stored preimage length (${(0,d.Z)(i)} bytes vs ${(0,d.Z)(e)} bytes)`:null})}return s({proposal:n,proposalLength:new(c())(i)})}catch(e){console.error(e)}return s({proposalError:"Unable to decode preimage bytes into a valid Call"})}function x(e){return e?{amount:e[1],who:e[0].toString()}:void 0}const v=(0,s.F)("usePreimage",function(e){const{api:t}=(0,i.g)(),{inlineData:n,paramsStatus:s,resultPreimageHash:l}=(0,a.useMemo)(()=>e?b(t,e):{},[t,e]),c=(0,r.Gc)(!n&&s&&t.query.preimage?.statusFor,s),d=(0,r.Gc)(!n&&s&&t.query.preimage?.requestStatusFor,s),h=c?.isSome?c:d,{paramsBytes:p,resultPreimageFor:g}=(0,a.useMemo)(()=>l&&h?function(e,t){const n=(0,u.b)({},e,{status:t.unwrapOr(null)});if(n.status)if(n.status.isRequested){const e=n.status.asRequested;e instanceof o.c||(n.count=e.count.toNumber(),n.deposit=x(e.maybeTicket?e.maybeTicket.unwrapOr(null):e.deposit.unwrapOr(null)),n.proposalLength=e.maybeLen?e.maybeLen.unwrapOr(m.Yz):e.len.unwrapOr(m.Yz))}else if(n.status.isUnrequested){const e=n.status.asUnrequested;e instanceof o.c?n.deposit=x(e.unwrapOr(null)):(n.deposit=x(e.ticket||e.deposit),n.proposalLength=e.len)}else console.error(`Unhandled PezpalletPreimageRequestStatus type: ${n.status.type}`);return{paramsBytes:n.isHashParam?[n.proposalHash]:[[n.proposalHash,n.proposalLength||m.Yz]],resultPreimageFor:n}}(l,h):{},[h,l]),f=(0,r.Gc)(p&&t.query.preimage?.preimageFor,p);return(0,a.useMemo)(()=>g?f?A(t,g,f):g:l?n?A(t,l,n):l:void 0,[t,n,f,l,g])})},96451(e,t,n){n.d(t,{A:()=>l});var a=n(31085),s=n(14041),i=n(71889),r=n(25768);const o=n(9106).I.div`
  cursor: pointer;

  .ui--Icon.icon-button {
    color: ${i.I5};
    cursor: pointer;
    margin: 0 0 0 0.5rem;
  }

  .editSpan {
    white-space: nowrap;
  }
`,l=s.memo(function({children:e,className:t="",icon:n="edit",onClick:s}){return(0,a.jsxs)(o,{className:`${t} ui--EditButton`,onClick:s,children:[e,(0,a.jsx)("span",{className:"editSpan",children:(0,a.jsx)(r.A,{className:"icon-button",icon:n})})]})})},97186(e,t,n){n.d(t,{o:()=>i});var a=n(14041),s=n(38994);const i=(0,n(55155).F)("useAccounts",function(){return(0,a.useContext)(s.J).accounts})},97301(e,t,n){n.d(t,{R:()=>r});var a=n(14041),s=n(55155),i=n(22067);const r=(0,s.F)("useIncrement",function(e=1){const t=(0,i.T)(),[n,s]=(0,a.useState)(e),r=(0,a.useCallback)(()=>{t.current&&s(e=>++e)},[t]);return[n,r,s]})},97670(e,t,n){n.d(t,{r:()=>l});var a=n(14041),s=n(55155),i=n(70020),r=n.n(i),o=n(61020);const l=(0,s.F)("useFavorites",function(e){const[t,n]=function(e){const{api:t,isDevelopment:n}=(0,o.g)(),s=(0,a.useMemo)(()=>`${e}:${n?"development":t.genesisHash.toHex()}`,[t,n,e]);return[(0,a.useCallback)(()=>r().get(s),[s]),(0,a.useCallback)(e=>r().set(s,e),[s])]}(e),[s,i]=(0,a.useState)(()=>t()||[]),l=(0,a.useCallback)(e=>i(t=>n(t.includes(e)?t.filter(t=>e!==t):[...t,e])),[n]);return(0,a.useMemo)(()=>[s,l],[s,l])})},98893(e,t,n){n.d(t,{Ay:()=>h});var a=n(31085),s=n(14041),i=n(35038),r=n(1445),o=n(29220),l=n(81899),c=n(11832),d=n(27721),u=n(60353);class m extends s.PureComponent{state={params:null};static getDerivedStateFromProps({isDisabled:e,params:t=[],registry:n=i.g.api.registry,values:a},s){return e||(0,o.A)(s.params)===(0,o.A)(t)?null:{params:t,values:t.reduce((e,t,s)=>(e.push(a?.[s]?a[s]:(0,u.k)(n,t)),e),[])}}componentDidMount(){this.componentDidUpdate(null,{})}componentDidUpdate(e,t){const{isDisabled:n}=this.props,{values:a}=this.state;n||(0,o.A)(t.values)===(0,o.A)(a)||this.triggerUpdate()}render(){const{children:e,className:t="",isDisabled:n,isError:s,onEnter:d,onEscape:u,overrides:m,params:h,registry:p=i.g.api.registry,withBorder:g=!0,withExpander:f,withLength:b=!0}=this.props,{values:A=this.props.values}=this.state;return A?.length?(0,a.jsx)(l.A,{className:t,withBorder:g,withExpander:f,children:(0,a.jsx)(r.tH,{onError:this.onRenderError,children:(0,a.jsxs)("div",{className:"ui--Params-Content",children:[A&&h?.map(({name:e,type:t},i)=>(0,a.jsx)(c.A,{defaultValue:A[i],index:i,isDisabled:n,isError:s,name:e,onChange:this.onChangeParam,onEnter:d,onEscape:u,overrides:m,registry:p,type:t,withLength:b},`${e||""}:${t.type.toString()}:${i}:${n?(0,o.A)(A[i]):""}`)),e]})})}):null}onChangeParam=(e,t)=>{const{isDisabled:n}=this.props;if(n)return;const{isValid:a=!1,value:s}=t;this.setState(t=>({values:(t.values||[]).map((t,n)=>n!==e?t:{isValid:a,value:s})}),this.triggerUpdate)};triggerUpdate=()=>{const{isDisabled:e,onChange:t}=this.props,{values:n}=this.state;!e&&n&&t&&t(n)};onRenderError=()=>{const{onError:e}=this.props;e&&e()}}const h=(0,d.A)(m)},99524(e,t,n){n.d(t,{z:()=>A,D:()=>w});var a=n(31085),s=n(14041);const i="incomplete execution";function r(e){return e?e.isErr?`error: ${u(e.asErr)}`:null:i}function o({data:[e]}){return r(e)}const l={Executed:function({data:[,e]}){return r(e)}},c={Attempted:function({data:[e]}){return e?e.isIncomplete?`error: ${e.asIncomplete.error.error.type}`:null:i}},d={allianceMotion:l,council:l,membership:l,multisig:{MultisigExecuted:function({data:[,,,,e]}){return r(e)}},pezkuwiXcm:c,proxy:{ProxyExecuted:o},sudo:{Sudid:o,SudoAsDone:o},technicalCommittee:l,utility:{BatchInterrupted:function({data:[e,t]}){return`error: ${e.toString()}: ${u(t)}`},DispatchedAs:o},xcmPallet:c};function u(e){let t=e.type;if(e.isModule)try{const n=e.asModule,a=e.registry.findMetaError(n);t=`${a.section}.${a.name}`}catch{}else e.isToken&&(t=`${e.type}.${e.asToken.type}`);return t}var m=n(38489),h=n(74809),p=n(28414);let g=0;const f="extrinsic event",b=p.A.author.submitAndWatchExtrinsic,A=s.createContext({stqueue:[],txqueue:[]});const x=[],v=[];function w({children:e}){const[t,n]=(0,s.useState)(x),[i,r]=(0,s.useState)(v),o=(0,s.useRef)(t),l=(0,s.useRef)(i),c=(0,s.useCallback)(e=>{o.current=e,n(e)},[]),p=(0,s.useCallback)(e=>{l.current=e,r(e)},[]),w=(0,s.useCallback)(e=>{const t=++g;p([...l.current,{...e,id:t,removeItem:()=>p([...l.current.map(e=>e.id===t?{...e,status:"completed"}:e)]),rpc:e.rpc||b,status:"queued"}])},[p]),y=(0,s.useCallback)(e=>{const t=Array.isArray(e)?e:[e];t.length&&c([...o.current,...t.map(e=>{const t=++g,n=()=>c([...o.current.filter(e=>e.id!==t)]);return setTimeout(n,7500),{...e,id:t,isCompleted:!1,removeItem:n}})])},[c]),k=(0,s.useCallback)(e=>w({...e}),[w]),j=(0,s.useCallback)((e,t,n)=>{w({accountId:t.address,extrinsic:e.createType("Extrinsic",{method:e.createType("Call",t.method)},{version:t.version}),payload:t,signerCb:n})},[w]),C=(0,s.useCallback)(e=>w({...e}),[w]),N=(0,s.useCallback)((e,t,n,a)=>{p([...l.current.map(s=>s.id===e?{...s,error:void 0===a?s.error:a,result:void 0===n?s.result:n,status:"completed"===s.status?s.status:t}:s)]),y(function(e){return function(e){let t=null;const n=e.reduce((e,t)=>{const n=e.find(({status:e})=>e.action===t.action&&e.status===t.status);return n?n.count++:e.push({count:1,status:t}),e},[]).map(({count:e,status:t})=>1===e?t:{...t,action:`${t.action} (x${e})`}).filter(e=>e.message!==f||(t?e.action.startsWith("system.ExtrinsicSuccess")?t.action.unshift(e.action):t.action.push(e.action):t={...e,action:[e.action]},!1));return t?n.concat(t):n}((e?.events||[]).filter(e=>!!e.event&&"democracy"!==e.event.section).map(e=>{const{event:{data:t,method:n,section:a}}=e;if("system"===a&&"ExtrinsicFailed"===n){const[e]=t;return{action:`${a}.${n}`,message:u(e),status:"error"}}const s=function({event:e}){const{method:t,section:n}=e;return!!d[n]&&!!d[n][t]&&d[n][t](e)}(e);if(s)return{action:`${a}.${n}`,message:s,status:"eventWarn"};if("contracts"===a)if("ContractExecution"===n&&2===t.length){const[e,n]=t;try{const t=(0,h.fJ)(e.toString());if(t)return{action:t.decodeEvent(n).event.identifier,message:"contract event",status:"event"}}catch(e){console.error(e)}}else if("Evicted"===n)return{action:`${a}.${n}`,message:"contract evicted",status:"error"};return{action:`${a}.${n}`,message:f,status:"event"}}))}(n)),m.l.includes(t)&&setTimeout(()=>{const t=l.current.find(t=>t.id===e);t&&t.removeItem()},7500)},[y,p]),E=(0,s.useMemo)(()=>({queueAction:y,queueExtrinsic:k,queuePayload:j,queueRpc:C,queueSetTxStatus:N,stqueue:t,txqueue:i}),[y,k,j,C,N,t,i]);return(0,a.jsx)(A.Provider,{value:E,children:e})}},99655(e,t,n){n.d(t,{Ay:()=>F,kS:()=>k});var a=n(31085),s=n(14041),i=n(35038),r=n(61020),o=n(31706),l=n(7970),c=n(86319),d=n(36730),u=n(79876),m=n(21327),h=n(63937),p=n(33308),g=n(6404),f=n(33482),b=n(76506),A=n(74809),x=n(52662),v=n(9106);function w(e,t){const n=i.g.registry.createType("AccountId",(0,u.j)(e.padEnd(32,"\0")));return e=>n.eq(e)?t:null}function y(e,t,n){const a=(0,u.j)(e),s=a.length+4;return e=>{try{const r=(0,f.b)(e)?e:(0,p.Z)(e)?e.toU8a():(0,b.F)(e?.toString()||""),o=20===r.length?"AccountId20":"AccountId",l=i.g.registry.createType(o,r).toU8a();return l.length>=s&&(0,d.f)(a,l.subarray(0,a.length))&&(0,c.U)(l.subarray(s))?`${t} ${(0,m.Z)((0,h.i)(l.subarray(a.length,s)))}${n?` (${n})`:""}`:null}catch(e){return console.log(e),null}}}const k=[w("modlpy/socie","Society"),w("modlpy/trsry","Treasury"),w("modlpy/xcmch","XCM"),y("modlpy/cfund","Crowdloan"),y("modlpy/npols\0","Pool","Stash"),y("modlpy/npols","Pool","Reward"),y("modlpy/nopls\0","Pool","Stash"),y("modlpy/nopls","Pool","Reward"),y("para","Child"),y("sibl","Sibling")],j=new Map,C=new Map,N=new Map;function E(e="",t,n){let a=null;for(let e=0;null===a&&e<k.length;e++)a=k[e](t);if(a)return[a,!1,!1,!0];const s=t.toString();if(!s)return[e,!1,!1,!1];const[i,,r]=(0,A.si)(s,null,e),o=(n||"").toString()||C.get(s);return i&&o?(C.set(s,o),[o,!1,!0,!1]):[r,!i,i,!1]}function S(e="",t,n){const[s,,i]=E(e,t,n);return i?(0,a.jsx)("span",{className:"isAddress",children:s}):s}function I(e,t,n){const s=j.get(e);if(s)return s;const[i,r,o,l]=E(n,e,t);return(0,a.jsxs)("span",{className:"via-identity",children:[l&&(0,a.jsx)(x.A,{color:"green",icon:"archway",isSmall:!0}),(0,a.jsx)("span",{className:"name"+(r||l?" isLocal":o?" isAddress":""),children:i})]})}const B=v.I.span`
  border: 1px dotted transparent;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;

  &.withSidebar:hover {
    border-bottom-color: #333;
    cursor: help !important;
  }

  .isAddress {
    display: inline-block;
    min-width: var(--width-shortaddr);
    max-width: var(--width-shortaddr);
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
  }

  .via-identity {
    word-break: break-all;

    .name {
      font-weight: var(--font-weight-normal) !important;
      filter: grayscale(100%);
      line-height: 1;
      overflow: hidden;
      text-overflow: ellipsis;

      &:not(.isAddress) {
        text-transform: uppercase;
      }

      &.isAddress {
        opacity: var(--opacity-light);
      }

      .sub,
      .top {
        vertical-align: middle;
      }

      .sub {
        font-size: var(--font-size-tiny);
        opacity: var(--opacity-light);
      }
    }
  }
`,F=s.memo(function({children:e,className:t="",defaultName:n,label:i,onClick:c,override:d,toggle:u,value:m,withSidebar:h}){const{apiIdentity:p}=(0,r.g)(),f=(0,o.q)(m),[b,A]=(0,s.useState)(()=>I((m||"").toString(),void 0,n)),v=(0,s.useContext)(l.P);(0,s.useEffect)(()=>{const{accountId:e,accountIndex:t,identity:s,nickname:i}=f||{},r=(e||m||"").toString();s?.parent&&N.set(r,s.parent.toString()),p&&(0,g.T)(p.query.identity?.identityOf)?A(()=>s?.display?function(e,t){const n=t.judgements.filter(([,e])=>!e.isFeePaid),s=n.some(([,e])=>e.isKnownGood||e.isReasonable),i=n.some(([,e])=>e.isErroneous||e.isLowQuality),r=s?t.display:(t.display||"").replace(/[^\x20-\x7E]/g,""),o=t.displayParent&&(s?t.displayParent:t.displayParent.replace(/[^\x20-\x7E]/g,"")),l=(c=(0,a.jsxs)("span",{className:"name"+(s&&!i?" isGood":""),children:[(0,a.jsx)("span",{className:"top",children:o||r}),o&&(0,a.jsx)("span",{className:"sub",children:`/${r||""}`})]}),d=i?"red":s?"green":"gray",u=t.parent?"link":s&&!i?"check":"minus",(0,a.jsxs)("span",{className:"via-identity",children:[(0,a.jsx)(x.A,{color:d,icon:u,isSmall:!0}),c]}));var c,d,u;return j.set(e,l),l}(r,s):I(r,t)):A(i||S(n,r,t))},[p,n,f,u,m]);const w=(0,s.useCallback)(()=>A(S(n,(m||"").toString())),[n,m]),y=(0,s.useCallback)(()=>v&&m&&v([m.toString(),w]),[w,v,m]);return(0,a.jsxs)(B,{className:`${t}  ui--AccountName ${h?"withSidebar":""}`,"data-testid":"account-name",onClick:h?y:c,children:[i||"",d||b,e]})})},99677(e,t,n){n.d(t,{E:()=>a});const a=n(14041).createContext({})}}]);