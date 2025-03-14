"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Charitable Operations', href: '/charitable-operations' },
    { name: 'Programs', href: '/programs' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Email',
      href: 'mailto:info@kofc12392.org',
      icon: Mail,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center">
              <Image
                className="h-16 w-16 bg-white rounded-full p-1"
                src="/images/kofc-logo.png"
                alt="Knights of Columbus Council 12392"
                width={64}
                height={64}
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Knights of Columbus</h3>
                <p className="text-sm">Council #12392</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 flex-shrink-0 mr-3 mt-0.5" />
                <span>
                  St. Joan of Arc Catholic Church<br />
                  12735 W. 58th Ave.<br />
                  Arvada, CO 80002
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 flex-shrink-0 mr-3" />
                <span>(303) 555-1212</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 flex-shrink-0 mr-3" />
                <a href="mailto:info@kofc12392.org" className="hover:text-blue-200">
                  info@kofc12392.org
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-200 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About the Knights</h3>
            <p className="text-sm text-gray-200 mb-4">
              The Knights of Columbus is a Catholic fraternal organization dedicated to the principles
              of Charity, Unity, Fraternity, and Patriotism. We serve our parish and community through
              various charitable works and programs.
            </p>

            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 hover:text-white"
                  target={item.name === 'Email' ? '_self' : '_blank'}
                  rel={item.name === 'Email' ? '' : 'noopener noreferrer'}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Knights of Columbus Council 12392. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-300">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            {' • '}
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
