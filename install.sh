#!/bin/bash

# Evolution PC Repairs - Professional Installation Script
# Author: Evolution PC Repairs Development Team
# Version: 1.0.0
# Description: Automated setup script for Evolution PC Repairs website

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# ASCII Art Banner
show_banner() {
    clear
    echo -e "${CYAN}"
    cat << "EOF"
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║    ███████╗██╗   ██╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗ ║
║    ██╔════╝██║   ██║██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║ ║
║    █████╗  ██║   ██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║ ║
║    ██╔══╝  ╚██╗ ██╔╝██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║ ║
║    ███████╗ ╚████╔╝ ╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║ ║
║    ╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ║
║                                                                               ║
║                           ██████╗  ██████╗                                   ║
║                           ██╔══██╗██╔════╝                                   ║
║                           ██████╔╝██║                                        ║
║                           ██╔═══╝ ██║                                        ║
║                           ██║     ╚██████╗                                   ║
║                           ╚═╝      ╚═════╝                                   ║
║                                                                               ║
║                    ██████╗ ███████╗██████╗  █████╗ ██╗██████╗ ███████╗       ║
║                    ██╔══██╗██╔════╝██╔══██╗██╔══██╗██║██╔══██╗██╔════╝       ║
║                    ██████╔╝█████╗  ██████╔╝███████║██║██████╔╝███████╗       ║
║                    ██╔══██╗██╔══╝  ██╔═══╝ ██╔══██║██║██╔══██╗╚════██║       ║
║                    ██║  ██║███████╗██║     ██║  ██║██║██║  ██║███████║       ║
║                    ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝       ║
║                                                                               ║
║                        Professional Installation Script                       ║
║                              South Wales, UK                                  ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}"
    echo -e "${WHITE}Welcome to Evolution PC Repairs Professional Installation Script${NC}"
    echo -e "${BLUE}Serving Llanelli, Swansea, Cardiff, Carmarthen, Ammanford & Neath${NC}"
    echo ""
}

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

# Error logging function
error() {
    echo -e "${RED}[ERROR] $1${NC}" >&2
}

# Warning logging function
warn() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Info logging function
info() {
    echo -e "${BLUE}[INFO] $1${NC}"
}

# Success logging function
success() {
    echo -e "${GREEN}[SUCCESS] $1${NC}"
}

# Progress bar function
show_progress() {
    local duration=$1
    local message=$2
    echo -ne "${CYAN}$message${NC}"
    
    for ((i=0; i<=duration; i++)); do
        echo -ne "."
        sleep 0.1
    done
    echo -e " ${GREEN}✓${NC}"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        error "This script should not be run as root for security reasons."
        echo "Please run as a regular user with sudo privileges."
        exit 1
    fi
}

# Check system requirements
check_requirements() {
    log "Checking system requirements..."
    
    # Check OS
    if [[ "$OSTYPE" != "linux-gnu"* ]] && [[ "$OSTYPE" != "darwin"* ]]; then
        error "This script requires Linux or macOS"
        exit 1
    fi
    
    # Check for required commands
    local required_commands=("curl" "wget" "git")
    for cmd in "${required_commands[@]}"; do
        if ! command -v $cmd &> /dev/null; then
            error "$cmd is required but not installed."
            echo "Please install $cmd and run this script again."
            exit 1
        fi
    done
    
    success "System requirements check passed"
}

# Clean project function to resolve webpack caching issues
clean_project() {
    log "Cleaning project to resolve potential caching issues..."
    
    # Remove node_modules directory
    if [[ -d "node_modules" ]]; then
        info "Removing node_modules directory..."
        rm -rf node_modules
        success "node_modules directory removed"
    fi
    
    # Remove package-lock.json
    if [[ -f "package-lock.json" ]]; then
        info "Removing package-lock.json..."
        rm -f package-lock.json
        success "package-lock.json removed"
    fi
    
    # Remove .next build cache
    if [[ -d ".next" ]]; then
        info "Removing .next build cache..."
        rm -rf .next
        success ".next build cache removed"
    fi
    
    # Remove npm cache (optional but helpful)
    info "Clearing npm cache..."
    npm cache clean --force 2>/dev/null || true
    
    success "Project cleaned successfully"
}

