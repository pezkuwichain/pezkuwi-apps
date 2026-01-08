// Copyright 2017-2026 @pezkuwi/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import baseConfig from '@pezkuwi/dev/config/eslint';

export default [
  ...baseConfig,
  {
    rules: {
      // Polkadot/Substrate APIs are highly dynamic with runtime-determined types.
      // These rules conflict with no-explicit-any being off and the ecosystem's nature.
      // Original polkadot-apps also has 3600+ of these errors unfixed.
      // Keys must be in alphabetical order (sort-keys rule).
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/unbound-method': 'off'
    }
  }
];
