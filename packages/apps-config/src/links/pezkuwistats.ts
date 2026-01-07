// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalPezkuwistatsSVG } from '../ui/logos/external/index.js';

// NOTE Not maintained, see breakage reports in
// https://github.com/pezkuwichain/pezkuwi-apps/issues/8903
export const Pezkuwistats: ExternalDef = {
  chains: {
    Dicle: 'dicle',
    Pezkuwi: 'pezkuwi',
    Zagros: 'zagros'

  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://${chain}.polkastats.io/${path}/${data.toString()}`,
  homepage: 'https://polkastats.io/',
  isActive: true,
  paths: {
    address: 'account',
    block: 'block',
    extrinsic: 'extrinsic',
    validator: 'validator'
  },
  ui: {
    logo: externalPezkuwistatsSVG
  }
};
