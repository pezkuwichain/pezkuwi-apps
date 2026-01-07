// Copyright 2017-2025 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@pezkuwi/api';
import type { TrackInfo } from './types.js';

import { DICLE_GENESIS, PEZKUWI_GENESIS } from '../../constants.js';
import { dicle } from './dicle.js';
import { pezkuwi } from './pezkuwi.js';

const KNOWN_GENE_TRACKS: Record<string, Record<string, TrackInfo[]>> = {
  [DICLE_GENESIS]: dicle,
  [PEZKUWI_GENESIS]: pezkuwi
};

const KNOWN_SPEC_TRACKS: Record<string, Record<string, TrackInfo[]>> = {
  dicle,
  // for kitchensink, we just use the root
  node: {
    referenda: [
      {
        id: 0,
        name: 'root',
        origin: { system: 'Root' }
      }
    ]
  },
  pezkuwi
};

export function getGovernanceTracks (api: ApiPromise, specName: string, palletReferenda: string): TrackInfo[] | undefined {
  const lookup = KNOWN_GENE_TRACKS[api.genesisHash.toHex()] || KNOWN_SPEC_TRACKS[specName];

  return lookup?.[palletReferenda];
}
