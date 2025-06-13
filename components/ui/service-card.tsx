import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Service } from '@/types';
import { 
  Smartphone, 
  Battery, 
  Zap, 
  Camera, 
  Droplets, 
  Settings, 
  HardDrive, 
  Unlock,
  Cpu,
  Monitor,
  Shield,
  Database,
  Download,
  PcCase,
  Wifi,
  Printer
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  Smartphone,
  Battery,
  Zap,
  Camera,
  Droplets,
  Settings,
  HardDrive,
  Unlock,
  Cpu,
  Monitor,
  Shield,
  Database,
  Download,
  PcCase,
  Wifi,
  Printer
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover-lift">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
          <IconComponent className="h-8 w-8 text-blue-600" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-gray-600">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        {service.price && (
          <p className="text-lg font-semibold text-blue-600 mb-4">{service.price}</p>
        )}
        <Link href={`/services/${service.slug}`}>
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}