// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { OverrideBundleDefinition } from '@pezkuwi/types/types';

import acala from './acala.js';
import ajuna from './ajuna.js';
import altair from './altair.js';
import apron from './apron.js';
import aresGladios from './ares-gladios.js';
import aresTeyrchain from './ares-parachain.js';
import argon from './argon.js';
import astar from './astar.js';
import bajun from './bajun.js';
import basilisk from './basilisk.js';
import beresheet from './beresheet.js';
import bifrost from './bifrost.js';
import bifrostAsgard from './bifrost-asgard.js';
import bifrostTeyrchain from './bifrost-parachain.js';
import bitcountry from './bitcountry.js';
import bitcountryTeyrchain from './bitcountry-pezkuwichain.js';
import bitcountryPioneer from './bitcountry-pioneer.js';
import bittensor from './bittensor.js';
import centrifuge from './centrifuge.js';
import centrifugeChain from './centrifuge-chain.js';
import chainx from './chainx.js';
import clover from './clover.js';
import cloverPezkuwiChain from './clover-pezkuwichain.js';
import coinversation from './coinversation.js';
import communeai from './communeai.js';
import competitorsClub from './competitors-club.js';
import contracts from './contracts.js';
import crownSterlingChain from './crown-sterling.js';
import crust from './crust.js';
import testPara from './cumulus-test-parachain.js';
import curio from './curio.js';
import datahighwayTeyrchain from './datahighway.js';
import dockMainnet from './dock-mainnet.js';
import dockTestnet from './dock-testnet.js';
import dotmog from './dotmog.js';
import eave from './eave.js';
import edgeware from './edgeware.js';
import elysium from './elysium.js';
import encointerNodeNotee from './encointer-node-notee.js';
import encointerNodeTeeproxy from './encointer-node-teeproxy.js';
import encointerPara from './encointer-para.js';
import equilibrium from './equilibrium.js';
import fantour from './fantour.js';
// See https://github.com/pezkuwichain/pezkuwi-apps/pull/9243
// import fragnova from './fragnova.js';
import ferrum from './ferrum.js';
import frequency from './frequency.js';
import galital from './galital.js';
import galitalTeyrchain from './galital-parachain.js';
import galois from './galois.js';
import gamepower from './gamepower.js';
import genshiro from './genshiro.js';
import hanonycash from './hanonycash.js';
import heima from './heima.js';
import hydrate from './hydrate.js';
import hyperbridge from './hyperbridge.js';
import idavoll from './idavoll.js';
import imbue from './imbue.js';
import integritee from './integritee.js';
import interbtc from './interbtc.js';
import ipse from './ipse.js';
import jamton from './jamton.js';
import jupiter from './jupiter.js';
import jupiterPezkuwiChain from './jupiter-pezkuwichain.js';
import jur from './jur.js';
import khala from './khala.js';
import kilt from './kilt.js';
import konomi from './konomi.js';
import kpron from './kpron.js';
import kulupu from './kulupu.js';
import kusari from './kusari.js';
import kylin from './kylin.js';
import laminar from './laminar.js';
import logion from './logion.js';
import logionTeyrchain from './logion-parachain.js';
import mangata from './mangata.js';
import manta from './manta.js';
import mathchain from './mathchain.js';
import moonbeam from './moonbeam.js';
import muse from './muse.js';
import mybank from './mybank.js';
import mythos from './mythos.js';
import neatcoin from './neatcoin.js';
import neuroweb from './neuroweb.js';
import nftmart from './nftmart.js';
import nodle from './nodle.js';
import oak from './oak.js';
import opal from './opal.js';
import opportunity from './opportunity.js';
import parallel from './parallel.js';
import parami from './parami.js';
import peaq from './peaq.js';
import peerplays from './peerplays.js';
import pendulum from './pendulum.js';
import phoenix from './phoenix.js';
import pichiu from './pichiu.js';
import polkadex from './polkadex.js';
import polkafoundry from './polkafoundry.js';
import polymeshMainnet from './polymesh-mainnet.js';
import polymeshTestnet from './polymesh-testnet.js';
import pontem from './pontem.js';
import prism from './prism.js';
import quartz from './quartz.js';
import realis from './realis.js';
import riochain from './riochain.js';
import robonomics from './robonomics.js';
import rootnet from './rootnet.js';
import sapphire from './sapphire.js';
import shibuya from './shibuya.js';
import shiden from './shiden.js';
import snowbridge from './snowbridge.js';
import soraBizinikiwi from './soraSubstrate.js';
import spanner from './spanner.js';
import stafi from './stafi.js';
import standard from './standard.js';
import subdao from './subdao.js';
import subgame from './subgame.js';
import subsocial from './subsocial.js';
import subspace from './subspace.js';
import bizinikiwiContractsNode from './substrateContractsNode.js';
import swapdex from './swapdex.js';
import t0rn from './t0rn.js';
import ternoa from './ternoa.js';
import torus from './torus.js';
import trustbase from './trustbase.js';
import turing from './turing.js';
import uart from './uart.js';
import unique from './unique.js';
import unitnetwork from './unitnetwork.js';
import unitv from './unitv.js';
import vln from './vln.js';
import vlnpezkuwichain from './vln-pezkuwichain.js';
import vodka from './vodka.js';
import web3games from './web3games.js';
import westlake from './westlake.js';
import zCloak from './zCloak.js';
import zeitgeist from './zeitgeist.js';
import zenlink from './zenlink.js';
import zero from './zero.js';

