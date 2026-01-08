// Copyright 2017-2026 @pezkuwi/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataDef } from '@pezkuwi/extension-inject/types';

export type ChainType = 'bizinikiwi' | 'ethereum';

// Omit chainType from MetadataDef to override with pezkuwi-specific type
export interface ChainInfo extends Omit<MetadataDef, 'chainType'> {
  color: string | undefined;
  chainType: ChainType;
}
