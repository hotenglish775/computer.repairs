import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ServiceCard } from '@/components/ui/service-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { services, serviceTestimonials, relatedServices } from '@/lib/data';
import { CheckCircle, Clock, Shield, Star, ArrowRight, Phone } from 'lucide-react';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - Evolution PC Repairs',
    };
  }

  return {
    title: `${service.title} - Evolution PC Repairs`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  const serviceTestimonialsData = serviceTestimonials[service.slug] || [];
  const relatedServicesData = relatedServices[service.slug]?.map(slug => 
    services.find(s => s.slug === slug)
  ).filter(Boolean) || [];

  // Service-specific data
  const getServiceData = (serviceSlug: string) => {
    const commonFeatures = [
      'Free diagnostic and quote',
      '90-day warranty included',
      'Genuine parts only',
      'Expert technicians',
      'Same-day service available'
    ];

    const commonBenefits = [
      'Save money vs buying new',
      'Extend device lifespan',
      'Professional quality work',
      'Quick turnaround time',
      'Transparent pricing'
    ];

    const serviceSpecificData: Record<string, any> = {
      'screen-replacement': {
        features: [
          ...commonFeatures,
          'OEM quality displays',
          'Touch calibration included',
          'Oleophobic coating applied'
        ],
        benefits: [
          ...commonBenefits,
          'Restore full functionality',
          'Improve resale value',
          'Crystal clear display quality'
        ],
        process: [
          'Device inspection and damage assessment',
          'Careful disassembly and component removal',
          'Installation of genuine replacement screen',
          'Touch sensitivity calibration and testing',
          'Quality assurance and final inspection'
        ],
        faqs: [
          {
            question: 'How long does a screen replacement take?',
            answer: 'Most screen replacements are completed within 1-2 hours, depending on the device model.'
          },
          {
            question: 'Do you use genuine parts?',
            answer: 'Yes, we only use OEM or high-quality aftermarket parts that meet original specifications.'
          },
          {
            question: 'What if my touch screen doesn\'t work after repair?',
            answer: 'All repairs include touch calibration. If issues persist, we\'ll fix it at no additional cost under our warranty.'
          }
        ]
      },
      'battery-replacement': {
        features: [
          ...commonFeatures,
          'High-capacity batteries',
          'Battery health optimization',
          'Charging system check'
        ],
        benefits: [
          ...commonBenefits,
          'All-day battery life',
          'Faster charging speeds',
          'Reduced overheating'
        ],
        process: [
          'Battery health diagnostic test',
          'Safe removal of old battery',
          'Installation of new high-quality battery',
          'Charging system calibration',
          'Performance testing and optimization'
        ],
        faqs: [
          {
            question: 'How do I know if I need a battery replacement?',
            answer: 'Signs include rapid battery drain, device shutting down unexpectedly, or battery swelling.'
          },
          {
            question: 'Will my data be safe during battery replacement?',
            answer: 'Yes, battery replacement doesn\'t affect your data. However, we recommend backing up as a precaution.'
          }
        ]
      },
      'water-damage-repair': {
        features: [
          ...commonFeatures,
          'Ultrasonic cleaning',
          'Component-level repair',
          'Corrosion treatment'
        ],
        benefits: [
          ...commonBenefits,
          'Data recovery possible',
          'Prevent further damage',
          'Restore full functionality'
        ],
        process: [
          'Immediate power disconnection and assessment',
          'Complete disassembly and cleaning',
          'Ultrasonic cleaning of all components',
          'Corrosion treatment and part replacement',
          'Reassembly and comprehensive testing'
        ],
        faqs: [
          {
            question: 'What should I do immediately after water damage?',
            answer: 'Turn off the device immediately, remove the battery if possible, and bring it to us as soon as possible.'
          },
          {
            question: 'Can you recover my data from a water-damaged device?',
            answer: 'In many cases, yes. Our data recovery success rate for water-damaged devices is over 85%.'
          }
        ]
      }
    };

    return serviceSpecificData[serviceSlug] || {
      features: commonFeatures,
      benefits: commonBenefits,
      process: [
        'Initial diagnostic and assessment',
        'Detailed explanation of issues found',
        'Professional repair using quality parts',
        'Thorough testing and quality assurance',
        'Final inspection and customer handover'
      ],
      faqs: [
        {
          question: 'How long will my repair take?',
          answer: 'Most repairs are completed within 24 hours. Complex issues may take 2-3 business days.'
        },
        {
          question: 'Do you offer a warranty?',
          answer: 'Yes, all repairs come with a comprehensive 90-day warranty covering parts and labor.'
        }
      ]
    };
  };

  const serviceData = getServiceData(service.slug);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {service.category === 'mobile' ? 'Mobile Repair' : 'Computer Repair'}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Repair
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              (555) 123-4567
            </Button>
          </div>
        </div>

        {/* Service Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional {service.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our expert technicians specialize in {service.title.toLowerCase()} with years of experience 
                and access to genuine parts. We understand how important your device is to your daily life 
                and work to get it back to you as quickly as possible.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Fast Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">90-Day Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Expert Technicians</span>
                </div>
              </div>
              {service.price && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-lg font-semibold text-blue-800">{service.price}</p>
                  <p className="text-sm text-blue-600">Free diagnostic included</p>
                </div>
              )}
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={`${service.title} service`}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Service Features</CardTitle>
                <CardDescription>
                  What's included with our {service.title.toLowerCase()} service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {serviceData.features.map((feature: string, index: number) => (
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
                  Why choose our professional repair service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {serviceData.benefits.map((benefit: string, index: number) => (
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

        {/* Repair Process */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Repair Process</h2>
            <p className="text-lg text-gray-600">
              Every {service.title.toLowerCase()} follows our proven 5-step process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {serviceData.process.map((step: string, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">{index + 1}</span>
                </div>
                <p className="text-sm text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our {service.title.toLowerCase()} service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.faqs.map((faq: any, index: number) => (
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
                What our customers say about our {service.title.toLowerCase()} service
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
            Ready to Get Your Device Fixed?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your {service.title.toLowerCase()} appointment today and get back to what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Schedule Repair Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}