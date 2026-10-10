// Copyright 2017-2026 @pezkuwi/test-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { RegistryTypes } from '@pezkuwi/types/types';

import { TypeRegistry } from '@pezkuwi/types/create';
import lookupDefinitions from '@pezkuwi/types-augment/lookup/definitions';

// A registry that knows the runtime types by the names the app uses
// (PezpalletBountiesBountyStatus, PezpalletAllianceCid, ...). The static
// metadata in @pezkuwi/types-support predates the rename and only has the
// Pallet* names.
export function createLookupRegistry (): TypeRegistry {
  const registry = new TypeRegistry();

  // RegistryTypes does not model a struct's `_alias`, which the registry accepts
  registry.register(lookupDefinitions.types as RegistryTypes);

  return registry;
}
