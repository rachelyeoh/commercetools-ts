// 'use client';

import React from 'react';
import CreateCustomer from './create/CreateCustomer';
import GetCustomer from './get/GetCustomer';
import UpdateCustomer from './update/UpdateCustomer';

const page = () => {
  return (
    <div>
      <CreateCustomer />
      <UpdateCustomer />
      <GetCustomer />
    </div>
  );
};

export default page;
