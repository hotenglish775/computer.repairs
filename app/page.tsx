import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeroSlider } from '@/components/ui/hero-slider';
import { ServiceCard } from '@/components/ui/service-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { PortfolioCard } from '@/components/ui/portfolio-card';
import { services, testimonials, portfolioProjects } from '@/lib/data';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

export default function HomePage() {
  // Get featured services (first 6)
  const featuredServices = services.slice(0, 6);
  
  // Get featured portfolio projects (first 3)
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Technology Repair Partner in South Wales
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience, Evolution PC Repairs has been the go-to destination for 
                reliable computer and mobile phone repair services across Llanelli, Swansea, Cardiff, 
                Carmarthen, Ammanford, and Neath. We specialize in quick turnarounds, 
                quality parts, and exceptional customer service.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Certified Technicians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">90-Day Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Free Diagnostics</span>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Request Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional computer repair workshop"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">24hr</div>
              <div className="text-blue-100">Average Turnaround</div>
            </div>
            <div>
              <CheckCircle className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">90-Day</div>
              <div className="text-blue-100">Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From cracked screens to complex hardware issues, we provide comprehensive 
              repair services for all your technology needs across South Wales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied customers across South Wales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-gray-600">
              See some of our latest repair projects and transformations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fix Your Device?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free diagnostic and quote today. Most repairs completed within 24 hours.
            Serving Llanelli, Swansea, Cardiff, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" variant="secondary">
                Schedule Repair
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}