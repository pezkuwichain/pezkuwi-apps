// Copyright 2017-2026 @pezkuwi/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletDemocracyVoteVoting } from '@pezkuwi/types/lookup';

import { useAccounts, useApi, useCall } from '@pezkuwi/react-hooks';

import { createNamedHook } from './createNamedHook.js';

function useDelegationsImpl (): PalletDemocracyVoteVoting[] | undefined {
  const { api } = useApi();
  const { allAccounts } = useAccounts();

  return useCall<PalletDemocracyVoteVoting[]>(api.query.democracy?.votingOf?.multi, [allAccounts]);
}

export const useDelegations = createNamedHook('useDelegations', useDelegationsImpl);
