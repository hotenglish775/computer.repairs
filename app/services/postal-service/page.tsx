import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ServiceCard } from '@/components/ui/service-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { services, serviceTestimonials, relatedServices } from '@/lib/data';
import { CheckCircle, Clock, Shield, Star, ArrowRight, Phone, Mail, Package, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Postal Repair Service - Evolution PC Repairs | UK-Wide Device Repair',
  description: 'Secure postal repair service for devices across the UK. Insured shipping, professional repairs, and safe return delivery. Perfect for customers outside South Wales.',
  keywords: 'postal repair service UK, mail-in device repair, insured shipping repair, remote device repair, UK-wide mobile repair, postal computer repair',
};

export default function PostalServicePage() {
  const service = services.find((s) => s.slug === 'postal-service')!;
  const serviceTestimonialsData = serviceTestimonials['postal-service'] || [];
  const relatedServicesData = relatedServices['postal-service']?.map(slug => 
    services.find(s => s.slug === slug)
  ).filter(Boolean) || [];

  const features = [
    'Insured shipping both ways',
    'Secure packaging provided',
    'Real-time tracking updates',
    'Professional repair service',
    'Safe return delivery',
    '90-day warranty included'
  ];

  const benefits = [
    'Nationwide coverage across UK',
    'No travel required',
    'Secure insured shipping',
    'Professional packaging',
    'Expert repair service',
    'Convenient door-to-door service'
  ];

  const process = [
    'Contact us to arrange postal repair service',
    'Receive secure packaging and prepaid shipping label',
    'Pack your device and send via tracked courier',
    'We diagnose and provide repair quote',
    'Device repaired and returned via insured delivery'
  ];

  const faqs = [
    {
      question: 'How much does postal service cost?',
      answer: 'Postal service starts from £9.99 including insured shipping both ways. The repair cost is separate and quoted after diagnosis.'
    },
    {
      question: 'Is my device insured during shipping?',
      answer: 'Yes, all devices are fully insured during shipping both to us and back to you, up to £2000 value.'
    },
    {
      question: 'How long does postal repair take?',
      answer: 'Including shipping time, most postal repairs are completed within 5-7 working days from when we receive your device.'
    },
    {
      question: 'What if my device cannot be repaired?',
      answer: 'If repair is not possible, we\'ll return your device at no charge except the initial postal service fee.'
    },
    {
      question: 'Do you provide packaging materials?',
      answer: 'Yes, we provide secure packaging materials and prepaid shipping labels for safe transport of your device.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            UK-Wide Service
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Postal Repair Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional device repair service available across the UK. Secure postal service 
            with insured shipping, expert repairs, and safe return delivery to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Postal Repair
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
                Professional Repairs Delivered to Your Door
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our postal repair service extends our expertise across the entire UK. Whether you're 
                in Scotland, Northern Ireland, or anywhere in England, you can access our professional 
                repair services with secure, insured shipping both ways.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Tracked Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Expert Service</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-800">From £9.99</p>
                <p className="text-sm text-blue-600">Including insured shipping both ways</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Postal repair service packaging"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Postal Service Works</h2>
            <p className="text-lg text-gray-600">
              Simple 5-step process for nationwide device repairs
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

        {/* Shipping & Insurance */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Package className="mr-2 h-6 w-6" />
                  Secure Packaging
                </CardTitle>
                <CardDescription>
                  Professional packaging for safe device transport
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Anti-static bubble wrap</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Shock-resistant packaging</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tamper-evident seals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Prepaid shipping labels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="mr-2 h-6 w-6" />
                  Insurance & Tracking
                </CardTitle>
                <CardDescription>
                  Full protection and visibility throughout the process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Up to £2000 insurance coverage</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Real-time tracking updates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Signature on delivery</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">SMS/Email notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Postal Service Pricing</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing with no hidden costs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Standard Service</CardTitle>
                <CardDescription>5-7 working days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-4">£9.99</div>
                <ul className="space-y-2 text-sm">
                  <li>• Insured shipping both ways</li>
                  <li>• Up to £500 insurance</li>
                  <li>• Tracking included</li>
                  <li>• Standard packaging</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-blue-500 border-2">
              <CardHeader>
                <CardTitle className="text-xl">Premium Service</CardTitle>
                <CardDescription>3-5 working days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-4">£19.99</div>
                <ul className="space-y-2 text-sm">
                  <li>• Express insured shipping</li>
                  <li>• Up to £1500 insurance</li>
                  <li>• Priority handling</li>
                  <li>• Premium packaging</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Business Service</CardTitle>
                <CardDescription>1-3 working days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-4">£39.99</div>
                <ul className="space-y-2 text-sm">
                  <li>• Next-day shipping</li>
                  <li>• Up to £2000 insurance</li>
                  <li>• Business priority</li>
                  <li>• Dedicated support</li>
                </ul>
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
                  What's included with our postal repair service
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
                  Why choose our postal repair service
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
              Common questions about our postal repair service
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
                What our customers say about our postal repair service
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
            Ready to Start Your Postal Repair?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get professional device repairs delivered to your door anywhere in the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Start Postal Repair
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