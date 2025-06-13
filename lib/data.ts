import { Service, TeamMember, Testimonial, PortfolioProject } from '@/types';

export const services: Service[] = [
  // Mobile Phone Repairs
  {
    id: 'screen-replacement',
    title: 'Screen Replacement',
    description: 'Professional screen repair for all mobile devices with genuine parts and warranty.',
    icon: 'Smartphone',
    category: 'mobile',
    price: 'Starting at £89',
    slug: 'screen-replacement'
  },
  {
    id: 'battery-replacement',
    title: 'Battery Replacement',
    description: 'Restore your device battery life with high-quality replacement batteries.',
    icon: 'Battery',
    category: 'mobile',
    price: 'Starting at £59',
    slug: 'battery-replacement'
  },
  {
    id: 'charging-port-repair',
    title: 'Charging Port Repair',
    description: 'Fix charging issues with professional port cleaning and replacement services.',
    icon: 'Zap',
    category: 'mobile',
    price: 'Starting at £69',
    slug: 'charging-port-repair'
  },
  {
    id: 'camera-repair',
    title: 'Camera Repair',
    description: 'Restore camera functionality with lens replacement and sensor repair.',
    icon: 'Camera',
    category: 'mobile',
    price: 'Starting at £79',
    slug: 'camera-repair'
  },
  {
    id: 'water-damage-repair',
    title: 'Water Damage Repair',
    description: 'Emergency water damage restoration with advanced drying techniques.',
    icon: 'Droplets',
    category: 'mobile',
    price: 'Starting at £99',
    slug: 'water-damage-repair'
  },
  {
    id: 'software-troubleshooting',
    title: 'Software Troubleshooting',
    description: 'Resolve software issues, crashes, and performance problems.',
    icon: 'Settings',
    category: 'mobile',
    price: 'Starting at £49',
    slug: 'mobile-software-troubleshooting'
  },
  {
    id: 'data-recovery-mobile',
    title: 'Data Recovery',
    description: 'Recover lost photos, contacts, and important data from damaged devices.',
    icon: 'HardDrive',
    category: 'mobile',
    price: 'Starting at £129',
    slug: 'mobile-data-recovery'
  },
  {
    id: 'phone-unlocking',
    title: 'Phone Unlocking',
    description: 'Unlock your device to work with any carrier network.',
    icon: 'Unlock',
    category: 'mobile',
    price: 'Starting at £39',
    slug: 'phone-unlocking'
  },
  // Computer Repairs
  {
    id: 'hardware-repairs',
    title: 'Hardware Repairs',
    description: 'Motherboard, hard drive, and component replacement services.',
    icon: 'Cpu',
    category: 'computer',
    price: 'Starting at £149',
    slug: 'hardware-repairs'
  },
  {
    id: 'software-troubleshooting-pc',
    title: 'Software Troubleshooting',
    description: 'Operating system issues, driver problems, and software conflicts.',
    icon: 'Monitor',
    category: 'computer',
    price: 'Starting at £79',
    slug: 'computer-software-troubleshooting'
  },
  {
    id: 'virus-removal',
    title: 'Virus & Malware Removal',
    description: 'Complete system cleaning and security optimization.',
    icon: 'Shield',
    category: 'computer',
    price: 'Starting at £89',
    slug: 'virus-malware-removal'
  },
  {
    id: 'data-backup-recovery',
    title: 'Data Backup & Recovery',
    description: 'Professional data recovery and backup solutions.',
    icon: 'Database',
    category: 'computer',
    price: 'Starting at £179',
    slug: 'data-backup-recovery'
  },
  {
    id: 'os-installation',
    title: 'OS Installation & Updates',
    description: 'Fresh operating system installation and update services.',
    icon: 'Download',
    category: 'computer',
    price: 'Starting at £99',
    slug: 'os-installation-updates'
  },
  {
    id: 'custom-pc-building',
    title: 'Custom PC Building',
    description: 'Build custom computers tailored to your specific needs.',
    icon: 'PcCase',
    category: 'computer',
    price: 'Starting at £299',
    slug: 'custom-pc-building'
  },
  {
    id: 'network-setup',
    title: 'Network Setup',
    description: 'Home and office network configuration and troubleshooting.',
    icon: 'Wifi',
    category: 'computer',
    price: 'Starting at £119',
    slug: 'network-setup'
  },
  {
    id: 'peripheral-repairs',
    title: 'Peripheral Repairs',
    description: 'Printer, scanner, and other peripheral device repairs.',
    icon: 'Printer',
    category: 'computer',
    price: 'Starting at £69',
    slug: 'peripheral-repairs'
  },
  // Additional Services
  {
    id: 'click-collect',
    title: 'Click & Collect',
    description: 'Convenient click and collect service for device repairs.',
    icon: 'Package',
    category: 'service',
    price: 'Free Service',
    slug: 'click-collect'
  },
  {
    id: 'postal-service',
    title: 'Postal Service',
    description: 'Secure postal repair service with insured shipping.',
    icon: 'Mail',
    category: 'service',
    price: 'From £9.99',
    slug: 'postal-service'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Lead Technician & Founder',
    bio: 'With over 15 years of experience in electronics repair, John founded Evolution PC Repairs to provide reliable and affordable repair services across South Wales.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Mobile Repair', 'Data Recovery', 'Hardware Diagnosis']
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Senior Mobile Technician',
    bio: 'Sarah specializes in mobile device repairs and has extensive experience with all major smartphone brands, serving customers across Llanelli and Swansea.',
    image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Screen Repair', 'Water Damage', 'Software Issues']
  },
  {
    id: 'mike-chen',
    name: 'Mike Chen',
    role: 'Computer Systems Specialist',
    bio: 'Mike handles complex computer repairs and custom builds, bringing 12 years of IT experience to customers in Cardiff, Carmarthen, and surrounding areas.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Custom Builds', 'Network Setup', 'System Optimization']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emily Rodriguez',
    role: 'Small Business Owner, Swansea',
    content: 'Exceptional service! They fixed my laptop water damage when everyone else said it was hopeless. Got all my business data back!',
    rating: 5,
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'David Thompson',
    role: 'Graphic Designer, Cardiff',
    content: 'Quick turnaround on my iPhone screen replacement. Professional service and fair pricing. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Lisa Park',
    role: 'Teacher, Llanelli',
    content: 'They built me a custom PC for my home office. Great communication throughout the process and excellent results.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Robert Wilson',
    role: 'Freelancer, Carmarthen',
    content: 'Saved my MacBook from a virus attack. The team was knowledgeable and got everything working perfectly again.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'iphone-14-screen',
    title: 'iPhone 14 Pro Screen Replacement',
    description: 'Complete screen replacement after severe crack damage',
    category: 'smartphone',
    beforeImage: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
    issues: ['Severely cracked display', 'Touch responsiveness issues', 'Display color distortion'],
    solutions: ['Genuine Apple display replacement', 'Calibrated touch sensitivity', 'Quality testing'],
    clientFeedback: 'Looks and works like new! Amazing job.'
  },
  {
    id: 'laptop-water-damage',
    title: 'MacBook Pro Water Damage Recovery',
    description: 'Complete restoration after coffee spill incident',
    category: 'laptop',
    beforeImage: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
    issues: ['Liquid damage to motherboard', 'Keyboard malfunction', 'Data at risk'],
    solutions: ['Component-level cleaning', 'Keyboard replacement', 'Full data recovery'],
    clientFeedback: 'Thought my laptop was done for. They saved everything!'
  },
  {
    id: 'gaming-pc-build',
    title: 'Custom Gaming PC Build',
    description: 'High-performance gaming computer with RGB lighting',
    category: 'desktop',
    beforeImage: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600',
    issues: ['Needed high-end gaming performance', 'Budget considerations', 'Future upgrade path'],
    solutions: ['RTX 4070 graphics card', 'AMD Ryzen 7 processor', 'Modular design for upgrades'],
    clientFeedback: 'Runs every game perfectly. Great value for money!'
  },
  {
    id: 'samsung-battery-replacement',
    title: 'Samsung Galaxy S23 Battery Replacement',
    description: 'Battery replacement for improved performance',
    category: 'smartphone',
    beforeImage: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
    issues: ['Rapid battery drain', 'Device overheating', 'Unexpected shutdowns'],
    solutions: ['High-capacity battery installation', 'Thermal management optimization', 'Performance testing'],
    clientFeedback: 'Battery life is better than when it was new!'
  },
  {
    id: 'desktop-upgrade',
    title: 'Desktop Computer Upgrade',
    description: 'Complete system upgrade for enhanced performance',
    category: 'desktop',
    beforeImage: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600',
    issues: ['Slow performance', 'Outdated components', 'Insufficient storage'],
    solutions: ['SSD upgrade', 'RAM expansion', 'Graphics card upgrade'],
    clientFeedback: 'Feels like a brand new computer!'
  },
  {
    id: 'tablet-screen-repair',
    title: 'iPad Pro Screen Repair',
    description: 'Professional tablet screen replacement',
    category: 'tablet',
    beforeImage: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=600',
    afterImage: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600',
    issues: ['Cracked screen', 'Touch issues', 'Display problems'],
    solutions: ['Genuine screen replacement', 'Touch calibration', 'Quality testing'],
    clientFeedback: 'Perfect repair, looks brand new!'
  }
];

