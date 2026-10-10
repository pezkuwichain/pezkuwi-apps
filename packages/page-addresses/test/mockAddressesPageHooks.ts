// Copyright 2017-2026 @pezkuwi/app-addresses authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { mock } from 'node:test';

import { mockPageHooks } from '@pezkuwi/test-support/mocks';
import { mockAccountHooks } from '@pezkuwi/test-support/utils';

/**
 * The shared page hooks, with the contacts served from the same fixture as
 * the accounts. Await it before importing AddressesPage.
 */
export async function mockAddressesPageHooks (): Promise<void> {
  await mockPageHooks();

  mock.module('@pezkuwi/react-hooks/useAddresses', {
    namedExports: {
      useAddresses: () => ({
        allAddresses: mockAccountHooks.useAccounts.allAccounts,
        hasAddresses: mockAccountHooks.useAccounts.hasAccounts,
        isAddress: true
      })
    }
  });
}
