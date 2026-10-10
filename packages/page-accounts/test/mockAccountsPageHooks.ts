// Copyright 2017-2026 @pezkuwi/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { mock } from 'node:test';

import { mockPageHooks } from '@pezkuwi/test-support/mocks';
import { mockApiHooks } from '@pezkuwi/test-support/utils';

/**
 * The shared page hooks, plus the multisig lookup that an account row makes.
 * Await it before importing AccountsPage.
 */
export async function mockAccountsPageHooks (): Promise<void> {
  await mockPageHooks();

  mock.module('../src/Accounts/useMultisigApprovals', {
    defaultExport: () => mockApiHooks.multisigApprovals
  });
}
