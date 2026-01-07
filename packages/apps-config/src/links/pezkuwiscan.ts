// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@pezkuwi/util';
import type { ExternalDef } from './types.js';

import { externalPezkuwiscanSVG } from '../ui/logos/external/index.js';

export const Pezkuwiscan: ExternalDef = {
  chains: {
    // Kulupu: 'kulupu',
    Dicle: 'dicle',
    Pezkuwi: 'pezkuwi',
    PezkuwiChain: 'pezkuwichain'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://polkascan.io/${chain}/${path}/${data.toString()}`,
  homepage: 'https://polkascan.io/',
  isActive: true,
  paths: {
    address: 'account',
    block: 'block',
    council: 'council/motion',
    democracyProposal: 'democracy/proposal',
    democracyReferendum: 'democracy/referendum',
    extrinsic: 'transaction',
    techcomm: 'techcomm/proposal',
    treasury: 'treasury/proposal'
  },
  ui: {
    logo: externalPezkuwiscanSVG
  }
};
