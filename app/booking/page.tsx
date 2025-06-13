'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Clock } from 'lucide-react';
import { BookingFormData } from '@/types';
import { services } from '@/lib/data';

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    deviceType: '',
    issue: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to database
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Send confirmation email
        await fetch('/api/send-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          deviceType: '',
          issue: '',
          preferredDate: '',
          preferredTime: '',
          additionalNotes: ''
        });
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error submitting your booking. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const deviceTypes = [
    'iPhone', 'Samsung Galaxy', 'Google Pixel', 'Other Smartphone',
    'MacBook', 'Windows Laptop', 'Desktop Computer', 'Tablet', 'Other Device'
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Repair
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your device repair appointment across South Wales. We'll provide a free diagnostic 
            and quote before any work begins. Serving Llanelli, Swansea, Cardiff, and surrounding areas.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <CalendarDays className="mr-2 h-6 w-6" />
              Schedule Appointment
            </CardTitle>
            <CardDescription>
              Fill out the form below to book your repair appointment. We'll confirm 
              your booking within 2 hours during business hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Appointment Booked!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for booking with Evolution PC Repairs. We'll contact you within 2 hours 
                  to confirm your appointment details and send a confirmation email.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">What's Next?</h4>
                  <ul className="text-left text-gray-600 space-y-1">
                    <li>• We'll call you to confirm your appointment</li>
                    <li>• Bring your device and any accessories</li>
                    <li>• Free diagnostic and quote provided</li>
                    <li>• Most repairs completed same day</li>
                  </ul>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                {/* Service Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="deviceType">Device Type *</Label>
                    <Select onValueChange={(value) => handleSelectChange('deviceType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        {deviceTypes.map((device) => (
                          <SelectItem key={device} value={device}>
                            {device}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="issue">Describe the Issue *</Label>
                  <Textarea
                    id="issue"
                    name="issue"
                    required
                    value={formData.issue}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Please describe what's wrong with your device..."
                    className="mt-1"
                  />
                </div>

                {/* Appointment Scheduling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any additional information or special requests..."
                    className="mt-1"
                  />
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Appointment Information
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Free diagnostic and quote provided before any work</li>
                    <li>• Most repairs completed within 24 hours</li>
                    <li>• 90-day warranty on all repairs</li>
                    <li>• No charge if repair is not possible</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <div className="mt-8 text-center">
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">
                Need Immediate Help?
              </h3>
              <p className="text-orange-700 mb-4">
                For urgent repairs or if you can't wait for an appointment, 
                call our emergency repair line.
              </p>
              <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                Emergency Line: 01554 999123
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}