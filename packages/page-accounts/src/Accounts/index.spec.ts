// Copyright 2017-2026 @pezkuwi/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import type { AddressFlags } from '@pezkuwi/react-hooks/types';
import type { Table } from '@pezkuwi/test-support/pagesElements';
import type { u32 } from '@pezkuwi/types';
import type { AccountId, Multisig, ProxyDefinition, Timepoint, Voting, VotingDelegating } from '@pezkuwi/types/interfaces';
import type { AccountRow } from '../../test/pageElements/AccountRow.js';

import { fireEvent, screen, waitFor, within } from '@testing-library/react';

import { PEZKUWI_GENESIS } from '@pezkuwi/apps-config';
import i18next from '@pezkuwi/react-components/i18n';
import { anAccountWithBalance, anAccountWithBalanceAndMeta, anAccountWithInfo, anAccountWithInfoAndMeta, anAccountWithMeta, anAccountWithStaking } from '@pezkuwi/test-support/creation/account';
import { makeStakingLedger as ledger } from '@pezkuwi/test-support/creation/staking';
import { alice, bob, MemoryStore } from '@pezkuwi/test-support/keyring';
import { assertHasClass, assertNotHasClass, assertTextContent, balance, mockApiHooks, showBalance } from '@pezkuwi/test-support/utils';
import { TypeRegistry } from '@pezkuwi/types/create';
import { keyring } from '@pezkuwi/ui-keyring';
import { BN } from '@pezkuwi/util';

import { mockAccountsPageHooks } from '../../test/mockAccountsPageHooks.js';

await mockAccountsPageHooks();

const { AccountsPage } = await import('../../test/pages/accountsPage.js');

// the totals always shown; bonded, redeemable and unbonding only when non-zero
const SUMMARY_TOTALS = ['card-summary:total balance', 'card-summary:total transferable', 'card-summary:total locked'];

