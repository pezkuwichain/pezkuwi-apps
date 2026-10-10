// Copyright 2017-2026 @pezkuwi/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { within } from '@testing-library/react';

import { Row } from '@pezkuwi/test-support/pagesElements';
import { assertTextContent } from '@pezkuwi/test-support/utils';

export class AccountRow extends Row {
  async assertParentAccountName (expectedParentAccount: string): Promise<void> {
    const parentAccount = await within(this.primaryRow).findByTestId('parent');

    assertTextContent(parentAccount, expectedParentAccount);
  }
}
