// AboutUs.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';
import { Wrench, Users, Settings, Award, Car, Star,Quote ,Flag,Facebook,Linkedin,Twitter} from 'lucide-react';
import { CheckCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import CarFooter from './Carfooter';
const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Master Technician",
      desc: "20+ years of experience in precision repairs",
      img: "https://source.unsplash.com/200x200/?man,mechanic",
    },
    {
      name: "Jane Smith",
      role: "Service Manager",
      desc: "Ensuring customer satisfaction & excellence",
      img: "https://source.unsplash.com/200x200/?woman,manager",
    },
    {
      name: "Mike Johnson",
      role: "Diagnostics Specialist",
      desc: "Expert in advanced car diagnostics & tech",
      img: "https://source.unsplash.com/200x200/?man,engineer",
    },
  ];
  const milestones = [
    {
      year: "2005",
      icon: <Flag size={40} color="#ffc107" />,
      title: "Humble Beginnings",
      text: "Started as a small family-owned garage with a vision to provide top-quality car services.",
    },
    {
      year: "2012",
      icon: <Wrench size={40} color="#ffc107" />,
      title: "Expansion",
      text: "Grew into a full-fledged service center with cutting-edge technology and a dedicated team.",
    },
    {
      year: "2018",
      icon: <Star size={40} color="#ffc107" />,
      title: "Industry Recognition",
      text: "Awarded for excellence in customer service and high-quality automotive repairs.",
    },
    {
      year: "2023",
      icon: <Award size={40} color="#ffc107" />,
      title: "Leading the Industry",
      text: "Became the go-to service center, trusted by thousands across the region.",
    },
  ];
  const testimonials = [
    { name: "Sarah M.", text: "Best service I’ve ever experienced! My car runs like new.", rating: 5 },
    { name: "Tom R.", text: "Professional team and quick turnaround. Highly recommend!", rating: 5 },
    { name: "Lisa K.", text: "Fixed my car perfectly and great customer service.", rating: 4 },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section text-white position-relative">
      <Container>
        <Row className="align-items-center py-5">
          {/* Left Content */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Credibility Badge */}
              <span className="badge rounded-pill bg-warning text-dark px-3 py-2 mb-3">
                <CheckCircle size={18} className="me-2" /> Trusted Since 2005
              </span>
              <h1 className="display-3 fw-bold mb-4">
                Elite Car Service
              </h1>
              <p className="lead mb-4">
                Your trusted partner in automotive excellence, delivering top-tier 
                car services with precision and care.
              </p>
              {/* Buttons */}
              <div>
                <Button variant="warning" size="lg" className="me-3">
                  <PhoneCall size={18} className="me-2" /> Contact Us
                </Button>
                <Button variant="outline-light" size="lg">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </Col>

          {/* Right Image */}
          <Col lg={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="hero-image-container">
                <img
                  src="https://media.istockphoto.com/id/1387759698/photo/hand-of-car-mechanic-with-wrench-auto-repair-garage-mechanic-works-on-the-engine-of-the-car.jpg?s=612x612&w=0&k=20&c=JVYyKMvP-NN-bTMyIF-pNrifwvjyjKcIRjTVEmSmPsM=" 
                  alt="Car Service"
                  className="img-fluid rounded shadow-lg hover-scale"
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>

      {/* Our Story Section */}
      <section
      style={{
        background: "linear-gradient(135deg, rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.7))",
        color: "#fff",
        padding: "80px 0",
      }}
    >
      <Container>
        <motion.h2
          className="text-center mb-5"
          style={{ fontWeight: "bold" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Journey
        </motion.h2>

        <Row className="align-items-center">
          {/* Left Side - Image & Text */}
          <Col md={6} data-aos="fade-right">
            <motion.img
              src="https://img.freepik.com/free-photo/mechanic-hand-checking-fixing-broken-car-car-service-garage_146671-19718.jpg"
              alt="Elite Car Service"
              className="img-fluid rounded shadow mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ maxWidth: "300px", display: "block" }}
            />
            <p className="fs-5 mb-4">
              Since our humble beginnings in 2005 as a family-owned garage, Elite Car Service has 
              transformed into a cutting-edge facility dedicated to automotive excellence.
            </p>
            <p>
              Our unwavering commitment to superior craftsmanship and exceptional customer service has 
              earned us industry recognition and a devoted clientele across the region.
            </p>
          </Col>

          {/* Right Side - Timeline Cards */}
          <Col md={6} data-aos="fade-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="d-flex flex-column gap-4"
            >
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-0 shadow-lg p-3 d-flex flex-row align-items-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "15px",
                  }}
                >
                  <div className="me-3">{milestone.icon}</div>
                  <div>
                    <h5 className="mb-1">{milestone.title}</h5>
                    <small>{milestone.text}</small>
                  </div>
                </Card>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
      {/* Mission & Values */}
       {/* Core Values Section */}
       <section
        style={{
          background: "linear-gradient(135deg, #007bff, #0056b3)",
          color: "#fff",
          padding: "80px 0",
        }}
      >
        <Container>
          <h2 className="text-center mb-5" data-aos="zoom-in">
            Our Core Values
          </h2>
          <Row className="g-4">
            {[
              {
                title: "Quality Service",
                text: "Precision in every repair",
                icon: <Wrench size={40} className="mb-3 text-warning" />,
              },
              {
                title: "Customer First",
                text: "Your satisfaction drives us",
                icon: <Users size={40} className="mb-3 text-warning" />,
              },
              {
                title: "Innovation",
                text: "Embracing modern technology",
                icon: <Settings size={40} className="mb-3 text-warning" />,
              },
            ].map((value, index) => (
              <Col md={4} key={index} data-aos="flip-up" data-aos-delay={index * 200}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className="h-100 border-0 shadow-lg text-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Body className="pt-4">
                      {value.icon}
                      <Card.Title className="text-white">{value.title}</Card.Title>
                      <Card.Text>{value.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Expert Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 text-primary" data-aos="fade-up">
            Our Expert Team
          </h2>
          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col md={4} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-100 border-0 shadow-lg text-center">
                    <Card.Img
                      variant="top"
                      src={member.img}
                      className="team-img rounded-circle mx-auto mt-4"
                      style={{ width: "120px", height: "120px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="text-primary">{member.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                      <Card.Text>{member.desc}</Card.Text>
                      <div className="d-flex justify-content-center gap-3">
                        <Facebook className="text-primary" size={24} />
                        <Linkedin className="text-primary" size={24} />
                        <Twitter className="text-primary" size={24} />
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Testimonials Section */}
      <section
      style={{
        background: "linear-gradient(135deg, #000428, #004e92)",
        color: "#fff",
        padding: "80px 0",
      }}
    >
      <Container>
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                  background: "#0c1c40",
                  borderRadius: "15px",
                  padding: "30px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                  transition: "transform 0.3s",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Quote size={40} color="#ffc107" style={{ marginBottom: "15px" }} />
                <Card.Text style={{ fontSize: "1.1rem", fontStyle: "italic" }}>
                  "{testimonial.text}"
                </Card.Text>

                <div style={{ margin: "15px 0" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} color="#ffc107" fill="#ffc107" />
                  ))}
                </div>

                <Card.Title style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {testimonial.name}
                </Card.Title>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
      {/* Achievements Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 text-primary" data-aos="fade-up">Our Achievements</h2>
          <Row className="text-center g-4">
            {[
              { icon: <Award size={48} className="text-warning" />, number: '15+', label: 'Industry Awards' },
              { icon: <Car size={48} className="text-warning" />, number: '50K+', label: 'Cars Serviced' },
              { icon: <Users size={48} className="text-warning" />, number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <Col md={4} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="mb-3">{stat.icon}</div>
                <h3 className="fw-bold text-primary">{stat.number}</h3>
                <p className="fs-5">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section
  style={{
    background: "linear-gradient(135deg, #ffcc00, #ff8800)",
    color: "#fff",
    textAlign: "center",
    padding: "80px 0",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Subtle floating elements for a premium feel */}
  <div
    style={{
      position: "absolute",
      top: "10%",
      left: "-5%",
      width: "150px",
      height: "150px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "50%",
      filter: "blur(50px)",
    }}
  />
  <div
    style={{
      position: "absolute",
      bottom: "10%",
      right: "-5%",
      width: "120px",
      height: "120px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "50%",
      filter: "blur(50px)",
    }}
  />

  <Container data-aos="zoom-in">
    <h2 className="mb-4 fw-bold" style={{ fontSize: "2.5rem" }}>
      Experience <span style={{ color: "#002147" }}>Premium Car Care</span> Today
    </h2>
    <p className="lead mb-4" style={{ maxWidth: "600px", margin: "auto", opacity: "0.9" }}>
      Schedule your service with our <strong>award-winning</strong> team & drive worry-free!
    </p>

    {/* Motion button for an interactive experience */}
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <Button
        variant="dark"
        size="lg"
        className="px-5 py-3"
        style={{
          background: "#002147",
          border: "none",
          fontSize: "1.2rem",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        Book Now 🚗
      </Button>
    </motion.div>
  </Container>
</section>
<CarFooter />
    </div>
  );
};

export default AboutUs;