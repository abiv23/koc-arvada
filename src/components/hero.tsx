"use client";

import Link from 'next/link';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/40 z-10"></div>
        <div
          className="absolute inset-y-0 left-0 -z-10 w-full bg-blue-900 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
          style={{ backgroundBlendMode: 'multiply' }}
        ></div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Knights of Columbus
          </h1>
          <h2 className="text-2xl font-semibold mt-2 text-white sm:text-3xl">
            Council #12392
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100 max-w-2xl">
            Dedicated to the principles of Charity, Unity, Fraternity, and Patriotism. We serve our parish and our community through various charitable works and programs.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/membership">Join Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
