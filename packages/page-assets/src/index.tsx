// Copyright 2017-2026 @pezkuwi/app-assets authors & contributors
// SPDX-License-Identifier: Apache-2.0

// augment package
import '@pezkuwi/api-augment/bizinikiwi';

import type { BN } from '@pezkuwi/util';

import React, { useMemo, useRef } from 'react';
import { Route, Routes } from 'react-router';

import { Tabs } from '@pezkuwi/react-components';
import { useAccounts, useAssetIds, useAssetInfos } from '@pezkuwi/react-hooks';
import { BN_ONE } from '@pezkuwi/util';

import Balances from './Balances/index.js';
import ForeignAssets from './foreignAssets/index.js';
import Overview from './Overview/index.js';
import { useTranslation } from './translate.js';
import { useForeignAssetInfos } from './useForeignAssetInfos.js';
import { useForeignAssetLocations } from './useForeignAssetLocations.js';

interface Props {
  basePath: string;
  className?: string;
}

function findOpenId (ids?: BN[]): BN {
  if (!ids?.length) {
    return BN_ONE;
  }

  const lastTaken = ids.find((id, index) =>
    index === 0
      ? !id.eq(BN_ONE)
      : !id.sub(BN_ONE).eq(ids[index - 1])
  );

  return lastTaken
    ? lastTaken.add(BN_ONE)
    : ids[ids.length - 1].add(BN_ONE);
}

function AssetApp ({ basePath, className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { hasAccounts } = useAccounts();
  const ids = useAssetIds();
  const infos = useAssetInfos(ids);

  const foreignAssetLocations = useForeignAssetLocations();
  const foreignAssetInfos = useForeignAssetInfos(foreignAssetLocations);

  const tabsRef = useRef([
    {
      isRoot: true,
      name: 'overview',
      text: t('Overview')
    },
    {
      name: 'foreignAssets',
      text: t('Foreign assets')
    },
    {
      name: 'balances',
      text: t('Balances')
    }
  ]);

  const showForeignAssetsTab = useMemo(() => !!foreignAssetLocations.length, [foreignAssetLocations.length]);
  const showBalancesTab = useMemo(() => hasAccounts && infos?.some(({ details, metadata }) => !!(details && metadata)), [hasAccounts, infos]);

  const hidden = useMemo(
    () =>
      [!showForeignAssetsTab && 'foreignAssets', !showBalancesTab && 'balances'].filter((a) => typeof a === 'string'),
    [showBalancesTab, showForeignAssetsTab]
  );

  const openId = useMemo(
    // Check if id is valid digit
    () => findOpenId(ids?.filter((id) => /^\d{1,3}(,\d{3})*$/.test(id.toString()))),
    [ids]
  );

  return (
    <main className={className}>
      <Tabs
        basePath={basePath}
        hidden={hidden}
        items={tabsRef.current}
      />
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Balances infos={infos} />
            }
            path='balances'
          />
          <Route
            element={
              <ForeignAssets
                foreignAssetInfos={foreignAssetInfos}
                locations={foreignAssetLocations}
              />
            }
            path='foreignAssets'
          />
          <Route
            element={
              <Overview
                ids={ids}
                infos={infos}
                openId={openId}
              />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(AssetApp);
