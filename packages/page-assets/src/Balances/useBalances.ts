// Copyright 2017-2026 @pezkuwi/app-assets authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletAssetsAssetAccount } from '@pezkuwi/types/lookup';
import type { Option } from '@pezkuwi/types-codec';
import type { BN } from '@pezkuwi/util';

import { useMemo } from 'react';

import { createNamedHook, useAccounts, useApi, useCall } from '@pezkuwi/react-hooks';

interface AccountResult {
  accountId: string;
  account: PalletAssetsAssetAccount;
}

interface Result {
  assetId: BN;
  accounts: AccountResult[];
}

function isOptional (value: PalletAssetsAssetAccount | Option<PalletAssetsAssetAccount>): value is Option<PalletAssetsAssetAccount> {
  return (value as Option<PalletAssetsAssetAccount>).isSome || (value as Option<PalletAssetsAssetAccount>).isNone;
}

const OPTS = {
  transform: ([[params], accounts]: [[[BN, string][]], (PalletAssetsAssetAccount | Option<PalletAssetsAssetAccount>)[]]): Result => ({
    accounts: params
      .map(([, accountId], index) => {
        const o = accounts[index];

        return {
          account: isOptional(o)
            ? o.unwrapOr(null)
            : o,
          accountId
        };
      })
      .filter((a): a is AccountResult =>
        !!a.account &&
        !a.account.balance.isZero()
      ),
    assetId: params[0][0]
  }),
  withParamsTransform: true
};

function useBalancesImpl (id?: BN | null): AccountResult[] | null {
  const { api } = useApi();
  const { allAccounts } = useAccounts();
  const keys = useMemo(
    () => [allAccounts.map((a) => [id, a]).filter((tup) => !!tup[0])],
    [allAccounts, id]
  );
  const query = useCall(keys && api.query.assets.account.multi, keys, OPTS);

  return (query && id && (query.assetId === id) && query.accounts) || null;
}

export default createNamedHook('useBalances', useBalancesImpl);
