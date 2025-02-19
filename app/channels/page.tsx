import React from 'react';
import GetChannel from './get/GetChannel';
import CreateChannel from './create/CreateChannel';

const page = () => {
  return (
    <div>
      <CreateChannel />
      <GetChannel />
    </div>
  );
};

export default page;
