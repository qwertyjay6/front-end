import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VehicleSelectionForm = () => {
  // Initialize commonVehicles
  const commonVehicles = {
    ford: {
      make: 'Ford',
      model: 'Ranger',
      badge: 'Raptor',
    },
    bmw: {
      make: 'BMW',
      model: '130d',
      badge: 'xDrive 26d',
    },
    tesla: {
      make: 'Tesla',
      model: 'Model 3',
      badge: 'Performance',
    },
  };

  const MODELS = {
    'ford': {
      'Ranger': ['Raptor', 'Raptor x', 'wildtrak'],
      'Falcon': ['XR6', 'XR6 Turbo', 'XR8'],
      'Falcon Ute': ['XR6', 'XR6 Turbo'],
    },
    'bmw': {
      '130d': ['xDrive 26d', 'xDrive 30d'],
      '240i': ['xDrive 30d', 'xDrive 50d'],
      '320e': ['xDrive 75d', 'xDrive 80d', 'xDrive 85d'],
    },
    'tesla': {
      'Model 3': ['Performance', 'Long Range', 'Dual Motor'],
    },
  };

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    badge: '',
    logbook: null,
  });

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setFormData({ make, model: '', badge: '' });
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setFormData({ ...formData, model, badge: '' });
  };

  const handleBadgeChange = (e) => {
    const badge = e.target.value;
    setFormData({ ...formData, badge });
  };

  const handleLogbookUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, logbook: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4001/api/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        console.log('Form submitted successfully');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  const makes = Object.keys(MODELS);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="makeSelect">
        <Form.Label>Select Make</Form.Label>
        <Form.Select name="make" onChange={handleMakeChange} value={formData.make}>
          <option value="">Select Make</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      {formData.make && (
        <>
          <Form.Group controlId="modelSelect">
            <Form.Label>Select Model</Form.Label>
            <Form.Select name="model" onChange={handleModelChange} value={formData.model}>
              <option value="">Select Model</option>
              {Object.keys(MODELS[formData.make]).map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          {formData.model && (
            <>
              <Form.Group controlId="badgeSelect">
                <Form.Label>Select Badge</Form.Label>
                <Form.Select name="badge" onChange={handleBadgeChange} value={formData.badge}>
                  <option value="">Select Badge</option>
                  {MODELS[formData.make][formData.model].map((badge) => (
                    <option key={badge} value={badge}>
                      {badge}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </>
          )}
        </>
      )}
      <Form.Group controlId="logbookUpload">
        <Form.Label>Upload Logbook</Form.Label>
        <InputGroup>
          <Form.Control type="file" onChange={handleLogbookUpload} />
        </InputGroup>
      </Form.Group>
      <Button type="submit">Submit</Button>
      {/* Link to the common products page */}
      <div className='m-3 '>
        <Link to="/products/ford" className="btn btn-secondary m-2">
          View Ford Common Products
        </Link>
      </div>
      <div className='m-3 '>
        <Link to="/products/bmw" className="btn btn-secondary m-2">
          View BMW Common Products
        </Link>
      </div>
      <div className='m-3 '>
        <Link to="/products/tesla" className="btn btn-secondary m-2">
          View TESLA Common Products
        </Link>
      </div>
    </Form>
  );
};

export default VehicleSelectionForm;
