// Copyright 2017-2025 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@pezkuwi/types/types';

import { typesBundleForPezkuwi } from '@pendulum-chain/type-definitions';

export default (typesBundleForPezkuwi as { spec: { pendulum: OverrideBundleDefinition } }).spec.pendulum;
