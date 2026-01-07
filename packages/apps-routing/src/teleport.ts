// Copyright 2017-2025 @pezkuwi/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Route, TFunction } from './types.js';

import Modal from '@pezkuwi/app-teyrchains/Teleport';

export default function create (t: TFunction): Route {
  return {
    Component: Modal,
    Modal,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        [
          'tx.xcm.teleportAssets',
          'tx.xcmPallet.teleportAssets',
          'tx.pezkuwiXcm.teleportAssets',
          'tx.xcm.limitedTeleportAssets',
          'tx.xcmPallet.limitedTeleportAssets',
          'tx.pezkuwiXcm.limitedTeleportAssets'
        ]
      ],
      needsTeleport: true
    },
    group: 'accounts',
    icon: 'share-square',
    name: 'teleport',
    text: t('nav.teleport', 'Teleport', { ns: 'apps-routing' })
  };
}
