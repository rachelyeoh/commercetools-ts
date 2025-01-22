import React from 'react';
import CreateCustomerGroup from './create/CreateCustomerGroup';
import GetCustomerGroup from './get/GetCustomerGroup';
import UpdateCustomerGroup from './update/UpdateCustomerGroup';

const page = () => {
  return (
    <div>
      <CreateCustomerGroup />
      <UpdateCustomerGroup />
      <GetCustomerGroup />
    </div>
  );
};

export default page;
