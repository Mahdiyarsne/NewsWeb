import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#000');

  const cssLoad = {
    margin: '50px auto',
    textAling: 'center',
  };

  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={cssLoad}
      size={150}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
};

export default Loader;
