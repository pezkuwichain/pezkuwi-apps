// Copyright 2017-2026 @pezkuwi/test-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AddressIdentity, UseAccountInfo } from '@pezkuwi/react-hooks/types';

import { mock } from 'node:test';

import { mockAccountHooks } from '../utils/accountDefaults.js';
import { mockApiHooks } from '../utils/mockApiHooks.js';

/**
 * The fixture identity over the real one, with the fixture judgements added
 * to the real ones
 */
function withMockIdentity (actual?: AddressIdentity, mocked?: AddressIdentity): AddressIdentity | undefined {
  const identity = mocked
    ? { ...actual, ...mocked }
    : actual;

  return identity && {
    ...identity,
    judgements: [
      ...(actual?.judgements || []),
      ...(mockApiHooks.judgements || [])
    ]
  };
}

/**
 * Replaces the hooks that a Page reads with the shared fixtures in
 * mockAccountHooks and mockApiHooks.
 *
 * Node only swaps a module that has not been loaded yet, so a spec awaits
 * this before anything that loads @pezkuwi/react-hooks, and then imports
 * the page under test with a dynamic import(). Needs node's
 * --experimental-test-module-mocks flag.
 *
 * A module mock replaces every export of the module, and the barrel in
 * @pezkuwi/react-hooks re-exports them by name, so each mock lists all of
 * them. Loading the real module to copy the rest is not an option: some of
 * them load the barrel, which would bind it before the mocks are in place.
 */
export async function mockPageHooks (): Promise<void> {
  mock.module('@pezkuwi/react-hooks/useAccounts', {
    namedExports: { useAccounts: () => mockAccountHooks.useAccounts }
  });

  mock.module('@pezkuwi/react-hooks/useNextTick', {
    namedExports: { useNextTick: () => true }
  });

  mock.module('@pezkuwi/react-hooks/useBalancesAll', {
    namedExports: { useBalancesAll: (address: string) => mockAccountHooks.accountsMap[address].balance }
  });

  mock.module('@pezkuwi/react-hooks/useStakingInfo', {
    namedExports: { useStakingInfo: (address: string) => mockAccountHooks.accountsMap[address].staking }
  });

  mock.module('@pezkuwi/react-hooks/useBestNumber', {
    namedExports: {
      useBestNumber: () => 1,
      useBestNumberRelay: () => 1
    }
  });

  mock.module('@pezkuwi/react-hooks/useSubidentities', {
    namedExports: { useSubidentities: () => mockApiHooks.subs }
  });

  mock.module('@pezkuwi/react-hooks/useDelegations', {
    namedExports: { useDelegations: () => mockApiHooks.delegations }
  });

  mock.module('@pezkuwi/react-hooks/useProxies', {
    namedExports: { useProxies: () => mockApiHooks.proxies }
  });

  mock.module('@pezkuwi/react-hooks/useRegistrars', {
    namedExports: {
      useRegistrars: () => ({
        isRegistrar: false,
        registrars: mockApiHooks.registrars
      })
    }
  });

  mock.module('@pezkuwi/react-hooks/useTheme', {
    namedExports: {
      useTheme: () => ({
        theme: 'light',
        themeClassName: 'theme--light'
      })
    }
  });

  // The fixture is layered over the real hook. It does not load the barrel,
  // so it can be loaded here, once the hooks above have been replaced.
  const { useAccountInfo: useActualAccountInfo } = await import('@pezkuwi/react-hooks/useAccountInfo');

  mock.module('@pezkuwi/react-hooks/useAccountInfo', {
    namedExports: {
      useAccountInfo: (address: string): UseAccountInfo => {
        const mockInfo = mockAccountHooks.accountsMap[address];
        const info = useActualAccountInfo(address);

        return mockInfo
          ? {
            ...info,
            flags: { ...info.flags, ...(mockInfo.info.flags) },
            identity: withMockIdentity(info.identity, mockInfo.info.identity),
            tags: [...info.tags, ...(mockInfo.info.tags)]
          }
          : info;
      }
    }
  });
}
