// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalPezkuwiassemblySVG } from '../ui/logos/external/index.js';

export const PezkuwiassemblyIo: ExternalDef = {
  chains: {
    Acala: 'acala',
    Altair: 'altair',
    Astar: 'astar',
    Basilisk: 'basilisk',
    'Bifrost Pezkuwi': 'bifrost',
    Calamari: 'calamari',
    Centrifuge: 'centrifuge',
    'Centrifuge Mainnet': 'centrifuge',
    'Cere Mainnet Beta': 'cere',
    Collectives: 'collectives',
    'Equilibrium teyrchain': 'equilibrium',
    'Hashed Network': 'hashed',
    Hydration: 'hydradx',
    'Integritee Network (Dicle)': 'integritee',
    Khala: 'khala',
    Kintsugi: 'kintsugi',
    Dicle: 'dicle',
    'Dicle Asset Hub': 'dicle',
    'Dicle CC3': 'dicle',
    'Dicle People': 'dicle',
    Parallel: 'parallel',
    'Parallel Heiko': 'heiko',
    Picasso: 'picasso',
    'Pioneer Network': 'pioneer',
    'Polkadex Main Network': 'polkadex',
    Pezkuwi: 'pezkuwi',
    'Pezkuwi Asset Hub': 'pezkuwi',
    Robonomics: 'robonomics',
    PezkuwiChain: 'pezkuwichain',
    Shibuya: 'shibuya',
    Shiden: 'shiden',
    'Vara Network': 'vara',
    'Zagros Collectives': 'zagros-collectives',
    Zeitgeist: 'zeitgeist'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://${chain}.polkassembly.io/${path}/${data.toString()}`,
  homepage: 'https://polkassembly.io/',
  isActive: true,
  paths: {
    address: 'address',
    bounty: 'bounty',
    council: 'motion',
    democracyProposal: 'proposal',
    democracyReferendum: 'referendum',
    fellowshipReferenda: 'member-referenda',
    referenda: 'referenda',
    tip: 'tip',
    treasury: 'treasury'
  },
  ui: {
    logo: externalPezkuwiassemblySVG
  }
};

export const PezkuwiassemblyNetwork: ExternalDef = {
  ...PezkuwiassemblyIo,
  chains: {
    Bifrost: 'bifrost',
    'KILT Spiritnet': 'kilt',
    Karura: 'karura',
    'Khala Network': 'khala',
    'Moonbase Alpha': 'moonbase',
    Moonbeam: 'moonbeam',
    Moonriver: 'moonriver'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://${chain}.polkassembly.network/${path}/${data.toString()}`,
  homepage: 'https://polkassembly.network/'
};
