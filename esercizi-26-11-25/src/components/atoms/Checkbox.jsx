import React from 'react';

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="checkbox"
    />
  );
};

export default Checkbox;