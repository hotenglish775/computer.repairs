'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioProject } from '@/types';

interface PortfolioCardProps {
  project: PortfolioProject;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
            <img
              src={showAfter ? project.afterImage : project.beforeImage}
              alt={showAfter ? `${project.title} - After` : `${project.title} - Before`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 text-white hover:bg-black/70"
              onClick={() => setShowAfter(!showAfter)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Badge variant={showAfter ? "default" : "secondary"} className="bg-black/50 text-white">
              {showAfter ? "After" : "Before"}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 text-white hover:bg-black/70"
              onClick={() => setShowAfter(!showAfter)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Badge variant="outline" className="w-fit">
          {project.category}
        </Badge>
        <CardTitle className="text-lg">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {project.description}
        </CardDescription>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-1">Issues:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {project.issues.map((issue, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-900 mb-1">Solutions:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
          {project.clientFeedback && (
            <div className="pt-3 border-t">
              <p className="text-sm italic text-gray-600">
                "{project.clientFeedback}"
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}