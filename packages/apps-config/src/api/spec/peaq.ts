// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@pezkuwi/types/types';

import { typesBundleForPolkadot as typesBundleForPezkuwi } from '@peaqnetwork/type-definitions';

export default (typesBundleForPezkuwi as { spec: { peaq: OverrideBundleDefinition } }).spec.peaq;
