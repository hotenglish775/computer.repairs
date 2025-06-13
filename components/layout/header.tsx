'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Monitor, ChevronDown } from 'lucide-react';
import { services } from '@/lib/data';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Repair', href: '/booking' },
  ];

  const mobileServices = services.filter(service => service.category === 'mobile');
  const computerServices = services.filter(service => service.category === 'computer');
  const additionalServices = services.filter(service => service.category === 'service');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Evolution PC Repairs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.slice(0, 1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[500px] bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-3 gap-4 px-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Mobile Repairs</h3>
                      <ul className="space-y-1">
                        {mobileServices.slice(0, 4).map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Computer Repairs</h3>
                      <ul className="space-y-1">
                        {computerServices.slice(0, 4).map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3">
                        <Link
                          href="/custom-pc-builds"
                          className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                        >
                          Custom PC Builds
                        </Link>
                        <Link
                          href="/network-setup"
                          className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                        >
                          Network Setup
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Additional Services</h3>
                      <ul className="space-y-1">
                        {additionalServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 mt-4 pt-4 px-4">
                    <Link
                      href="/services"
                      className="block text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                  item.name === 'Book Repair' ? 'bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    item.name === 'Book Repair'
                      ? 'bg-blue-600 text-white rounded-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <h3 className="text-base font-medium text-gray-900 mb-2">Services</h3>
                <div className="pl-4 space-y-1">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Mobile Repairs</h4>
                  {mobileServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  
                  <h4 className="text-sm font-medium text-gray-700 mb-1 mt-3">Computer Repairs</h4>
                  {computerServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  
                  <Link
                    href="/custom-pc-builds"
                    className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Custom PC Builds
                  </Link>
                  <Link
                    href="/network-setup"
                    className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Network Setup
                  </Link>
                  
                  <h4 className="text-sm font-medium text-gray-700 mb-1 mt-3">Additional Services</h4>
                  {additionalServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}