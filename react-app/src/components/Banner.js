import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import adven from '../img/rent.jpg';


export default function Banner({ data }) {
  const { title, content, destination, label } = data;

  return (
    <>
      <div className="bg-image" style={{
        backgroundImage: `url(${adven})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Card style={{ width: '18rem', backgroundColor: 'rgba(255, 255, 255, 0.0001)', border: 'none' }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <Button variant="warning" as={Link} to={destination}>{label}</Button>
          </Card.Body>  
        </Card>
      </div>

    </>
  );
}
