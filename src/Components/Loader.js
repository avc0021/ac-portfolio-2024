import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

const Loader = () => {
  return (
    <div className="loader">
      <DotLoader
        color="#113c87"
        loading={true}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

