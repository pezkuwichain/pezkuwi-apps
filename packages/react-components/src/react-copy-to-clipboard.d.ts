// Copyright 2017-2026 @pezkuwi/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Override react-copy-to-clipboard types for React 18 compatibility
declare module 'react-copy-to-clipboard' {
  import type { ReactNode, ReactElement } from 'react';

  interface Options {
    debug?: boolean;
    message?: string;
    format?: string;
  }

  interface Props {
    children?: ReactNode;
    text: string;
    onCopy?: (text: string, result: boolean) => void;
    options?: Options;
  }

  function CopyToClipboard(props: Props): ReactElement;

  export = CopyToClipboard;
}