// Service-specific testimonials
export const serviceTestimonials = {
  'screen-replacement': [
    {
      id: 'screen-1',
      name: 'David Thompson',
      role: 'Graphic Designer, Cardiff',
      content: 'Quick turnaround on my iPhone screen replacement. Professional service and fair pricing. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'screen-2',
      name: 'Maria Garcia',
      role: 'Student, Swansea',
      content: 'My Samsung Galaxy screen was completely shattered. They replaced it with a genuine part and it looks brand new!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  'battery-replacement': [
    {
      id: 'battery-1',
      name: 'James Wilson',
      role: 'Business Owner, Llanelli',
      content: 'My iPhone battery was draining in 2 hours. After replacement, it lasts all day again. Excellent service!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  'water-damage-repair': [
    {
      id: 'water-1',
      name: 'Emily Rodriguez',
      role: 'Small Business Owner, Swansea',
      content: 'Dropped my phone in water and thought it was gone forever. They saved it and recovered all my data!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  'virus-malware-removal': [
    {
      id: 'virus-1',
      name: 'Robert Wilson',
      role: 'Freelancer, Carmarthen',
      content: 'Saved my MacBook from a virus attack. The team was knowledgeable and got everything working perfectly again.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  'custom-pc-building': [
    {
      id: 'custom-1',
      name: 'Lisa Park',
      role: 'Teacher, Llanelli',
      content: 'They built me a custom PC for my home office. Great communication throughout the process and excellent results.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  'network-setup': [
    {
      id: 'network-1',
      name: 'Mark Davies',
      role: 'Home Office, Neath',
      content: 'Professional network setup for my home office. Fast, reliable connection throughout the house now.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  'click-collect': [
    {
      id: 'click-1',
      name: 'Sarah Williams',
      role: 'Busy Parent, Ammanford',
      content: 'Click & collect service is so convenient! Dropped off my laptop and picked it up fixed the next day.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  'postal-service': [
    {
      id: 'postal-1',
      name: 'Tom Evans',
      role: 'Remote Worker, Pembrokeshire',
      content: 'Postal service was perfect for my rural location. Secure packaging and quick turnaround.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]
};

// Related services mapping
export const relatedServices = {
  'screen-replacement': ['battery-replacement', 'camera-repair', 'charging-port-repair'],
  'battery-replacement': ['screen-replacement', 'charging-port-repair', 'mobile-software-troubleshooting'],
  'charging-port-repair': ['battery-replacement', 'screen-replacement', 'water-damage-repair'],
  'camera-repair': ['screen-replacement', 'mobile-software-troubleshooting', 'water-damage-repair'],
  'water-damage-repair': ['mobile-data-recovery', 'screen-replacement', 'battery-replacement'],
  'mobile-software-troubleshooting': ['virus-malware-removal', 'mobile-data-recovery', 'phone-unlocking'],
  'mobile-data-recovery': ['water-damage-repair', 'mobile-software-troubleshooting', 'hardware-repairs'],
  'phone-unlocking': ['mobile-software-troubleshooting', 'battery-replacement', 'screen-replacement'],
  'hardware-repairs': ['data-backup-recovery', 'computer-software-troubleshooting', 'custom-pc-building'],
  'computer-software-troubleshooting': ['virus-malware-removal', 'os-installation-updates', 'hardware-repairs'],
  'virus-malware-removal': ['computer-software-troubleshooting', 'data-backup-recovery', 'os-installation-updates'],
  'data-backup-recovery': ['hardware-repairs', 'virus-malware-removal', 'mobile-data-recovery'],
  'os-installation-updates': ['computer-software-troubleshooting', 'virus-malware-removal', 'hardware-repairs'],
  'custom-pc-building': ['hardware-repairs', 'network-setup', 'peripheral-repairs'],
  'network-setup': ['custom-pc-building', 'computer-software-troubleshooting', 'peripheral-repairs'],
  'peripheral-repairs': ['network-setup', 'computer-software-troubleshooting', 'hardware-repairs'],
  'click-collect': ['postal-service', 'screen-replacement', 'battery-replacement'],
  'postal-service': ['click-collect', 'data-backup-recovery', 'hardware-repairs']
};