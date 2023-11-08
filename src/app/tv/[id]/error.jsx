'use client';

import { GenericError } from '@/components/Misc/errorCompo';

export default function Error({ error }) {
  console.log(error);
  return <GenericError />;
}
