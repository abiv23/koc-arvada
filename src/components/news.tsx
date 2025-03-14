"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

// Example news posts
const posts = [
  {
    id: 1,
    title: 'Successful Thanksgiving Food Drive',
    description: 'Thanks to all who contributed to our Thanksgiving food drive. We were able to provide meals for over 200 families in need.',
    date: 'March 10, 2025',
    imageUrl: '/images/placeholder-1.jpg',
    href: '/news/thanksgiving-food-drive',
  },
  {
    id: 2,
    title: 'Knights Recognize Outstanding Community Service',
    description: 'Council 12392 recognized three members for their outstanding service to our parish and community during our February meeting.',
    date: 'February 20, 2025',
    imageUrl: '/images/placeholder-2.jpg',
    href: '/news/outstanding-service',
  },
  {
    id: 3,
    title: 'New Charity Initiative Announced',
    description: 'We are excited to announce our partnership with St. Vincent de Paul Society for a new charity initiative to help homeless families.',
    date: 'January 15, 2025',
    imageUrl: '/images/placeholder-3.jpg',
    href: '/news/charity-initiative',
  },
];

export default function News() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest News
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay updated on the latest news, activities, and achievements from Knights of Columbus Council 12392.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-gray-200">
                <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-800">
                    {post.date}
                  </p>
                  <Link href={post.href} className="block mt-2">
                    <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-blue-800">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-600 line-clamp-3">
                      {post.description}
                    </p>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link href={post.href} className="text-sm font-medium text-blue-800 hover:text-blue-700 flex items-center gap-1">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
