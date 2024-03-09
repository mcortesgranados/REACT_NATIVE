// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

import { Link } from 'react-router-dom';

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        <li><Link to="/products/1">Product 1</Link></li>
        <li><Link to="/products/2">Product 2</Link></li>
        {/* Add more products as needed */}
      </ul>
    </div>
  );
}

export default ProductList;
