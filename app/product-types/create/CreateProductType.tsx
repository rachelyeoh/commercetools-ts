import React from 'react';
import { productTypeCreate } from './productTypeCreate';

const textInputHint = 'MultiLine'; //Options: SingleLine, MultiLine

const attributeConstraintEnum = 'SameForAll';

const attributeType = { name: 'text' };

const attributeDefinitionDraft = [
  {
    type: attributeType,
    name: 'Warm-winter-boots',
    label: { en: 'warm winter boots' },
    isRequired: false,
    attributeConstraint: attributeConstraintEnum,
    inputTip: { en: 'female boots winter' },
    inputHint: textInputHint,
    isSearchable: true,
  },
];

const productTypeDraft = {
  key: 'winter-boots',
  name: 'Winter Boots',
  description: 'Boots to wear during winter',
  attributes: attributeDefinitionDraft,
};

const CreateProductType = async () => {
  const response = await productTypeCreate(productTypeDraft);
  const responseBody = response?.body?.productType;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      {/* <h2>{JSON.stringify(response)}</h2> */}
      {/************* Created Product Type ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Product Type Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        {/* <p>
          <span className="font-bold">attributes: </span>
          {responseBody?.attributes}
        </p> */}
        <p className="font-semibold text-orange-600">ATTRIBUTES:</p>
        <p>
          <span className="font-bold">attributeConstraint: </span>
          {JSON.stringify(responseBody?.attributes?.attributeConstraint)}
        </p>
        <p>
          <span className="font-bold">displayGroup: </span>
          {JSON.stringify(responseBody?.attributes?.displayGroup)}
        </p>
        <p>
          <span className="font-bold">inputHint: </span>
          {JSON.stringify(responseBody?.attributes?.inputHint)}
        </p>
        <p>
          <span className="font-bold">isRequired: </span>
          {JSON.stringify(responseBody?.attributes?.isRequired)}
        </p>
        <p>
          <span className="font-bold">isSearchable: </span>
          {JSON.stringify(responseBody?.attributes?.isSearchable)}
        </p>
        <p>
          <span className="font-bold">label: </span>
          {JSON.stringify(responseBody?.attributes?.label)}
        </p>
        <p>
          <span className="font-bold">name: </span>
          {JSON.stringify(responseBody?.attributes?.name)}
        </p>
        <p>
          <span className="font-bold">type: </span>
          {JSON.stringify(responseBody?.attributes?.type)}
        </p>
        <p className="font-semibold text-orange-600">END OF ATTRIBUTES</p>
        <p>
          <span className="font-bold">classifier:</span>{' '}
          {responseBody?.classifier}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {responseBody?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(responseBody?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(responseBody?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {JSON.stringify(responseBody?.id)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {JSON.stringify(responseBody?.key)}
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
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(responseBody?.name)}
        </p>
        <p>
          <span className="font-bold">version: </span> {responseBody?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt: </span>{' '}
          {responseBody?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created Product Type ***************/}
    </div>
  );
};

export default CreateProductType;
