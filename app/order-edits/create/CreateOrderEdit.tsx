import React from 'react';
import { orderEditCreate } from './orderEditCreate';

const stagedOrderUpdateAction = [
  {
    action: 'setOrderNumber',
    orderNumber: '918273',
  },
];

const orderReference = {
  id: 'c8a87a8b-0537-4895-9899-cea5630351f3',
  typeId: 'order',
};

const orderEditDraft = {
  key: 'order-edit-2',
  resource: orderReference,
  stagedActions: stagedOrderUpdateAction,
  comment: 'add a new order number',
  dryRun: true, //Set to true if you want to peview the edited Order first without persisting it (dry run). A dry run allows checking for potential errors when trying to apply the stagedActions. Default: false
};

const CreateOrderEdit = async () => {
  const response = await orderEditCreate(orderEditDraft);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      {/* <h2>{JSON.stringify(response)}</h2> */}
      {/************* Created Cart ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Order Edit Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        <p>
          <span className="font-bold">comment: </span>
          {responseBody?.comment}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {responseBody?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(responseBody?.createdBy)}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(responseBody?.id)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(responseBody?.key)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(responseBody?.lastModifiedAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(responseBody?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">resource: </span>{' '}
          {JSON.stringify(responseBody?.resource)}
        </p>
        <p>
          <span className="font-bold">result: </span>{' '}
          {JSON.stringify(responseBody?.result)}
        </p>
        <p>
          <span className="font-bold">stagedActions: </span>{' '}
          {JSON.stringify(responseBody?.stagedActions)}
        </p>
        <p>
          <span className="font-bold">version: </span>{' '}
          {JSON.stringify(responseBody?.version)}
        </p>
      </div>
      {/************* End of Created Cart ***************/}
    </div>
  );
};

export default CreateOrderEdit;
