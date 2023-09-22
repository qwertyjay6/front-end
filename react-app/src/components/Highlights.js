import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import mmorpgImage from '../img/ford.png';
import pcgamerImage from '../img/bmw.png';
import mmogamesImage from '../img/tesla.png';
import { Link } from 'react-router-dom';

const highlightsData = [
  {
    image: mmorpgImage,
    title: 'Ford',
    description: 'Ford vehicles are synonymous with American automotive tradition and innovation.',
    linkText: 'Ford Details',
    linkTo: '/products/ford',
  },
  {
    image: pcgamerImage,
    title: 'BMW',
    description: 'Offering a blend of luxury, precision engineering, and exhilarating driving experiences.',
    linkText: 'BMW Details',
    linkTo: '/products/bmw',
  },
  {
    image: mmogamesImage,
    title: 'TESLA',
    description: 'Tesla vehicles represent cutting-edge electric technology and sustainability in the automotive industry.',
    linkText: 'TESLA Details',
    linkTo: '/products/tesla',
  },
];

function Highlights() {
  return (
    <Row className="mt-3 mb-3">
      {highlightsData.map((highlight, index) => (
        <Col key={index} xs={12} md={4}>
          <Card className="cardHighlight p-2">
            <Card.Body>
              <Card.Title className="mt-3 mb-3">
                <h2 className="mt-2">
                  <img src={highlight.image} alt={highlight.title} style={{ width: '350px' }} />
                </h2>
                <Button className="mt-5" variant="warning" as={Link} to={highlight.linkTo}>
                  {highlight.linkText}
                </Button>
              </Card.Title>
              <Card.Text>{highlight.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Highlights;
