// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalCerestatsPNG } from '../ui/logos/external/index.js';

export const CereStats: ExternalDef = {
  // CereStats is Cere-specific, not applicable to Pezkuwi networks
  chains: {},
  create: (_: string, path: string, data: BN | number | string): string =>
    `https://stats.cere.network/${path}/${data.toString()}`,
  homepage: 'https://stats.cere.network',
  isActive: false,
  paths: {
    address: 'account',
    block: 'block',
    validator: 'validator'
  },
  ui: {
    logo: externalCerestatsPNG
  }
};
