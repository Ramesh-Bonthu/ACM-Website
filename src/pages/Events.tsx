import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const upcomingEvents = [
    {
      title: "2nd Year Co-ordinator Selections",
      date: "2025-08-19",
      time: "4:00 PM - 6:00 PM",
      location: "CSE Labs",
      description: "Selecting 2nd year students into ACM Co-ordinators.",
      attendees: 130,
      status: "on going",
      type: "Competition"
    }
  ];

  const pastEvents = [
    {
      title: "GreenHorn-2025",
      date: "2025-07-31",
      time: "2:00 pM - 5:00 PM",
      location: "Auditorium",
      description: "Introducing 2nd years, about ACM & ACM-W Student chapter.",
      attendees: 200,
      status: "completed",
      type: "Workshop"
    },
    {
      title: "F2 : Fun & Films",
      date: "2025-07-17",
      time: "3:30 PM - 5:00 PM",
      location: "CDC Seminar Hall",
      description: "Non - Techincal event to the students, which helps in stress free and enjoyment.",
      attendees: 130,
      status: "completed",
      type: "Competition"
    },
    {
      title: "Technova-2025",
      date: "2024-04-10",
      time: "9:00 PM - 7:00 AM",
      location: "DA Lab",
      description: "The ACM & ACM-W Student Chapter presents TechNova, an exciting overnight hackathon where innovation meets collaboration! Solve real-world problems, showcase skills, and learn from experts in a high-energy setting!",
      attendees: 200,
      status: "completed",
      type: "Hackthons"
    },
    {
      title: "SIG on Web Development.",
      date: "2025-03-12",
      time: "3:30 PM - 5:00 PM",
      location: "Deep Learning Lab",
      description: "Dive into the world of backend development with Django and Flask. This 3-day hands-on session will equip you with the skills to build powerful and dynamic web application.",
      attendees: 80,
      status: "completed",
      type: "Workshops"
    },
    {
      title: "BB Challenge : Brain &Bug  ",
      date: "2025-01-07",
      time: "3:00 PM - 5:00 PM",
      location: "CSE Labs",
      description: "Techincal event to improve their in programming lanaguages and coding.",
      attendees: 120,
      status: "completed",
      type: "Competition"
    },
    {
      title: "Code & Conquer: The Ultimate Treasure Hunt Challenge!",
      date: "2024-11-06",
      time: "3:00 pM - 5:00 PM",
      location: " CA Lab     ",
      description: "Whether you’re a seasoned coder or just starting your programming journey, this event promises a fun and competitive environment to sharpen your skills, challenge your limits, and learn along the way.",
      attendees: 75,
      status: "completed",
      type: "Competition"
    },
    {
      title: "Design Dash: Canva Skills to Create in a Flash ",
      date: "2024-10-23",
      time: "3:00 PM - 5:00 PM",
      location: "Coding Lab",
      description: " Exclusively for the 1st year students to improve their skills in Canva.",
      attendees: 60,
      status: "completed",
      type: "Workshop"
    },
    {
      title: "MIND MAZE ",
      date: "2024-08-17",
      time: "3:00 PM - 5:00 PM",
      location: "CSE Seminar Hall",
      description: "Non - Techincal event to the students, which helps in stress free and enjoyment.",
      attendees: 120,
      status: "completed",
      type: "Competition"
    },
    {
      title: "CINEBUZZ",
      date: "2024-08-24",
      time: "3:30 PM - 5:00 PM",
      location: "Deep Learning Lab",
      description: "Non - Techincal event to the students, which helps in stress free and enjoyment.",
      attendees: 170,
      status: "completed",
      type: "Competition"
    }
  ];

  const eventTypes = [
    {
      name: "Workshops",
      description: "Hands-on learning sessions on latest technologies",
      count: 3
    },
    {
      name: "Seminars",
      description: "Industry expert talks and academic presentations",
      count: 2
    },
    {
      name: "Competitions",
      description: "Programming contests and tech challenges",
      count: 12
    },
    {
      name: "Hackathons",
      description: "24-48 hour coding marathons for innovative solutions",
      count: 2
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;