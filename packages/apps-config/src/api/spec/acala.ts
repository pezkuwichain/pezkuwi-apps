// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@pezkuwi/types/types';

import { typesBundleForPolkadot as typesBundleForPezkuwi } from '@acala-network/type-definitions';

// External package types, cast to proper type for compatibility
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export default ((typesBundleForPezkuwi as Record<string, unknown>).spec || {}) as Record<string, OverrideBundleDefinition>;
