import React from 'react';
import CreateTaxCategory from './create/CreateTaxCategory';
import GetTaxCategory from './get/GetTaxCategory';
import DeleteTaxCategory from './delete/DeleteTaxCategory';

const page = () => {
  return (
    <div>
      <CreateTaxCategory />
      <DeleteTaxCategory />
      <GetTaxCategory />
    </div>
  );
};

export default page;
