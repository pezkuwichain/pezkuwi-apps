// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalStatescanSVG } from '../ui/logos/external/index.js';

export const Statescan: ExternalDef = {
  chains: {
    Collectives: 'Collectives',
    Crust: 'crust-teyrchain',
    'Crust Shadow': 'shadow',
    Heima: 'heima',
    'Hyperbridge (Nexus)': 'nexus',
    'Hyperbridge (gargantua)': 'gargantua',
    'InvArch Network': 'invarch',
    Dicle: 'dicle',
    'Dicle Asset Hub': 'assethub-dicle',
    'Dicle BridgeHub': 'bridgehub-dicle',
    'Dicle Coretime': 'coretime-dicle',
    'Dicle People': 'people-dicle',
    'Laos Network': 'laos',
    'Paseo Testnet': 'paseo',
    Pezkuwi: 'pezkuwi',
    'Pezkuwi Asset Hub': 'assethub-pezkuwi',
    'Pezkuwi BridgeHub': 'bridgehub-pezkuwi',
    'Pezkuwi Coretime': 'coretime-pezkuwi',
    'Pezkuwi People': 'people-pezkuwi',
    'Tangle Mainnet': 'tangle',
    'Zagros Asset Hub': 'assethub-zagros'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://${chain}.statescan.io/#/${path}/${data.toString()}`,
  homepage: 'https://statescan.io/',
  isActive: true,
  paths: {
    address: 'accounts',
    block: 'blocks'
  },
  ui: {
    logo: externalStatescanSVG
  }
};
