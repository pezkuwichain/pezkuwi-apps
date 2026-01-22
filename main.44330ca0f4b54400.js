(("undefined"!=typeof self?self:this).webpackChunk_pezkuwi_apps=("undefined"!=typeof self?self:this).webpackChunk_pezkuwi_apps||[]).push([[8792],{8379(){},14981(){},15391(){},18334(e,n,t){"use strict";var r=t(31085),i=t(38405),o=t(1048).Buffer;try{3===o.from([1,2,3]).length&&(i.Mn.Buffer=o)}catch{}var s=t(10366),a=t(70020),c=t.n(a),l=t(97783),d=t(73408),p=t(49723),u=t(11243);const m=function(){const e=s.A.parse(location.href.split("?")[1]);if(e.rpc){(0,u.vA)(!Array.isArray(e.rpc),"Invalid WS endpoint specified");const n=decodeURIComponent(e.rpc.split("#")[0]);return(0,u.vA)(n.startsWith("ws://")||n.startsWith("wss://")||n.startsWith("light://"),"Non-prefixed ws/wss/light url"),n}const n=(0,l.Xi)(()=>""),{ipnsChain:t}=(0,d.a)();if(t){const e=n.find(({dnslink:e})=>e===t);if(e)return e.value}const r=c().get("settings")||{},i=n.find(({value:e})=>!!e);return[r.apiUrl,void 0].includes(p.W.apiUrl)?p.W.apiUrl:i?i.value:"ws://127.0.0.1:9944"}();p.W.set({apiUrl:m}),function(e){e.startsWith("light://")?console.log("Light endpoint=",e.replace("light://","")):console.log("WS endpoint=",e)}(m),t(91516);var g=t(14041),h=t(25873),f=t(73657),x=t(64767),v=t(10005),y=t(99524),k=t(38994),b=t(10551),w=t(63736),A=t(76385),C=t(56482),j=t(57295),I=t(77436),N=t(1445),S=t(26689),U=t(85121),$=t(37140);function R(){return(0,$.Bd)("apps")}var F=t(28138);const W=N.I4.div`
  background: var(--bg-menu);
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-left-width: 0.25rem;
  line-height: 1.5em;
  padding: 0 1rem;
  position: fixed;
  right: 0.75rem;
  top: 0.75rem;
  z-index: 500;

  &.isBottom {
    position: static;
    z-index: 0;
  }

  &.isFull {
    left: 0.75rem;
  }

  &.isPartial {
    max-width: 42rem;
    width: 42rem;

    .content {
      max-width: 50rem;
    }
  }

  &:before {
    border-radius: 0.25rem;
    bottom: 0;
    content: ' ';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &.isError {
    &:before {
      background: rgba(255, 12, 12, 0.05);
    }

    border-color: rgba(255, 12, 12, 1);
  }

  &.isInfo {
    &:before {
      background: rgba(255, 196, 12, 0.05);
    }

    border-color: rgba(255, 196, 12, 1);
  }

  .content {
    align-items: center;
    display: flex;
    margin: 0 auto;
    padding: 1em 3rem 1rem 0.5rem;
    position: relative;

    .contentIcon {
      flex: 0;
    }

    .contentItem {
      flex: 1;
      padding: 0 1rem;

      > div+div {
        margin-top: 0.5rem;
      }
    }
  }

  .closeIcon {
    cursor: pointer;
    position: absolute;
    right: 0em;
    top: 0.75rem;
  }
`,z=g.memo(function({children:e,className:n="",icon:t,isBottom:i=!1,isDev:o,isFull:s=!1,type:a}){const[c,l]=(0,F.e)(),d=(0,g.useCallback)(()=>{o&&localStorage.setItem("dev:notification",(new Date).toString()),l()},[o,l]);return(0,g.useEffect)(()=>{const e=localStorage.getItem("dev:notification");if(e){const n=new Date(e);n.setMonth(n.getMonth()+1),n.getTime()<=(new Date).getTime()?localStorage.removeItem("dev:notification"):l()}},[l]),c?null:(0,r.jsx)(W,{className:`${n} ${"error"===a?"isError":"isInfo"} ${i?"isBottom":"isTop"} ${s?"isFull":"isPartial"}`,children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)(N.In,{className:"contentIcon",icon:t,size:"2x"}),(0,r.jsx)("div",{className:"contentItem",children:e}),(0,r.jsx)(N.$n,{className:"closeIcon",icon:"times",isBasic:!0,isCircular:!0,onClick:d})]})})}),q=N.I4.div`
  background: var(--bg-page);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .connecting {
    padding-block: calc(3.5rem + 56px);
  }

  ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(e=>`\n    .greyAnim-${e} {\n      animation: greyAnim${e} 2s;\n    }\n\n    @keyframes greyAnim${e} {\n      0% { background: #a6a6a6; }\n      50% { background: darkorange; }\n      100% { background: #a6a6a6; }\n    }\n  `).join("")}
`,E=()=>{const{themeClassName:e}=(0,U.D)(),{t:n}=R();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S.A,{}),(0,r.jsxs)(q,{className:` apps--Wrapper ${e}`,children:[(0,r.jsx)(z,{icon:"globe",type:"info",children:(0,r.jsx)("div",{children:n("Waiting to establish a connection with the remote endpoint.")})}),(0,r.jsx)("div",{className:"connecting",children:(0,r.jsx)(N.y$,{label:"Initializing connection"})}),(0,r.jsx)("div",{id:"portals"})]})]})};var T=t(61020),M=t(48463),B=t(18690),D=t(51482),O=t(54668);function H(e){return{Component:D.A,display:{needsApi:[]},group:"accounts",icon:"users",name:"accounts",text:e("nav.accounts","Accounts",{ns:"apps-routing"}),useCounter:O.A}}var P=t(10608);function L(e){return{Component:P.A,display:{needsApi:[]},group:"accounts",icon:"address-card",name:"addresses",text:e("nav.addresses","Address book",{ns:"apps-routing"})}}var Y=t(49161),G=t(5939);function V(e){return{Component:Y.A,display:{needsApi:["tx.alliance.joinAlliance"]},group:"governance",icon:"people-group",name:"alliance",text:e("nav.alliance","Alliance",{ns:"apps-routing"}),useCounter:G.A}}var X=t(30868),J=t(98487);function _(e){return{Component:X.A,display:{needsApi:["tx.ambassadorCollective.vote","tx.ambassadorReferenda.submit","consts.ambassadorReferenda.tracks"]},group:"governance",icon:"user-friends",name:"ambassador",text:e("nav.ambassador","Ambassador",{ns:"apps-routing"}),useCounter:J.A}}var Z=t(2456);function K(e){return{Component:Z.A,display:{needsApi:["tx.assets.setMetadata","tx.assets.transferKeepAlive"]},group:"network",icon:"shopping-basket",name:"assets",text:e("nav.assets","Assets",{ns:"apps-routing"})}}var Q=t(92362),ee=t(63057);function ne(e){return{Component:Q.A,display:{needsApi:[["tx.bounties.proposeBounty","tx.treasury.proposeBounty"]]},group:"governance",icon:"coins",name:"bounties",text:e("nav.bounties","Bounties",{ns:"apps-routing"}),useCounter:ee.A}}var te=t(19956);function re(e){return{Component:te.A,display:{needsApi:["query.broker.status"],needsApiInstances:!0},group:"network",icon:"flask",name:"broker",text:e("nav.broker","Coretime Broker",{ns:"app-broker"})}}var ie=t(76604);function oe(e){return{Component:ie.A,display:{needsApi:[]},group:"network",icon:"calendar-alt",name:"calendar",text:e("nav.calendar","Event calendar",{ns:"apps-routing"})}}var se=t(15423),ae=t(74831),ce=t(99953),le=t(66615),de=t(1048).Buffer;function pe(){try{if(!de.from([1,2,3])?.length)return console.error("ERROR: Unable to construct Buffer object for claims module"),!1;if(!ce.Ze||!de.isBuffer((0,le.e)(new Uint8Array([1,2,3]))))return console.error("ERROR: Unable to use u8aToBuffer for claims module"),!1}catch{return console.error("ERROR: Fatal error in working with Buffer module"),!1}return!0}function ue(e){return{Component:se.A,display:{needsAccounts:!0,needsApi:["tx.claims.mintClaim"],needsApiCheck:pe},group:"accounts",icon:"star",name:"claims",text:e("nav.claims","Claim Tokens",{ns:"apps-routing"}),useCounter:ae.A}}var me=t(33202);function ge(e){return{Component:me.A,display:{needsApi:["query.collatorSelection.candidacyBond"]},group:"network",icon:"timeline",name:"collators",text:e("nav.collator","Collators",{ns:"apps-routing"})}}var he=t(9791);function fe(e){try{return(0,u.Z8)(6===e.tx.contracts.instantiateWithCode.meta.args.length,"Invalid args")}catch{return console.warn("Contract interface does not support storageDepositLimit, disabling route"),!1}}function xe(e){return{Component:he.A,display:{needsAccounts:!0,needsApi:["tx.contracts.instantiateWithCode"],needsApiCheck:fe},group:"developer",icon:"compress",name:"contracts",text:e("nav.contracts","Contracts",{ns:"apps-routing"})}}var ve=t(84278);function ye(e){return{Component:ve.A,display:{needsApi:["query.coretimeAssignmentProvider.coreDescriptors"],needsApiInstances:!0},group:"network",icon:"flask",name:"coretime",text:e("nav.coretime","Coretime",{ns:"apps-routing"})}}var ke=t(61014),be=t(32125);function we(e){return{Component:ke.A,display:{needsApi:["query.council.prime"],needsApiInstances:!0},group:"governance",icon:"building",name:"council",text:e("nav.council","Council",{ns:"apps-routing"}),useCounter:be.A}}var Ae=t(76869),Ce=t(81035);function je(e){try{return e.tx.democracy.vote(1,{Standard:{balance:1,vote:{aye:!0,conviction:1}}}),!0}catch{return console.warn("Unable to create referendum vote transaction, disabling democracy route"),!1}}function Ie(e){return{Component:Ae.A,display:{needsApi:["tx.democracy.propose"],needsApiCheck:je},group:"governance",icon:"calendar-check",name:"democracy",text:e("nav.democracy","Democracy",{ns:"apps-routing"}),useCounter:Ce.A}}var Ne=t(52262);function Se(e){return{Component:Ne.A,display:{needsApi:[]},group:"network",icon:"braille",name:"explorer",text:e("nav.explorer","Explorer",{ns:"apps-routing"})}}var Ue=t(70464);function $e(e){return{Component:Ue.A,display:{needsApi:[]},group:"developer",icon:"envelope-open-text",name:"extrinsics",text:e("nav.extrinsics","Extrinsics",{ns:"apps-routing"})}}var Re=t(24736),Fe=t(31539);function We(e){return{Component:Re.A,display:{needsApi:["tx.fellowshipCollective.vote","tx.fellowshipReferenda.submit","consts.fellowshipReferenda.tracks"]},group:"governance",icon:"people-arrows",name:"fellowship",text:e("nav.fellowship","Fellowship",{ns:"apps-routing"}),useCounter:Fe.A}}var ze=t(79294);function qe(e){return{Component:ze.A,display:{needsAccounts:!0,needsApi:[]},group:"developer",icon:"file",name:"files",text:e("nav.files","Files (IPFS)",{ns:"apps-routing"})}}var Ee=t(60086);function Te(e){return{Component:Ee.A,display:{needsApi:["tx.gilt.placeBid","query.proxy.proxies"]},group:"network",icon:"leaf",name:"gilt",text:e("nav.gilt","Gilt",{ns:"apps-routing"})}}var Me=t(41435);function Be(e){return{Component:Me.A,display:{needsApi:[]},group:"developer",icon:"code",name:"js",text:e("nav.js","JavaScript",{ns:"apps-routing"})}}var De=t(73403),Oe=t(61544);function He(e){return{Component:De.A,display:{needsAccounts:!0,needsApi:["query.membership.members"]},group:"governance",icon:"people-carry",name:"membership",text:e("nav.membership","Membership",{ns:"apps-routing"}),useCounter:Oe.A}}var Pe=t(30265);function Le(e){return{Component:Pe.A,display:{needsApi:["tx.uniques.create"]},group:"network",icon:"shopping-cart",name:"nfts",text:e("nav.nfts","NFTs",{ns:"apps-routing"})}}var Ye=t(94844);function Ge(e){return{Component:Ye.A,display:{needsApi:["tx.nis.placeBid","query.proxy.proxies"]},group:"network",icon:"leaf",name:"nis",text:e("nav.nis","Non-interactive Staking",{ns:"apps-routing"})}}var Ve=t(96110);function Xe(e){return{Component:Ve.A,display:{needsAccounts:!0,needsApi:["tx.poll.vote"]},group:"governance",icon:"podcast",name:"poll",text:e("nav.poll","Token poll",{ns:"apps-routing"})}}var Je=t(42011);function _e(e){return{Component:Je.A,display:{needsAccounts:!0,needsApi:["query.preimage.statusFor","tx.preimage.notePreimage"]},group:"governance",icon:"panorama",name:"preimages",text:e("nav.preimages","Preimages",{ns:"apps-routing"})}}var Ze=t(12638),Ke=t(16934);function Qe(e){return{Component:Ze.A,display:{needsAccounts:!0,needsApi:["tx.rankedCollective.vote","tx.rankedPolls.submit"]},group:"governance",icon:"people-arrows",name:"ranked",text:e("nav.ranked","Ranked collective",{ns:"apps-routing"}),useCounter:Ke.A}}var en=t(76381),nn=t(66530);function tn(e){return{Component:en.A,display:{needsApi:["tx.referenda.submit","tx.convictionVoting.vote","consts.referenda.tracks"]},group:"governance",icon:"person-booth",name:"referenda",text:e("nav.referenda","Referenda",{ns:"apps-routing"}),useCounter:nn.A}}var rn=t(87373);function on(e){return{Component:rn.A,display:{needsApi:[]},group:"developer",icon:"network-wired",name:"rpc",text:e("nav.rpc","RPC calls",{ns:"apps-routing"})}}var sn=t(284);function an(e){return{Component:sn.A,display:{needsApi:[]},group:"developer",icon:"arrows-to-circle",name:"runtime",text:e("nav.runtime","Runtime calls",{ns:"apps-routing"})}}var cn=t(98343);function ln(e){return{Component:cn.A,display:{needsApi:["query.scheduler.agenda"]},group:"network",icon:"clock",name:"scheduler",text:e("nav.scheduler","Scheduler",{ns:"apps-routing"})}}var dn=t(97629),pn=t(36583);function un(e){return{Component:dn.A,display:{},group:"settings",icon:"cogs",name:"settings",text:e("nav.settings","Settings",{ns:"apps-routing"}),useCounter:pn.A}}var mn=t(31732);function gn(e){return{Component:mn.A,display:{needsAccounts:!0,needsApi:[]},group:"developer",icon:"signature",name:"signing",text:e("nav.signing","Sign and verify",{ns:"apps-routing"})}}var hn=t(258),fn=t(54362);function xn(e){return{Component:hn.A,display:{needsAccounts:!0,needsApi:["query.society.pot"]},group:"network",icon:"hand-spock",name:"society",text:e("nav.society","Society",{ns:"apps-routing"}),useCounter:fn.A}}var vn=t(18296),yn=t(27010),kn=t(94250),bn=t(51524);function wn(e){try{if(e.query.stakingAhClient||e.tx.stakingRcClient)return!1;const{nominatorCount:n,own:t,pageCount:r,total:i}=e.registry.createType((0,kn.f)(e.registry,e.query.staking.erasStakersOverview.creator.meta.type),{nominatorCount:bn.Uu,own:bn.Uu,pageCount:bn.Uu,total:bn.Uu});(0,u.vA)(i&&t&&n&&r&&i.eq(bn.Uu)&&t.eq(bn.Uu),"Needs a known Exposure type")}catch{return console.warn("Unable to create known-shape Exposure type, disabling staking route"),!1}try{if(3===e.tx.staking.bond.meta.args.length)e.tx.staking.bond(yn.fY,bn.Uu,{Account:yn.fY});else{if(2!==e.tx.staking.bond.meta.args.length)return!1;e.tx.staking.bond(bn.Uu,{Account:yn.fY})}}catch{return console.warn("Unable to create staking bond transaction, disabling staking route"),!1}try{const n=e.registry.createType((0,kn.f)(e.registry,e.query.staking.claimedRewards.creator.meta.type),[0]);(0,u.vA)(n.eq([0]),"Needs a legacyClaimedRewards array")}catch{return console.warn("No known legacyClaimedRewards or claimedRewards inside staking ledger, disabling staking route"),!1}return!0}function An(e){return{Component:vn.A,display:{needsApi:["query.staking.erasStakersOverview","tx.staking.bond"],needsApiCheck:wn},group:"network",icon:"certificate",name:"staking",text:e("nav.staking","Staking",{ns:"apps-routing"})}}var Cn=t(24333);function jn(e){try{return!!(e.tx.stakingAhClient||e.tx.staking&&e.tx.stakingRcClient)}catch{return!1}}function In(e){return{Component:Cn.A,display:{needsApi:[],needsApiCheck:jn},group:"network",icon:"certificate",name:"staking-async",text:e("nav.staking-async","Staking Async",{ns:"apps-routing"})}}var Nn=t(16675);function Sn(e){try{const{others:[{value:n,who:t}],own:r,total:i}=e.registry.createType((0,kn.f)(e.registry,e.query.staking.erasStakers.creator.meta.type),{others:[{value:bn.Uu,who:yn.fY}],own:bn.Uu,total:bn.Uu});(0,u.vA)(i&&r&&n&&t&&i.eq(bn.Uu)&&r.eq(bn.Uu)&&n.eq(bn.Uu),"Needs a known Exposure type")}catch{return console.warn("Unable to create known-shape Exposure type, disabling staking route"),!1}try{if(3===e.tx.staking.bond.meta.args.length)e.tx.staking.bond(yn.fY,bn.Uu,{Account:yn.fY});else{if(2!==e.tx.staking.bond.meta.args.length)return!1;e.tx.staking.bond(bn.Uu,{Account:yn.fY})}}catch{return console.warn("Unable to create staking bond transaction, disabling staking route"),!1}return!0}function Un(e){return{Component:Nn.A,display:{isHidden:!0,needsApi:["query.session.validators","query.staking.erasStakers","tx.staking.bond"],needsApiCheck:Sn},group:"network",icon:"certificate",name:"test-staking",text:e("nav.staking","Staking",{ns:"apps-routing"})}}var $n=t(4182);function Rn(e){if("function"==typeof e.query.staking.erasStakersOverview)return!1;try{const{others:[{value:n,who:t}],own:r,total:i}=e.registry.createType((0,kn.f)(e.registry,e.query.staking.erasStakers.creator.meta.type),{others:[{value:bn.Uu,who:yn.fY}],own:bn.Uu,total:bn.Uu});(0,u.vA)(i&&r&&n&&t&&i.eq(bn.Uu)&&r.eq(bn.Uu)&&n.eq(bn.Uu),"Needs a known Exposure type")}catch{return console.warn("Unable to create known-shape Exposure type, disabling staking route"),!1}try{if(3===e.tx.staking.bond.meta.args.length)e.tx.staking.bond(yn.fY,bn.Uu,{Account:yn.fY});else{if(2!==e.tx.staking.bond.meta.args.length)return!1;e.tx.staking.bond(bn.Uu,{Account:yn.fY})}}catch{return console.warn("Unable to create staking bond transaction, disabling staking route"),!1}try{const n=e.registry.createType((0,kn.f)(e.registry,e.query.staking.ledger.creator.meta.type),{claimedRewards:[1,2,3]});if(n.claimedRewards)(0,u.vA)(n.claimedRewards.eq([1,2,3]),"Needs a claimedRewards array");else{const n=e.registry.createType((0,kn.f)(e.registry,e.query.staking.ledger.creator.meta.type),{legacyClaimedRewards:[1,2,3]});(0,u.vA)(n.legacyClaimedRewards.eq([1,2,3]),"Needs a legacyClaimedRewards array")}}catch{return console.warn("No known legacyClaimedRewards or claimedRewards inside staking ledger, disabling staking route"),!1}return!0}function Fn(e){return{Component:$n.A,display:{needsApi:["query.staking.erasStakers","tx.staking.bond"],needsApiCheck:Rn},group:"network",icon:"certificate",name:"legacy-staking",text:e("nav.staking","Staking",{ns:"apps-routing"})}}var Wn=t(39006);function zn(e){return{Component:Wn.A,display:{needsApi:[]},group:"developer",icon:"database",name:"chainstate",text:e("nav.storage","Chain state",{ns:"apps-routing"})}}var qn=t(30889);function En(e){return{Component:qn.A,display:{needsAccounts:!0,needsApi:["tx.sudo.setKey"],needsSudo:!0},group:"developer",icon:"unlock",name:"sudo",text:e("nav.sudo","Sudo",{ns:"apps-routing"})}}var Tn=t(24910),Mn=t(34857);function Bn(e){return{Component:Tn.A,display:{needsAccounts:!0,needsApi:["query.technicalCommittee.members"],needsApiInstances:!0},group:"governance",icon:"microchip",name:"techcomm",text:e("nav.tech-comm","Tech. comm.",{ns:"apps-routing"}),useCounter:Mn.A}}var Dn=t(83428);function On(e){return{Component:Dn.A,Modal:Dn.A,display:{isHidden:!1,needsAccounts:!0,needsApi:[["tx.xcm.teleportAssets","tx.xcmPallet.teleportAssets","tx.pezkuwiXcm.teleportAssets","tx.xcm.limitedTeleportAssets","tx.xcmPallet.limitedTeleportAssets","tx.pezkuwiXcm.limitedTeleportAssets"]],needsTeleport:!0},group:"accounts",icon:"share-square",name:"teleport",text:e("nav.teleport","Teleport",{ns:"apps-routing"})}}var Hn=t(78933);function Pn(e){return{Component:Hn.A,display:{needsApi:[["query.paras.teyrchains"]]},group:"network",icon:"link",name:"teyrchains",text:e("nav.teyrchains","Teyrchains",{ns:"apps-routing"})}}function Ln(e){return{Component:N.XU,Modal:N.XU,display:{isHidden:!1,needsAccounts:!0,needsApi:["tx.balances.transferKeepAlive"]},group:"accounts",icon:"paper-plane",name:"transfer",text:e("nav.transfer","Transfer",{ns:"apps-routing"})}}var Yn=t(66881),Gn=t(33107);function Vn(e){return{Component:Yn.A,display:{needsApi:["query.treasury.proposals"]},group:"governance",icon:"gem",name:"treasury",text:e("nav.treasury","Treasury",{ns:"apps-routing"}),useCounter:Gn.A}}var Xn=t(11502);function Jn(e){return{Component:Xn.A,display:{needsApi:[]},group:"developer",icon:"wrench",name:"utilities",text:e("nav.utilities","Utilities",{ns:"apps-routing"})}}var _n=t(75392);function Zn(e){return{Component:_n.A,display:{needsAccounts:!0,needsApi:["tx.whitelist.removeWhitelistedCall"]},group:"governance",icon:"list-check",name:"whitelist",text:e("nav.whitelist","Whitelist",{ns:"apps-routing"})}}function Kn(e){return[H(e),L(e),Se(e),ue(e),Xe(e),Ln(e),On(e),In(e),An(e),Un(e),Fn(e),ge(e),re(e),ye(e),tn(e),He(e),V(e),_(e),We(e),Qe(e),_e(e),Zn(e),Ie(e),we(e),Bn(e),Vn(e),ne(e),Pn(e),K(e),Le(e),xn(e),Ge(e),Te(e),ln(e),oe(e),xe(e),zn(e),$e(e),on(e),an(e),gn(e),En(e),qe(e),Be(e),Jn(e),un(e)]}var Qn=t(51999),et=t(29133),nt=t(94547),tt=t(6404);function rt(e,n,t){const[r,i,o]=n.split("."),[s]=t&&e.registry.getModuleInstances(e.runtimeVersion.specName.toString(),i)||[i],a=e[r][s]?s:i;try{return"consts"===r?(0,nt.G)(e[r][a][o]):(0,tt.T)(e[r][a][o])}catch{return!1}}function it(e,n,t=!1,r){if(!n)return[];const i=n.filter(n=>!(Array.isArray(n)?n.reduce((n,r)=>n||rt(e,r,t),!1):rt(e,n,t)));return i.length||!r||r(e)?i:["needsApiCheck"]}const ot=(0,N.I4)(N.WM)`
  border: 1px solid #ffc107;
  background: #ffc10720;
  font-size: 1rem !important;
  margin-bottom: 5rem !important;
`,st=()=>{const[e,n]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{const e=navigator.userAgent;e.match(/Firefox\/(\d+\.\d+)/)&&e.includes("145.0")&&n(!0)},[]),e?(0,r.jsx)(ot,{className:"warning centered",withIcon:!1,children:"The app is having some trouble running on Firefox v145.0. To keep everything running smoothly, please upgrade Firefox to the latest version or try using a different browser."}):null},at=g.memo(function({basePath:e,missingApis:n=[]}){return console.log(`Redirecting from route "${e}" to "/explorer"${n.length?`, missing the following APIs: ${JSON.stringify(n)}`:""}`),(0,r.jsx)(B.C5,{to:"/explorer"})});var ct=t(97186),lt=t(79129),dt=t(79876),pt=t(63513);let ut;const mt=g.memo(function({optionsAll:e}){const{queueAction:n}=(0,Qn.x)(),{api:t,isApiReady:i}=(0,T.g)(),{allAccounts:o}=(0,ct.o)(),{t:s}=R(),a=(0,lt.Gc)(i&&t.query.system?.events);return(0,g.useEffect)(()=>{const t=function(e,n,t,r){const i=(0,pt.E)((0,dt.j)(JSON.stringify(r)));return t&&r&&i!==ut?(ut=i,r.map(({event:{data:t,method:r,section:i}})=>{if("balances"===i&&"Transfer"===r){const o=t[1].toString();if(e.includes(o))return{account:o,action:`${i}.${r}`,message:n("transfer received"),status:"event"}}else if("democracy"===i){const e=t[0].toString();return{action:`${i}.${r}`,message:n("update on #{{index}}",{replace:{index:e}}),status:"event"}}return null}).filter(e=>!!e)):null}(o,s,e,a);t&&n(t)},[o,a,e,n,s]),(0,r.jsx)(N.nW,{})}),gt={Component:at,display:{},group:"settings",icon:"times",isIgnored:!1,name:"unknown",text:"Unknown"},ht=N.I4.div`
  flex-grow: 1;
  overflow: hidden auto;
  padding: 0 0 1rem 0;
  position: relative;
  width: 100%;

  .connecting {
    padding: 3.5rem 0;
  }

  & main > *:not(header):not(.hasOwnMaxWidth) {
    max-width: var(--width-full);
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 0 1.5rem;

    @media only screen and (max-width: 1100px) {
      padding: 0 1rem;
    }

    @media only screen and (max-width: 800px) {
      padding: 0 0.75rem;
    }
  }
`,ft=g.memo(function({className:e}){const n=(0,B.zy)(),{t}=R(),{api:i,isApiConnected:o,isApiReady:s,isDevelopment:a}=(0,T.g)(),{queueAction:c}=(0,Qn.x)(),{Component:l,display:{needsApi:d,needsApiCheck:p,needsApiInstances:u},icon:m,name:h,text:f}=(0,g.useMemo)(()=>{const e=n.pathname.slice(1)||"";return Kn(t).find(n=>n&&e.startsWith(n.name)&&(a||!n.display.isDevelopment))||gt},[a,n,t]),x=(0,g.useMemo)(()=>d?s&&o?it(i,d,u,p):null:[],[i,o,s,d,p,u]);return(0,r.jsx)(ht,{className:e,children:x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Suspense,{fallback:"...",children:(0,r.jsx)(N.tH,{trigger:h,children:(0,r.jsx)(et.I.Provider,{value:{icon:m,text:f},children:x.length?(0,r.jsx)(at,{basePath:`/${h}`,location:n,missingApis:x,onStatusChange:c}):(0,r.jsx)(l,{basePath:`/${h}`,location:n,onStatusChange:c})})})}),(0,r.jsx)(mt,{})]}):(0,r.jsxs)("div",{className:"connecting",children:[(0,r.jsx)(st,{}),(0,r.jsx)(N.y$,{label:t("Initializing connection")})]})})});var xt=t(44377),vt=t(70280),yt=t(60078),kt=t(74826),bt=t(77958),wt=t(92649);const At=N.I4.div`
  border-left: 0.25rem solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0 0 0.25rem 0;
  padding: 0.375rem 0.5rem 0.375rem 1rem;
  position: relative;

  &.isUnreachable {
    opacity: var(--opacity-light);
  }

  &.isSelected {
    .markFavoriteSection {
      gap: 1rem;
      padding-bottom: 1rem;
    }
  }

  .markFavoriteSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    &:hover .ui--Icon {
      opacity: 0.5;
    }

    .ui--Icon {
      scale: 1.1;
      opacity: 0;
      transition: color 0.2s ease;

      &:hover {
        opacity: 0.5;
        stroke: darkorange;
        color: darkorange;
      }

      &.isFavorite {
        opacity: 1;
        stroke: darkorange;
        color: darkorange;
      }
    }
  }

  &.isSelected,
  &:hover {
    background: var(--bg-table);
  }

  .endpointSection {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    position: relative;

    &+.ui--Toggle {
      margin-top: 1rem;
    }

    &+.endpointProvider {
      margin-top: -0.125rem;
    }

    .endpointValue {
      .endpointExtra {
        font-size: var(--font-size-small);
        opacity: var(--opacity-light);
      }
    }
  }

  // we jiggle our labels somewhat...
  label {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    text-transform: none;
  }
`,Ct=g.memo(function({apiUrl:e,className:n="",isFavorite:t,setApiUrl:i,toggleFavoriteChain:o,value:{isChild:s,isRelay:a,isUnreachable:c,name:l,nameRelay:d,paraId:p,providers:u,ui:m}}){const{t:h}=R(),f=(0,g.useMemo)(()=>u.some(({url:n})=>n===e),[e,u]),x=(0,g.useMemo)(()=>u.map(({name:e,url:n})=>({text:e,value:n})),[u]),v=(0,g.useCallback)(()=>{const e=u.filter(({url:e})=>!e.startsWith("light://"));if(0!==e.length)return i(l,e[Math.floor(Math.random()*e.length)].url);alert("No WebSocket (wss://) provider available")},[l,u,i]),y=(0,g.useCallback)(e=>i(l,e),[l,i]),k=(0,g.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),o({chainName:l,paraId:p,relay:d})},[l,p,d,o]);return(0,r.jsxs)(At,{className:`${n}${f?" isSelected highlight--border":""}${c?" isUnreachable":""}`,children:[(0,r.jsxs)("div",{className:"markFavoriteSection"+(s?" isChild":""),onClick:c?void 0:v,children:[(0,r.jsxs)("div",{className:"endpointSection",children:[(0,r.jsx)(N.nZ,{className:"endpointIcon",isInline:!0,logo:m.logo||"empty",withoutHl:!0}),(0,r.jsxs)("div",{className:"endpointValue",children:[(0,r.jsx)("div",{children:l}),f&&(a||!!p)&&(0,r.jsx)("div",{className:"endpointExtra",children:a?h("Relay chain"):h(p&&p<1e3?"{{relay}} System":p&&p<2e3?"{{relay}} Common":"{{relay}} Teyrchain",{replace:{relay:d}})})]})]}),(0,r.jsx)(N.In,{className:t?"isFavorite":"",icon:"star",onClick:k})]}),f&&(0,r.jsx)(N.ms,{className:"isSmall",onChange:y,options:x,value:e,withLabel:!1})]})}),jt="pezkuwi-app-favorite-chains",It=(0,l.Xi)((e,n)=>n?.toString()||e),Nt=()=>{try{const e=localStorage.getItem(jt);if(!e)return{};const n=JSON.parse(e);if("object"!=typeof n||null===n||Array.isArray(n))throw new Error("Invalid favorite chains format");const t={};for(const[e,r]of Object.entries(n)){if(!Array.isArray(r))throw new Error(`Invalid value for key "${e}": not an array`);if(!r.every(e=>"object"==typeof e&&null!==e&&"string"==typeof e.relay&&"number"==typeof e.paraId))throw new Error(`Invalid entries under key "${e}"`);if(It.find(n=>n.text===e)){const n=r.filter(e=>"Unknown"===e.relay||!!It.find(n=>n.text===e.relay));n.length>0&&(t[e]=n)}}return localStorage.setItem(jt,JSON.stringify(t)),t}catch(e){return console.error("Failed to parse favorite chains:",e),localStorage.removeItem(jt),{}}},St=(e,n)=>{try{const t=n.chainName,r={paraId:n.paraId??-1,relay:n.relay??"Unknown"},i=e[t];return!!Array.isArray(i)&&i.some(e=>e.relay===r.relay&&e.paraId===r.paraId)}catch(e){return console.error("Failed to check favorite chain:",e),!1}},Ut=N.I4.div`
  .groupHeader {
    border-radius: 0.25rem;
    cursor: pointer;
    line-height: 1;
    padding: 0.75rem 1rem;
    position: relative;
    text-transform: uppercase;

    &:hover {
      background: var(--bg-table);
    }

    &.isSpaced {
      margin-top: 0.75rem;
    }

    .ui--Icon {
      margin-right: 0.5rem;
    }

    &.isFavoriteHeader {
      &:hover {
        background: linear-gradient(
          135deg,
          ${e=>e.highlightColor}f2 0%,
          ${e=>e.highlightColor}99 100%
        );
        color: ${e=>function(e){if("string"!=typeof e)return"#000000";let n=e.replace("#","").trim();if(3===n.length&&(n=n.split("").map(e=>e+e).join("")),6!==n.length||/[^0-9a-f]/i.test(n))return"#000000";try{const e=parseInt(n.substring(0,2),16);return(.299*e+.587*parseInt(n.substring(2,4),16)+.114*parseInt(n.substring(4,6),16))/255>.5?"#000000":"#FFFFFF"}catch{return"#000000"}}(e.highlightColor)};
      }

      &::after {
        content: '⭐';
        margin-left: 8px;
        font-size: 16px;
      }
    }
  }

  .groupNetworks {
    padding: 0.25rem 0 0.5rem 1rem;
  }
`,$t=g.memo(function({affinities:e,apiUrl:n,children:t,className:i="",favoriteChains:o,highlightColor:s,index:a,isSelected:c,setApiUrl:l,setGroup:d,toggleFavoriteChain:p,value:{header:u,isSpaced:m,networks:h}}){const f=(0,g.useCallback)(()=>d(c?-1:a),[a,c,d]),x=(0,g.useMemo)(()=>u?.toString().includes("Favorite"),[u]),v=(0,g.useMemo)(()=>h.filter(({isUnreachable:e})=>!e),[h]);return x&&0===Object.keys(o).length?(0,r.jsx)(r.Fragment,{}):(0,r.jsxs)(Ut,{className:`${i}${c?" isSelected":""}`,highlightColor:s,children:[(0,r.jsxs)("div",{className:`groupHeader${m?" isSpaced":""}${x?" isFavoriteHeader":""}`,onClick:f,children:[(0,r.jsx)(N.In,{icon:c?"caret-up":"caret-down"}),u]}),c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"groupNetworks",children:v.map((t,i)=>(0,r.jsx)(Ct,{affinity:e[t.name],apiUrl:n,isFavorite:St(o,{chainName:t.name,paraId:t.paraId,relay:t.nameRelay}),setApiUrl:l,toggleFavoriteChain:p,value:t},i))}),t]})]})}),Rt="network:affinities";function Ft(e){const n=Nt();let t=-1;const r=e.reduce((e,r)=>{if(r.isHeader){const n="string"==typeof r.text&&r.text.includes("Favorite chains");e.push({header:r.text,isDevelopment:r.isDevelopment,isSpaced:r.isSpaced,networks:[]}),n&&(t=e.length-1)}else{const i=e[e.length-1],o={isLightClient:r.isLightClient,name:r.textBy,url:r.value};if(St(n,{chainName:r.text?.toString()??"",paraId:r.paraId,relay:r.textRelay?.toString()})&&-1!==t&&!r.isUnreachable){const n=e[t],i=n.networks[n.networks.length-1];i&&i.name===r.text&&i.nameRelay===r.textRelay&&i.paraId===r.paraId?i.providers.push(o):n.networks.push({isChild:r.isChild,isRelay:!!r.genesisHash,name:r.text,nameRelay:r.textRelay,paraId:r.paraId,providers:[o],ui:r.ui})}i.networks[i.networks.length-1]&&r.text===i.networks[i.networks.length-1].name?i.networks[i.networks.length-1].providers.push(o):r.isUnreachable||i.networks.push({isChild:r.isChild,isRelay:!!r.genesisHash,name:r.text,nameRelay:r.textRelay,paraId:r.paraId,providers:[o],ui:r.ui})}return e},[]);return r.forEach(e=>{e.networks.length>=2&&e.networks[0].isRelay&&e.header?.toString().includes("teyrchains")&&([e.networks[0],e.networks[1]]=[e.networks[1],e.networks[0]])}),r}function Wt(){try{const e=localStorage.getItem(bt.UC);if(e)return JSON.parse(e)}catch(e){console.error(e)}return[]}function zt(e,n){let t=n.findIndex(({networks:n})=>n.some(({providers:n})=>n.some(({url:n})=>n===e)));return-1===t&&(t=n.findIndex(({isDevelopment:e})=>e)),{apiUrl:e,groupIndex:t,hasUrlChanged:p.W.get().apiUrl!==e,isUrlValid:(r=e,r.length>=7&&(r.startsWith("ws://")||r.startsWith("wss://")||r.startsWith("light://")))};var r}const qt=(0,N.I4)(N.Bx)`
  color: var(--color-text);
  padding-top: 3.5rem;

  .customButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .endpointCustom {
    input {
      padding-right: 4rem;
    }
  }

  .endpointCustomWrapper {
    position: relative;
  }
`,Et=g.memo(function({className:e="",offset:n,onClose:t}){const{t:i}=R(),o=(0,l.Xi)(i),{apiEndpoint:s,isLocalFork:a}=(0,T.g)(),[d,u]=(0,g.useState)(()=>Nt()),[m,h]=(0,g.useState)(()=>Ft(o)),[{apiUrl:f,groupIndex:x,hasUrlChanged:v,isUrlValid:y},k]=(0,g.useState)(()=>zt(p.W.get().apiUrl,m)),[b,w]=(0,g.useState)(()=>Wt()),[A,C]=(0,g.useState)(()=>function(e){return Object.entries(c().get(Rt)||{}).filter(([n,t])=>e.some(({networks:e})=>e.some(({name:e,providers:r})=>e===n&&r.some(({url:e})=>e===t)))).reduce((e,[n,t])=>({...e,[n]:t}),{})}(m)),j=(0,g.useRef)(null),I=(0,g.useMemo)(()=>{let e=!1;return o.some(n=>n.value===f&&(e=!0,!0)),e},[f,o]),U=(0,g.useMemo)(()=>{let e=!1;return b.some(n=>n===f&&(e=!0,!0)),e},[f,b]),$=(0,g.useCallback)(e=>k(n=>({...n,groupIndex:e})),[]),F=(0,g.useCallback)(e=>{(e=>{try{const n=e.chainName,t={paraId:e.paraId??-1,relay:e.relay??"Unknown"},r=Nt(),i=r[n]??[];let o;o=i.some(e=>e.relay===t.relay&&e.paraId===t.paraId)?i.filter(e=>e.relay!==t.relay||e.paraId!==t.paraId):[...i,t];const s={...r};0===o.length?delete s[n]:s[n]=o,localStorage.setItem(jt,JSON.stringify(s))}catch{}})(e),u(Nt()),h(Ft((0,l.Xi)(i)))},[i]),W=(0,g.useCallback)(()=>{if(!U)return;const e=b.filter(e=>e!==f);try{localStorage.setItem(bt.UC,JSON.stringify(e)),h(Ft((0,l.Xi)(i))),w(Wt())}catch(e){console.error(e)}},[f,U,b,i]),z=(0,g.useCallback)((e,n)=>{C(t=>{const r={...t,[e]:n};return c().set(Rt,r),r}),k(e=>({...zt(n,m),groupIndex:e.groupIndex}))},[m]),q=(0,g.useCallback)(e=>{(0,wt.E)(e)||(e=kt.Ay.toASCII(e)),k(n=>({...zt(e,m),groupIndex:n.groupIndex}))},[m]),E=(0,g.useCallback)(()=>{c().set("localFork",""),p.W.set({...p.W.get(),apiUrl:f}),window.location.assign(`${window.location.origin}${window.location.pathname}?rpc=${encodeURIComponent(f)}${window.location.hash}`),v||window.location.reload(),t()},[f,t,v]),M=(0,g.useCallback)(()=>{c().set("localFork",f),p.W.set({...p.W.get(),apiUrl:f}),window.location.assign(`${window.location.origin}${window.location.pathname}?rpc=${encodeURIComponent(f)}${window.location.hash}`),v||window.location.reload(),t()},[f,t,v]),B=(0,g.useCallback)(()=>{try{localStorage.setItem(bt.UC,JSON.stringify([...b,f])),E()}catch(e){console.error(e)}},[E,f,b]),D=(0,g.useMemo)(()=>function(e,n,t,r){return e?!n.startsWith("light://")&&!t:!r}(v,f,y,a),[v,f,y,a]),O=(0,g.useMemo)(()=>function(e,n,t,r){return e?!!n.startsWith("light://")||!t:!!r}(v,f,y,a),[v,f,y,a]);return(0,r.jsx)(qt,{buttons:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.$n,{icon:"code-fork",isDisabled:O,label:i("Fork Locally"),onClick:M,tooltip:"fork-locally-btn"}),(0,r.jsx)(N.$n,{icon:"sync",isDisabled:D,label:i("Switch"),onClick:E})]}),className:e,offset:n,onClose:t,position:"left",sidebarRef:j,children:m.map((e,n)=>(0,r.jsx)($t,{affinities:A,apiUrl:f,favoriteChains:d,highlightColor:s?.ui.color||S.q,index:n,isSelected:x===n,setApiUrl:z,setGroup:$,toggleFavoriteChain:F,value:e,children:e.isDevelopment&&(0,r.jsxs)("div",{className:"endpointCustomWrapper",children:[(0,r.jsx)(N.pd,{className:"endpointCustom",isError:!y,isFull:!0,label:i("custom endpoint"),onChange:q,value:f}),U?(0,r.jsx)(N.$n,{className:"customButton",icon:"trash-alt",onClick:W}):(0,r.jsx)(N.$n,{className:"customButton",icon:"save",isDisabled:!y||I,onClick:B})]})},n))})}),Tt=N.I4.div`
  box-sizing: border-box;
  padding: 0.5rem 1rem 0.5rem 0;
  margin: 0;

  .apps--SideBar-logo-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.isClickable {
      cursor: pointer;
    }

    .ui--ChainImg {
      height: 3rem;
      margin-right: 0.5rem;
      width: 3rem;
    }

    .ui--Icon.dropdown,
    > div.info {
      text-align: right;
      vertical-align: middle;
    }

    .ui--Icon.dropdown {
      flex: 0;
      margin: 0;
      width: 1rem;
    }

    .info {
      flex: 1;
      font-size: var(--font-size-tiny);
      line-height: 1.2;
      padding-right: 0.5rem;
      text-align: right;

      .chain {
        font-size: var(--font-size-small);
        max-width: 16rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .runtimeVersion {
        letter-spacing: -0.01em;
      }
    }
  }
`,Mt=g.memo(function({className:e}){const{api:n,isApiReady:t}=(0,T.g)(),i=(0,lt.Gc)(t&&n.rpc.state.subscribeRuntimeVersion),{ipnsChain:o}=(0,d.c)(),[s,a]=(0,F.e)(),c=!o;return(0,r.jsxs)(Tt,{className:e,children:[(0,r.jsxs)("div",{className:`apps--SideBar-logo-inner${c?" isClickable":""} highlight--color-contrast`,onClick:a,children:[(0,r.jsx)(N.nZ,{}),(0,r.jsxs)("div",{className:"info media--1000",children:[(0,r.jsx)(vt.A,{className:"chain"}),i&&(0,r.jsxs)("div",{className:"runtimeVersion",children:[i.specName.toString(),"/",i.specVersion.toNumber()]}),(0,r.jsx)(yt.A,{className:"bestNumber",label:"#"})]}),c&&(0,r.jsx)(N.In,{className:"dropdown",icon:s?"caret-right":"caret-down"})]}),s&&(0,r.jsx)(Et,{onClose:a})]})}),Bt=()=>0,Dt=N.I4.li`
  cursor: pointer;
  position: relative;
  white-space: nowrap;

  &.topLevel {
    font-weight: var(--font-weight-normal);
    line-height: 1.214rem;
    border-radius: 0.15rem;

    a {
      padding: 0.857rem 0.857em 0.857rem 1rem;
      line-height: 1.214rem;
      border-radius: 0.25rem;
    }

    &.isActive.highlight--color-contrast {
      font-weight: var(--font-weight-normal);
      color: var(--color-text);

      a {
        background-color: var(--bg-tabs);
      }
    }

    &.isActive {
      border-radius: 0.15rem 0.15rem 0 0;

      a {
        padding: 0.857rem 1.429rem 0.857rem;
        cursor: default;
      }

      &&.withCounter a {
        padding-right: 3.2rem;
      }
    }

    .ui--Badge {
      top: 0.7rem;
    }
  }

  &&.withCounter a {
    padding-right: 3.2rem;
  }

  a {
    color: inherit !important;
    display: block;
    padding: 0.5rem 1.15rem 0.57rem;
    text-decoration: none;
    line-height: 1.5rem;
  }

  .ui--Badge {
    position: absolute;
    right: 0.5rem;
  }

  .ui--Icon {
    margin-right: 0.5rem;
  }
`,Ot=g.memo(function({className:e="",classNameText:n,isLink:t,isToplevel:i,route:{Modal:o,href:s,icon:a,name:c,text:l,useCounter:d=Bt}}){const[p,u]=(0,F.e)(),m=d();return(0,r.jsxs)(Dt,{className:`${e} ui--MenuItem ${m?"withCounter":""} ${t?"isLink":""} ${i?"topLevel highlight--color-contrast":""}`,children:[(0,r.jsxs)("a",{href:o?void 0:s||`#/${c}`,onClick:o?u:void 0,rel:"noopener noreferrer",target:s?"_blank":void 0,children:[(0,r.jsx)(N.In,{icon:a}),(0,r.jsx)("span",{className:n,children:l}),!!m&&(0,r.jsx)(N.Ex,{color:"white",info:m})]}),o&&p&&(0,r.jsx)(o,{onClose:u})]})}),Ht="rgba(34, 36, 38, 0.12)",Pt="5px",Lt=N.I4.li`
  cursor: pointer;
  position: relative;

  .groupHdr {
    border-radius: 0.25rem;
    padding: 0.857rem 1.375rem;
    font-weight: var(--font-weight-normal);
    line-height: 1.214rem;

    > .ui--Icon {
      margin-left: 0.75rem;
    }
  }

  &.isActive .groupHdr {
    background-color: var(--bg-tabs);
    font-weight: var(--font-weight-normal);
    margin-bottom: 0;
  }

  .groupMenu {
    border-radius: 0.25rem;
    box-shadow: 0 ${Pt} ${Pt} -${Pt} ${Ht}, ${Pt} 0 ${Pt} -${Pt} ${Ht}, -${Pt} 0 ${Pt} -${Pt} ${Ht};
    display: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 2.9rem;
    z-index: 250;

    > li {
      z-index: 1;

      a {
        padding-right: 4rem;
      }
    }

    &::before {
      bottom: 0;
      content: ' ';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }

  &:hover {
    .groupHdr {
      box-shadow: 0px 4px 37px rgba(0, 0, 0, 0.08);
      padding-bottom: 2rem;
      margin-bottom: -2rem;
    }

    .groupMenu {
      display: block;

      > li:hover {
        background: var(--bg-menu-hover);
      }
    }
  }
`,Yt=g.memo(function({className:e="",isActive:n,name:t,routes:i}){return 1===i.length&&"settings"===i[0].group?(0,r.jsx)(Ot,{className:n?"isActive":"",classNameText:"smallHide",isToplevel:!0,route:i[0]}):(0,r.jsxs)(Lt,{className:`${e} ${n?"isActive":""}`,children:[(0,r.jsxs)("div",{className:"groupHdr "+(n?"":"highlight--color-contrast"),children:[(0,r.jsx)("span",{className:"smallHide",children:t}),(0,r.jsx)(N.In,{className:"smallShow",icon:i[0].icon}),(0,r.jsx)(N.In,{icon:"caret-down"})]}),(0,r.jsx)("ul",{className:"groupMenu",children:i.map(e=>(0,r.jsx)(Ot,{route:e},e.name))})]})});var Gt=t(54534),Vt=t(1010),Xt=t(66827);const Jt=`apps v${Gt.z.version.replace("-x","")}`,_t=N.I4.div`
  background: transparent;
  font-size: var(--font-size-tiny);
  line-height: 1.2;
  padding: 0 0 0 1rem;
  text-align: right;

  > div {
    margin-bottom: -0.125em;

    > div {
      display: inline-block;
    }
  }
`,Zt=g.memo(function({className:e=""}){const{api:n,isApiReady:t}=(0,T.g)();return(0,r.jsxs)(_t,{className:`${e} media--1400 highlight--color-contrast ui--NodeInfo`,children:[t&&(0,r.jsxs)("div",{className:"node",children:[(0,r.jsx)(Vt.A,{})," ",(0,r.jsx)(Xt.A,{label:"v"})]}),(0,r.jsx)("div",{children:n.libraryInfo.replace("@pezkuwi/","")}),(0,r.jsx)("div",{children:Jt})]})});const Kt=N.I4.div`
  width: 100%;
  padding: 0;
  z-index: 220;
  position: relative;

  .smallShow {
    display: none;
  }

  & .menuContainer {
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    width: 100%;
    max-width: var(--width-full);
    margin: 0 auto;
  }

  &.isLoading {
    background: #999 !important;

    .menuActive {
      background: var(--bg-page);
    }

    &:before {
      filter: grayscale(1);
    }

    .menuItems {
      filter: grayscale(1);
    }
  }

  .menuSection {
    align-items: center;
    display: flex;
  }

  .menuActive {
    background: var(--bg-tabs);
    border-bottom: none;
    border-radius: 0.25rem 0.25rem 0 0;
    color: var(--color-text);
    padding: 1rem 1.5rem;
    margin: 0 1rem -1px;
    z-index: 1;

    .ui--Icon {
      margin-right: 0.5rem;
    }
  }

  .menuItems {
    flex: 1 1;
    list-style: none;
    margin: 0 1rem 0 0;
    padding: 0;

    > li {
      display: inline-block;
    }

    > li + li {
      margin-left: 0.375rem
    }
  }

  .ui--NodeInfo {
    align-self: center;
  }

  @media only screen and (max-width: 800px) {
    .groupHdr {
      padding: 0.857rem 0.75rem;
    }

    .smallShow {
      display: initial;
    }

    .smallHide {
      display: none;
    }

    .menuItems {
      margin-right: 0;

      > li + li {
        margin-left: 0.25rem;
      }
    }
  }
`,Qt=g.memo(function({className:e=""}){const{t:n}=R(),{allAccounts:t,hasAccounts:i}=(0,ct.o)(),o=(0,T.g)(),{allowTeleport:s}=(0,xt.n)(),a=(0,lt.Gc)(o.isApiReady&&o.api.query.sudo?.key),c=(0,B.zy)(),l=(0,g.useRef)(function(e){return[{href:"https://github.com/pezkuwichain/pezkuwi-apps",icon:"code-branch",name:"github",text:e("nav.github","GitHub",{ns:"apps-routing"})},{href:"https://wiki.pezkuwichain.io",icon:"book",name:"wiki",text:e("nav.wiki","Wiki",{ns:"apps-routing"})}]}(n)),d=(0,g.useRef)(Kn(n)),p=(0,g.useRef)({accounts:n("Accounts"),developer:n("Developer"),files:n("Files"),governance:n("Governance"),network:n("Network"),settings:n("Settings")}),u=(0,g.useMemo)(()=>!!a&&t.some(e=>a.eq(e)),[t,a]),m=(0,g.useMemo)(()=>function(e,n,t,r,i,o){return Object.values(e.reduce((e,t)=>(e[t.group]?e[t.group].routes.push(t):e[t.group]={name:n[t.group],routes:[t]},e),{})).map(({name:e,routes:n})=>({name:e,routes:n.filter(({display:e})=>function({api:e,isApiConnected:n,isApiReady:t,isDevelopment:r},i,o,s,{isDevelopment:a,isHidden:c,needsAccounts:l,needsApi:d,needsApiCheck:p,needsApiInstances:u,needsSudo:m,needsTeleport:g}){return!(c||l&&!o||d&&(!t||!n||m&&!s||g&&!i||!r&&a||0!==it(e,d,u,p).length))}(t,r,i,o,e))})).filter(({routes:e})=>e.length)}(d.current,p.current,o,s,i,u),[s,o,i,u]),h=(0,g.useMemo)(()=>d.current.find(({name:e})=>c.pathname.startsWith(`/${e}`))||null,[c]);return(0,r.jsx)(Kt,{className:`${e}${o.isApiReady&&o.isApiConnected?"":" isLoading"} highlight--bg`,children:(0,r.jsxs)("div",{className:"menuContainer",children:[(0,r.jsxs)("div",{className:"menuSection",children:[(0,r.jsx)(Mt,{}),(0,r.jsx)("ul",{className:"menuItems",children:m.map(({name:e,routes:n})=>(0,r.jsx)(Yt,{isActive:!!h&&h.group===e.toLowerCase(),name:e,routes:n},e))})]}),(0,r.jsx)("div",{className:"menuSection media--1200",children:(0,r.jsx)("ul",{className:"menuItems",children:l.current.map(e=>(0,r.jsx)(Ot,{isLink:!0,isToplevel:!0,route:e},e.name))})}),(0,r.jsx)(Zt,{className:"media--1400"})]})})}),er=window.location.host.startsWith("pezkuwi.js.org"),nr=(0,l.Xi)(()=>"").map(e=>e.dnslink).reduce((e,n)=>(n&&!e.includes(n)&&e.push(n),e),[]),tr=g.memo(function({className:e}){const{t:n}=R(),{systemChain:t}=(0,T.g)(),i=(0,g.useMemo)(()=>{const e=t?.toLowerCase();return e&&nr.includes(e)?`https://${e}.dotapps.io`:"https://dotapps.io"},[t]);return er?(0,r.jsx)(z,{className:e,icon:"link",isBottom:!0,isDev:!0,isFull:!0,type:"info",children:(0,r.jsxs)("div",{children:[n("You are connected to the development instance of the UI. For a fully decentralized experience, you are encouraged to use the IPFS deployed version as the canonical URL: "),(0,r.jsx)("a",{href:i,rel:"noreferrer",target:"_blank",children:i.replace("https://","")})]})}):null}),rr=g.memo(function({className:e}){const{t:n}=R(),{isLocalFork:t}=(0,T.g)();return t?(0,r.jsx)(z,{className:e,icon:"link",isBottom:!0,isFull:!0,type:"info",children:(0,r.jsxs)("div",{children:[n("Local fork powered by "),(0,r.jsx)("a",{href:"https://github.com/AcalaNetwork/chopsticks",rel:"noreferrer",target:"_blank",children:"Chopsticks"}),"."]})}):null}),ir=N.I4.div`
  position: fixed;
  bottom: 0.75rem;
  right: 0.75rem;
  left: 0.75rem;
  top: auto;
  padding: 1rem;
  z-index: 500;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;;
  div.isInfo:before {
    content: none;
  }
`,or=g.memo(function({className:e}){return(0,r.jsxs)(ir,{className:e,children:[(0,r.jsx)(rr,{}),(0,r.jsx)(tr,{})]})}),sr=p.W.apiType.param,ar="json-rpc"===p.W.apiType.type&&"string"==typeof sr&&sr.startsWith("ws://"),cr="string"==typeof sr&&sr.includes("127.0.0.1"),lr=window.location.protocol.startsWith("https:"),dr=g.memo(function({className:e}){const{t:n}=R(),{apiError:t,isApiConnected:i,isApiReady:o,isWaitingInjected:s}=(0,T.g)();return t?(0,r.jsx)(z,{className:e,icon:"globe",type:"error",children:(0,r.jsx)("div",{children:t})}):o?s?(0,r.jsx)(z,{className:e,icon:"puzzle-piece",type:"info",children:(0,r.jsx)("div",{children:n("Waiting for authorization from the extension. Please open the installed extension and approve or reject access.")})}):i?null:(0,r.jsxs)(z,{className:e,icon:"globe",type:"error",children:[(0,r.jsx)("div",{children:n("You are not connected to a node. Ensure that your node is running and that the Websocket endpoint is reachable.")}),ar&&!cr&&lr?(0,r.jsx)("div",{children:n("You are connecting from a secure location to an insecure WebSocket ({{wsUrl}}). Due to browser mixed-content security policies this connection type is not allowed. Change the RPC service to a secure 'wss' endpoint.",{replace:{wsUrl:sr}})}):void 0]}):(0,r.jsx)(z,{className:e,icon:"globe",type:"info",children:(0,r.jsx)("div",{children:n(i?"Waiting to complete metadata retrieval from remote endpoint.":"Waiting to establish a connection with the remote endpoint.")})})}),pr=g.memo(function(){const{api:e,apiIdentity:n,isApiReady:t}=(0,T.g)(),i=(0,lt.Gc)(t&&e.derive.accounts?.indexes),o=(0,lt.Gc)(t&&n.query.identity?.registrars),s=(0,lt.Gc)(t&&e.query.balances?.totalIssuance),[a,c]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{c(!!i||!!s||!!o)},[]),(0,r.jsx)("div",{className:`apps--api-warm ${a.toString()}`})}),ur=N.I4.div`
  background: var(--bg-page);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(e=>`\n    .greyAnim-${e} {\n      animation: greyAnim${e} 2s;\n    }\n\n    @keyframes greyAnim${e} {\n      0% { background: #a6a6a6; }\n      50% { background: darkorange; }\n      100% { background: #a6a6a6; }\n    }\n  `).join("")}
`,mr=g.memo(function({className:e=""}){const{themeClassName:n}=(0,U.D)(),{apiEndpoint:t,isDevelopment:i}=(0,T.g)(),o=(0,g.useMemo)(()=>i?void 0:t?.ui.color,[t,i]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S.A,{uiHighlight:o}),(0,r.jsxs)(ur,{className:`${e} apps--Wrapper ${n}`,children:[(0,r.jsx)(Qt,{}),(0,r.jsxs)(N.Ux,{children:[(0,r.jsx)(M.Ay,{children:(0,r.jsx)(ft,{})}),(0,r.jsx)(dr,{}),(0,r.jsx)(or,{}),(0,r.jsx)("div",{id:"portals"})]})]}),(0,r.jsx)(pr,{})]})});function gr(e){const n="dark"===(e?.uiTheme||"light")?"dark":"light";return document?.documentElement?.setAttribute("data-theme",n),{theme:n}}const hr=g.memo(function({isElectron:e,store:n}){const[t,i]=(0,g.useState)(()=>gr(p.W));return(0,g.useEffect)(()=>{p.W.on("change",e=>i(gr(e)))},[]),(0,r.jsx)(g.Suspense,{fallback:"...",children:(0,r.jsx)(x.NP,{theme:t,children:(0,r.jsx)(y.D,{children:(0,r.jsx)(v.sH,{apiUrl:p.W.apiUrl,beforeApiInit:(0,r.jsx)(E,{}),isElectron:e,store:n,children:(0,r.jsx)(k.n,{children:(0,r.jsx)(b.H,{children:(0,r.jsx)(w.T,{children:(0,r.jsx)(A.I,{children:(0,r.jsx)(f.I9,{children:(0,r.jsx)(C.N,{children:(0,r.jsx)(j.M,{children:(0,r.jsx)(I.cF,{children:(0,r.jsx)(mr,{})})})})})})})})})})})})})}),fr="root",xr=document.getElementById(fr);if(!xr)throw new Error(`Unable to find element with id '${fr}'`);(0,h.H)(xr).render((0,r.jsx)(hr,{isElectron:!1}))},38567(){},43951(){},46982(){},51226(){},59621(e,n,t){var r={".":[10005,9],"./":[10005,9],"./Api":[43910,9],"./Api.tsx":[43910,9],"./hoc":[27900,9],"./hoc/":[27900,9],"./hoc/api":[49788,9],"./hoc/api.tsx":[49788,9],"./hoc/call":[63002,9],"./hoc/call.tsx":[63002,9],"./hoc/callDiv":[40833,9],"./hoc/callDiv.tsx":[40833,9],"./hoc/calls":[1621,9],"./hoc/calls.ts":[1621,9],"./hoc/index":[27900,9],"./hoc/index.ts":[27900,9],"./hoc/multi":[10665,9],"./hoc/multi.ts":[10665,9],"./hoc/observable":[2385,9],"./hoc/observable.tsx":[2385,9],"./hoc/onlyOn":[15567,9],"./hoc/onlyOn.tsx":[15567,9],"./hoc/types":[37229,9,7229],"./hoc/types.ts":[37229,9,7229],"./index":[10005,9],"./index.ts":[10005,9],"./light":[19830,9],"./light.spec":[77224,9,7224],"./light.spec.ts":[77224,9,7224],"./light/":[19830,9],"./light/dicle":[48362,9],"./light/dicle/":[48362,9],"./light/dicle/gm.json":[24255,3,4255],"./light/dicle/index":[48362,9],"./light/dicle/index.ts":[48362,9],"./light/dicle/shiden.json":[38634,3,8634],"./light/dicle/tinkernet.json":[86675,3,6675],"./light/index":[19830,9],"./light/index.ts":[19830,9],"./light/pezkuwi":[10370,9],"./light/pezkuwi/":[10370,9],"./light/pezkuwi/astar.json":[45638,3,5638],"./light/pezkuwi/index":[10370,9],"./light/pezkuwi/index.ts":[10370,9],"./light/pezkuwi/laos.json":[34230,3,4230],"./statics":[35038,9],"./statics.ts":[35038,9],"./transform/echo":[5745,9],"./transform/echo.ts":[5745,9],"./types":[33136,9,3136],"./types.ts":[33136,9,3136],"./urlTypes":[815,9],"./urlTypes.ts":[815,9],"./util":[2926,9],"./util/":[2926,9],"./util/getEnvironment":[10461,9],"./util/getEnvironment.ts":[10461,9],"./util/historic":[1713,9],"./util/historic.ts":[1713,9],"./util/index":[2926,9],"./util/index.ts":[2926,9],"./util/intervalObservable":[24732,9],"./util/intervalObservable.ts":[24732,9],"./util/isEqual":[16898,9],"./util/isEqual.ts":[16898,9],"./util/triggerChange":[44362,9],"./util/triggerChange.ts":[44362,9]};function i(e){if(!t.o(r,e))return Promise.resolve().then(()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],i=n[0];return Promise.all(n.slice(2).map(t.e)).then(()=>t.t(i,16|n[1]))}i.keys=()=>Object.keys(r),i.id=59621,e.exports=i},63011(){},70618(){},75627(){},93553(){},94893(){}},e=>{e.O(0,[3175,7662,965,9657,5901,7231,5328,7289,9145,6206,9725,3024,9025,9873,1345,3802,4637,3346,9711,1292,3960,533,3123,6267,9907,6476,3989,2701,9286,281,3065,6316,8711,2843,378,474,8719,7534,9240,1469,2360,9424,8769,7168,8049,1293,1576,4590,5125,1155,6309,4919,3602,4470],()=>e(e.s=18334)),e.O()}]);