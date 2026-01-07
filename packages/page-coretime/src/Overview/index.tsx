// Copyright 2017-2026 @pezkuwi/app-coretime authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { RelayName } from '../types.js';

import React from 'react';

import { useCoretimeContext } from '../CoretimeContext.js';
import TeyrchainsTable from '../TeyrchainsTable.js';
import Summary from './Summary.js';

interface Props {
  className?: string;
  relayName: RelayName
}

function Overview ({ className, relayName }: Props): React.ReactElement<Props> {
  const { coretimeInfo } = useCoretimeContext();

  return (
    <main className={className}>
      {coretimeInfo && (
        <Summary
          config={coretimeInfo?.config}
          region={coretimeInfo?.region}
          relayName={relayName}
          saleInfo={coretimeInfo?.salesInfo}
          status={coretimeInfo?.status}
          teyrchainCount={coretimeInfo.taskIds?.length || 0}
        />
      )}
      {!!coretimeInfo &&
        <TeyrchainsTable
          coretimeInfo={coretimeInfo}
          relayName={relayName}
        />
      }
    </main>
  );
}

export default React.memo(Overview);
