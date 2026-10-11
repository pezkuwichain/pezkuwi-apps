// Copyright 2017-2026 @pezkuwi/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type React from 'react';

import { useLayoutEffect, useRef } from 'react';

import { createNamedHook } from './createNamedHook.js';

export type MountedRef = React.MutableRefObject<boolean>;

function useIsMountedRefImpl (): MountedRef {
  const isMounted = useRef(false);

  // A layout effect runs while the component is committed, before the browser
  // can deliver an event to it. A passive effect runs later, so a click that
  // lands in between found the ref still false and was dropped.
  useLayoutEffect((): () => void => {
    isMounted.current = true;

    return (): void => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}

export const useIsMountedRef = createNamedHook('useIsMountedRef', useIsMountedRefImpl);
