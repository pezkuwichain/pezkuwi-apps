// Copyright 2017-2026 @pezkuwi/app-bounties authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import '@pezkuwi/react-components/i18n';

import type { ApiPromise } from '@pezkuwi/api';

import { cleanup, render } from '@testing-library/react';
import React, { Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ApiCtxRoot } from '@pezkuwi/react-api';
import { statics } from '@pezkuwi/react-api/statics';
import { lightTheme } from '@pezkuwi/react-components';
import { createApi } from '@pezkuwi/test-support/api';
import { aliceSigner, MemoryStore } from '@pezkuwi/test-support/keyring';
import { WaitForApi } from '@pezkuwi/test-support/react';
import { execute } from '@pezkuwi/test-support/transaction';
import { BN } from '@pezkuwi/util';

import BountiesApp from './index.js';

const BIZINIKIWI_PORT = Number.parseInt(process.env.TEST_BIZINIKIWI_PORT || '30333');

const renderBounties = () => {
  const memoryStore = new MemoryStore();

  return render(
    <Suspense fallback='...'>
      <MemoryRouter initialEntries={['/bounties']}>
        <ThemeProvider theme={lightTheme}>
          <ApiCtxRoot
            apiUrl={`ws://127.0.0.1:${BIZINIKIWI_PORT}`}
            store={memoryStore}
          >
            <WaitForApi>
              <div>
                <BountiesApp basePath='/bounties' />
              </div>
            </WaitForApi>
          </ApiCtxRoot>
        </ThemeProvider>
      </MemoryRouter>
    </Suspense>
  );
};

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('--SLOW--: Bounties', () => {
  let api: ApiPromise | undefined;

  // both connections stay open otherwise, and keep the process alive
  afterAll(async () => {
    cleanup();
    await api?.disconnect();
    await statics.api.disconnect();
  });

  it('list shows an existing bounty', async () => {
    // unique, so a node that already holds bounties from an earlier run still has exactly one match
    const title = `a short bounty title ${Date.now()}`;

    api = await createApi();

    await execute((api.tx.bounties as any).proposeBounty(new BN(500_000_000_000_000), title), aliceSigner());

    const { findByText } = renderBounties();

    expect(await findByText(title, {}, { timeout: 20_000 })).toBeTruthy();
  });
});
