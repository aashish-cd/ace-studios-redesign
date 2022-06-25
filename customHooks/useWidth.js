import React, { useState, useEffect } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(window?.innerWidth);
  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
    return handleWidth;
  }, []);
  return width;
};

export default useWidth;
