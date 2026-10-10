// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition, OverrideBundleType } from '@pezkuwi/types/types';

// Custom derives travel outside typesBundle.ts (the generator drops them, as
// they are functions): a spec with derives is listed here against the
// specNames it applies to. None of the Pezkuwi chains needs one.
const mapping: [OverrideBundleDefinition, string[]][] = [];

export function applyDerives (typesBundle: OverrideBundleType): OverrideBundleType {
  mapping.forEach(([{ derives }, chains]): void => {
    chains.forEach((chain): void => {
      if (typesBundle.spec?.[chain]) {
        typesBundle.spec[chain].derives = derives;
      }
    });
  });

  return typesBundle;
}
