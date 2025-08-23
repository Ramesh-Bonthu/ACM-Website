import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. A. V. Ramana",
      designation: "Professor & HOD",
      department: "Computer Science and Engineering",
      qualification: "Ph.D. in Computer Science",
      specialization: "Machine Learning, Data Mining",
      email: "hod_cse@gmrit.edu.in",
      phone: "+91 9876543210",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. Baisakh",
      designation: "Assistant Professor",
      department: "Computer Science and Engineering",
      qualification: "M. Tech in Computer Science",
      specialization: "Cybersecurity, Network Security",
      email: "baisakh@gmrit.edu.in",
      phone: "+91 9876543211",
      image: "/placeholder.svg"
    },
    {
      name: "Ms. Y. Nagamani",
      designation: "Assistant Professor",
      department: "Computer Science and Engineering",
      qualification: "M. Tech in Computer Science",
      specialization: "Cybersecurity, Network Security",
      email: "nagamani.y@gmrit.edu.in",
      phone: "+91 9876543211",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Faculty <span className="bg-gradient-primary bg-clip-text text-transparent">Coordinators</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated faculty members who guide and support the ACM GMRIT chapter activities,
            providing mentorship and expertise to help students achieve their goals.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center text-4xl font-bold text-foreground border-4 border-border">
                  {faculty.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-foreground">{faculty.name}</h3>
                <p className="text-primary font-semibold">{faculty.designation}</p>
                <p className="text-sm text-muted-foreground">{faculty.department}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="bg-gradient-hero rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Qualification</h4>
                  <p className="text-sm text-muted-foreground">{faculty.qualification}</p>
                </div>

                <div className="bg-gradient-hero rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Specialization</h4>
                  <p className="text-sm text-muted-foreground">{faculty.specialization}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`mailto:${faculty.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {faculty.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`tel:${faculty.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {faculty.phone}
                    </a>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = `mailto:${faculty.email}`}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-hero rounded-lg p-8 lg:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Faculty Support & Guidance
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our faculty coordinators play a crucial role in shaping the direction of our chapter activities.
              They provide academic guidance, help organize events, and ensure that our initiatives align with
              educational objectives and industry standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card rounded-lg p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Academic Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Mentoring students in research projects and academic pursuits
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Industry Connections</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging industry relationships to provide internship and job opportunities
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">Event Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting the organization of workshops, seminars, and competitions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;