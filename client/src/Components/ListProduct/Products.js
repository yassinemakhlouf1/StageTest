import React from "react";
import Select from 'react-select'


export default function Products() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
      const MyComponent = () => (
        <Select options={options} />
      
  );
}