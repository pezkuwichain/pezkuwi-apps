// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@pezkuwi/types/types';

// Type bundles by runtime specName. The Pezkuwi and Zagros runtimes carry
// metadata v14+ and need none; a chain that does is added here, built into
// typesBundle.ts by `yarn build:typesBundle`.
const spec: Record<string, OverrideBundleDefinition> = {};

export default spec;
