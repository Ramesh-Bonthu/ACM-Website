import { Briefcase, GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Alumni = () => {
  const alumniMembers = [
    {
      name: "Dr. Vikram Singh",
      batch: "2018-2022",
      currentRole: "Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      achievement: "Led the development of several key features in Google Search",
      linkedin: "linkedin.com/in/vikramsingh"
    },
    {
      name: "Meera Patel",
      batch: "2017-2021",
      currentRole: "Data Scientist", 
      company: "Microsoft",
      location: "Hyderabad, India",
      achievement: "Published 5 research papers in machine learning conferences",
      linkedin: "linkedin.com/in/meerapatel"
    },
    {
      name: "Ravi Kumar",
      batch: "2019-2023",
      currentRole: "Full Stack Developer",
      company: "Amazon",
      location: "Seattle, USA",
      achievement: "Developed scalable e-commerce solutions serving millions of users",
      linkedin: "linkedin.com/in/ravikumar"
    },
    {
      name: "Sahana Reddy",
      batch: "2016-2020",
      currentRole: "Cybersecurity Analyst",
      company: "IBM",
      location: "Pune, India",
      achievement: "Specialized in threat detection and vulnerability assessment",
      linkedin: "linkedin.com/in/sahanareddy"
    },
    {
      name: "Anil Sharma",
      batch: "2015-2019", 
      currentRole: "Product Manager",
      company: "Meta",
      location: "California, USA",
      achievement: "Led product development for social media platforms",
      linkedin: "linkedin.com/in/anilsharma"
    },
    {
      name: "Deepika Rao",
      batch: "2018-2022",
      currentRole: "AI Research Engineer",
      company: "OpenAI",
      location: "San Francisco, USA",
      achievement: "Contributing to cutting-edge AI research and development",
      linkedin: "linkedin.com/in/deepikarao"
    }
  ];

  const achievements = [
    {
      title: "Industry Leaders",
      description: "Our alumni work at top tech companies worldwide",
      count: "50+"
    },
    {
      title: "Successful Startups",
      description: "Alumni who founded their own technology companies",
      count: "15+"
    },
    {
      title: "Advanced Degrees",
      description: "Pursuing or completed MS/PhD from prestigious universities",
      count: "30+"
    },
    {
      title: "Research Publications",
      description: "Research papers published in top conferences and journals",
      count: "25+"
    }
  ];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Alumni</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our successful graduates who have made their mark in the technology industry.
            They continue to inspire and mentor current students through their achievements.
          </p>
        </div>

        {/* Alumni Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{achievement.count}</div>
                <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Alumni */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Featured Alumni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniMembers.map((alumni, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">
                    {alumni.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{alumni.name}</h3>
                  <p className="text-sm text-muted-foreground">{alumni.batch}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="bg-gradient-hero rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-foreground">{alumni.currentRole}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{alumni.company}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{alumni.location}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Achievement</h4>
                    <p className="text-sm text-muted-foreground">{alumni.achievement}</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(`https://${alumni.linkedin}`, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Alumni Network */}
        <div className="bg-gradient-hero rounded-lg p-8 lg:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join Our Alumni Network
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay connected with your fellow ACM GMRIT alumni and continue to be part of our growing community.
              Share your experiences, mentor current students, and contribute to the chapter's growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6 shadow-card">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Mentorship</h3>
                <p className="text-sm text-muted-foreground">
                  Guide current students in their academic and career journey
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-card">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Career Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Share job openings and internship opportunities with students
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-card">
                <ExternalLink className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Guest Lectures</h3>
                <p className="text-sm text-muted-foreground">
                  Share your industry experience through talks and workshops
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <a href="/contact">
                  Connect With Us <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/events">View Events</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;