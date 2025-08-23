import { Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">ACM GMRIT</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are the student chapter of the Association for Computing Machinery at GMR Institute of Technology,
            dedicated to advancing computing as a science and profession.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                To advance computing as a science and profession by providing opportunities for academic and career development,
                fostering innovation, and building a strong community of computing professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                To be a leading student organization that bridges the gap between academic learning and industry practice,
                producing skilled professionals who contribute meaningfully to the field of computing.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-foreground">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Excellence in education, integrity in practice, diversity in membership, and commitment to advancing
                the computing profession while fostering innovation and collaboration.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About ACM */}
        <div className="bg-gradient-hero rounded-lg p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
              About ACM
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  The Association for Computing Machinery (ACM) is the world's largest educational and scientific
                  computing society, uniting computing educators, researchers, and professionals to inspire dialogue,
                  share resources, and address the field's challenges.
                </p>
                <p className="text-muted-foreground mb-4">
                  ACM strengthens the computing profession's collective voice through strong leadership, promotion of the
                  highest standards, and recognition of technical excellence.
                </p>
                <p className="text-muted-foreground">
                  As an ACM student chapter, we bring these values to our campus community at GMRIT, providing students
                  with opportunities to engage with cutting-edge research, network with professionals, and develop
                  leadership skills.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4 shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Founded</h3>
                  <p className="text-muted-foreground">1947 - Over 75 years of excellence</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">100,000+ members worldwide</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Student Chapters</h3>
                  <p className="text-muted-foreground">500+ active student chapters globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter History */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Chapter
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              The ACM student chapter at GMR Institute of Technology was established to provide students with
              opportunities to explore computing beyond the classroom. Since our inception, we have been committed
              to fostering a culture of learning, innovation, and professional development.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our chapter serves as a bridge between academic theory and industry practice, offering workshops,
              seminars, coding competitions, and networking events that help students build both technical skills
              and professional relationships.
            </p>
            <p className="text-lg text-muted-foreground">
              Through our various Special Interest Groups (SIGs), we cater to diverse interests in computing,
              from artificial intelligence and cybersecurity to web development and competitive programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;