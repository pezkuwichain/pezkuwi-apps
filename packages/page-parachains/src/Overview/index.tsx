// Copyright 2017-2026 @pezkuwi/app-teyrchains authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ParaId } from '@pezkuwi/types/interfaces';
import type { LeasePeriod, Proposals, QueuedAction } from '../types.js';

import React from 'react';

import Summary from './Summary.js';
import Teyrchains from './Teyrchains.js';

interface Props {
  actionsQueue: QueuedAction[];
  className?: string;
  leasePeriod?: LeasePeriod;
  paraIds?: ParaId[];
  proposals?: Proposals;
  threadIds?: ParaId[];
  upcomingIds?: ParaId[];
}

function Overview ({ actionsQueue, className, leasePeriod, paraIds, proposals, threadIds }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      <Summary
        leasePeriod={leasePeriod}
        proposalCount={proposals?.proposalIds.length}
        teyrchainCount={paraIds?.length}
        upcomingCount={threadIds?.length}
      />
      <Teyrchains
        actionsQueue={actionsQueue}
        ids={paraIds}
        leasePeriod={leasePeriod}
        scheduled={proposals?.scheduled}
      />
    </div>
  );
}

export default React.memo(Overview);
