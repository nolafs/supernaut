'use client';
import React from 'react';
import {NotificationBlock} from '@supernaut/shared-ui';
// eslint-disable-next-line @nx/enforce-module-boundaries
export default function Error() {
  return (
    <NotificationBlock type={'error'} body={'Error loading latest work list'} />
  )
}
