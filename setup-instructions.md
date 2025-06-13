# Evolution PC Repairs - Professional Setup Instructions

## 🎯 Quick Start Guide

### Option 1: Automated Installation (Recommended)

The easiest way to get started is using our professional installation script:

```bash
# Clone the repository
git clone <repository-url>
cd evolution-pc-repairs

# Make the script executable
chmod +x install.sh

# Run the installation script
./install.sh
```

The script will guide you through:
- ✅ System requirements check
- ✅ Node.js installation (if needed)
- ✅ Interactive environment configuration
- ✅ Dependency installation
- ✅ Project building
- ✅ Application startup

### Option 2: Manual Installation

For advanced users who prefer manual setup:

```bash
# Install Node.js 20.x LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup project
git clone <repository-url>
cd evolution-pc-repairs
npm install

# Configure environment
cp .env.example .env
nano .env

# Build and start
npm run build
npm run dev
```

## 🔧 Detailed Configuration

### 1. Environment Variables Setup

Create and configure your `.env` file:

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

### 2. SMTP Email Configuration

For Gmail (recommended):

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `SMTP_PASS`

3. **Alternative SMTP Providers:**
   - **Outlook:** smtp-mail.outlook.com:587
   - **Yahoo:** smtp.mail.yahoo.com:587
   - **Custom SMTP:** Use your hosting provider's settings

### 3. Database Setup (Optional)

#### Using phpMyAdmin:
1. Create new database: `evolution_pc_repairs`
2. Import file: `database/evolution_pc_repairs.sql`
3. Update `DATABASE_URL` in `.env`

#### Using MySQL Command Line:
```bash
mysql -u root -p
CREATE DATABASE evolution_pc_repairs;
USE evolution_pc_repairs;
SOURCE database/evolution_pc_repairs.sql;
```

#### Database Features:
- **Bookings:** Appointment management
- **Contacts:** Form submissions
- **Customers:** Client records
- **Repairs:** Order tracking
- **Inventory:** Parts management

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
- Runs on port 4000
- Hot reloading enabled
- Development optimizations

### Production Mode
```bash
npm run build
npm start
```
- Optimized build
- Better performance
- Production ready

## 🌐 Accessing the Website

Once running, access your website at:
- **Local:** http://localhost:4000
- **Network:** http://[your-ip]:4000

### Available Pages:
- **Homepage:** `/`
- **Services:** `/services`
- **About:** `/about`
- **Portfolio:** `/portfolio`
- **Contact:** `/contact`
- **Booking:** `/booking`
- **Custom PC Builds:** `/custom-pc-builds`
- **Network Setup:** `/network-setup`

## 🛠️ Customization

### 1. Company Information
Update in `lib/data.ts`:
- Contact details
- Service offerings
- Team members
- Testimonials

### 2. Styling
- **Colors:** `tailwind.config.ts`
- **Global styles:** `app/globals.css`
- **Components:** `components/ui/`

### 3. Content
- **Services:** `app/services/`
- **Images:** Update image URLs in components
- **SEO:** Meta tags in page files

## 📧 Email Configuration Testing

Test your email setup:

1. **Start the application**
2. **Submit a booking form**
3. **Check email delivery**
4. **Verify SMTP logs**

Common issues:
- **Authentication failed:** Check app password
- **Connection refused:** Verify SMTP host/port
- **Emails in spam:** Configure SPF/DKIM records

## 🗄️ Database Management

### Viewing Data
Access your database to view:
- Booking submissions
- Contact form entries
- Customer records
- Repair orders

### Backup
```bash
mysqldump -u username -p evolution_pc_repairs > backup.sql
```

### Restore
```bash
mysql -u username -p evolution_pc_repairs < backup.sql
```

## 🔍 Troubleshooting

### Common Issues

#### Port 4000 Already in Use
```bash
# Find process using port 4000
lsof -i :4000

# Kill the process
kill -9 <PID>

# Or use different port
npm run dev -- -p 3000
```

#### Node.js Version Issues
```bash
# Check version
node --version

# Install correct version
nvm install 20
nvm use 20
```

#### Permission Errors
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

#### Build Failures
```bash
# Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Email Issues

#### Gmail Authentication
- Ensure 2FA is enabled
- Use app-specific password
- Check "Less secure app access" (if needed)

#### SMTP Connection
- Verify host and port
- Check firewall settings
- Test with telnet: `telnet smtp.gmail.com 587`

## 📊 Performance Optimization

### Production Optimizations
- Image optimization enabled
- Code splitting active
- Static generation for pages
- Compression enabled

### Monitoring
- Check build output for bundle sizes
- Monitor Core Web Vitals
- Use browser dev tools for performance

## 🛡️ Security Considerations

### Environment Variables
- Never commit `.env` files
- Use strong passwords
- Rotate credentials regularly

### Database Security
- Use strong database passwords
- Limit database user permissions
- Regular security updates

### Application Security
- Input validation enabled
- XSS protection active
- CSRF protection implemented

## 🚀 Deployment Options

### 1. Traditional Hosting
- Upload built files to web server
- Configure environment variables
- Set up database connection

### 2. Cloud Platforms
- **Vercel:** Automatic deployments
- **Netlify:** Static site hosting
- **DigitalOcean:** VPS hosting

### 3. Docker Deployment
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "start"]
```

## 📞 Support

Need help? Contact us:

- **Email:** support@evolutionpcrepairs.com
- **Phone:** 01554 123456
- **Emergency:** 01554 999123
- **Address:** ERW Road, Llanelli, SA15 2TE

## 🎉 Success!

Your Evolution PC Repairs website is now ready to serve customers across South Wales with professional computer and mobile phone repair services!

### Next Steps:
1. **Test all functionality**
2. **Configure email notifications**
3. **Set up database (if needed)**
4. **Customize content and images**
5. **Deploy to production**

Welcome to Evolution PC Repairs! 🚀