// 'use client';

import React from 'react';
import CreateImportContainer from './create/CreateImportContainer';
import GetImportContainer from './get/GetImportContainer';

const page = () => {
  return (
    <div>
      <CreateImportContainer />
      <GetImportContainer />
    </div>
  );
};

export default page;
