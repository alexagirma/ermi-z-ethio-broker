import React, { useState } from 'react';
import VehicleForm from '../../layouts/frontend/form/VehicleForm';
import PropertyForm from '../../layouts/frontend/form/PropertyForm';
import StockProductForm from '../../layouts/frontend/form/StockProductForm';


function ProductForm() {
  const [category, setCategory] = useState('Add post');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
      <option value="SelectForm">Select Category</option>

        <option value="car">Car</option>
        <option value="property">Property</option>
        <option value="stock">Stock</option>


      </select>

      {category === 'car' && <VehicleForm />}
      {category === 'property' && <PropertyForm />}
      {category === 'stock' && <StockProductForm />}
    </div>
  );
}

export default ProductForm;
