// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from '../types.js';
import type { Option } from './types.js';

import { selectableNetworks } from '@pezkuwi/networks';

// Pezkuwi custom networks (not in upstream ss58-registry)
const pezkuwiNetworks = [
  {
    info: 'pezkuwi',
    text: 'Pezkuwi Relay Chain',
    value: 0
  },
  {
    info: 'dicle',
    text: 'Dicle Relay Chain',
    value: 2
  },
  {
    info: 'zagros',
    text: 'Zagros Testnet',
    value: 42
  },
  {
    info: 'pezkuwichain',
    text: 'PezkuwiChain Development',
    value: 42
  }
];

const networks = [
  ...pezkuwiNetworks,
  ...selectableNetworks
    .map(({ displayName, network, prefix }) => ({
      info: network,
      text: displayName,
      value: prefix
    }))
    // Filter out polkadot/kusama since we're replacing them with pezkuwi/dicle
    .filter(({ info }) => !['polkadot', 'kusama'].includes(info || ''))
]
  .sort((a, b) =>
    [0, 2, 42].includes(a.value) || [0, 2, 42].includes(b.value)
      ? 0
      : a.text.localeCompare(b.text)
  );

// Definitions here are with the following values -
//   info: the name of a logo as defined in ../logos, specifically in namedLogos
//   text: The text you wish to display in the dropdown
//   value: The actual ss5Format value (as registered)

export function createSs58 (t: TFunction): Option[] {
  return [
    {
      info: 'default',
      text: t('ss58.default', 'Default for the connected node', { ns: 'apps-config' }),
      value: -1
    },
    ...networks
  ];
}
