// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@pezkuwi/api';

import { PEZKUWI_GENESIS } from '../constants.js';

interface InflationParams {
  auctionAdjust: number;
  auctionMax: number;
  falloff: number;
  maxInflation: number;
  minInflation: number;
  stakeTarget: number;
}

const DEFAULT_PARAMS: InflationParams = {
  auctionAdjust: 0,
  auctionMax: 0,
  // 5% for falloff, as per the defaults, see
  // https://github.com/pezkuwichain/pezkuwi/blob/816cb64ea16102c6c79f6be2a917d832d98df757/runtime/dicle/src/lib.rs#L534
  falloff: 0.05,
  // 10% max, 0.25% min, see
  // https://github.com/pezkuwichain/pezkuwi/blob/816cb64ea16102c6c79f6be2a917d832d98df757/runtime/dicle/src/lib.rs#L523
  maxInflation: 0.1,
  minInflation: 0.025,
  stakeTarget: 0.5
};

const KNOWN_PARAMS: Record<string, InflationParams> = {
  [PEZKUWI_GENESIS]: { ...DEFAULT_PARAMS, stakeTarget: 0.75 }
};

export function getInflationParams (api: ApiPromise): InflationParams {
  return KNOWN_PARAMS[api.genesisHash.toHex()] || DEFAULT_PARAMS;
}
