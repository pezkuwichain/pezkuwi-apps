// Copyright 2017-2026 @pezkuwi/test-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash } from '@pezkuwi/types/interfaces';

import { PEZKUWI_GENESIS } from '@pezkuwi/apps-config';
import { TypeRegistry } from '@pezkuwi/types/create';

export function aGenesisHash (): Hash {
  return new TypeRegistry().createType('Hash', PEZKUWI_GENESIS);
}

export function aHash (): Hash {
  return new TypeRegistry().createType('Hash');
}
