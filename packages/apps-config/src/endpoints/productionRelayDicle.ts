// Copyright 2017-2025 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { DICLE_GENESIS } from '../api/constants.js';
import { getTeleports } from './util.js';

// Dicle Network Endpoints (Canary Network)
// Dicle is the canary network for Pezkuwi

export const prodParasDicle: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://pezkuwichain.io',
    info: 'asset-hub-dicle',
    isPeopleForIdentity: true,
    paraId: 1000,
    providers: {
      'Pezkuwi Foundation': 'wss://dicle-asset-hub-rpc.pezkuwichain.io'
    },
    relayName: 'dicle',
    text: 'Asset Hub',
    ui: {
      color: '#f47738',
      logo: 'chainsDicleSVG'
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'bridge-hub-dicle',
    paraId: 1002,
    providers: {
      'Pezkuwi Foundation': 'wss://dicle-bridge-hub-rpc.pezkuwichain.io'
    },
    relayName: 'dicle',
    text: 'Bridge Hub',
    ui: {
      color: '#f47738',
      logo: 'chainsDicleSVG'
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'collectives-dicle',
    paraId: 1001,
    providers: {
      'Pezkuwi Foundation': 'wss://dicle-collectives-rpc.pezkuwichain.io'
    },
    relayName: 'dicle',
    text: 'Collectives',
    ui: {
      color: '#f47738',
      logo: 'chainsDicleSVG'
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'coretime-dicle',
    paraId: 1005,
    providers: {
      'Pezkuwi Foundation': 'wss://dicle-coretime-rpc.pezkuwichain.io'
    },
    relayName: 'dicle',
    text: 'Coretime',
    ui: {
      color: '#f47738',
      logo: 'chainsDicleSVG'
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'people-dicle',
    isPeople: true,
    paraId: 1004,
    providers: {
      'Pezkuwi Foundation': 'wss://dicle-people-rpc.pezkuwichain.io'
    },
    relayName: 'dicle',
    text: 'People',
    ui: {
      color: '#f47738',
      logo: 'chainsDicleSVG'
    }
  }
];

export const prodRelayDicle: EndpointOption = {
  dnslink: 'dicle',
  genesisHash: DICLE_GENESIS,
  info: 'dicle',
  isRelay: true,
  isPeopleForIdentity: true,
  linked: [
    ...getTeleports(prodParasDicle)
  ],
  providers: {
    'Pezkuwi Foundation': 'wss://dicle-rpc.pezkuwichain.io',
    'Local': 'ws://127.0.0.1:9944'
  },
  teleport: [1000],
  text: 'Dicle',
  ui: {
    color: '#f47738',
    identityIcon: 'jdenticon',
    logo: 'chainsDicleSVG'
  }
};
