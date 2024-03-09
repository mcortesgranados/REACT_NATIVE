// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

// LazyLoadingImage.js

import React, { useState, useEffect } from 'react';

const LazyLoadingImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (isVisible && !imageSrc) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When image is in view
            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
    }

    return () => {
      didCancel = true;
      if (observer) observer.disconnect();
    };
  }, [isVisible, imageSrc, src]);

  return (
    <img
      src={imageSrc ? imageSrc : ''}
      alt={alt}
      style={{ opacity: imageSrc ? 1 : 0, transition: 'opacity 1s linear', width: '100%' }}
      onLoad={() => setIsVisible(true)}
    />
  );
};

export default LazyLoadingImage;
