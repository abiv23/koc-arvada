"use client";

import Link from 'next/link';
import { Button } from './ui/button';

export default function CTA() {
  return (
    <div className="bg-blue-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join the Knights of Columbus
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Become part of something bigger and make a real difference in your community.
            The Knights of Columbus offers Catholic men the opportunity to grow in their faith
            while serving others and supporting their families.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
              <Link href="/membership">Join Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
