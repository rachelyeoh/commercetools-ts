import React from 'react';
import { taxCategoryCreate } from './taxCategoryCreate';

const taxRateDraft = [
  {
    key: 'taxRate-10-custom',
    name: '10% tax',
    amount: 0.1,
    includedInPrice: false,
    country: 'AU',
    state: 'VIC',
  },
];

const taxCategoryDraft = {
  key: 'GST-10-custom',
  name: 'GST-custom',
  description: 'Value-added tax applied to the sale of goods and services.',
  rates: taxRateDraft,
};

const CreateTaxCategory = async () => {
  const response = await taxCategoryCreate(taxCategoryDraft);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      <h2>{JSON.stringify(response)}</h2>
      {/************* Created Customer ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Tax Category Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        <p>
          <span className="font-bold">id: </span>
          {responseBody?.id}
        </p>
        <p>
          <span className="font-bold">version:</span> {responseBody?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {responseBody?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {responseBody?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {responseBody?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(responseBody?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(responseBody?.createdBy)}
        </p>
        <p>
          <span className="font-bold">name: </span> {responseBody?.name}
        </p>
        <p>
          <span className="font-bold">key: </span> {responseBody?.key}
        </p>
        <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(responseBody?.description)}
        </p>
        <p>
          <span className="font-bold">rates: </span>{' '}
          {JSON.stringify(responseBody?.rates)}
        </p>
      </div>
      {/************* End of Created Customer ***************/}
    </div>
  );
};

export default CreateTaxCategory;
