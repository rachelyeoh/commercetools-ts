import React from 'react';
import GetCart from './get/GetCart';
import CreateCart from './create/CreateCart';
import UpdateCart from './update/UpdateCart';

const page = () => {
  return (
    <div>
      <CreateCart />
      <UpdateCart />
      <GetCart />
    </div>
  );
};

export default page;
