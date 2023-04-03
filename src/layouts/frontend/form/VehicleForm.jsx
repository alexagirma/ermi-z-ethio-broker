import React, { useState } from 'react';
import './VehicleForm.css';

function VehicleForm() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('new');
  const [transmission, setTransmission] = useState('automatic');
  const [price, setPrice] = useState('');
  const [photos, setPhotos] = useState([]);

  function handleMakeChange(event) {
    setMake(event.target.value);
  }

  function handleModelChange(event) {
    setModel(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function handleMileageChange(event) {
    setMileage(event.target.value);
  }

  function handleConditionChange(event) {
    setCondition(event.target.value);
  }

  function handleTransmissionChange(event) {
    setTransmission(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handlePhotosChange(event) {
    setPhotos(event.target.files);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Validate form data
    // Prepare data for submission
    // Send data to server
  }

  return (
    <div className="vehicle-form">
      <h1>Post a Vehicle Ad</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input type="text" value={make} onChange={handleMakeChange} required />
        </label>
        <label>
          Model:
          <input type="text" value={model} onChange={handleModelChange} required />
        </label>
        <label>
          Year:
          <input type="number" value={year} onChange={handleYearChange} required />
        </label>
        <label>
          Mileage:
          <input type="number" value={mileage} onChange={handleMileageChange} />
        </label>
        <label>
          Condition:
          <select value={condition} onChange={handleConditionChange}>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </label>
        <label>
          Transmission:
          <select value={transmission} onChange={handleTransmissionChange}>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} required />
        </label>
        <label>
          Photos:
          <input type="file" multiple onChange={handlePhotosChange} />
        </label>
        <button type="submit">Post Ad</button>
      </form>
    </div>
  );
}

export default VehicleForm;
