import { ArrowRight, Calendar, Users, Award, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const highlights = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Active Community",
      description: "Join 50+ passionate students in computing"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Regular Events",
      description: "Weekly workshops, hackathons, and tech talks"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Recognition",
      description: "Award-winning chapter with national recognition"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Skill Development",
      description: "Hands-on projects and coding competitions"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome to <span className="bg-gradient-primary bg-clip-text text-transparent">ACM GMRIT</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The premier student chapter of Association for Computing Machinery at GMR Institute of Technology.
              Advancing computing as a science and profession through learning, networking, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/events">View Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Join ACM GMRIT?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities for growth, learning, and making lasting connections in the world of computing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-accent-foreground">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our vibrant community of students passionate about computing and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/contact">
                Join Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;