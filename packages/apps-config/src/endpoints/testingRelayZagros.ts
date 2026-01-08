// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { ZAGROS_GENESIS } from '../api/constants.js';
import { chainsZagrosSVG } from '../ui/logos/chains/index.js';
import { getTeleports } from './util.js';

// Zagros Test Network Endpoints
// Zagros is the test network for Pezkuwi

export const testParasZagros: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://pezkuwichain.io',
    info: 'asset-hub-zagros',
    isPeopleForIdentity: true,
    paraId: 1000,
    providers: {
      'Pezkuwi Foundation': 'wss://zagros-asset-hub-rpc.pezkuwichain.io'
    },
    relayName: 'zagros',
    text: 'Asset Hub',
    ui: {
      color: '#00b894',
      logo: chainsZagrosSVG
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'bridge-hub-zagros',
    paraId: 1002,
    providers: {
      'Pezkuwi Foundation': 'wss://zagros-bridge-hub-rpc.pezkuwichain.io'
    },
    relayName: 'zagros',
    text: 'Bridge Hub',
    ui: {
      color: '#00b894',
      logo: chainsZagrosSVG
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'collectives-zagros',
    paraId: 1001,
    providers: {
      'Pezkuwi Foundation': 'wss://zagros-collectives-rpc.pezkuwichain.io'
    },
    relayName: 'zagros',
    text: 'Collectives',
    ui: {
      color: '#00b894',
      logo: chainsZagrosSVG
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'coretime-zagros',
    paraId: 1005,
    providers: {
      'Pezkuwi Foundation': 'wss://zagros-coretime-rpc.pezkuwichain.io'
    },
    relayName: 'zagros',
    text: 'Coretime',
    ui: {
      color: '#00b894',
      logo: chainsZagrosSVG
    }
  },
  {
    homepage: 'https://pezkuwichain.io',
    info: 'people-zagros',
    isPeople: true,
    paraId: 1004,
    providers: {
      'Pezkuwi Foundation': 'wss://zagros-people-rpc.pezkuwichain.io'
    },
    relayName: 'zagros',
    text: 'People',
    ui: {
      color: '#00b894',
      logo: chainsZagrosSVG
    }
  }
];

export const testRelayZagros: EndpointOption = {
  dnslink: 'zagros',
  genesisHash: ZAGROS_GENESIS,
  info: 'zagros',
  isPeopleForIdentity: true,
  isRelay: true,
  linked: [
    ...getTeleports(testParasZagros)
  ],
  providers: {
    Local: 'ws://127.0.0.1:9944',
    'Pezkuwi Foundation': 'wss://zagros-rpc.pezkuwichain.io'
  },
  teleport: [1000],
  text: 'Zagros',
  ui: {
    color: '#00b894',
    identityIcon: 'jdenticon',
    logo: chainsZagrosSVG
  }
};
