// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalSubidSVG } from '../ui/logos/external/index.js';

export const SubId: ExternalDef = {
  // Note: Sub.ID may not support Pezkuwi networks yet. These are placeholder entries.
  chains: {
    Dicle: 'dicle',
    'Dicle Asset Hub': 'assethub-dicle',
    Pezkuwi: 'pezkuwi',
    'Pezkuwi Asset Hub': 'assethub-pezkuwi',
    Zagros: 'zagros',
    'Zagros Asset Hub': 'assethub-zagros'
  },
  create: (_chain: string, _path: string, data: BN | number | string): string =>
    `https://sub.id/${data.toString()}`,
  homepage: 'https://sub.id',
  isActive: false,
  paths: {
    address: 'account'
  },
  ui: {
    logo: externalSubidSVG
  }
};
