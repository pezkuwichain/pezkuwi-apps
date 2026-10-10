// Copyright 2017-2026 @pezkuwi/test-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* global jest, fail */

import type { RenderResult } from '@testing-library/react';
import type { ApiProps } from '@pezkuwi/react-api/types';
import type { PartialQueueTxExtrinsic, QueueProps, QueueTxExtrinsicAdd } from '@pezkuwi/react-components/Status/types';
import type { AccountOverrides } from '../utils/accountDefaults.js';

import { queryByAttribute, render, screen } from '@testing-library/react';
import React, { Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PEZKUWI_GENESIS } from '@pezkuwi/apps-config';
import { AccountSidebar, lightTheme } from '@pezkuwi/react-components';
import { ApiCtx } from '@pezkuwi/react-hooks/ctx/Api';
import { KeyringCtxRoot } from '@pezkuwi/react-hooks/ctx/Keyring';
import { QueueCtx } from '@pezkuwi/react-hooks/ctx/Queue';
import { TypeRegistry } from '@pezkuwi/types/create';
import { keyring } from '@pezkuwi/ui-keyring';
import { BN } from '@pezkuwi/util';

import { alice, bob, charlie, ferdie } from '../keyring/index.js';
import { Table } from '../pagesElements/index.js';
import { mockAccountHooks } from '../utils/accountDefaults.js';

let queueExtrinsic: (value: PartialQueueTxExtrinsic) => void;

class NotYetRendered extends Error {
}

export abstract class Page {
  private renderResult?: RenderResult;
  protected readonly defaultAddresses = [alice, bob, charlie, ferdie];

  protected constructor (private readonly overview: React.ReactElement) {
    this.overview = overview;
  }

  render (accounts: [string, AccountOverrides][]): void {
    mockAccountHooks.setAccounts(accounts);

    accounts.forEach(([address, { meta }]) => {
      keyring.addExternal(address, meta);
    });

    const noop = () => Promise.resolve(() => { /**/ });
    const registry = new TypeRegistry();
    const api = {
      consts: {
        babe: {
          expectedBlockTime: new BN(1)
        },
        democracy: {
          enactmentPeriod: new BN(1)
        },
        proxy: {
          proxyDepositBase: new BN(1),
          proxyDepositFactor: new BN(1)
        },
        system: {
          ss58Prefix: new BN(42)
        }
      },
      createType: () => ({
        defKeys: []
      }),
      derive: {
        accounts: {
          info: noop
        },
        balances: {
          all: noop
        },
        chain: {
          bestNumber: noop
        },
        democracy: {
          locks: noop
        },
        staking: {
          account: noop
        }
      },
      genesisHash: registry.createType('Hash', PEZKUWI_GENESIS),
      query: {
        democracy: {
          votingOf: noop
        },
        identity: {
          identityOf: noop
        }
      },
      registry: {
        chainDecimals: [12],
        chainTokens: ['Unit'],
        createType: (...args: Parameters<typeof registry.createType>) =>
          registry.createType(...args),
        lookup: {
          names: []
        }
      },
      tx: {
        council: {},
        democracy: {
          delegate: noop
        },
        multisig: {
          approveAsMulti: Object.assign(noop, { meta: { args: [] } })
        },
        proxy: {
          removeProxies: noop
        },
        utility: noop
      }
    };
    const mockApi: ApiProps = {
      api,
      // identities live on the people chain; here both are the same mock
      apiIdentity: api,
      apiSystem: {
        ...api,
        isReady: Promise.resolve(api)
      },
      isApiConnected: true,
      isApiInitialized: true,
      isApiReady: true,
      isEthereum: false,
      systemName: 'bizinikiwi'
    } as unknown as ApiProps;

    queueExtrinsic = jest.fn() as QueueTxExtrinsicAdd;
    const queue = {
      queueExtrinsic
    } as QueueProps;

    this.renderResult = render(
      <>
        <div id='tooltips' />
        <Suspense fallback='...'>
          <QueueCtx.Provider value={queue}>
            <MemoryRouter>
              <ThemeProvider theme={lightTheme}>
                <ApiCtx.Provider value={mockApi}>
                  <KeyringCtxRoot>
                    <AccountSidebar>
                      {React.cloneElement(this.overview, { onStatusChange: noop }) }
                    </AccountSidebar>
                  </KeyringCtxRoot>
                </ApiCtx.Provider>
              </ThemeProvider>
            </MemoryRouter>
          </QueueCtx.Provider>
        </Suspense>
      </>
    );
  }

  async getTable (): Promise<Table> {
    this.assertRendered();

    return new Table(await screen.findByRole('table'));
  }

  /** All tables, in document order, for a page that splits its items over several */
  async getTables (): Promise<Table[]> {
    this.assertRendered();

    return (await screen.findAllByRole('table')).map((table) => new Table(table));
  }

  clearAccounts (): void {
    this.defaultAddresses.forEach((address) => keyring.forgetAccount(address));
  }

  getById (id: string | RegExp): HTMLElement | null {
    this.assertRendered();
    const getById = queryByAttribute.bind(null, 'id');

    return getById(this.renderResult?.container ?? fail('Page render failed'), id);
  }

  protected assertRendered (): void {
    if (this.renderResult === undefined) {
      throw new NotYetRendered();
    }
  }
}
