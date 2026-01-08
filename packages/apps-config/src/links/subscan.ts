// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalSubscanPNG } from '../ui/logos/external/index.js';

export const Subscan: ExternalDef = {
  chains: {
    Dicle: 'dicle',
    'Dicle Asset Hub': 'dicle/assethub',
    'Dicle Bridge Hub': 'dicle/bridgehub',
    'Dicle Collectives': 'dicle/collectives',
    'Dicle Coretime': 'dicle/coretime',
    'Dicle People': 'dicle/people',
    Pezkuwi: 'pezkuwi',
    'Pezkuwi Asset Hub': 'pezkuwi/assethub',
    'Pezkuwi Bridge Hub': 'pezkuwi/bridgehub',
    'Pezkuwi Collectives': 'pezkuwi/collectives',
    'Pezkuwi Coretime': 'pezkuwi/coretime',
    'Pezkuwi People': 'pezkuwi/people',
    Zagros: 'zagros',
    'Zagros Asset Hub': 'zagros/assethub',
    'Zagros Bridge Hub': 'zagros/bridgehub',
    'Zagros Collectives': 'zagros/collectives',
    'Zagros Coretime': 'zagros/coretime',
    'Zagros People': 'zagros/people'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://scan.pezkuwichain.io/${chain}/${path}/${data.toString()}`,
  homepage: 'https://scan.pezkuwichain.io/',
  isActive: true,
  paths: {
    address: 'account',
    block: 'block',
    bounty: 'bounty',
    council: 'council',
    democracyProposal: 'democracy_proposal',
    democracyReferendum: 'referenda',
    extrinsic: 'extrinsic',
    fellowshipReferenda: 'fellowship',
    referenda: 'referenda_v2',
    techcomm: 'tech',
    tip: 'treasury_tip',
    treasury: 'treasury',
    validator: 'validator'
  },
  ui: {
    logo: externalSubscanPNG
  }
};
