"use client";

import Link from 'next/link';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

// Example upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: 'Burrito Making - Orleans Kitchen',
    description: 'Join us as we make burritos for those in need at Orleans Kitchen.',
    date: 'April 1, 2025',
    time: '4:00 PM',
    location: 'Orleans Kitchen',
    href: '/calendar#event-1',
  },
  {
    id: 2,
    title: 'Council/Columbus Club Meeting',
    description: 'Monthly council meeting to discuss upcoming events and initiatives.',
    date: 'April 6, 2025',
    time: '7:30 PM',
    location: 'Main Hall',
    href: '/calendar#event-2',
  },
  {
    id: 3,
    title: 'Blood Drive',
    description: 'Donate blood and help save lives in our community.',
    date: 'April 10, 2025',
    time: '8:30 AM - 2:30 PM',
    location: 'Council Hall',
    href: '/calendar#event-3',
  },
  {
    id: 4,
    title: 'Holy Thursday Service',
    description: 'Join us for the Holy Thursday service at our parish.',
    date: 'April 17, 2025',
    time: '7:00 PM',
    location: 'St. Joan of Arc Catholic Church',
    href: '/calendar#event-4',
  },
];

export default function Events() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us for these upcoming events and activities. All are welcome to
            participate and contribute to our mission of service.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={event.href}>Event Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900">
            <Link href="/calendar">View Full Calendar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
