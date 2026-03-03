"use client";

import { useMediaQueryContext } from '@/context/MediaQueryContext';

export default function Home() {
  const { isMobile } = useMediaQueryContext();

  return <div className='w-full h-screen flex justify-center items-center'>
    <h1 className='text-2xl font-bold'>Qoomlee</h1>
  </div>;
}
