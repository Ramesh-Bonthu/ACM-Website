import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Team = () => {
  const coreTeam = [
    {
      name: "J. Adithya",
      position: "Chairperson",
      year: "Final Year",
      branch: "Computer Science and Engineering",
      email: "adithya@gmrit.edu.in",
      linkedin: "linkedin.com/in/arjunpatel",
      github: "github.com/arjunpatel",
      description: "Leading the chapter with vision and dedication to advance computing education."
    },
    {
      name: "Nitish Durga",
      position: "Vice Chairperson",
      year: "Final Year",
      branch: "Computer Science and Engineering",
      email: "bndnitish24@gmail.com",
      linkedin: "https://www.linkedin.com/in/nitishbytaru/",
      github: "https://github.com/nitishbytaru",
      description: "I’m a CS student, always learning, jumping from one framework to another, and recharging my brain by getting lost in novels."
    },
    {
      name: "B. R. Vamsi",
      position: "Secretary",
      year: "Final Year",
      branch: "Computer Science and Engineering",
      email: "rohit.kumar@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/rohitkumar",
      github: "github.com/rohitkumar",
      description: "Managing communications and maintaining chapter documentation."
    },
    {
      name: "Manoj Kumar",
      position: "Co-Secretary & Membership Lead",
      year: "Final Year",
      branch: "CSE - AI & DS",
      email: "priya.sharma@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/priyasharma",
      github: "github.com/priyasharma",
      description: "Handling financial matters and budget planning for chapter activities."
    },
    {
      name: "D. Sai Teja",
      position: "Web Lead & Treasurer",
      year: "Final Year",
      branch: "Computer Science and Engineering",
      email: "saiteja.d.555@gmail.com",
      linkedin: "https://www.linkedin.com/in/damarasingi-sai-teja-846305262",
      github: "https://github.com/DSaiTeja123",
      description: "I'm a Full Stack Developer with expertise in MERN and Django, and a proactive team player with strong problem-solving skills. I have solid programming experience in Python and C++, and hold a 2-star rating on CodeChef."
    },
    {
      name: "Shaik Sadik",
      position: "CP Lead",
      year: "Final Year",
      branch: "Computer Science and Engineering",
      email: "anitha.rao@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/anitharao",
      github: "github.com/anitharao",
      description: "Planning and executing chapter events and industry interactions."
    }, {
      name: "P. Susmitha",
      position: "Event Manager",
      year: "Final Year",
      branch: "Computer Science and Engineering",
      email: "priya.sharma@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/priyasharma",
      github: "github.com/priyasharma",
      description: "Handling financial matters and budget planning for chapter activities."
    }, {
      name: "J. Pradeep",
      position: "Event Manager",
      year: "Final Year",
      branch: "CSE - AI & ML",
      email: "priya.sharma@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/priyasharma",
      github: "github.com/priyasharma",
      description: "Handling financial matters and budget planning for chapter activities."
    }, {
      name: "M. Abhi Ram",
      position: "Design Lead",
      year: "Final Year",
      branch: "Information Technology",
      email: "priya.sharma@student.gmrit.edu.in",
      linkedin: "linkedin.com/in/priyasharma",
      github: "github.com/priyasharma",
      description: "Handling financial matters and budget planning for chapter activities."
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
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