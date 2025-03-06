// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React from 'react';
import ProductCard from './ProductCard'; // Proposed Name: ProductCard.js

function App() {
  return (
    <div className="App">
      <ProductCard 
        productName="Product Name"
        description="Product Description"
        price={19.99}
      />
    </div>
  );
}

export default App;
