// Copyright 2017-2026 @pezkuwi/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// overrides based on the actual software node type, valid values are one of -
// pezkuwi, bizinikiwi, beachball, robohash

export const identityNodes: Record<string, string> = [
  ['parity-pezkuwi', 'pezkuwi']
].reduce((icons, [node, icon]): Record<string, string> => ({
  ...icons,
  [node.toLowerCase().replace(/-/g, ' ')]: icon
}), {});

export const identitySpec: Record<string, string> = [
  ['pezkuwi', 'pezkuwi'],
  ['pezkuwichain', 'pezkuwi'],
  ['zagros', 'pezkuwi']
].reduce((icons, [spec, icon]): Record<string, string> => ({
  ...icons,
  [spec.toLowerCase().replace(/-/g, ' ')]: icon
}), {});
