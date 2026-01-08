// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@pezkuwi/types/types';

import { moonbeamDefinitions } from '@moonbeam-network/types-bundle';

// External package types, cast to proper type for compatibility
export default moonbeamDefinitions as OverrideBundleDefinition;
