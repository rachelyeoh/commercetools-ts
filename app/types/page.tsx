import React from 'react';
import GetType from './get/GetType';
import CreateType from './create/CreateType';

const page = () => {
  return (
    <div>
      <CreateType />
      <GetType />
    </div>
  );
};

export default page;
