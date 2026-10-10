// Copyright 2017-2026 @pezkuwi/test-supports authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* global expect */

import type { Balance } from '@pezkuwi/types/interfaces';

import { fireEvent, screen, within } from '@testing-library/react';

import { format } from '../utils/balance.js';
import { assertTextContent } from '../utils/domAssertions.js';
import { Sidebar } from './Sidebar.js';

// utility wrapper over an account item in accounts table, serves basic assertions about an account row
export class Row {
  public primaryRow: HTMLElement;
  public detailsRow: HTMLElement;

  constructor (primaryRow: HTMLElement, detailsRow: HTMLElement) {
    this.primaryRow = primaryRow;
    this.detailsRow = detailsRow;
  }

  async assertBalancesTotal (expectedTotalBalance: Balance): Promise<void> {
    const actualBalanceText = await this.getBalanceSummary();
    const expectedBalanceText = format(expectedTotalBalance);

    assertTextContent(actualBalanceText, expectedBalanceText);
  }

  async getBalanceSummary (): Promise<HTMLElement> {
    return within(this.primaryRow).findByTestId('balance-summary');
  }

  async assertAccountName (expectedName: string): Promise<void> {
    const accountName = await this.getAccountName();

    assertTextContent(accountName, expectedName);
  }

  async assertBalancesDetails (expectedBalanceComponents: { name: string, amount: Balance }[]): Promise<void> {
    for (const { amount, name } of expectedBalanceComponents) {
      await this.assertBalanceComponent({ amount, name });
    }
  }

  async assertBadge (expectedBadgeName: string): Promise<void> {
    await within(this.primaryRow).findByTestId(expectedBadgeName);
  }

  assertNoBadge (badgeName: string): void {
    expect(within(this.primaryRow).queryByTestId(badgeName)).toBeFalsy();
  }

  async assertTags (expectedTagsContent: string): Promise<void> {
    const actualTags = await within(this.detailsRow).findByTestId('tags');

    assertTextContent(actualTags, expectedTagsContent);
  }

  async assertShortAddress (expectedShortAddress: string): Promise<void> {
    const actualShortAddress = await within(this.primaryRow).findByTestId('short-address');

    assertTextContent(actualShortAddress, expectedShortAddress);
  }

  async expand (): Promise<void> {
    const toggle = await within(this.primaryRow).findByTestId('row-toggle');

    fireEvent.click(toggle);
  }

  async getBadge (expectedBadgeName: string): Promise<HTMLElement> {
    return within(this.primaryRow).findByTestId(`${expectedBadgeName}-badge`);
  }

  async openSidebar (): Promise<Sidebar> {
    const accountName = await this.getAccountName();

    fireEvent.click(accountName);

    return new Sidebar(await screen.findByTestId('account-sidebar'));
  }

  private async assertBalanceComponent (expectedBalanceComponent: { name: string; amount: Balance }): Promise<void> {
    const balanceElement = await this.getBalanceElementByLabelName(expectedBalanceComponent.name);
    const balanceText = format(expectedBalanceComponent.amount);

    assertTextContent(balanceElement, balanceText);
  }

  private async getBalanceElementByLabelName (labelName: string): Promise<ChildNode | null> {
    const labelElement = await within(this.detailsRow).findByText(labelName);

    return labelElement.nextSibling;
  }

  private getAccountName (): Promise<HTMLElement> {
    return within(this.primaryRow).findByTestId('account-name');
  }
}
