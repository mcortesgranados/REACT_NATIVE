// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React from 'react';

function ComponentWithError() {
  // Simulating an error by accessing a non-existent property
  const data = { name: 'John Doe' };
  console.log(data.nonExistentProperty); // This will throw an error

  return (
    <div>
      <h2>Component With Error</h2>
      {/* This will never render due to the error thrown above */}
      <p>This component may throw an error.</p>
    </div>
  );
}

export default ComponentWithError;
