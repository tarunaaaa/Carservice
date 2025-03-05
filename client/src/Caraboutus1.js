import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap';
import Carfooter from './Carfooter';
import car1 from './img/car1.jpg';
import car2 from './img/carwash.jpg';
import car3 from './img/car4.jpg';
import car4 from './img/priceimg.jpg';
import car5 from './img/carcustomer.jpg';
import car6 from './img/glassclearner.jpg'
import './Caraboutus1.css';

const Caraboutus1 = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const handleScroll = () => {
      for (const element of revealElements) {
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
    {/* Header Section attached to Navbar */}
<Container fluid className="header-section text-center py-5 text-light mb-0" style={{ backgroundColor: '#d3d3d3', paddingTop: '0px' }}>
  <Row>
    <Col>
      <h1 className="display-4 font-weight-bold">About Us</h1>
      <p className="lead">Learn more about our commitment to quality, customer satisfaction, and the best car care services.</p>
    </Col>
  </Row>
</Container>


      <Container fluid className="px-0">
        {/* Improved Carousel Section */}
        <Row className="mb-5">
          <Col>
            <Carousel className="mission-slider" fade>
              {[car1, car2, car3].map((imgSrc, index) => (
                <Carousel.Item key={index} className="reveal">
                  <Image
                    src={imgSrc}
                    fluid
                    className="d-block w-100 rounded shadow"
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                  <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                    {index === 0 && (
                      <>
                        <h3 className="text-light font-weight-bold">Our Commitment</h3>
                        <p className="text-light">Quality, eco-friendliness, and customer satisfaction in every wash.</p>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <h3 className="text-light font-weight-bold">Eco-Friendly Practices</h3>
                        <p className="text-light">We prioritize sustainable cleaning solutions that are gentle on the environment.</p>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <h3 className="text-light font-weight-bold">Customer Focused</h3>
                        <p className="text-light">Delivering exceptional service tailored to your car’s needs, every time.</p>
                      </>
                    )}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Core Values Section with Enhanced UI and Hover Effects */}
        <h3 className="text-primary text-center font-weight-bold mb-4 reveal">Our Core Values</h3>
        {[{ title: 'Best Experience', text: 'Our skilled team and advanced equipment guarantee a thorough cleaning, making sure your car looks its best. We take pride in offering a service that is as efficient as it is effective, leaving no detail overlooked for a pristine result. Our commitment to excellence is unmatched, and we continuously invest in the latest technology to provide the best car care available.', image: car3 },
          { title: 'Affordable Prices', text: 'High-quality services at prices that make car care accessible to everyone. We believe that maintaining a clean, well-cared-for car should be a luxury everyone can enjoy, and our pricing reflects that belief with outstanding value. Our transparent pricing structure ensures that you get the most for your money, without any surprises or hidden fees.', image: car4 },
          { title: 'Customer Satisfaction', text: 'Our top priority is the satisfaction of every customer, every time. We strive to provide a pleasant experience from start to finish, making sure that every client leaves with a smile and a cleaner car. We value feedback and use it to continually improve our services, ensuring that each visit exceeds your expectations.', image: car5 }].map((section, idx) => (
            <Row
              className={`mb-5 align-items-center reveal ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}
              key={idx}
            >
              <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
                <Image
                  src={section.image}
                  fluid
                  rounded
                  className="core-value-image shadow-sm"
                  alt={section.title}
                />
              </Col>
              <Col xs={12} md={6}>
                <Card className="core-value-card text-center p-4 shadow-sm h-100">
                  <h5 className="core-value-title text-primary font-weight-bold mb-3">{section.title}</h5>
                  <hr className="my-2" />
                  <p className="core-value-text text-muted">{section.text}</p>
                </Card>
              </Col>
            </Row>
          ))}

       {/* Our Products Section */}
<h3 className="text-primary text-center font-weight-bold mb-4 reveal">Our Washing Products</h3>
<Row>
  {productData.map((product, index) => (
    <Col xs={12} sm={6} md={4} className="mb-4 reveal" key={index}>
      <Card className="text-center shadow-sm h-100 p-4 product-card hover-effect">
        <Image
          src={product.image}
          roundedCircle
          className="mb-3 product-image mx-auto"
          width="120"
          height="120"
          alt={product.name}
        />
        <h5 className="text-primary font-weight-bold">{product.name}</h5>
        <hr className="my-2" />
        <p className="text-muted">{product.description}</p>
      </Card>
    </Col>
  ))}
</Row>


        {/* Additional Info and Call-to-Action */}
        <Row className="mt-5 text-center reveal">
          <Col>
            <p className="text-muted">With over a decade of excellence, we are your trusted choice for quality car care.</p>
            <Button variant="primary" size="lg">Learn More</Button>
          </Col>
        </Row>
      </Container>
      <br /> <br />
      <Carfooter />
    </div>
  );
};

const productData = [
  {
    name: 'Eco Shampoo',
    description: 'Tough on dirt but gentle on your car, protecting its paint finish with advanced, eco-friendly ingredients that deliver a sparkling clean without harming the environment.',
    image: 'https://img.freepik.com/premium-photo/wash-hand-sanitizer-gel-dispenser-against-novel-coronavirus-corona-virus-disease-covid-19-public-indoor_42256-2157.jpg?w=900',
  },
  {
    name: 'Tire Cleaner',
    description: 'Restores tire shine safely, without harsh chemicals. Our tire cleaner is formulated to remove dirt, grime, and brake dust while giving your tires a lasting, high-gloss shine.',
    image: 'https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212205.jpg?t=st=1731130468~exp=1731134068~hmac=7fe8de4fb029abcd8452116f3568035e069414ad1d9ee98f2fb60027654b82bf&w=900',
  },
  {
    name: 'Interior Detailer',
    description: 'Cleans and refreshes interiors with anti-dust technology, leaving your car smelling fresh and looking pristine. Our interior cleaner is perfect for upholstery, dashboard, and more.',
    image: 'https://img.freepik.com/free-photo/close-up-person-cleaning-car-interior_23-2148194078.jpg?t=st=1731130507~exp=1731134107~hmac=70b5b9d6e3920b9b6fc96e37808880bbbce0cb7e1f8aae0f7c0c56dda661c670&w=900',
  },
  {
    name: 'Wax Protectant',
    description: 'Provides a lasting shine and shields paint from UV damage, keeping your car looking as good as new. Our wax formula adds an extra layer of protection, making future washes easier.',
    image: 'https://img.freepik.com/premium-photo/new-car-parts-dark-background_127657-7233.jpg?w=900',
  },
  {
    name: 'Glass Cleaner',
    description: 'Leaves glass spotless, with a streak-free finish. Our glass cleaner is safe for all types of automotive glass, ensuring a clear, crystal finish every time.',
    image: car6
  },
  {
    name: 'Leather Conditioner',
    description: 'Conditions and protects leather seats for a soft, rich look. This product nourishes the leather, ensuring it remains supple and looks like new, even with daily use.',
    image: 'https://img.freepik.com/premium-photo/tools-sticking-protective-film-car_397170-2990.jpg?w=900',
  }
];

export default Caraboutus1;
