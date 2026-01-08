// Copyright 2017-2026 @pezkuwi/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import 'styled-components';

import type { ThemeDef } from '@pezkuwi/react-components/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: ThemeDef['theme'];
  }
}
