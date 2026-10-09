// Copyright 2017-2026 @pezkuwi/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import { formatBalance } from '@pezkuwi/util';

import { inputToBn } from './InputNumber.js';

function convert (input: string, unit: string, decimals: number): [string, boolean] {
  const [bn, isValid] = inputToBn(input, formatBalance.findSi(unit), 128, false, true, undefined, decimals);

  return [bn.toString(), isValid];
}

describe('inputToBn', (): void => {
  it('converts a decimal in the base unit', (): void => {
    expect(convert('1.5', '-', 12)).toEqual(['1500000000000', true]);
  });

  it('converts every decimal a smaller unit can carry', (): void => {
    expect(convert('1.123456789', 'm', 12)).toEqual(['1123456789', true]);
  });

  it('rejects more decimals than the unit can carry instead of scaling them up', (): void => {
    // the exponent would be 9 - 10 = -1, and BN computes 10 ** -1 as 10
    expect(convert('1.1234567890', 'm', 12)).toEqual(['-1', false]);
  });

  it('keeps decimals beyond the chain decimals for an asset with more', (): void => {
    expect(convert('1.0000000000001', '-', 18)).toEqual(['1000000000000100000', true]);
  });
});
