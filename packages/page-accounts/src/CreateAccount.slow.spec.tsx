// Copyright 2017-2026 @pezkuwi/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import '@pezkuwi/react-components/i18n';

import { cleanup, configure, fireEvent, getConfig, render, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AccountsApp from '@pezkuwi/app-accounts';
import { ApiCtxRoot } from '@pezkuwi/react-api';
import { statics } from '@pezkuwi/react-api/statics';
import { lightTheme } from '@pezkuwi/react-components';
import { KeyringCtxRoot } from '@pezkuwi/react-hooks/ctx/Keyring';
import { assertDevNode, BIZINIKIWI_PORT } from '@pezkuwi/test-support/bizinikiwi';
import { MemoryStore } from '@pezkuwi/test-support/keyring';
import { WaitForApi } from '@pezkuwi/test-support/react';
import { settings } from '@pezkuwi/ui-settings';

// the Account button only shows when accounts can be stored
settings.set({ ...settings.get(), storage: 'on' });

function noop (): void {
  // do nothing
}

const renderAccounts = () => {
  const memoryStore = new MemoryStore();

  return render(
    <MemoryRouter initialEntries={['/accounts']}>
      <ThemeProvider theme={lightTheme}>
        <ApiCtxRoot
          apiUrl={`ws://127.0.0.1:${BIZINIKIWI_PORT}`}
          store={memoryStore}
        >
          <WaitForApi>
            <KeyringCtxRoot>
              <div>
                <AccountsApp
                  basePath='/accounts'
                  onStatusChange={noop}
                />
              </div>
            </KeyringCtxRoot>
          </WaitForApi>
        </ApiCtxRoot>
      </ThemeProvider>
    </MemoryRouter>
  );
};

describe('--SLOW--: Account Create', () => {
  // every step waits on a live chain and a page that draws once the api and
  // keyring are ready, which takes longer than the 1s default on a busy machine
  let asyncUtilTimeout: number;

  beforeAll(async () => {
    await assertDevNode();
    asyncUtilTimeout = getConfig().asyncUtilTimeout;
    configure({ asyncUtilTimeout: 20_000 });
  });

  // each render opens its own connection, and an open one keeps the process alive
  afterEach(async () => {
    cleanup();
    await statics.api.disconnect();
  });

  afterAll(() => {
    configure({ asyncUtilTimeout });
  });

  it('created account is added to list', async () => {
    const { findByRole, findByTestId, findByText, queryByText } = renderAccounts();

    fireEvent.click(await findByRole('button', { name: 'Account' }));

    const isSeedSavedCheckbox = await findByText('I have saved my mnemonic seed safely');
    const hiddenCheckbox = isSeedSavedCheckbox as HTMLInputElement;

    fireEvent.click(hiddenCheckbox);

    const nextStepButton = await findByText('Next', {});

    fireEvent.click(nextStepButton);

    const accountNameInput = await findByTestId('name');

    fireEvent.change(accountNameInput, { target: { value: 'my new account' } });

    const passwordInput = await findByTestId('password');

    fireEvent.change(passwordInput, { target: { value: 'password' } });

    const passwordInput2 = await findByTestId('password (repeat)');

    fireEvent.change(passwordInput2, { target: { value: 'password' } });

    const toStep3Button = await findByText('Next', {});

    fireEvent.click(toStep3Button);

    const createAnAccountButton = await findByText('Save', {});

    fireEvent.click(createAnAccountButton);

    await waitForElementToBeRemoved(() => queryByText('Add an account via seed 3/3'));

    expect(await findByText('MY NEW ACCOUNT')).toBeTruthy();
  });

  it('gives an error message when entering invalid derivation path', async () => {
    const { findByRole, findByTestId, findByText } = renderAccounts();

    fireEvent.click(await findByRole('button', { name: 'Account' }));

    const showAdvancedOptionsButton = await findByText('Advanced creation options', {});

    fireEvent.click(showAdvancedOptionsButton);

    const derivationPathInput = await findByTestId('secret derivation path', {});

    fireEvent.change(derivationPathInput, { target: { value: '//abc//' } });

    const errorMsg = await findByText('Unable to match provided value to a secret URI', {});

    expect(errorMsg).toBeTruthy();
  });
});