# Check and install Node.js
check_nodejs() {
    log "Checking Node.js installation..."
    
    if command -v node &> /dev/null; then
        local node_version=$(node --version | cut -d'v' -f2)
        local major_version=$(echo $node_version | cut -d'.' -f1)
        
        if [[ $major_version -ge 18 ]]; then
            success "Node.js $node_version is already installed"
            return 0
        else
            warn "Node.js version $node_version is too old. Minimum required: 18.x"
        fi
    fi
    
    info "Installing Node.js 20.x LTS..."
    
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Install Node.js on Linux
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # Install Node.js on macOS
        if command -v brew &> /dev/null; then
            brew install node@20
        else
            error "Homebrew is required on macOS. Please install it first."
            exit 1
        fi
    fi
    
    success "Node.js installed successfully"
}

# Check and install npm
check_npm() {
    log "Checking npm installation..."
    
    if command -v npm &> /dev/null; then
        local npm_version=$(npm --version)
        success "npm $npm_version is available"
    else
        error "npm is not installed"
        exit 1
    fi
}

# Interactive configuration
configure_environment() {
    log "Starting interactive configuration..."
    echo ""
    echo -e "${YELLOW}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║                  Environment Configuration                 ║${NC}"
    echo -e "${YELLOW}╚════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    # SMTP Configuration
    echo -e "${CYAN}📧 SMTP Email Configuration${NC}"
    echo "Configure email settings for booking confirmations:"
    echo ""
    
    read -p "SMTP Host (default: smtp.gmail.com): " smtp_host
    smtp_host=${smtp_host:-smtp.gmail.com}
    
    read -p "SMTP Port (default: 587): " smtp_port
    smtp_port=${smtp_port:-587}
    
    read -p "SMTP Username (your email): " smtp_user
    while [[ -z "$smtp_user" ]]; do
        echo -e "${RED}SMTP username is required${NC}"
        read -p "SMTP Username (your email): " smtp_user
    done
    
    read -s -p "SMTP Password (app password): " smtp_pass
    echo ""
    while [[ -z "$smtp_pass" ]]; do
        echo -e "${RED}SMTP password is required${NC}"
        read -s -p "SMTP Password (app password): " smtp_pass
        echo ""
    done
    
    read -p "From Email (default: support@evolutionpcrepairs.com): " smtp_from
    smtp_from=${smtp_from:-support@evolutionpcrepairs.com}
    
    echo ""
    echo -e "${CYAN}🌐 Application Configuration${NC}"
    
    read -p "Site URL (default: http://localhost:4000): " site_url
    site_url=${site_url:-http://localhost:4000}
    
    # Database Configuration (Optional)
    echo ""
    echo -e "${CYAN}🗄️  Database Configuration (Optional)${NC}"
    echo "Leave blank to skip database configuration:"
    
    read -p "Database URL (optional): " database_url
    
    # Create .env file
    log "Creating environment configuration file..."
    
    cat > .env << EOF
# SMTP Configuration for email notifications
SMTP_HOST=$smtp_host
SMTP_PORT=$smtp_port
SMTP_USER=$smtp_user
SMTP_PASS=$smtp_pass
SMTP_FROM=$smtp_from

# Application Configuration
NEXT_PUBLIC_SITE_URL=$site_url

# Database Configuration (if using external database)
DATABASE_URL=$database_url
EOF
    
    success "Environment configuration saved to .env"
}

# Install dependencies
install_dependencies() {
    log "Installing project dependencies..."
    show_progress 20 "Installing npm packages"
    
    if npm install; then
        success "Dependencies installed successfully"
    else
        error "Failed to install dependencies"
        exit 1
    fi
}

# Build the project
build_project() {
    log "Building the project..."
    show_progress 30 "Building Next.js application"
    
    if npm run build; then
        success "Project built successfully"
    else
        error "Build failed"
        exit 1
    fi
}

# Setup database (optional)
setup_database() {
    if [[ -n "$database_url" ]]; then
        log "Database setup instructions:"
        echo ""
        echo -e "${YELLOW}📋 Database Setup Instructions:${NC}"
        echo "1. Import the SQL file: database/evolution_pc_repairs.sql"
        echo "2. Use phpMyAdmin or MySQL command line:"
        echo "   mysql -u username -p database_name < database/evolution_pc_repairs.sql"
        echo ""
        echo -e "${BLUE}The database schema includes:${NC}"
        echo "   • Bookings table for appointment management"
        echo "   • Contact submissions for inquiries"
        echo "   • Customers and repair orders tracking"
        echo "   • Inventory management for parts"
        echo ""
    fi
}

# Start the application
start_application() {
    log "Starting Evolution PC Repairs application..."
    echo ""
    echo -e "${GREEN}🚀 Starting the application on port 4000...${NC}"
    echo ""
    
    # Start in development mode
    npm run dev &
    local app_pid=$!
    
    # Wait a moment for the server to start
    sleep 3
    
    # Check if the application is running
    if kill -0 $app_pid 2>/dev/null; then
        success "Application started successfully!"
        echo ""
        echo -e "${CYAN}╔════════════════════════════════════════════════════════════╗${NC}"
        echo -e "${CYAN}║                    🎉 Installation Complete! 🎉            ║${NC}"
        echo -e "${CYAN}╚════════════════════════════════════════════════════════════╝${NC}"
        echo ""
        echo -e "${WHITE}Your Evolution PC Repairs website is now running at:${NC}"
        echo -e "${GREEN}🌐 $site_url${NC}"
        echo ""
        echo -e "${YELLOW}📱 Services Available:${NC}"
        echo "   • Mobile Phone Repairs"
        echo "   • Computer Repairs"
        echo "   • Custom PC Builds"
        echo "   • Network Setup"
        echo "   • Click & Collect Service"
        echo "   • Postal Service (UK-wide)"
        echo ""
        echo -e "${BLUE}🏢 Coverage Areas:${NC}"
        echo "   • Llanelli, Swansea, Cardiff"
        echo "   • Carmarthen, Ammanford, Neath"
        echo ""
        echo -e "${PURPLE}📞 Contact Information:${NC}"
        echo "   • Phone: 01554 123456"
        echo "   • Emergency: 01554 999123"
        echo "   • Email: support@evolutionpcrepairs.com"
        echo "   • Address: ERW Road, Llanelli, SA15 2TE"
        echo ""
        echo -e "${CYAN}Press Ctrl+C to stop the application${NC}"
        echo ""
        
        # Keep the script running to show logs
        wait $app_pid
    else
        error "Failed to start the application"
        exit 1
    fi
}

# Cleanup function
cleanup() {
    echo ""
    log "Cleaning up..."
    # Kill any background processes
    jobs -p | xargs -r kill
    echo ""
    echo -e "${YELLOW}Thank you for using Evolution PC Repairs!${NC}"
    echo -e "${BLUE}For support, contact: support@evolutionpcrepairs.com${NC}"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Main installation function
main() {
    show_banner
    
    echo -e "${WHITE}This script will install and configure Evolution PC Repairs website${NC}"
    echo -e "${BLUE}Press Enter to continue or Ctrl+C to cancel...${NC}"
    read -r
    
    check_root
    check_requirements
    check_nodejs
    check_npm
    clean_project
    configure_environment
    install_dependencies
    build_project
    setup_database
    
    echo ""
    echo -e "${GREEN}✅ Installation completed successfully!${NC}"
    echo ""
    echo -e "${YELLOW}Would you like to start the application now? (y/n)${NC}"
    read -r start_now
    
    if [[ $start_now =~ ^[Yy]$ ]]; then
        start_application
    else
        echo ""
        echo -e "${CYAN}To start the application later, run:${NC}"
        echo -e "${WHITE}npm run dev${NC}"
        echo ""
        echo -e "${GREEN}Installation complete! 🎉${NC}"
    fi
}

# Run main function
main "$@"