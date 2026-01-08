// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@pezkuwi/types/types';

import { typesBundleForPolkadot as typesBundleForPezkuwi } from '@laminar/type-definitions';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export default (typesBundleForPezkuwi as Record<string, Record<string, unknown>>).spec.laminar as OverrideBundleDefinition;
