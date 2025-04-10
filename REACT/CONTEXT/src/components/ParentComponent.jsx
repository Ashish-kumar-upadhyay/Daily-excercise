import React from 'react';
import MiddleComponent from './MiddleComponent';

const ParentComponent = () => {
  return (
    <div className="parent-component">
      <h2>Parent Component</h2>
      <p>This is the top-level component in our structure.</p>
      <div className="component-container">
        <MiddleComponent />
      </div>
    </div>
  );
};

export default ParentComponent; 