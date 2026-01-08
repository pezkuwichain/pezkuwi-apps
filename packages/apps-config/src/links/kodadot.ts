// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalKodadotSVG } from '../ui/logos/external/index.js';

const getNetwork = (_chain: string) => {
  const chain = {
    basilisk: 'bsx',
    statemine: 'ahk',
    statemint: 'ahp'
  }[_chain];

  return `https://kodadot.xyz/${chain}/u/`;
};

export const KodaDot: ExternalDef = {
  // Note: KodaDot may not support Pezkuwi networks yet. These are placeholder entries.
  chains: {
    'Dicle Asset Hub': 'statemine',
    'Pezkuwi Asset Hub': 'statemint',
    'Zagros Asset Hub': 'statemint'
  },
  create: (_chain: string, _path: string, data: BN | number | string): string =>
    `${getNetwork(_chain)}${data.toString()}`,
  homepage: 'https://kodadot.xyz',
  isActive: false,
  paths: {
    address: 'account'
  },
  ui: {
    logo: externalKodadotSVG
  }
};
