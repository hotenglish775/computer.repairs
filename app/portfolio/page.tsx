'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { PortfolioCard } from '@/components/ui/portfolio-card';
import { portfolioProjects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'smartphone', 'laptop', 'desktop', 'tablet'];
  
  const getProjectsByCategory = (category: string) => {
    if (category === 'all') return portfolioProjects;
    return portfolioProjects.filter(project => project.category === category);
  };

  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take a look at some of our recent repair projects across South Wales. Each showcase demonstrates 
            our expertise and commitment to quality workmanship.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === activeCategory ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-blue-100 px-4 py-2 text-sm capitalize"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found for this category.</p>
            </div>
          )}
        </section>

        {/* Process Section */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Repair Process</h2>
            <p className="text-lg text-gray-600">
              Every repair follows our proven process to ensure quality results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnosis</h3>
              <p className="text-gray-600">
                Free comprehensive diagnostic to identify all issues and provide accurate quote.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Approval</h3>
              <p className="text-gray-600">
                Clear explanation of issues, costs, and timeline before any work begins.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Repair</h3>
              <p className="text-gray-600">
                Expert repair using genuine parts and proven techniques by certified technicians.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">
                Thorough testing and quality check before return with 90-day warranty.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for Your Device's Transformation?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied customers across South Wales who trust us with their technology repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Repair
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}