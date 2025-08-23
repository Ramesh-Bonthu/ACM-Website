import { Brain, Shield, Code, Smartphone, Database, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SIGs = () => {
  const specialInterestGroups = [
    {
      name: "AI/ML SIG",
      icon: <Brain className="h-8 w-8" />,
      description: "Explore artificial intelligence and machine learning through practical projects and research.",
      focus: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
      coordinator: "Rahul Krishnan",
      members: 45,
      activities: ["Weekly ML workshops", "Research paper discussions", "Kaggle competitions"],
      color: "bg-blue-500"
    },
    {
      name: "Cybersecurity SIG",
      icon: <Shield className="h-8 w-8" />,
      description: "Learn about information security, ethical hacking, and protecting digital assets.",
      focus: ["Ethical Hacking", "Network Security", "Cryptography", "Penetration Testing"],
      coordinator: "Priya Sharma",
      members: 38,
      activities: ["CTF competitions", "Security audits", "Awareness campaigns"],
      color: "bg-red-500"
    },
    {
      name: "Web Development SIG",
      icon: <Code className="h-8 w-8" />,
      description: "Master modern web technologies and build scalable web applications.",
      focus: ["React", "Node.js", "Full Stack Development", "Cloud Deployment"],
      coordinator: "Arjun Patel", 
      members: 60,
      activities: ["Project collaborations", "Tech stack workshops", "Open source contributions"],
      color: "bg-green-500"
    },
    {
      name: "Mobile App SIG",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Develop mobile applications for Android and iOS platforms.",
      focus: ["Flutter", "React Native", "Android Development", "iOS Development"],
      coordinator: "Sneha Reddy",
      members: 32,
      activities: ["App development challenges", "UI/UX workshops", "Play Store publishing"],
      color: "bg-purple-500"
    },
    {
      name: "Data Science SIG",
      icon: <Database className="h-8 w-8" />,
      description: "Analyze data, build predictive models, and derive insights from complex datasets.",
      focus: ["Python", "R", "Statistical Analysis", "Data Visualization"],
      coordinator: "Kiran Venkat",
      members: 42,
      activities: ["Data analysis projects", "Visualization workshops", "Industry case studies"],
      color: "bg-orange-500"
    },
    {
      name: "Game Development SIG",
      icon: <Gamepad2 className="h-8 w-8" />,
      description: "Create engaging games using modern game engines and programming techniques.",
      focus: ["Unity", "Unreal Engine", "Game Design", "3D Modeling"],
      coordinator: "Anitha Rao",
      members: 28,
      activities: ["Game jams", "Design workshops", "Indie game showcases"],
      color: "bg-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Specialized Learning",
      description: "Deep dive into specific areas of computing with focused curriculum and projects"
    },
    {
      title: "Industry Mentorship",
      description: "Connect with industry professionals working in your area of interest"
    },
    {
      title: "Project Collaboration",
      description: "Work on real-world projects with like-minded peers and build your portfolio"
    },
    {
      title: "Networking Opportunities",
      description: "Build relationships with students and professionals in your field of interest"
    }
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Special Interest <span className="bg-gradient-primary bg-clip-text text-transparent">Groups</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join focused communities within ACM GMRIT to explore specific areas of computing.
            Each SIG provides specialized learning opportunities, projects, and networking in your area of interest.
          </p>
        </div>

        {/* SIGs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {specialInterestGroups.map((sig, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`${sig.color} text-white p-3 rounded-lg`}>
                    {sig.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{sig.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Led by {sig.coordinator} • {sig.members} members
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{sig.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {sig.focus.map((area, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Activities</h4>
                  <ul className="space-y-1">
                    {sig.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  Join {sig.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Join a SIG?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-lg p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Dive Deeper?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose a Special Interest Group that aligns with your passion and career goals.
            You can join multiple SIGs to explore different areas of computing.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-4 shadow-card">
              <div className="text-2xl font-bold text-primary">6</div>
              <p className="text-sm text-muted-foreground">Active SIGs</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-card">
              <div className="text-2xl font-bold text-primary">245</div>
              <p className="text-sm text-muted-foreground">Total Members</p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-card col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-primary">50+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <a href="/contact">
                Get Started
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/team">Meet Coordinators</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIGs;