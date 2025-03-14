"use client";

import { Heart, Users, Handshake, Flag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const features = [
  {
    name: 'Charity',
    description:
      'Our Catholic faith teaches us to "Love thy neighbor as thyself." Knights recognize that our mission and our faith in God compels us to action.',
    icon: Heart,
  },
  {
    name: 'Unity',
    description:
      'None of us is as good as all of us. Together, we can accomplish far more than any of us could individually.',
    icon: Users,
  },
  {
    name: 'Fraternity',
    description:
      'The Knights of Columbus was founded on the principles of charity and unity, but also fraternity - banding together as brothers.',
    icon: Handshake,
  },
  {
    name: 'Patriotism',
    description:
      'Members of the Knights of Columbus are patriotic citizens. We are proud of our devotion to God and country, and believe in standing up for both.',
    icon: Flag,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Guiding Principles
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded by Blessed Father Michael J. McGivney in 1882, the Knights of Columbus
            is guided by four core principles that unite more than 2 million men worldwide.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-16 lg:max-w-none lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.name} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-1">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
