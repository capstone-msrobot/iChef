import React from 'react';

const ListSteps = props => (
  <ol>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ol>
);

export default ListSteps;