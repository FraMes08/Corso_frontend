import React from 'react';
import Button from '../atoms/Button';

const FilterGroup = ({ filter, setFilter }) => {
  const filters = [
    { label: 'Tutti', value: 'all' },
    { label: 'Attivi', value: 'active' },
    { label: 'Completati', value: 'completed' },
  ];

  return (
    <div className="filter-group">
      {filters.map((f) => (
        <Button
          key={f.value}
          onClick={() => setFilter(f.value)}
          
          variant={filter === f.value ? 'primary' : 'secondary'}
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
};

export default FilterGroup;