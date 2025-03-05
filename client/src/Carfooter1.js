<Container>
        <Row className="py-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Contact Us</h5>
            <p><FaEnvelope className="icon" /> info@carwashservice.com</p>
            <p><FaPhoneAlt className="icon" /> (123) 456-7890</p>
            <p><MdLocationOn className="icon" /> 123 Car Wash St, Clean City, CC 12345</p>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li><a href="/services#car-wash" className="text-white">Car Wash</a></li>
              <li><a href="/services#detailing" className="text-white">Detailing</a></li>
              <li><a href="/services#membership" className="text-white">Membership Plans</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-md-right">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-white me-3"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
            </div>
            <p className="mt-3">Subscribe to our newsletter for the latest offers!</p>
            <div className="subscribe">
              <input type="email" placeholder="Your email" className="email-input" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="text-muted">&copy; {new Date().getFullYear()} Car Wash Service. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
