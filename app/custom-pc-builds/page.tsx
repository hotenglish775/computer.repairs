import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, Star, ArrowRight, Phone, Cpu, HardDrive, Monitor } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom PC Builds - Evolution PC Repairs | Gaming & Workstation PCs South Wales',
  description: 'Professional custom PC building services in South Wales. Gaming PCs, workstations, and budget builds. Serving Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath.',
  keywords: 'custom PC builds South Wales, gaming PC Llanelli, workstation PC Swansea, computer building Cardiff, custom computers Carmarthen, PC assembly Ammanford, gaming computer Neath',
};

export default function CustomPCBuildsPage() {
  const buildTypes = [
    {
      name: 'Gaming PC',
      description: 'High-performance gaming computers for the latest games',
      price: 'From £799',
      features: ['Latest graphics cards', 'High-speed processors', 'Fast SSD storage', 'RGB lighting', 'Overclocking ready'],
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Workstation PC',
      description: 'Professional workstations for content creation and business',
      price: 'From £999',
      features: ['Professional graphics', 'Multi-core processors', 'ECC memory options', 'Reliable components', 'Business warranty'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Budget PC',
      description: 'Affordable computers for everyday tasks and office work',
      price: 'From £399',
      features: ['Efficient processors', 'Adequate memory', 'Reliable storage', 'Energy efficient', 'Great value'],
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const process = [
    'Consultation to understand your needs and budget',
    'Component selection and compatibility checking',
    'Professional assembly and cable management',
    'System testing and performance optimization',
    'Installation of operating system and software'
  ];

  const features = [
    'Free consultation and quote',
    'Quality component selection',
    'Professional assembly',
    'Cable management included',
    'System testing and optimization',
    '2-year build warranty'
  ];

  const benefits = [
    'Tailored to your exact needs',
    'Better value than pre-built',
    'Quality components guaranteed',
    'Future upgrade path planned',
    'Local support and service',
    'Professional build quality'
  ];

  const faqs = [
    {
      question: 'How long does a custom PC build take?',
      answer: 'Most custom builds are completed within 3-5 working days, depending on component availability and complexity.'
    },
    {
      question: 'Do you provide a warranty on custom builds?',
      answer: 'Yes, we provide a 2-year warranty on our build service, plus individual component warranties from manufacturers.'
    },
    {
      question: 'Can you work with my budget?',
      answer: 'Absolutely! We can build systems for any budget from £399 upwards, optimizing component selection for best value.'
    },
    {
      question: 'Do you install the operating system?',
      answer: 'Yes, we include Windows installation and basic software setup as part of our build service.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Custom PC Building
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Custom PC Builds
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional custom PC building services across South Wales. Gaming PCs, workstations, 
            and budget builds tailored to your exact needs. Serving Llanelli, Swansea, Cardiff, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              01554 123456
            </Button>
          </div>
        </div>

        {/* Build Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PC Build Types</h2>
            <p className="text-lg text-gray-600">
              Choose from our popular build categories or let us create something unique for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buildTypes.map((build, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={build.image}
                    alt={build.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{build.name}</CardTitle>
                  <CardDescription>{build.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600">{build.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {build.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional PC Building Service
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our expert technicians have years of experience building custom PCs for customers 
                across South Wales. We use only quality components and provide professional assembly 
                with clean cable management and thorough testing.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">3-5 Days Build</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">2-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Expert Assembly</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-800">Starting at £299</p>
                <p className="text-sm text-blue-600">Build service fee (components extra)</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Custom PC building service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Build Process */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Build Process</h2>
            <p className="text-lg text-gray-600">
              Professional 5-step process for every custom PC build
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

        {/* Component Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Components</h2>
            <p className="text-lg text-gray-600">
              We work with leading brands to ensure reliability and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Cpu className="mr-2 h-6 w-6" />
                  Processors & Graphics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Intel & AMD processors</li>
                  <li>• NVIDIA & AMD graphics cards</li>
                  <li>• Latest generation components</li>
                  <li>• Performance optimization</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <HardDrive className="mr-2 h-6 w-6" />
                  Storage & Memory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Fast NVMe SSD storage</li>
                  <li>• High-speed DDR4/DDR5 RAM</li>
                  <li>• Reliable brand components</li>
                  <li>• Future upgrade planning</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Monitor className="mr-2 h-6 w-6" />
                  Cases & Cooling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Quality PC cases</li>
                  <li>• Efficient cooling solutions</li>
                  <li>• Clean cable management</li>
                  <li>• RGB lighting options</li>
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
                  What's included with our custom PC building service
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
                  Why choose our custom PC building service
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
              Common questions about our custom PC building service
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

        {/* CTA Section */}
        <section className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Dream PC?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a custom quote for your perfect PC build. Professional assembly and 2-year warranty included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Get Custom Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Discuss Your Build
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}