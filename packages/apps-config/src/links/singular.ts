// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalSingularSVG } from '../ui/logos/external/index.js';

const getNetwork = (_chain: string) => {
  switch (_chain) {
    case 'statemine':
      return 'statemine/';
    default:
      return '';
  }
};

export const Singular: ExternalDef = {
  // Note: Singular may not support Pezkuwi networks yet. These are placeholder entries.
  chains: {
    Dicle: 'dicle',
    'Dicle Asset Hub': 'statemine',
    Pezkuwi: 'pezkuwi',
    'Pezkuwi Asset Hub': 'statemint',
    Zagros: 'zagros',
    'Zagros Asset Hub': 'statemint'
  },
  create: (_chain: string, _path: string, data: BN | number | string): string =>
    `https://singular.app/space/${getNetwork(_chain)}${data.toString()}`,
  homepage: 'https://singular.app',
  isActive: false,
  paths: {
    address: 'account'
  },
  ui: {
    logo: externalSingularSVG
  }
};
