// Products.js
import React from 'react';
import { Container } from 'react-bootstrap';
import VehicleSelectionForm from '../components/VehicleSelectionForm';

const Products = () => {
  const handleVehicleSelect = (formData) => {
    // Handle the form submission here (e.g., make a POST request to your Node.js server)
    console.log(formData);
  };

  return (
    <Container>
      <h2>Select a Vehicle and Upload Logbook</h2>
      <VehicleSelectionForm onVehicleSelect={handleVehicleSelect} />
    </Container>
  );
};

export default Products;
