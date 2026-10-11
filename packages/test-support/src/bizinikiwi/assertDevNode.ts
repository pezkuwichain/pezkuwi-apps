// Copyright 2017-2026 @pezkuwi/test-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BIZINIKIWI_PORT } from './constants.js';

/**
 * Fails at once when no dev node answers on BIZINIKIWI_PORT. Without it an
 * api keeps reconnecting and a spec waits until the job's timeout.
 */
export async function assertDevNode (timeoutMs = 5_000): Promise<void> {
  const url = `http://127.0.0.1:${BIZINIKIWI_PORT}`;
  const res = await fetch(url, {
    body: JSON.stringify({ id: 1, jsonrpc: '2.0', method: 'system_chain' }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    signal: AbortSignal.timeout(timeoutMs)
  }).catch((error: Error) => error);

  if (res instanceof Error || !res.ok) {
    const reason = res instanceof Error
      ? res.message
      : `HTTP ${res.status}`;

    throw new Error(`No dev node answers on ${url} (${reason}); the .slow. specs need one`);
  }
}
