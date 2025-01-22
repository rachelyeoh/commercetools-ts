import React from 'react';
import GetProduct from './get/GetProduct';
import CreateProduct from './create/CreateProduct';

const page = () => {
  return (
    <div>
      <CreateProduct />
      <GetProduct />
    </div>
  );
};

export default page;
