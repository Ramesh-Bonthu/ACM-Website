import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ACM Chapter Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <img
                  src="/Logo-acm.jpg"
                  alt="ACM Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </div>
              <span className="font-bold text-lg">ACM GMRIT</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Association for Computing Machinery student chapter at GMR Institute of Technology.
              Advancing computing as a science and profession.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>GMR Institute of Technology, Rajam</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>adithyajalluri2005@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 82472 73204</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About ACM
              </a>
              <a href="/events" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Ongoing Events
              </a>
              <a href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ACM GMRIT Student Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;