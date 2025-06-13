import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-gray-700 mb-4 italic">
          "{testimonial.content}"
        </blockquote>
        <div className="flex items-center">
          {testimonial.image && (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
          )}
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            {testimonial.role && (
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}