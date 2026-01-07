// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@pezkuwi/api';

import { DICLE_GENESIS } from '../constants.js';

// 4 * BaseXcmWeight on Dicle
const DICLE_WEIGHT = 4 * 1_000_000_000;

const DEFAULT_WEIGHT = DICLE_WEIGHT;

const KNOWN_WEIGHTS: Record<string, number> = {
  [DICLE_GENESIS]: DICLE_WEIGHT
};

export function getTeleportWeight (api: ApiPromise): number {
  return KNOWN_WEIGHTS[api.genesisHash.toHex()] || DEFAULT_WEIGHT;
}
