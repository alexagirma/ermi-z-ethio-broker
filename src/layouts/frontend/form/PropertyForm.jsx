import React, { useState } from 'react';
import './PropertyForm.css'


function PropertyForm() {
  const [propertyType, setPropertyType] = useState("");
  const [listingType, setListingType] = useState('');
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');

  const [kitchenType, setKitchenType] = useState('');
  const [photos, setPhotos] = useState([]);

  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission with API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Property Details</h2>

      <label>
        Property Type:
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="">Select Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
        </select>
      </label>
      <label htmlFor="listing-type">Listing Type:</label>
          <select id="listing-type" value={listingType} onChange={(e) => setListingType(e.target.value)}>
            <option value="">-- Select Listing Type --</option>
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>

      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>

      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>

      <label>
        State:
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>

      <label>
        Bedrooms:
        <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
      </label>

      <label>
        Bathrooms:
        <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
      </label>

      <label htmlFor="size">Size (sqft)</label>
      <input
        type="number"
        id="size"
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />

      <label htmlFor="price">Price (ETB)</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <label>
        Kitchen Type:
        <input type="text" value={kitchenType} onChange={(e) => setKitchenType(e.target.value)} />
      </label>
      

      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label htmlFor="photos">Photos</label>
      <input
        type="file"
        id="photos"
        onChange={(event) => setPhotos(event.target.files)}
        multiple
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default PropertyForm;