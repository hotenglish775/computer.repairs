import { Metadata } from 'next';
import { ServiceCard } from '@/components/ui/service-card';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services - Evolution PC Repairs | Computer & Mobile Repair South Wales',
  description: 'Comprehensive computer and mobile phone repair services across South Wales. Screen replacement, data recovery, virus removal, and custom PC builds in Llanelli, Swansea, Cardiff.',
  keywords: 'computer repair services South Wales, mobile phone repair Llanelli, screen replacement Swansea, data recovery Cardiff, virus removal Carmarthen, custom PC builds Ammanford, laptop repair Neath',
};

export default function ServicesPage() {
  const mobileServices = services.filter(service => service.category === 'mobile');
  const computerServices = services.filter(service => service.category === 'computer');
  const additionalServices = services.filter(service => service.category === 'service');

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional repair services for all your technology needs across South Wales. 
            We use genuine parts, offer competitive pricing, and provide a 90-day warranty on all repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule a Repair
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              01554 123456
            </Button>
          </div>
        </div>

        {/* Mobile Phone Repairs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mobile Phone Repairs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert repair services for all smartphone brands including iPhone, Samsung, 
              Google Pixel, and more. Same-day service available for most repairs across South Wales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Computer Repairs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Computer Repairs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive computer repair and upgrade services for desktops, laptops, 
              and workstations. We handle both hardware and software issues.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {computerServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convenient service options to make device repairs easier for customers 
              across Llanelli, Swansea, Cardiff, and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {additionalServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Evolution PC Repairs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Our certified technicians have years of experience and stay updated 
                with the latest repair techniques across all device types.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Most repairs completed within 24 hours. We understand how important 
                your devices are to your daily life and work.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">90-Day Warranty</h3>
              <p className="text-gray-600">
                All repairs come with a comprehensive 90-day warranty for your 
                peace of mind and confidence in our work.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free diagnostic and quote. No obligation required.
            Serving customers across South Wales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline">
                Book Appointment
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}