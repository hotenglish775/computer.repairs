import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Monitor } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">Evolution PC Repairs</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional computer and mobile phone repair services across South Wales. Serving Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, and Neath.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="h-5 w-5" />
              <span>Mon-Sat: 9AM-6PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/booking" className="text-gray-300 hover:text-white transition-colors">Book Repair</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/custom-pc-builds" className="text-gray-300 hover:text-white transition-colors">Custom PC Builds</Link></li>
              <li><Link href="/network-setup" className="text-gray-300 hover:text-white transition-colors">Network Setup</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/screen-replacement" className="hover:text-white transition-colors">Mobile Phone Repairs</Link></li>
              <li><Link href="/services/hardware-repairs" className="hover:text-white transition-colors">Computer Repairs</Link></li>
              <li><Link href="/services/mobile-data-recovery" className="hover:text-white transition-colors">Data Recovery</Link></li>
              <li><Link href="/services/custom-pc-building" className="hover:text-white transition-colors">Custom PC Builds</Link></li>
              <li><Link href="/services/network-setup" className="hover:text-white transition-colors">Network Setup</Link></li>
              <li><Link href="/services/click-collect" className="hover:text-white transition-colors">Click & Collect</Link></li>
              <li><Link href="/services/postal-service" className="hover:text-white transition-colors">Postal Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>01554 123456</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>support@evolutionpcrepairs.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>ERW Road, Llanelli, SA15 2TE</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Coverage Areas:</h4>
              <p className="text-sm text-gray-400">
                Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, Neath & surrounding areas
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Evolution PC Repairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}