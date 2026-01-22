// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { PEZKUWI_GENESIS } from '../api/constants.js';
import { chainsPezkuwiSVG } from '../ui/logos/chains/index.js';

// Pezkuwi Network Endpoints
// These are the official PezkuwiChain network endpoints

// Active Teyrchains for PezkuwiChain Mainnet
export const prodParasPezkuwi: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://pezkuwichain.io',
    info: 'asset-hub-pezkuwi',
    isPeopleForIdentity: true,
    paraId: 1000,
    providers: {
      'Pezkuwi Foundation': 'wss://asset-hub-rpc.pezkuwichain.io'
    },
    relayName: 'pezkuwi',
    text: 'Asset Hub',
    ui: {
      color: '#86e62a',
      logo: chainsPezkuwiSVG
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'people-pezkuwi',
    isPeople: true,
    paraId: 1004,
    providers: {
      'Pezkuwi Foundation': 'wss://people-rpc.pezkuwichain.io'
    },
    relayName: 'pezkuwi',
    text: 'People',
    ui: {
      color: '#86e62a',
      logo: chainsPezkuwiSVG
    }
  }
  // Bridge Hub (1002), Collectives (1001), Coretime (1005) - will be added later
];

export const prodRelayPezkuwi: EndpointOption = {
  dnslink: 'pezkuwi',
  genesisHash: PEZKUWI_GENESIS,
  info: 'pezkuwi',
  isPeopleForIdentity: true,
  isRelay: true,
  linked: [
    ...prodParasPezkuwi
  ],
  providers: {
    'Pezkuwi Foundation': 'wss://rpc.pezkuwichain.io'
  },
  teleport: [1000],
  text: 'Pezkuwi',
  ui: {
    color: '#e6007a',
    identityIcon: 'jdenticon',
    logo: chainsPezkuwiSVG
  }
};
