'use client';

import Image from 'next/image';

export default function Loading() {
  return (
    <div
      className="
    text-slate-700
    h-screen
    flex
    items-center
    justify-center
  "
    >
      <Image
        src="/images/LoadingBalls.gif"
        width={200}
        height={200}
        alt="loading spinner"
      />
    </div>
  );
}
