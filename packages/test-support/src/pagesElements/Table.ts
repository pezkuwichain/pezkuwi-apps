// Copyright 2017-2026 @pezkuwi/test-supports authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* global expect */

import { within } from '@testing-library/react';

import { showBalance } from '../utils/balance.js';
import { assertTextContent } from '../utils/domAssertions.js';
import { Row } from './Row.js';

export class Table {
  constructor (private readonly table: HTMLElement) {
    this.table = table;
  }

  async assertRowsOrder (balancesExpectedOrder: number[]): Promise<void> {
    const orderedRows = await this.getRows();

    for (let index = 0; index < orderedRows.length; index++) {
      const row = orderedRows[index];
      const expectedBalanceTextContent = showBalance(balancesExpectedOrder[index]);

      assertTextContent(await row.getBalanceSummary(), expectedBalanceTextContent);
    }
  }

  /**
   * An item (account, contact) spans the rows from one marked isFirst up to
   * the next: the main row, the total balance, and the expandable details
   */
  async getRows (): Promise<Row[]> {
    const items: HTMLElement[][] = [];

    for (const htmlRow of await this.getBodyRows()) {
      if (htmlRow.classList.contains('isFirst')) {
        items.push([htmlRow]);
      } else if (items.length) {
        items[items.length - 1].push(htmlRow);
      }
    }

    return items.map((rows) => {
      if (rows.length !== 3) {
        throw new Error(`Expected an item to span 3 rows, found ${rows.length}`);
      }

      return new Row(rows[0], rows[1], rows[2]);
    });
  }

  assertColumnNotExist (columnName: string): void {
    expect(within(this.table).queryByRole('columnheader', { name: columnName })).toBeFalsy();
  }

  assertColumnExists (columnName: string): void {
    expect(within(this.table).getByRole('columnheader', { name: columnName })).toBeTruthy();
  }

  async assertText (text: string): Promise<HTMLElement> {
    return within(this.table).findByText(text);
  }

  private async getBodyRows (): Promise<HTMLElement[]> {
    const tableBody = this.table.getElementsByTagName('tbody')[0];

    if (!tableBody) {
      return [];
    }

    // a collapsed details row is hidden, and still part of its item; rows of
    // tables nested in a cell (e.g. a badge popup) are not items
    return (await within(tableBody).findAllByRole('row', { hidden: true }))
      .filter((row) => row.parentElement === tableBody);
  }
}
