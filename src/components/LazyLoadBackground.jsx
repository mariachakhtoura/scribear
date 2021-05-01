import React, { useState, useEffect } from 'react';

function LazyLoadBackground({ source, ...props }) {
  const [src, setSrc] = useState();

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = source;

    imageLoader.onload = () => {
      setSrc(source);
    };
  }, []);

  return src ? (
    <div {...props} style={{ backgroundImage: `url(${src})` }} />
  ) : (
    <div {...props}>
      <div className="lds-hourglass"></div>
    </div>
  );
}

export default LazyLoadBackground;
