import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const upcomingEvents = [
    {
      title: "AI/ML Workshop Series",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab 1",
      description: "Hands-on workshop covering machine learning fundamentals and practical implementations.",
      attendees: 50,
      status: "upcoming",
      type: "Workshop"
    },
    {
      title: "Code Storm - Programming Contest",
      date: "2024-02-22",
      time: "2:00 PM - 6:00 PM", 
      location: "Main Auditorium",
      description: "Annual programming competition featuring algorithmic challenges and prizes.",
      attendees: 100,
      status: "upcoming",
      type: "Competition"
    },
    {
      title: "Industry Expert Talk: Cybersecurity",
      date: "2024-03-05",
      time: "3:00 PM - 5:00 PM",
      location: "Seminar Hall",
      description: "Industry expert sharing insights on current cybersecurity trends and career opportunities.",
      attendees: 80,
      status: "upcoming",
      type: "Seminar"
    }
  ];

  const pastEvents = [
    {
      title: "Web Development Bootcamp",
      date: "2024-01-20",
      time: "9:00 AM - 5:00 PM",
      location: "Computer Lab 2",
      description: "Comprehensive bootcamp covering HTML, CSS, JavaScript, and React fundamentals.",
      attendees: 75,
      status: "completed",
      type: "Bootcamp"
    },
    {
      title: "Open Source Contribution Workshop",
      date: "2024-01-10",
      time: "2:00 PM - 6:00 PM",
      location: "Conference Room",
      description: "Learn how to contribute to open source projects and build your GitHub profile.",
      attendees: 60,
      status: "completed",
      type: "Workshop"
    },
    {
      title: "Tech Quiz Championship",
      date: "2023-12-15",
      time: "4:00 PM - 7:00 PM",
      location: "Main Auditorium",
      description: "Annual tech quiz competition testing knowledge across various computing domains.",
      attendees: 120,
      status: "completed",
      type: "Competition"
    }
  ];

  const eventTypes = [
    {
      name: "Workshops",
      description: "Hands-on learning sessions on latest technologies",
      count: 12
    },
    {
      name: "Seminars",
      description: "Industry expert talks and academic presentations",
      count: 8
    },
    {
      name: "Competitions",
      description: "Programming contests and tech challenges",
      count: 6
    },
    {
      name: "Hackathons",
      description: "24-48 hour coding marathons for innovative solutions",
      count: 3
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status: string) => {
    return status === 'upcoming' ? 'bg-primary' : 'bg-muted';
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Workshop': 'bg-blue-500',
      'Competition': 'bg-green-500',
      'Seminar': 'bg-purple-500',
      'Bootcamp': 'bg-orange-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover workshops, seminars, competitions, and networking opportunities designed to enhance
            your skills and connect you with the computing community.
          </p>
        </div>

        {/* Event Types Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventTypes.map((type, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">{type.count}</div>
                <h3 className="font-semibold text-foreground mb-2">{type.name}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${getTypeColor(event.type)} text-white`}>
                      {event.type}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Past Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${getTypeColor(event.type)} text-white`}>
                      {event.type}
                    </Badge>
                    <Badge variant="secondary">
                      Completed
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-lg p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Don't Miss Out!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated with our latest events and workshops. Follow us on social media
            and join our mailing list to receive notifications about upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <a href="/contact">
                Subscribe to Updates <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/sigs">Explore SIGs</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;