// Copyright 2017-2025 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExternalDef } from './types.js';

import { CereStats } from './cerestats.js';
import { Commonwealth } from './commonwealth.js';
import { Edgscan } from './edgscan.js';
import { Heztreasury } from './heztreasury.js';
import { KodaDot } from './kodadot.js';
import { MoonbeamApps } from './moonbeamApps.js';
import { PezkuwiassemblyIo, PezkuwiassemblyNetwork } from './pezkuwiassembly.js';
import { Statescan } from './statescan.js';
import { SubId } from './subid.js';
import { Subscan } from './subscan.js';
import { Subsquare } from './subsquare.js';

export const externalLinks: Record<string, ExternalDef> = {
  CereStats,
  Commonwealth,
  Edgscan,
  Heztreasury,
  KodaDot,
  MoonbeamApps,
  PezkuwiassemblyIo,
  PezkuwiassemblyNetwork,
  Statescan,
  SubId,
  Subscan,
  Subsquare
};
