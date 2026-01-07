// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalHeztreasurySVG } from '../ui/logos/external/index.js';

export const Heztreasury: ExternalDef = {
  chains: {
    Dicle: 'ksm',
    Pezkuwi: 'dot'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://www.dotreasury.com/${chain}/${path}/${data.toString()}`,
  homepage: 'https://dotreasury.com/',
  isActive: true,
  paths: {
    bounty: 'bounties',
    tip: 'tips',
    treasury: 'proposals'
  },
  ui: {
    logo: externalHeztreasurySVG
  }
};
