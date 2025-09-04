import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import selectionImg from "./Event-Images/Selections.jpg";
import F2 from "./Event-Images/F2.jpg";
import GreenHorn from "./Event-Images/GreenHorn.jpg";
import BB from "./Event-Images/BB_challenge.jpg";
import SIG from "./Event-Images/SIG.jpg";
import TechTales from "./Event-Images/TechTales.jpg";
import Technova from "./Event-Images/Technova.jpg";
import Code from "./Event-Images/Code_conquer.jpg";
import Cine from "./Event-Images/Cine_divas.jpg";
import Placement from "./Event-Images/Placement_talk.jpg";

const Events = () => {
  const OnEvents = [
    {
      title: "2nd Year Co-ordinator Selections",
      image: selectionImg,
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
      image: GreenHorn,
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
      image: F2,
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
      image: Technova,
      date: "2024-04-10",
      time: "9:00 PM - 7:00 AM",
      location: "DA Lab",
      description: "The ACM & ACM-W Student Chapter presents TechNova, an exciting overnight hackathon where innovation meets collaboration! Solve real-world problems, showcase skills, and learn from experts in a high-energy setting!",
      attendees: 200,
      status: "completed",
      type: "Hackthons"
    },
    {
      title: "Placement Talk",
      image: Placement,
      date: "2025-03-26",
      time: "3:30 PM - 5:00 PM",
      location: "CSE Seminar Hall",
      description: " PLACEMENT TALK, an exclusive session where you gain firsthand insights from your seniors about cracking placements, acing interviews, and landing your dream job! 💼✨",
      attendees: 120,
      status: "completed",
      type: "Workshops"
    },
    {
      title: "SIG on Web Development.",
      image: SIG,
      date: "2025-03-12",
      time: "3:30 PM - 5:00 PM",
      location: "Deep Learning Lab",
      description: "Dive into the world of backend development with Django and Flask. This 3-day hands-on session will equip you with the skills to build powerful and dynamic web application.",
      attendees: 80,
      status: "completed",
      type: "Workshops"
    },
    {
      title: "TechTales.",
      image: TechTales,
      date: "2025-03-07",
      time: "3:30 PM - 5:00 PM",
      location: "Deep Learning Lab",
      description: "Let's celebrate Women's Day with an event dedicated to Girls.",
      attendees: 120,
      status: "completed",
      type: "Competition"
    },
    {
      title: "Cine Divas",
      image: Cine,
      date: "2025-03-05",
      time: "3:30 PM - 5:00 PM",
      location: "CSE Seminar Hall",
      description: " CINE DIVAS 🎶, an electrifying team game where you decode lyrics, crack emoji puzzles, and prove you're the ultimate movie maestro!",
      attendees: 100,
      status: "completed",
      type: "Competition"
    },
    {
      title: "BB Challenge : Brain &Bug  ",
      image: BB,
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
      image: Code,
      date: "2024-11-06",
      time: "3:00 pM - 5:00 PM",
      location: " CA Lab     ",
      description: "Whether you’re a seasoned coder or just starting your programming journey, this event promises a fun and competitive environment to sharpen your skills, challenge your limits, and learn along the way.",
      attendees: 75,
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
            On Going Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {OnEvents.map((event, index) => (
              <Card
                key={index}
                className="group relative shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Image always visible in background */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />

                {/* Normal title below image (visible before hover) */}
                <CardContent className="p-4">
                  <CardTitle className="text-lg text-foreground">{event.title}</CardTitle>
                </CardContent>

                {/* Full card overlay (slides up on hover) */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center px-4
                   bg-black/80 opacity-0 translate-y-full 
                   group-hover:opacity-100 group-hover:translate-y-0 
                   transition-all duration-700"
                >
                  <Badge className={`${getTypeColor(event.type)} text-white mb-2`}>
                    {event.type}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-200 text-sm mb-2">{event.description}</p>
                  <p className="text-gray-300 text-xs">{formatDate(event.date)} · {event.time}</p>
                  <p className="text-gray-300 text-xs">{event.location}</p>
                  <p className="text-gray-300 text-xs">{event.attendees} attendees</p>
                </div>
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
              <Card
                key={index}
                className="group relative shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Image always visible in background */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />

                {/* Normal title below image (visible before hover) */}
                <CardContent className="p-4">
                  <CardTitle className="text-lg text-foreground">{event.title}</CardTitle>
                </CardContent>

                {/* Full card overlay (slides up on hover) */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center px-4
                   bg-black/80 opacity-0 translate-y-full 
                   group-hover:opacity-100 group-hover:translate-y-0 
                   transition-all duration-700"
                >
                  <Badge className={`${getTypeColor(event.type)} text-white mb-2`}>
                    {event.type}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-200 text-sm mb-2">{event.description}</p>
                  <p className="text-gray-300 text-xs">{formatDate(event.date)} · {event.time}</p>
                  <p className="text-gray-300 text-xs">{event.location}</p>
                  <p className="text-gray-300 text-xs">{event.attendees} attendees</p>
                </div>
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