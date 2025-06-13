# Evolution PC Repairs - Professional Website

![Evolution PC Repairs](https://img.shields.io/badge/Evolution%20PC%20Repairs-Professional%20Website-blue)
![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.3-38B2AC)

## 🏢 About Evolution PC Repairs

Professional computer and mobile phone repair services across South Wales. We provide reliable, fast, and affordable repair services for customers in Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, and Neath.

### 📍 Coverage Areas
- **Primary Areas:** Llanelli, Swansea, Cardiff
- **Extended Areas:** Carmarthen, Ammanford, Neath
- **Postal Service:** UK-wide coverage

### 📞 Contact Information
- **Phone:** 01554 123456
- **Emergency:** 01554 999123
- **Email:** support@evolutionpcrepairs.com
- **Address:** ERW Road, Llanelli, SA15 2TE

## 🚀 Quick Installation

### Automated Installation (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd evolution-pc-repairs

# Make the installation script executable
chmod +x install.sh

# Run the professional installation script
./install.sh
```

The installation script will:
- ✅ Check system requirements
- ✅ Install Node.js 20.x LTS (if needed)
- ✅ Configure environment variables interactively
- ✅ Install all dependencies
- ✅ Build the project
- ✅ Start the application on port 4000

### Manual Installation

If you prefer manual installation:

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit environment variables
nano .env

# Build the project
npm run build

# Start the application
npm run dev
```

## 🛠️ System Requirements

- **Node.js:** 18.x or higher (20.x LTS recommended)
- **npm:** 9.x or higher
- **Operating System:** Linux, macOS, or Windows
- **Memory:** 2GB RAM minimum
- **Storage:** 1GB free space

## 🌐 Services Offered

### 📱 Mobile Phone Repairs
- Screen Replacement
- Battery Replacement
- Charging Port Repair
- Camera Repair
- Water Damage Repair
- Software Troubleshooting
- Data Recovery
- Phone Unlocking

### 💻 Computer Repairs
- Hardware Repairs
- Software Troubleshooting
- Virus & Malware Removal
- Data Backup & Recovery
- OS Installation & Updates
- Peripheral Repairs

### 🔧 Specialized Services
- **Custom PC Builds** - Gaming PCs, workstations, budget builds
- **Network Setup** - Home and business network solutions
- **Click & Collect** - Convenient drop-off service
- **Postal Service** - UK-wide repair with insured shipping

## 📁 Project Structure

```
evolution-pc-repairs/
├── app/                          # Next.js 13 App Router
│   ├── about/                    # About us page
│   ├── api/                      # API routes
│   │   ├── bookings/            # Booking API
│   │   └── send-confirmation/   # Email confirmation API
│   ├── booking/                 # Appointment booking
│   ├── contact/                 # Contact page
│   ├── custom-pc-builds/        # Custom PC building service
│   ├── network-setup/           # Network setup service
│   ├── portfolio/               # Portfolio showcase
│   ├── services/                # Service pages
│   │   ├── [slug]/             # Dynamic service pages
│   │   ├── click-collect/      # Click & collect service
│   │   └── postal-service/     # Postal repair service
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/                  # Reusable components
│   ├── layout/                 # Layout components
│   │   ├── header.tsx          # Navigation header
│   │   └── footer.tsx          # Site footer
│   └── ui/                     # UI components (shadcn/ui)
├── database/                   # Database files
│   └── evolution_pc_repairs.sql # MySQL schema
├── lib/                        # Utility libraries
│   ├── data.ts                # Static data
│   └── utils.ts               # Utility functions
├── types/                      # TypeScript definitions
│   └── index.ts               # Type definitions
├── install.sh                 # Professional installation script
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# SMTP Configuration for email notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=support@evolutionpcrepairs.com

# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:4000

# Database Configuration (optional)
DATABASE_URL=mysql://username:password@localhost:3306/evolution_pc_repairs
```

### Database Setup

1. Import the SQL schema:
```bash
mysql -u username -p evolution_pc_repairs < database/evolution_pc_repairs.sql
```

2. Or use phpMyAdmin to import `database/evolution_pc_repairs.sql`

The database includes:
- Bookings management
- Contact form submissions
- Customer records
- Repair order tracking
- Inventory management
- Status logging

## 🚀 Development

### Available Scripts

```bash
# Start development server (port 4000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Development Server

The application runs on **port 4000** by default:
- **Local:** http://localhost:4000
- **Network:** http://[your-ip]:4000

## 🎨 Features

### 🌟 Modern Design
- Responsive design for all devices
- Professional UI with shadcn/ui components
- Tailwind CSS for styling
- Lucide React icons

### 📧 Email Integration
- SMTP email configuration
- Booking confirmation emails
- Contact form notifications
- Professional email templates

### 🗄️ Database Integration
- MySQL/MariaDB support
- Booking management system
- Customer relationship management
- Repair order tracking

### 🔍 SEO Optimized
- Meta tags for all pages
- Structured data markup
- Geographic SEO for South Wales
- Performance optimized

### 📱 Service Management
- Individual service pages
- Dynamic routing
- Service categorization
- Related services suggestions

## 🛡️ Security

- Environment variable protection
- SMTP authentication
- Input validation
- SQL injection prevention
- XSS protection

## 📊 Performance

- Next.js 13 App Router
- Static site generation
- Image optimization
- Code splitting
- Lazy loading

## 🌍 Deployment

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Setup

1. Set production environment variables
2. Configure SMTP settings
3. Set up database connection
4. Configure domain and SSL

## 🤝 Support

For technical support or questions:

- **Email:** support@evolutionpcrepairs.com
- **Phone:** 01554 123456
- **Emergency:** 01554 999123
- **Address:** ERW Road, Llanelli, SA15 2TE

## 📄 License

© 2024 Evolution PC Repairs. All rights reserved.

---

**Evolution PC Repairs** - Professional computer and mobile phone repair services across South Wales. Serving Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, and Neath with expert technicians, genuine parts, and 90-day warranty on all repairs.