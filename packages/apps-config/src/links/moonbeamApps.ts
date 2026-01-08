// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalMoonbeamAppsSVG } from '../ui/logos/external/index.js';

export const MoonbeamApps: ExternalDef = {
  // MoonbeamApps is Moonbeam-specific, not applicable to Pezkuwi networks
  chains: {},
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://apps.moonbeam.network/${chain}/${path}/${data.toString()}`,
  homepage: 'https://apps.moonbeam.network/',
  isActive: false,
  paths: {
    referenda: 'referendum'
  },
  ui: {
    logo: externalMoonbeamAppsSVG
  }
};
