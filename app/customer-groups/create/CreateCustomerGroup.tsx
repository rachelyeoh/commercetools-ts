import React from 'react';
import { customerGroupCreate } from './customerGroupCreate';

const customerDraft = {
  key: 'vipCustomerGroup',
  groupName: 'vip-customer-group',
};

const CreateCustomerGroup = async () => {
  const response = await customerGroupCreate(customerDraft);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      <h2>{JSON.stringify(response)}</h2>
      {/************* Created Customer ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Customer Group Details
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
      </div>
      {/************* End of Created Customer ***************/}
    </div>
  );
};

export default CreateCustomerGroup;
