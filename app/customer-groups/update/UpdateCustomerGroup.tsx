import React from 'react';
import { customerGroupUpdate } from './customerGroupUpdate';

const postBody = {
  // The CustomerUpdate is the object within the body
  body: {
    // The version of a new Customer is 1. This value is incremented every time an update action is applied to the Customer. If the specified version does not match the current version, the request returns an error.
    version: 7,
    //Check update actions page to see what can be updated: https://docs.commercetools.com/api/projects/customers#update-actions
    actions: [
      //   {
      //     version: '1',
      //     actions: [
      //       {
      //         action: 'setCustomType',
      //         type: {
      //           id: '', //need to substitue with actual id of type - need to ensure type exist first
      //           typeId: 'customer-group',
      //         },
      //         fields: {
      //           sector: 'IT',
      //         },
      //       },
      //     ],
      //   },
      {
        action: 'changeName',
        name: 'theNewVIPGroup',
      },
    ],
  },
};

const UpdateCustomerGroup = async () => {
  const customerGroupId = 'b199d527-099a-4efa-84fd-3eec59e780a3';
  const response = await customerGroupUpdate('id', customerGroupId, postBody);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      <h2>{JSON.stringify(response)}</h2>
      {/************* Created Customer ***************/}
      <div className="ring-2 ring-purple-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-purple-100">
          Updated Customer Group Details
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

export default UpdateCustomerGroup;
