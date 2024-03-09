// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

// App.js

import React from 'react';
import LazyLoadingImage from './LazyLoadingImage';

const App = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <div style={{ height: '1000px' }}>
        Scroll down to see lazy loading in action!
      </div>
      <LazyLoadingImage
        src="https://tse3.mm.bing.net/th?id=OIP.R1zWVsxQHERyhdH-50VNuwHaHa&pid=Api&P=0&h=220http://digitalcommunications.wp.st-andrews.ac.uk/files/2019/04/JPEG_compression_Example.jpghttps://www.americanchronicles.news/wp-content/uploads/2022/07/LIVE-NASA-reveals-new-high-resolution-photos-taken-by-the-James.jpg"
        alt="Lazy Loaded Image"
      />
    </div>
  );
};

export default App;
