// Copyright 2017-2026 @pezkuwi/react-query authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '@pezkuwi/types';
import type { PezpalletBrokerStatusRecord } from '@pezkuwi/types/lookup';

import React from 'react';

import { useApi, useCall } from '@pezkuwi/react-hooks';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function PoolSize ({ children, className = '' }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const status = useCall<Option<PezpalletBrokerStatusRecord>>(api.query.broker?.status);
  const record = status?.unwrapOr(null);
  const poolSize = record
    ? record.systemPoolSize.add(record.privatePoolSize).toString()
    : '0';

  return (
    <div className={className}>
      {poolSize}
      {children}
    </div>
  );
}

export default React.memo(PoolSize);
