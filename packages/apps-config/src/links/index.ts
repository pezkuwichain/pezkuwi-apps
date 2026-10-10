// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExternalDef } from './types.js';

// External explorers and dashboards by name, each listing the system.chain
// names it indexes. None indexes a Pezkuwi chain yet: explorer.pezkuwichain.io
// is a placeholder and treasury/governance redirect back to this app. A
// service is added here once it serves a Pezkuwi chain.
export const externalLinks: Record<string, ExternalDef> = {};
