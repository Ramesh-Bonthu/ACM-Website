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
      email: "adithyajalluri2005@gmail.com",
      linkedin: "https://www.linkedin.com/in/adithya-jalluri-748b69279/",
      github: "https://github.com/adithyajalluri2005",
      description: "As Chairperson of the ACM Student Chapter, I strive to foster innovation, collaboration, and learning among students. Our chapter serves as a platform to explore technology, share knowledge, and grow as future leaders in computing."
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
      email: "mohanavamsi963@gmail.com",
      linkedin: "https://www.linkedin.com/in/bankupalli-ramamohana-vamsi-ab69aa289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/vamsi8041",
      description: "Enthusiastic Computer Science student with strong skills in Python, Machine Learning, and Web Development."
    },
    {
      name: "Manoj Kumar",
      position: "Co-Secretary & Membership Lead",
      year: "Final Year",
      branch: "CSE - AI & DS",
      email: "manojkumer844@gmail.com",
      linkedin: "https://www.linkedin.com/in/manoj-kumar-goudu-834285254/",
      github: "https://github.com/manojkumarGgithub",
      description: "Handling financial matters and budget planning for chapter activities.Be happy and Stay healthy"
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
      email: "22341a05g2@gmrit.edu.in",
      linkedin: "https://www.linkedin.com/in/sadik-shaik-982ba0166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/sadik99493",
      description: "Passionate about coding and problem-solving, leading competitive programming at ACM"
    }, {
      name: "P. Susmitha",
      position: "Web lead & Event Manager",
      year: "Final Year",
      branch: "Computer Science and Engineering",
      email: "22341A05E3@gmrit.edu.in",
      linkedin: "https://www.linkedin.com/in/susmitha-pottipogu-b7256428b",
      github: "https://github.com/susmitha712",
      description: "Full-stack developer skilled in MERN, PHP, and MySQL with hands-on project experience. 4⭐ Python coder on HackerRank and problem-solver with 500+ challenges solved on CodeChef."
    }, {
      name: "J. Pradeep",
      position: "Multimedia lead ",
      year: "Final Year",
      branch: "CSE - AI & ML",
      email: "jamipradeep2003@gmail.com",
      linkedin: "https://www.linkedin.com/in/jami-pradeep-95b68036a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/PradeepJami18",
      description: "The more you try, the more you learn, so just keep going."
    }, {
      name: "M. Abhi Ram",
      position: "Design Lead",
      year: "Final Year",
      branch: "Information Technology",
      email: "abhirammeesala12@gmail.com",
      linkedin: "www.linkedin.com/in/abhirammeesala7",
      github: "https://github.com/Abhiramarya7",
      description: "-> Engineering ideas, designing possibilities."
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