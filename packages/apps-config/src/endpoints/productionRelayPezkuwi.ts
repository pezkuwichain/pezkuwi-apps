// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { PEZKUWI_GENESIS } from '../api/constants.js';
import { chainsPezkuwiSVG } from '../ui/logos/chains/index.js';

// Pezkuwi Network Endpoints
// These are the official PezkuwiChain network endpoints

export const prodParasPezkuwi: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://pezkuwichain.io',
    info: 'asset-hub-pezkuwi',
    isPeopleForIdentity: true,
    paraId: 1000,
    providers: {
      'Pezkuwi Foundation': 'wss://pezkuwi-asset-hub-rpc.pezkuwichain.io'
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
    info: 'bridge-hub-pezkuwi',
    paraId: 1002,
    providers: {
      'Pezkuwi Foundation': 'wss://pezkuwi-bridge-hub-rpc.pezkuwichain.io'
    },
    relayName: 'pezkuwi',
    text: 'Bridge Hub',
    ui: {
      color: '#86e62a',
      logo: chainsPezkuwiSVG
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'collectives-pezkuwi',
    paraId: 1001,
    providers: {
      'Pezkuwi Foundation': 'wss://pezkuwi-collectives-rpc.pezkuwichain.io'
    },
    relayName: 'pezkuwi',
    text: 'Collectives',
    ui: {
      color: '#86e62a',
      logo: chainsPezkuwiSVG
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'coretime-pezkuwi',
    paraId: 1005,
    providers: {
      'Pezkuwi Foundation': 'wss://pezkuwi-coretime-rpc.pezkuwichain.io'
    },
    relayName: 'pezkuwi',
    text: 'Coretime',
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
      'Pezkuwi Foundation': 'wss://pezkuwi-people-rpc.pezkuwichain.io'
    },
    relayName: 'pezkuwi',
    text: 'People',
    ui: {
      color: '#86e62a',
      logo: chainsPezkuwiSVG
    }
  }
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
