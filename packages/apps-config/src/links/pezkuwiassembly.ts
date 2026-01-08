// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalPezkuwiassemblySVG } from '../ui/logos/external/index.js';

export const PezkuwiassemblyIo: ExternalDef = {
  chains: {
    Dicle: 'dicle',
    'Dicle Asset Hub': 'dicle/assethub',
    'Dicle Collectives': 'dicle/collectives',
    'Dicle Coretime': 'dicle/coretime',
    'Dicle People': 'dicle/people',
    Pezkuwi: 'pezkuwi',
    'Pezkuwi Asset Hub': 'pezkuwi/assethub',
    'Pezkuwi Collectives': 'pezkuwi/collectives',
    'Pezkuwi Coretime': 'pezkuwi/coretime',
    'Pezkuwi People': 'pezkuwi/people',
    Zagros: 'zagros',
    'Zagros Asset Hub': 'zagros/assethub',
    'Zagros Collectives': 'zagros/collectives',
    'Zagros Coretime': 'zagros/coretime',
    'Zagros People': 'zagros/people'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://governance.pezkuwichain.io/${chain}/${path}/${data.toString()}`,
  homepage: 'https://governance.pezkuwichain.io/',
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
  // Secondary governance portal (alias)
  chains: {},
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://governance.pezkuwichain.io/${chain}/${path}/${data.toString()}`,
  homepage: 'https://governance.pezkuwichain.io/',
  isActive: false
};
