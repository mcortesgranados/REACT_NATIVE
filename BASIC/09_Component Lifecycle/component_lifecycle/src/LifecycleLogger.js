// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React, { Component } from 'react';

class LifecycleLogger extends Component {
  // Lifecycle method called after the component has been mounted
  componentDidMount() {
    console.log('Component mounted');
  }

  // Lifecycle method called after the component has been updated
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Logger</h2>
        <p>This component logs lifecycle methods.</p>
      </div>
    );
  }
}

export default LifecycleLogger;