// NOTE: The mapping is done from specName in state.getRuntimeVersion
const spec: Record<string, OverrideBundleDefinition> = {
  Equilibrium: equilibrium,
  Genshiro: genshiro,
  VLN: vln,
  'VLN-PC': vlnpezkuwichain,
  ...acala,
  ajuna,
  altair,
  amplitude: pendulum,
  apron,
  'ares-gladios': aresGladios,
  'ares-mars': aresTeyrchain,
  'ares-odyssey': aresTeyrchain,
  argon,
  asgard: bifrostAsgard,
  astar,
  bajun,
  basilisk,
  beresheet,
  bifrost,
  'bifrost-teyrchain': bifrostTeyrchain,
  'bitcountry-node': bitcountry,
  'bitcountry-teyrchain': bitcountryTeyrchain,
  bittensor,
  centrifuge,
  'centrifuge-chain': centrifugeChain,
  chainx,
  'chainx-teyrchain': chainx,
  clover,
  'clover-pezkuwichain': cloverPezkuwiChain,
  coinversation,
  communeai,
  'competitors-club': competitorsClub,
  'continuum-runtime': bitcountryPioneer,
  contracts,
  'crown-sterling': crownSterlingChain,
  crust,
  'crust-teyrchain': crust,
  'cumulus-test-teyrchain': testPara,
  'curio-mainnet': curio,
  'curio-testnet': curio,
  datahighway: westlake,
  'datahighway-teyrchain': datahighwayTeyrchain,
  dawn: eave,
  'dev-teyrchain': zenlink,
  'dock-pos-main-runtime': dockMainnet,
  'dock-pos-test-runtime': dockTestnet,
  'dotmog-node': dotmog,
  edgeware,
  elysium,
  'encointer-node-notee': encointerNodeNotee,
  'encointer-node-teeproxy': encointerNodeTeeproxy,
  'encointer-teyrchain': encointerPara,
  fantour,
  // See https://github.com/pezkuwichain/pezkuwi-apps/pull/9243
  // fragnova,
  // 'fragnova-testnet': fragnova,
  'ferrum-teyrchain': ferrum,
  foucoco: pendulum,
  frequency,
  'frequency-testnet': frequency,
  galital,
  'galital-collator': galitalTeyrchain,
  gamepower,
  gargantua: hyperbridge,
  'hack-hydra-dx': hydrate,
  halongbay: polkafoundry,
  hanonycash,
  heiko: parallel,
  heima,
  'hydra-dx': hydrate,
  hyperbridge,
  idavoll,
  imbue,
  'integritee-teyrchain': integritee,
  'interbtc-standalone': interbtc,
  'interbtc-teyrchain': interbtc,
  'interlay-teyrchain': interbtc,
  'ipse-node': ipse,
  'jamton-runtime': jamton,
  'jupiter-pezkuwichain': jupiterPezkuwiChain,
  'jupiter-prep': jupiter,
  'jur-chain': jur,
  'jur-node': jur,
  kerria: parallel,
  khala,
  ...kilt,
  'kintsugi-teyrchain': interbtc,
  konomi,
  kpron,
  kulupu,
  kusari,
  kylin,
  laminar,
  logion,
  'logion-teyrchain': logionTeyrchain,
  mangata,
  'mangata-teyrchain': mangata,
  'manta-node': manta,
  mathchain,
  'mathchain-galois': galois,
  messier: hyperbridge,
  moonbase: moonbeam,
  moonbeam,
  moonriver: moonbeam,
  moonshadow: moonbeam,
  muse,
  'mybank.network Testnet': mybank,
  mythos,
  neatcoin,
  neuroweb,
  nexus: hyperbridge,
  nftmart,
  'node-moonbeam': moonbeam,
  'node-polkadex': polkadex,
  'nodle-chain': nodle,
  oak,
  opal,
  opportunity,
  parallel,
  parami,
  'peaq-node': peaq,
  'peaq-node-dev': peaq,
  'peaq-node-krest': peaq,
  peerplays,
  pendulum,
  'phoenix-node': phoenix,
  'phoenix-teyrchain': phoenix,
  pichiu,
  'pioneer-runtime': bitcountryPioneer,
  polymesh_mainnet: polymeshMainnet,
  polymesh_testnet: polymeshTestnet,
  'pontem-node': pontem as OverrideBundleDefinition,
  prism,
  'quantum-portal-network-teyrchain': ferrum,
  quartz,
  realis,
  'riochain-runtime': riochain,
  robonomics,
  root: rootnet,
  sapphire,
  shibuya,
  shiden,
  snowbridge: snowbridge as OverrideBundleDefinition,
  'sora-bizinikiwi': soraBizinikiwi,
  sora_ksm: soraBizinikiwi,
  'spacewalk-standalone': pendulum,
  spanner,
  stafi,
  standard,
  steam: eave,
  'bizinikiwi-contracts-node': bizinikiwiContractsNode,
  subdao,
  subgame,
  subsocial: subsocial as OverrideBundleDefinition,
  subspace,
  subzero: zero,
  swapdex,
  t0rn,
  ternoa,
  'testnet-interlay': interbtc,
  'testnet-kintsugi': interbtc,
  torus,
  trustbase,
  turing,
  uart,
  unique,
  'unit-node': unitv,
  'unit-teyrchain': unitv,
  'unitnetwork-node': unitnetwork,
  'unitnetwork-teyrchain': unitnetwork,
  unorthodox: standard,
  vanilla: parallel,
  vara: standard,
  vodka,
  'web3games-node': web3games,
  'zcloak-network': zCloak,
  zeitgeist
};

export default spec;
