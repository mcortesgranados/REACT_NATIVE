
// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // In the constructor, we initialize the component's state with hasError set to false.
    this.state = { hasError: false };
  }

  // This lifecycle method catches errors during rendering
  static getDerivedStateFromError(error) {
    // We implement the static getDerivedStateFromError method, which is a lifecycle method that is called after an error has been thrown by a child component during rendering. It updates the state to indicate that an error has occurred.
    return { hasError: true };
  }

  // This lifecycle method catches errors during component updates
  componentDidCatch(error, errorInfo) {
    // We implement the componentDidCatch method, which is a lifecycle method that is called after an error has been thrown by a child component during updating. Here, you can log the error to an error reporting service.
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    // In the render method, we check if an error has occurred. If so, we render an error message. Otherwise, we render the children components as normal.
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    // You can wrap components that you want to be covered by the error boundary with this ErrorBoundary component to catch errors within that part of your application.
    return this.props.children;
  }
}

export default ErrorBoundary;
