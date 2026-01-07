// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@pezkuwi/util/types';

import { knownGenesis } from '@pezkuwi/networks/defaults';
import { assert, BN } from '@pezkuwi/util';

export function getGenesis (name: string): HexString {
  const network = Object.entries(knownGenesis).find(([network]) => network === name);

  assert(network?.[1][0], `Unable to find genesisHash for ${name}`);

  return network[1][0];
}

export const KULUPU_GENESIS = getGenesis('kulupu');

// Dicle - Pezkuwi canary relay chain (placeholder until mainnet launch)
export const DICLE_GENESIS = '0xd9d3cd7c1e5d890d969b957f4c5b71a111bbeeabc968f1d0d4538c2663f080a7';

// Pezkuwi - Pezkuwi main relay chain (placeholder until mainnet launch)
export const PEZKUWI_GENESIS = '0x41693961995d879073269a008d0a52832caa3e0ae73869f02127f3d5daa4934c';
export const PEZKUWI_DENOM_BLOCK = new BN(1248328);

export const PASEO_GENESIS = '0x77afd6190f1554ad45fd0d31aee62aacc33c6db0ea801129acb813f913e0764f';

// Zagros - Pezkuwi test relay chain (placeholder until testnet launch)
export const ZAGROS_GENESIS = '0x297f5a4d105b4b28312586ff1915572ffe4ee015ff772b76399ecbff25a22026';

// PezkuwiChain - Pezkuwi dev relay chain (placeholder until devnet launch)
export const PEZKUWICHAIN_GENESIS = '0x32154fd2c844f928c82964ff66168b41b15fc235f3a956d14393734c1ed4326b';

export const NEATCOIN_GENESIS = '0xfbb541421d30423c9a753ffa844b64fd44d823f513bf49e3b73b3a656309a595';

export const DOCK_GENESIS = '0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae';

export const DOCK_POS_TESTNET_GENESIS = '0x59d93e2ce42abb8aa52ca9a9e820233667104751f8f2980578a47a26a7235027';

export const NFTMART_GENESIS = '0xfcf9074303d8f319ad1bf0195b145871977e7c375883b834247cb01ff22f51f9';

export const CERE_NETWORK_GENESIS = '0x81443836a9a24caaa23f1241897d1235717535711d1d3fe24eae4fdc942c092c';

export const CERE_NETWORK_TESTNET_GENESIS = '0x42b9b44b4950b6c1edae543a7696caf8d0a160e9bc0424ab4ab217f7a8ba30dc';

export const VARA_NETWORK_GENESIS = '0xfe1b4c55fd4d668101126434206571a7838a8b6b93a6d1b95d607e78e6c53763';

export const VARA_NETWORK_TESTNET_GENESIS = '0x525639f713f397dcf839bd022cd821f367ebcf179de7b9253531f8adbe5436d6';

export const JOYSTREAM_GENESIS = '0x6b5e488e0fa8f9821110d5c13f4c468abcd43ce5e297e62b34c53c3346465956';

export const ZKVERIFY_GENESIS = '0x060e3dd3fa2904d031206bb913c954687a2bcc350e5a83d33d9e273ad21460f1';

export const ZKVERIFY_VOLTA_GENESIS = '0xff7fe5a610f15fe7a0c52f94f86313fb7db7d3786e7f8acf2b66c11d5be7c242';
