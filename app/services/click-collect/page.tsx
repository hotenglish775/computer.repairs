import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ServiceCard } from '@/components/ui/service-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { services, serviceTestimonials, relatedServices } from '@/lib/data';
import { CheckCircle, Clock, Shield, Star, ArrowRight, Phone, Package, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Click & Collect Service - Evolution PC Repairs | Convenient Device Repair',
  description: 'Convenient click and collect service for device repairs across South Wales. Book online, drop off your device, and collect when ready. Serving Llanelli, Swansea, Cardiff.',
  keywords: 'click and collect repair service, convenient device repair, book online repair, drop off collection service, Llanelli device repair, Swansea mobile repair',
};

export default function ClickCollectPage() {
  const service = services.find((s) => s.slug === 'click-collect')!;
  const serviceTestimonialsData = serviceTestimonials['click-collect'] || [];
  const relatedServicesData = relatedServices['click-collect']?.map(slug => 
    services.find(s => s.slug === slug)
  ).filter(Boolean) || [];

  const features = [
    'Online booking system',
    'Free diagnostic and quote',
    'Secure device storage',
    'SMS/Email updates',
    'Flexible collection times',
    '90-day warranty included'
  ];

  const benefits = [
    'Save time with online booking',
    'No waiting in queues',
    'Convenient drop-off times',
    'Real-time repair updates',
    'Secure device handling',
    'Professional service guarantee'
  ];

  const process = [
    'Book your repair online or by phone',
    'Drop off your device at our Llanelli location',
    'Receive diagnostic report and quote',
    'Approve repair and receive updates',
    'Collect your repaired device at your convenience'
  ];

  const faqs = [
    {
      question: 'How do I book a click & collect repair?',
      answer: 'You can book online through our booking form, call us on 01554 123456, or visit our Llanelli location directly.'
    },
    {
      question: 'What are your drop-off and collection hours?',
      answer: 'Monday-Friday: 9AM-6PM, Saturday: 10AM-5PM. We also offer extended hours by appointment for urgent repairs.'
    },
    {
      question: 'How will I know when my device is ready?',
      answer: 'We\'ll send you SMS and email updates throughout the repair process, including when your device is ready for collection.'
    },
    {
      question: 'Is my device secure while in your care?',
      answer: 'Yes, all devices are stored in our secure facility with CCTV monitoring and individual tracking systems.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Convenient Service
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Click & Collect Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Convenient device repair service across South Wales. Book online, drop off your device, 
            and collect when ready. Perfect for busy schedules in Llanelli, Swansea, and Cardiff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Click & Collect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              01554 123456
            </Button>
          </div>
        </div>

        {/* Service Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hassle-Free Device Repairs
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our click & collect service is designed for busy customers across South Wales who need 
                professional device repairs without the wait. Simply book online, drop off your device 
                at our Llanelli location, and we'll handle the rest.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Fast Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Secure Storage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Expert Service</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-800">Free Service</p>
                <p className="text-sm text-blue-600">No additional charges for click & collect</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Click and collect service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Click & Collect Works</h2>
            <p className="text-lg text-gray-600">
              Simple 5-step process to get your device repaired
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step: string, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">{index + 1}</span>
                </div>
                <p className="text-sm text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Hours */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MapPin className="mr-2 h-6 w-6" />
                  Our Location
                </CardTitle>
                <CardDescription>
                  Convenient location in Llanelli with easy parking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Address:</h4>
                    <p className="text-gray-600">ERW Road, Llanelli, SA15 2TE</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Parking:</h4>
                    <p className="text-gray-600">Free customer parking available</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Access:</h4>
                    <p className="text-gray-600">Ground floor access, wheelchair accessible</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="mr-2 h-6 w-6" />
                  Opening Hours
                </CardTitle>
                <CardDescription>
                  Flexible hours to suit your schedule
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-gray-600">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Extended Hours:</strong> Available by appointment for urgent business repairs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Service Features</CardTitle>
                <CardDescription>
                  What's included with our click & collect service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Key Benefits</CardTitle>
                <CardDescription>
                  Why choose our click & collect service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our click & collect service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq: any, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        {serviceTestimonialsData.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Customer Reviews
              </h2>
              <p className="text-lg text-gray-600">
                What our customers say about our click & collect service
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceTestimonialsData.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServicesData.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600">
                Other services you might be interested in
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServicesData.map((relatedService) => (
                <ServiceCard key={relatedService!.id} service={relatedService!} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Use Our Click & Collect Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your device repair today and experience the convenience of our click & collect service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Book Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get More Info
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}