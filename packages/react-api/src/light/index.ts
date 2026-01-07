// Copyright 2017-2026 @pezkuwi/react-api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { WellKnownChain } from '@bizinikiwi/connect';

import { specs as dicle } from './dicle/index.js';
import { specs as pezkuwi } from './pezkuwi/index.js';

export const lightSpecs: Record<string, Record<string, string>> =
  Object
    .entries({ dicle, pezkuwi })
    .reduce((all: Record<string, Record<string, string>>, [r, v]) => {
      all[r] = v.reduce((specs: Record<string, string>, k) => {
        specs[k] = `./light/${r}/${k}.json`;

        return specs;
      }, {});

      return all;
    }, {});

export const relaySpecs: Record<string, string> = {
  dicle: WellKnownChain.ksmcc3,
  pezkuwi: WellKnownChain.pezkuwi,
  pezkuwichain: WellKnownChain.pezkuwichain_v2_2,
  zagros: WellKnownChain.zagros2
};
