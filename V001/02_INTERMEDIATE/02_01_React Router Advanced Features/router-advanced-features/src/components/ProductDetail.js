// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

import { useParams } from 'react-router-dom';

function ProductDetail() {
  let { id } = useParams();
  // Use the id parameter to fetch product details or perform other actions
  return <h2>Product Detail - ID: {id}</h2>;
}

export default ProductDetail;