describe('Accounts page', () => {
  let accountsPage: InstanceType<typeof AccountsPage>;

  beforeAll(async () => {
    await i18next.changeLanguage('en');

    if (keyring.getAccounts().length === 0) {
      keyring.loadAll({ isDevelopment: true, store: new MemoryStore() });
    }
  });

  beforeEach(() => {
    accountsPage = new AccountsPage();
    accountsPage.clearAccounts();
  });

  describe('when no accounts', () => {
    beforeEach(() => {
      accountsPage.render([]);
    });

    // eslint-disable-next-line jest/expect-expect
    it('shows sort-by controls', async () => {
      await accountsPage.reverseSortingOrder();
    });

    it('shows a table', async () => {
      const accountsTable = await accountsPage.getTable();

      expect(accountsTable).not.toBeNull();
    });

    it('the accounts table contains no account rows', async () => {
      const accountRows = await accountsPage.getAccountRows();

      expect(accountRows).toHaveLength(0);
    });

    it('the accounts table contains a message about no accounts available', async () => {
      const noAccountsMessage = 'You don\'t have any accounts. Some features are currently hidden and will only become available once you have accounts.';
      const accountsTable = await accountsPage.getTable();

      await accountsTable.assertText(noAccountsMessage);
    });

    it('the summary shows placeholders, and no staking totals', async () => {
      const summaries = await screen.findAllByTestId(/card-summary:/i);

      expect(summaries.map((s) => s.dataset.testid)).toEqual(SUMMARY_TOTALS);
      summaries.forEach((s) => assertHasClass(s.querySelector('.ui--FormatBalance'), '--tmp'));
    });
  });

  describe('when some accounts exist', () => {
    it('the accounts table contains some account rows', async () => {
      accountsPage.renderDefaultAccounts(2);
      const accountRows = await accountsPage.getAccountRows();

      expect(accountRows).toHaveLength(2);
    });

    // eslint-disable-next-line jest/expect-expect
    it('account rows display the total balance info', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithBalance({ freeBalance: balance(500) }),
        anAccountWithBalance({ freeBalance: balance(200), reservedBalance: balance(150) })
      );

      const rows = await accountsPage.getAccountRows();

      await rows[0].assertBalancesTotal(balance(500));
      await rows[1].assertBalancesTotal(balance(350));
    });

    // eslint-disable-next-line jest/expect-expect
    it('account rows display the details balance info', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithBalance({ freeBalance: balance(500), lockedBalance: balance(30) }),
        anAccountWithBalance({ availableBalance: balance(50), freeBalance: balance(200), reservedBalance: balance(150) })
      );

      const rows = await accountsPage.getAccountRows();

      await rows[0].assertBalancesDetails([
        { amount: balance(0), name: 'transferable' },
        { amount: balance(30), name: 'locked' }]);
      await rows[1].assertBalancesDetails([
        { amount: balance(50), name: 'transferable' },
        { amount: balance(150), name: 'reserved' }]);
    });

    it('derived account displays parent account info', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithMeta({ isInjected: true, name: 'ALICE', whenCreated: 200 }),
        anAccountWithMeta({ name: 'ALICE_CHILD', parentAddress: alice, whenCreated: 300 })
      );

      const accountRows = await accountsPage.getAccountRows();

      expect(accountRows).toHaveLength(2);
      await accountRows[1].assertParentAccountName('ALICE');
    });

    it('parent and type are not separate columns, the type is in the row details', async () => {
      accountsPage.renderDefaultAccounts(1);
      const accountsTable = await accountsPage.getTable();
      const rows = await accountsTable.getRows();

      accountsTable.assertColumnNotExist('parent');
      accountsTable.assertColumnNotExist('type');
      assertTextContent(rows[0].detailsRow, /account type ?qr/);
    });

    it('account rows display the address', async () => {
      accountsPage.renderAccountsForAddresses(
        alice
      );
      const accountRows = await accountsPage.getAccountRows();

      expect(accountRows).toHaveLength(1);
      // shown in full, shortened by css
      await accountRows[0].assertShortAddress(alice);
    });

    // eslint-disable-next-line jest/expect-expect
    it('when account is not tagged, account row details displays none info', async () => {
      accountsPage.renderDefaultAccounts(1);
      const rows = await accountsPage.getAccountRows();

      await rows[0].assertTags('none');
    });

    // eslint-disable-next-line jest/expect-expect
    it('when account is tagged, account row details displays tags', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithInfo({ tags: ['my tag', 'Super Tag'] })
      );

      const rows = await accountsPage.getAccountRows();

      await rows[0].assertTags('my tagSuper Tag');
    });

    it('account details rows toggled on icon toggle click', async () => {
      accountsPage.renderDefaultAccounts(1);
      const row = (await accountsPage.getAccountRows())[0];

      assertHasClass(row.detailsRow, 'isCollapsed');

      row.expand();

      assertHasClass(row.detailsRow, 'isExpanded');
    });

    it('displays the summary totals, not placeholders', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithBalance({ freeBalance: balance(500) }),
        anAccountWithBalance({ freeBalance: balance(200), reservedBalance: balance(150) })
      );

      await waitFor(async () => {
        const summaries = await screen.findAllByTestId(/card-summary:total \w+/i);

        expect(summaries.map((s) => s.dataset.testid)).toEqual(SUMMARY_TOTALS);
        summaries.forEach((s) => assertNotHasClass(s.querySelector('.ui--FormatBalance'), '--tmp'));
      });
    });

    it('displays balance summary', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithBalance({ freeBalance: balance(500) }),
        anAccountWithBalance({ freeBalance: balance(200), reservedBalance: balance(150) })
      );

      const summary = await screen.findByTestId(/card-summary:(total )?balance/i);

      assertTextContent(summary, showBalance(500 + 200 + 150));
    });

    it('displays transferable summary', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithBalance({ availableBalance: balance(400) }),
        anAccountWithBalance({ availableBalance: balance(600) })
      );

      const summary = await screen.findByTestId(/card-summary:(total )?transferable/i);

      assertTextContent(summary, showBalance(400 + 600));
    });

    it('displays locked summary', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithBalance({ lockedBalance: balance(400) }),
        anAccountWithBalance({ lockedBalance: balance(600) })
      );

      const summary = await screen.findByTestId(/card-summary:(total )?locked/i);

      assertTextContent(summary, showBalance(400 + 600));
    });

    it('displays bonded summary', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithStaking({ stakingLedger: ledger(balance(70)) }),
        anAccountWithStaking({ stakingLedger: ledger(balance(20)) })
      );

      const summary = await screen.findByTestId(/card-summary:(total )?bonded/i);

      assertTextContent(summary, showBalance(70 + 20));
    });

    it('displays unbonding summary', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithStaking({
          unlocking: [
            {
              remainingEras: new BN('1000000000'),
              value: balance(200)
            },
            {
              remainingEras: new BN('2000000000'),
              value: balance(300)
            },
            {
              remainingEras: new BN('3000000000'),
              value: balance(400)
            }
          ]
        }),
        anAccountWithStaking({
          unlocking: [
            {
              remainingEras: new BN('1000000000'),
              value: balance(100)
            },
            {
              remainingEras: new BN('2000000000'),
              value: balance(200)
            },
            {
              remainingEras: new BN('3000000000'),
              value: balance(300)
            }
          ]
        })
      );

      const summary = await screen.findByTestId(/card-summary:(total )?unbonding/i);

      assertTextContent(summary, showBalance(200 + 300 + 400 + 100 + 200 + 300));
    });

    it('displays redeemable summary', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithStaking({ redeemable: balance(4000) }),
        anAccountWithStaking({ redeemable: balance(5000) })
      );

      const summary = await screen.findByTestId(/card-summary:(total )?redeemable/i);

      assertTextContent(summary, showBalance(4000 + 5000));
    });

    it('sorts accounts by date by default', async () => {
      accountsPage.renderAccountsWithDefaultAddresses(
        anAccountWithBalanceAndMeta({ freeBalance: balance(1) }, { whenCreated: 200 }),
        anAccountWithBalanceAndMeta({ freeBalance: balance(2) }, { whenCreated: 300 }),
        anAccountWithBalanceAndMeta({ freeBalance: balance(3) }, { whenCreated: 100 })
      );
      assertTextContent(await accountsPage.getCurrentSortCategory(), 'date');

      const accountsTable = await accountsPage.getTable();

      await accountsTable.assertRowsOrder([3, 1, 2]);
    });

    // the page sorts within each account group, so all three share a group
    describe('when sorting is used', () => {
      let accountsTable: Table;

      beforeEach(async () => {
        accountsPage.renderAccountsWithDefaultAddresses(
          anAccountWithBalanceAndMeta({ freeBalance: balance(1) }, { isInjected: true, name: 'bbb', whenCreated: 200 }),
          anAccountWithBalanceAndMeta({ freeBalance: balance(2) }, { isInjected: true, name: 'bb', parentAddress: alice, whenCreated: 300 }),
          anAccountWithBalanceAndMeta({ freeBalance: balance(3) }, { isInjected: true, name: 'aaa', whenCreated: 100 })
        );

        accountsTable = await accountsPage.getTable();
      });

      it('changes default dropdown value', async () => {
        await accountsPage.sortBy('balances');
        assertTextContent(await accountsPage.getCurrentSortCategory(), 'balances');
      });

      it('sorts by parent if asked', async () => {
        await accountsPage.sortBy('parent');
        await accountsTable.assertRowsOrder([3, 1, 2]);
      });

      it('sorts by name if asked', async () => {
        await accountsPage.sortBy('name');
        await accountsTable.assertRowsOrder([3, 2, 1]);
      });

      it('sorts by date if asked', async () => {
        await accountsPage.sortBy('date');
        await accountsTable.assertRowsOrder([3, 1, 2]);
      });

      it('sorts by balances if asked', async () => {
        await accountsPage.sortBy('balances');
        await accountsTable.assertRowsOrder([1, 2, 3]);
      });

      it('implements stable sort', async () => {
        await accountsPage.sortBy('name');
        await accountsTable.assertRowsOrder([3, 2, 1]);
        await accountsPage.sortBy('balances');
        await accountsTable.assertRowsOrder([1, 2, 3]);
      });

      it('respects reverse button', async () => {
        await accountsPage.sortBy('name');
        await accountsTable.assertRowsOrder([3, 2, 1]);
        await accountsPage.sortBy('balances');
        await accountsTable.assertRowsOrder([1, 2, 3]);
        await accountsPage.reverseSortingOrder();
        await accountsTable.assertRowsOrder([3, 2, 1]);
        await accountsPage.sortBy('name');
        await accountsTable.assertRowsOrder([1, 2, 3]);
      });
    });
  });

  describe('badges', () => {
    let accountRows: AccountRow[];

    beforeEach(() => {
      mockApiHooks.setMultisigApprovals([
        [new TypeRegistry().createType('Hash', PEZKUWI_GENESIS), {
          approvals: [bob as unknown as AccountId],
          deposit: balance(927000000000000),
          depositor: bob as unknown as AccountId,
          when: { height: new BN(1190) as u32, index: new BN(1) as u32 } as Timepoint
        } as Multisig
        ]
      ]);
      mockApiHooks.setDelegations([{ asDelegating: { target: bob as unknown as AccountId } as unknown as VotingDelegating, isDelegating: true } as Voting]);
      mockApiHooks.setProxies([[[{ delegate: alice as unknown as AccountId, proxyType: { isAny: true, isGovernance: true, isNonTransfer: true, isStaking: true, toNumber: () => 1 } } as unknown as ProxyDefinition], new BN(1)]]);
    });

    describe('when genesis hash is not set', () => {
      beforeEach(async () => {
        accountsPage.renderAccountsWithDefaultAddresses(
          anAccountWithInfoAndMeta({ flags: { isDevelopment: true } as AddressFlags }, { name: 'alice' }),
          anAccountWithMeta({ name: 'bob' })
        );
        accountRows = await accountsPage.getAccountRows();
      });

      describe('when isDevelopment flag', () => {
        let aliceRow: AccountRow;

        beforeEach(async () => {
          aliceRow = accountRows[0];
          await aliceRow.assertAccountName('ALICE');
        });

        it('the development badge is displayed', async () => {
          await aliceRow.assertBadge('wrench-badge');
        });

        it('the all networks badge is not displayed', () => {
          aliceRow.assertNoBadge('exclamation-triangle-badge');
        });

        it('the regular badge is not displayed', () => {
          aliceRow.assertNoBadge('transparent-badge');
        });
      });

      describe('when no isDevelopment flag', () => {
        let bobRow: AccountRow;

        beforeEach(async () => {
          bobRow = accountRows[1];
          await bobRow.assertAccountName('BOB');
        });

        it('the development badge is not displayed', () => {
          bobRow.assertNoBadge('wrench-badge');
        });

        it('the all networks badge is displayed', async () => {
          await bobRow.assertBadge('exclamation-triangle-badge');
        });

        it('the regular badge is not displayed', () => {
          bobRow.assertNoBadge('transparent-badge');
        });
      });
    });

    describe('when genesis hash set', () => {
      beforeEach(async () => {
        accountsPage.renderAccountsWithDefaultAddresses(
          anAccountWithInfoAndMeta({ flags: { isDevelopment: true } as AddressFlags }, { genesisHash: '0x1234', name: 'charlie' })
        );
        accountRows = await accountsPage.getAccountRows();
      });

      // eslint-disable-next-line jest/expect-expect
      it('the development badge is not displayed', () => {
        accountRows[0].assertNoBadge('wrench-badge');
      });

      // eslint-disable-next-line jest/expect-expect
      it('the all networks badge is not displayed', () => {
        accountRows[0].assertNoBadge('exclamation-triangle-badge');
      });

      // eslint-disable-next-line jest/expect-expect
      it('the regular badge is displayed', async () => {
        await accountRows[0].assertBadge('badge');
      });
    });

    describe('show popups', () => {
      beforeEach(async () => {
        accountsPage.renderAccountsWithDefaultAddresses(
          anAccountWithInfoAndMeta({ flags: { isDevelopment: true, isMultisig: true } as AddressFlags }, { name: 'alice', who: [] })
        );
        accountRows = await accountsPage.getAccountRows();
      });

      // eslint-disable-next-line jest/expect-expect
      it('development', async () => {
        const badgePopup = await openBadgePopup('wrench-badge');

        await within(badgePopup).findByText('This is a development account derived from the known development seed. Do not use for any funds on a non-development network.');
      });

      it('multisig approvals', async () => {
        const badgePopup = await openBadgePopup('file-signature-badge');
        const approvalsModalToggle = await within(badgePopup).findByText('View pending approvals');

        fireEvent.click(approvalsModalToggle);
        const modal = await screen.findByTestId('modal');

        within(modal).getByText('Pending call hashes');
        assertHasClass(approvalsModalToggle, 'purpleColor');
      });

      it('delegate democracy vote', async () => {
        const badgePopup = await openBadgePopup('calendar-check-badge');
        const delegateModalToggle = await within(badgePopup).findByText('Manage delegation');

        fireEvent.click(delegateModalToggle);
        const modal = await screen.findByTestId('modal');

        within(modal).getByText('democracy vote delegation');
        assertHasClass(delegateModalToggle, 'normalColor');
      });

      it('proxy overview', async () => {
        const badgePopup = await openBadgePopup('sitemap-badge');
        const proxyOverviewToggle = await within(badgePopup).findByText('Manage proxies');

        fireEvent.click(proxyOverviewToggle);
        const modal = await screen.findByTestId('modal');

        within(modal).getByText('Proxy overview');
        assertHasClass(proxyOverviewToggle, 'normalColor');
      });

      afterEach(() => {
        mockApiHooks.setMultisigApprovals([]);
      });
    });

    // a badge renders its popup while hovered
    async function openBadgePopup (badgeTestId: string): Promise<HTMLElement> {
      const badge = await within(accountRows[0].primaryRow).findByTestId(badgeTestId);

      fireEvent.mouseEnter(badge);

      return waitFor(() => {
        const badgePopup = accountsPage.getById(new RegExp(`^${badgeTestId}-hover-`));

        if (!badgePopup) {
          throw new Error(`${badgeTestId} popup should be found`);
        }

        return badgePopup;
      });
    }
  });
});
