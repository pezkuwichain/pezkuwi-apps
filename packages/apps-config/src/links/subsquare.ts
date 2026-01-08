// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalSubsquareSVG } from '../ui/logos/external/index.js';

export const Subsquare: ExternalDef = {
  // Note: Subsquare may not support Pezkuwi networks yet. These are placeholder entries.
  chains: {
    Dicle: 'dicle',
    'Dicle Asset Hub': 'dicle',
    'Dicle Collectives': 'dicle',
    'Dicle Coretime': 'dicle',
    'Dicle People': 'dicle',
    Pezkuwi: 'pezkuwi',
    'Pezkuwi Asset Hub': 'pezkuwi',
    'Pezkuwi Collectives': 'pezkuwi',
    'Pezkuwi Coretime': 'pezkuwi',
    'Pezkuwi People': 'pezkuwi',
    Zagros: 'zagros',
    'Zagros Asset Hub': 'zagros',
    'Zagros Collectives': 'zagros',
    'Zagros Coretime': 'zagros',
    'Zagros People': 'zagros'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://${chain}.subsquare.io/${path}/${data.toString()}${path === 'user' ? '/votes' : ''}`,
  homepage: 'https://subsquare.io/',
  isActive: false,
  paths: {
    address: 'user',
    bounty: 'treasury/bounty',
    council: 'council/motion',
    democracyExternal: 'democracy/external',
    democracyProposal: 'democracy/proposal',
    democracyReferendum: 'democracy/referendum',
    fellowshipReferenda: 'fellowship/referendum',
    referenda: 'referenda/referendum',
    tip: 'treasury/tip',
    treasury: 'treasury/proposal'
  },
  ui: {
    logo: externalSubsquareSVG
  }
};
