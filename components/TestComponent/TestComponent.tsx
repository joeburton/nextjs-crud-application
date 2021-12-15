import React from 'react';

const TestComponent = ({ gender, name, dob }) => {
  return (
    <div data-testid='personal-details'>
      {name}, {dob}, {gender}
    </div>
  );
};

export default TestComponent;
