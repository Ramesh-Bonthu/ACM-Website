import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Team = () => {
  const coreTeam = [
    {
      name: "Arjun Patel",
      position: "Chairperson",
      year: "Final Year",
      branch: "Computer Science Engineering",
      email: "arjun.patel@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/arjunpatel",
      github: "github.com/arjunpatel",
      description: "Leading the chapter with vision and dedication to advance computing education."
    },
    {
      name: "Sneha Reddy",
      position: "Vice Chairperson",
      year: "Third Year",
      branch: "Information Technology",
      email: "sneha.reddy@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/snehareddy",
      github: "github.com/snehareddy",
      description: "Supporting chapter operations and coordinating with various committees."
    },
    {
      name: "Rohit Kumar",
      position: "Secretary",
      year: "Third Year", 
      branch: "Computer Science Engineering",
      email: "rohit.kumar@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/rohitkumar",
      github: "github.com/rohitkumar",
      description: "Managing communications and maintaining chapter documentation."
    },
    {
      name: "Priya Sharma",
      position: "Treasurer",
      year: "Second Year",
      branch: "Information Technology",
      email: "priya.sharma@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/priyasharma",
      github: "github.com/priyasharma",
      description: "Handling financial matters and budget planning for chapter activities."
    },
    {
      name: "Kiran Venkat",
      position: "Technical Lead",
      year: "Final Year",
      branch: "Computer Science Engineering",
      email: "kiran.venkat@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/kiranvenkat",
      github: "github.com/kiranvenkat",
      description: "Overseeing technical workshops and coding competitions."
    },
    {
      name: "Anitha Rao",
      position: "Events Coordinator",
      year: "Third Year",
      branch: "Electronics & Communication",
      email: "anitha.rao@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/anitharao",
      github: "github.com/anitharao",
      description: "Planning and executing chapter events and industry interactions."
    }
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Core <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated student leaders who drive our chapter's mission forward,
            organizing events, fostering community, and creating opportunities for everyone.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreTeam.map((member, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold">{member.position}</p>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{member.year} • {member.branch}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  {member.description}
                </p>
                
                {/* Contact Links */}
                <div className="flex justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = `mailto:${member.email}`}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
                
                <div className="flex justify-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(`https://${member.linkedin}`, '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(`https://${member.github}`, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-lg p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students who want to contribute to our chapter's growth.
            Leadership positions are available for dedicated members who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <a href="/contact">
                Get Involved <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>

        {/* Team Structure */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Team Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-card text-center">
              <h3 className="font-semibold text-foreground mb-2">Executive Committee</h3>
              <p className="text-sm text-muted-foreground">
                Strategic planning and overall chapter management
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-card text-center">
              <h3 className="font-semibold text-foreground mb-2">Technical Team</h3>
              <p className="text-sm text-muted-foreground">
                Workshop coordination and technical content development
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-card text-center">
              <h3 className="font-semibold text-foreground mb-2">Events Team</h3>
              <p className="text-sm text-muted-foreground">
                Event planning, execution, and industry partnerships
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-card text-center">
              <h3 className="font-semibold text-foreground mb-2">Outreach Team</h3>
              <p className="text-sm text-muted-foreground">
                Community engagement and external communications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;