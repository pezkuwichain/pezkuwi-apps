// Copyright 2017-2026 @pezkuwi/react-api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BaseProps } from '../types.js';
import type { DefaultProps, Options } from './types.js';

import React from 'react';

import withCall from './call.js';

interface Props<T> extends BaseProps<T> {
  callResult?: T;
}

export default function withCallDiv<T> (endpoint: string, options: Options = {}) {
  return (render: (value?: T) => React.ReactNode, defaultProps: DefaultProps = {}): React.ComponentType<any> => {
    function Inner ({ callResult, callUpdated, children, className = defaultProps.className, label = '' }: any): React.ReactElement<Props<T>> {
      return (
        <div
          {...defaultProps}
          className={[className || '', callUpdated ? 'rx--updated' : undefined].join(' ')}
        >
          {label}{render(callResult as T)}{children}
        </div>
      );
    }

    return withCall(endpoint, { ...options, propName: 'callResult' })(Inner);
  };
}
