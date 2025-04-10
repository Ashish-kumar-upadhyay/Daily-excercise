import React from 'react';
import ChildComponent from './ChildComponent';

const MiddleComponent = () => {
  return (
    <div className="middle-component">
      <h3>Middle Component</h3>
      <p>This component sits in the middle of our component tree.</p>
      <div className="component-container">
        <ChildComponent />
      </div>
    </div>
  );
};

export default MiddleComponent; 