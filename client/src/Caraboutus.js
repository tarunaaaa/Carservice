import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap';
import Carfooter from './Carfooter';
import car from './img/car.jpg';
import car1 from './img/car1.jpg';
import car2 from './img/carwash.jpg';
import car4 from './img/car4.jpg';
import car5 from './img/priceimg.jpg';
import car6 from './img/carcustomer.jpg';

const CarAboutUs = () => {
  useEffect(() => {
    const revealTextElements = document.querySelectorAll('.reveal-text');

    const handleScroll = () => {
      for (const element of revealTextElements) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="car-about-us-section">
      <Container fluid>
        
        {/* Page Header */}
        <div className="page-header text-center mb-5 reveal">
          <div className="header-content">
            <h1 className="display-4 text-primary mb-3 font-weight-bold">About Us</h1>
            <h3 className="text-secondary mb-4 font-italic">Committed to Quality and Customer Satisfaction</h3>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
              At [Your Company Name], we believe a clean car not only looks good but also protects the vehicle and enhances driving enjoyment.
            </p>
          </div>
        </div>

        {/* Mission Section as Slider */}
        <Row className="mb-5 reveal">
          <Col xs={12}>
            <Carousel className="mission-slider">
              <Carousel.Item>
                <Image src={car1} alt="Our Mission" fluid className="d-block w-100 mission-image" />
                <Carousel.Caption className="mission-caption">
                  <h4 className="text-light font-weight-bold mb-3">Our Mission</h4>
                  <p className="text-light">Providing premium car wash with eco-friendly products.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={car} alt="Eco-Friendly Approach" fluid className="d-block w-100 mission-image" />
                <Carousel.Caption className="mission-caption">
                  <h4 className="text-light font-weight-bold mb-3">Eco-Friendly Approach</h4>
                  <p className="text-light">Sustainability in every wash.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={car2} alt="Quality You Can Trust" fluid className="d-block w-100 mission-image" />
                <Carousel.Caption className="mission-caption">
                  <h4 className="text-light font-weight-bold mb-3">Quality You Can Trust</h4>
                  <p className="text-light">Skilled team and top equipment for superior shine.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="mb-5 reveal">
          <Col xs={12} md={6} className="order-md-2">
            <Image src={car4} alt="Experience" fluid rounded className="shadow custom-image mb-4 mb-md-0" />
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center order-md-1">
            <div className="text-center text-md-right reveal-text">
              <h4 className="text-primary font-weight-bold">Best Experience</h4>
              <p className="text-muted">
                Our skilled team and advanced equipment guarantee a thorough cleaning, making sure your car looks its best.
              </p>
            </div>
          </Col>
        </Row>

        {/* Pricing Section */}
        <Row className="mb-5 reveal">
          <Col xs={12} md={6}>
            <Image src={car5} alt="Affordable Prices" fluid rounded className="shadow custom-image mb-4 mb-md-0" />
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div className="text-center text-md-left reveal-text">
              <h4 className="text-primary font-weight-bold">Affordable Prices</h4>
              <p className="text-muted">
                High-quality services at prices that ensure car care is accessible to everyone.
              </p>
            </div>
          </Col>
        </Row>

        {/* Customer Satisfaction Section */}
        <Row className="mb-5 reveal">
          <Col xs={12} md={6} className="order-md-2">
            <Image src={car6} alt="Customer Satisfaction" fluid rounded className="shadow custom-image mb-4 mb-md-0" />
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center order-md-1">
            <div className="text-center text-md-right reveal-text">
              <h4 className="text-primary font-weight-bold">Customer Satisfaction</h4>
              <p className="text-muted">
                Our top priority is the satisfaction of every customer.
              </p>
            </div>
          </Col>
        </Row>

        {/* Product Highlights Section */}
        <h3 className="text-primary font-weight-bold mt-5 mb-4 text-center reveal">Our Washing Products</h3>
        <p className="text-muted mb-5 text-center reveal">Eco-friendly products ensuring a perfect clean and protection.</p>

        <Row>
          {productData.map((product, index) => (
            <Col xs={12} sm={6} md={4} className="mb-4 reveal" key={index}>
              <Card className="shadow-lg h-100 text-center custom-product-card">
                <Card.Body>
                  <Image src={product.image} roundedCircle className="mb-3 product-image" width="120" height="120" />
                  <h5 className="text-primary">{product.name}</h5>
                  <p className="text-muted">{product.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Details Section */}
        <Row className="mt-5 text-center reveal">
          <Col xs={12}>
            <p className="text-muted mb-4">With over a decade of excellence, we are your trusted choice for quality car care.</p>
            <Button variant="primary" size="lg">Learn More</Button>
          </Col>
        </Row>
        
      </Container>
      
      <Carfooter />
    </div>
  );
};

const productData = [
  {
    name: 'Eco Shampoo',
    description: 'Tough on dirt but gentle on your car, protecting its paint finish.',
    image: 'https://img.freepik.com/premium-photo/wash-hand-sanitizer-gel-dispenser-against-novel-coronavirus-corona-virus-disease-covid-19-public-indoor_42256-2157.jpg?w=900',
  },
  {
    name: 'Tire Cleaner',
    description: 'Restores tire shine safely, without harsh chemicals.',
    image: 'https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212205.jpg?t=st=1731130468~exp=1731134068~hmac=7fe8de4fb029abcd8452116f3568035e069414ad1d9ee98f2fb60027654b82bf&w=900',
  },
  {
    name: 'Interior Detailer',
    description: 'Cleans and refreshes interiors with anti-dust technology.',
    image: 'https://img.freepik.com/free-photo/close-up-person-cleaning-car-interior_23-2148194078.jpg?t=st=1731130507~exp=1731134107~hmac=70b5b9d6e3920b9b6fc96e37808880bbbce0cb7e1f8aae0f7c0c56dda661c670&w=900',
  },
  {
    name: 'Wax Protectant',
    description: 'Provides a lasting shine and shields paint from UV damage.',
    image: 'https://img.freepik.com/premium-photo/new-car-parts-dark-background_127657-7233.jpg?w=900',
  },
  {
    name: 'Glass Cleaner',
    description: 'Leaves glass spotless, with a streak-free finish.',
    image: 'https://img.freepik.com/free-photo/car-glass-cleaning-with-cloth_1150-15991.jpg?t=st=1731130608~exp=1731134208~hmac=f5ec795941e6d59b90b618aa1b55fda01b05a75d97f625973c51c2130048693c&w=900',
  },
  {
    name: 'Leather Conditioner',
    description: 'Conditions and protects leather seats for a soft, rich look.',
    image: 'https://img.freepik.com/premium-photo/tools-sticking-protective-film-car_397170-2990.jpg?w=900',
  }
];

export default CarAboutUs;
