import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, Star, ArrowRight, Phone, Wifi, Router, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Network Setup & Support - Evolution PC Repairs | Home & Business Networks South Wales',
  description: 'Professional network setup and support services in South Wales. Home WiFi, business networks, troubleshooting. Serving Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath.',
  keywords: 'network setup South Wales, WiFi installation Llanelli, business network Swansea, router setup Cardiff, network troubleshooting Carmarthen, home network Ammanford, WiFi problems Neath',
};

export default function NetworkSetupPage() {
  const serviceTypes = [
    {
      name: 'Home Network Setup',
      description: 'Complete home WiFi and network installation',
      price: 'From £119',
      features: ['Router configuration', 'WiFi optimization', 'Device connection', 'Security setup', 'Coverage testing'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Business Networks',
      description: 'Professional business network solutions',
      price: 'From £299',
      features: ['Enterprise equipment', 'Network security', 'User management', 'Backup solutions', 'Ongoing support'],
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Network Troubleshooting',
      description: 'Diagnose and fix network problems',
      price: 'From £79',
      features: ['Problem diagnosis', 'Speed optimization', 'Connection issues', 'Security checks', 'Performance tuning'],
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const process = [
    'Site survey and requirements assessment',
    'Network design and equipment selection',
    'Professional installation and configuration',
    'Testing and optimization for best performance',
    'Training and ongoing support provision'
  ];

  const features = [
    'Free site survey and quote',
    'Professional equipment selection',
    'Expert installation and setup',
    'Security configuration included',
    'Performance optimization',
    '12-month support warranty'
  ];

  const benefits = [
    'Reliable internet throughout your property',
    'Improved connection speeds',
    'Enhanced network security',
    'Professional installation quality',
    'Ongoing technical support',
    'Future expansion planning'
  ];

  const faqs = [
    {
      question: 'How long does network setup take?',
      answer: 'Most home network setups take 2-4 hours. Business installations may take 1-2 days depending on complexity.'
    },
    {
      question: 'Do you provide the networking equipment?',
      answer: 'Yes, we can supply and install all necessary equipment, or work with your existing hardware if suitable.'
    },
    {
      question: 'What if I have WiFi dead zones?',
      answer: 'We\'ll conduct a site survey to identify coverage issues and recommend solutions like mesh systems or additional access points.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide 12 months of support with all installations, plus ongoing maintenance contracts for businesses.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Network Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Network Setup & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional network setup and support services across South Wales. Home WiFi, business networks, 
            and troubleshooting. Serving Llanelli, Swansea, Cardiff, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Network Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              01554 123456
            </Button>
          </div>
        </div>

        {/* Service Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive network solutions for homes and businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
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
                Professional Network Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our network specialists provide comprehensive solutions for homes and businesses 
                across South Wales. From simple WiFi setup to complex business networks, we ensure 
                reliable, secure, and fast connectivity throughout your property.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Same Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Secure Setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Expert Installation</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-800">Starting at £119</p>
                <p className="text-sm text-blue-600">Includes site survey and basic setup</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Network setup service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Setup Process */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Setup Process</h2>
            <p className="text-lg text-gray-600">
              Professional 5-step process for every network installation
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

        {/* Network Solutions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Solutions</h2>
            <p className="text-lg text-gray-600">
              We work with leading networking brands for reliable performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Wifi className="mr-2 h-6 w-6" />
                  WiFi & Wireless
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• High-speed WiFi 6 routers</li>
                  <li>• Mesh network systems</li>
                  <li>• Range extenders</li>
                  <li>• Guest network setup</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Router className="mr-2 h-6 w-6" />
                  Wired Networks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Ethernet cable installation</li>
                  <li>• Network switches</li>
                  <li>• Structured cabling</li>
                  <li>• PoE solutions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Globe className="mr-2 h-6 w-6" />
                  Security & Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Firewall configuration</li>
                  <li>• VPN setup</li>
                  <li>• Network monitoring</li>
                  <li>• Access control</li>
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
                  What's included with our network setup service
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
                  Why choose our network setup service
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
              Common questions about our network setup service
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
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free site survey and quote for your network setup. Professional installation and 12-month support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Get Free Survey
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Discuss Your Needs
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}