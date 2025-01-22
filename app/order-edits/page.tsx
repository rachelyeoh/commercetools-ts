import React from 'react';
import GetOrderEdit from './get/GetOrderEdit';
import CreateOrderEdit from './create/CreateOrderEdit';

const page = () => {
  return (
    <div>
      <CreateOrderEdit />
      <GetOrderEdit />
    </div>
  );
};

export default page;
