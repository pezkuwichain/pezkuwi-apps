// Copyright 2017-2026 @pezkuwi/test-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise } from '@pezkuwi/api';
import { WsProvider } from '@pezkuwi/rpc-provider';

import { BIZINIKIWI_PORT } from '../bizinikiwi/index.js';

// PezkuwiChain requires AuthorizeCall signed extension for all transactions
const PEZKUWI_SIGNED_EXTENSIONS = {
  AuthorizeCall: {
    extrinsic: {},
    payload: {}
  }
};

export async function createApi (port: number = BIZINIKIWI_PORT): Promise<ApiPromise> {
  process.env.NODE_ENV = 'test';

  const provider = new WsProvider(`ws://127.0.0.1:${port}`);

  const api = await ApiPromise.create({
    provider,
    signedExtensions: PEZKUWI_SIGNED_EXTENSIONS
  });

  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain.toString()} using ${nodeName.toString()} v${nodeVersion.toString()}`);

  return api;
}
